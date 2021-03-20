'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('./index.less');
const taro_ui_1 = require('taro-ui');
const components_1 = require('@tarojs/components');
const nervjs_1 = require('nervjs');
class Index extends nervjs_1.Component {
    constructor() {
        super({});
        this.setState({
            current: 0,
        });
    }
    componentWillMount() { }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    handleClick(value) {
        this.setState({
            current: value,
        });
    }
    render() {
        return (<components_1.View>
        <components_1.View>至少首页</components_1.View>
        <taro_ui_1.AtTabBar tabList={[
                { title: '待办事项', text: 8 },
                { title: '拍照' },
                { title: '通讯录', dot: true },
            ]} onClick={this.handleClick.bind(this)} current={this.state.current}/>
      </components_1.View>);
    }
}
exports.default = Index;
//# sourceMappingURL=index.jsx.map