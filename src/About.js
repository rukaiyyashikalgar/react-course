import React from 'react';

class About extends React.Component{
	
	constructor(){
		super();
		console.warn('constructor');
		/*this.state={
			'name':'Rukaiyya',
			'age':30
		}*/
	}
	componentDidMount(){
		//console.warn('component did mount');
		console.warn("props",this.props.name);
	}
	componentDidUpdate(){
		//alert('name is updated');
		//console.warn('did Update');
	}
	render(){
		return(<div>
			   	<h1>About Us Component</h1>
			   <h2>{this.props.name}</h2>
			   {/*<h2>{this.state.name}</h2>
			   <button onClick={()=>{this.setState({'name':'Rukaiyya Sutar'})}}>Update State</button>*/
			   }
			   </div>) 
	}
}
			   
export default About;			   