import SeatMap from "components/SeatMap";
import useGetData from "hooks/useGetData";
import { Data, Section } from "types/seatmap";
import { ClickedSeatsData, Data as SectionData } from "types/section";

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
          w={700}
          h={700}
          isDraggable
          isWheelable
          hasTools
          data={data?.result}
          chosenSectionId={chosenId}
          chosenSectionData={sectionData?.result}
          onSectionClick={(section: Section): void => {
            console.log({ section });
          }}
          onSeatsClick={(seats: ClickedSeatsData): void => {
            console.log({ seats });
          }}
          onError={(err) => {
            console.log(err);
          }}
        />
      )}
      {data && (
        <SeatMap
          w={200}
          h={200}
          isMinimap
          data={data?.result}
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
