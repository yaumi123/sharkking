import './index.less';
import { AtTabBar } from 'taro-ui';
import { View } from '@tarojs/components';
import Nerv, { Component } from 'nervjs';
import Taro from '@tarojs/taro';
import { PageUrlConst } from '@/constant/pageUrl.const';

const indexNavigateMap = new Map<Number, PageUrlConst>([
  [0, PageUrlConst.DRILL],
  [1, PageUrlConst.COURSE],
  [2, PageUrlConst.MY],
]);

interface IState {
  current: number;
}

interface IProps {}

class Index extends Component<IProps, IState> {
  constructor() {
    super({});
    this.setState({
      current: 0,
    } as IState);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(value) {
    this.setState({
      current: value,
    });
    Taro.navigateTo({ url: indexNavigateMap.get(value) });
  }

  render() {
    return (
      <View>
        <View>至少首页</View>
        <AtTabBar
          fixed
          tabList={[
            { title: '训练', iconType: 'lightning-bolt' },
            { title: '课程', iconType: 'numbered-list' },
            { title: '鲨鱼小窝', iconType: 'user' },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          color={'#333333'}
          selectedColor={'#DAA465'}
          iconSize={24}
          fontSize={16}
        />
      </View>
    );
  }
}

export default Index;
