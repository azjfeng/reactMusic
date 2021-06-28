
// Reducer
function todo(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'ADD_TODO':
      return { count: count + 2 }
  case 'decrease':
      return {count: count -1}
    default:
      return state
  }
}

export default todo