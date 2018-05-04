import React,{Component} from 'react';
import UploadPics from './UploadPics/UploadPics.js';
import SearchDate from './SearchDate/SearchDate.js';


class HomePage extends Component{
  render() {
    return (
    	<div>
    		<SearchDate />
    		<UploadPics />
    	</div>
    );
  }
}

export default HomePage;