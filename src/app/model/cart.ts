export interface Cart {
    message: string,
    product:{
        id:number,
        name:string,
        price:number,
        image:string,
        description:string,
        category:string,
        createdAt:string,
        updatedAt:string,
        userId:number,
        cartItem:{
            id:number,
            quantity:number,
            createdAt:string,
            updatedAt:string,
            cartId:number,
            productId:number
        }
    }
}
