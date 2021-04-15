
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    borderRadius:40,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#EE5522',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '20px',
    backgroundColor:'#EE5522',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#FFBB33"
  }
  },
  googleButton: {
    borderRadius: '20px',
    marginBottom: theme.spacing(2),
    backgroundColor:'#EE5522',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#FFBB33"
  }
  },
  input: {
    '&:hover fieldset': {
      borderColor: '#EE5522',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#EE5522',
    },
  },
  iconE: {
    marginRight: theme.spacing(2)
  }
}));

