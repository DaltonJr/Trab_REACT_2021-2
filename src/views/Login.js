import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState, useLayoutEffect } from 'react'
import { storageSave, storageRemove, storageGet } from "../services/Storage"
import { login, getEquipes, sigin } from '../services/Firebase'
import { useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import RoomIcon from '@mui/icons-material/Room';
import './styles.css';

function AnyReactComponent({ text }) {
  return <div>
    <RoomIcon fontSize="large" color="error" />
    <span style={{ backgroundColor: "white", fontSize: 18, fontWeight: "bold" }}>{text}</span>
  </div>;
}

function Login() {
  let history = useHistory();
  const [lembreme, setLembreme] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [open, setOpen] = React.useState(false);
  const [errorStatus, setErrorStatus] = useState(true)
  const [equipe, setEquipes] = useState([])

  useLayoutEffect(() => {
    let emailStorage = storageGet("email")
    let passwordStorage = storageGet("password")

    if (emailStorage) {
      setEmail(emailStorage)
      setPassword(passwordStorage)
      setLembreme(true)
    }

    pegarEquipes()

  }, [])

  const pegarEquipes = async () => {
    let dados = await getEquipes()
    setEquipes(dados)
  }


  const handleLembreme = (e) => {
    setLembreme(e.target.checked)

    if (e.target.checked === true) {
      storageSave("email", email)
      storageSave("password", password)
    } else {
      storageRemove("email")
      storageRemove("password")
    }
  }

  const novoRegistro = async () => {

    sigin(email, password)
      .then((retorno) => {
        setMsg(retorno)
        setErrorStatus(false)
        setOpen(true)
      })
      .catch(error => {
        setMsg(error)
        setOpen(true)
        setErrorStatus(true)

      })
  }

  const efetuarLogin = async () => {

    login(email, password)
      .then(() => history.push("/home"))
      .catch(error => {
        setMsg(error)
        setOpen(true)
        setErrorStatus(true)
      })
  }


  return (
      <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Collapse in={open}>
            <Alert
              severity={errorStatus ? "error" : "success"}
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
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            type="email"
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            type="password"
            color= "primary"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
  
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={lembreme}
                  onChange={handleLembreme} />}
              label="Lembre-me"
            />
          </FormGroup>
          <Button variant="contained" size="small" onClick={efetuarLogin}>
            Login
          </Button>
          <span> </span>
          <Button variant="contained" size="small" onClick={novoRegistro}>
            Novo Registro
          </Button>

      </Grid>
      <Grid item xs={3}></Grid>

      <Grid item xs={12}>
      <center>
        <div class="body">
            <h1 class="p3">FlameX</h1>
            <h2 class="p3">Gerenciamento de Equipes, venha fazer parte!</h2>
            <iframe width="1400" height="800" src="https://www.youtube.com/embed/h7MYJghRWt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </center>
      </Grid>
    </Grid >
  
  );
}
export default Login;
