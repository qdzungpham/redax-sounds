import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
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
    onTogglePauseMainPlayer
  } = props;

  const pauseAll = () => {
    soundsPlaying.forEach((id) => {
      onTogglePauseSound(id);
    });
    onTogglePauseMainPlayer();
  };

  return (
    <Paper className="main-player">
      <IconButton aria-label="Timer">
        <i className="material-icons md-24">timer</i>
        <h4>1</h4>
      </IconButton>
      <IconButton onClick={pauseAll} aria-label="Play/pause">
        {isPaused ? (
          <i className="material-icons md-48">play_arrow</i>
        ) : (
          <i className="material-icons md-48">pause</i>
        )}
      </IconButton>
      <IconButton aria-label="Volumes">
        <Badge badgeContent={numSoundsPlaying} color="primary" classes={{ badge: classes.badge }}>
          <i className="material-icons md-36">volume_up</i>
        </Badge>
      </IconButton>
    </Paper>
  );
};

export default withStyles(styles)(MainPlayer);
