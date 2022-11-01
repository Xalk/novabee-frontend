export interface IProduct {
    title: string
    description: string
    price: number,
    imageFile: {
        file: string
        rawFile: File
        title: string
    }
    imageUrl: string
}
