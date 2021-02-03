import React from 'react'
//importes Material-UI
import { Grid } from '@material-ui/core';

// estilo css
import style from "./style"
// Importes customizados
import CardPost from '../../components/CardPost';

export default function Dashboard(props) {
    const { dataPost } = props
    const classes = style();

    return (
        <Grid item xs={12} className={classes.contentCenter} >
            <Grid container direction="column">
                {dataPost.map(item =>
                    <CardPost key={item.id} avatar={item.img } name={item.name } city={item.city} state={item.state} description={item.description } img={item.img } />
                )
                }
            </Grid>
        </Grid>
    )
};