import React from 'react';

const searchBox = (props)=>{
	return(
			<input 
			type="text" 
			className="form-control" 
			onChange={props.onSearchBox} 
			/>
		);
}

export default searchBox;