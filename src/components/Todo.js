import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import useToggle from '../hooks/useToggle';
import EditTodoForm from './EditTodoForm'

const listItemStyle = { height: '64px' };


const Todo = ({ task, id, completed, removeTodo, toggleTodo, editTodo }) => {
  const listItemTextStyle = { textDecoration: completed ? 'line-through' : 'none' };
  const [isEditing, toggle] = useToggle(false);

  return (
    <ListItem style={listItemStyle}>
      {isEditing
        ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} />
        : (<>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={listItemTextStyle}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>)
      }
    </ListItem>
  )
}

export default Todo
