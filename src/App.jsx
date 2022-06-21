import './global.css';
import styles from './App.module.css';
import logo from './assets/logo.svg';
import {PlusCircle } from 'phosphor-react'
import { TaskList } from './components/TaskList';

export function App() {
  return (
    <>
    <header className={styles.header}>
      <img src={logo} alt="logo da lista de tarefas" />
    </header>

    <form className={styles.newTask} >
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>
        Criar <PlusCircle  size={20}/></button>
    </form>

    <TaskList />
    </>    
  )
}