import React,{Component} from 'react';
import { DatePicker } from 'antd';
import { Button } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

class SearchDate extends Component{

	render(){
		return(
			<div className ="ma4 flex">
				<p style={{"margin":"5px"}}>Search by Date:</p> 
				<DatePicker onChange={onChange} />
				<Button className="ml4" type="primary" icon="search">Search</Button>
			</div>
			);
	}
}

export default SearchDate;