import { Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task(){
  return(
    <li className={styles.listItem}>
      <button className={styles.check}>
        <Circle size={24} />
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button className={styles.delete}>
        <Trash size={24}/>
      </button>
    </li>
  )
}