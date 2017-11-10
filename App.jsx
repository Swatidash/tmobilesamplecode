import React from 'react';


class App extends React.Component {
   render() {

      
      var myStyle = {
          fontSize: 60,
          color: 'white',
          textAlign: 'center',
      }
    var myStyle1 = {
        fontSize:35,
        color: 'white',
        textAlign: 'center',
        marginTop: -40,
  }
    var mystyle2 = {
        height: 100,
        width: 400,
        backgroundColor: 'white',
        marginLeft: 550,
        marginTop: 10,
        textAlign: 'center',
        color: 'red',
        display: 'inline-block',
    
    
  }

        return (
            <div>
                
                
                <h1 style = {myStyle}>Welcome To T-Mobile!</h1>
                <h3 style = {myStyle1}>We'r excited to meet you</h3>
            <div style = {mystyle2}>400X200</div>
            <div> This is div 2</div>
            </div>
            
        );
    }
    }

    export default App;
