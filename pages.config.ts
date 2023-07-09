/*
 * @Description: 此文件同步至src/pages.json 请勿手动修改pages.json
 * @Author: sharebravery
 * @Date: 2023-06-28 09:44:47
 */
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    autoscan: true,
    custom: {
      // uni-ui 规则如下配置
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)': 'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  pages: [],
  globalStyle: {
    'navigationBarTitleText': 'misunderstanding-calculator-uni',
    'navigationBarBackgroundColor': '@navBgColor',
    'navigationBarTextStyle': '@navTxtStyle',
    'backgroundColor': '@bgColor',
    'backgroundTextStyle': '@bgTxtStyle',
    'backgroundColorTop': '@bgColorTop',
    'backgroundColorBottom': '@bgColorBottom',
    'app-plus': {
      titleNView: false, // 移除 H5、APP 顶部导航
    },
  },
  tabBar: {
    color: '#474747',
    selectedColor: '#add5a2',
    backgroundColor: '#d7ecff',
    list: [],
  },
})
