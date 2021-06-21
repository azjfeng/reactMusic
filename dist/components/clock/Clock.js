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
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { date: new Date() };
        return _this;
    }
    Clock.prototype.componentDidMount = function () {
        var _this = this;
        this.timeId = setInterval(function () { return _this.tick(); }, 1000);
    };
    Clock.prototype.componentWillUnmount = function () {
        clearInterval(this.timeId);
    };
    Clock.prototype.tick = function () {
        this.setState({
            date: new Date()
        });
    };
    Clock.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("p", null, "Hello, world!"),
            react_1.default.createElement("p", null,
                "It is ",
                this.state.date.toLocaleTimeString(),
                ".")));
    };
    return Clock;
}(react_1.default.Component));
exports.default = Clock;
