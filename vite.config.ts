import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import tailwindcss from 'tailwindcss'
import { theme, customColor } from './src/config/theme'

const spacing: Record<string, string> = {}

Array.from({ length: 1000 }, (_, i) => {
  spacing[i] = `${i}rpx`
})

export default defineConfig({
  base: './',
  plugins: [
    eslint(),
    autoImport({
      imports: ['vue', { '@dcloudio/uni-app': ['onLaunch', 'onShow', 'onHide', 'onLoad', 'onReady', 'onReachBottom'] }],
      dirs: ['./src/composables', './src/utils/function'],
      dts: './types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './types/.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/node_modules/, 'types.ts'],
      dts: './types/components.d.ts'
    }),
    (uni as Record<string, any>).default()
  ],
  server: {
    host: '0.0.0.0',
    port: 8091
  },
  resolve: {
    /**
     * 路径别名
     */
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import '@/styles/variable.less';`
      }
    },
    /**
     * 配置预编译器
     */
    postcss: {
      plugins: [
        tailwindcss({
          content: ['./src/**/*.vue'],
          theme: {
            spacing,
            extend: {
              fontSize: ({ theme }) => theme('spacing'),
              borderRadius: ({ theme }) => theme('spacing'),
              colors: {
                ...customColor,
                ...theme
              }
            }
          }
        })
      ]
    }
  }
})
