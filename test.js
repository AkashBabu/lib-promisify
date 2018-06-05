import {expect} from "chai"

import Promisify from "./index"

describe('Promisify test', () => {
    it('should convert callback style to promise', async () => {
        function timer(cb) {
            setTimeout(cb, 100)
        }

        const timerPromise = Promisify(timer)

        return timerPromise()
    })

    it('should send only the first param if multi=false|undefined', async () => {
        function timer(cb) {
            setTimeout(() => {
                cb(null, '1', '2')
            }, 100)
        }

        const timerPromise = Promisify(timer)

        const result = await timerPromise()
        expect(result).to.be.eql('1')
    })

    it('should send remaining params as an array if multi=true', async () => {
        function timer(cb) {
            setTimeout(() => {
                cb(null, '1', '2')
            }, 100)
        }

        const timerPromise = Promisify(timer, {}, true)

        const results = await timerPromise()
        expect(results).to.be.an('array')
        expect(results).to.be.of.length(2)
        expect(results[0]).to.be.eql('1')
        expect(results[1]).to.be.eql('2')

    })
    it('should call the fn with the given context if specified', async () => {
        function timer(cb) {
            expect(this.test).to.be.true;

            setTimeout(cb, 100)
        }

        const timerPromise = Promisify(timer, {test: true})

        return timerPromise()
    })
})