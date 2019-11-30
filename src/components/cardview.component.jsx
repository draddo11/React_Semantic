import React from 'react';

import  'semantic-ui-css/semantic.min.css';
import {Card , Icon} from 'semantic-ui-react';
// import App from '../App';






const CardView = () => {

    const jokes = [
        {"id":24,"meta":"programming","setup":"A SQL query walks into a bar, walks up to two tables and asks...","description":"'Can I join you?'"},
        {"id":72,"meta":"programming","setup":"I was gonna tell you a joke about UDP...","description":"...but you might not get it."},
        {"id":26,"meta":"programming","setup":"If you put a million monkeys at a million keyboards, one of them will eventually write a Java program","description":"the rest of them will write Perl"},
        {"id":35,"meta":"programming","setup":"Why do Java programmers wear glasses?","description":"Because they don't C#"},
        {"id":29,"meta":"programming","setup":"There are 10 types of people in this world...","description":"Those who understand binary and those who don't"},
        {"id":56,"meta":"programming","setup":"How do you check if a webpage is HTML5?","description":"Try it out on Internet Explorer"},{"id":380,"meta":"programming","setup":"There are 10 kinds of people in this world.","description":"Those who understand binary, those who don't, and those who weren't expecting a base 3 joke."},
        {"id":382,"meta":"programming","setup":"What did the router say to the doctor?","description":"It hurts when IP."},
        {"id":27,"meta":"programming","setup":"['hip', 'hip']","description":"(hip hip array)"},
        {"id":33,"meta":"programming","setup":"Which song would an exception sing?","description":"Can't catch me - Avicii"}
    ]


return(
jokes.map(jokes =>(
    <Card fluid color='red' header={jokes.setup }
     meta={jokes.description}></Card>
     
    //

)
)

);

}

 export default CardView;