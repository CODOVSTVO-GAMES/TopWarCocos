import { UserPresenter } from "../../Presenter/UserPresenter"
import { ServerApi } from "./ServerApi"
import { UserDTO } from "../../Structures/DTO/UserDTO"
import { LoadingGame } from "../../LoadingGame/LoadingGame"
import { GlobalMapPresenter } from "../../Presenter/GlobalMapPresenter"

export class UserService {

    static getUser(userId: string) {
        ServerApi.post('user', new UserDTO(UserPresenter.getUserId()), UserService.parseGetUserResponce)
    }

    static parseGetUserResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get user error")
        UserPresenter.setAccountsId(data.accountsId)
        UserPresenter.setAccountId()
        GlobalMapPresenter.setZone(data.zone)
        UserPresenter.setPermission(data.permission)
        UserPresenter.setIsNewUser(data.isNewUser)
        LoadingGame.getSession()
    }
}