import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IImageContainer } from "./interface";

const ImageContainer = ({ img_src, alt, link, data }: IImageContainer) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link, { state: data });
  };

  return (
    <div className="image-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={img_src} alt={alt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleClick} size="small" color="primary">
            Ver detalle
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ImageContainer;
