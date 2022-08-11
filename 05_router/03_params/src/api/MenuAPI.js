import menus from '../data/menu-detail.json';

/* 전체 메뉴 리스트 조회 */
export function getMenuList() {

    return menus;
}

/* 메뉴 코드를 이용하여 메뉴 한 개의 내용 상세 조회 */
export function getMenuDetail(menuCode) {

    return menus.find(menu => menu.menuCode === parseInt(menuCode));
}