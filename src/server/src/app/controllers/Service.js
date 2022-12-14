const User = require('../services/User');
const Service = require('../services/Service');
const pool = require('../../configs/db');

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
    const { authorization } = req.headers;

    const user = await User.getFromToken(authorization);
    const { rows } = await Service.getServices({ tel: user.telefone });
    rows?.sort((service) => {
      if (service.status === 'FINALIZADO') return 1;
      return -1;
    });
    return res.json(rows);
  } catch (err) {
    return res.status(400).json('Falhou a requisição');
  }
};

exports.getRequesterServices = async (req, res) => {
  try {
    const result = await Service.getRequesterServices(req.params.tel);
    result?.rows?.sort((service) => {
      if (service.status === 'FINALIZADO') return 1;
      return -1;
    });
    return res.json(result?.rows || []);
  } catch (err) {
    console.log(err);
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

exports.takeService = async (req, res) => {
  const { numServico } = req.params;
  if (!numServico) return res.status(400).json('Informe o número do serviço');

  try {
    await pool.query(
      `
        UPDATE servico
        SET status = 'ACEITO'
        WHERE num_servico_criado = $1
      `,
      [numServico]
    );

    const user = await User.getFromToken(req.headers.authorization);

    const atendeServico = await pool.query(
      `insert into atende_servico (num_servico_atendido, telefone_diarista)
       values ($1, $2)
       returning *`,
      [numServico, user.telefone]
    );

    res.status(200).json(atendeServico);
  } catch {
    res.status(500).json('Algo deu errado');
  }
};

exports.setServiceStatus = async (req, res) => {
  const { numServico } = req.params;
  if (!numServico) return res.status(400).json('Informe o número do serviço');
  try {
    const service = await Service.setServiceStatus(
      req.body.newStatus,
      numServico
    );
    return res.json({ message: 'Status atualizado com sucesso!', service });
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.handleServicePayment = async (req, res) => {
  try {
    const payment = await Service.payService({ ...req.params, ...req.body });

    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json(err);
  }
};
