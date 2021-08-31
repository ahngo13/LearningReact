import {useState} from 'react';

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        //value 값, onchnage 함수
        {value, onChange: e=> setValue(e.target.value)},
        //초기값 세팅
        ()=>setValue(initialValue)
    ]
}