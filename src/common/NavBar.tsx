import React from 'react'
import { Box, AppBar, Toolbar, Container, Grid, Button, Typography } from "@mui/material"
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DrawerCart } from './DrawerCart'
import { useAppSelector } from '../redux/hooks'

const NavBar: React.FC<{}> = () => {
  const items = useAppSelector((state) => state.cartReducer)
  const navigate = useNavigate()
  const [state, setState] = React.useState<boolean>(false);

  const handleShowViewDrawer = () => {
    setState(!state)
  }
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
                  <IconButton aria-label="cart" onClick={handleShowViewDrawer}>
                    <Badge badgeContent={items.length} color='error'>
                      <ShoppingCartIcon color='primary' />
                    </Badge>
                  </IconButton>
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
        <DrawerCart open={state} handleStateViewDrawer={handleShowViewDrawer} />
      </AppBar>
    </Box>
  )
}

export default NavBar