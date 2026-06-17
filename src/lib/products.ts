export type ProductType={
    uuid:number,
    thumbnail:string,
    name:string,
    priceOut:number,
    description:string,
}
export type MainProductType = { 
    content: ProductType[]
}

export type CreateProductType ={ 
  name: string,
  description: string,
  computerSpec: {
    processor: string,
    ram: string,
    storage: string,
    gpu: string,
    os: string,
    screenSize: string,
    battery: string
  },
  stockQuantity: number,
  priceIn: number,
  priceOut: number,
  discount: number,
  color: [
    {
      color: string,
      images: [
        string
      ]
    }
  ],
  thumbnail: string,
  warranty: string,
  availability: boolean,
  images: [
    string
  ],
}