import { _decorator } from 'cc';
import { UserStorage } from '../../Storage/UserStorage';
import { Product } from '../../Structures/Product';

export class UserStorageController {

    static setSessionHash(sessionHash: string) {
        UserStorage.instance.sessionHash = sessionHash;
    }

    static getSessionHash(): string {
        return UserStorage.instance.sessionHash;
    }

    static setSessionId(sessionId: number) {
        UserStorage.instance.sessionId = sessionId;
    }

    static getSessionId(): number {
        return UserStorage.instance.sessionId;
    }

    static setUserId(userId: string) {
        UserStorage.instance.userId = userId;
    }

    static getUserId(): string {
        return UserStorage.instance.userId;
    }

    static getAccountId(): string {
        return UserStorage.instance.accountId;
    }

    static setAccountId() {
        UserStorage.instance.accountId = this.getUserId() + "-" + this.getAccountsId()[0];
    }

    static setAccountsId(accountsId: Array<string>) {
        UserStorage.instance.accountsId = accountsId;
    }

    static getAccountsId(): Array<string> {
        return UserStorage.instance.accountsId;
    }

    static setIsNewUser(isNewUser: boolean) {
        UserStorage.instance.isNewUser = isNewUser;
    }

    static getIsNewUser(): boolean {
        return UserStorage.instance.isNewUser;
    }

    static setPermission(permission: string) {
        UserStorage.instance.permission = permission;
    }

    static getPermission(): string {
        return UserStorage.instance.permission;
    }

    static setServerTime(serverTime: number) {
        UserStorage.instance.serverTime = serverTime;
    }

    static getServerTime() {
        return UserStorage.instance.serverTime;
    }

    static setProducts(products: Array<Product>) {
        UserStorage.instance.products = products;
    }

    static getProducts(): Array<Product> {
        return UserStorage.instance.products;
    }
}