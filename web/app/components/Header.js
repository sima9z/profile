import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import getRandomColor from './GetRandomColor'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

function Header() {
  const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>Profile</Typography>
                <StarBorderIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header