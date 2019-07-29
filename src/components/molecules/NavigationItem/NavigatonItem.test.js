import React from 'react';
import ReactDOM from 'react-dom';
import NavigatonItem from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigatonItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
