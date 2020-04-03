import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    maxWidth: '275px',
    display: 'inline',
    padding: '50px',
    margin: '20px',
    boxShadow: '5px 5px 15px rgb(78, 78, 78)',
  },
});

function OnlineCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" classes={classes} style={{padding: "20px", width: "210px"}}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{paddingBottom: "10px"}}>
          Online Mode
        </Typography>
        <Typography color="textSecondary" style={{fontSize: "14px"}}>
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          onChange={props.handleSwitch}
          checked={props.checkedOnline}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </CardActions>
    </Card>
  )
}

export default OnlineCard;