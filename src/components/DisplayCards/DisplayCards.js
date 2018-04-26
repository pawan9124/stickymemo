import data from '../../DemoData/CountryFamous.json';

const DisplayCards = ({countryName,stateName,cityName,displayCards,setCardData}) =>{
	console.log("CountryName=>",countryName);
	console.log("stateName=>",stateName);
	console.log("cityName=>",cityName);

	//calling function insde selectOption js to set data of the country
	setCardData(data);
	//calling a function from selectOption js to make parent varialbe false
	displayCards(false);
	return null;
};

export default DisplayCards;