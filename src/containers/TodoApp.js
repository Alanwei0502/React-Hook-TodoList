import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import useTodoState from '../hooks/useTodoState';

const paperStyle = { padding: 0, margin: 0, height: '100vh', backgroundColor: '#fafafa' };
const appBarStyle = { height: '64px' };
const gridStyle = { marginTop: '1rem' };

const TodoApp = () => {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState();

  return (
    <Paper
      style={paperStyle}
      elecation={0}
    >
      <AppBar
        color='primary'
        position='static'
        style={appBarStyle}
      >
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={gridStyle}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp


// -TodoApp
//  -TodoForm
//  -TodoList
//  -TodoItem

// id, task, completed