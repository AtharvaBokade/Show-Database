
import Input_Data from './inputData';
import React from 'react';
class Home extends React.Component{
  submit_Data=()=>{
    console.log("Button is working")
  }
render(){
    return(
        <Input_Data submit={this.submit_Data.bind(this)}/>
        
    );
}
}
export default Home;