import React from 'react';
import ReactDOM from 'react-dom';
import SizedPlayer, { parseAspectRatio } from '../SizedPlayer';

describe('<SizedPlayer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SizedPlayer url="video.mp4" playing={false} />, div);
  });

  it('it parses aspect ratios correctly', () => {
    expect(parseAspectRatio('1:2')).toEqual([1, 2]);
    expect(parseAspectRatio('1:2:3')).toEqual([16, 9]);
    expect(parseAspectRatio('foobar')).toEqual([16, 9]);
  });
});
