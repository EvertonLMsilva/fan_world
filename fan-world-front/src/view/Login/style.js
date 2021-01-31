import img_login_left from "../../assets/img_login_left.png"
import img_login_rigth from "../../assets/img_login_rigth.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundLeft: {
        display: 'flex',
        borderRadius: 8,
        backgroundImage: `URL(${img_login_left})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    backgroundRigth: {
        display: 'flex',
        height: '100vh',
        borderRadius: 8,
        backgroundImage: `URL(${img_login_rigth})`,
        backgroundPosition: 'center',
        backgroundSize: "50vw",
        backgroundRepeat: 'no-repeat',
    },
    gridLefth: {
        width: "49vw",
        margin: theme.spacing(1),
    },
    gridright: {
        width: "50vw",
    },
    textField: {
        width: '25ch',
    },
    margin: {
        margin: theme.spacing(1),
    },
    inputSettings:{
        borderRadius: "5px !important"
    }

}));

export default useStyles