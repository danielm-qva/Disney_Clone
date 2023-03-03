import styled from "styled-components";
import { VscHome, VscSearch, VscAdd, VscStarEmpty } from "react-icons/vsc";
import { RiMovie2Line } from "react-icons/ri";
import { MdOutlineLocalMovies } from "react-icons/md";
import { auth, provider } from "../config/firebase";
import { signInWithPopup, onAuthStateChanged , signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setSignOutState, setUserLoginDetail } from "../redux/slice/userSlice";
import store from "../redux/store/store";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const dispacht = useDispatch();
  const navigate = useNavigate();
  const islogin = useSelector((store: any) => store.user.isLogin);
  const photo = useSelector((store: any) => store.user.photo);
  const username = useSelector((store: any) => store.user.name);

  // useEffect(() => {
  //  onAuthStateChanged(auth ,async (user) => {
  //          if(user) {
  //             setUser(user);
  //             navigate('/home')
  //          }
  //  })
  // }, [username])

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        navigate('/home')
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const setUser = (user: any) => {
    dispacht(
      setUserLoginDetail({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        isLogin: true,
      })
    );
  };

  const handelOut = () => {
     signOut(auth).then((res) => {
         console.log(res);
      dispacht(setSignOutState())
       navigate('/')
     }).catch(error => {
      alert(error.message);
     })  
  };

  return (
    <Nav>
      <Logo>
        <img src="/img/logo.svg" />
      </Logo>
      {!islogin ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <span>
                <VscHome /> HOME
              </span>
            </Link>
            <Link to="/home">
              <span>
                <VscSearch /> SEARCH
              </span>
            </Link>
             <Link to={"/home"}>
              <span>
                <VscAdd /> WATCHLIST
              </span>
            </Link>
            <Link to="/originals">
              <span>
                <VscStarEmpty /> ORIGINAL
              </span>
            </Link>
            <Link to="/home">
              <span>
                <RiMovie2Line /> MOVIE
              </span>
            </Link>
            <Link to="/home">
              <span>
                <MdOutlineLocalMovies /> SERIE
              </span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImg src={photo} alt={username} />
            <DropDown>
            <span onClick={handelOut}>Logout</span>
            </DropDown>
          </SignOut>
        </>
      )}
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
      letter-spacing: 1.65px;
      font-size: 56px;
     }
  }
`;

const Login = styled.button`
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 4px;
  background: transparent;
  color: #f9f9f9;
  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top : 48px;
    background: rgb(19,19,19);
    box-shadow: rgb( 85 , 75 ,52 ,0.36) 6px 8px 6px 8px ;
    border-radius: 5px ;
    padding: 10px 10px ;
    margin: 5px 5px;
    font-size: 19px;
    letter-spacing: 4px;
    opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%50%;
    width: 100%;
  }

  &: hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Navbar;
