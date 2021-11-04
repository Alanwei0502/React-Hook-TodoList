import { TextField } from '@material-ui/core'
import useInputState from '../hooks/useInputState';

const formStyle = { marginLeft: '2rem', width: '50%' }

const EditTodoForm = ({ editTodo, id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task);

  const onSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  }

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      <TextField
        fullWidth
        autoFocus
        margin="normal"
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default EditTodoForm
