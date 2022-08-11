import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import About from "./pages/About";
import MenuDetail from './pages/MenuDetail';

function App() {
  /*  파라미터 값을 읽기 위한 react-router-dom의 hooks
      1. menu route 하위에 중첩으로 pathvariable의 값을 이용하여 MenuDetails를 랜더링

  */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Main/> }/>
            <Route path="about" element={ <About/> }/>
            <Route path="menu">
              <Route index element={ <Menu/> }/>
              <Route path=":menuCode" element={ <MenuDetail/> }/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
