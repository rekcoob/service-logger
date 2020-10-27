"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
// dotenv.config();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(cors_1.default());
// Routes
app.use('/', routes_1.default);
// Heroku Deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, '../frontend/build', 'index.html')));
}
// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.mz0or.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
// const uri: string =
// 	'mongodb+srv://test:test@cluster0.7xnmc.mongodb.net/service-logger?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default
    .connect(process.env.MONGO_URI, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => {
    throw error;
});
