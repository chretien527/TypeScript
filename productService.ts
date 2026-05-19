import { Product } from "./types";
import { Database } from "./database";

export class ProductService {
    constructor(private db: Database<Product>) {}

    addProduct(product: Product): Product {
        return this.db.create(product);
    }

    getProducts(): Product[] {
        return this.db.findAll();
    }

    buyProduct(productId: number, amount: number): string {
        const product = this.db.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        if (product.quantity < amount) {
            throw new Error("Not enough stock");
        }

        product.quantity -= amount;

        return `${amount} ${product.name}(s) purchased`;
    }
}