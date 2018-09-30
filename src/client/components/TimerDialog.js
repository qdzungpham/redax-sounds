import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SoundManagerDialog = (props) => {
  const {
    onToggleTimerDialog, onEnableTimer, timer, ...other
  } = props;

  const handleClose = () => {
    onToggleTimerDialog(false);
  };

  const enableTimer = (minutes) => {
    onEnableTimer(minutes);
    onToggleTimerDialog(false);
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="timer" {...other}>
      <div className="timer-dialog">
        <List>
          <ListItem onClick={() => enableTimer(0)} button selected={timer === 0}>
            <ListItemText primary="No timer" />
          </ListItem>
          <ListItem onClick={() => enableTimer(5)} button selected={timer === 5}>
            <ListItemText primary="5 minutes" />
          </ListItem>
          <ListItem onClick={() => enableTimer(10)} button selected={timer === 10}>
            <ListItemText primary="10 minutes" />
          </ListItem>
          <ListItem onClick={() => enableTimer(15)} button selected={timer === 15}>
            <ListItemText primary="15 minutes" />
          </ListItem>
          <ListItem onClick={() => enableTimer(20)} button selected={timer === 20}>
            <ListItemText primary="20 minutes" />
          </ListItem>
          <ListItem onClick={() => enableTimer(30)} button selected={timer === 30}>
            <ListItemText primary="30 minutes" />
          </ListItem>
          <ListItem onClick={() => enableTimer(40)} button selected={timer === 40}>
            <ListItemText primary="40 minutes" />
          </ListItem>
          <ListItem onClick={() => enableTimer(60)} button selected={timer === 60}>
            <ListItemText primary="1 hour" />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
};

export default SoundManagerDialog;
