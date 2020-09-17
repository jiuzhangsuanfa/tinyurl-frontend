# Tinyurl

## Usage

`clone -> install -> run dev`

1. `git clone git@github.com:DevinDon/tinyurl.git`
2. `npm i`
3. `npm run dev`
4. Open `http://localhost:4200`

## Project

- Module
  - routing
    - lazy load
  - component
    - loading
  - page
    - `<App>`
      - Header
        - Company Logo
        - App Logo
      - Router Outlet
      - Footer
        - Copyright
        - Policy
    - `<Home>`
      - App Logo
      - Input
        - URL 格式验证
      - Submit
        - shorten 状态，初始状态
        - restore 状态
        - invalid 状态，禁止点击
        - loading 状态，禁止点击
      - History Link
      - Analysis Link
    - `<Policy>`
    - `<History>`
      - List
        - Icon
        - Title
        - Link
        - Time
    - `<Analysis>`
      - Page View
      - Top View
- Service
  - API
    - `POST /`
    - `GET /view?day=7&order=DESC`
    - `GET /view/host?day=7&order=DESC`
  - Cache
    - Cache Map
    - Load from cache
    - Save to cache map
    - Save to localStorage
- Interceptor
  - cache
- Style
  - responsive
    - desktop
    - mobile
  - link animation
  - @angular/material

## API Interface

> 注：遵循 RESTful API 设计，统一使用复数名词。

### 1. Transform URL

#### 1.0 All in one

> 长网址生成短网址，短网址还原长网址。

| 键       | 值                |
| -------- | ----------------- |
| 路径     | `POST /url`       |
| 路径参数 | 无                |
| 传入数据 | `{ url: string }` |
| 返回数据 | `{ url: string }` |

#### 1.1 Shorten

> 生成短网址。

| 键       | 值                |
| -------- | ----------------- |
| 路径     | `POST /url/short` |
| 路径参数 | 无                |
| 传入数据 | `{ url: string }` |
| 返回数据 | `{ url: string }` |

#### 1.2 Restore

> 还原长网址。

| 键       | 值                 |
| -------- | ------------------ |
| 路径     | `POST /url/origin` |
| 路径参数 | 无                 |
| 传入数据 | `{ url: string }`  |
| 返回数据 | `{ url: string }`  |

### 2. Page View

#### 2.1 Get page view of last 7 days

> 获取最近 7 天的访问数量。

| 键       | 值                                       |
| -------- | ---------------------------------------- |
| 路径     | `GET /views`                             |
| 路径参数 | `{ day: number, order: 'desc' | 'asc' }` |
| 传入数据 | 无                                       |
| 返回数据 | `{ count: number }[]`                    |

#### 2.2 Get the 10 most visited hosts of last 7 days

> 获取最近 7 天访问最多的域名（不含子域名）。

| 键       | 值                                                      |
| -------- | ------------------------------------------------------- |
| 路径     | `GET /views/hosts`                                      |
| 路径参数 | `{ day: number, count: number, order: 'DESC' | 'ASC' }` |
| 传入数据 | 无                                                      |
| 返回数据 | `{ host: string, count: number }[]`                     |
