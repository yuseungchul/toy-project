import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            /* menuList 호출 API */
            dispatch(callGetMenuListAPI());   //action(function) 액션인데 함수로 넘어감
        },
        []
    );
    

    return (
        menuList && (
            <div className="menuBox">
                { menuList.map(menu => <MenuItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );
}

export default MenuList;