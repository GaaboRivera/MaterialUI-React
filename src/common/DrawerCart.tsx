import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { useAppSelector } from '../redux/hooks';
import IconButton from '@mui/material/IconButton';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { CardForCart } from '../components/CardForCart/index';

interface CartComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}


export const DrawerCart: React.FC<CartComponentProps> = ({ open, handleStateViewDrawer }) => {
  const items = useAppSelector((state) => state.cartReducer)

  return (
    <Drawer
      anchor={'right'}
      open={open}
    >
      <Box sx={{ width: "25em", p: 2 }}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant='h5'>Cart</Typography>
          <IconButton color='primary' onClick={() => handleStateViewDrawer()}>
            <CancelTwoToneIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        {
          items.length > 0 ? items.map(({ id, image, info, name }) =>
            <CardForCart key={id} name={name} info={info} image={image} id={id} />
          ) : 'Vacio'
        }
      </Box>
    </Drawer>
  )
}