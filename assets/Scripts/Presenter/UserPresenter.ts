import { _decorator } from 'cc';
import { UserStorage } from '../Storage/UserStorage';
import { Product } from '../Structures/Product';

export class UserPresenter {

    public static setSessionHash(sessionHash: string) {
        UserStorage.instance.sessionHash = sessionHash
    }

    public static getSessionHash(): string {
        return UserStorage.instance.sessionHash
    }

    public static setSessionId(sessionId: number) {
        UserStorage.instance.sessionId = sessionId
    }

    public static getSessionId(): number {
        return UserStorage.instance.sessionId
    }

    public static setUserId(userId: string) {
        UserStorage.instance.userId = userId
    }

    public static getUserId(): string {
        return UserStorage.instance.userId
    }

    public static getAccountId(): string {
        return UserStorage.instance.accountId
    }

    public static setAccountId() {
        UserStorage.instance.accountId = this.getUserId() + "-" + this.getAccountsId()[0]
    }

    public static setAccountsId(accountsId: string[]) {
        UserStorage.instance.accountsId = accountsId
    }

    public static getAccountsId(): string[] {
        return UserStorage.instance.accountsId
    }

    public static setIsNewUser(isNewUser: boolean) {
        UserStorage.instance.isNewUser = isNewUser
    }

    public static getIsNewUser(): boolean {
        return UserStorage.instance.isNewUser
    }

    public static setPermission(permission: string) {
        UserStorage.instance.permission = permission
    }

    public static getPermission(): string {
        return UserStorage.instance.permission
    }

    public static setServerTime(serverTime: number) {
        UserStorage.instance.serverTime = serverTime
    }

    public static getServerTime() {
        return UserStorage.instance.serverTime
    }

    public static setProducts(products: Product[]) {
        UserStorage.instance.products = products
    }

    public static getProducts(): Product[] {
        return UserStorage.instance.products
    }
}