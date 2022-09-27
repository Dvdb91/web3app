//import logo from './logo.svg';
import './App.css';
//import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import About from "./pages/About";
import Login from "./pages/Login";
//import NavBar from './components/NavBar/navbar';
import Members from "./pages/Members";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="members" element={<Members />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}
export default App;