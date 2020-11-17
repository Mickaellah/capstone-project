import React from 'react';
import ReactDOM from 'react-dom';

import { ContextProvider } from './components/Context';

import App from './App';

ReactDOM.render(<ContextProvider>
    <App />
</ContextProvider>, document.getElementById('root'));
