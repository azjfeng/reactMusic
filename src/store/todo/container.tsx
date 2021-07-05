import Todo from '../../components/todo/Todo.tsx'
import { connect} from 'react-redux'
import addTodo from './action'
// Map Redux state to component props
function mapStateToProps(state) {
    return {
      value: state.todo
    }
  }
  
  // Map Redux actions to component props
  function mapDispatchToProps(dispatch) {
    return {
      onInputChange: () => dispatch(addTodo.addTodo),
    }
}

const Todos = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo)


  export default Todos