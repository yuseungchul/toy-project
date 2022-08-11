// import { Link } from 'react-router-dom';

// function Navbar() {

//     return (
//         <div>
//             <ul>
//                 <li><Link to="/">HOME</Link></li>
//                 <li><Link to="/about">소개</Link></li>
//                 <li><Link to="/menu">메뉴목록</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;

/* <NavLink> 활용
NavLink 컴포넌트는 Link 컴포넌트와 사용이 거의 유사하다. 
하지만 현재 Nav의 상태가 active인지에 대한 값을 이용하여 스타일을 조작하거나 
클래스 이름을 변경할 수 있다. 
*/

import { NavLink } from  'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor : 'orangered'
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => isActive ? activeStyle : null }>HOME</NavLink></li>
                <li><NavLink to="/about" style={ ({isActive}) => isActive ? activeStyle : null }>소개</NavLink></li>
                <li><NavLink to="/menu" style={ ({isActive}) => isActive ? activeStyle : null }>메뉴목록</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;






















