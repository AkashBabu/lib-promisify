"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts callbacks to promise styled functions
 * @param {Function} fn
 * @param {Object} [cxt={}]
 * @param {Boolean} [multiArgs=false]
 *
 * @returns {Promise}
 */
function Promisify(fn) {
    var cxt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var multiArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", new _promise2.default(function (resolve, reject) {
                            function cb(err) {
                                if (err) {
                                    return reject(err);
                                }

                                for (var _len2 = arguments.length, results = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                    results[_key2 - 1] = arguments[_key2];
                                }

                                multiArgs ? resolve(results) : resolve(results[0]);
                            }
                            fn.call.apply(fn, [cxt].concat((0, _toConsumableArray3.default)(args), [cb]));
                        }));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}

exports.default = Promisify;