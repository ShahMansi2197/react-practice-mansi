import React, { useState } from 'react';
import logo from './logo.svg';
import List from './Component/List';
import AddToList from './Component/AddToList';
import  { styleCss } from './StyleCss';



export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([])
  const styleClass =  styleCss();

  return (
    <div className="App">
     
      <AddToList setPeople={setPeople} people={people}/>
      <h1 className={styleClass.Listheader} >People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
