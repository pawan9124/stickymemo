import React,{Component} from 'react';
import './DisplayExperience.css';
import ExperienceCard from '../ExperienceCard/ExperienceCard.js'
import { Layout } from 'antd';
const { Content } = Layout;


class DisplayExperience extends Component{
	state = {
    collapsed: false,
    userImage:this.props.image,
    userText:this.props.text,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
	render(){
		let  displaydate = this.props.displayDate;
		console.log("displaydate",this.props.image,this.props.text);
		return(
			<div >
				<Layout style={{ minHeight: '100vh' }}>
					<Layout>
						<Content style={{ margin: '0 16px' }}>
							<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							<ExperienceCard userImage={this.props.image} userText={this.props.text} />
							</div>
						</Content>
					</Layout>
				</Layout>
			</div>
			);
	}
}

export default DisplayExperience;