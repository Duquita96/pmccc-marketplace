import {log} from '../logs/index.js';

export const errorHandler = (err, req, res, next) => {
  log.error(err.status, err.statusCode, err.message);
  if (err.name === 'CastError') {
    return res.status(400).send({
      status: 'error',
      message: `Operational Error: Invalid ${err.path}: ${err.value}`,
    });
  } else if (err.status === 'fail') {
    return res.status(err.statusCode).send({
      status: err.status,
      message: err.message,
    });
  } else {
    return res.status(500).send({
      status: 'error',
      message: err.message,
    });
  }
};
