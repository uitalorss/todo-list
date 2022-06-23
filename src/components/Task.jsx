import { Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({task, handleDeleteTask}){
  return(
    <li className={styles.listItem}>
      <button className={styles.check}>
        <Circle size={24} />
      </button>
      <p>{task.description}</p>
      <button className={styles.delete}>
        <Trash onClick={() => handleDeleteTask(task.id)} size={24}/>
      </button>
    </li>
  )
}