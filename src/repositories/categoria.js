/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACK}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function create(obj) {
  return fetch(`${URL_CATEGORIES}?_embed=categorias`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
