import { useEffect } from "react"
import { useState } from "react"
import classes from "./styles.module.css"
import TodoItem from "./components/todo-items"
import TodoDetails from "./components/todo-details"
import { Skeleton } from "@mui/material"

function App() {

  async function getData() {
    try {
      setLoading(true)

      const data = await fetch('https://dummyjson.com/todos')
      const jsonData = await data.json()

      console.log(jsonData)

      if (jsonData.todos && jsonData.todos.length > 0) {
        setTodolist(jsonData.todos)
        setLoading(false)
      }
      else {
        setLoading(false)
        setTodolist([])
      }
    }
    catch (e) {
      console.log(e)
    }

  }

  async function getSingleTodo(itemId) {

    console.log(itemId)
    const apiResponse = await fetch(`https://dummyjson.com/todos/${itemId}`);
    const result = await apiResponse.json();

    console.log(result)

    if (result) {
      setTodolistDetails(result)
      setOpenDialog(true)
    }
    else {
      setTodolistDetails(null)
      setOpenDialog(false)
    }

  }

  useEffect(() => {
    getData()
  }
    , [])
  const [loading, setLoading] = useState(false)
  const [todolist, setTodolist] = useState([]);
  const [todolistDetails, setTodolistDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  if (loading) {
    return (
      <div className={classes.skeleton}>
        <Skeleton variant="ractangular" width={650} height={650} />
      </div>

    )

  }

  return (
    <div className={classes.mainwrapper}>
      <h1 className={classes.headertitle}>Simple Todo App</h1>
      <div className={classes.todolistwrapper}>
        {
          (todolist && todolist.length > 0) ?
            todolist.map(item => <TodoItem key={item.id} todo={item} getSingleTodo={getSingleTodo} />) : null
        }
      </div>
      <TodoDetails
        todolistDetails={todolistDetails}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setTodolistDetails={setTodolistDetails}
      >
      </TodoDetails>
    </div>
  )
}

export default App
