import * as React from "react"
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import "./scss/index.scss"

import configureStore from './js/main/store'
import App from "./js/main/components/App"

const store = configureStore({});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
