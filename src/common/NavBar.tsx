import React from 'react'
import { Box, AppBar, Toolbar, Container, Grid, Button, Typography } from "@mui/material"
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky'>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction={"row"} justifyContent="space-between" alignItems={"center"}>
              <Grid item>
                <Typography>Codrr</Typography>
              </Grid>
              <Grid item>
                <Stack direction={'row'} spacing={2}>

                  <Button
                    variant="contained"
                    onClick={() => navigate("login")}>
                    Login
                  </Button>
                  <Button variant="outlined">Registered</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar