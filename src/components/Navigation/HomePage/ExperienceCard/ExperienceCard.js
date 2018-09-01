import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui-next/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardActions } from 'material-ui-next/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardContent from 'material-ui-next/Card/CardContent';
import Collapse from 'material-ui-next/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui-next/Typography';
import red from 'material-ui-next/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import image9 from './../../../../images/image2.jpg'
// var image = require('./image9.jpg');

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const experienceData = [{
    "postText":"This is the angel Park",
    "postImage":[image9]
  }
  ];

class ViewCards extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, userImage, userText } = this.props;
    let userPropImage = [];
    if( userImage.length > 0 ) {
        userImage.forEach((data,index)=>{
        if(data.thumbUrl) {
          userPropImage.push(data.thumbUrl);
        }
      })
      experienceData.push({"postText":userText,"postImage":userPropImage});
    }

    return (
      <div className="ma4">
      {experienceData.map((experience,index)=>{
        console.log("ExperienceData",experience);
        return(<MuiThemeProvider key={"post"+index}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title=''
              subheader=''
            />
           
            <div>
          {/*This is to pass the parameters on routes */}
              <Link to={{
                pathname:'/cardDetail',
                state:{
                  cardName:{}
                }
              }}>
              <CardMedia
                className={classes.media}
                image={experience.postImage[0]}
                title="Contemplative Reptile"
                onClick={this.showCardCommunity}
              />
              </Link>
              
              </div>
            <CardContent>
              <Typography component="p">
                {experience.postText}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} >
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                  Method:
                </Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                  cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                  Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                  the rice, and cook again without stirring, until mussels have opened and rice is
                  just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </MuiThemeProvider>)
      })}
      <img src={require('./image9.jpg')} />
      </div>
    );
  }
}

ViewCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewCards);