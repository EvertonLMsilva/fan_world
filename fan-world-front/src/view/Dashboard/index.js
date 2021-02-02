import React from 'react'
import { Grid } from '@material-ui/core';

// estilo css
import style from "./style"

export default function Dashboard() {
    const classes = style();

    return (
            <Grid item className={classes.contentCenter} >
                Olá
            </Grid>
    )
};