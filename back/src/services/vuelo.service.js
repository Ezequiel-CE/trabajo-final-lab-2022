import { Sequelize } from 'sequelize';
import model from '../models/index.js';

import { BodyVuelo, editarVuelo } from '../schemas/vuelo.schema.js';

const postVuelo = (body) => {
  const { error, value } = BodyVuelo(body);

  const { tarifa, destino, origen } = value;

  if (error) {
    throw new Error(error);
  }

  return model.Vuelo.create({
    tarifa,
    destino,
    origen,
  });
};

const patchVuelo = async (vuelo) => {
  const { error, value } = editarVuelo(vuelo.body);

  if (error) {
    throw new Error(error);
  }

  const vueloEditado = await model.Vuelo.update(
    { ...value },
    {
      where: {
        id: vuelo.id,
      },
    },
  );
  return vueloEditado;
};

const getVuelo = async (id) => {
  const vuelo = await model.Vuelo.findByPk(id, { include: [{ model: model.Avion }] });
  if (!vuelo) {
    throw new Error('No se encontro vuelo');
  }
  return vuelo;
};

const deleteVuelo = async (id) => {
  const vuelo = await model.Vuelo.destroy({ where: { id } });
  if (!vuelo) {
    throw new Error('No se encontro vuelo');
  }
  return vuelo;
};

const getVuelos = async () => {
  const vuelos = await model.Vuelo.findAll();
  /* Checking if the array is empty and if it is, it throws an error. */
  if (vuelos.length === 0) throw new Error('No se encontro vuelos');
  return vuelos;
};

const getVuelosTratado = async () => {
  const vuelos = await model.Vuelo.findAll({
    attributes: ['id', 'origen', 'destino', 'fecha'],
    include: [
      {
        model: model.Pasaje,
        as: 'clase',
        required: true,
        attributes: ['id', [Sequelize.literal('tarifa + costo'), 'total'], 'categoria'],

        through: {
          as: 'pasaje_vuelo',
          attributes: [['id', 'relacionID'], 'vuelo', 'pasaje'],
        },
      },
    ],
  });

  if (vuelos.length === 0) throw new Error('No se encontro vuelos');
  return vuelos;
};

const servicio = {
  postVuelo,
  getVuelo,
  getVuelos,
  patchVuelo,
  deleteVuelo,
  getVuelosTratado,
};

export default servicio;