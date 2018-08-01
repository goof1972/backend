"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util = require('util');
var fs = require('fs');
var FileActions = /** @class */ (function () {
    function FileActions() {
        this.path = "./storage.txt";
    }
    FileActions.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var output, out, read, content, x, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        output = [];
                        out = { "phrases": [] };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        read = util.promisify(fs.readFile);
                        return [4 /*yield*/, read(this.path)];
                    case 2:
                        content = _a.sent();
                        output = content.toString().split("\n");
                        for (x = 1; x <= output.length; x++) {
                            out.phrases.push({
                                "id": x,
                                "phrase": output[x - 1]
                            });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, out];
                }
            });
        });
    };
    FileActions.prototype.write = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var phrase, file, read, content, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!input.hasOwnProperty("phrase")) return [3 /*break*/, 2];
                        phrase = "\n" + input.phrase;
                        file = fs.createWriteStream(this.path, { flags: 'a' });
                        file.write(phrase);
                        file.end();
                        read = util.promisify(fs.readFile);
                        return [4 /*yield*/, read(this.path)];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, { "id": content.toString().split("\n").length.toString() }];
                    case 2: throw "Invalid input: \"phrase\" field is missing.";
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileActions.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var output, out, read, write, content, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        output = [];
                        out = { "success": false };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        read = util.promisify(fs.readFile);
                        write = util.promisify(fs.writeFile);
                        return [4 /*yield*/, read(this.path)];
                    case 2:
                        content = _a.sent();
                        output = content.toString().split("\n");
                        if (!(id > output.length || id < 1)) return [3 /*break*/, 3];
                        out.success = false;
                        return [3 /*break*/, 5];
                    case 3:
                        output.splice(id - 1, 1);
                        return [4 /*yield*/, write(this.path, output.join("\n"))];
                    case 4:
                        _a.sent();
                        out.success = true;
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/, out];
                }
            });
        });
    };
    return FileActions;
}());
exports.FileActions = FileActions;
