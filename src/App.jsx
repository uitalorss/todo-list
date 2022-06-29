import './global.css';
import styles from './App.module.css';
import logo from './assets/logo.svg';
import {PlusCircle } from 'phosphor-react'
import { TaskList } from './components/TaskList';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

export function App() {
  const [counterCompleted, setCounterCompleted] = useState(0);
  const [inputTask, setInputTask] = useState('')
  const [tasks, setTasks] = useState([])

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

  function handleDeleteTask(id){
    
    let updateTask = tasks.filter(task => {
      return task.id !== id;
    })
    changeCounterByDelete(id)
    setTasks(updateTask);
  }

  function handleCheckTask(id){
    let updateTask = tasks.map(task => {
      if(task.id === id){
        return {...task, completed : !task.completed};
      }
      return task;
   })
    setTasks(updateTask);
    changeCount(updateTask, id)
  }

  function changeCount(task, id){
    if(task.length === 0){
      setCounterCompleted(0)
    }
    task.map(taskItem => {
      if(taskItem.id === id){
        if(taskItem.completed){
          setCounterCompleted(counterCompleted + 1);
        }else if(taskItem === false){
          setCounterCompleted(counterCompleted - 1);
        }
      }
    })
  }

  function changeCounterByDelete(id){
    tasks.map(task => {
      if(task.id === id){
        if(task.completed){
          setCounterCompleted(counterCompleted - 1);
        }else{
          setCounterCompleted(counterCompleted)
        }
      }
    })
  }

  
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
      <TaskList 
        tasks={tasks} 
        handleDeleteTask={handleDeleteTask}
        handleCheckTask={handleCheckTask}
        counterCompleted={counterCompleted}
      />
    </>    
  )
}