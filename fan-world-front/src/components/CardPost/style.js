import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
    marginBottom: "30px",
    fontFamily: "Roboto"
  },
  imgAvatarPerfilPage:{
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  paddingName: {
    paddingLeft: "15px",
    textAlign: "start",
  },
  nameSetting:{
    color: "#FFA76D",
    fontSize: "1.2rem",
    fontWeight: 600,
    
  },
  descriptionSetting:{
    color: "#FFDBBF",
    fontSize: "0.9rem",
  },
  contentAdjustTop:{
    padding: "10px 0 10px 10px",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    zIndex: 1

  },
  contentAdjustBot:{
    padding: "10px 0 10px 10px",
    backgroundColor: "rgb(0, 0, 0, 0.5)"
  },
  contentImg: item => ({
    height: "600px",
    background: `url(${item.img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "950px"
  }),
  limitedText: {
    display: "box",
    overflow: "hidden",
    textOrientation: "vertical",
    textOverflow: "ellipsis",
  },
  readMore:{
    cursor: "pointer",
    color: "#CCC",
    fontWeight: 600
  },
  iconSetting:{ 
    paddingRight: "20px",
    color: "#FFF",
  },
  iconMore:{ 
    cursor: "pointer",
    color: "#FFF",
  }
}));

export default useStyles