"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../../style/list/list.less");
function List(props) {
    var numbers = props.nums;
    return (react_1.default.createElement("ul", null, numbers.map(function (item, index) {
        return react_1.default.createElement("li", { key: index }, item);
    })));
}
exports.default = List;
