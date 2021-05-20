"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosPrinter = void 0;
/*
 * Copyright (c) 2019-2020. Author Hubert Formin <hformin@gmail.com>
 */
__exportStar(require("./models"), exports);
var post_printer_1 = require("./post-printer");
Object.defineProperty(exports, "PosPrinter", { enumerable: true, get: function () { return post_printer_1.PosPrinter; } });
