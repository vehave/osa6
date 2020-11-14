const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.search
      default:
        return state
    }
}

export const filterChange = search => {
    return {
      type: 'SET_FILTER',
      search
    }
}
  
export default filterReducer