import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMenuDetail } from '../api/MenuAPI';

function MenuDetail() {

    /* useParams 훅을 이용하여  pathvariable 값을 읽을 수 있다. 
    이 때 구조분해할당 한 이름은 route에 등록한 :menuCode <- 이 이름이다. 
    */
    const { menuCode } = useParams();

    const [menu, setMenu] = useState({
        menuName : '',
        menuPrice : 0,
        categoryName : '',
        detail : {}
    });

    useEffect(
        () => {
            /* 메뉴 코드를 이용해 메뉴의 상세 정보를 조회하는 API를 호출한다. */
            setMenu(getMenuDetail(menuCode));
        },
        []
    );

    return (
        <>  
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름 : { menu.menuName }</h3>
            <h3>메뉴 가격 : { menu.menuPrice }</h3>
            <h3>메뉴 종류 : { menu.categoryName }</h3>
            <h3>메뉴 설명 : { menu.detail.description }</h3>
            {/* 사진은 public 폴더에 둔다. src 폴더는 import시 고정 된 사진만 import 할 수 있다. */}
            <img src={ menu.detail.image } style={ { maxWidth : 500 } } alt={ menu.menuName } />
        </>
    );
}

export default MenuDetail;