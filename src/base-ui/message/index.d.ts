import { ElMessage } from 'element-plus'

function judge(
  name: 'warning' | 'error' | 'success',
  msg: ResponseDataType | string
) {
  if (msg instanceof String) {
    return ElMessage[name](msg)
  } else {
    return ElMessage.warning((msg as ResponseDataType).message || '请求失败')
  }
}
declare function Message() {
  return {
    warning: (msg: ResponseDataType | string) => {
      judge('warning', msg)
    },
    error: (msg: ResponseDataType | string) => {
      judge('error', msg)
    },
    success: (msg: ResponseDataType | string) => {
      judge('success', msg)
    }
  }
}
