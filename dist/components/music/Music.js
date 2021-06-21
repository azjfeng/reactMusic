"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../../style/music/music.less");
var Music = /** @class */ (function (_super) {
    __extends(Music, _super);
    function Music(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list: []
        };
        return _this;
    }
    Music.prototype.componentDidMount = function () {
        var _this = this;
        fetch('/list', {
            body: '',
            method: 'POST',
            mode: 'cors', // no-cors, cors, *same-origin
        }).then(function (res) { return res.json(); })
            .then(function (res) {
            console.log(res);
            _this.setState({
                list: res.Data
            });
        })
            .catch(function (err) {
            console.log('err', err);
        });
    };
    Music.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "music" }, this.state.list.map(function (item) {
            return react_1.default.createElement("div", { className: "box" },
                react_1.default.createElement("img", { src: decodeURIComponent(item.ProductImg), alt: "" }),
                react_1.default.createElement("div", { className: "left" },
                    react_1.default.createElement("span", { className: "title" }, decodeURI(item.ProductName))));
        })));
    };
    return Music;
}(react_1.default.Component));
exports.default = Music;
