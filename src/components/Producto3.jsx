import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from './FavoriteIcon';


function Producto3(){
    return(
        <Stack>
            <Card sx={{ maxWidth: 500, border: "none", textAlign : "left", height:420 }}>  
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="src/Image/Producto2/Tenis_de_Senderismo_Terrex_AX4_Negro_HQ1045_01_standard/Tenis_de_Senderismo_Terrex_AX4_Negro_HQ1045_01_standard.avif"
                  alt="Tenis de Senderismo Terrex AX4"
                  sx={{ position: 'relative' }}
                  />
                  <FavoriteIcon/>
                  <Typography variant="h8" component="div" sx={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'white', color: 'gray', padding: 1 }}>
                    <del style={{ color: 'gray' }}>$499.950</del> <span style={{ color: 'red' }}>$394.961</span>
                  </Typography>
                  <Typography variant="h8" component="div" sx={{ position: 'absolute', top: 230, left: 0, backgroundColor: 'white', color: 'gray', padding: 1, fontWeight: 'bold' }}>
                    -20%
                  </Typography>
                </CardActionArea>
                
              <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                  Tenis de Senderismo Terrex AX4
                </Typography>
                <Typography variant="body2" color="GrayText">TERREX</Typography>
                <Typography variant="body2" color="GrayText">3 colores · envío gratis</Typography>
              </CardContent>
              </Card>            

          </Stack>
    )
}

export default Producto3;