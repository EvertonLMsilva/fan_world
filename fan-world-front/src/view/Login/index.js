import React, { Fragment, useState } from 'react'
// estilos css
import style from "./style"
// import componentes do material ui
import { Button, Grid, Icon, InputAdornment, TextField } from '@material-ui/core'
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';

export default function Login() {
    const classes = style();
    const [values, setValues] = useState({
        showPassword: false
    })
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    return (
        <Fragment>
            <Grid container direction="row" justify="space-between" alignItems="stretch" >
                <Grid className={classes.backgroundLeft}>
                    <Grid className={classes.gridright}></Grid>
                </Grid>

                <Grid item className={classes.backgroundRigth}>
                    <Grid container direction="column" justify="center" alignItems="center" className={classes.gridLefth}>
                        <Grid item>
                            <Grid container spacing={1} alignItems="flex-end">

                                <Grid item>
                                    <TextField
                                        id="filled-start-adornment"

                                        className={clsx(classes.margin, classes.textField)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
                                            borderRadius: "15px"
                                        }}

                                        variant="outlined"
                                    />
                                </Grid>

                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end">

                                <Grid item>
                                    <TextField
                                        id="filled-start-adornment"
                                        type={values.showPassword ? 'text' : 'password'}
                                        className={clsx(classes.margin, classes.textField)}
                                        InputProps={{
                                            startAdornment:
                                                <InputAdornment position="start" onClick={handleClickShowPassword}>
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </InputAdornment>,
                                            borderRadius: "15px"
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>

                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <Button variant="contained" color="primary" className={classes.button} startIcon={<Icon>send</Icon>}>
                                        Entrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}
