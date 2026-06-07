# 个人网站

基于 [Rico Portfolio](https://github.com/ricocc/ricoui-portfolio) 模板构建的个人网站。

## 技术栈

- **框架**: [Astro](https://astro.build) 5.15.4
- **样式**: [Tailwind CSS](https://tailwindcss.com) 4.1.14
- **动画**: [AOS](https://michalsnik.github.io/aos/)
- **部署**: GitHub Pages

## 功能特点

- 🚀 静态站点生成，加载速度快
- 🎨 现代极简设计，支持深色/浅色主题
- 📱 完全响应式，适配所有设备
- 🎭 漂亮的滚动动画效果
- 📝 博客系统（支持 MDX）
- 🎯 作品集展示页面
- 🔍 SEO 优化
- ⚡ 性能优化（图片优化、代码分割、懒加载）

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:4321
```

## 构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 自定义

### 修改网站信息

编辑 `src/config/site.js` 文件：

```javascript
export const siteConfig = {
  title: "你的名字",
  author: "你的名字",
  url: "https://hzy345.github.io/",
  mail: "your-email@example.com",
  meta: {
    title: "你的名字 - 个人网站",
    description: "你的个人简介",
    keywords: "你的关键词",
  },
  social: {
    github: "https://github.com/your-username",
    twitter: "https://x.com/your-username",
  },
};
```

### 添加项目

编辑 `src/collections/works.json` 文件：

```json
[
  {
    "name": "项目名称",
    "description": "项目描述",
    "tags": ["标签1", "标签2"],
    "image": "/assets/works/project.jpg",
    "url": "https://your-project-url.com"
  }
]
```

### 修改主题颜色

编辑 `src/styles/global.css` 文件中的 CSS 变量：

```css
@theme {
  --color-primary: #2d6dc3;
  --color-primary-dark: #3b7bd9;
  /* 更多颜色变量 */
}
```

## 部署

网站会自动部署到 GitHub Pages。只需推送到 `main` 或 `master` 分支即可。

访问地址：https://hzy345.github.io/

## 许可证

[Apache 2.0](LICENSE)
