import React from 'react'
import { IState as Props } from "../App";
import { styleCss } from '../StyleCss';

interface IProps {
    people: Props["people"]
}


const List: React.FC<IProps> = ({ people }) => {
   
    const styleClass =  styleCss();


    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className={styleClass.List}>
                    <div className= {styleClass.Listheader}>
                        <img className={styleClass.Listimg} src={person.img}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className={styleClass.Listnote}>{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List;


