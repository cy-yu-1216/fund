import type { VNode } from 'vue'
import dayjs from 'dayjs'
// 表格
export const tableConfig = {
  column: [
    {
      prop: 'nickName',
      label: '基金名称',
      fixed: 'left',
      sortable: false,
      slot: 'nickName',
      with: 250,
      popover: true
    },
    {
      prop: 'jinZhi',
      width: 90,
      headerRender: (h: VNode, scope: any) => {
        return (
          <div class="flex-col">
            <span>净值</span>
            <span>{dayjs().format('MM-DD')}</span>
          </div>
        )
      },
      render: (h: VNode, scope: any) => {
        return <span>12</span>
      }
    },
    {
      prop: 'guZhi',
      width: 90,
      headerRender: (h: VNode) => {
        return (
          <div class="flex-col">
            <span>估值</span>
            <span>{dayjs().add(1, 'day').format('MM-DD')}</span>
          </div>
        )
      }
    },
    {
      prop: 'dd',
      width: 110,
      headerRender: (h: VNode) => {
        return (
          <div class="flex-col">
            <span>添加后收益</span>
            <span>添加时长</span>
          </div>
        )
      }
    },
    {
      prop: 'qq',
      label: '近1周'
    },
    {
      prop: 'asa',
      label: '近1月'
    },
    {
      prop: 'asdsac',
      label: '近3月'
    },
    {
      prop: 'asdsac',
      label: '近6月'
    },
    {
      prop: 'asdsac',
      width: 90,
      label: '今年来'
    },
    {
      prop: 'asdsac',
      label: '近1年'
    },
    {
      prop: 'asdsac',
      label: '近2年'
    },
    {
      prop: 'asdsac',
      label: '近3年'
    },
    {
      prop: 'asdsac',
      label: '近5年'
    },
    {
      prop: 'asdsac',
      width: 90,
      label: '成立来'
    }
  ]
}
