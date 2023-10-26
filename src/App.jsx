import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  return (
    <Stack>
      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={6} xl={3}>
          <Item>Producto 1</Item>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={6} xl={3}>
          <Item>Producto 2</Item>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={6} xl={3}>
          <Item>Producto 3</Item>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={6} xl={3}>
          <Item>Producto 4</Item>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default App
