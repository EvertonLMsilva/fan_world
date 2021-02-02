import React from 'react'
//importes de estilos css
import style from "./style"
//importes de componentes material-UI
import { Avatar, Grid } from '@material-ui/core'

export default function CardPage(props) {
    const { title, subTitle, img, status = undefined, align } = props
    const classes = style(props)
    const statusPerfilColor = 
        status === "online" ? "#319B3B" : 
        status === "ausente" ? "#E49C46" : "#E44646"
        
    return (
        <Grid container alignItems={align} className={classes.root}>
            {status !== undefined
                ? <Grid item xs={2}>
                    <Avatar alt="Remy Sharp" src={img} className={classes.imgAvatarPerfil} style={{ cursor: "pointer", border: `4px solid ${statusPerfilColor}` }} />
                </Grid>
                : <Grid item xs={2}>
                    <Avatar alt="Remy Sharp" src={img} className={classes.imgAvatarPerfilPage} style={{ cursor: "pointer" }} />
                </Grid>
            }
            <Grid item xs={10}>
                <Grid container direction="column" className={classes.FontSetting}>
                    <Grid item className={classes.title}>{title}</Grid>
                    <Grid item className={classes.subTitle}>{subTitle}</Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
