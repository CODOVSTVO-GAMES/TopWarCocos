export class MapDTO {
    accountId: string
    coordinates: string

    constructor(accountId: string, coordinates: string,) {
        this.accountId = accountId
        this.coordinates = coordinates
    }
}
