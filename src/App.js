import './App.css';
import Toolbar from "./components/toolbar/toolbar";
import {Route, Routes} from "react-router-dom";
import Nova from "./components/Nova/Nova";
import Product from "./components/product/product";
import NotFound from "./components/NotFound";
import Add from "./components/AddProduct/Add";
import Tv from "./components/tv/tv";
import Fridge from "./components/fridge/fridge";
import Cutter from "./components/cutter/cutter";

function App() {
  return (
    <div className="App">
      <header>
            <Toolbar/>
      </header>
        <main>
            <div className="p-4 container-md">
                <Routes>
                    <Route path="/" element={<Nova/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/product/add" element={<Add/>}/>
                    <Route path="/product/:id/edit" element={<Add/>}/>
                    <Route path="/tv" element={<Tv/>}/>
                    <Route path="/fridge" element={<Fridge/>}/>
                    <Route path="/cutter" element={<Cutter/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </main>
    </div>
  );
}

export default App;
