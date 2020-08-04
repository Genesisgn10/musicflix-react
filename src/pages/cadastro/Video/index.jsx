/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categoria';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTittles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Título padrão',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg&t=2611s',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServidor) => {
        setCategorias(categoriasDoServidor);
      });
  }, []);

  return (
    <PageDefault>
      <h1 className="h1">Cadastro de vídeo</h1>

      <Link to="/cadastro/categoria" className="link">
        Cadastrar Categoria
      </Link>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias
          .find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            // eslint-disable-next-line no-alert
            window.alert('Cadastrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTittles}
        />

        <Button type="submit" className="button">
          Cadastrar
        </Button>

      </form>

    </PageDefault>

  );
}

export default CadastroVideo;
