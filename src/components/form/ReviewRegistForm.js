import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callRegistReviewAPI } from '../../apis/RestaurantAPICalls';

function ReviewResistForm(){

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.restaurantReducer);


    const [registReview, setRegistReview] = useState(
        {      
            detail : {
                comments: ''
            }
        }
    );

    const onChangeHandler = (e) => {

        let value = e.target.value;
        let name = e.target.name;

        /* json-server에 저장될 데이터 타입 맞추기 위한 코드 */
        if(name == 'comments'){
            name = 'detail';
                value = {
                    comments : value
                }
        }

        setRegistReview(
            {
                ...registReview,
                id : id,
                [name] : value
            }
        );
    }

    useEffect(
        () => {
            /* 메뉴 수정 완료 확인 후 //restaurnat/${id} 로 이동 */
            if(result.registreview) {
                alert('리뷰 등록이 완료 되었습니다.');
                navigate(`/restaurant`);
            }
        },
        [result]
      );


        const onClickHandler = () => {
            /* modifyMenu에 대한 유효성 검사 후 호출 */
            dispatch(callRegistReviewAPI(registReview));
        }
    

    return(
        <>
            <textarea type="text" placeholder="댓글을 입력해주세요" name = "comments" value={ registReview.detail.comments } onChange={ onChangeHandler }/>
            <button onClick={ onClickHandler }>등록</button>
        </>

    );
    

}

export default ReviewResistForm;