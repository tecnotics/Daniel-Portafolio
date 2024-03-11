import {
  Box,
  Button,
  Stack,
  Typography,
  Paper,
  Grid,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Daniel from "../../assets/Images/daniel.jpg";
import "./Home.css";
import MyWorks from "../../Components/MyWorks/MyWorks";
import WppBoton from "../../Components/WppBoton/WppBoton";

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          pt: 8,
          marginTop: "110px"
        }}
        className="fondo-box"
      >
        <Paper elevation={3} sx={{ p: 3, mb: 5 }} className="fondo-paper">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box
                className="fondo-box2"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Typography
                  variant={isSmallScreen ? "h4" : "h2"}
                  component="h1"
                  gutterBottom
                  sx={{ color: "var(--text-color)" }}
                >
                  ¡Hola, soy Daniel León!
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ color: "var(--text-color)" }}
                >
                  Desarrollador Full Stack
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, mb: 2, color: "var(--text-color)" }}
                >
                  Apasionado por crear soluciones digitales innovadoras. Con
                  experiencia en React, MUI, Remix Icon, y mucho más.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/about"
                  >
                    Conoce más sobre mí
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<span className="ri-code-line"></span>}
                    component="a"
                    href="https://github.com/danielleon"
                    target="_blank"
                  >
                    Mira mi código
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" justifyContent="center">
                <Avatar
                  alt="Daniel León"
                  src={Daniel}
                  sx={{
                    width: 200,
                    height: 200,
                    border: 2,
                    borderColor: "var(--link-color)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <MyWorks />
      <WppBoton/>
    </>
  );
}

export default Home;
