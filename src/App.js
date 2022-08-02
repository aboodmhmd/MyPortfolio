import "./App.css";
import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useLocalStorage from "use-local-storage";
import Toggle from "./components/Animation/button4/animat";
import React from "react";
import Motion from "./components/Routes/Routes"
function App() {
  const [toggled, setToggled] = useLocalStorage("theme" ? true : false);
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    const newThemeM = theme === false ? true : false;
    setToggled((newThemeM) => !newThemeM);
  };


  return (

    <div className="top_con" data-theme={theme}>
      <Container>
        <Toggle toggled={toggled} onClick={handleClick} />
        <Grid container spacing={5}>
          <Grid item sm={3.5}>
            <Profile />
          </Grid>
          <Grid item xs sm={8.5}>
            <Router>
              <Header />
              <div className="main-content container_shadow">
                <Motion />
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
