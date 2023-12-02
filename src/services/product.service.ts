import { prisma } from "../utils/db.server.js";
import { CreateProduct, UpdateProduct } from "../models/product.model";

export async function getProductById(id: number) {
    return prisma.product.findUnique({
        where: {
            id: id
        }
    })
}

export async function getProducts(query: any) {
    const defaultParams = { take: 10, skip: 0 }
    const _query = { ...defaultParams, ...query }

    return _getProducts(_query)
}

async function _getProducts(
    { take, skip, name }: {
        take: number,
        skip: number,
        name?: string | undefined
    }
) {
    return prisma.product.findMany({
        take: take,
        skip: skip,
        where: {
            name: {
                contains: name
            }
        }
    })
}

export async function createProduct(
    body: CreateProduct
) {
    return prisma.product.create({
        data: body
    })
}

export async function updateProduct(id: number, body: UpdateProduct) {
    const { name, calories } = body

    return prisma.product.update({
        where: {
            id: id
        },
        data: {
            name: name,
            calories: calories
        }
    })
}

export async function deleteProduct(id: number) {
    return prisma.product.delete({
        where: {
            id: id
        }
    })
}