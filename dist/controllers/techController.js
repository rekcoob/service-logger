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
exports.deleteTech = exports.addTech = exports.getTechs = void 0;
const Tech_1 = __importDefault(require("../models/Tech"));
const getTechs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const techs = yield Tech_1.default.find();
        res.status(200).json({ techs });
    }
    catch (error) {
        throw error;
    }
});
exports.getTechs = getTechs;
const addTech = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const tech = new Tech_1.default({
            firstName: body.firstName,
            lastName: body.lastName,
        });
        const newTech = yield tech.save();
        // const allTechs: ITech[] = await Tech.find();
        res
            .status(201)
            // .json({ message: 'Tech added', tech: newTech, techs: allTechs });
            .json(newTech);
    }
    catch (error) {
        throw error;
    }
});
exports.addTech = addTech;
const deleteTech = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const deletedTech: ITech | null = await Tech.findByIdAndRemove(
        // 	req.params.id
        // );
        yield Tech_1.default.findByIdAndRemove(req.params.id);
        // const allTechs: ITech[] = await Tech.find();
        // res.status(200).json({
        // 	message: 'Tech deleted',
        // 	tech: deletedTech,
        // 	techs: allTechs,
        // });
        res.status(200).json({ message: 'Tech deleted' });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTech = deleteTech;
