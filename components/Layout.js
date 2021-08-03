import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Goodbuyz</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Goodbuyz</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>
          Oh, you know all them rights are reserved by GoodBuyz.
        </Typography>
      </footer>
    </div>
  )
}
