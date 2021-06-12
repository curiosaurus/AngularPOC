export interface Product {
    message:string,
    totalItems:{
        count:number,
        rows:[{
            id: number,
            name: string,
            price: number,
            image: string,
            description: string,
            category:string,
            createdAt: string,
            updatedAt: string,
            userId: number
        }]
    }
}
