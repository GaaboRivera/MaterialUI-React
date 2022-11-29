import React from 'react'
import { Container, Button, Box, Grid } from '@mui/material';
import { HeaderComponent } from '../../components';
import { characters } from '../../api/characters';
import CardComponent from '../../components/Card';
import { TypeCharacter } from './interface/character.interface';

export const HomePage: React.FC<{}> = () => {

  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)

  React.useEffect(() => {
    characters.getAll({ page: 1 }).then((r) => {
      setAllCharacters(r.data.results)
    }).catch((err) => {
      console.log(err)
    });
    // characters.getById({ id: 1 }).then((r) => {
    //   console.log(r.data)
    // }).catch((err) => {
    //   console.log(err)
    // });
  }, [])

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description='Bienvenido'
        element={<Button variant='contained' fullWidth>Hola Mundo</Button>}
      />
      {
        allCharacters?.length !== 0 &&
        <Grid container spacing={2} direction={"row"}>
          {allCharacters?.map((character) => {

            return <Grid item xs={3}>
              <CardComponent
                key={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
                status={character.status} />
            </Grid>
          })}
        </Grid>
      }
    </Container>
  )
}