import React,{Component} from 'react';



class Home extends Component {
constructor(){
    super()
    this.state={
        string:'My name is Nana'
    }
};
render(){
    return(
        <div>
<p>Hello there , {this.state.string}</p>
<button onClick={()=> this.setState({string: 'My name is Yaw'})}>Change Name</button>
</div>
    )
}


}








export default Home;