/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-28 09:44:47
 */
/// <reference types="vitest" />
import { resolve } from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import type { PageMetaDatum } from '@uni-helper/vite-plugin-uni-pages'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import Postcsspxtoviewport from 'postcss-px-to-viewport'
import h5ProdEffectPlugin from 'uni-vite-plugin-h5-prod-effect'

// @ts-expect-error failed to resolve types
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    server: {
      open: true,
      port: 5177,
      proxy: {
        '^/api': {
          target: env.VITE_APP_PROXY_TARGET,
          changeOrigin: true,
          // rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },

    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'src')}/`,
      },
    },

    plugins: [
      /**
       * vite-plugin-uni-pages
       * @see https://github.com/uni-helper/vite-plugin-uni-pages
       */
      UniPages({
        dir: 'src/pages',
        routeBlockLang: 'yaml',
        exclude: ['**/components/*.vue'],
        subPackages: [
          'src/pages-sub',
        ],
        onBeforeWriteFile(ctx) {
          type PageMeta = (PageMetaDatum & { name: string; tabBar?: { text?: string; iconPath: string; selectedIconPath: string } })

          const pageMetaData = ctx.pageMetaData as PageMeta[]

          ctx.pagesGlobConfig!.globalStyle!.navigationBarTitleText = env.VITE_APP_TITLE

          ctx.pagesGlobConfig!.tabBar!.list = pageMetaData.flatMap(e => 'tabBar' in e
            ? {
                pagePath: e.path,
                text: e.tabBar?.text ? e.tabBar.text : e.style?.navigationBarTitleText,
                iconPath: e.tabBar!.iconPath,
                selectedIconPath: e.tabBar!.selectedIconPath,
              }
            : [])
        },
      }),

      /**
       * vite-plugin-uni-layouts
       * @see https://github.com/uni-helper/vite-plugin-uni-layouts
       */
      UniLayouts(),

      /**
       * unocss
       * @see https://github.com/antfu/unocss
       * see unocss.config.ts for config
      */
      Unocss(),

      /**
       * unplugin-auto-import 按需 import
       * @see https://github.com/antfu/unplugin-auto-import
       */
      AutoImport({
        imports: [
          'vue',
          'uni-app',
        ],
        dts: true,
        dirs: [
          './src/common',
        ],
        vueTemplate: true,
      }),

      /**
       * unplugin-vue-components 按需引入组件
       * 注意：需注册至 uni 之前，否则不会生效
       * @see https://github.com/antfu/vite-plugin-components
       */
      Components({
        dts: 'src/components.d.ts',
      }),

      uni(),

      /**
       * Reactivity Transform
       * @see https://vue-macros.sxzz.moe/zh-CN/features/reactivity-transform.html
       */
      ReactivityTransform(),

      h5ProdEffectPlugin(),

    ],

    /**
   * Vitest
   * @see https://github.com/vitest-dev/vitest
   */
    test: {
      environment: 'jsdom',
    },

    css: {
      postcss: {
        plugins: [
          Postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            exclude: [],
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
  }
}
