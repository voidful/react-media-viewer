import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from '../index';

describe('<VideoPlayer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VideoPlayer url="video.mp4" />, div);
  });
});
