# 稚拙风图标库（Zhizhuo Icons）

233 枚面性+线条双风格自由切换的 SVG 图标，适合 Web / 小程序 / 桌面应用界面设计。

## 分类概览

| 分类 | 数量 | 典型图标 |
|------|------|----------|
| 导航 | ~40 | home, arrow-left, chevron-right, grid, globe |
| 操作 | ~45 | search, add, edit, delete, copy, paste, download |
| 状态与反馈 | ~30 | check-circle, warning, error, info, lock, bookmark |
| 社交与互动 | ~40 | user, heart, star, comment, share, follow, chat |
| 媒体与播放 | ~2 | hearing, audio-description |
| 商业与电商 | ~1 | barcode |
| 设备与系统 | ~8 | screen-reader, braille, closed-captioning, sign-language |
| 无障碍 | ~18 | accessibility, wheelchair, elevator, cane, ramp |
| 天气 | ~50 | clear-day, cloudy, rain, snowflake, thunder, wind |

## 安装

```bash
npm install zhizhuo-icons
```

## 使用

```js
const icons = require('zhizhuo-icons');
document.body.innerHTML = icons.home; // 返回 SVG 字符串
```

或按需引入：

```js
const { home, search } = require('zhizhuo-icons');
```

## 完整图标列表

```
accessibility, accessibility-zoom-in, accessibility-zoom-out,
activity, add, align-center, align-justify, align-left, align-right,
anchor, arrow-down, arrow-down-circle, arrow-down-circle-2,
arrow-down-left, arrow-down-right, arrow-left, arrow-left-circle,
arrow-right, arrow-right-circle, arrow-up, arrow-up-circle,
arrow-up-left, arrow-up-right, at-sign, audio-description, award,
barcode, blind-cane, block, block-user, block-user-2, block-user-3,
bookmark, braille, cane, chat, check, check-circle, check-square,
chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down,
chevrons-left, chevrons-right, chevrons-up, circle, clear-day, clock,
close, close-circle, closed-captioning, cloudy, cloudy-2, coffee,
comment-circle, comment-square, copy, copy-2, corner-down-left,
corner-down-right, corner-left-down, corner-left-up, corner-right-down,
corner-right-up, corner-up-left, corner-up-right, cut, cut-2, delete,
delete-2, dot, download, download-2, download-3, drag, drizzle, droplet,
droplet-2, droplet-3, edit, edit-2, edit-3, elevator, emoji, empty,
error, escalator-down, escalator-up, exit, fahrenheit, feather,
feather-2, filter, fixed, flag, fog, fold-circle, fold-square, follow,
follow-2, follow-3, frown, full-moon, fullscreen, fullscreen-2, gift,
globe, grid, hail, hamburger, hash, haze, hearing, heart, heart-fill,
help-circle, home, home-1, humidity, info, invisible, italic, key,
layers, layout, life-buoy, lightning, link, link-2, list, loading,
lock, lock-2, log-in, low-vision, mail, manual-wheelchair, meh,
message, minus, mobility-scooter, moon, moon-phase, more-horizontal,
more-vertical, move, mute, night-clear, night-cloudy, night-drizzle,
night-fog, night-fog-1, night-hail, night-moderate-rain, night-rain,
night-snow, night-thunderstorm, no-weather-data, notification,
notification-off, paste, pin, pollen, pressure, profile, qrcode,
radio, rain, rainbow, rainbow-2, ramp, refresh, refresh-2, refresh-3,
rotate, sandstorm, save, scan, screen-reader, search, search-ai, share,
share-2, share-3, showers, sign-language, small-screen, small-screen-2,
snowfall, snowflake, sort, star, star-fill, success, sun, tag,
temperature, temperature-1, text-reader, thumb-down, thumb-up, thunder,
thunder-single, tide, tty, unlock, unlock-2, upload, upload-2,
upload-3, user, user-2, user-minus, user-minus-2, user-plus,
user-plus-2, users, users-2, visibility, visible, volume, walker,
warning, warning-octagon, wheelchair, wheelchair-lift, wind,
wind-direction, wind-speed, zoom-in, zoom-out
```

## 发布到 npm

```bash
cd "/Users/a1234/Desktop/稚拙风图标库"
git init
git add .
git commit -m "feat: initial release - 233 zhizhuo icons"
npm publish
```

## 许可

MIT
