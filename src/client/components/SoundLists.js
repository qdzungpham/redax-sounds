import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SoundItem from './SoundItem';

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

function SoundLists(props) {
  const {
    classes, sounds, onToggleSound, onChangeSoundVolume, onResetIsPaused
  } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <SoundItem
            sound={sounds[0]}
            onToggleSound={onToggleSound}
            onChangeSoundVolume={onChangeSoundVolume}
            onResetIsPaused={onResetIsPaused}
          />
        </Grid>
        <Grid item xs={4}>
          <SoundItem
            sound={sounds[1]}
            onToggleSound={onToggleSound}
            onChangeSoundVolume={onChangeSoundVolume}
            onResetIsPaused={onResetIsPaused}
          />
        </Grid>
        <Grid item xs={4}>
          <SoundItem
            sound={sounds[2]}
            onToggleSound={onToggleSound}
            onChangeSoundVolume={onChangeSoundVolume}
            onResetIsPaused={onResetIsPaused}
          />
        </Grid>
      </Grid>
    </div>
  );
}

SoundLists.propTypes = {
  classes: PropTypes.object.isRequired,
  sounds: PropTypes.any.isRequired,
  onToggleSound: PropTypes.func.isRequired,
  onChangeSoundVolume: PropTypes.func.isRequired,
  onResetIsPaused: PropTypes.func.isRequired
};

export default withStyles(styles)(SoundLists);
