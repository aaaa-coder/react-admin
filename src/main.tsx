import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化css
import "reset-css"

// UI框架css

// 全局css
import "./assets/styles/init.scss"
import "./assets/styles/global.scss"
import App from './App'

import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
