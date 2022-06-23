import { useState } from 'react'
import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList({tasks, handleDeleteTask}){

  return(
    <div className={styles.taskList}>
      <div className={styles.counters}>
        <strong>
          Tarefas criadas<span>{tasks.length}</span>
        </strong>
        <strong>
          Concluídas<span>0</span>
        </strong>
      </div>
      <ul className={styles.list}>
        {tasks.map(task => {
          return <Task key={task.id} task={task} handleDeleteTask={handleDeleteTask}/>
        })}
      </ul>
    </div>
  )
}