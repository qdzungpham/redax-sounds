import React from 'react';

import RainLight from './RainLight';
import RainNormal from './RainNormal';
import RainThunders from './RainThunders';

const Icon = (props) => {
  switch (props.name) {
    case 'rainLight':
      return <RainLight {...props} />;
    case 'rainNormal':
      return <RainNormal {...props} />;
    case 'rainThunders':
      return <RainThunders {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
