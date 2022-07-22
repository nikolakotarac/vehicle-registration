import './css/App.css'
import AddForm from './AddForm'
import { useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import { useGlobalContext } from './context'

function Home() {
  const { setTasks } = useGlobalContext()

  useEffect(() => {
    const taskColRef = query(
      collection(db, 'tasks'),
      orderBy('created', 'desc')
    )
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })
  }, [])

  return (
    <div className='container'>
      <div className='content'>
        <AddForm />
      </div>
    </div>
  )
}

export default Home
