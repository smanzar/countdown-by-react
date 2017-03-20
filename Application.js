import React from 'React';
import ReactDOM from 'react-dom';

import Clock from './clock';

class Application extends React.Component{
    constructor(props){
        super(props);
        this.state={
            deadline:'December 25, 2017',
            newDeadline:''
        }
    }
     changeDeadline(){
            console.log('set state ' ,this.state);
            this.setState({deadline: this.state.newDeadline})
   }
    
    render(){
        return(
            <div>
                <div className="container text-center">
                    <h1 className="h1">
                        Champ Countdown is At {this.state.deadline}
                    </h1>
                </div>
                   
                    <Clock deadline={this.state.deadline} />

                    <div className="text-center form-inline">    
                        <input type="text" placeholder="Enter New Date" className="form-control"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        /> <button className="btn btn-info" onClick={() => this.changeDeadline()}>
                            Submit
                        </button>
                    </div>
            </div>
        );
    }
}



export default Application;
