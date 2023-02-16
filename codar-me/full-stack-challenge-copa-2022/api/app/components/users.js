import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function create(ctx) {
    const password = await bcrypt.hash(ctx.request.body.password, 10)

    const data = {
        name: ctx.request.body.name,
        username: ctx.request.body.username,
        email: ctx.request.body.email,
        password,
    }

    try {
        const { password, ...user } = await prisma.user.create({ data })

        ctx.body = user
        ctx.status = 201

    } catch (error) {
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }
}

export async function login(ctx) {

    const [type, token] = ctx.headers.authorization.split(" ")
    const [email, plainTextPassword] = atob(token).split(":")

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        ctx.status = 404
        return
    }

    const passwordMatch = await bcrypt.compare(plainTextPassword, user.password)

    if (!passwordMatch) {
        ctx.status = 404
        return
    }

    const { password, ...result } = user

    const accessToken = jwt.sign({
        sub: user.id,
        name:user.name,
        expiresIn: "1d"
    }, process.env.JWT_SECRET)

    ctx.body = {
        user: result,
        accessToken
    }
}

export async function hunches(ctx) {
    const username = ctx.request.params.username

    const user = await prisma.user.findUnique({
        where: { username }
    })

    if (!user) {
        ctx.status = 404
        return
    }

    const hunches = await prisma.hunch.findMany({
        where: {
            userId: user.id
        },
        // include: {
        //     game: true
        // }
    })

    ctx.body = {
        name: user.name,
        hunches
    }
}



// export async function listAll(ctx) {
//     try {
//         const user = await prisma.user.findMany()

//         ctx.body = user
//         ctx.status = 201

//     } catch (error) {
//         console.log(error)
//         ctx.body = error
//         ctx.status = 500
//     }
// }
