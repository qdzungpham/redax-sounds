import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SoundLists from '../components/SoundLists';
import { toggleSound, changeSoundVolume, resetIsPaused } from '../actions';

const mapStateToProps = state => ({
  sounds: state.soundPlayersReducer
});

const mapDispatchToProps = dispatch => ({
  onToggleSound: id => dispatch(toggleSound(id)),
  onChangeSoundVolume: (id, value) => dispatch(changeSoundVolume(id, value)),
  onResetIsPaused: () => dispatch(resetIsPaused())
});

const AppContainer = (props) => {
  const {
    sounds, onToggleSound, onChangeSoundVolume, onResetIsPaused
  } = props;
  return (
    <SoundLists
      sounds={sounds}
      onToggleSound={onToggleSound}
      onChangeSoundVolume={onChangeSoundVolume}
      onResetIsPaused={onResetIsPaused}
    />
  );
};

AppContainer.propTypes = {
  sounds: PropTypes.any.isRequired,
  onToggleSound: PropTypes.func.isRequired,
  onChangeSoundVolume: PropTypes.func.isRequired,
  onResetIsPaused: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
