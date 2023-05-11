export class RequestDTO {
    data: object;
    hash: string;
    constructor(data: object, hash: string) {
      this.data = data;
      this.hash = hash;
    }
  }
  