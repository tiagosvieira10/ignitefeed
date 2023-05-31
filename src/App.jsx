 import { Post } from "./components/Post";
 import { Header } from "./components/Header";
 
 import styles from './App.module.css';
 
 import './global.css'
 import { Sidebar } from "./components/Sidebar";

 const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/tiagosvieira10.png',
      name: 'Tiago Vieira',
      role:'Software Developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-30 09:19:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role:'CTO @Rocketseat'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-10 09:00:00'),
  },
 ];

 export function App() {
  
  return (
    <>
    <Header />

      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })} 
        </main>
      </div>
    </>
  )
  
}


