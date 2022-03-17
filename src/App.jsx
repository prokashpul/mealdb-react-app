import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mealitems from "./components/Mealposts/Mealitems";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <Mealitems></Mealitems>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
