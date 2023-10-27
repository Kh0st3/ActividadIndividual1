import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from './FavoriteIcon';

function Producto2(){
    return(
        <Stack>
            <Card sx={{ maxWidth: 500, border: "none", textAlign : "left", height:420 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="src/Image/Producto3/Tenis_de_Senderismo_Terrex_AX4_GORE-TEX_Gris_IF4866_01_standard/Tenis_de_Senderismo_Terrex_AX4_GORE-TEX_Gris_IF4866_01_standard.avif"
                  alt="Tenis de Senderismo Terrex AX4 GORE-TEX"
                  sx={{ position: 'relative' }}
                  />
                  <FavoriteIcon/>
                  <Typography variant="h8" component="div" sx={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'white', color: 'gray', padding: 1 }}>
                    <del style={{ color: 'gray' }}>$799.950</del> <span style={{ color: 'red' }}>$551.966</span>
                  </Typography>
                  <Typography variant="h8" component="div" sx={{ position: 'absolute', top: 230, left: 0, backgroundColor: 'white', color: 'gray', padding: 1, fontWeight: 'bold' }}>
                    -30%
                  </Typography>
                </CardActionArea>
                
              <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                  Tenis de Senderismo Terrex AX4 GORE-TEX
                </Typography>
                <Typography variant="body2" color="GrayText">Hombre TERREX</Typography>
                <Typography variant="body2" color="GrayText">4 colores · envío gratis</Typography>
              </CardContent>
            </Card>

          </Stack>
    )
}

export default Producto2;