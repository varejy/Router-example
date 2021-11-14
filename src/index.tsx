import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router5';
import { initRouter } from '@router/initRouter';
import { CustomProvider } from 'rsuite';

const router = initRouter();

router.start(() =>
  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <CustomProvider theme="dark">
          <App />
        </CustomProvider>
      </RouterProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
