import React, { useState, useLayoutEffect } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getContato } from '../services/Firebase'

export default function Suporte() {

    const [contato, setContato] = useState([])

    useLayoutEffect(() => {
        pegarContato()
    }, [])


    const pegarContato = async () => {
        let dadosc = await getContato()
        setContato(dadosc)
    }

    return (
        <div>
            <h1 class="p3">Visualizar Contatos</h1>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">E-mail</TableCell>
                                    <TableCell align="left">Assunto</TableCell>
                                    <TableCell align="left">Descrição</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contato.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.assunto}</TableCell>
                                        <TableCell align="left">{row.descricaoc}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}