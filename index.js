/**
 * Converts callbacks to promise styled functions
 * @param {Function} fn
 * @param {Object} [cxt={}]
 * @param {Boolean} [multiArgs=false]
 *
 * @returns {Promise}
 */
function Promisify(fn, cxt = {}, multiArgs = false) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            function cb(err, ...results) {
                if (err) {
                    return reject(err);
                }
                multiArgs ? resolve(results) : resolve(results[0]);
            }
            fn.call(cxt, ...args, cb);
        });
    };
}

export default Promisify;
