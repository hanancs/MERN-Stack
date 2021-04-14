import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 40,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    
  },
  heading: {
    color: '#EE5522',
    fontFamily: 'Zilla Slab Highlight', 
    fontSize:30,
  },
  image: {
    marginRight: '25px',
    marginLeft: '15px',
    height: '40px',
  },
}));
