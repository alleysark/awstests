"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = async (event) => {
    var _a;
    if (!((_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.name)) {
        return {
            statusCode: 404,
            body: 'Not Found'
        };
    }
    return {
        statusCode: 200,
        body: `Hello, ${event.queryStringParameters.name}!`,
    };
};
exports.hello = hello;
