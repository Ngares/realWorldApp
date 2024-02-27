import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './Bootstrap';
import { store } from '../store';

const rootContainer = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootContainer);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
