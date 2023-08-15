import SeatMapComponent from "components/SeatMap/SeatMapComponent";
import { initStageH, initStageW } from "components/SeatMap/constants";
import useGetData from "hooks/useGetData";
import { Data, Section } from "types/seatmap";
import { Data as SectionData } from "types/section";

const showingId = 23;
const chosenId = 445;
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
        <SeatMapComponent
          w={700 || initStageW}
          h={700 || initStageH}
          data={data?.result}
          chosenSectionId={chosenId}
          chosenSectionData={sectionData?.result}
          onSectionClick={(section: Section): void => {
            console.log({ section });
          }}
          getSeatsData={(
            data: Record<number, Record<string, string | number | boolean>>
          ): void => {
            if (data && Object.keys(data).length) {
              console.log(data);
            }
          }}
          isDraggable
          isWheelable
          hasTools
        />
      )}
      {dataMap && (
        <SeatMapComponent
          w={200}
          h={200}
          data={data?.result}
          chosenSectionId={chosenId}
          isMinimap
        />
      )}
    </div>
  );
};

export default SampleApp;

