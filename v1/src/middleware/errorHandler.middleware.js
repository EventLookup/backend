import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Etwas lief schief, bitte versuche es später nochmal!'
  }
  
  // wenn ValidationError
  if(err.name === 'ValidationError'){
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = Object.values(err.errors)
    .map( error => error.message)
    .join(' ');
  }

  // wenn MongoServerError && code 11000
  if(err.name === 'MongoError' && err.code === 11000) {
    customError.statusCode = StatusCodes.CONFLICT;
    customError.msg = Object.values(err.errors)
      .map(error => error.message)
      .join(' ');
  }

  // wenn CastError
  if (err.name === 'CastError') {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = Object.values(err.errors)
      .map(error => error.message)
      .join(' ');
  }


  return res.status(customError.statusCode).json({ msg: customError.msg });
}


export default errorHandlerMiddleware;