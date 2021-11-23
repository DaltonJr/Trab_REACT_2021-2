import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { saveEquipes } from '../services/Firebase';
import { useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import './styles.css';

export default function Equipes() {
    let history = useHistory();
    const [nome, setNome] = useState("")
    const [tag, setTag] = useState("")
    const [jogo, setJogo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [msg, setMsg] = useState("")
    const [open, setOpen] = React.useState(false);

    const save = async () => {

        let objeto = {
            nome: nome,
            tag: tag,
            jogo: jogo,
            descricao: descricao
        }
        try {
            await saveEquipes(objeto)
            history.push("/equipeslista")
        } catch (error) {
            setMsg(error)
            setOpen(true)

        }
    }

    return (
        <div class="body">
            <h1 class="p3">Cadastro de Equipes</h1>
            <Grid container spacing={1} class="body">
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Collapse in={open}>
                        <Alert
                            severity="error"
                            action={
                                <IconButton 
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            {msg}
                        </Alert>
                    </Collapse>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Nome"
                                variant="outlined"
                                value={nome}
                                size="small"
                                fullWidth
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Tag"
                                variant="outlined"
                                value={tag}
                                size="small"
                                fullWidth
                                multiline
                                rows={1}
                                onChange={(e) => setTag(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Jogo"
                                variant="outlined"
                                value={jogo}
                                size="small"
                                fullWidth
                                multiline
                                rows={1}
                                onChange={(e) => setJogo(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Descricão"
                                variant="outlined"
                                value={descricao}
                                size="small"
                                fullWidth
                                multiline
                                rows={2}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" size="small" onClick={save}>
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
        </div>
    )
}
