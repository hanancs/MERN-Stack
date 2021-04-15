import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 40,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    cursor: 'pointer',
  },
  heading: {
    color: '#EE5522',
    fontFamily: 'Zilla Slab Highlight', 
    fontSize:30,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  image: {
    marginRight: '25px',
    marginLeft: '15px',
    height: '40px',
  },
  toolbar: {
    
    justifyContent: 'center',
    
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color:'#FFFFFF',
    fontWeight:'bold',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText('#EE5522'),
    backgroundColor: '#EE5522',
  },
  button: {
    marginBottom: 20,
    borderRadius:60,
    backgroundColor:'#FFFFFF',
    color:'#EE5522',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#FFBB33",
      color:'#FFFFFF',
  }
  },
  logout: {
    marginBottom: 20,
    borderRadius:60,
    backgroundColor:'#FFFFFF',
    color:'#EE5522',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#FFBB33",
      color:'#FFFFFF',
  }
  }
}));
