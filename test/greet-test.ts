// /test/greet-test.ts
// Tests the `sayHello` function

import { jest } from '@jest/globals'

import sayEllo from '../source/index.js'

test(`say 'ello to everyone`, async () => {
	const printFn = jest.spyOn(console, 'log').mockImplementation(() => {})
	sayEllo('everyone')
	expect(printFn).toHaveBeenCalled()
})
