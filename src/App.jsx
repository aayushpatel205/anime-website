import React, { useEffect } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import { useDispatch } from "react-redux";
import AnimePage from "./pages/AnimePage";
import Popular from "./pages/Popular";
import Airing from "./pages/Airing";
import Upcoming from "./pages/Upcoming";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className="pb-4">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/popular" element={<Popular />} />
          <Route path="/airing" element={<Airing />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/card/:card" element={<AnimePage />} />
      </Routes>
    </div>
  );
};

export default App;
