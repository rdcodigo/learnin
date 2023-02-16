import React from "react";


class CounterClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {countClass: this.props.countClass};
        this.add = this.add.bind(this);
    }

    add(){
        this.setState(
            (state)=>{
                return {
                    countClass: state.countClass + 1
                }
            },
            ()=>{
                console.log(this.state)
                localStorage.setItem('state', JSON.stringify(this.state))
            }
        )
    };

    shouldComponentUpdate(){
        return true;
    }
    
    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem('state')))
    }

    componentWillUnmount(){
        // Método utilizado sempre que o componete for removido da tela.
    }

    render(){
        return(
            <div>
                <h1>CounterClass: {this.state.countClass}</h1>
                <button onClick={this.add}>ADD +1</button>
            </div>
        )
    };
}

export default CounterClass;