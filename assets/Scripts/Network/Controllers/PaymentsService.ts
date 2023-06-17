import { UserStorageController } from "../../Controllers/StorageControllers/UserStorageController";
import { Product } from "../../Structures/Product";
import { ServerApi } from "../Other/ServerApi";

export class PaymentsService {
    static getProducts() {
        ServerApi.get('payments/products', {}, this.parseProductsGetResponce)
    }

    static parseProductsGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get products error")
        else {
            // console.log("products get done")
            let productArray: Array<Product> = []
            // console.log(data)
            let array: object[] = JSON.parse(JSON.stringify(data))
            for (let l = 0; l < array.length; l++) {
                let obj = array[l]
                productArray.push(new Product(obj['id'], obj['title'], obj['description'], obj['price']))
            }
            UserStorageController.setProducts(productArray)
        }
    }
}