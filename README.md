# 余泓震的工程日志

一个以机器人研究、嵌入式开发和工程复盘为核心的个人网站，访问地址为 [hzy345.github.io](https://hzy345.github.io/)。

## 内容结构

- 首页：个人定位、精选项目、最近文章与当前进展
- 文章：项目记录、技术笔记、学习思考和随笔
- 项目：9 个机器人、嵌入式、微信小程序与数学建模项目档案
- 关于：教育背景、经历节点、工具栈、成果与联系方式

## 技术栈

- Astro 5
- MDX Content Collections
- Tailwind CSS 4
- GitHub Pages / GitHub Actions

## 本地开发

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
```

## 添加内容

- 个人信息：`site/config/profile.js`
- 项目数据：`site/data/projects-content.js`
- 博客文章：`site/content/post/*.mdx`
- 全局样式：`site/styles/global.css`

## 隐私说明

公开网站不包含手机号、出生年月、政治面貌等简历敏感信息。上传照片、简历或联系方式前应再次确认公开范围。

## 模板说明

本项目最初基于 [Rico Portfolio](https://github.com/ricocc/ricoui-portfolio) 构建，现已重写信息架构、页面、样式和内容，并保留此来源说明。
