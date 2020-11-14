import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notificationChange, hideNotification } from '../reducers/notficationReducer'


const Anecdote = ({ anecdote, votes, handleClick }) => {
    return(
        <div>
        <p>
        {anecdote}
        </p>
        <p>
        has {votes}
        <button onClick={handleClick}>vote</button>
        </p>
      </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    
    const anecdotes = useSelector(state => {
        
        if ( state.filter === 'ALL' ) {      
            return state.anecdotes 
            
        }    
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        
    })

    const voteAnecdote = async (anecdote) => {
        dispatch(vote(anecdote))
        dispatch(notificationChange(`you voted "${anecdote.content}"`))
        setTimeout(() => {
            dispatch(hideNotification())
          }, 5000)
    }

    return (
       <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote 
            key={anecdote.id}
            anecdote={anecdote.content}
            votes={anecdote.votes}
            handleClick={() => voteAnecdote(anecdote)}
        />
        )}
        </div>
    )
}

export default AnecdoteList
