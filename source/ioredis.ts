// /source/node-redis.ts
// Run a basic express server that uses the node-redis client for rate limiting

import Redis from 'ioredis'
import createServer from 'express'
import rateLimit from 'express-rate-limit'
import RedisStore from 'rate-limit-redis'

const main = () => {
	const app = createServer()
	const client = new Redis()
	const limiter = rateLimit({
		max: 2,
		windowMs: 10_000,
		store: new RedisStore({
			// @ts-expect-error
			sendCommand: (...args: string[]) => client.call(...args),
		}),
		skip: (request) => request.url === '/reset',
	})

	app.use('/', limiter)

	app.get('/ip', (request, response) => response.send({ ip: request.ip }))
	app.get('/quota', (request, response) =>
		// @ts-expect-error
		response.send({ quota: request.rateLimit }),
	)
	app.get('/reset', (request, response) => {
		limiter.resetKey(request.ip)
		response.send({ ip: request.ip, reset: true })
	})

	app.listen(8080, () => {
		console.log('Server running!')
		console.log('http://localhost:8080/ip => view your IP address')
		console.log('http://localhost:8080/quota => view your rate limit')
		console.log('http://localhost:8080/reset => reset your rate limit')
	})
}

main()
