import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/img/viewers-disney.png" alt="disney" />
        <video autoPlay loop playsInline={true}>
          <source src="/video/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/img/viewers-pixar.png" alt="disney" />
        <video autoPlay loop playsInline={true}>
          <source src="/video/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/img/viewers-marvel.png" alt="" />
        <video autoPlay loop playsInline={true}>
          <source src="/video/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/img/viewers-starwars.png" alt="" />
        <video autoPlay loop playsInline={true}>
          <source src="/video/starwars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/img/viewers-national.png" alt="" />
        <video autoPlay loop playsInline={true}>
          <source src="/video/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px){
    
  }
`;


const Wrap = styled.div`
  width: 195px;
  height: 135px;
  margin: 10px 10px 5px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 37%) 0px 16px 10px -10px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    top: 0px;
    position:absolute;
    opacity: 0;
    z-index: -1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.15);
    border-color : rgba(249 , 249 , 249 , 0.8);
    
    video {
        opacity: 1;
        height: 100%;
        transition : opacity 500ms ease-out 0s;
    }
  }
  }
`;
export default Viewers;
