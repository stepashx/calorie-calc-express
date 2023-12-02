export interface CreateProduct {
    name: string
    calories: number
}

export interface UpdateProduct {
    name: string | undefined,
    calories: number | undefined
}