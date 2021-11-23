import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Player1 from './players/player1.jpg';
import Player2 from './players/player2.jpg';
import Player3 from './players/player3.jpg';
import Player4 from './players/player4.jpg';
import Player5 from './players/player5.jpg';
import Player6 from './players/player6.jpg';
import './styles.css';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function FA() {
    return (
            <div>
                <h1 class="p3">Jogadores Free Agent</h1>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="player1" src={Player1} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Moises Junior
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Radiante • Iniciador/IGL
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            19 anos
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Contato
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        Valorant
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="player2" src={Player2} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Eduardo Stevam
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Imortal • Duelista/Sentinela
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            21 anos
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Contato
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        Valorant
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="player3" src={Player3} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Rick James
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Diamante III • Controlador
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            26 anos
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Contato
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        Valorant
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="player4" src={Player4} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Pedro Gomes
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Radiante • Duelista
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            24 anos
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Contato
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        Valorant
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="player5" src={Player5} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Jorge Bruning
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Imortal • Controlador
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            25 anos
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Contato
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        Valorant
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="player6" src={Player6} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Eduardo Soarez
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Radiante • Sentinela
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            26 anos
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Contato
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        Valorant
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>

            </div>
    )
}


