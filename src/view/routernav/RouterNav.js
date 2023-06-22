import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";

export default function RouterNav(){
    return(
    <Routes>
        <Route path="/" Component={HomeScreen}/> 
        <Route path="/detail" Component={DetailScreen}/> 
    </Routes>
    )
  }