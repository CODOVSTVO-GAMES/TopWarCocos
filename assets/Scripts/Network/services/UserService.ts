import { UserStorageController } from "../../Controllers/UserStorageController"
import { ServerApi } from "../other/ServerApi"
import { UserDTO } from "../DTO/UserDTO"
import { LoadingGame } from "../../LoadingGame/LoadingGame"
import { GlobalMapController } from "../../Controllers/GlobalMapController"

export class UserService {

    static getUser(userId: string) {
        ServerApi.post('user', new UserDTO(UserStorageController.getUserId()), UserService.parseGetUserResponce)
    }

    static parseGetUserResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get user error")
        UserStorageController.setAccountsId(data.accountsId)
        UserStorageController.setAccountId()
        GlobalMapController.setZone(data.zone)
        UserStorageController.setPermission(data.permission)
        UserStorageController.setIsNewUser(data.isNewUser)
        LoadingGame.getSession()
    }
}