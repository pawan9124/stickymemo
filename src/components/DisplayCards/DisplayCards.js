import React from 'react';

const DisplayCards = ({countryName,stateName,cityName,displayCards}) =>{
	console.log("CountryName=>",countryName);
	console.log("stateName=>",stateName);
	console.log("cityName=>",cityName);

	//calling a function to make parent varialbe false
	displayCards(false);
	
	return(
	<div>hi</div>
	);
};

export default DisplayCards;