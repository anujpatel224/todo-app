import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel,Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo.js";
import {db} from './firebase.js'
import { addDoc, collection, getDocs} from 'firebase/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const todosCollection = collection(db,"todos");
  
  useEffect(()=>{
    const getTodos = async() =>{
      const data = await getDocs(todosCollection);
      setTodos(data.docs.map((doc) => doc.data().todo))
    }
    getTodos();
  },[todosCollection]);
  const addTodo = async(event) => {
    event.preventDefault();
    await addDoc(todosCollection,{todo:input});
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1>Let's Plan</h1>
      <FormControl>
        <InputLabel>✅ write a todo</InputLabel>
        <Input value={input}
          onChange={(event) => setInput(event.target.value)} />
      </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add todo
        </Button>

      <ul>
        {todos.map((todo) => (
          <Todo text ={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
