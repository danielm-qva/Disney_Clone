import { useEffect } from "react";
import styled from "styled-components";
import store from "../redux/store/store";
import { useSelector } from "react-redux";
import { ImPlay3 , TfiPlus , AiOutlineUsergroupDelete } from "react-icons/all";

function DetailMovie() {
  const detailMovie = useSelector((store: any) => store.movieDetail);

  return (
    <Container>
      <Backgraund>
        <img src={detailMovie.cardImg} alt={detailMovie.title} />
      </Backgraund>
      <ImgTitle>
        <img src={detailMovie.titleImg} alt="carImg" />
      </ImgTitle>
      <GrupButtom>
        <Controls>
          <ButtonPlay>
          <ImPlay3 />
             PLAY
          </ButtonPlay>
          <ButtonTrailer>
          <ImPlay3 />
             TRAILER
          </ButtonTrailer>
          <Addlist>
           <TfiPlus />
          </Addlist>

          <GrupWhatch>
            <AiOutlineUsergroupDelete />
             </GrupWhatch>
        </Controls>
    
        <SubTitle>
            {detailMovie.subTitle}
        </SubTitle>
        <Description>
            {detailMovie.description}
        </Description>
      </GrupButtom>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vk - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);
`;
const Backgraund = styled.div`
  top: 0px;
  left: 0px;
  opacity: 0.8;
  position: fixed;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vk;

    @media (max-width: 768px) {
      position: initial;
    }
  }
`;

const ImgTitle = styled.div`
  display: flex;
  align-item: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-buttom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const GrupButtom = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const ButtonPlay = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.5px;
  text-align: center;
  border: none;
  background: rgb(249,249,249);
  color: rgb(0 , 0 ,0);

    img {
        width: 32px;
    }

    &: hover{
        background: rgb(198 , 198 , 198);
    }

    @media(max-width: 768px){
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img{ 
            width: 25px;
        }
    }
`;

const ButtonTrailer = styled(ButtonPlay)`
background: rgba(0 , 0, 0, 0.3);
border: 1px solid rgb(249 , 249 ,249);
color: rgb(249 , 249 , 249);

ImPlay3 {
    color: white;
}

&: hover{
    background: rgb(198 , 198 , 198);
    color : black;
}
`;

const Addlist = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0 ,0 , 0 , 0.6);
    border-radius: 50px;
    border: 2px solid white;
    cursor: pointer;
    
    TfiPlus {
           color : white;
    }
 `;

 const GrupWhatch = styled(Addlist)`
 background-color: black;

 AiOutlineUsergroupDelete{ 
    width: 100%;
 }
 `
 const SubTitle = styled.div`
   color: rgb(249 , 249 , 249);
   font-size: 15px;
   min-height: 20px;

   @media(max-widtg: 768px) {
       font-size: 12px;
   }
 `;

 const Description = styled.div`
   line-height: 1.4;
   font-size: 20px;
   padding: 16px 0px;
   color: rgb(249 , 249, 249);

   @media( max-widtg: 768px) {
    font-size: 14px;
   }
  `

export default DetailMovie;
