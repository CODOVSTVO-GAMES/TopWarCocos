export class Product {
    code: number
    title: string
    description: string
    price: number

    constructor(code: number, title: string, description: string, price: number) {
        this.code = code
        this.title = title
        this.description = description
        this.price = price
    }

}