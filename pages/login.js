import React, { useState } from 'react'
import {
  List,
  Typography,
  ListItem,
  TextField,
  Button,
  Link,
} from '@material-ui/core'
import Layout from '../components/Layout'
import useStyles from '../utils/styles'
import NextLink from 'next/link'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles()
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/users/login', { email, password })
      alert('successful login')
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message)
    }
  }
  return (
    <Layout title="Login">
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </ListItem>

          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: 'password' }}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </ListItem>

          <ListItem>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don&apos;t have an account? &nbsp;
            <NextLink href="/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  )
}
