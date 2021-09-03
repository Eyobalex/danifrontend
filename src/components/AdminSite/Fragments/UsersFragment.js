import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {getUsers, deleteUsers} from '../../../actions/users';

const ifd = {name: '', email: '', role:'', verified: '' };
const Users = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    const [formData, setFormData] = useState(ifd);
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(()=> {
        setFormData(currentUser);
    }, [currentUser])

    const handleForm = e => {
        e.preventDefault();

        console.log("form: ",formData);
    }


    const form = () => {
        if(currentUser){
            return (
                <Container maxWidth="md" fixed >
                    <Paper className={classes.paper} >
                        <form autoComplete="off" noValidate   onSubmit={handleForm}>
                            <Typography variant="h6">
                                 {`Edit ${currentUser.name}`}
                            <Typography align="right" onClick={()=>setCurrentUser(null)}>X</Typography>
                            </Typography>
                            <TextField name="name" variant="outlined" label="Name" fullWidth value={currentUser.name} onChange={(e)=> setFormData({...formData,name: e.target.value })}  />
                            <TextField name="email" variant="outlined" label="Email" fullWidth value={currentUser.email} onChange={(e)=> setFormData({...formData,email: e.target.value })} />
                            <TextField name="role" variant="outlined" label="Role" fullWidth value={currentUser.role} onChange={(e)=> setFormData({...formData,role: e.target.value })} />
                            <TextField name="verified" variant="outlined" label="Verified" fullWidth value={currentUser.verified} onChange={(e)=> setFormData({...formData,verified: e.target.value })} />
                            
                            <Button  variant="contained" color="primary" size="large" type="submit"  fullWidth>Submit</Button>
                            <Button variant="contained" color="secondary" size="small"  fullWidth>Clear</Button>
                        </form>
                    </Paper>
    
                </Container>
            )
        }else{
            return <></>
        }
       
    }
 
    const {users} =  useSelector( state => state.users )
    const handleDelete = (e, id)=> {
        dispatch(deleteUsers(id));
    }
    return (


        <div>
            <Container maxWidth="md" fixed>
                  Users Fragment

                  {/* <Typography align="right" onClick={handleOpen}>new</Typography> */}

                  <TableContainer component={Paper} >
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Verified</TableCell>
                            <TableCell align="right"> Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {users?.map((user) => (
                            <TableRow key={user._id}>
                            <TableCell component="th" scope="row">
                                {user?.name}
                            </TableCell>
                            <TableCell align="right">{user?.email}</TableCell>
                            <TableCell align="right">{user?.role}</TableCell>
                            <TableCell align="right">{user?.verified?.toString()}</TableCell>
                            <TableCell align="right"><Button onClick={(e) =>handleDelete(e, user._id)} color="primary" >delete</Button>| <Button onClick={(e) =>setCurrentUser(user)} color="primary" >edit</Button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

            {form()}
                
            
            
           
            
        </div>
    )


}

export default Users;




// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//    <></>
//   );
// }


// const cateForm = ({handleClose, handleClickOpen, }) => {
//     return (
//         <div>
//         <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//           Open form dialog
//         </Button>
//         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//           <DialogTitle id="form-dialog-title">Add New Category</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               To add  a new category provied the name of the category and the font awesome class associated with it.
//             </DialogContentText>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               name="name"
//               label="Name"
//               type="text"
//               fullWidth
//             />
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               name="faicon"
//               label="Font Awesome class"
//               type="text"
//               fullWidth
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleClose} color="primary">
//               submit
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     )
// }