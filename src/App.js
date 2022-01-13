import './App.css';
import Toolbar from "./components/toolbar/toolbar";
import {Route, Routes} from "react-router-dom";
import Nova from "./components/Nova/Nova";

function App() {
  return (
    <div className="App">
      <header>
            <Toolbar/>
      </header>
        <main>
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Nova/>}/>
                </Routes>
            </div>
        </main>
    </div>
  );
}

export default App;
