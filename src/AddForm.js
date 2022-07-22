import { useState } from 'react'
import './css/App.css'
import { db } from './firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { message } from 'antd'
import 'antd/dist/antd.css'

function AddForm({}) {
  const [car, setCar] = useState('')
  const [year, setYear] = useState('')
  const [cubicasis, setCubicasis] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        car: car,
        year: year,
        cubicasis: cubicasis,
        length: length,
        width: width,
        weight: weight,
        completed: true,
        created: Timestamp.now(),
      })
    } catch (err) {
      alert(err)
    }
    setTimeout(() => {
      message.success({
        content: 'You have successfully registered your vehicle!',
        className: 'custom-class',
        style: {
          marginTop: '40vh',
          fontSize: '20px',
        },
      })
    }, 3000)
    setCar('')
    setYear('')
    setCubicasis('')
    setLength('')
    setWeight('')
    setWidth('')
  }

  return (
    <form onSubmit={handleSubmit} className='form' name='addTask'>
      <h4>Vehicle Registration</h4>
      <input
        type='text'
        name='car'
        onChange={(e) =>
          setCar(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        value={car}
        placeholder='Enter the vehicle model'
        minLength='3'
        maxLength='50'
        required
      />
      <input
        type='number'
        name='year'
        onChange={(e) => setYear(e.target.value)}
        value={year}
        placeholder='Enter the year of manufacture'
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
        placeholder='Enter the cubic capacity of the vehicle (in cc)'
        min='100'
        max='5000'
        required
      />
      <input
        type='number'
        name='length'
        onChange={(e) => setLength(e.target.value)}
        value={length}
        placeholder='Enter the length of the vehicle (in mm)'
        min='2500'
        max='6000'
        required
      />
      <input
        type='number'
        name='width'
        onChange={(e) => setWidth(e.target.value)}
        value={width}
        placeholder='Enter the width of the vehicle (in mm)'
        min='1200'
        max='2200'
        required
      />
      <input
        type='number'
        name='weight'
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
        placeholder='Enter the weight of the vehicle (in kg)'
        min='600'
        max='3000'
        required
      />
      <button type='submit' className='submit-btn'>
        REGISTER
      </button>
    </form>
  )
}

export default AddForm
