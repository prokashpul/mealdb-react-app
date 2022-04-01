import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mealitems from "./components/Mealposts/Mealitems";
import FoodInfo from "./components/FoodInfo/FoodInfo";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Mealitems></Mealitems>}></Route>
        <Route path="/home" element={<Mealitems></Mealitems>}></Route>
        <Route path="food/:food" element={<FoodInfo></FoodInfo>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
