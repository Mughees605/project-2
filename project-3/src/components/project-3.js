import React from "react";


class TimeWrapper extends React.Component{

constructor(props){

    super(props)

    this.state = {timer : null,timeLeft:null}

    this.startTimer = this.startTimer.bind(this);
}

startTimer(timeLeft){

    clearInterval(this.state.timer)

    let timer = setInterval(()=>{
    var timeLeft = this.state.timeLeft - 1 
   if(timeLeft == 0 ) clearInterval(timer);
   this.setState({timeLeft:timeLeft});
    },1000)

    return this.setState({
        timeLeft:timeLeft,
        timer:timer
    })

}
 render(){
   return (
       <div className = "row-fluid">

            <h2>Timer</h2>

            <div className = "btn-group" role = "group">
                <Button time = "5" startTimer = {this.startTimer}>5</Button>
                <Button time = "10" startTimer = {this.startTimer}>10</Button>
                <Button time = "15" startTimer = {this.startTimer}>15</Button>
            </div>
      <Timer timeLeft = {this.state.timeLeft}/>
       </div>
   )
 }
}
class Timer extends React.Component{
    render(){
    if(this.props.timeLeft == 0 || this.props.timeLeft == null){

        return <div />
        
     }
     else{
         return <h1>Time:Left {this.props.timeLeft}</h1>
     }
    }
}
class Button extends React.Component{
    startTimer(event){
       this.props.startTimer(this.props.time);
    }
    render(){
    return <button onClick = {this.startTimer.bind(this)} className = "btn btn-primary">{this.props.time} seconds</button>
    }
}
export default TimeWrapper;