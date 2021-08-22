import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'

import { getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import memories from './images/memories.png'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (
    <Container maxwidth='lg'>
      <p>{JSON.stringify(currentId)}</p>
      <AppBar className={ classes.appBar } position="static" color="inherit">
        <Typography className={ classes.heading } variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height="60" className={ classes.image }></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={ setCurrentId } />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={ currentId } setCurrentId={ setCurrentId } />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App