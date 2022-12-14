import React from 'react'
import { Container, Button, Grid, Pagination } from '@mui/material';
import { HeaderComponent } from '../../components';
import { characters } from '../../api/characters';
import CardComponent from '../../components/Card';
import { TypeCharacter } from './interface/character.interface';
import CircularProgress from '@mui/material/CircularProgress';


export const HomePage: React.FC<{}> = () => {

  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const [count, setCount] = React.useState(1)


  React.useEffect(() => {
    characters.getAll({ page }).then((r) => {
      setCount(r.data.info.pages)
      setAllCharacters(r.data.results)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    });
  }, [page])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description='Bienvenido'
        element={<Button variant='contained' fullWidth>Hola Mundo</Button>}
      />
      {
        loading ? <Grid container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress />
        </Grid> :
          allCharacters?.length !== 0 &&
          <Grid container spacing={2} direction={"row"} sx={{ mt: 1, mb: 1 }}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination size="large" variant="outlined" color="primary" count={count} page={page} onChange={handleChange} />
            </Grid>
            {allCharacters?.map((character) => {
              return <Grid item xs={3}>
                <CardComponent
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                  idCharacter={character.id}
                />
              </Grid>
            })}
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination size="large" variant="outlined" color="primary" count={count} page={page} onChange={handleChange} />
            </Grid>
          </Grid>
      }
    </Container>
  )
}