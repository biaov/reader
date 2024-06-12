import { useConfigStore } from '@/stores/config'
import type { PageGuide } from '@/components/types'

const router = useRouter()
const { toast } = useToast()

/**
 * 引导配置
 */
export const useGuide = () => {
  const { that } = useGlobal()
  const guideList = ref<PageGuide.Guide[]>([
    {
      icon: {
        url: '/static/icon/click.svg',
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      text: {
        x: 0,
        y: 0,
        value: '点击主题色切换主题'
      },
      mask: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      }
    },
    {
      icon: {
        url: '/static/icon/longpress.svg',
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      text: {
        x: 0,
        y: 0,
        value: '长按可以删除主题'
      },
      mask: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      }
    }
  ])
  onReady(() => {
    const { windowTop } = useSystemInfo()
    const query = uni.createSelectorQuery().in(that)
    const selectors = [`.theme-list .item:nth-child(2)`, `.theme-list .item:nth-child(3)`]
    selectors.forEach((selector, index) => {
      query
        .select(selector)
        .boundingClientRect(res => {
          if (!res) return
          const { top, left, width } = res as Required<UniApp.NodeInfo>
          const w = width / 2
          const y = top + w + windowTop
          const maxW = w + 10
          const space = rpxtopx(10)
          const item = guideList.value[index]
          Object.assign(item.mask, { x: left + w, y, w: maxW, h: maxW })
          Object.assign(item.icon, { x: left - rpxtopx(26), y: y + maxW + space, w: width * 2, h: width * 2 })
          Object.assign(item.text, { x: left, y: y + maxW + space + width * 2 + space })
        })
        .exec()
    })
  })

  return { guideList }
}

/**
 * 主题操作
 */
export const useTheme = () => {
  /**
   * 主题缓存
   */
  const state = useConfigStore()
  /**
   * 当前选中主题
   */
  const selectTheme = ref(state.theme)
  /**
   * 主题列表
   */
  const themes = ref([...state.themes])

  /**
   * 切换主题
   */
  const onSwitchTheme = (item: string) => {
    selectTheme.value = item
  }

  /**
   * 跳转新增主题页
   */
  const onAddTheme = () => {
    router.push('/pages/mine/theme/add')
  }

  /**
   * 移除主题
   */
  const onRemoveTheme = (item: string) => {
    if (themes.value.length <= 1) return toast('最少为一个主题')
    uni.showModal({
      title: '删除',
      content: `你确定要删除主题 ${item} 吗？`,
      success: res => {
        if (!res.confirm) return
        const index = themes.value.findIndex(v => v === item)
        themes.value.splice(index, 1)
        const [first] = themes.value
        !themes.value.includes(selectTheme.value) && (selectTheme.value = first)
      }
    })
  }

  /**
   * 恢复默认值
   */
  const onReceive = () => {
    uni.showModal({
      title: '提示',
      content: `你确定要恢复默认主题配置吗？`,
      success: res => {
        if (!res.confirm) return
        selectTheme.value = state.theme
        themes.value = [...state.themes]
      }
    })
  }

  /**
   * 保存主题
   */
  const onSaveTheme = () => {
    state.updateConfig({ theme: selectTheme.value, themes: themes.value })
    router.back()
  }

  onShow(() => {
    /**
     * 添加新增主题
     */
    const { tempAddTheme } = state
    tempAddTheme && !themes.value.includes(tempAddTheme) && themes.value.push(tempAddTheme)
  })

  return { selectTheme, themes, onSaveTheme, onReceive, onRemoveTheme, onAddTheme, onSwitchTheme }
}
