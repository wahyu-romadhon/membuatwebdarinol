import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { route } from "../routes";

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = route.map((nav) => nav.label);
  const [activePage, setactivePage] = useState(0);

  useEffect(() => {
    if (location) {
      const active = route.filter((e) => e.path === location.pathname);
      setactivePage(active[0].value);
    }
  }, []);

  const handleClick = (item, index) => {
    setactivePage(index);

    route.map((e) => {
      if (e.label === item) {
        return navigate(e.path);
      }
    });
  };

  return (
    <Box>
      <AppBar color="transparent" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">
            Youtube: Tutorial React JS (UseContext + Usereducer)
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={item}
                sx={{
                  cursor: "pointer",
                  mr: 1,
                  ml: 1,
                }}
                variant={index === activePage ? "contained" : "text"}
                onClick={() => handleClick(item, index)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: -1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
