import { Container, Table, TableBody, TableContainer, TableCell,Button, Paper, TableHead, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../actions/category';
const Category = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])
    const[currentCategory, setCurrentCategory] = useState(null);
    
    const {categories} =  useSelector( state => {
        console.log(state);
        return state.category
    } );

    const handleDelete =  (e, id) => {
        console.log(id);
    } 

    return (


        <div>
            <Container maxWidth="md" fixed>
                  <h1 > Categories</h1>
                  <TableContainer component={Paper} >
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Font awesome class</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {categories?.map((category) => (
                            <TableRow key={category._id}>
                            <TableCell component="th" scope="row">
                                {category?.name}
                            </TableCell>
                            <TableCell align="right">{category?.fa_icon}</TableCell>
                            <TableCell align="right"><Button onClick={(e) =>handleDelete(e, category._id)} color="primary" >delete</Button>| <Button onClick={(e) =>setCurrentCategory(category)} color="primary" >edit</Button></TableCell>

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


