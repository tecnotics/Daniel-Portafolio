import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Tecnotics from "../../assets/Images/Tecnotics.png";
import Afw from "../../assets/Images/AFW.png";
import Eng from "../../assets/Images/EnigLogic.png";

const proyectos = [
  {
    id: 1,
    titulo: "Tecnotics Web",
    descripcion:
      "Pagina Web completa para la empresa Tecnotics, desarrollada en React, MUI, Node",
    imagen: Tecnotics,
    enlaceProyecto: "https://tecnotics.com/",
    enlaceCodigo: "https://github.com/tecnotics/TecnoTics",
  },
  {
    id: 2,
    titulo: "Apps For The World",
    descripcion: "Aplicativo web desarrollado en React, MUI, Node y Mongo DB",
    imagen: Afw,
    enlaceProyecto: "https://appsfortheworld.com/",
    enlaceCodigo: "https://github.com/tecnotics/APPS-FOR-THE-WORLD-FRONT-END",
  },
  {
    id: 3,
    titulo: "Enig Logic",
    descripcion: "ERP y sistema de gestion desarrollado en React",
    imagen: Eng,
    enlaceProyecto: "https://samn.netlify.app/",
    enlaceCodigo: "https://github.com/SamuelVasquezGonzalez/SA-MN-Front",
  },
];

const HoverCard = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create(["transform", "box-shadow"], {
    duration: theme.transitions.duration.enteringScreen,
  }),
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10], // Ajusta esto según prefieras
  },
}));

function MyWorks() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Proyectos Significativos
      </Typography>
      <Grid container spacing={4}>
        {proyectos.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
            <HoverCard>
              <CardMedia
                component="img"
                height="140"
                sx={{
                  objectFit: "cover",
                }}
                image={proyecto.imagen}
                alt={proyecto.titulo}
              />
              <CardContent
                sx={{
                  backgroundColor: "var(--bg-color)",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "var(--text-color)",
                  }}
                >
                  {proyecto.titulo}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--subtitle-color)",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {proyecto.descripcion}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  backgroundColor: "var(--bg-color)",
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  href={proyecto.enlaceProyecto}
                  target="_blank"
                >
                  Ver Proyecto
                </Button>
                <Button
                  size="small"
                  href={proyecto.enlaceCodigo}
                  target="_blank"
                >
                  Código Fuente
                </Button>
              </CardActions>
            </HoverCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyWorks;
