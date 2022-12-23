import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from '@mui/material';
import { addToCart } from '../../redux/slices/cart.slice';

type CardProps = {
  image: string;
  name: string;
  species: string;
  status: string;
  id: number;
}

const CardComponent: React.FC<CardProps> = ({ image, name, species, status, id }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const itemExists = useAppSelector((state) => state.cartReducer)
  const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false)

  React.useEffect(() => {
    setDisabledBtn(itemExists.some((item) => item.id === id))
  }, [itemExists, id])
  const handleClick = (id: number) => {
    navigate(`/character/${id}`)
  }
  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      image,
      info: status,
    }))
  }
  return (
    <Card >
      <CardMedia
        component={"img"}
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='h4' sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mb: 1.5 }}>
          Especie: {species}
        </Typography>
        <Typography sx={{ mt: 1.5 }}>
          Estado: {status}
        </Typography>
      </CardContent>
      <CardActions >
        <Button fullWidth variant='contained' onClick={() => handleClick(id)}>Learn More</Button>
        <Button fullWidth variant='outlined' onClick={handleAddToCart} disabled={disabledBtn}>Add to cart</Button>
      </CardActions>
    </Card>
  )
}

export default CardComponent