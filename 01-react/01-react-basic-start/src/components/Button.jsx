import React, {memo} from 'react';

const Button = ({style, btnName, callBack}) => {

    const onClickHandler = () => {
        callBack()
    }

    function onDoubleClickHandler() {
        console.log('DoubleClick!')
    }

    return (
        <button className={style} onClick={callBack} onDoubleClick={onDoubleClickHandler}>
            {btnName}
        </button>
    );
};

export default memo(Button);