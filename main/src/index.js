import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Welcome name = {<strong>Gabriel</strong>} age = {21} />
 </div>
);

