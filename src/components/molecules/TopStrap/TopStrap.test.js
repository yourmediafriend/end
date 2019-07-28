import React from 'react';
import ReactDOM from 'react-dom';
import TopStrap from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopStrap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
