import React from 'react';
import 'semantic-ui-css/semantic.min.css';
// import cat from './'
import {Card , Icon} from 'semantic-ui-react';


const extra = (
    <div>
    <a>
      <Icon name='user' />
      16 Friends
    </a>
    </div>
    
  )

export const  Names =(props)=>{
   
    return(
        <div>
        <h1>Names Component</h1>
        <Card
        image='/src/components/cat.png'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
      />
        
        
        
        </div>
        
        
        )

}

