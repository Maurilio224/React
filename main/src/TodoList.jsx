import React, {useRef, useState} from "react";

export default function TodoList(props) {
  const deleteInput = useRef(null)
  const [name, setName] = useState('');
  const [items, setItems] = useState(["Go to Market", "Do sport", "Go to work", "Sleep"]);
  const handleAdd = () => {
      setItems([...items, name]);
      deleteInput.current.value = ''
  };

  const handleReset = () => {
    setItems([])
  }

  const handleDelete = (index) => {
    const array = [...items]
    array.splice(index, 1)
    setItems(array)
  }
  return (
      <div>
          <input ref={deleteInput} onChange={(e) => setName(e.target.value)}/>
          <button onClick={handleAdd}>add</button>
          <button onClick={handleReset}>reset list</button>
          <ul>{props.render(items, handleDelete)}</ul>
      </div>
  );
}