import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMenu } from '../api/MenuAPI';
import boxStyle from './Menu.module.css';
import MenuItem from '../components/MenuItem';

function MenuSearchResult() {

    /* 쿼리 스트링 형태로 전달 된 값은 useSearchParams 훅스를 이용하여 전달 받을 수 있다. */
    const [searchParams] = useSearchParams();

    /* 쿼리 스트링의 key 값을 get 함수에 전달하여 해당 파라미터 값을 읽어온다. */
    const menuName = searchParams.get('menuName');

    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            /* 검색어를 전달하여 해당 이름이 포함된 메뉴를 검색한 후 결과를 배열로 반환 받는다. */
            setMenuList(searchMenu(menuName));
        },
        []
    );

    return (
        <>
            <h1>검색 된 메뉴</h1>
            <div className={ boxStyle.MenuBox }>
                { menuList.map(menu => <MenuItem key={ menu.menuCode } menu={ menu }/>) }
            </div>
        </>
    );
}

export default MenuSearchResult;