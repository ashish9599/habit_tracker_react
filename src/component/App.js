import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import { Page404, WeekView } from "../pages";
const App=()=> {
  return (
    <div style ={{width: "70%",
      position: "relative",
      left: "20%"}}>
      
    <BrowserRouter>
    <NavBar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="habit/week" element={<WeekView/>}/>
    <Route exact path="*" element={<Page404/>}/>
    
  </Routes>
      
    </BrowserRouter>
    </div>
    
  );
}

export default App;
