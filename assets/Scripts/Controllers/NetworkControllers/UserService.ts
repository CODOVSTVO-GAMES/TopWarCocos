import { UserStorageController } from "../StorageControllers/UserStorageController"
import { ServerApi } from "./ServerApi"
import { UserDTO } from "../../Structures/DTO/UserDTO"
import { LoadingGame } from "../../LoadingGame/LoadingGame"
import { GlobalMapStorageController } from "../StorageControllers/GlobalMapStorageController"

export class UserService {

    static getUser(userId: string) {
        ServerApi.post('user', new UserDTO(UserStorageController.getUserId()), UserService.parseGetUserResponce)
    }

    static parseGetUserResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get user error")
        UserStorageController.setAccountsId(data.accountsId)
        UserStorageController.setAccountId()
        GlobalMapStorageController.setZone(data.zone)
        UserStorageController.setPermission(data.permission)
        UserStorageController.setIsNewUser(data.isNewUser)
        LoadingGame.getSession()
    }
}