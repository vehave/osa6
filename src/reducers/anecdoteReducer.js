import anecdoteService from '../services/anecdotes'



const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      return state.map(a =>
        a.id !== id ? a : action.data
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    
    case 'INIT_ANECDOTES':      
      return action.data  
    default: return state
  }

  
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const vote = (anecdote) => {
  const votedAnecdote = { 
      ...anecdote, 
      votes: anecdote.votes+1 
  }
  const id = anecdote.id
  return async dispatch => {
    await anecdoteService.update(id, votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
  
}

export default anecdoteReducer