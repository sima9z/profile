import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GetRandomColor from './getRandomColor' 

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

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