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
import { getEquipes, deleteEquipes } from '../services/Firebase'

export default function EquipesLista() {

    const [equipes, setEquipes] = useState([])

    useLayoutEffect(() => {
        pegarEquipes()
    }, [])


    const pegarEquipes = async () => {
        let dados = await getEquipes()
        setEquipes(dados)
    }

    const deletar = async (id) => {
        await deleteEquipes(id)
        await pegarEquipes()
    }


    return (
        <div>
            <h1 class="p3">Visualizar Equipes</h1>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Nome</TableCell>
                                    <TableCell align="left">Tag</TableCell>
                                    <TableCell align="left">Jogo</TableCell>
                                    <TableCell align="left">Descrição</TableCell>
                                    <TableCell align="left">Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {equipes.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.nome}</TableCell>
                                        <TableCell align="left">{row.tag}</TableCell>
                                        <TableCell align="left">{row.jogo}</TableCell>
                                        <TableCell align="left">{row.descricao}</TableCell>
                                        <TableCell align="left">
                                            <Button onClick={() => deletar(row.id)} >Deletar</Button>

                                        </TableCell>
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
