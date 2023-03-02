import styled from "styled-components";
import { Link } from "react-router-dom";
import list from "../disneyPlusMovie.json";
function Recomend() {
  const listRecomme = list.movies.filter((item) => item.type === "recommend");
  return (
    <Container>
      <h2>Recommended for you</h2>
      <Content>
        {listRecomme.map((item, index) => (
          <Wrap key={index}>
            <Link to="/">
              <img src={item.backgroundImg} alt={item.title} />
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
   img {
      width: 62.39%;
      border-radius: 15px;
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      border: 3px solid rgba(249, 249, 249, 0.1);
      &: hover {
         transform: scale(1.15);
         border-color : rgba(249 , 249 , 249 , 0.8);
         border: 2px solid rgb(249 , 249 , 249 , 0.8);
    }
   }

`;

export default Recomend;
