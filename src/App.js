import "./App.css";
import About from "./components/About/About";
import Academics from "./containers/Academics/Academics";
import Header from "./containers/Header/Header";
import Life from "./containers/Campus_Life/Life";
import Admission from "./containers/Admission/Admission";
import Footer from "./containers/Footer/Footer";
import Subfooter from "./containers/Subfooter/Subfooter";
import ExcelTableData from "./components/ExcelTableData";

function App() {
  return (
    <>
      <Header />
      <About />
      <Academics />
      <Life />
      <Admission />
      <Footer />
      <Subfooter />


      <ExcelTableData />
    </>
  );
}

export default App;
