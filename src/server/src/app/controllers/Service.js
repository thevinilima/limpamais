const User = require('../services/User');
const Service = require('../services/Service');

exports.createService = async (req, res) => {
  const { desc, dateTime, rooms, value, address } = req.body;

  if (!desc || !dateTime || !rooms || !value || !address.cep) {
    return res.status(400).json('Preencha os campos obrigatórios');
  }

  const user = await User.getFromToken(req.headers.authorization);

  const service = await Service.create(req.body, user.telefone);

  res.status(201).json({ service, message: 'Serviço criado com sucesso!' });
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.getServices();
    return res.json({ services });
  } catch (err) {
    return res.status(400).json('Falhou a requisição');
  }
};

exports.getRequesterServices = async (req, res) => {
  try {
    const services = await Service.getRequesterServices(req.headers.tel);
    return res.json({ services });
  } catch (err) {
    return res.status(400).json('Falhou a requisição');
  }
};

exports.createTreatmentService = async (req, res) => {
  const { num_servico_atendido, tel_diarista } = req.body;
  if (!num_servico_atendido || !tel_diarista) {
    return res
      .status(400)
      .json(
        'Você deve preencher tanto número de serviço atendido quanto o telefone da/do diarista'
      );
  }

  const service = await Service.createTreatmentService(
    num_servico_atendido,
    tel_diarista
  );

  res
    .status(201)
    .json({ service, message: 'Serviço obtido para atendimento com sucesso!' });
};
