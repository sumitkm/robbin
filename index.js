"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Robbin = /** @class */ (function () {
    function Robbin() {
        this.init = function (params, sync) {
            if (sync === void 0) { sync = false; }
        };
        fs_1.default.readdir('node_modules', function (err, dirs) {
            console.log("dirs.length = " + dirs.length);
            dirs.forEach(function (dir) {
                try {
                    var data = { name: "", version: "" };
                    var file = 'node_modules/' + dir + '/package.json';
                    var json = require(file);
                    var name = json.name;
                    var version = json.version;
                    data.name = version;
                    console.debug(data.name + ": " + data.version); //= 4.11.2
                }
                catch (err) {
                    console.error("version could not be determined:" + err.message);
                }
            });
        });
    }
    return Robbin;
}());
exports.Robbin = Robbin;
