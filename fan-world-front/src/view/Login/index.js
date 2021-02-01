import React, { Fragment, useState } from 'react'
// estilos css
import style from "./style"
// importes de imagens
import logo from "../../assets/logo/logo.png";
import apple from "../../assets/app_apple.png";
import android from "../../assets/app_android.png";
// import componentes do material ui
import { Divider, Grid, Icon, InputAdornment, TextField } from '@material-ui/core'
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

                <Grid item className={classes.backgroundRigth}>
                    <Grid container direction="column" justify="center" alignItems="center" className={classes.gridLefth}>
                        <Grid item >
                            <Grid container spacing={1} direction="column" justify="center" alignItems="center" >
                                <Grid item>
                                    <img alt="logo" src={logo} />
                                </Grid>

                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <TextField
                                        id="filled-start-adornment"

                                        className={clsx(classes.margin, classes.textField)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><AccountCircle className={classes.imputIcon}/></InputAdornment>,
                                        }}

                                        variant="outlined"
                                    />
                                </Grid>

                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end">

                                <Grid item>
                                    <TextField id="filled-start-adornment" type={values.showPassword ? 'text' : 'password'} className={clsx(classes.margin, classes.textField)}
                                        InputProps={{
                                            startAdornment:
                                                <InputAdornment position="start" onClick={handleClickShowPassword}>
                                                    {values.showPassword ? <Visibility className={classes.imputIcon}/> : <VisibilityOff className={classes.imputIcon}/>}
                                                </InputAdornment>,
                                            borderRadius: "15px"
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>

                            </Grid>
                            <Grid container spacing={1} direction="row" justify="space-between" alignItems="center"
                                className={clsx(classes.marginButtonAuxiBot, classes.settingButton)} >
                                <Grid item xs={1} >
                                    <Icon>send</Icon>
                                </Grid>
                                <Grid item xs={10} className={classes.buttonSend}>
                                    Enviar
                                </Grid>
                            </Grid>

                            <Divider />

                            <Grid container spacing={1} direction="row" justify="space-between" alignItems="center"
                                className={clsx(classes.marginButtonAuxiTop, classes.settingButtonLogin)} >
                                <Grid item xs={1} className={classes.faceIcon}>
                                    f
                                </Grid>
                                <Grid item xs={10} className={classes.buttonSend}>
                                    Entrar com o Facebook
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} direction="row" justify="space-between" alignItems="center"
                                className={clsx(classes.marginButtonAuxiTop, classes.settingButtonLogin)} style={{ marginBottom: "15px" }} >
                                <Grid item xs={1} className={classes.faceIcon}>
                                    G
                                </Grid>
                                <Grid item xs={10} className={classes.buttonSend}>
                                    Entrar com o Google
                                </Grid>
                            </Grid>

                            <Divider />
                            <Grid container spacing={1} direction="row" justify="center" alignItems="center" style={{ marginTop: "15px" }}>
                                <Grid item>
                                    <img alt="logo" src={apple} />
                                </Grid>
                                <Grid item>
                                    <img alt="logo" src={android} />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment >
    )
}
