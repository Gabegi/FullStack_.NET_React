import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">EShop</Typography>
      </Toolbar>
    </AppBar>
  );
}
