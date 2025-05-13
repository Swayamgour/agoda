import React, { useState } from 'react'
import '../../style/TrainSearchForm.css'
import { useNavigate } from 'react-router-dom'

const TrainSearchForm = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('Thu 8 May')
  const [returnDate, setReturnDate] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ from, to, date })
  }

  return (
    <div className='train-search-container bg-white-tran'>
      <form onSubmit={handleSubmit} className='train-search-form'>
        <div className='input-group'>
          <div className='form-group'>
            <label>From</label>
            <input
              className='inputSearch'
              type='text'
              value={from}
              onChange={e => setFrom(e.target.value)}
              placeholder='From'
            />
          </div>
          <div className='form-group'>
            <label>To</label>
            <input
              className='inputSearch'
              type='text'
              value={to}
              onChange={e => setTo(e.target.value)}
              placeholder='To'
            />
          </div>
        </div>

        <div className='form-group'>
          <label>Date</label>
          <input
            className='inputSearch'
            type='date'
            value={returnDate}
            onChange={e => setReturnDate(e.target.value)}
            // required
          />
        </div>

        <button
          type='submit'
          onClick={() => navigate('/TrainDashboard')}
          className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1'
        >
          Search Train
        </button>
      </form>
    </div>
  )
}

export default TrainSearchForm
