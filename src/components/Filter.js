import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {    
    
    const dispatch = useDispatch()

    const handleFilter = (event) =>{
        const search = event.target.value
        dispatch(filterChange(search))
    }

    return(
      
        <div>
          Filter to show with...
          <input 
            onChange={handleFilter}          
            type="text"
            />
        </div>
       
    ) 
} 

export default Filter
  