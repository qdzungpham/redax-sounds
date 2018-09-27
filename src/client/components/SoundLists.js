import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SoundItem from './SoundItem';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function SoundLists(props) {
  const {
    classes, sounds, onPlaySound, onChangeSoundVolume, onResetIsPaused
  } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <SoundItem
            sound={sounds[0]}
            onPlaySound={onPlaySound}
            onChangeSoundVolume={onChangeSoundVolume}
            onResetIsPaused={onResetIsPaused}
          />
        </Grid>
        <Grid item xs={4}>
          <SoundItem
            sound={sounds[1]}
            onPlaySound={onPlaySound}
            onChangeSoundVolume={onChangeSoundVolume}
            onResetIsPaused={onResetIsPaused}
          />
        </Grid>
        <Grid item xs={4}>
          <SoundItem
            sound={sounds[2]}
            onPlaySound={onPlaySound}
            onChangeSoundVolume={onChangeSoundVolume}
            onResetIsPaused={onResetIsPaused}
          />
        </Grid>
      </Grid>
    </div>
  );
}

SoundLists.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SoundLists);
