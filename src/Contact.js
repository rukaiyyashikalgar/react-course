import React,{useEffect,useState} from 'react';
function Contact(){
	/*const [name,setName]=useState('Ruks');
	const [age,setAge] = useState(26);
	*/
	
	/*useEffect(()=>{
		console.warn('Hello from Hook');
	},[])
	let data = 'Contact Us Component';
	*/
	const [val,setVal]=useState('ruks');
	const test =(e)=>{
		console.log("test function",e.target.value);
		setVal(e.target.value);
	}
	return(
		<div><h1>Contact Us Component</h1>
		{/*<h2>{name}</h2>
		<h2>{age}</h2>
		<button onClick={()=>setAge(30)}>Update Age</button>

		<button onClick={()=>setName('Ruks Sutar')}>Update Name</button>
		*/}
		<input type="text" value={val} onChange={test}/>
		<button onClick={test}>Click  Me</button>
		</div>
	);
}

export default Contact;	