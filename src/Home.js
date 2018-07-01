import React from 'react'
import './Home.css';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1 className="title">Welcome to Whistle!</h1>
        <img alt="App Icon" width="20%" src="Bitmap.png"/>
        {/* <table className="titleBar"> 
          <tbody>
            <tr>
              <td>
              </td>
              <td width="8"/>
              <td>
                <h1>News</h1>
              </td>
            </tr>
          </tbody>
        </table> */}

      </div>
    );
  }
}

export default Home;
