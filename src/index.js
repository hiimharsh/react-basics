import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCt3lYieC56jlyt4xLvo8-ode5nnkDaQyM'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('.container'));
