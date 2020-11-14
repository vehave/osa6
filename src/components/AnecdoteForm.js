import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, hideNotification } from '../reducers/notficationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    const notification = `you added "${content}"`
    dispatch(notificationChange(notification))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)

  }

  return (
    <div>
    <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
    </form>
    </div>
  )
}

export default AnecdoteForm
