/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
// eslint-disable-next-line linebreak-style
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categoria';

function CadastroCategoria() {
  const history = useHistory();
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://aluraflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          setCategorias(result);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:&nbsp;
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(params) {
        params.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.url,
          cor: values.cor,
        })
          .then(() => {
            // eslint-disable-next-line no-alert
            window.alert('Cadastrado com sucesso!');
            history.push('/');
          });

        clearForm();
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

      </form>
      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
