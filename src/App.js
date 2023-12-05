import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AllContainer from "./components/AllContainer";

export default function App() {

  return (
    <div>
     <AllContainer/>
    </div>
  );
}
