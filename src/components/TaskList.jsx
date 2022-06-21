import styles from './TaskList.module.css'

export function TaskList(){
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
    </div>
  )
}