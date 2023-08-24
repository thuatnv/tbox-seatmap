import styled from "styled-components";

export const SeatmapWrapper = styled.div`
  overflow: hidden;
  overscroll-behavior: none;

  /* DONT TOUCH DEFAULT STYLES */
  border: 1px solid #fff;
  border-radius: 0.25rem;
  background-color: #000;
  /* DONT TOUCH DEFAULT STYLES */

  .stage-container {
    position: relative;
    border-radius: 0.25rem;
  }

  .btns-container {
    background-color: #00000060;
    position: absolute;

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
`;
