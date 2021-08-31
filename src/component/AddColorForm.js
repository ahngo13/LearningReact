import React, {useRef, useState} from 'react';
import {useInput} from "../hook/useInput"
import { useColors } from './color-hooks';

export default function AddColorForm({onNewColor = f => f}){
    // const txtTitle = useRef();
    // const hexColor = useRef();
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput("#000000");
    const {addColor} = useColors();

    const submit = e => {
        //디폴트 동작을 원하지 않음.
        e.preventDefault();
        // const title = txtTitle.current.value;
        // const color = hexColor.current.value;
        //함수 프로퍼티를 부모에게 전달
        addColor(titleProps.value, colorProps.value);
        //제어가 되지 않는 컴포넌트
        // txtTitle.current.value = "";
        // hexColor.current.value = "";
        resetTitle("");
        resetColor("");
    }

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color title..." required/>
            <input {...colorProps} type="color" required/>
            <button>ADD</button>
        </form>
    )
}