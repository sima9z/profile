import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '../atoms/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    margin: 24,
  }
});

const BodyCard: React.FC = () => {
  const classes = useStyles();

  const goToExternalSite = (): void => {
    window.location.href = 'https://sign-dxuu.onrender.com/';
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          name
        </Typography>
        <Typography variant="h5" component="h2">
          島津 優
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          comment
        </Typography>
        <Typography variant="h5" component="h2">
          Runteq54期生<br />
          React難しい_(:3 」∠)_
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Created application
        </Typography>
        <Typography variant="h5" component="h2">
          <button onClick={goToExternalSite}>星の図鑑</button>
        </Typography>
        <Typography variant="h5" component="h2">
          <a href="https://dagashi.onrender.com/" target="_blank" rel="noopener noreferrer">
            だがしや
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BodyCard;