import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import ActorFilmo from "./pages/ActorFilmo";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Main/> }/>
            <Route path="/movie">
              <Route index element={ <MovieList/> }/>
              <Route path=":movieCd" element={ <MovieDetail/> }/>
              <Route path="actor" element={ <ActorFilmo/> }/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
