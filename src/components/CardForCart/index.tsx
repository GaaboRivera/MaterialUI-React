import React from 'react'
import * as MU from '@mui/material';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { useAppDispatch } from '../../redux/hooks';
import { removeToCart } from '../../redux/slices/cart.slice';


interface CardForCartProps {
  id: string | number;
  image: string;
  name: string;
  info: string;
}

export const CardForCart: React.FC<CardForCartProps> = ({ id, image, name, info }) => {
  const dispatch = useAppDispatch()
  const handleRemoveToCart = () => {
    dispatch(removeToCart({
      id
    }))
  }
  return (
    <MU.Card sx={{ display: "flex", my: 2 }} >
      <MU.CardMedia
        component={"img"}
        sx={{ width: 151 }}
        image={image}
        alt="rick and morty"
      />
      <MU.Grid container sx={{ mx: 1 }}>
        <MU.Grid item xs={9}>
          <MU.CardContent>
            <MU.Typography variant="h4">{name}</MU.Typography>
            <MU.Divider />
            <MU.Typography variant="h6">{info}</MU.Typography>
          </MU.CardContent>
        </MU.Grid>
        <MU.Grid item xs={2}>
          <MU.CardActions>
            <MU.IconButton onClick={handleRemoveToCart}>
              <CancelTwoToneIcon />
            </MU.IconButton>
          </MU.CardActions>
        </MU.Grid>
      </MU.Grid>
    </MU.Card>
  )
}

