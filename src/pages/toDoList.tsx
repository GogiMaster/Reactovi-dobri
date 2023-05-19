import { useState } from "react";
import trash from '../assets/trashBin.svg'
import plus from '../assets/plus.svg'

type ToDo = {
  content: string;
  id: number;
  done: boolean;
  
};
type Card={
  id: number;
  done: boolean;
  card:string
}
const ToDoList = () => {
  const [toDoItem, setToDoItem] = useState<ToDo[]>([]);
  const [input, setInput] = useState<string>("");
  //add
  const addList = (input: string) => {
    if (input) {
      const newList: ToDo = {
        content: input,
        id: Date.now(),
        done: false,
      
      };
      setToDoItem([...toDoItem, newList]);
      setInput("");
    }
  };
  //remove
  const handleRemove = (id: number) => {
    const remove = toDoItem.filter((list) => list.id !== id);
    setToDoItem(remove);
  };
  //done
  const handleChange = (id: number) => {
    const updatedTodos = toDoItem.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setToDoItem(updatedTodos);
  };
    //card
    const [add,setAdd]= useState<Card[]>([])
    const [insert,setInsert]= useState<string>('')
    
    const addCard=(insert:string)=>{
      if(insert){
        const newCard:Card={
          card:insert,
          id:Date.now(),
          done:false
        };
        setAdd([...add,newCard])
        setInsert('')
      }
    }
    //remove card
    const handleRemoveCard = (id: number) => {
      const remove = add.filter((list) => list.id !== id);
      setAdd(remove);
    };
  
  return (
    <div className="container">
      <div className="list">
        <div className="list__header">
          
          <h1>
            Tasks <span>List</span>
          </h1> 
         <img  src={plus} onClick={()=>addCard(insert)} /> <br />
         <input placeholder="Add List" type="text" value={insert} onChange={(e)=> setInsert(e.target.value)} />
        </div>

        <div className="list__container">
        {add.map((card)=>{
              return <div key={card.id}>
                  <div className="list__card">
                    <div className="list__card__header">

            <div className="list__card__header__section" >
            <p>{card.card}</p>
             <img className="trash" src={trash} onClick={()=>handleRemoveCard(card.id)}/> 

            </div>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addList(input)}>Add To List</button>
          </div>
              <hr />
            <div>
              <div>
                {toDoItem.map((list: ToDo) => {
                  return (
                    <div className="list__card__items" key={list.id}>
                      <div className="content">
                           <span style={{textDecoration: list.done ? 'line-through' : 'none',}}>       
                            <div onClick={(e) => handleChange(list.id)}>
                            {list.content} </div></span>
                        <img className="trash" src={trash} onClick={() => handleRemove(list.id)}/>
                      </div>  
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
              </div>
            })}
          
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
