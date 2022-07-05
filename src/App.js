import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/:serviceId" element={<ServiceDetails />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
