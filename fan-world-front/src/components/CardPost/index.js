import React from 'react'
//Import css
import style from "./style"

//Import material-ui
import { Avatar, Button, Grid } from '@material-ui/core'
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinesEllipsis from 'react-lines-ellipsis'

export default function CardPost(props) {
    const { avatar, name, description, city, state } = props
    const classes = style(props)
    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container direction="column" justify="space-between" alignItems="stretch" className={classes.contentImg}>
                {/* Header */}
                <Grid item className={classes.contentAdjustTop}>
                    <Grid container direction="row" justify="space-between" alignItems="center" >
                        <Grid item xs={11} >
                            <Grid container justify="flex-start" alignItems="flex-start">
                                {/* Avatar */}
                                <Grid item xs={1} >
                                    <Avatar alt="Remy Sharp" src={avatar} className={classes.imgAvatarPerfilPage} style={{ cursor: "pointer" }} />
                                </Grid>
                                {/* Nome e descrição */}
                                <Grid item xs={11} className={classes.paddingName}>
                                    <Grid container direction="column" justify="center" alignItems="flex-start">
                                        {/* Nome */}
                                        <Grid item xs className={ classes.nameSetting}>
                                            {name + " - " + city +" - " + state}
                                        </Grid>
                                        {/* Descrição */}
                                        <Grid item xs={7} className={classes.descriptionSetting}>
                                            <LinesEllipsis
                                                text={description}
                                                maxLine="2"
                                                ellipsis={<span className={classes.readMore}> ... Saiba mais</span>}
                                                trimRight='false'
                                                basedOn='letters'
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Menu config */}
                        <Grid item xs >
                            <MoreVertIcon  className={classes.iconMore}/>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Footer */}
                <Grid item className={classes.contentAdjustBot}>
                    <Grid container>
                        <Grid item className={classes.iconSetting}>
                            <ThumbUpAltTwoToneIcon />
                        </Grid>
                        <Grid item className={classes.iconSetting}>
                            <ChatBubbleTwoToneIcon />
                        </Grid>
                        <Grid item >
                            <ShareTwoToneIcon className={classes.iconSetting}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
