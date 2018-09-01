import React,{Component} from 'react';
import { Card } from 'antd';
import { Icon } from 'antd';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import HomePage from './HomePage/HomePage.js';
import Album from './Album/Album.js';
import LoveLock from './LoveLock/LoveLock.js';
import Popularity from './Popularity/Popularity.js';

const {  Sider, Content } = Layout;
const gridStyle = {
  width: '100%',
  textAlign: 'left',
  display: 'grid !important',
  cursor:'pointer'
};

class PostPics extends Component{
 state = {
    currentNavigationComponent:'Home'
  };


  //call for the sidebar navigation call component function
  callNavigationComponent = (value)=>{
  	console.log("value=",value);
  	this.setState({currentNavigationComponent:value})
  }

  render() {
	return (
    <div>
		<Layout>
			<Layout>
				<Sider>
					<Card title="" style={{"display":"Grid !important"}}>
						<Card.Grid style={gridStyle} onClick={()=>this.callNavigationComponent('Home')}><Icon type="home" /> Home</Card.Grid>
						<Card.Grid style={gridStyle} onClick={()=>this.callNavigationComponent('Album')}><Icon type="camera-o" /> Album</Card.Grid>
						<Card.Grid style={gridStyle} onClick={()=>this.callNavigationComponent('LoveLock')}><Icon type="lock" /> Love Lock</Card.Grid>
						<Card.Grid style={gridStyle} onClick={()=>this.callNavigationComponent('Popularity')}><Icon type="star-o" /> Popularity</Card.Grid>
					</Card>
				</Sider>
				<Content>
					{
					this.state.currentNavigationComponent === 'Home'?<HomePage/>:
					this.state.currentNavigationComponent === 'Album'?<Album/>:
					this.state.currentNavigationComponent === 'LoveLock'?<LoveLock/>:
					this.state.currentNavigationComponent === 'Popularity'?<Popularity/>:null

					}
				</Content>
			</Layout>
		</Layout>
		
	</div>
    );
  }
};

export default PostPics;