import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/tiagosvieira10.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Titi Silva</strong>
              <time title='25 de maio às 12h05' dateTime='2023-05-25'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>

          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  );
}