import Router from '@koa/router'
import * as User from './app/components/users.js'
import * as Hunch from './app/components/hunches.js'
import * as Game from './app/components/games.js'

export const router = new Router()

router.post('/users', User.create)
router.get('/login', User.login)

router.post('/hunches', Hunch.create)

router.get('/games', Game.list)

router.get('/:username', User.hunches)