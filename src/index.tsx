import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'Bootstrap/Application';
import { store } from 'Bootstrap/Store';

const rootContainer = document.getElementById('root');

if (rootContainer) {
    const root = createRoot(rootContainer);

    root.render(
        <React.StrictMode>
            <Provider store={ store }>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
    );
}
