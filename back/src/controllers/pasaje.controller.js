import servicio from '../services/pasaje.service.js';

export const crearPasaje = async (_, res) => {
  try {
    const resp = await servicio.postPasaje(_.body);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const VerPasaje = async (_, res) => {
  const { id } = _.params;

  try {
    const resp = await servicio.getPasaje(id);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const encontrarPasaje = async (req, res) => {
  try {
    const resp = await servicio.encontrarPasaje(req.body);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const encontrarPasajePorCuenta = async (req, res) => {
  try {
    const resp = await servicio.encontrarPasajePorCuenta(req.user);
    return res.status(200).json({ resp });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
