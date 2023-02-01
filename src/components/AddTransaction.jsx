import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from '../GlobalState'

function AddTransaction() {

  const [text, setText] = useState('')

  const [amount, setAmount] = useState(0)

  const { addTransactions } = useContext(GlobalContext)

  function onSubmitHandler(e) {
    e.preventDefault()

    const newTrans = {
      id: Math.floor(Math.random() * 100000),
      text:text,
      amount:+amount
    }
    addTransactions(newTrans);
  } 

  return (
    <>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
          type="text"
            placeholder="Enter text..." 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
          type="number" 
          placeholder="Enter amount..." 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction