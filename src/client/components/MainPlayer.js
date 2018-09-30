import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Timer from './Timer';

const styles = () => ({
  badge: {
    top: 1,
    right: -10,
    // The border color match the background color.
    border: '2px solid #fff'
  }
});

const MainPlayer = (props) => {
  const {
    classes,
    numSoundsPlaying,
    soundsPlaying,
    onTogglePauseSound,
    isPaused,
    onTogglePauseMainPlayer,
    onToggleSoundMangerDialog,
    onToggleTimerDialog,
    timer
  } = props;

  const pauseAll = () => {
    soundsPlaying.forEach((id) => {
      onTogglePauseSound(id);
    });
    onTogglePauseMainPlayer();
  };

  const openSoundManager = () => {
    onToggleSoundMangerDialog(true);
  };

  const openTimerDialog = () => {
    onToggleTimerDialog(true);
  };

  return (
    <Paper className="main-player">
      {timer === 0 ? (
        <IconButton onClick={openTimerDialog} aria-label="Timer">
          <i className="material-icons md-36">timer</i>
        </IconButton>
      ) : (
        <Timer pauseAll={pauseAll} onToggleTimerDialog={onToggleTimerDialog} minutes={timer} />
      )}
      <IconButton onClick={pauseAll} aria-label="Play/pause">
        {isPaused ? (
          <i className="material-icons md-48">play_arrow</i>
        ) : (
          <i className="material-icons md-48">pause</i>
        )}
      </IconButton>
      <IconButton onClick={openSoundManager} aria-label="Volumes">
        <Badge badgeContent={numSoundsPlaying} color="primary" classes={{ badge: classes.badge }}>
          <i className="material-icons md-36">volume_up</i>
        </Badge>
      </IconButton>
    </Paper>
  );
};

export default withStyles(styles)(MainPlayer);
