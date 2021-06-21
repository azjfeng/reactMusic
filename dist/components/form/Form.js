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
require("../../style/form/form.less");
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = { value: "grapefruit" };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.textInput = react_1.default.createRef();
        _this.focusTextInput = _this.focusTextInput.bind(_this);
        return _this;
    }
    Form.prototype.handleSubmit = function (e) {
        e.preventDefault();
        console.log(this.state.value);
    };
    Form.prototype.handleChange = function (e) {
        this.setState({
            value: e.target.value
        });
    };
    Form.prototype.focusTextInput = function () {
        this.textInput.current.focus();
    };
    Form.prototype.render = function () {
        return (react_1.default.createElement("form", { onSubmit: this.handleSubmit },
            react_1.default.createElement("input", { type: "text", ref: this.textInput }),
            react_1.default.createElement("input", { type: "button", value: "Focus the text input", onClick: this.focusTextInput }),
            react_1.default.createElement("label", null,
                "\u9009\u62E9\u4F60\u559C\u6B22\u7684\u98CE\u5473:",
                react_1.default.createElement("select", { value: this.state.value, onChange: this.handleChange },
                    react_1.default.createElement("option", { value: "grapefruit" }, "\u8461\u8404\u67DA"),
                    react_1.default.createElement("option", { value: "lime" }, "\u9178\u6A59"),
                    react_1.default.createElement("option", { value: "coconut" }, "\u6930\u5B50"),
                    react_1.default.createElement("option", { value: "mango" }, "\u8292\u679C"))),
            react_1.default.createElement("input", { type: "submit", value: "\u63D0\u4EA4" })));
    };
    return Form;
}(react_1.default.Component));
exports.default = Form;
