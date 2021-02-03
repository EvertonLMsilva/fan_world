import React from 'react'
import { Grid, Hidden } from '@material-ui/core';
import imgAvatar0 from "../../assets/img_0.png"
import imgAvatar1 from "../../assets/img_1.png"
import imgAvatar2 from "../../assets/img_2.png"

// estilo css
import style from "./style"

// Import componentes
import TopBar from "../../components/TopBar"
import CardPage from '../../components/CardPage';
import Dashboard from '../Dashboard';

import Status from '../../components/Status';

import img_avatar from '../../assets/avatar.png'

export default function Layout() {
    const classes = style();
    const dataPage = [
        { id: 0, title: "Naruto-Shippuden", subTitle: "Akita", img: imgAvatar0, status: "online" },
        { id: 1, title: "Naruto-Shippuden", subTitle: "Akita", img: imgAvatar0, status: "online" },
        { id: 2, title: "Naruto-Shippuden", subTitle: "Akita", img: imgAvatar0, status: "ausente" },
        { id: 3, title: "Naruto-Shippuden", subTitle: "Akita", img: imgAvatar0, status: "oculpado" },
        { id: 4, title: "Naruto-Shippuden", subTitle: "Akita", img: imgAvatar0, status: "oculpado" }
    ]
    const dataPerfil = [
        { id: 0, title: "Pedro José", subTitle: "Curitiba - PR", img: imgAvatar0, status: "online" },
        { id: 1, title: "Maria Ines", subTitle: "Curitiba - PR", img: imgAvatar1, status: "online" },
        { id: 2, title: "Natalia Nikotu", subTitle: "Curitiba - PR", img: imgAvatar2, status: "ausente" },
        { id: 3, title: "Daniel Misuko", subTitle: "Curitiba - PR", img: imgAvatar1, status: "oculpado" },
        { id: 4, title: "Julia Shankana", subTitle: "Curitiba - PR", img: imgAvatar0, status: "oculpado" }
    ]
    const data = [
        { id: 0, name: "Suas stories", avatar: img_avatar },
        { id: 1, name: "Pedro José", avatar: img_avatar },
        { id: 2, name: "maria Ines", avatar: img_avatar },
        { id: 3, name: "Natalia Nikotua", avatar: img_avatar },
        { id: 4, name: "Natalia Nikotua", avatar: img_avatar },
    ]
    const dataPost = [
        {
            id: 0, 
            avatar: img_avatar, 
            name: "Pedro José",
            city: "Novo Hamburgo",
            state: "RS",
            description: "Culpa qui officia deserunt mollit anim id est laborum. Sed ut rspicia tis unde omnis iste natus error sit voluptartem accusantium dolo remque laudantium " +
            "Culpa qui officia deserunt mollit anim id est laborum. Sed ut rspicia tis unde omnis iste natus error sit voluptartem accusantium dolo remque laudantium " + 
            "Culpa qui officia deserunt mollit anim id est laborum. Sed ut rspicia tis unde omnis iste natus error sit voluptartem accusantium dolo remque laudantium",
            img: imgAvatar0
        },
        {
            id: 1, 
            avatar: img_avatar, 
            name: "Maria Ines",
            city: "Curitiba",
            state: "PR",
            description: "Culpa qui officia deserunt mollit anim id est laborum. Sed ut rspicia tis unde omnis iste natus error sit voluptartem accusantium dolo remque laudantium",
            img: imgAvatar1
        },
        {
            id: 2, 
            avatar: img_avatar, 
            name: "Natalia Nikotua",
            city: "Santos",
            state: "RJ",
            description: "Culpa qui officia deserunt mollit anim id est laborum. Sed ut rspicia tis unde omnis iste natus error sit voluptartem accusantium dolo remque laudantium",
            img: imgAvatar2
        },
    ]
    return (
        <Grid container direction="column">
            <Grid item >
                <TopBar />
            </Grid>
            <Grid item >
                <Grid container direction="row" alignItems="flex-start" justify="space-between">
                    {/* Lista de pageinas seguidas */}
                    <Hidden only={['xs', 'sm']}>
                        <Grid item md={3} lg={2} xl={2}>
                            <p className={classes.paddingTitel}>Páginas seguidas</p>
                            {
                                dataPage.map((item) =>
                                    <CardPage key={item.id} align="flex-start" img={item.img} title={item.title} subTitle={`Criado por: ${item.subTitle}`} />
                                )
                            }
                        </Grid>
                    </Hidden>
                    {/* Conteúdo central da página */}
                    <Grid item xs={12} sm={12} md={6} xl={6} className={classes.statusSetting} >
                        <Grid container direction="row" alignItems="center" justify="center">
                            {/* Status */}
                            <Grid item xs={12}>
                                <Grid container direction="row" alignItems="center" justify="center" alignContent="center">
                                    {data.map(item =>
                                        <Status key={item.id} avatarPerfil={item.avatar} name={item.name} />
                                    )}
                                </Grid>
                            </Grid>
                            {/* Dashboard */}
                            <Dashboard dataPost={dataPost} />
                        </Grid>
                    </Grid>
                    {/* lista de amigos */}
                    <Hidden only={['xs', 'sm']}>
                        <Grid item md={3} lg={2} xl={2} >
                            <p className={classes.paddingTitel}>Amigos</p>
                            {
                                dataPerfil.map((item) =>
                                    <CardPage key={item.id} align="center" status={item.status} img={item.img} title={item.title} subTitle={item.subTitle} />
                                )
                            }
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid >
        </Grid >
    )
};