"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
    },
    attention: {
        type: Boolean,
        required: true,
    },
    tech: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.model('Log', logSchema);
