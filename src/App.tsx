import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import { useDispatch } from "react-redux";
import { useFecthJson } from "./utils/useFecth";
import { useEffect } from "react";
import {
  setMovieNew,
  setMovieOriginals,
  setMovieRecommend,
  setMovieTrending,
} from "./redux/slice/movieSlice";
import Originals from "./components/Oginals";
import DetailMovie from "./components/DetailsMovie";

function App() {
  const dispacht = useDispatch();
  const { listNew, listtrending, listOriginals, listRecommend } =
    useFecthJson();

  useEffect(() => {
    dispacht(setMovieNew({ list: listNew }));
    dispacht(setMovieOriginals({ list: listOriginals }));
    dispacht(setMovieRecommend({ list: listRecommend }));
    dispacht(setMovieTrending({ list: listtrending }));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/originals" element={<Originals /> } />
        <Route path="/details" element={<DetailMovie />}/>
      </Routes>
    </>
  );
}

export default App;
