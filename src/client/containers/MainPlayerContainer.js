import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainPlayer from '../components/MainPlayer';
import SoundManagerDialog from '../components/SoundManagerDialog';
import TimerDialog from '../components/TimerDialog';
import {
  togglePauseSound,
  togglePauseMainPlayer,
  changeSoundVolume,
  toggleSound,
  changeSystemVolume,
  toggleSoundManageDialog,
  toggleTimerDialog,
  enableTimer
} from '../actions';

const mapStateToProps = state => ({
  sounds: state.soundPlayersReducer,
  soundsPlaying: state.mainPlayerReducer.soundsPlaying,
  numSoundsPlaying: state.mainPlayerReducer.numSoundsPlaying,
  isPlaying: state.mainPlayerReducer.isPlaying,
  isPaused: state.mainPlayerReducer.isPaused,
  isSoundMangerDialogOpen: state.mainPlayerReducer.isSoundMangerDialogOpen,
  isTimerDialogOpen: state.mainPlayerReducer.isTimerDialogOpen,
  systemVolume: state.mainPlayerReducer.systemVolume,
  timer: state.mainPlayerReducer.timer
});

const mapDispatchToProps = dispatch => ({
  onTogglePauseSound: id => dispatch(togglePauseSound(id)),
  onTogglePauseMainPlayer: () => dispatch(togglePauseMainPlayer()),
  onToggleSoundMangerDialog: value => dispatch(toggleSoundManageDialog(value)),
  onChangeSoundVolume: (id, value) => dispatch(changeSoundVolume(id, value)),
  onToggleSound: id => dispatch(toggleSound(id)),
  onChangeSystemVolume: value => dispatch(changeSystemVolume(value)),
  onToggleTimerDialog: value => dispatch(toggleTimerDialog(value)),
  onEnableTimer: minutes => dispatch(enableTimer(minutes))
});

const MainPlayerContainer = (props) => {
  const {
    sounds,
    soundsPlaying,
    isPlaying,
    onTogglePauseSound,
    isPaused,
    onTogglePauseMainPlayer,
    numSoundsPlaying,
    isSoundMangerDialogOpen,
    onToggleSoundMangerDialog,
    onChangeSoundVolume,
    onToggleSound,
    systemVolume,
    onChangeSystemVolume,
    isTimerDialogOpen,
    onToggleTimerDialog,
    timer,
    onEnableTimer
  } = props;

  return (
    <div>
      {!isPlaying ? (
        <div />
      ) : (
        <MainPlayer
          soundsPlaying={soundsPlaying}
          numSoundsPlaying={numSoundsPlaying}
          isPlaying={isPlaying}
          onTogglePauseSound={onTogglePauseSound}
          isPaused={isPaused}
          onTogglePauseMainPlayer={onTogglePauseMainPlayer}
          onToggleSoundMangerDialog={onToggleSoundMangerDialog}
          onToggleTimerDialog={onToggleTimerDialog}
          timer={timer}
        />
      )}

      <SoundManagerDialog
        sounds={sounds}
        soundsPlaying={soundsPlaying}
        onToggleSoundMangerDialog={onToggleSoundMangerDialog}
        open={isSoundMangerDialogOpen}
        onChangeSoundVolume={onChangeSoundVolume}
        onToggleSound={onToggleSound}
        systemVolume={systemVolume}
        onChangeSystemVolume={onChangeSystemVolume}
      />

      <TimerDialog
        open={isTimerDialogOpen}
        onEnableTimer={onEnableTimer}
        timer={timer}
        onToggleTimerDialog={onToggleTimerDialog}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPlayerContainer);
