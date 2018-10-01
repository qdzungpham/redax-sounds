import React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 -48 512 512" {...props}>
    <path d="M112 16h288v320H112zm0 0" fill="#e4edfb" />
    <path d="M112 16h288v48H112zm0 0" fill="#d7e1f2" />
    <path d="M96 336h320v80H96zm0 0" fill="#77959e" />
    <path d="M96 336h320v48H96zm0 0" fill="#62808c" />
    <path d="M384 0h128v352H384zm0 0" fill="#c98a2e" />
    <path d="M384 32h128v32H384zm0 0" fill="#ad712c" />
    <path d="M0 0h128v352H0zm0 0" fill="#c98a2e" />
    <g fill="#ad712c">
      <path d="M0 32h128v32H0zm0 0M0 96h128v32H0zm0 0M0 160h128v32H0zm0 0M0 224h128v32H0zm0 0M0 288h128v32H0zm0 0M384 96h128v32H384zm0 0M384 160h128v32H384zm0 0M384 224h128v32H384zm0 0M384 288h128v32H384zm0 0" />
    </g>
    <path d="M112 160h288v32H112zm0 0" fill="#c59969" />
    <path d="M160 64h32v32h-32zm0 0M320 64h32v32h-32zm0 0" fill="#fff" />
    <path
      d="M352 160h48v32h-48zm0 0M112 160h48v32h-48zm0 0M208 160h96v32h-96zm0 0"
      fill="#ba8a5a"
    />
    <path d="M240 16h32v320h-32zm0 0" fill="#c59969" />
    <path d="M240 16h32v48h-32zm0 0M240 288h32v48h-32zm0 0" fill="#ba8a5a" />
    <path d="M416 352H96V0h320zm-288-32h256V32H128zm0 0" fill="#c59969" />
  </svg>
);

export default SvgComponent;
