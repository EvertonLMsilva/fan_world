import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#FF6F00',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 70,
    padding: '0 30px',
  },
  imgLogo: {
    width: "70px",
    paddingRight: "5px",
    paddingLeft: "5px"
  },
  iconSetting: {
    fontSize: "35px",
    cursor: "pointer"
  },
  inputSearch: {
    width: "110px",
    cursor: "pointer"

  },
  [theme.breakpoints.up('md')]: {
    imgLogo: {
      paddingRight: "15px",
      paddingLeft: "15px"
    },
  },
}));

export default useStyles