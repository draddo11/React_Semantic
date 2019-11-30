import React,{Component} from 'react';






class Star extends Component {
    constructor(){
        super()
        this.state={
            planets:[]
        };
    }



    componentDidMount(){
        fetch('https://swapi.co/api/planets/7')
        .then(response => response.json())
        .then(planets => this.setState({planets:planets}))
    }

    render(){
        return(
            <div>
            {
            this.state.planets( planet => (
            <h1 key={planet.id}>{planet.name} </h1>
            ))}
            </div>
        );
    }
}



export default Star;