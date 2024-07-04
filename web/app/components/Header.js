import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

function GetRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Header() {
  const classes = useStyles();
  const [color, setColor] = useState(() => GetRandomColor());

    return (
        <AppBar position="static" style={{ backgroundColor: color }}>
            <Toolbar>
                <Typography className={classes.typographyStyles}>Profile</Typography>
                <StarBorderIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;