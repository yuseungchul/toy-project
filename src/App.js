import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant">
          <Route index element={<Restaurants/>}/>
          <Route path=":id" element={ <RestaurantDetail/> }/>
        </Route> 


      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
