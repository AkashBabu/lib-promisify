# lib-promisify
Nodejs library that converts Callback styled functions to Promise styled

## Usage

```javascript

import Promisify from "lib-promisify"

// Callback Styled function
function timer(cb) {
    setTimeout(cb, 1000)
}

async function testPromise() {
    const timerPromise = Promisify(timer)
    
    // Promise styled
    await timerPromise()
}

```

### Promisify(fn, context = {}, multiArgs = false)

`fn` - Callback styled function  
`context` - fn will be binded to this context, *default is {}*  
`multiArgs` - if multiple args has to be sent on Promise.resolve. If *true*, then all the params to cb will be returned as an array. *default is false*
