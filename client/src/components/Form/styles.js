
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      borderColor: 'orange',
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius:40,
    
  },
  typo: {
    color: '#EE5522',
    fontFamily: 'PT Sans',
    fontSize:30,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  fileInput: {
    width: '90%',
    margin: '10px 0',
    backgroundColor:'#EE5522',
    borderRadius:60, 
    fontFamily: 'Zilla Slab Highlight', 
  },
  buttonSubmit: {
    marginBottom: 10,
    borderRadius:60,
    backgroundColor:'#EE5522',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#FFBB33"
  }
  },
  buttonClear: {
    borderRadius:60,
    marginBottom: 10,
    backgroundColor:'#EE5522',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#FFBB33"
  }
  },
  fileI: {
    backgroundColor : '#CC0000',
    fontFamily: 'Zilla Slab Highlight', 
  },
  outlined: {
    /* … */
    '&$disabled': { /* … */ },
    backgroundColor: '#EE5522',
  },
  outlinedPrimary: {
    /* … */
    '&:hover': { /* … */ },
    backgroundColor: '#EE5522',
  },
}));


export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#EE5522',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#EE5522',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#EE5522',
      },
      '&:hover fieldset': {
        borderColor: '#EE5522',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#EE5522',
      },
    },
  },
})(TextField);
