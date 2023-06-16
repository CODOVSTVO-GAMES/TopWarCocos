export class MapDTO {
    accountId: string
    zone: string
    x: number
    y: number

    constructor(accountId: string, zone: string, x: number, y: number) {
        this.accountId = accountId
        this.zone = zone
        this.x = x
        this.y = y
    }
}
