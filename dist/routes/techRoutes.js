"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const techController_1 = require("../controllers/techController");
const router = express_1.Router();
router
    .route('/')
    .get(techController_1.getTechs)
    .post(techController_1.addTech);
router
    .route('/:id')
    .delete(techController_1.deleteTech);
exports.default = router;
