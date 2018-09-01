import React,{Component} from 'react';
import { Layout } from 'antd';
import UploadPics from './UploadPics/UploadPics.js';
import SearchDate from './SearchDate/SearchDate.js';
import DisplayExperience from './DisplayExperience/DisplayExperience.js';
const {Content} = Layout;



class HomePage extends Component{
  state = {
    userImage:[],
    userText:'',
    experienceLoading:false,
  }

  setThedisplayExperienceData = (image,text)=>{
    console.log("dataHome=>",image,text);
    this.setState({userImage:image,userText:text,experienceLoading:true})
  }
  render() {
    return (
    	<div>
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<SearchDate />
	    	<UploadPics setPostData={this.setThedisplayExperienceData} />
    		 {this.state.experienceLoading === true ?<DisplayExperience
          image={this.state.userImage}
          text={this.state.userText}
        />:null}
			</Content>
    	</div>
    );
  }
}

export default HomePage;