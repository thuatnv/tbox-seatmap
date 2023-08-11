import SeatMap from "components/SeatMap";
import { initStageH, initStageW } from "components/SeatMap/constants";
import useGetData from "hooks/useGetData";
import styled from "styled-components";
import { Data } from "types/seatmap";

const SampleAppWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #000; */
  gap: 1rem;

  .no-touch {
    cursor: "not-allowed";
  }
`;

const SampleApp = () => {
  const [data, error, loading] = useGetData<Data>(
    `/v1/events/showings/20/seatmap`
  );

  if (loading) return <div>Loading seatmap by showing ID...</div>;
  if (error) return <div>Opps! Error: {`${error}`}</div>;
  return (
    <SampleAppWrapper>
      {data && (
        <SeatMap
          w={initStageW}
          h={initStageH}
          data={data?.result}
          isDraggable
          isWheelable
          hasTools
        />
      )}
    </SampleAppWrapper>
  );
};

export default SampleApp;
