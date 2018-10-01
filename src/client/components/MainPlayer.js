import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
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
    timer,
    onEnableTimer
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
    <div className="main-player">
      {timer === 0 ? (
        <IconButton onClick={openTimerDialog} aria-label="Timer">
          <i className="material-icons md-36">timer</i>
        </IconButton>
      ) : (
        <Timer
          onEnableTimer={onEnableTimer}
          pauseAll={pauseAll}
          onToggleTimerDialog={onToggleTimerDialog}
          minutes={timer}
        />
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
    </div>
  );
};

MainPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
  soundsPlaying: PropTypes.array.isRequired,
  onTogglePauseSound: PropTypes.func.isRequired,
  isPaused: PropTypes.bool.isRequired,
  onTogglePauseMainPlayer: PropTypes.func.isRequired,
  numSoundsPlaying: PropTypes.number.isRequired,
  onToggleSoundMangerDialog: PropTypes.func.isRequired,
  onToggleTimerDialog: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  onEnableTimer: PropTypes.func.isRequired
};

export default withStyles(styles)(MainPlayer);
