import { useState, useEffect } from 'react';
import { getMenuList } from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';

function Menu() {

    const [menuList, setMenuList] = useState([]);

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

            <div className={ boxStyle.MenuBox }>
                { menuList.map(menu => <MenuItem key={ menu.menuCode } menu={ menu }/>) }     
            </div>
        
        </>
        
    );
}

export default Menu;