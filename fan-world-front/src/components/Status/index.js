import React from 'react'

import { Avatar, Grid } from '@material-ui/core';

// estilo css
import style from "./style"

export default function Status(props) {
    const { avatarPerfil, name, size } = props
    const classes = style({ size });

    return (
        <Grid item className={classes.statusSetting}>
            <Avatar alt="Remy Sharp" src={avatarPerfil} className={classes.avatar} />
            <p className={classes.nameStatus}>{name}</p>
        </Grid>
    )
}
