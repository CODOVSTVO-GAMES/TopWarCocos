export class DataStorageResponseDTO {
    userId: string
    accountsId: Array<string>
    permission: string

    constructor(userId: string, accountsId: Array<string>, permission: string) {
        this.userId = userId
        this.accountsId = accountsId
        this.permission = permission
    }
}
