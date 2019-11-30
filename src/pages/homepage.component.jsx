import React,{Component} from  'react';
import  'semantic-ui-css/semantic.min.css';
import {Card , Icon} from 'semantic-ui-react';
import CardView from '../components/cardview.component';
import LinkedCard from '../components/linkedcard.component';





class HomePage extends Component{
    constructor(){
        super()
            this.state={
                string: 'HOMEPAGE'     
            }
            

    };
    render(){
        return(
            <div>
            <Card.Group>
            <Card fluid centered color='yellow' header='Welcome To My Homepage'></Card>
            </Card.Group>
            <LinkedCard/>
            <CardView/>
           
            </div>
        )
    }
   
    
}




export default HomePage;