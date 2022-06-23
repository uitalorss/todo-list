import './global.css';
import styles from './App.module.css';
import logo from './assets/logo.svg';
import {PlusCircle } from 'phosphor-react'
import { TaskList } from './components/TaskList';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

export function App() {
  const [inputTask, setInputTask] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Comprar pão",
      completed: false
    }
  ])

  function handleInputChange(){
    setInputTask(event.target.value)
  }

  function handleCreateNewTask(){
    event.preventDefault();
    const newTask = [...tasks, {
      id: uuidv4(),
      description: inputTask,
      completed: false
    }]
    setTasks(newTask);
    setInputTask('');
  }

  let inputEmpty = inputTask.length === 0;

  return (
    <>
    <header className={styles.header}>
      <img src={logo} alt="logo da lista de tarefas" />
    </header>

    <form className={styles.newTask} >
      <input 
        type="text"
        value={inputTask}
        placeholder='Adicione uma nova tarefa'
        onChange={handleInputChange}
        required
      />
      <button disabled={inputEmpty} onClick={handleCreateNewTask}>
        Criar <PlusCircle  size={20}/></button>
    </form>
      <TaskList tasks={tasks}/>
    </>    
  )
}