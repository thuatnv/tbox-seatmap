import styled from "styled-components";

export const SeatmapWrapper = styled.div`
  /* background-color: #000; */
  /* overflow: hidden;
  overscroll-behavior: none; */

  border: 1px solid #2dc275;
  border-radius: 0.25rem;

  #stage-container {
    background-color: #a6a6b0;
    position: relative;
    border-radius: 0.25rem;

    /* border-top: 3px solid; */
    /* border-bottom: 3px solid; */
    /* border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(38, 163, 98, 1) 25%,
      rgba(45, 194, 117, 1) 75%,
      rgba(0, 0, 0, 0.95) 100%
    ); */

    #btns-container {
      background-color: #00000060;
      position: absolute;
      /* top: 0.8rem; */
      /* left: 0.8rem; */

      z-index: 50;
      padding: 0.2rem;
      border-radius: 0.2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.4rem;

      button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.2rem;
        background-color: transparent;
        border: 1px solid #2dc275;
        backdrop-filter: blur(0.2rem);
        transition: all 0.3s ease-in-out;
      }

      button:hover {
        background-color: #ffffff30;
      }

      button.disabled {
        border: 1px solid #a6a6b0;
        cursor: not-allowed;
        svg {
          path {
            fill: #a6a6b0;
          }
        }
      }

      button.disabled:hover {
        background-color: transparent;
      }
    }
  }
`;
