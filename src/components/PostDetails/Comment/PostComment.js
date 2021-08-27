import React, {useState} from "react";
import { useDispatch } from "react-redux";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { createComment } from "../../../actions/comment";




export const PostComment = ({postId})=> {


    const [postData, setPostData] = useState({name: '', comment: '', email: ''});
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createComment( postId,postData));
        // alert(postId);
    }
    const clear = (e) => {
        setPostData({name: '', comment: '', email: ''})
    }
    
    return(
        
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" >Creating Memories</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth onChange = {(e)=> setPostData({...postData, name : e.target.value})} value={postData.name}  /> 
                <TextField name="comment" variant="outlined" label="Comment" fullWidth onChange = {(e)=> setPostData({...postData, comment : e.target.value})} value={postData.comment}  /> 
                <TextField name="email" variant="outlined" label="E-mail" type='email' fullWidth onChange = {(e)=> setPostData({...postData, email : e.target.value})} value={postData.email}  /> 
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form> 
        </Paper>
    )

}