// 登录
declare interface LoginType {
  username: string
  password: string
}

//注册
declare interface RegisterType {
  username: string
  password: string
  nickname: string
  phone: string
  email: string
  icon: string
  gender: number | null //1男 2女
  birthday: string
  city: string
  job: string
  sourceType: number //默认传1，用户来源：0-手动添加，1-自主注册，
  userLevel: number //等级 默认0
  growth: number //成长值 默认0
  confirmPassword?: string //确认密码
  cityValue?: Array //城市选择
}
