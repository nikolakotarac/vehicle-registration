import Modal from './Modal'
import { useState } from 'react'
import './css/App.css'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

function EditForm({
  open,
  onClose,
  toEditCar,
  toEditYear,
  toEditCubicasis,
  toEditLength,
  toEditWidth,
  toEditWeight,
  id,
}) {
  const [car, setCar] = useState(toEditCar)
  const [year, setYear] = useState(toEditYear)
  const [cubicasis, setCubicasis] = useState(toEditCubicasis)
  const [length, setLength] = useState(toEditLength)
  const [width, setWidth] = useState(toEditWidth)
  const [weight, setWeight] = useState(toEditWeight)

  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', id)
    try {
      await updateDoc(taskDocRef, {
        car: car,
        year: year,
        cubicasis: cubicasis,
        length: length,
        width: width,
        weight: weight,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='form'>
        <input
          type='text'
          name='car'
          onChange={(e) =>
            setCar(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          value={car}
          placeholder='Change your car brand'
          minLength={'3'}
          maxLength='50'
          required
        />
        <input
          type='number'
          name='year'
          onChange={(e) => setYear(e.target.value)}
          value={year}
          placeholder='Change your year'
          min='1972'
          max='2022'
          step='1'
          required
        />
        <input
          type='number'
          name='cubicasis'
          onChange={(e) => setCubicasis(e.target.value)}
          value={cubicasis}
          placeholder='Change cubicasis'
          min='100'
          max='5000'
          required
        />
        <input
          type='number'
          name='length'
          onChange={(e) => setLength(e.target.value)}
          value={length}
          placeholder='Change length'
          min='2500'
          max='6000'
          required
        />
        <input
          type='number'
          name='width'
          onChange={(e) => setWidth(e.target.value)}
          value={width}
          placeholder='Change width'
          min='1200'
          max='2200'
          required
        />
        <input
          type='number'
          name='weight'
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          placeholder='Change weight'
          min='600'
          max='3000'
          required
        />
        <button type='submit' className='submit-btn'>
          change
        </button>
      </form>
    </Modal>
  )
}

export default EditForm
