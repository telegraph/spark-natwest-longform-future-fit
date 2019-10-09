const analytics = {
  send: (value = 'no value') => {
    const CID = '2287';
    const CIDLABEL = 'cid:';
    const { _satellite } = window;

    if (_satellite !== undefined) {
      _satellite.setVar('interactive', `${CIDLABEL} ${CID} - ${value}`);
      _satellite.track('sparkinteractive');
    } else {
      console.log('interactive', `${CIDLABEL} ${CID} - ${value}`);
    }
  },
};

export default analytics;
