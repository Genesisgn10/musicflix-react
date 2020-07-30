import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'

export default function CadstroVIdeo() {
  return (
    <PageDefault>
     <h1>Cadastro de Vídeo</h1> 

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}