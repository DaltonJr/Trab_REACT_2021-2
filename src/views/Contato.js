import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { saveContato } from '../services/Firebase';
import { useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import './styles.css';

export default function Contato() {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [descricaoc, setDescricaoc] = useState("")
    const [msg, setMsg] = useState("")
    const [open, setOpen] = React.useState(false);

    const save = async () => {

        let objetoc = {
            email: email,
            assunto: assunto,
            descricaoc: descricaoc
        }
        try {
            await saveContato(objetoc)
            history.push("/suporte")
        } catch (error) {
            setMsg(error)
            setOpen(true)

        }
    }

    return (
        <div class="body">
            <h1 class="p3">Entre em Contato</h1>
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
                                label="E-mail"
                                variant="outlined"
                                value={email}
                                size="small"
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Assunto"
                                variant="outlined"
                                value={assunto}
                                size="small"
                                fullWidth
                                multiline
                                rows={1}
                                onChange={(e) => setAssunto(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Descricão"
                                variant="outlined"
                                value={descricaoc}
                                size="small"
                                fullWidth
                                multiline
                                rows={2}
                                onChange={(e) => setDescricaoc(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" size="small" onClick={save}>
                                Chamar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </div>
    )
}
