import React from "react";
class  Square extends React.Component{
    constructor(props){
        super(props);
        this.state={
            b:"2",
            c:"2",
            d:"2",
            e:"2",
            f:"2"
        }
    }
    changePi=()=>{
        this.setState({b:"1",c:"2",d:"2",e:"2",f:"2"});
    }
    changePi1=()=>{
        this.setState({b:"2",c:"1",d:"2",e:"2",f:"2"});
    }
    changePi2=()=>{
        this.setState({b:"2",c:"2",d:"1",e:"2",f:"2"});
    }
    changePi3=()=>{
        this.setState({b:"2",c:"2",d:"2",e:"1",f:"2"});
    }
    changePi4=()=>{
        this.setState({b:"2",c:"2",d:"2",e:"2",f:"1"});
    }
    changePi5=()=>{
        this.setState({b:"1",c:"1",d:"1",e:"1",f:"1"});
    }
render(){
    var side=this.props.le
    return (<> <input type="submit" value={"1st value"} onClick={this.changePi}></input><br></br>{this.state.b}<br></br>
    <input type="submit" value={"2st value"} onClick={this.changePi1}></input><br></br>{this.state.c}<br></br>
    <input type="submit" value={"3rd value"} onClick={this.changePi2}></input><br></br>{this.state.d}<br></br>
    <input type="submit" value={"4h value"} onClick={this.changePi3}></input><br></br>{this.state.e}<br></br>
    <input type="submit" value={"5th value"} onClick={this.changePi4}></input><br></br>{this.state.f}<br></br>
    <input type="submit" value={"ALL value"} onClick={this.changePi5}></input>
    </>);
}
}
export default Square