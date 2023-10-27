import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from './FavoriteIcon';


function Producto1(){
    return(
        <Stack>

            <Card sx={{ maxWidth: 500, border: "none", textAlign : "left", height:420 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="src/Image/Producto4/Tenis_de_Senderismo_Eastrail_2.0_Negro_GZ3019_01_standard/Tenis_de_Senderismo_Eastrail_2.0_Negro_GZ3019_01_standard.avif"
                  alt="Tenis de Senderismo Eastrail 2.0"
                  sx={{ position: 'relative' }}
                  />
                  <FavoriteIcon/>
                  <Typography variant="h8" component="div" sx={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'white', color: 'gray', padding: 1 }}>
                    <del style={{ color: 'gray' }}>$449.950</del> <span style={{ color: 'red' }}>$332.963</span>
                  </Typography>
                  <Typography variant="h8" component="div" sx={{ position: 'absolute', top: 230, left: 0, backgroundColor: 'white', color: 'gray', padding: 1, fontWeight: 'bold' }}>
                    -25%
                  </Typography>
                </CardActionArea>
                
              <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                  Tenis de Senderismo Eastrail 2.0
                </Typography>
                <Typography variant="body2" color="GrayText">Hombre TERREX</Typography>
                <Typography variant="body2" color="GrayText">2 colores · envío gratis</Typography>
              </CardContent>
            </Card>

          </Stack>
    )
}

export default Producto1;