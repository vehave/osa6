import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notficationReducer'
import filterReducer from './reducers/filterReducer'






export const configureStore = () => {
    const reducer = combineReducers({
        anecdotes: anecdoteReducer,
        notifications: notificationReducer,
        filter: filterReducer
    })
  
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

    
  
    return store
}

