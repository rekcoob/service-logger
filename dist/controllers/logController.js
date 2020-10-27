"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLog = exports.updateLog = exports.addLog = exports.getLogs = void 0;
const Log_1 = __importDefault(require("../models/Log"));
const getLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield Log_1.default.find();
        res.status(200).json({ logs });
    }
    catch (error) {
        throw error;
    }
});
exports.getLogs = getLogs;
const addLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const log = new Log_1.default({
            message: body.message,
            attention: body.attention,
            tech: body.tech,
        });
        const newLog = yield log.save();
        // const allLogs: ILog[] = await Log.find();
        res.status(201).json(newLog);
    }
    catch (error) {
        throw error;
    }
});
exports.addLog = addLog;
const updateLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateLog = yield Log_1.default.findByIdAndUpdate({ _id: id }, body, 
        // return newLog instead of old Log
        // if Log doesn't exist, create it
        { new: true });
        // const allLogs: ILog[] = await Log.find();
        res.status(200).json(updateLog);
    }
    catch (error) {
        throw error;
    }
});
exports.updateLog = updateLog;
const deleteLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const deletedLog: ILog | null = await Log.findByIdAndRemove(req.params.id);
        yield Log_1.default.findByIdAndRemove(req.params.id);
        // const allLogs: ILog[] = await Log.find();
        res.status(200).json({ message: 'Log deleted' });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteLog = deleteLog;
