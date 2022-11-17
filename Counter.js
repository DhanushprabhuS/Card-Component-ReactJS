import React, { Component } from 'react';

class Counter extends Component {
    constructor()
    {
        super()
        console.log("Constructor reached");
        this.state = 
        {
            counter : 0,
            name : "Kanish"
        }
        this.IncFun = this.IncFun.bind(this);
        this.DecFun = this.DecFun.bind(this);
        this.NameFun = this.NameFun.bind(this);
    }
    IncFun(event)
    {
        this.setState({counter:this.state.counter+1})
    }
    DecFun()
    {
        this.setState({counter:this.state.counter-1})
    }
    NameFun()
    {
        this.setState({name:"dhanush"});
    }
    render() {
        return (
            <div>
            <h2>Counter Component</h2>
            <h3>{this.state.name}</h3>
                {
                    this.state.counter<0
                    ?
                    <h1>Negative Value</h1>
                    :
                    <h1>{this.state.counter}</h1>
                }
               <input type="Button" value="Increment by 1" onClick={this.IncFun} />
               <br></br>
               <input type="button" value="Decrement by 1" onClick={this.DecFun} />
               <input type="button" value="Change Name" onClick={this.NameFun} />
               <hr></hr>
            </div>
        );
    }
}

export default Counter;
