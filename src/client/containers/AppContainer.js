import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SoundLists from '../components/SoundLists';
import { playSound, changeSoundVolume, resetIsPaused } from '../actions';

const mapStateToProps = state => ({
  sounds: state.soundPlayersReducer
});

const mapDispatchToProps = dispatch => ({
  onPlaySound: id => dispatch(playSound(id)),
  onChangeSoundVolume: (id, value) => dispatch(changeSoundVolume(id, value)),
  onResetIsPaused: () => dispatch(resetIsPaused())
});

const AppContainer = (props) => {
  const {
    sounds, onPlaySound, onChangeSoundVolume, onResetIsPaused
  } = props;
  return (
    <SoundLists
      sounds={sounds}
      onPlaySound={onPlaySound}
      onChangeSoundVolume={onChangeSoundVolume}
      onResetIsPaused={onResetIsPaused}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
