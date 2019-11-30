class CardView extends React.Component{

    constructor(){
        super()

this.state= {"id":24,
"type":"programming Joke",
"setup":"A SQL query walks into a bar, walks up to two tables and asks...",
"punchline":"'Can I join you?'" }

    }
    
render(){

    return(
        <div>  
        <h5 key=
        {this.state.id}>
      {console.log(this.state.type) }
        </h5>
        <Card >

        <Card.Content header={this.state.type}/>
        <Card.Content  description ={this.state.setup}/>
        <Card.Content  description ={this.state.punchline}/>
       
        
        </Card>

        </div>    )  
}

}
    
       
  

    





const data = [
    {"id":24,"type":"programming","setup":"A SQL query walks into a bar, walks up to two tables and asks...","punchline":"'Can I join you?'"},
    {"id":72,"type":"programming","setup":"I was gonna tell you a joke about UDP...","punchline":"...but you might not get it."},
    {"id":26,"type":"programming","setup":"If you put a million monkeys at a million keyboards, one of them will eventually write a Java program","punchline":"the rest of them will write Perl"},
    {"id":35,"type":"programming","setup":"Why do Java programmers wear glasses?","punchline":"Because they don't C#"},
    {"id":29,"type":"programming","setup":"There are 10 types of people in this world...","punchline":"Those who understand binary and those who don't"},
    {"id":56,"type":"programming","setup":"How do you check if a webpage is HTML5?","punchline":"Try it out on Internet Explorer"},{"id":380,"type":"programming","setup":"There are 10 kinds of people in this world.","punchline":"Those who understand binary, those who don't, and those who weren't expecting a base 3 joke."},
    {"id":382,"type":"programming","setup":"What did the router say to the doctor?","punchline":"It hurts when IP."},
    {"id":27,"type":"programming","setup":"['hip', 'hip']","punchline":"(hip hip array)"},
    {"id":33,"type":"programming","setup":"Which song would an exception sing?","punchline":"Can't catch me - Avicii"}
]



console.table({data});


const CardView =()=>(
<div>
<Card>
<Card.Content>   
<Card.Header key={data.id}> 
data.punchline
<Card.Description>
{data.setup}
</Card.Description>
</Card.Header>

</Card.Content>
</Card>

</div>
) 


 export default CardView;