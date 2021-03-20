'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('taro-ui/dist/style/index.scss');
require('@tarojs/taro');
require('./app.less');
const nervjs_1 = require('nervjs');
class App extends nervjs_1.Component {
    componentDidMount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return this.props.children;
    }
}
exports.default = App;
//# sourceMappingURL=app.jsx.map