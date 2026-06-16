// 稚拙风图标库 - SVG 导出
// 使用方式: import { home, search } from 'zhizhuo-icons'

const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

const icons = {};
files.forEach(file => {
  const name = file.replace('.svg', '');
  icons[name] = fs.readFileSync(path.join(iconsDir, file), 'utf-8');
});

module.exports = icons;
