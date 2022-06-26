import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({task, handleDeleteTask, handleCheckTask}){
  return(
    <li className={styles.listItem}>
      <button onClick={() => handleCheckTask(task.id)} className={styles.check}>
        {task.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>
        <p className={task.completed ? styles.checked : styles.noChecked}>{task.description}</p>
      <button className={styles.delete}>
        <Trash onClick={() => handleDeleteTask(task.id)} size={24}/>
      </button>
    </li>
  )
}