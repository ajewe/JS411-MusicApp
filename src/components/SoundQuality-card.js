import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '275px',
    display: 'inline',
    padding: '50px',
    margin: '20px',
    boxShadow: '5px 5px 15px rgb(78, 78, 78)',
  },
});

function SoundQualityCard(props) {
  const classes = useStyles();

  return (
      <Card variant="outlined" classes={classes} style={{padding: "20px", width: "210px"}}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{paddingBottom: "10px"}}>
            Sound Quality
          </Typography>
          <Typography color="textSecondary" style={{fontSize: "14px"}}>
            Manually control the music quality in event of poor connection
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl style={{ width: "180px" }}>
            <Select
              defaultValue={'normal'}
              onChange={props.handleSelect}
            >
              <MenuItem value={'low'}>Low</MenuItem>
              <MenuItem value={'normal'}>Normal</MenuItem>
              <MenuItem value={'high'}>High</MenuItem>
            </Select>
          </FormControl>
        </CardActions>
      </Card>
  )
}

export default SoundQualityCard;