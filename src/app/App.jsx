import React from 'react';
import { ListView } from './ListView';

export const App = () => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title has-text-weight-normal">
            Linked list (iterable)
          </h1>
          <ListView iterable />
        </div>
        <div className="column">
          <h1 className="title has-text-weight-normal">
            Linked list (not iterable)
          </h1>
          <ListView />
        </div>
      </div>
    </div>
  </div>
);
