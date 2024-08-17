import { Route, Routes } from "react-router-dom";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Home from "../views/Home";

export default function Routing() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
      <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
}
