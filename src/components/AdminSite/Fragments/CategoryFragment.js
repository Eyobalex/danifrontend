import { Container, Table, TableBody, TableContainer, TableCell,Button, Paper, TableHead, TableRow, Typography, Dialog, DialogContentText, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, deleteCategories } from '../../../actions/category';
const Category = ({_change}) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])
    const[currentCategory, setCurrentCategory] = useState(null);
    
    const [open, setOpen] = useState(false);
    
    const {categories} =  useSelector( state => {
        return state.category
    } );

    const handleDelete =  (e, id) => {
        // e.preventDefault();
        
        dispatch(deleteCategories(id));
        console.log('delete action initiated');
    } 

    
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (


        <div>
            <Container maxWidth="md" fixed>
                  <h1 > Categories</h1>
                  <Typography align='right' onClick={handleOpen}>new</Typography>
                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add New Category</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add  a new category provied the name of the category and the font awesome class associated with it.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
            //   autoFocus
              margin="dense"
              id="faclass"
              value="sth"
              name="faicon"
              onChange={_change}
              label="Font Awesome class"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              submit
            </Button>
          </DialogActions>
        </Dialog>
                  
                  <TableContainer component={Paper} >
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Font awesome class</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {categories?.map((category) => (
                            <TableRow key={category._id}>
                            <TableCell component="th" scope="row">
                                {category?.name}
                            </TableCell>
                            <TableCell align="right">{category?.fa_icon}</TableCell>
                            <TableCell align="right"><Button onClick={(e) =>handleDelete(e, category._id)} color="primary" >delete</Button> <Button onClick={(e) =>setCurrentCategory(category)} color="primary" >edit</Button></TableCell>

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
           

        </div>
    )


}

export default Category;


