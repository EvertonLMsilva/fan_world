import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px 10px 0 30px",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "0.9rem",
        fontFamily: "Arial",
    },
    imgAvatarPerfilPage: {
        border: "2px solid #CCC",
        borderRadius: "20%",
    },
    imgAvatar: {
        paddingRight: "10px",
    },
    imgAvatarPerfil: {
        borderRadius: "50%",
    },
    boxAvatar: {
        marginRight: "15px",
    },
    FontSetting: {
        padding: "0 20px",
        fontSize: "0.9rem",

    },
    title: {
        color: "#FF6F00"
    },
    subTitle: {
        color: "#E96600",
        fontSize: "0.7rem"
    }
}));
export default useStyles;