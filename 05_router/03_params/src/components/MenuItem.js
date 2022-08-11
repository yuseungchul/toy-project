import itemStyle from './MenuItem.module.css';

function MenuItem ({ menu }) {

    return (
        <div className={ itemStyle.MenuItem }>
            <h3>이름 : { menu.menuName }</h3>
            <h3>가격 : { menu.menuPrice }</h3>
            <h3>종류 : { menu.categoryName }</h3>
        </div>
    );
}

export default MenuItem;