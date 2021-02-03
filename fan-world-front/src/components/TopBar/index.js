import React, { useState } from 'react'
// Estilo css
import style from "./style"
// Importes de componentes do mateirial ui
import { Grid, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import logo_white from "../../assets/logo/logo_white.png";

export default function TopBar() {
    const classes = style();
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <Grid container className={classes.root} direction="row" justify="space-between" alignItems="center">
            {/* Icone de pesquisa */}
            <Grid item xs={4}>
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Grid item onClick={() => setOpenSearch(!openSearch)}>
                        <SearchIcon className={classes.iconSetting} />
                    </Grid>
                    {openSearch
                        ? <Grid item > <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} className={classes.inputSearch} /> </Grid>
                        : ""
                    }
                </Grid>
            </Grid>
            {/* icones centro bar*/}
            <Grid item xs={4}>
                <Grid container direction="row" justify="center" alignItems="center">
                    {/* Icone notificações */}
                    <Grid item >
                        <NotificationsIcon className={classes.iconSetting} />
                    </Grid>
                    {/* Imagem logo */}
                    <Grid item >
                        <img alt="logo" src={logo_white} className={classes.imgLogo} />
                    </Grid>
                    {/* Icone de mensagens */}
                    <Grid item >
                        <MessageIcon className={classes.iconSetting} />
                    </Grid>
                </Grid>
            </Grid>
            {/* Icone de configuraçoes */}
            <Grid item xs={4}>
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid item >
                        <SettingsIcon className={classes.iconSetting} />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}
