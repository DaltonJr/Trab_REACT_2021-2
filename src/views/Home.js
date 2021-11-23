import { css } from '@mui/styled-engine'
import React from 'react'
import './styles.css'

export default function Home() {
    
    return (
        <div classname='body'>
            <head>
            </head>
            <body>
                <h1 class="p3">FlameX - Em desenvolvimento</h1>
                <p class="p3">O FlameX é um gerenciador de equipes de e-Sports que está em desenvolvimento, o objetivo é reunir e abraçar a grande comunidade de e-Sports em um só lugar</p>
                <p class="p3">Desenvolvido por: Eduardo Maragno e Dalton</p>
                <div>
                    <iframe width="1800" height="800" src="https://www.youtube.com/embed/bFWaRqkL84s?controls=0&amp;start=34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </body>    
        </div>
    )
}
