import { useState } from "react";
type ToDo = {
  content: string;
  id: number;
  done: boolean;
};

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
    const newList = toDoItem.map((item) => {
      if (item.id === id) {
        return { ...item, done: true };
      }
      return item;
    });
    setToDoItem(newList);
  };
  return (
    <div className="container">
      <div className="list">
        <div className="list__header">
          <h1>
            Tasks <span>List</span>
          </h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addList(input)}>Add List</button>
        </div>

        <div className="list__container">
          <div className="list__card">
            <p>Name of list</p>
            <div>
              <hr className="line" />
            </div>
            <div>
              <div>
                {toDoItem.map((list: ToDo) => {
                  return (
                    <div className="list__card__items" key={list.id}>
                      <div
                        onClick={(e) => handleChange(list.id)}
                        className="content"
                      >
                        {list.content}
                      </div>

                      <div>
                        <button>Done</button>
                        <button onClick={() => handleRemove(list.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="list__card">name</div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
