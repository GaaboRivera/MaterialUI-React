import React from 'react';
import { useParams } from 'react-router';
import { characters } from '../../api/characters';
import { ICharacter } from './interfaces/character.interface';
import { Box, Container, Grid, Typography, Card, CardMedia, Chip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const CharacterPage: React.FC<{}> = () => {
    const { id } = useParams()

    const [loading, setLoading] = React.useState<boolean>(true)
    const [character, setCharacter] = React.useState<ICharacter | null>(null)

    React.useEffect(() => {
        characters.getById({ id }).then((r) => {
            setCharacter(r.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        });
    }, [id])
    return <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
            {loading ? <Grid container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <CircularProgress />
            </Grid> : <Grid container sx={{ mt: 4 }}>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={character?.image}
                            alt="Paella dish"
                        />
                    </Card>
                </Grid>
                <Grid item>
                    <Typography variant="h1" >{character?.name}</Typography>
                    <Typography variant="h2" >{character?.species}</Typography>
                    <Chip label={character?.status} color="success" variant="outlined" />
                </Grid>
            </Grid>}
        </Container>
    </Box >
}

export default CharacterPage