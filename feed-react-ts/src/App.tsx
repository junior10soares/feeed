import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Siderbar } from "./components/Siderbar"

import styles from "./App.module.css"
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/junior10soares.png',
      name: 'Junior Soares',
      role: 'Developer'
    },
    content: [
      { type: 'paragraphy', content: 'Fala galeraa 👋' , },
      { type: 'paragraphy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-20 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Coach'
    },
    content: [
      {type: 'paragraphy', content: 'Fala galeraa 👋' , },
      {type: 'paragraphy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-30 17:00:00'),
  },
];

export function App() {
  return(

    <div>

      <Header/>

      <div className={styles.wrapper}>
        
        <Siderbar/>

        <main>
            {posts.map(posts => {
              return (
                <Post 
                  key={posts.id}
                  author = {posts.author}
                  content = {posts.content as []}
                  publishedAt = {posts.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}
