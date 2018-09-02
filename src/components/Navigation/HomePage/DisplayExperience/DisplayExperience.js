import React,{Component} from 'react';
import './DisplayExperience.css';
import ExperienceCard from '../ExperienceCard/ExperienceCard.js'
import { Layout } from 'antd';
import DisplayCardData from './DisplayCardData/DisplayCardData';
import image9 from './../../../../images/image2.jpg';
const { Content } = Layout;


class DisplayExperience extends Component{
	constructor(props){
    super(props);
    this.state = { 
            experienceData:[{
                  "postText":"This is the angel Park",
                  "postImage":[image9]
              }
          	]
      };
  	}

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
	render(){
		let { userImage, userText } = this.props;
	    let userPropImage = [];
	    // console.log("this.props",this.props);
	    if( userImage.length > 0 ) {
	        userImage.forEach((data,index)=>{
	        if(data.thumbUrl) {
	          userPropImage.push(data.thumbUrl);
	        }
	      })
	      this.state.experienceData.push({"postText":userText,"postImage":userPropImage});
	    }
		return(
			<div >
				<Layout style={{ minHeight: '100vh' }}>
					<Layout>
						<Content style={{ margin: '0 16px' }}>
							<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							{this.state.experienceData.map((experience,index)=>{
						        return <DisplayCardData key={"post"+index} userImage={experience.postImage[0]} postText={experience.postText} />
						      })}
							</div>
						</Content>
					</Layout>
				</Layout>
			</div>
			);
	}
}

export default DisplayExperience;