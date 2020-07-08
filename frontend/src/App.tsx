import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Route from './template/routes'

const App = () => {
    return(
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    )
}

export default App