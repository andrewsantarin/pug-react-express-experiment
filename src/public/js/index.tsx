import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { test } from './test';

const API_URL = 'https://jsonplaceholder.typicode.com';

function getPosts(url: string = '') {
  return axios.get(`${API_URL}${url}`);
}

const postsRequest = getPosts('/posts');
postsRequest.then(console.log).catch(console.error);
test(console.log);

ReactDOM.render(
  <App value={123} />,
  document.getElementById('app')
);
