# Tinyurl

# Usage

`clone -> install -> run dev`

1. `git clone git@github.com:DevinDon/tinyurl.git`
2. `npm i`
3. `npm run dev`
4. Open `http://localhost:4200`

# Project

- Module
  - app
    - header
      - company logo
      - app logo
    - router
    - footer
      - copyright
      - policy
  - routing
    - lazy load
  - component
    - loading
  - page
    - home
      - app logo
      - input
        - URL 格式验证
      - submit
        - shorten 状态，初始状态
        - restore 状态
        - invalid 状态，禁止点击
        - loading 状态，禁止点击
      - history link
    - policy
    - history
    - analysis
- Service
  - api
    - `POST /`
  - cache
    - cache local map
- Interceptor
  - cache
- Style
  - responsive
    - desktop
    - mobile
  - link animation
  - @angular/material

# Functional

- [x] 桌面端 + 移动端自适应
- [x] 标题栏 Header
  - [x] Wave 波浪背景
  - [x] Logo + Title
    - [x] 可点击跳转到项目课
  - [ ] Menu(Optional, canceled)
  - [ ] User Head(Optional, canceled)
- [ ] 主体 Body
  - [ ] 主页 Home
    - [x] Logo
    - [x] 地址输入框 + 展示框
      - [x] 长链生成短链
      - [x] 短链还原长链
      - [ ] 从本地缓存加载
      - [x] 加载时禁止点击
      - [x] 链接地址验证
      - [x] Toast 提示
    - [x] 提交
      - [x] 提交成功后自动复制
      - [x] 自动更换按钮文字（Shorten / Restore）
      - [x] 按钮加载状态
      - [x] 加载时禁止提交
      - [x] 无效链接禁止提交
      - [ ] 响应错误处理
  - [ ] 历史记录展示 History
    - [ ] 历史记录缓存
    - [ ] 条目映射
    - [ ] 获取原地址标题
  - [ ] 统计分析页 Analysis
- [x] 页脚版权
  - [x] 版权所有
  - [x] 使用声明与用户隐私协定
- [x] 全局 Global
  - [x] 动态 Link 下划线
  - [x] 动态 Loading 组件
