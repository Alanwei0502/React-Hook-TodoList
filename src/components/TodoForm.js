import { Paper, TextField } from '@material-ui/core'
import useInputState from '../hooks/useInputState';

const paperStyle = { margin: '1rem 0', padding: '0 1rem' }

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('');

  const onSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  }

  return (
    <Paper style={paperStyle}>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          margin='normal'
          label='Add New Todo'
          value={value}
          onChange={handleChange}
        />
      </form>
    </Paper >
  )
}

export default TodoForm
