import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Producto1 from "./Producto1";
import Producto2 from "./Producto2";

function App() {

  return (

    <Stack>

      <Grid container>

        <Grid item lg={3} md={4} sm={6} xs={6} xl={3} sx={{border:"none"}}>
          <Card sx={{ maxWidth: 500, border: "none", textAlign : "left" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="src/Image/Producto4/Tenis_de_Senderismo_Eastrail_2.0_Negro_GZ3019_01_standard/Tenis_de_Senderismo_Eastrail_2.0_Negro_GZ3019_01_standard.avif"
                  alt="Tenis de Senderismo Eastrail 2.0"
                  />
                </CardActionArea>
                <Producto1/>
            </Card>
        </Grid>
      
      </Grid>
    </Stack>
  )
}

export default App