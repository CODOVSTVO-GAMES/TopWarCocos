import { _decorator } from 'cc';
import { Product } from '../Structures/Product';
import { UserModel } from '../Model/UserModel';

export class UserPresenter {

    public static setSessionHash(sessionHash: string) {
        UserModel.instance.sessionHash = sessionHash
    }

    public static getSessionHash(): string {
        return UserModel.instance.sessionHash
    }

    public static setSessionId(sessionId: number) {
        UserModel.instance.sessionId = sessionId
    }

    public static getSessionId(): number {
        return UserModel.instance.sessionId
    }

    public static setUserId(userId: string) {
        UserModel.instance.userId = userId
    }

    public static getUserId(): string {
        return UserModel.instance.userId
    }

    public static getAccountId(): string {
        return UserModel.instance.accountId
    }

    public static setAccountId() {
        UserModel.instance.accountId = this.getUserId() + "-" + this.getAccountsId()[0]
    }

    public static setAccountsId(accountsId: string[]) {
        UserModel.instance.accountsId = accountsId
    }

    public static getAccountsId(): string[] {
        return UserModel.instance.accountsId
    }

    public static setIsNewUser(isNewUser: boolean) {
        UserModel.instance.isNewUser = isNewUser
    }

    public static getIsNewUser(): boolean {
        return UserModel.instance.isNewUser
    }

    public static setPermission(permission: string) {
        UserModel.instance.permission = permission
    }

    public static getPermission(): string {
        return UserModel.instance.permission
    }

    public static setServerTime(serverTime: number) {
        UserModel.instance.serverTime = serverTime
    }

    public static getServerTime() {
        return UserModel.instance.serverTime
    }

    public static setProducts(products: Product[]) {
        UserModel.instance.products = products
    }

    public static getProducts(): Product[] {
        return UserModel.instance.products
    }
}