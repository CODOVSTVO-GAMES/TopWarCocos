import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage";
import { Product } from "../../Structures/Product";
import { ClientService } from "../other/ClientService";

export class PaymentsService {
    static getProducts() {
        ClientService.get('payments', {}, this.parseProductsGetResponce)
    }

    static parseProductsGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get products error")
        else {
            // console.log("products get done")
            let productArray: Array<Product> = []
            console.log(data)
            let array: object[] = JSON.parse(JSON.stringify(data))
            for (let l = 0; l < array.length; l++) {
                let obj = array[l]
                productArray.push(new Product(obj['id'], obj['title'], obj['description'], obj['price']))
            }
            ControllerUserStorage.setProducts(productArray)
        }
    }
}