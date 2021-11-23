import React from 'react'
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import { logoff } from '../services/Firebase'
import Button from '@mui/material/Button';

export default function Menu() {
    let history = useHistory();
    const efetuarLogoff = () => {
        logoff()
            .then(() => history.push("/"))
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Button
                    onClick={() => history.push("/home")}
                    fullWidth variant="outlined">Início</Button>
            </Grid>

            <Grid item xs={2}>
                <Button
                    onClick={() => history.push("/fa")}
                    fullWidth variant="outlined">Players FA</Button>
            </Grid>

            <Grid item xs={2}>
                <Button
                    onClick={() => history.push("/cadastro-equipe")}
                    fullWidth variant="outlined">Cadastro de Equipe</Button>
            </Grid>

            <Grid item xs={2}>
                <Button
                    onClick={() => history.push("/equipeslista")}
                    fullWidth variant="outlined">Visualizar Equipes</Button>
            </Grid>

            <Grid item xs={2}>
                <Button
                    onClick={() => history.push("/contato")}
                    fullWidth variant="outlined">Contato</Button>
            </Grid>

            <Grid item xs={2}>
                <Button
                    onClick={() => history.push("/suporte")}
                    fullWidth variant="outlined">Suporte</Button>
            </Grid>

            <Grid item xs={2}>
                <Button fullWidth variant="outlined" onClick={efetuarLogoff}>Logoff</Button>
            </Grid>
        </Grid>

    )
}
