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
var List_1 = __importDefault(require("./list/List"));
var Context_1 = __importDefault(require("./context/Context"));
var tsx_1 = require("./context/tsx");
// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
    return (react_1.default.createElement(Context_1.default, { onClick: props.changeTheme }, "Change Theme"));
}
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            theme: tsx_1.themes.light
        };
        return _this;
        // this.toggleTheme = () => {
        //     this.setState(state => ({
        //         theme:
        //             state.theme === themes.dark
        //                 ? themes.light
        //                 : themes.dark,
        //     }));
        // };
    }
    App.prototype.render = function () {
        var nums = [1, 2, 3, 4, 5, 6, 7];
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(List_1.default, { nums: nums })));
    };
    return App;
}(react_1.default.Component));
// function App(props) {
//     const nums = [1,2,3,4,5,6,7];
//     return (
//         <div className = "App">
//             <Clock />
//             <List nums={nums}/>
//             <Form />
//             <Music />
//             <ThemeContext.Provider value={}/>
//             <ThemedButton />
//         </div>
//     )
// }
exports.default = App;
