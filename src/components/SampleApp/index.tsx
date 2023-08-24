import SeatMap from "components/SeatMap";
import useGetData from "hooks/useGetData";
import { useCallback, useEffect, useState } from "react";
import { Data } from "types/seatmap";
import { Data as SectionData } from "types/section";

// for initial testing
// const showingId = 23;
// const chosenId = 448;

// for stage on click
const showingId = 164;
const chosenId = 457;

// for event 74
// const showingId = 125;
// const chosenId = 418;
// 404, 406

const SampleApp = () => {
  const [data, error, loading] = useGetData<Data>(
    `/v1/events/showings/${showingId}/seatmap`
  );
  const [sectionData, sectionError, sectionLoading] = useGetData<SectionData>(
    `/v1/events/showings/${showingId}/sections/${chosenId}`
  );

  const [selectedSeatsIds, setSelectedSeatsIds] = useState<number[]>([]);
  const [selectedSeatsData, setSelectedSeatsData] = useState({});

  const handleSelect = useCallback(
    (seatId?: number, seatData?: Record<string, string | number | boolean>) => {
      const newIds = [...selectedSeatsIds, seatId];
      setSelectedSeatsData({
        ...selectedSeatsData,
        [seatId as number]: seatData,
      });
      setSelectedSeatsIds(newIds as number[]);
    },
    [selectedSeatsData, selectedSeatsIds]
  );

  const handleDeselect = useCallback(
    (seatId?: number) => {
      const ids = selectedSeatsIds.slice();
      ids.splice(ids.indexOf(seatId as number), 1);
      setSelectedSeatsData(
        JSON.parse(
          JSON.stringify({
            ...selectedSeatsData,
            [seatId as number]: undefined,
          })
        )
      );
      setSelectedSeatsIds(ids);
    },
    [selectedSeatsData, selectedSeatsIds]
  );

  useEffect(() => {
    console.log({ selectedSeatsIds, selectedSeatsData });
  }, [selectedSeatsIds, selectedSeatsData]);

  if (loading || sectionLoading)
    return <div className="dark-wrap">Loading data...</div>;
  if (error || sectionError)
    return (
      <div className="dark-wrap">Opps! Error: {`${error || sectionError}`}</div>
    );

  return (
    <div className="App dark-wrap">
      {data && (
        <SeatMap
          // optionals
          isDraggable
          isWheelable
          hasTools
          // must have
          w={600}
          h={600}
          data={data?.result}
          serviceLocation="admin"
          // render section
          // chosenSectionId={chosenId}
          // chosenSectionData={sectionData?.result}
          // on seat click
          selectedSeatsIds={selectedSeatsIds}
          onSelectSeat={handleSelect}
          onDeselectSeat={handleDeselect}
          // mobile
          onPostMessage={(msg) => {
            console.log({ msg });
          }}
          // error
          onError={(err) => {
            console.log(err);
          }}
          onSectionClick={(sectionData) => {
            console.log(sectionData);
          }}
        />
      )}
      {data && (
        <SeatMap
          w={150}
          h={150}
          serviceLocation="web"
          data={data?.result}
          isMinimap
          chosenSectionId={chosenId}
          onError={(err) => {
            console.log(err);
          }}
        />
      )}
    </div>
  );
};

export default SampleApp;
