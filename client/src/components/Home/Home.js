import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    // const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    
    return (
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}> 
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
