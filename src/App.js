import React,{Component} from 'react';
// import Star from './components/swapi.component'
import Home from './components/home.component'
import 'semantic-ui-css/semantic.min.css';
import {Card } from 'semantic-ui-react';
import {Names} from './components/names.component';
import CardView from './components/cardview.component';

class  App extends Component  {
  constructor(){
    super()
      this.state={
      string: 'Hi there my name  Chris',
      jokes:[]
    };
  }

    componentDidMount(){ 
      fetch(`https://official-joke-api.appspot.com/jokes/programming/ten`)
      .then(response => response.json())
      .then(jokes =>  this.setState({jokes:jokes}));
    }
    render()
    {
      return (
      <div className="App">
      <CardView/>
        <header className="App-header">
        <Home name = 'Chris'/>
        <Names name= "NANA"/>
       
         {
           this.state.jokes.map(joke => (
            <h1 key={joke.id}>{joke.setup},{joke.punchline} </h1>
           ))
          
          
         }  
     

        </header>
        
        
      
      </div>
    );
  }
    

 
}

export default App;
