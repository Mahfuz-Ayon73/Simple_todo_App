import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React, { Fragment } from 'react'

const TodoDetails = ({todolistDetails,openDialog , setOpenDialog , setTodolistDetails}) => {
  return (
    <Fragment>
        <Dialog open = {openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>{todolistDetails?.todo}</DialogTitle>
            <DialogActions>
              <Button onClick={() => {
                setTodolistDetails(null)
                setOpenDialog(false)
              }}>Close</Button>
            </DialogActions>
        </Dialog>
    </Fragment>
  )
}

export default TodoDetails
