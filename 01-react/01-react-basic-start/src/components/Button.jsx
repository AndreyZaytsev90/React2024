import React, {memo} from 'react';

const Button = memo(({style, btnName, callBack}) => {

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
})

export default Button