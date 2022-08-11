import menus from '../data/menu-detail.json';

/* 전체 메뉴 리스트 조회 */
export function getMenuList() {

    return menus;
}

/* 메뉴 코드를 이용하여 메뉴 한 개의 내용 상세 조회 */
export function getMenuDetail(menuCode) {

    return menus.find(menu => menu.menuCode === parseInt(menuCode));
}

/* 메뉴 이름을 전달 받아 메뉴 이름을 포함하고 있는 메뉴 목록 반환 */
export function searchMenu(menuName) {

    return menus.filter(menu => menu.menuName.match(menuName));
}