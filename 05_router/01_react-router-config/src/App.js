/* BrowserRouter 컴포넌트를 이용하여 라우팅 설정을 한다.  */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/menu" element={ <Menu/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
