import React, { Component } from 'react';
import Select from 'material-ui-next/Select';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Grid, Row, Col } from 'react-bootstrap';
import { MenuItem } from 'material-ui/Menu';
import { Grid } from "material-ui-next";
import  { InputLabel } from 'material-ui-next/Input';
import { FormControl } from 'material-ui-next/Form';
import './SelectOption.css';
import CountryStateCity from 'country-state-city';
import injectTapEventPlugin from 'react-tap-event-plugin';

//to support the onTouchTap 
injectTapEventPlugin();


class SelectOption extends Component{
	constructor(){
		super();
		this.state = {
			    age: '',
			    countryName: '',
			    stateName:'',
			    cityName:'',
			    countryId:'',
			    country:[],
			    states:[],
			    city:[],
			  };
	}
componentDidMount(){
	const countryList = CountryStateCity.getAllCountries();
	console.log("countryList",countryList);
	this.setState({country:countryList});
}

//for selecting the list of the countries
  handleChangeCountry = (event) => {
    this.setState({ countryName: event.target.value});
};

//for handling the list of the state
handleChangeState = event =>{
	this.setState({stateName:event.target.value});
};

//for handling the list of the city
handleChangeCity = event =>{
	this.setState({cityName:event.target.value});
};

//To get the list of state of the country
  getSelectedCountry = id =>{
   console.log("id",id);
   var stateList = CountryStateCity.getStatesOfCountry(id);
   console.log("State",stateList);
   this.setState({states:stateList});
};

//To get the list of the city of a state
getSelectedState = id =>{
	var cityList = CountryStateCity.getCitiesOfState(id);
	console.log("City",cityList);
	this.setState({city:cityList});
}

// //To get the list of city of the state
//   getSelectedCity = id =>{
//    console.log("id",id);
//    var cityList = CountryStateCity.getCitiesOfState(id);
//    console.log("State",cityList);
//    this.setState({city:cityList});
// };


	render(){
		return(
				<div className="mt3 root" >
					<MuiThemeProvider>
						<Grid container>
							<Grid item xs={12} sm={6} md={4} className="tc">
								<FormControl className="formControl">
						          <InputLabel htmlFor="age-simple">Country</InputLabel>
						          <Select
						            value={this.state.countryName}
						            id={this.state.countryId}
						            onChange={this.handleChangeCountry}
						            inputProps={{
						              name: 'age',
						              id: 'age-simple',
						            }}
						          >
						          <MenuItem  value="">
								              <em>None</em>
					            	</MenuItem>
						          { this.state.country.map((country,id)=>{
						           	return(
								            <MenuItem key={id} onTouchTap={() => this.getSelectedCountry(country.id)} value={country.name}>{country.name}</MenuItem>
						        	);
						        })}
						          </Select>
						        </FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={4} className="tc">
								<FormControl className="formControl">
						          <InputLabel htmlFor="state">State</InputLabel>
						          <Select
						            value={this.state.stateName}
						            id={this.state.countryId}
						            onChange={this.handleChangeState}
						            inputProps={{
						              name: 'state',
						              id: 'age-simple',
						            }}
						          >
						          <MenuItem  value="">
								              <em>None</em>
					            	</MenuItem>
						          { this.state.states.map((state,id)=>{
						           	return(
								            <MenuItem key={id} onTouchTap={() => this.getSelectedState(state.id)} value={state.name}>{state.name}</MenuItem>
						        	);
						        })}
						          </Select>
						        </FormControl>
							</Grid>
							<Grid item xs={12} sm={6} md={4} className="tc">
							<FormControl className="formControl">
						          <InputLabel htmlFor="city">City</InputLabel>
						          <Select
						            value={this.state.cityName}
						            id={this.state.countryId}
						            onChange={this.handleChangeCity}
						            inputProps={{
						              name: 'city',
						              id: 'age-simple',
						            }}
						          >
						          <MenuItem  value="">
								              <em>None</em>
					            	</MenuItem>
						          { this.state.city.map((city,id)=>{
						           	return(
								            <MenuItem key={id} 
								            // onTouchTap={() => this.getSelectedCity(city.id)} 
								            value={city.name}>
								            {city.name}
								            </MenuItem>
						        	);
						        })}
						          </Select>
						        </FormControl>
							</Grid>
			          	</Grid>
					</MuiThemeProvider> 
				</div>
			);
	}

};

export default SelectOption;





