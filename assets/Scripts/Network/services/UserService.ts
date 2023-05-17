import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "../other/ClientService"
import { UserDTO } from "../DTO/UserDTO"
import { LoadingGame } from "../../LoadingGame/LoadingGame"

export class UserService {

    static getUser(userId: string) {
        ClientService.post('user', new UserDTO(ControllerUserStorage.getUserId()), UserService.parseGetUserResponce)
    }

    static parseGetUserResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get user error")
        ControllerUserStorage.setAccountsId(data.accountsId)
        ControllerUserStorage.setAccountId()
        ControllerUserStorage.setPermission(data.permission)
        ControllerUserStorage.setIsNewUser(data.isNewUser)
        LoadingGame.getSession()
    }
}