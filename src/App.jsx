import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Producto1 from "./components/Producto1";
import Producto2 from "./components/Producto2";
import Producto3 from "./components/Producto3";
import Producto4 from "./components/Producto4";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  return (

    <Stack>
      <Grid container spacing={1}>

        <Grid item lg={3} md={4} sm={6} xs={6} xl={3} sx={{border:"none"}}>        
            <Item>                   
             <Producto1/>
             </Item>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={6} xl={3} sx={{border:"none"}}>
            <Item>                   
              <Producto2/>
            </Item>
        </Grid>
        
        <Grid item lg={3} md={4} sm={6} xs={6} xl={3} sx={{border:"none"}}>
            <Item>                  
              <Producto3/>
            </Item>
        </Grid>
        
        <Grid item lg={3} md={4} sm={6} xs={6} xl={3} sx={{border:"none"}}>
            <Item>          
              <Producto4/>
            </Item>     
        </Grid>
      
      </Grid>
    </Stack>
  )
}

export default App;