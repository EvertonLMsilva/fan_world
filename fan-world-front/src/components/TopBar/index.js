import React from 'react'
// Estilo css
import style from "./style"
// Importes de componentes do mateirial ui
import { Grid } from '@material-ui/core'

export default function TopBar() {
    const classes = style();
    return (
        <Grid
        className={classes.root}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >oi

        </Grid>
    )
}
