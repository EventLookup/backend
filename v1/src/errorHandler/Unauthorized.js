//TODO[x] Schreibe eine Error Class für unauthorized

import { StatusCodes } from "http-status-codes";

class Unauthorized extends Error {
  constructor(message){
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}


export {
  Unauthorized
}