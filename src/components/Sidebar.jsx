import {PencilLine} from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" 
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/tiagosvieira10.png"/>

        <strong>Tiago Vieira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}