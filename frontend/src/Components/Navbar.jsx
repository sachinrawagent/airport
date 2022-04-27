import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom"
export default function Navbar() {
  const navigate=useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{cursor:'pointer'}} onClick={()=>{
            navigate("/");
          }}>
            Airport
          </Typography>
          <Typography variant="h6" color="inherit" component="div" sx={{ml:5,cursor:'pointer'}} onClick={()=>{
            navigate("/createflight")
          }}>
            Create Flight
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}