import { useState } from 'react'
import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList({tasks}){

  return(
    <div className={styles.taskList}>
      <div className={styles.counters}>
        <strong>
          Tarefas criadas<span>0</span>
        </strong>
        <strong>
          Concluídas<span>0</span>
        </strong>
      </div>
      <ul className={styles.list}>
        {tasks.map(task => {
          return <Task key={task.id} task={task}/>
        })}
      </ul>
    </div>
  )
}