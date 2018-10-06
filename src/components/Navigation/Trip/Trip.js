import React,{Component} from 'react';
import { DatePicker, Row, Col, Button} from 'antd';
import Location from '../../SelectOption/SelectOption.js';
import DisplayTripTable from './DisplayTripTable/DisplayTripTable.js';
const { RangePicker} = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Trip extends Component{
	constructor(props) {
		super(props);
		this.state = {
			showTripTable:false
		};
	}

	displayTripTable(data) {
		this.setState({showTripTable:true})
	}

	render(){
		return(
			<div className ="ma4">
				<Row>
					<Col span={24}>
						<h2>Plan Your Trip</h2>
					</Col>
					<Col span={24}>
						<Row>
							<Col span={3}>
								<p>Select Location:</p> 
							</Col>
							<Col span={21}>
								{<Location showSearch={false} /> }
							</Col>
						</Row>
					</Col>
					<Col span={24}>
						<RangePicker onChange={this.onChange} disabledDate={(currentDate: moment) => false}/>
						<Button className="ml4" type="primary" onClick={()=>this.displayTripTable(true)} icon="search">Search</Button>
					</Col>
			    </Row>
			    <Row>
			    	<Col span={24}>
			    		{this.state.showTripTable === true ? <DisplayTripTable />:null}
			    	</Col>
			    </Row>
		    </div>

	    );
	}
}

export default Trip;