// /source/main.js
// Run a basic express server that uses rate limiting

import createServer from 'express'
import rateLimit from 'express-rate-limit'

const main = async () => {
	const app = createServer()
	const limiter = rateLimit({
		max: 3,
		windowMs: 10_000,
		skip: (request) => request.url === '/reset',
	})

	app.use('/', limiter)

	app.get('/ip', (request, response) => response.send({ ip: request.ip }))
	app.get('/quota', (request, response) => response.send({ quota: request.rateLimit }))
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
