import { PrismaClient } from '@prisma/client'
import { addDays, formatISO } from 'date-fns'

const prisma = new PrismaClient()

export async function list(ctx) {

    const currentDate = ctx.request.query.gameTime

    const where = currentDate ?
        {
            gameTime: {
                gte: currentDate,
                lt: formatISO(addDays(new Date(currentDate), 1))
            }
        } : {}

    try {
        const games = await prisma.game.findMany({ where })

        ctx.body = games
        ctx.status = 201

    } catch (error) {
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }
}