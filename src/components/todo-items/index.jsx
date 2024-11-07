import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const TodoItem = ({ todo , getSingleTodo }) => {
    console.log(todo);
    return (
        <Card sx={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardContent>
                <Typography variant='h5' color={"textSecondary"}><div>{todo.todo}</div></Typography>
            </CardContent>
            <CardActions >
                <Button sx={{
                    backgroundColor: "black",
                    color: "white",
                    opacity: "0.75",
                    "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                        opacity: "1",
                    }
                }} 
                onClick={ () => {getSingleTodo(todo.id)}}
                >Show Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default TodoItem
