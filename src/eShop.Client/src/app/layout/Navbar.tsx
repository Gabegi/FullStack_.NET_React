import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const midLinks = [
  {
    title: "catalog",
    path: "/catalog",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const rightLinks = [
  {
    title: "login",
    path: "/login",
  },
  {
    title: "register",
    path: "/register",
  },
];

export default function Navbar() {
  const darkMode = true;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">EShop</Typography>
        <IconButton>
          {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}{" "}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
