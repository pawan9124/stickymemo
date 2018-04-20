import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from "material-ui-next";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



class ViewCards extends Component{
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
				<div className="mt3 root" >
					<MuiThemeProvider>
						<Grid container>
							<Grid item xs={12} sm={6} md={4}>
								<Card className="card">
							        <CardContent>
							          <Typography className="title" color="textSecondary">
							            Word of the Day
							          </Typography>
							          <Typography variant="headline" component="h2">
							          </Typography>
							          <Typography className="pos" color="textSecondary">
							            adjective
							          </Typography>
							          <Typography component="p">
							            well meaning and kindly.<br />
							            {'"a benevolent smile"'}
							          </Typography>
							        </CardContent>
							        <CardActions>
							          <Button size="small">Learn More</Button>
							        </CardActions>
							      </Card>
							</Grid>
						</Grid>
					</MuiThemeProvider>
				</div>
			);
		};
}

export default ViewCards;