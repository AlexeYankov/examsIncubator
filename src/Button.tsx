import React, {ChangeEvent, useState} from 'react';

type ButtonPropsType = {
    callBack: () => void
    name: string
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
