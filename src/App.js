
import Header from "./components/Header";
import FoodForm from "./components/FoodForm";
import DisplayMatch from "./components/DisplayMatch";
import Card from "./components/UI/Card";

import { Route, Routes} from "react-router-dom";

import "./sass/globalStyles.scss"

function App() {

  return (

    <Card>
      <Header/>
        <Routes>
          <Route path="/" element={<FoodForm/>}/>
          <Route path="/displayMatch" element={<DisplayMatch/>} />
        </Routes>
    </Card>
    
  );
}

export default App;
