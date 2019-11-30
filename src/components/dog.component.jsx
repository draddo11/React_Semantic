import React,{Component} from 'react';






class Dogs extends Component{

    constructor(){
        super()
        this.state={
            dogs:[]
        };
    }

componentDidMount() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then( dogs => this.setState({dogs:dogs}))
}

render(){
    return
      
      
     

        
    }
}





export default Dogs;

