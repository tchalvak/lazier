/* eslint-disable import/extensions */
import { app } from './app.js';


const render = ({ element }) => {
  const fireOnReady = () => {
    app().then(html => {
      // @ts-ignore
      document.getElementById(element ?? 'app').innerHTML = html;
    });
  }
  document.addEventListener("DOMContentLoaded", fireOnReady);
}

// Renders the app, against the root id element
render({ app: 'app' });
