"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Express root */
const express_1 = __importDefault(require("express"));
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App:
const app = (0, express_1.default)();
// Register view engine:
app.set("view engine", "pug");
app.set("views", "./src/views");
// Routes:
app.get('/', (req, res) => {
    res.status(200).render('base_view');
});
// Static middleware layer:
app.use(express_1.default.static("./src/static"));
// Start: 
app.listen(PORT, HOST, () => console.log("Starting server..."));
