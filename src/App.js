import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'


function App() {
  return (
    <>
      <Navbar />
      <ProductList/>
      <Footer/>
    </>
  );
}

export default App;
