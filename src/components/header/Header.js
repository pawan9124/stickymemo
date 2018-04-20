import React,{ Component } from 'react';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBox from '../searchBox/searchBox';
import AppBar from 'material-ui/AppBar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  makeInline:{
  	display:'inline-block',
  }
};

class Header extends Component{
	constructor(){
		super();
		this.state = {
			searchText:''
		}
	}

	onSearchBox = (event)=>{
		console.log(event.target.value);
		this.setState({searchText:event.target.value});
	}

	render(){
		return(
			<Grid fluid={true}>
			 	<Row className="show-grid" >
			 		<MuiThemeProvider>
				 		<AppBar showMenuIconButton={false}>
						    <Col md={2}>
						      	<MuiThemeProvider>
									<Avatar alt="Remy Sharp" src="http://images5.fanpop.com/image/photos/31000000/cool-pics-of-girls-beautiful-pictures-31048867-352-500.jpg" style={styles.avatar} />
								</MuiThemeProvider>
						    </Col>
						    <Col md={4} style={{marginTop:11}}>
						      <SearchBox onSearchBox={this.onSearchBox}/>
						    </Col>
						    <Col md={6}>
									<Avatar alt="Remy Sharp" src="http://images5.fanpop.com/image/photos/31000000/cool-pics-of-girls-beautiful-pictures-31048867-352-500.jpg" style={styles.avatar} className="fr" />
						    </Col>
					    </AppBar>
					</MuiThemeProvider>

			  	</Row>
		  	</Grid>
			);
		};
}

export default Header;