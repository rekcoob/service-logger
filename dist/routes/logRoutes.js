"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logController_1 = require("../controllers/logController");
const router = express_1.Router();
router
    .route('/')
    .get(logController_1.getLogs)
    .post(logController_1.addLog);
router
    .route('/:id')
    .put(logController_1.updateLog)
    .delete(logController_1.deleteLog);
exports.default = router;
