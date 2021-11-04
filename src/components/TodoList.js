import { Fragment } from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo';

const pStyle = { textAlign: 'center' };

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <>
      {todos.length
        ? <Paper>
          <List>
            {todos.map((todo, index) => (
              <Fragment key={todo.id}>
                <Todo
                  {...todo}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                {index < todos.length - 1 && <Divider />}
              </Fragment>
            ))}
          </List>
        </Paper>
        : <p style={pStyle}>Nothing to do.</p>
      }
    </>
  )
}

export default TodoList
