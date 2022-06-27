import { useState } from 'react'
import { Task } from './Task'
import styles from './TaskList.module.css'
import Clipboard from '../assets/clipboard.svg'

export function TaskList({tasks, handleDeleteTask, handleCheckTask, counterCompleted}){

  return(
    <div className={styles.taskList}>
      <div className={styles.counters}>
        <strong>
          Tarefas criadas<span>{tasks.length}</span>
        </strong>
        <strong>
          Concluídas
          <span>{counterCompleted === 0 ? 0 : `${counterCompleted} de ${tasks.length}`}</span>
        </strong>
      </div>
      <div>
        {tasks.length === 0 ? 
          <div className={styles.noTasks}>
            <img src={Clipboard} alt="" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div> 
          : 
          <ul className={styles.list}>
            {tasks.map(task => {
              return <Task 
                        key={task.id} 
                        task={task} 
                        handleDeleteTask={handleDeleteTask}
                        handleCheckTask={handleCheckTask}
                      />
            })}
          </ul>}
      </div>
    </div>
  )
}