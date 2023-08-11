import styled from "styled-components";

type SeatmapWrapperProps = {
  readyToTouch?: boolean;
};

export const SeatmapWrapper = styled.div<SeatmapWrapperProps>`
  /* background-color: #000; */

  #stage-container {
    /* background-color: cyan; */
    position: relative;
    border-radius: 0.25rem;

    border-top: 3px solid;
    border-bottom: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(38, 163, 98, 1) 25%,
      rgba(45, 194, 117, 1) 75%,
      rgba(0, 0, 0, 0.95) 100%
    );

    #btns-container {
      position: absolute;
      top: 0.8rem;
      left: 0.8rem;
      /* background-color: lime; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      button {
        width: 2.5rem;
        height: 2.5rem;
        outline: none;
        border: none;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00000080;
        border: 1px solid #2dc275;
        cursor: pointer;
        z-index: 1000;

        img {
          width: 100%;
          height: 100%;
          padding: 0.5rem;
        }

        :hover {
          background-color: #d3d3d340;
        }
      }

      #reset {
        border: 1px solid #a6a6b0;
      }
    }
  }
`;
