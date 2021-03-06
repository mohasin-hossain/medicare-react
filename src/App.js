import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/Home/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home/Home";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Header from "./Pages/Shared/Header";
import Doctors from "./Pages/Home/Doctors/Doctors";
import Footer from "./Pages/Shared/Footer/Footer";

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
          <Route path="/about" element={<About />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route
            path="/services/:serviceId"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
