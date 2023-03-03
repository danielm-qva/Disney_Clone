import { Link } from "react-router-dom";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import list from '../disneyPlusMovie.json';
import { setDetailMovie } from "../redux/slice/moivedetails.Slice";
import {useSelector} from 'react-redux'; 


function Trending() {
    const listtrending = useSelector((store: any) => store.movie.trending);
    const dispacht = useDispatch()

    const setMovie = (movie : any) => {
          dispacht(setDetailMovie({
            backgroundImg: movie.backgroundImg,
            cardImg: movie.cardImg,
            description: movie.description,
            subTitle: movie.subTitle,
            title: movie.title,
            titleImg: movie.titleImg,
            type: movie.type
          }))
    }

    return (
      <Container>
        <h2>Trending</h2>
        <Content>
          {listtrending.map((item: any, index:number) => (
            <Wrap key={index}>
              <Link to={'/details'} >
                <img src={item.backgroundImg} alt={item.title} onClick={() => setMovie(item)} />
              </Link>
              
            </Wrap>
          ))}
        </Content>
      </Container>
    );
  }
  
  const Container = styled.div`
   margin-top: 40px;
    padding: 0 0 26px;
    margin-bottom : 40px;
  `;
  
  const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    heigt: fit-content;
  
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `;
  const Wrap = styled.div`
      paddding-top: 56.25%;
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      cursor: pinter;
      overflow: hidden;
      position: relative;
      border: 3px solid rgba(249, 249, 249, 0.1);
    
     img {
           inset: 0px;
           display : block ;
           width: -webkit-fill-available;
           object-fit: cover ;
           opacity: 1;
           transition : opacity 500ms  ease-in-out 0s;
           top: 0px;
           z-index : 1;
     }
     &: hover {
      transform: scale(1.05);
      border-color: rgba(249 , 249 , 249 , 0.8);
      border: 3px solid rgb(249 , 249 , 249 , 0.8);
  }
  
  `;

export default Trending;