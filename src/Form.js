import './css/App.css'
import { useState } from 'react'
import EditForm from './EditForm'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'

function Form({ id, car, year, cubicasis, length, width, weight }) {
  const [open, setOpen] = useState({ edit: false, view: false })

  const handleClose = () => {
    setOpen({ edit: false, view: false })
  }

  const handleDelete = async () => {
    const taskDocRef = doc(db, 'tasks', id)
    try {
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='complited-form'>
      <div className='form' key={id}>
        <h4>Your Registration</h4>
        <div className='form-item'>
          <h4>Vehicle model: </h4>
          <h2>{car}</h2>
        </div>
        <div className='form-item'>
          <h4>Vehicle Year: </h4>
          <h2> {year}</h2>
        </div>
        <div className='form-item'>
          <h4>Cubicasis: </h4>
          <h2>{cubicasis} cc</h2>
        </div>
        <div className='form-item'>
          <h4>Length: </h4>
          <h2>{length} mm</h2>
        </div>
        <div className='form-item'>
          <h4>Width: </h4>
          <h2>{width} mm</h2>
        </div>
        <div className='form-item'>
          <h4>Weight: </h4>
          <h2>{weight} kg</h2>
        </div>
        <div className='buttons'>
          <button
            className='btn edit-btn'
            onClick={() => setOpen({ ...open, edit: true })}
          >
            Edit
          </button>
          <button className='btn dlt-btn' onClick={handleDelete}>
            Delete
          </button>
        </div>

        {open.edit && (
          <EditForm
            onClose={handleClose}
            toEditCar={car}
            toEditYear={year}
            toEditCubicasis={cubicasis}
            toEditLength={length}
            toEditWidth={width}
            toEditWeight={weight}
            open={open.edit}
            id={id}
          />
        )}
      </div>
    </div>
  )
}

export default Form
