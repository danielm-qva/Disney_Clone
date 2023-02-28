import styled from "styled-components";
import { VscHome, VscSearch, VscAdd , VscStarEmpty  } from "react-icons/vsc";
import {RiMovie2Line} from 'react-icons/ri'
import {MdOutlineLocalMovies} from 'react-icons/md'
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
function Navbar() {

    const handleAuth = () => {
       signInWithPopup(auth,provider).then(res => {
         console.log(res)
       })
    }
  
  return (
    <Nav>
      <Logo>
        <img src="/img/logo.svg" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <span><VscHome/> HOME</span>
        </a>
        <a href="/home">
          <span><VscSearch /> SEARCH</span>
        </a>
        <a href="/home">
          <span><VscAdd/> WATCHLIST</span>
        </a>
        <a href="/home">
          <span><VscStarEmpty/> ORIGINAL</span>
        </a>
        <a href="/home">
          <span><RiMovie2Line/> MOVIE</span>
        </a>
        <a href="/home">
          <span><MdOutlineLocalMovies/> SERIE</span>
        </a>
    
      </NavMenu>
      <Login onClick={handleAuth}>LOGIN</Login>
    </Nav>
  );
}

const Nav = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 70px;
  background-color: #090b12;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: flex;
  justify-content: center;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
     align-items: center;
     padding: 0 12px;
  }

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }

  spam {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.20px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
  }

  &:before {
    background-color: rgb(249, 249, 249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content : "" ,
    height: 2px ;
    left: 0px;
    opacity : 0;
    position: absolute;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46 , 0.45 , 0.94) 0s; 
    visibility: visible ;
    width: auto;
  }

  &:hover {
     span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
     }
  }
`;

const Login = styled.button`
  font-weight: bold;
  padding:  8px 16px;
  border: 1px solid white;
  border-radius: 4px;
  background: transparent;
  color: #f9f9f9;
  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;

export default Navbar;
