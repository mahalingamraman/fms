import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';


//import Image from './blue_flow.jpg';
import { Image } from 'react-bootstrap';

const styles = theme => ({
  main: {
    width: 'auto',
    backgroundColor: 'transparent',
    opacity: 1,
    // backgroundColor: "blue",
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 20,
    display: 'flex',

    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: "#FFC107",

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    color: "#FFC107",
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    color: "black",
    backgroundColor: "#FFC107",


  },

  margin: {
    margin: theme.spacing.unit,
  },

  input: {
    color: "ash"
  },

  email: {
    color: "black"
  },
  fcont: {
    color: "#FFC107"
  },
  head: {
    color: "#FFC107",
    align: 'centre',
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 7,
  }

});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFC107"
    },
    secondary: {
      main: '#FFC107'
    }
  },

});




class Loginfab extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     User: ''

  //   }
  // }
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  state = {
    email: ''
  }
  routeChange() {
    let path = '/home';
    this.props.history.push(path);
  }



  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;
    if (email === 'fab') {
      let path = '/home';
      this.props.history.push(path);
    }
    else {
      let path = '/invaliduser';
      this.props.history.push(path);


    }


  };


  render() {
    // const divStyle = {

    //   backgroundImage:`url(${Image})`,
    //   backgroundSize: 'cover',
    //   overflow: 'hidden',
    //   height:null,
    //   width:null,
    //   flex:1,
    //   resizeMode: 'cover'

    // };

    var background = {
      backgroundSize: 'cover',

      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

    };
    var textStyle = {
      position: 'absolute',
      opacity: .92,
      right: 10 +'px',
    left: 10 +'px',
      bottom: 500 +'px',
      top: 100+'px',


    };
    const { classes } = this.props;
    return (
      <div>
        {/* <img src={Image} alt="Logo" style={background}     /> */}

        <div >
          <Image
            style={background}
            src="https://wallpapercave.com/wp/7FpRl0N.jpg">
          </Image>
        </div>


        {/* <div style={textStyle}> */}
        <div style={textStyle}>
          <main className={classes.main}  >



            <Paper className={classes.paper}>
              {/* <h1  className={classes.head} >Facility Monitoring System</h1> */}

              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Admin Login
              </Typography>

              <form className={classes.form} onSubmit={this.handleSubmit}  >
                <MuiThemeProvider theme={theme} >
                  <FormControl margin="normal" name="fcont" required fullWidth className={classes.fcont}>

                    <InputLabel htmlFor="email" className={classes.input} >Username</InputLabel>
                    <Input id="email" name="email" type='text' onChange={this.handleInputChange} required autoComplete="email" autoFocus className={classes.email} />
                  </FormControl>


                  <FormControlLabel
                    control={<Checkbox value="remember" color="secondary" />}
                    label="Remember me"
                  />
                  {/* <Link to="/home" style={{ textDecoration: 'none' }}> */}

                  <Button

                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}

                  //onClick={this.routeChange}
                  >
                    Login
          </Button>
                  {/* </Link> */}
                </MuiThemeProvider>

              </form>
            </Paper>

          </main>

        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Loginfab);
