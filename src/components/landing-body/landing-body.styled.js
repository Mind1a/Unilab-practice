import { styled } from "styled-components";
import { device } from "../../breakpoints";
import burger_image from "../../assets/burger-assets/body-landing-burger.png";
import burger_image_mobile from "../../assets/burger-assets/body-landing-burger-mobile.png";

export const SLandingBody = styled.main`
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: 0 2rem;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${device.md`
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 1.5rem;
  `}
`;

export const SHeroContainer = styled.section`
  padding: 0.5rem;
  max-width: 390px;

  p {
    font-size: 1.2rem;
    display: none;
  }

  ${device.md`
    h1 {
      font-weight: var(--fw-semibold);
      max-width: 390px; 
      font-size: 3rem;
      line-height: 3.6rem;
      margin-bottom: 1rem;
      span {
        display: block;
      }
    }

    p {
      display: block;
    }
  `}
`;

export const SImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    width: 75%;
  }

  a {
    color: var(--clr-white);
    line-height: 30px;
    font-size: var(--fs-h4);
    text-align: center;
    font-weight: 800;
    min-width: 180px;
    min-height: 180px;
    max-width: 100px;
    background-color: var(--clr-primary);
    display: flex;
    border-radius: 50%;
    padding: 3.75rem 2.5rem;
    transform: translate(50%, 100%);
    transition: ease-in 0.25s;

    &:hover {
      transform: translate(50%, 100%) scale(1.2);
    }

    &:focus-visible {
      outline: 2px solid var(--clr-primary);
      outline-offset: 2px;
    }
  }

  ${device.md`
    display: block;
    position: relative;

    a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 120px;
      min-height: 120px;
      width: 120px;
      height: 120px;
      justify-content: center;
      align-items: center;

      font-size: var(--fs-h6);
      line-height: 1.2rem;

      &:hover {
        transform: translate(-50%, -50%) scale(1.7);
      }  
    }
  `}
`;

export const SImage = styled.img`
  content: url(${burger_image});

  ${device.md`
    content: url(${burger_image_mobile});
  `}
`;
