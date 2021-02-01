import img_login_rigth from "../../assets/img_login.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundRigth: {
        display: 'flex',
        height: '100vh',
        width: "100vw",
        borderRadius: 8,
        backgroundPosition: 'top',
        backgroundSize: "100vw",
        backgroundRepeat: 'no-repeat',
        background: `linear-gradient(to bottom, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.8) 100%), url(${img_login_rigth}) repeat 0 0 
        `,
    },
    textField: {
        width: '40ch',
        backgroundColor: '#FFF',
        borderRadius: "30px",
        '& label.Mui-focused': {
            color: 'green',
            borderWidth: "3 px",
        },
        '& .MuiInput-underline:after': {
            borderWidth: "3px",
            borderBottomColor: '#D4ECFF',
            borderRadius: "30px",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderWidth: "3px",
                borderRadius: "30px",
                borderColor: '#D4ECFF !important',
            }
        },
    },
    settingButton: {
        transition: theme.transitions.create(["background", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        margin: "8px",
        height: "50px",
        paddingLeft: "10px",
        width: '40ch',
        color: "#FFF",
        borderRadius: "30px",
        backgroundColor: '#2699FB',
        border: "0 !important",
        cursor: "pointer",
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderWidth: "3px",
                borderRadius: "30px",
                border: 0,
            }
        },
        "&:hover": {
            backgroundColor: '#2699FB',
            color: "#FFF",
            borderRadius: "30px",
            border: "0 !important",
        },
    },
    settingButtonLogin: {
        transition: theme.transitions.create(["background", "background-color"], {
            duration: theme.transitions.duration.complex,
        }),
        margin: "8px",
        height: "50px",
        paddingLeft: "10px",
        width: '40ch',
        borderRadius: "30px",
        backgroundColor: '#FFF',
        color: "#2699FB",
        border: "0 !important",
        cursor: "pointer",
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderWidth: "3px",
                borderRadius: "30px",
                border: 0,
            }
        },
        "&:hover": {
            backgroundColor: '#F5F5F5',
            color: "#7ABFF9",
            borderRadius: "30px",
            border: "0 !important",
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    marginButton: {
        height: "45px",
        borderRadius: "25px",
        margin: "8px",
    },
    marginButtonAuxiTop: {
        marginTop: "20px",
    },
    marginButtonAuxiBot: {
        marginBottom: "20px",
        color: "#FFF",
        "&:hover": {
            backgroundColor: '#5BAAEE',
            color: "#C8E9FF",
            borderRadius: "30px",
            border: "0 !important",
        },
    },

    buttonSend: {
        textAlign: "center",
        marginRight: 21,
        fontSize: "1rem",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 500,
        letterSpacing: "0.02857em"
    },
    faceIcon: {
        fontSize: "1.5rem",
        fontWeight: 600,
        fontFamily: "Roboto, San Francisco, Segoe UI"
    }

}));


export default useStyles