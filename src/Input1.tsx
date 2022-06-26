import React, {ChangeEvent, useState} from 'react';

type ButtonPropsType = {
    setTitle: (title:string) => void,
    title:string
}

export const Input1 = (props: ButtonPropsType) => {
    // let [name, setName] = useState('')
    const onChangeInputHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    )
};
