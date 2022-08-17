import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';
import RestaurantRegist from './pages/RestaurantRegist';

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/">
        <Route path="regist" element={ <RestaurantRegist/> }/>
        </Route>
        <Route path="/restaurant">
          <Route index element={<Restaurants/>}/>
          <Route path=":id" element={ <RestaurantDetail/> }/>
        </Route> 


      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
