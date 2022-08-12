import React from 'react';
import ReactDOM from 'react-dom';
import Reducer, { initialState } from './Reducer';
import { StateProvider } from './StateProvider';
import App from './App';

const root  = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
<StateProvider reducer={Reducer} initialState={initialState}>
    <App />
</StateProvider>
    </>
)