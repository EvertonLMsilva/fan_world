import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: props => ({
        width: theme.spacing(12),
        height: theme.spacing(12),
        border: "4px solid #FF6F00",

        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(11),
            height: theme.spacing(11),
        }
    }),
    statusSetting: {
        textAlign: "center",
        padding: "0 5px"
    },
    nameStatus: {
        width: theme.spacing(11),
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#8d8d8d",
        fontWeight: 600,
        [theme.breakpoints.up("lg")]:{
            width: theme.spacing(13),
        }

    },
}));
export default useStyles;