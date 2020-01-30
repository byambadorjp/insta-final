import React from 'react'
import Story from './components/Story'
import './App.scss'
import stories from './data.js'
import 'materialize-css/dist/css/materialize.min.css'

const App = () => {
    return (
        <Story {...stories[0]}/>
    )
}

export default App;
