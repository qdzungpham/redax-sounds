import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainPlayer from '../components/MainPlayer';
import { togglePauseSound, togglePauseMainPlayer } from '../actions';

const mapStateToProps = state => ({
  soundsPlaying: state.mainPlayerReducer.soundsPlaying,
  numSoundsPlaying: state.mainPlayerReducer.numSoundsPlaying,
  isPlaying: state.mainPlayerReducer.isPlaying,
  isPaused: state.mainPlayerReducer.isPaused
});

const mapDispatchToProps = dispatch => ({
  onTogglePauseSound: id => dispatch(togglePauseSound(id)),
  onTogglePauseMainPlayer: () => dispatch(togglePauseMainPlayer())
});

const MainPlayerContainer = (props) => {
  const {
    soundsPlaying,
    isPlaying,
    onTogglePauseSound,
    isPaused,
    onTogglePauseMainPlayer,
    numSoundsPlaying
  } = props;

  return soundsPlaying.length === 0 ? (
    <div />
  ) : (
    <MainPlayer
      soundsPlaying={soundsPlaying}
      numSoundsPlaying={numSoundsPlaying}
      isPlaying={isPlaying}
      onTogglePauseSound={onTogglePauseSound}
      isPaused={isPaused}
      onTogglePauseMainPlayer={onTogglePauseMainPlayer}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPlayerContainer);
