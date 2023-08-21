import SeatMap from "components/SeatMap";
import useGetData from "hooks/useGetData";
import { Data, Section } from "types/seatmap";
import { ClickedSeatData, Data as SectionData } from "types/section";

const showingId = 23;
const chosenId = 448;

const SampleApp = () => {
  const [data, error, loading] = useGetData<Data>(
    `/v1/events/showings/${showingId}/seatmap`
  );
  const [sectionData, sectionError, sectionLoading] = useGetData<SectionData>(
    `/v1/events/showings/${showingId}/sections/${chosenId}`
  );

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
          w={375}
          h={450}
          isDraggable
          isWheelable
          hasTools
          data={data?.result}
          chosenSectionId={chosenId}
          chosenSectionData={sectionData?.result}
          serviceLocation="mobile" // handle error TODO
          onSectionClick={(section: Section): void => {
            console.log({ section });
          }}
          onSeatClick={(seat): void => {
            console.log({ seat });
          }}
          onError={(err) => {
            console.log(err);
          }}
          onPostMessage={(postMsg) => {
            console.log({ postMsg });
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
