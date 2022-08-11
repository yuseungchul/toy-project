import { useSearchParams } from 'react-router-dom';

function MenuSearchResult() {

    const [searchParams] = useSearchParams();

    const menuName = searchParams.get('menuName');

    return (
        <>
            { menuName }
        </>
    );
}

export default MenuSearchResult;