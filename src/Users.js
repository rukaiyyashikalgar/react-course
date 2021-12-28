import React,{useState,useEffect} from 'react';
//import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
function Users(){
	
	const [user,setUser] = useState([])
	
	useEffect(()=>{
	fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
		data.json().then(result=>{
			console.warn("result",result)
			setUser(result.data)
		})
	})
																	   
	},[])
	return(
		
			
			

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Age</th>
    </tr>
	{
			user.map((item,index)=><tr key={index}>
				<td>{item.id}</td>
				<td>{item.employee_name}</td>
				<td>{item.employee_salary}</td>
				<td>{item.employee_age}</td>
				
			</tr>
			)
		}
  </thead>
  <tbody>

  </tbody>
</Table>
		
		
	) 
}
export default Users;