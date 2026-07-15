export const projects = [
  {
    slug: "continuum-robot-ftl", number: "01", title: "具备跟随领导者特性的连续体机器人", shortTitle: "FTL 连续体机器人",
    category: "科研项目", period: "2025.08 - 2026.07", status: "项目学生负责人",
    summary: "围绕可变刚度连续体机器人的嵌套关节结构、运动学建模、约束采样路径规划与实验控制展开研究。",
    role: "结构优化、运动学建模、轨迹规划、电机控制与实验验证",
    stack: ["Python", "MATLAB", "运动学", "路径规划", "机械设计"], color: "blue", featured: true,
    facts: ["设计双关节嵌套结构，缩短交替进给中的补偿距离", "基于常曲率模型推导正逆运动学与定弦长约束", "搭建约束采样、碰撞检测和安全裕度评价流程", "学生第一发明人专利已进入实质审查"],
    story: "从结构、算法到实验控制的一次完整科研实践。这里将继续补充机构照片、仿真结果、轨迹对比和失败案例。",
  },
  {
    slug: "tianwen-humanoid", number: "02", title: "天问人形机器人运动控制", shortTitle: "天问人形机器人",
    category: "机器人系统", period: "2025.07 - 至今", status: "核心开发者",
    summary: "基于 IsaacLab、MuJoCo 与 ROS2，参与人形机器人的强化学习训练、上肢姿态跟随和运动任务验证。",
    role: "算法复现、训练调参、动捕映射、动作控制与现场验证",
    stack: ["IsaacLab", "MuJoCo", "ROS2", "Python", "强化学习"], color: "violet", featured: true,
    facts: ["完成稳定站立与跑步等任务的训练流程搭建", "使用 GMR 与动捕数据构建上肢姿态跟随控制", "实现挥手、写毛笔字等精细动作", "参与世界人形机器人运动会 100 米和 400 米接力"],
    story: "这是一段把仿真策略带到真实机器人上的经历。后续将补充训练曲线、现场照片和部署复盘。",
  },
  {
    slug: "xiaomi-cyberdog-voice-agent", number: "03", title: "小米机器狗语音智能体", shortTitle: "机器狗语音智能体",
    category: "AI × 机器人", period: "时间待补", status: "独立开发 / 角色待确认",
    summary: "将语音模块、大语言模型、TTS 与机器狗动作序列连接起来，实现对话和语音控制动作。",
    role: "系统集成、指令解析、语音合成与动作映射",
    stack: ["LLM", "TTS", "语音交互", "动作序列", "系统集成"], color: "orange", featured: true,
    facts: ["接收自然语言指令并生成文字回复", "通过 TTS 将回复转换为语音输出", "把动作意图映射为机器狗内部动作序列", "实现语音对话与动作控制的统一交互链路"],
    story: "后续需要补充所用语音模块、模型名称、系统架构图、动作集合、延迟表现和演示视频。",
  },
  {
    slug: "esp32-dolphin-arm", number: "04", title: "ESP32 海豚机械臂", shortTitle: "海豚机械臂",
    category: "嵌入式与创客", period: "时间待补", status: "开源项目二次开发",
    summary: "围绕开源机械臂进行结构适配与 3D 模型优化，实现手机 App 经蓝牙控制机械臂运动。",
    role: "3D 建模优化、硬件装配、ESP32 与蓝牙控制调试",
    stack: ["ESP32", "Bluetooth", "SolidWorks", "3D 打印", "舵机"], color: "cyan", featured: true,
    facts: ["优化原有机械结构与可打印模型", "完成舵机、控制板和打印件的装配适配", "通过手机 App 和蓝牙下发控制指令", "验证多关节机械臂的基础运动"],
    story: "后续需要补充原开源项目链接、遵循的许可证、修改前后模型对比、BOM 和控制界面截图。",
  },
  {
    slug: "bionic-butterfly", number: "05", title: "遥控仿生扑翼蝴蝶", shortTitle: "仿生扑翼蝴蝶",
    category: "仿生机器人", period: "时间待补", status: "结构与控制开发",
    summary: "使用航模遥控器控制双翼规律扇动，并针对舵机与开发板重新优化蝴蝶身体结构。",
    role: "机身 3D 建模、器件适配、扑翼机构装配与遥控调试",
    stack: ["仿生设计", "扑翼机构", "RC 遥控", "3D 打印", "舵机"], color: "pink", featured: false,
    facts: ["根据实际舵机和开发板重构机身模型", "实现翅膀周期性扇动控制", "使用航模遥控器进行动作控制", "探索扑翼机式飞行模式"],
    story: "后续需要补充翼展、重量、材料、控制频率、试飞结果以及结构迭代过程。",
  },
  {
    slug: "campus-cats-map", number: "06", title: "校园流浪猫关系地图", shortTitle: "校园猫地图",
    category: "黑客松团队项目", period: "时间待补", status: "武汉大学抖音黑客松",
    summary: "与队友完成校园流浪猫微信小程序，用地图索引聚集区域，并记录猫咪外形、名字、习性和关系网。",
    role: "个人分工待补",
    stack: ["微信小程序", "地图", "信息设计", "团队协作", "Hackathon"], color: "green", featured: false,
    facts: ["在地图上标记校园流浪猫聚集范围", "建立猫咪外形、名字与习性档案", "探索猫咪之间的关系网络表达", "在黑客松时限内完成团队协作与原型交付"],
    story: "后续需要补充活动日期、队友与个人分工、产品截图、数据来源、现场照片和最终结果。",
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export function getProject(slug) { return projects.find((project) => project.slug === slug); }
