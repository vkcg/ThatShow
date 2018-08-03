import React from 'react';
import ShowList from '../containers/show-list';
import ShowDetail from '../containers/show-detail';
function App() {
  return (

    <div>
      <div className='container-fluid'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>Tv Shows</h1>
          </div>
        </div>
      </div>
      <ShowList />
      <hr />
      {/* <h2>Show Details:</h2>
            <ShowDetail/> */}
    </div>
  )

}

export default App;