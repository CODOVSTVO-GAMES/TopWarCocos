export class ResponseDTO {
  msg: string
  data: object
  constructor(data: object) {
    this.data = data;
  }
}
