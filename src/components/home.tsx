import styled from "styled-components";
import NewDisney from "./NewDisney";
import Originals from "./Oginals";
import Recomend from "./Recomend";
import ImgSlider from "./Slider";
import Trending from "./Trending";
import Viewers from "./Viewers";

import {useDispatch} from 'react-redux';
import {useEffect} from 'react' ;
import { deleteDetailsMovie } from "../redux/slice/moivedetails.Slice";
 
function Home() {

    const dispacht = useDispatch();
       
    useEffect(() => {
      dispacht(deleteDetailsMovie());
    }, [])

  return (
    <>
      <Container>
        <ImgSlider />
        <Viewers />
        <Recomend />
        <NewDisney />
        <Originals />
        <Trending />
      </Container>
    </>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/img/home.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
