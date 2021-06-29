import React, { useState } from 'react'
import { IState as Props } from "../App";

import  { styleCss } from '../StyleCss';

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }

    const styleClass =  styleCss();

    return (
        <div className={styleClass.AddToList}>
            <input 
                type="text"
                onChange={handleChange}
                className={styleClass.AddToListinput}
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input 
                type="text"
                onChange={handleChange}
                className={styleClass.AddToListinput}
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <input 
                type="text"
                onChange={handleChange}
                className={styleClass.AddToListinput}
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className={styleClass.AddToListinput}
                name="note"
                value={input.note}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className={styleClass.AddToListbtn}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList ;