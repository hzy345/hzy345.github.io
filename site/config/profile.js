const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://hzy345.github.io/";

export const profile = {
  title: "余泓震的工程日志",
  shortTitle: "YHZ / LAB NOTES",
  author: "余泓震",
  name_en: "Hongzhen Yu",
  handle: "Hzy345",
  url: SITE_URL,
  mail: "",
  resume: "",
  description: "记录机器人研究、嵌入式开发、工程实践与一路上的思考。",
  keywords: "余泓震, 机器人, 连续体机器人, 人形机器人, 嵌入式, ESP32, 工程日志",
  image: `${SITE_URL}og.png`,
  github: "https://github.com/hzy345",
  // 视觉资产（首页 Hero 人像 + 虚化背景照）
  portrait: "/portrait.webp",
  background: "/background.webp",
  backgroundAlt: "/background-2.webp",
  // 一句话定位 / 身份（首页 Hero）
  lead: "在机械、代码与智能之间，做会动的东西。",
  affiliation: "武汉大学 · 机器人工程",
  roles: [
    { title: "机器人工程", org: "武汉大学" },
    { title: "FTL 特性", org: "连续体机器人" },
    { title: "Locomotion", org: "人形机器人" },
  ],
  // 联系方式入口
  socials: [
    { label: "GitHub", href: "https://github.com/hzy345", icon: "github" },
    { label: "RSS", href: "/rss.xml", icon: "rss" },
  ],
};
