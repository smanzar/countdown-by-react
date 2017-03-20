import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            day: 0,
            hour:0,
            min: 0,
            sec: 0
        }
    }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.props.deadline),1000);
    }
    getTimeUntil(deadline){
        const time= Date.parse(deadline) - Date.parse(new Date());
        const sec=Math.floor ((time/1000) % 60);
        const min=Math.floor((time/1000/60) % 60);
        const hour=Math.floor((time/(1000*60*60))% 24);
        const day=Math.floor(time/(1000*60*60*24));
        this.setState({day,hour,min,sec});
    }
    leading0(num){
        return num< 10 ? '0'+num : num; //this is a if else condition n called ternary operator
    }
    render(){
        
        return(
            <div  className="container">
                   <b> <div className="col-md-3 clock-day">{this.leading0(this.state.day)} days</div>
                    <div className="col-md-3 clock-hour">{this.leading0(this.state.hour)} hour</div>
                    <div className="col-md-3 clock-min">{this.leading0(this.state.min)} minute</div>
                    <div className="col-md-3 clock-sec">{this.leading0(this.state.sec)} second</div> </b>
                 </div>
        );
    }
}

export default Clock;

