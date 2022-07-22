import React, { useEffect } from 'react'
import { useGlobalContext } from './context'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import Form from './Form'
import { Link } from 'react-router-dom'

export default function YourRegistrations() {
  const { tasks, setTasks } = useGlobalContext()

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

  if (tasks.length === 0) {
    return (
      <div className='no-regs'>
        <h2>Sorry, There are currently no registrations!</h2>
        <Link to='/'>
          <button className='back-btn'>BACK TO HOME PAGE</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='registrations'>
        {tasks.map((task) => (
          <Form
            id={task.id}
            key={task.id}
            completed={task.data.completed}
            car={task.data.car}
            year={task.data.year}
            cubicasis={task.data.cubicasis}
            length={task.data.length}
            width={task.data.width}
            weight={task.data.weight}
            tasks={tasks}
          />
        ))}
      </div>
    )
  }
}
