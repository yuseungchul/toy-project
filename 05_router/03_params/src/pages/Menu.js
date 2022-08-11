import { useState, useEffect } from 'react';
import { getMenuList } from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';

function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onClickHandler = () => {

        /* 쿼리 스트링 형태로 검색어를 전달한다. 
        getNavigate 훅을 이용하여 링크를 이동 시킬 수 있다. 
        첫 번째 인자로는 링크를, 두 번째 인자는 replace 여부를 { replace : true }로 전달할 수 있으며 
        첫 번째 인자에 -1을 전달하면 이전 페이지로 이동하게 된다. */
        navigate(`/menu/search?menuName=${ searchValue }`);
    }

    useEffect(
        () => {
            /* MenuAPI.js에서 API 호출 함수를 모아 놓는다. */
            setMenuList(getMenuList());
        },
        []
    );

    return(
        <>
            <h1>메뉴 목록</h1>

            <div>
                <input type="search" name="menuName" value={ searchValue } onChange={ e => setSearchValue(e.target.value) }/>
                <button onClick={ onClickHandler }>검색</button>
            </div>

            <div className={ boxStyle.MenuBox }>
                { menuList.map(menu => <MenuItem key={ menu.menuCode } menu={ menu }/>) }     
            </div>
        
        </>
        
    );
}

export default Menu;