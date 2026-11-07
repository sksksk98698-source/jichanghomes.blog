// 机场homes (jichanghomes.blog) 42 家机场品牌结构化数据库
// 数据来源：桌面资料库实测记录与品牌清单。无虚构、无编造。

export interface PricingTier {
  name: string;
  period: string;
  price: string;
  traffic: string;
  desc?: string;
}

export interface SampleNode {
  region: string;
  latency: string;
  download: string;
}

export interface AirportBrand {
  id: string;
  name: string;
  rank: number;
  isFeatured?: boolean;
  badge?: string;
  established: string;
  affUrl: string;
  coupon?: string;
  entryPrice: string;
  lowestYearly?: string;
  pricingTiers: PricingTier[];
  lineType: string;
  protocols: string[];
  nodesSummary: string;
  speedtest?: {
    testedAt: string;
    latency: string;
    peakSpeed: string;
    sampleNodes?: SampleNode[];
  };
  unlock: {
    ai: {
      chatgpt: 'yes' | 'partial' | 'no';
      claude: 'yes' | 'partial' | 'no';
      gemini: 'yes' | 'partial' | 'no';
    };
    media: {
      netflix: 'yes' | 'partial' | 'no';
      disney: 'yes' | 'partial' | 'no';
      youtube: 'yes' | 'partial' | 'no';
      tiktok: 'yes' | 'partial' | 'no';
      spotify: 'yes' | 'partial' | 'no';
      hbo?: 'yes' | 'partial' | 'no';
    };
  };
  clients: {
    hasSelfDevApp: boolean;
    thirdParty: string[];
  };
  speedtestImage?: string;
  unlockImages?: string[];
  pros: string[];
  cons: string[];
  targetAudience: string[];
  description: string;
  verificationDate: string;
}

export const AIRPORTS: AirportBrand[] = [
  {
    "id": "guangsu",
    "name": "光速云",
    "rank": 1,
    "isFeatured": true,
    "badge": "👑 全站主推首选",
    "established": "2020",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "entryPrice": "¥8/月 (年付折算)",
    "lowestYearly": "¥99/年 (69GB/月)",
    "pricingTiers": [
      {
        "name": "轻量版 (入门首选)",
        "period": "年付",
        "price": "¥99",
        "traffic": "69GB/月",
        "desc": "原生稳定节点，适合日常网页、邮件、学习轻度使用"
      },
      {
        "name": "极速版 (主力推荐)",
        "period": "月付",
        "price": "¥25",
        "traffic": "168GB/月",
        "desc": "全球 IPLC/IEPL 专线接入，单节点最高 2.5Gbps，全节点 1x 倍率"
      },
      {
        "name": "流光版",
        "period": "月付",
        "price": "¥34",
        "traffic": "268GB/月",
        "desc": "大流量高速专线，4K 流媒体高码率秒开"
      },
      {
        "name": "量子版",
        "period": "月付",
        "price": "¥68",
        "traffic": "568GB/月",
        "desc": "高带宽团队/多设备协同，晚高峰零丢包"
      },
      {
        "name": "致敬斯诺克147永久套餐",
        "period": "一次性",
        "price": "¥147",
        "traffic": "247GB (永不过期)",
        "desc": "一次付费长期备用，不用担心月度续费"
      },
      {
        "name": "定制版",
        "period": "月付",
        "price": "¥680",
        "traffic": "500GB/月",
        "desc": "全 IPLC 专线独立部署，专属原生 IP 与独立独享带宽"
      }
    ],
    "lineType": "IEPL + 全球 IPLC 双专线 + 企业内网",
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Trojan"
    ],
    "nodesSummary": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、欧洲多国等",
    "speedtest": {
      "testedAt": "2026-08-11 14:32:56 CST",
      "latency": "22ms (香港) / 46ms (新加坡)",
      "peakSpeed": "529 Mbps",
      "sampleNodes": [
        {
          "region": "香港 IEPL 01",
          "latency": "22ms",
          "download": "529 Mbps"
        },
        {
          "region": "新加坡 IEPL 02",
          "latency": "46ms",
          "download": "387 Mbps"
        },
        {
          "region": "日本 东京专线",
          "latency": "57ms",
          "download": "135 Mbps"
        },
        {
          "region": "台湾 优化节点",
          "latency": "41ms",
          "download": "114 Mbps"
        },
        {
          "region": "美国 洛杉矶",
          "latency": "143ms",
          "download": "18 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN",
        "FlClash",
        "Karing",
        "Surge"
      ]
    },
    "speedtestImage": "/assets/speedtests/光速云-节点测速实测.png",
    "unlockImages": [
      "/assets/guangsu/photo_2026-08-19_12-13-01.jpg",
      "/assets/guangsu/photo_2026-08-19_12-13-50.jpg",
      "/assets/guangsu/photo_2026-08-19_12-13-58.jpg",
      "/assets/guangsu/photo_2026-08-19_12-18-40.jpg",
      "/assets/guangsu/photo_2026-08-19_12-20-10.jpg"
    ],
    "pros": [
      "2020 年稳定运营至今，信誉良好，无跑路黑历史",
      "全线采用 IEPL/IPLC 企业级专线，不经公网 GFW，晚高峰极其稳定",
      "主流节点 22ms 超低延迟，最高实测下载突破 529 Mbps",
      "提供专属一键自研客户端，同时无限制支持全平台第三方订阅导入",
      "完善解锁 ChatGPT、Claude、TikTok、Netflix 等高阶跨境业务"
    ],
    "cons": [
      "8 元/月属于年付折算价格，月付门槛为 25 元/月",
      "Gemini 与部分小众 AI 服务需手动切换对应原生节点"
    ],
    "targetAudience": [
      "追求晚高峰极致稳定的办公与开发者",
      "4K/8K 影音与流媒体重度用户",
      "跨境电商、海外直播与社媒运营团队",
      "新手小白用户 (自研一键登录)"
    ],
    "description": "光速云作为本站 2026 年度第一主推品牌，在专线稳定性、测速带宽与综合性价比之间达到了极高的平衡。其依托 2020 年以来的长期运营经验，构建了成熟的 IEPL/IPLC 双专线链路与 VLESS 传输架构。实测香港节点延迟仅 22ms，下载速率超过 500Mbps。无论是日常高强度科研办公、跨境电商运营还是多端 4K 影音，都能提供极为流畅且免受封锁打扰的连接体验。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "rank": 2,
    "badge": "TOP 2 专线品质",
    "established": "2023",
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "entryPrice": "¥20/月 (120GB)",
    "lowestYearly": "¥109/年 (70GB/月)",
    "pricingTiers": [
      {
        "name": "基础版",
        "period": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "desc": "BGP 智能调度专线级出口，满足日常个人主力使用"
      },
      {
        "name": "标准版",
        "period": "月付",
        "price": "¥40",
        "traffic": "240GB/月",
        "desc": "大带宽与多设备并发支持"
      },
      {
        "name": "年付轻量版",
        "period": "年付",
        "price": "¥109",
        "traffic": "70GB/月",
        "desc": "适合轻度翻阅与办公备用"
      },
      {
        "name": "不限时标准包",
        "period": "一次性",
        "price": "¥529",
        "traffic": "400GB",
        "desc": "长期备用不限时长"
      }
    ],
    "lineType": "BGP 智能调度 + 专线级出口",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "nodesSummary": "覆盖香港、台湾、新加坡、日本、美国及欧洲核心机房",
    "speedtest": {
      "testedAt": "2026-10-19 (非晚高峰实测)",
      "latency": "26ms (香港) / 43ms (新加坡)",
      "peakSpeed": "509 Mbps",
      "sampleNodes": [
        {
          "region": "香港 BGP",
          "latency": "26ms",
          "download": "509 Mbps"
        },
        {
          "region": "新加坡 专线",
          "latency": "43ms",
          "download": "419 Mbps"
        },
        {
          "region": "日本 节点",
          "latency": "53ms",
          "download": "150 Mbps"
        },
        {
          "region": "台湾 节点",
          "latency": "40ms",
          "download": "107 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN",
        "Stash"
      ]
    },
    "pros": [
      "BGP 智能网络调度，专线级出口低延迟抗丢包",
      "全平台覆盖，官方宣称提供 7×24 小时真人客服",
      "香港实测峰值达到 509 Mbps，延迟仅 26ms",
      "套餐流量档位多样，支持多设备同时并发"
    ],
    "cons": [
      "最低月付门槛 20 元起，略高于廉价小包机场",
      "非限时包价格相对较高，更建议选择月付周期"
    ],
    "targetAudience": [
      "多设备跨平台协同用户",
      "团队跨境办公与远程桌面连接",
      "海外流媒体全解锁爱好者"
    ],
    "description": "暮光加速主打 BGP 智能路由分流与专线级出口，兼顾跨平台兼容性与多设备在线能力。全平台客户端适配成熟，香港与新加坡节点速度均突破 400~500 Mbps。特别适合对网络客服响应速度和多端稳定性有明确要求的团队及进阶个人。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "feimao",
    "name": "飞猫云",
    "rank": 3,
    "badge": "TOP 3 极简新手",
    "established": "2023",
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "entryPrice": "折合 ¥7/月 (年付)",
    "lowestYearly": "¥84/年 (50GB/月)",
    "pricingTiers": [
      {
        "name": "学生版",
        "period": "年付",
        "price": "¥84",
        "traffic": "50GB/月",
        "desc": "新手专属入门轻量方案"
      },
      {
        "name": "星耀版",
        "period": "月付",
        "price": "¥25",
        "traffic": "150GB/月",
        "desc": "主力流媒体与高速多节点"
      }
    ],
    "lineType": "隧道中转 + 专线加速",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太、欧美核心主力区域覆盖",
    "speedtest": {
      "testedAt": "2026-08-11 08:52:30 CST",
      "latency": "38ms (香港)",
      "peakSpeed": "320 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "38ms",
          "download": "320 Mbps"
        },
        {
          "region": "日本 01",
          "latency": "62ms",
          "download": "210 Mbps"
        },
        {
          "region": "新加坡 01",
          "latency": "51ms",
          "download": "280 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/飞猫云-节点测速实测.png",
    "pros": [
      "专属客户端开箱即用，无需任何复杂配置与订阅转换，新手友好度极高",
      "年付折合约 7 元/月，日常使用成本低廉",
      "附带 2026-08-11 实测 PNG 证据，主流节点连接稳定",
      "流媒体与 AI 工具全面解锁"
    ],
    "cons": [
      "低价档位月流量较小 (50GB)，不适合超大文件下载",
      "高级协议自定义能力较少，偏向傻瓜式体验"
    ],
    "targetAudience": [
      "纯新手小白、不愿折腾 Clash 配置的用户",
      "学生党、预算敏感型群体",
      "日常社媒与网页查资料轻度用户"
    ],
    "description": "飞猫云以简单便捷为第一卖点，免去了下载第三方软件、复制订阅链接等门槛，专属客户端一键登录即连。结合年付折合仅 7 元/月的定价，是新手踏入科学上网环境最省心的选择之一。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "rank": 4,
    "badge": "TOP 4 均衡性价比",
    "established": "2023",
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "entryPrice": "折合 ¥7/月 (年付)",
    "lowestYearly": "¥84/年 (50GB/月)",
    "pricingTiers": [
      {
        "name": "微风·轻量年付",
        "period": "年付",
        "price": "¥84",
        "traffic": "50GB/月",
        "desc": "基础日常网页与查阅资料"
      },
      {
        "name": "微风·标准月付",
        "period": "月付",
        "price": "¥22",
        "traffic": "130GB/月",
        "desc": "主力视频与全流媒体支持"
      }
    ],
    "lineType": "多入口 BGP 中转加速",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "港、台、日、新、美常用地区覆盖",
    "speedtest": {
      "testedAt": "2026-07-20 21:41 CST",
      "latency": "35ms (香港)",
      "peakSpeed": "310 Mbps",
      "sampleNodes": [
        {
          "region": "香港 中转",
          "latency": "35ms",
          "download": "310 Mbps"
        },
        {
          "region": "日本 节点",
          "latency": "58ms",
          "download": "240 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/微风-节点测速实测.png",
    "pros": [
      "多线入口 BGP 优化，有效避免单一节点被挤爆",
      "附带 2026 实测 PNG 证据，晚高峰表现平稳",
      "提供优惠码 flat888 享 9 折优惠",
      "各平台客户端兼容性完善"
    ],
    "cons": [
      "特殊节假日可能需要手动切换不同入口",
      "入门套餐流量偏紧凑"
    ],
    "targetAudience": [
      "日常注重网页加载速度的职场用户",
      "YouTube 4K 与流媒体日常观众"
    ],
    "description": "微风网络主打均衡调配与多入口防拥堵设计。其线路在晚高峰具备较好的抗丢包能力，实测延迟香港 35ms 左右，价格亲民且支持丰富的通用客户端，是中端用户的稳妥备选。",
    "verificationDate": "2026-07-20"
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "rank": 5,
    "badge": "TOP 5 极致低价",
    "established": "2023",
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "entryPrice": "¥5.6/月 (60GB)",
    "lowestYearly": "¥58/年 (60GB/月)",
    "pricingTiers": [
      {
        "name": "入门迷你档",
        "period": "月付",
        "price": "¥5.6",
        "traffic": "60GB/月",
        "desc": "全网极低门槛月付体验"
      },
      {
        "name": "进阶大流量",
        "period": "月付",
        "price": "¥18",
        "traffic": "200GB/月",
        "desc": "大流量高性价比主力"
      }
    ],
    "lineType": "高性价比隧道中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodesSummary": "主要亚太地区及美国节点",
    "speedtest": {
      "testedAt": "2026-10-19 原文记录",
      "latency": "45ms (香港)",
      "peakSpeed": "220 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "45ms",
          "download": "220 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "partial",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "partial"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN",
        "FlClash"
      ]
    },
    "pros": [
      "月付仅 5.6 元，试错成本接近于零",
      "不用一次性绑定大额年费，适合学生与轻度用户",
      "支持主流 Clash、小火箭订阅通用格式"
    ],
    "cons": [
      "高峰期带宽承载力相较企业级 IEPL 有所妥协",
      "节点总数不如顶级老牌机场庞大"
    ],
    "targetAudience": [
      "对价格极其敏感的用户",
      "做备用梯子以防主机场突发故障的用户"
    ],
    "description": "大佬云在当前廉价机场市场具备鲜明的低价标签，月付 5.6 元即给 60GB 流量，无论是初次尝鲜还是作为常备应急“第二梯子”，都具备无与伦比的支出优势。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "rank": 6,
    "badge": "TOP 6 老牌稳健",
    "established": "2020",
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "entryPrice": "折合 ¥8/月 (年付)",
    "lowestYearly": "¥96/年 (60GB/月)",
    "pricingTiers": [
      {
        "name": "年付轻量包",
        "period": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "desc": "稳定长周期省心选择"
      },
      {
        "name": "不限时流量包",
        "period": "一次性",
        "price": "¥198",
        "traffic": "300GB",
        "desc": "长期备用永久不过期"
      }
    ],
    "lineType": "IEPL 专线 + 优化隧道",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "港、澳、台、日、新、美、欧",
    "speedtest": {
      "testedAt": "2026-08-11 01:48:13 CST",
      "latency": "32ms (香港)",
      "peakSpeed": "460 Mbps",
      "sampleNodes": [
        {
          "region": "香港 专线",
          "latency": "32ms",
          "download": "460 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/星岛梦-节点测速实测.png",
    "pros": [
      "2020 年运营的老牌机场，运营时间超 5 年，抗风险极强",
      "提供不限时不过期的流量包，非常适合备用",
      "实测单节点峰值超过 460 Mbps，速度表现强劲",
      "支持专属客户端与标准订阅双向通道"
    ],
    "cons": [
      "年付轻量包不支持月付试水",
      "特价促销期间工单回复稍有延迟"
    ],
    "targetAudience": [
      "看重服务商年资背景的稳健型用户",
      "需要不限时永久流量包防失联的用户"
    ],
    "description": "星岛梦与光速云同为 2020 年成立的老字号品牌，主打低故障率与长周期平稳度。其实测 PNG 证据显示其香港专线下载速率高达 460 Mbps，对于追求“买完放着不用操心”的用户极具吸引力。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "ermao",
    "name": "二猫云",
    "rank": 7,
    "badge": "TOP 7 大流量精选",
    "established": "2023",
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "entryPrice": "¥20/月 (130GB)",
    "lowestYearly": "¥190/年",
    "pricingTiers": [
      {
        "name": "月付标准档",
        "period": "月付",
        "price": "¥20",
        "traffic": "130GB/月",
        "desc": "130GB 充沛月度流量"
      },
      {
        "name": "旗舰大包",
        "period": "月付",
        "price": "¥38",
        "traffic": "300GB/月",
        "desc": "多设备高速下载"
      }
    ],
    "lineType": "BGP 跨境隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太核心机房与美西",
    "speedtest": {
      "testedAt": "2026-08-11 10:45:27 CST",
      "latency": "40ms (香港)",
      "peakSpeed": "380 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "40ms",
          "download": "380 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN",
        "FlClash"
      ]
    },
    "speedtestImage": "/assets/speedtests/二猫云-节点测速实测.png",
    "pros": [
      "同价位下提供 130GB 充沛流量，单价每 GB 成本划算",
      "附带 2026-08-11 实测 PNG 证据",
      "节点负载分布均匀，视频播放平滑"
    ],
    "cons": [
      "无自研客户端，需自行下载第三方软件导入",
      "小众冷门国家节点较少"
    ],
    "targetAudience": [
      "视频大户、追剧党",
      "习惯使用通用 Clash / 小火箭的进阶用户"
    ],
    "description": "二猫云的杀手锏在于 20 元月付能拿到 130GB 的高速流量，比同类梯子多出 10%~30% 的冗余。实测测速图佐证其亚太节点稳定性扎实，非常适合流媒体刷剧与日常主力上网。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "rank": 8,
    "badge": "TOP 8 免转订阅",
    "established": "2025",
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "entryPrice": "¥6/月起 (轻量) / ¥19/月 (100GB)",
    "lowestYearly": "¥68/年",
    "pricingTiers": [
      {
        "name": "轻量尝鲜",
        "period": "月付",
        "price": "¥6",
        "traffic": "20GB/月",
        "desc": "极低预算日常应急"
      },
      {
        "name": "主力标准版",
        "period": "月付",
        "price": "¥19",
        "traffic": "100GB/月",
        "desc": "100GB 均衡主力配置"
      }
    ],
    "lineType": "智能自适应中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodesSummary": "主要节点包含港、台、日、美",
    "speedtest": {
      "testedAt": "2026-09-07 实测",
      "latency": "36ms (香港)",
      "peakSpeed": "350 Mbps",
      "sampleNodes": [
        {
          "region": "香港 优化",
          "latency": "36ms",
          "download": "350 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN",
        "Karing"
      ]
    },
    "speedtestImage": "/assets/speedtests/无忧链接.jpg",
    "pros": [
      "订阅格式自适应强，一键识别 Clash/Shadowrocket/v2rayN 无需第三方转换转换器",
      "提供 6 元超低门槛小包，试用极其方便",
      "附带 2 张 2026 实测照片证据"
    ],
    "cons": [
      "2025 年新品牌，运营历史相对年轻",
      "特价小包数量有限"
    ],
    "targetAudience": [
      "厌倦订阅转换报错的用户",
      "需要低成本短期过渡的用户"
    ],
    "description": "无忧链接解决了许多新手在导入不同客户端时“格式不兼容、需Subconverter转换”的痛点，其后端直接分发多协议自适应配置，配合 6 元入门档，实用性非常强。",
    "verificationDate": "2026-09-07"
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "rank": 9,
    "badge": "TOP 9 智能负载",
    "established": "2023",
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "entryPrice": "¥14.9/月 (100GB)",
    "lowestYearly": "¥149/年",
    "pricingTiers": [
      {
        "name": "标准主力",
        "period": "月付",
        "price": "¥14.9",
        "traffic": "100GB/月",
        "desc": "60+节点全网智能负载均衡"
      },
      {
        "name": "畅享大流量",
        "period": "月付",
        "price": "¥28",
        "traffic": "240GB/月",
        "desc": "大带宽与多端同时接入"
      }
    ],
    "lineType": "三网优化专线 + 智能负载均衡",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "60+ 优质节点，三网优化直连",
    "speedtest": {
      "testedAt": "2026-08-11 13:55:08 CST",
      "latency": "29ms (香港)",
      "peakSpeed": "410 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "29ms",
          "download": "410 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN",
        "Surge"
      ]
    },
    "speedtestImage": "/assets/speedtests/唯兔云-节点测速实测.png",
    "pros": [
      "拥有 60+ 广泛分布的节点，三网（电信、联通、移动）独立定制优化入口",
      "实测月付 14.9 元档位性价比极高，附带实测 PNG 证明",
      "智能负载均衡算法，单节点拥堵自动平滑旁路"
    ],
    "cons": [
      "主要面向通用客户端用户，未打包自研 App",
      "高峰期偶发个别小节点波动"
    ],
    "targetAudience": [
      "国内不同宽带运营商用户（尤其移动宽带）",
      "中度网络需求、追求高性价比的用户"
    ],
    "description": "唯兔云的核心优势在于其三网定向优化与 60+ 节点冗余池。实测其香港节点延迟仅 29ms，峰值突破 410 Mbps，14.9 元的月付价位在同质化严重的市场中展现出非常过硬的竞争力。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "firefly",
    "name": "Firefly 萤火虫",
    "rank": 10,
    "badge": "TOP 10 IPLC 专线",
    "established": "2023",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥160/年",
    "pricingTiers": [
      {
        "name": "基础版",
        "period": "月付",
        "price": "¥18",
        "traffic": "100GB/月",
        "desc": "全 IPLC 专线低延迟直连"
      },
      {
        "name": "旗舰版",
        "period": "月付",
        "price": "¥35",
        "traffic": "260GB/月",
        "desc": "大流量高带宽"
      }
    ],
    "lineType": "全 IPLC 内网专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodesSummary": "6档完整套餐，免翻墙多镜像官网",
    "speedtest": {
      "testedAt": "2026-10-19 记录",
      "latency": "24ms (香港专线)",
      "peakSpeed": "450 Mbps",
      "sampleNodes": [
        {
          "region": "香港 IPLC",
          "latency": "24ms",
          "download": "450 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "纯 IPLC 专线，不经过任何公网节点，高抗封锁",
      "官网支持免翻墙多镜像直达，不怕失联",
      "优惠码 firefly 享 8 折优惠"
    ],
    "cons": [
      "年付版部分特殊优惠不叠用"
    ],
    "targetAudience": [
      "追求绝对不跳 ping、游戏或高频会议专线的专业用户"
    ],
    "description": "Firefly（萤火虫）全线采用 IPLC 物理专线架构，不仅延迟低至 24ms，且在重大敏感时期抗封锁表现稳定出色，多镜像官网让用户随时可直达充值和更新订阅。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "yuzhou",
    "name": "宇宙云",
    "rank": 11,
    "badge": "IEPL + VLESS",
    "established": "2023",
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥180/年",
    "pricingTiers": [
      {
        "name": "标准方案",
        "period": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "desc": "IEPL 专线 + VLESS 协议"
      }
    ],
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS"
    ],
    "nodesSummary": "主要节点包含港、台、日、美、欧",
    "speedtest": {
      "testedAt": "2026-08-11 21:04:24 CST",
      "latency": "36ms (香港)",
      "peakSpeed": "390 Mbps",
      "sampleNodes": [
        {
          "region": "香港 VLESS",
          "latency": "36ms",
          "download": "390 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "v2rayN",
        "Shadowrocket"
      ]
    },
    "speedtestImage": "/assets/speedtests/宇宙云-节点测速实测.png",
    "pros": [
      "原生 VLESS 协议与 IEPL 专线，速度与私密性兼备",
      "附带 2026-08-11 实测 PNG 证据",
      "优惠码 YUZHOU553 新用户 8 折"
    ],
    "cons": [
      "节点更偏重亚太常用地区"
    ],
    "targetAudience": [
      "看重现代 VLESS 协议的高科技极客"
    ],
    "description": "宇宙云采用更现代的 VLESS 协议驱动 IEPL 专线，在实测中表现出低 TLS 握手延迟和稳定的抗审查能力，实测图数据显示其在晚高峰仍然具备近 400 Mbps 的下行能力。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "rank": 12,
    "badge": "扎实标准型",
    "established": "2025",
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "entryPrice": "¥20/月 (120GB)",
    "lowestYearly": "¥198/年",
    "pricingTiers": [
      {
        "name": "月付标准版",
        "period": "月付",
        "price": "¥20",
        "traffic": "120GB/月",
        "desc": "主流 120GB 月付平衡配置"
      }
    ],
    "lineType": "专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太主流节点",
    "speedtest": {
      "testedAt": "2026-08-11 22:33:29 CST",
      "latency": "42ms (香港)",
      "peakSpeed": "360 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "42ms",
          "download": "360 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/U1S1-节点测速实测.png",
    "pros": [
      "2026 实测 PNG 证据齐全，无花哨套路",
      "20 元 120GB 价格规整"
    ],
    "cons": [
      "品牌相对年轻，属于稳健常规配置"
    ],
    "targetAudience": [
      "日常需求普通、寻求踏实不折腾的用户"
    ],
    "description": "U1S1 如同其名字一样主打“有一说一”，不编造不虚标。实测图数据显示其晚高峰表现扎实，适合日常科研与影音。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "rank": 13,
    "badge": "不限时大包",
    "established": "2025",
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "entryPrice": "¥19/月 (150GB)",
    "lowestYearly": "¥188/年",
    "pricingTiers": [
      {
        "name": "月付高性价比",
        "period": "月付",
        "price": "¥19",
        "traffic": "150GB/月",
        "desc": "19元给到150GB"
      },
      {
        "name": "不限时永久包",
        "period": "一次性",
        "price": "¥188",
        "traffic": "260GB",
        "desc": "不过期备用"
      }
    ],
    "lineType": "BGP 专线直连",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太与美洲主要机房",
    "speedtest": {
      "testedAt": "2026-08-11 18:45:40 CST",
      "latency": "35ms (香港)",
      "peakSpeed": "420 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "35ms",
          "download": "420 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/灵猫网络-节点测速实测.png",
    "pros": [
      "19元给到150GB高性价比",
      "附带 2026 实测 PNG 证据",
      "支持专属客户端与不限时套餐"
    ],
    "cons": [
      "年付小包不可与优惠码叠加"
    ],
    "targetAudience": [
      "高频大流量下载者与备用防失联用户"
    ],
    "description": "灵猫网络在流量分配上相当大方，19 元给出 150GB，实测峰值达到 420 Mbps，并支持一次性不过期的备用包，兼顾主力与后备。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "jilian",
    "name": "极连云",
    "rank": 14,
    "badge": "AI 全量覆盖",
    "established": "2023",
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "entryPrice": "¥18/月 (100GB)",
    "lowestYearly": "¥168/年",
    "pricingTiers": [
      {
        "name": "标准主力",
        "period": "月付",
        "price": "¥18",
        "traffic": "100GB/月",
        "desc": "AI 工具全面解锁优化"
      }
    ],
    "lineType": "企业级优化中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "全球主流区域",
    "speedtest": {
      "testedAt": "2026-08-11 22:46:50 CST",
      "latency": "38ms (香港)",
      "peakSpeed": "370 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "38ms",
          "download": "370 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/极连云-节点测速实测.png",
    "pros": [
      "官方特别强化 AI 工具（ChatGPT/Claude/Gemini）的节点纯净度",
      "实测晚高峰延迟低丢包少，附带测速 PNG 图证"
    ],
    "cons": [
      "需自行导入订阅，无专属小白客户端"
    ],
    "targetAudience": [
      "重度 AI 创作者、海外大模型研究人员"
    ],
    "description": "极连云将节点 IP 干净度与 AI 平台访问能力作为核心打磨重点，实测在访问各种严格风控的海外大模型时触发拦截率极低，稳定性可圈可点。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "guangnian",
    "name": "光年梯",
    "rank": 15,
    "badge": "高带宽高并发",
    "established": "2023",
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "entryPrice": "¥18/月 (110GB)",
    "lowestYearly": "¥170/年",
    "pricingTiers": [
      {
        "name": "主力月付",
        "period": "月付",
        "price": "¥18",
        "traffic": "110GB/月",
        "desc": "18元110GB均衡方案"
      }
    ],
    "lineType": "专线直连",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "覆盖主流热门区域",
    "speedtest": {
      "testedAt": "2026-08-11 14:38:04 CST",
      "latency": "33ms (香港)",
      "peakSpeed": "430 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "33ms",
          "download": "430 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/光年梯-节点测速实测.png",
    "pros": [
      "实测峰值达 430 Mbps，带宽表现突出",
      "附带 2026 实测 PNG 证据，抗封锁稳定"
    ],
    "cons": [
      "优惠活动频率较低"
    ],
    "targetAudience": [
      "追求高带宽下载与超高清视频播放的用户"
    ],
    "description": "光年梯的线路吞吐量十分出色，实测香港节点下载达到 430 Mbps，在观看 4K 甚至 8K 视频时进度条拖拽几乎无缓冲，表现稳定。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "yifan",
    "name": "一翻云",
    "rank": 16,
    "badge": "大容量中转",
    "established": "2025",
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "entryPrice": "¥20/月 (150GB)",
    "lowestYearly": "¥198/年",
    "pricingTiers": [
      {
        "name": "月付大流量版",
        "period": "月付",
        "price": "¥20",
        "traffic": "150GB/月",
        "desc": "150GB大容量"
      }
    ],
    "lineType": "多重中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太核心主力",
    "speedtest": {
      "testedAt": "2026-08-11 00:21:30 CST",
      "latency": "37ms (香港)",
      "peakSpeed": "410 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "37ms",
          "download": "410 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/一翻云-节点测速实测.png",
    "pros": [
      "20元提供150GB大流量",
      "附带 2026 实测 PNG 证据"
    ],
    "cons": [
      "2025年新品牌，建议月付使用"
    ],
    "targetAudience": [
      "大流量流媒体重度用户"
    ],
    "description": "一翻云在同等价位下给出了 150GB 的丰厚流量，实测 PNG 证实其单节点下载突破 400 Mbps，性价比十足。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "sogo",
    "name": "SOGO 云",
    "rank": 17,
    "badge": "2026 新锐先锋",
    "established": "2026",
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "entryPrice": "¥16/月起",
    "lowestYearly": "¥150/年",
    "pricingTiers": [
      {
        "name": "新锐尝鲜",
        "period": "月付",
        "price": "¥16",
        "traffic": "100GB/月",
        "desc": "专属客户端一键即用"
      }
    ],
    "lineType": "优质专线出口",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "主要热门地区覆盖",
    "speedtest": {
      "testedAt": "2026-08-11 18:57:59 CST",
      "latency": "36ms (香港)",
      "peakSpeed": "370 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "36ms",
          "download": "370 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/SOGO云-节点测速实测.png",
    "pros": [
      "专属客户端体验顺滑，附带 2026 实测 PNG 证明",
      "优惠码 sss777 享额外优惠"
    ],
    "cons": [
      "新上线品牌，推荐月付体验后长用"
    ],
    "targetAudience": [
      "喜欢尝试最新不拥堵节点的新锐用户"
    ],
    "description": "SOGO 云作为 2026 年新锐品牌，最大红利是初期用户密度低、节点充裕不拥挤。实测速度平稳快速，专属客户端操作无门槛。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "kexin",
    "name": "可信云",
    "rank": 18,
    "badge": "严谨透明型",
    "established": "2024",
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "entryPrice": "¥18/月 (100GB)",
    "lowestYearly": "¥178/年",
    "pricingTiers": [
      {
        "name": "月付标准",
        "period": "月付",
        "price": "¥18",
        "traffic": "100GB/月",
        "desc": "诚实透明标注数据"
      }
    ],
    "lineType": "专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太核心机房",
    "speedtest": {
      "testedAt": "2026-08-11 15:32:35 CST",
      "latency": "39ms (香港)",
      "peakSpeed": "350 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "39ms",
          "download": "350 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/可信云-节点测速实测.png",
    "pros": [
      "官方诚实标注自身数据缺口与测试范围，不虚假宣传",
      "附带 2026 实测 PNG 证据"
    ],
    "cons": [
      "宣传相对低调，优惠力度较为常规"
    ],
    "targetAudience": [
      "看重服务商诚实态度与稳妥运营的用户"
    ],
    "description": "可信云在品牌资料中对节点可用范围均做真实标注，绝不夸大。实测显示其线路素质扎实，表现对得起价格。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "sujie",
    "name": "速界",
    "rank": 19,
    "badge": "AI 专项提速",
    "established": "2024",
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "entryPrice": "¥19/月 (100GB)",
    "lowestYearly": "¥189/年",
    "pricingTiers": [
      {
        "name": "极速套餐",
        "period": "月付",
        "price": "¥19",
        "traffic": "100GB/月",
        "desc": "主打 AI 与流媒体"
      }
    ],
    "lineType": "多线 BGP 直通",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "港、台、日、美常用区域",
    "speedtest": {
      "testedAt": "2026-08-11 15:39:36 CST",
      "latency": "37ms (香港)",
      "peakSpeed": "380 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "37ms",
          "download": "380 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/速界-节点测速实测.png",
    "pros": [
      "品牌资料重点强化 AI 工具可用性",
      "附带 2026 实测 PNG 证据"
    ],
    "cons": [
      "非通用协议支持较少"
    ],
    "targetAudience": [
      "常驻 ChatGPT 与海外搜索引擎的文字/代码工作者"
    ],
    "description": "速界将网络优化的重心放在 API 和网页长连接保持上，实测在与海外 AI 工具交互时响应极快，不易断连。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "rank": 20,
    "badge": "大带宽主力",
    "established": "2023",
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "entryPrice": "¥24/月 (150GB)",
    "lowestYearly": "¥220/年",
    "pricingTiers": [
      {
        "name": "月付飞跃版",
        "period": "月付",
        "price": "¥24",
        "traffic": "150GB/月",
        "desc": "150GB充沛大流量"
      }
    ],
    "lineType": "优质专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太核心与欧美",
    "speedtest": {
      "testedAt": "2026-10-19 记录",
      "latency": "31ms (香港)",
      "peakSpeed": "420 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "31ms",
          "download": "420 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "专属客户端一键登录",
      "优惠码 shanyue 享受 8 折优惠",
      "150GB 充足配额"
    ],
    "cons": [
      "年付版本不支持叠加 8 折优惠码"
    ],
    "targetAudience": [
      "需要专属客户端的大流量下载与追剧用户"
    ],
    "description": "闪跃凭借专属客户端和 150GB 的充沛用量赢得了不少忠实用户，折扣后月成本相对合理，各节点速度稳健。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "quanqiu",
    "name": "全球云",
    "rank": 21,
    "badge": "2026 新生代",
    "established": "2026",
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "entryPrice": "¥17/月起",
    "lowestYearly": "¥160/年",
    "pricingTiers": [
      {
        "name": "新锐标准版",
        "period": "月付",
        "price": "¥17",
        "traffic": "100GB/月",
        "desc": "全节点覆盖"
      }
    ],
    "lineType": "多线直通专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "覆盖全球主要节点",
    "speedtest": {
      "testedAt": "2026-08-11 15:50:43 CST",
      "latency": "34ms (香港)",
      "peakSpeed": "440 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "34ms",
          "download": "440 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "speedtestImage": "/assets/speedtests/全球云-节点测速实测.png",
    "pros": [
      "实测下载突破 440 Mbps，附带 PNG 证据",
      "优惠码 qqy7777 享 8 折"
    ],
    "cons": [
      "2026 新品牌，建议短期月付验证"
    ],
    "targetAudience": [
      "追求新开机房高带宽红利的用户"
    ],
    "description": "全球云以 440 Mbps 的实测表现展现了新品牌的机房带宽诚意，配合专属客户端和 8 折券，很适合月付尝鲜。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "kaili",
    "name": "快狸",
    "rank": 22,
    "badge": "VLESS 原生",
    "established": "2024",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "kl888",
    "entryPrice": "¥18/月",
    "lowestYearly": "¥180/年",
    "pricingTiers": [
      {
        "name": "标准方案",
        "period": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "desc": "VLESS 协议加持"
      }
    ],
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS"
    ],
    "nodesSummary": "主要亚太节点",
    "speedtest": {
      "testedAt": "2026-08-11 19:52:22 CST",
      "latency": "35ms (香港)",
      "peakSpeed": "390 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "35ms",
          "download": "390 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "v2rayN",
        "Shadowrocket"
      ]
    },
    "speedtestImage": "/assets/speedtests/快狸-节点测速实测.png",
    "pros": [
      "采用原生 VLESS 协议驱动，抗重放与私密性强",
      "附带 2026-08-11 实测 PNG 证据"
    ],
    "cons": [
      "偏向极客型配置"
    ],
    "targetAudience": [
      "看重 VLESS 先进协议的用户"
    ],
    "description": "快狸在实测中表现出出色的响应速度与带宽稳定性，其 VLESS 节点在 2026 测速包中名列前茅，安全纯粹。",
    "verificationDate": "2026-08-11"
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "rank": 23,
    "badge": "5.6元轻量",
    "established": "2023",
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "entryPrice": "¥5.6/月 (60GB)",
    "lowestYearly": "¥56/年",
    "pricingTiers": [
      {
        "name": "轻量尝鲜",
        "period": "月付",
        "price": "¥5.6",
        "traffic": "60GB/月",
        "desc": "5.6元超低月付"
      }
    ],
    "lineType": "隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "主要亚太节点",
    "speedtest": {
      "testedAt": "2026-10-19",
      "latency": "48ms (香港)",
      "peakSpeed": "210 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "48ms",
          "download": "210 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "partial",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "partial"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "5.6元极低价格体验",
      "优惠码 sd88"
    ],
    "cons": [
      "高峰期可能存在适度限速"
    ],
    "targetAudience": [
      "极低预算备用党"
    ],
    "description": "闪电鼠主打 5.6 元月付极致平民路线，提供 60GB 流量，非常适合作为备用或者低频科学上网需求者。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "rank": 24,
    "badge": "平民小包",
    "established": "2023",
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "entryPrice": "¥5.6/月 (60GB)",
    "lowestYearly": "¥58/年",
    "pricingTiers": [
      {
        "name": "月付小包",
        "period": "月付",
        "price": "¥5.6",
        "traffic": "60GB/月",
        "desc": "超低试水门槛"
      }
    ],
    "lineType": "标准中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "港、台、日",
    "speedtest": {
      "testedAt": "2026-10-19",
      "latency": "52ms (香港)",
      "peakSpeed": "180 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "52ms",
          "download": "180 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "partial",
        "claude": "partial",
        "gemini": "no"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "no"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "低价格入门",
      "优惠码 yjx888"
    ],
    "cons": [
      "非专线直连，高峰期延迟波动较大"
    ],
    "targetAudience": [
      "预算极其有限的入门者"
    ],
    "description": "云界线以 5.6 元低价切入，适合对延迟和高峰期不苛刻的网页浏览与文字工作者。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "rank": 25,
    "badge": "平民小包",
    "established": "2023",
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "entryPrice": "¥5.6/月 (60GB)",
    "lowestYearly": "¥58/年",
    "pricingTiers": [
      {
        "name": "轻量版",
        "period": "月付",
        "price": "¥5.6",
        "traffic": "60GB/月",
        "desc": "超低门槛"
      }
    ],
    "lineType": "标准隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太常用",
    "speedtest": {
      "testedAt": "2026-10-19",
      "latency": "50ms (香港)",
      "peakSpeed": "190 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "50ms",
          "download": "190 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "partial",
        "claude": "partial",
        "gemini": "no"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "no"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "5.6元实惠月付",
      "优惠码 ll88"
    ],
    "cons": [
      "节点技术参数标注相对简略"
    ],
    "targetAudience": [
      "学生与临时过渡用户"
    ],
    "description": "榴莲云提供 5.6 元的入门选择，配置简单，适合低频上网与轻度文字查阅。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "rank": 26,
    "badge": "14元档性价比",
    "established": "2023",
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "entryPrice": "¥14/月 (120GB)",
    "lowestYearly": "¥138/年",
    "pricingTiers": [
      {
        "name": "月付标准",
        "period": "月付",
        "price": "¥14",
        "traffic": "120GB/月",
        "desc": "14元给120GB"
      }
    ],
    "lineType": "优化中转专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "港、台、日、新、美",
    "speedtest": {
      "testedAt": "2026-10-19",
      "latency": "38ms (香港)",
      "peakSpeed": "280 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "38ms",
          "download": "280 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "partial",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "14元120GB价格适中",
      "优惠码 xs0077"
    ],
    "cons": [
      "无自研客户端"
    ],
    "targetAudience": [
      "寻找十元出头性价比平衡的用户"
    ],
    "description": "神行加速在 14 元月付档位提供了 120GB 流量，在低价与品质之间找到了不错的落脚点。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "rank": 27,
    "badge": "平民小包",
    "established": "2023",
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "entryPrice": "¥5.6/月 (60GB)",
    "lowestYearly": "¥58/年",
    "pricingTiers": [
      {
        "name": "入门包",
        "period": "月付",
        "price": "¥5.6",
        "traffic": "60GB/月",
        "desc": "平民低价"
      }
    ],
    "lineType": "中转直连",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "主要亚太节点",
    "speedtest": {
      "testedAt": "2026-10-19",
      "latency": "55ms (香港)",
      "peakSpeed": "170 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "55ms",
          "download": "170 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "partial",
        "claude": "no",
        "gemini": "no"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "no"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "低价备用",
      "优惠码 HQ66"
    ],
    "cons": [
      "适合轻度备用"
    ],
    "targetAudience": [
      "预算敏感型备用梯"
    ],
    "description": "环球梯提供 5.6 元月付方案，适合偶尔应急或备用查资料。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "rank": 28,
    "badge": "专属专线客户端",
    "established": "2024",
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "entryPrice": "¥24/月 (100GB)",
    "lowestYearly": "¥220/年",
    "pricingTiers": [
      {
        "name": "旗舰专属版",
        "period": "月付",
        "price": "¥24",
        "traffic": "100GB/月",
        "desc": "60+节点深度支持"
      }
    ],
    "lineType": "企业定制专线",
    "protocols": [
      "Shadowsocks",
      "专属协议"
    ],
    "nodesSummary": "60+ 节点详细清单，覆盖全球主要区域",
    "speedtest": {
      "testedAt": "2026-10-19",
      "latency": "32ms (香港)",
      "peakSpeed": "360 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "32ms",
          "download": "360 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": []
    },
    "pros": [
      "60+ 节点详细清单，官方承诺1小时内快速修复故障",
      "专属一键登录软件"
    ],
    "cons": [
      "品牌资料明确标注不提供第三方订阅导入，只能使用专属客户端"
    ],
    "targetAudience": [
      "只愿意用官方一键登录客户端、重视客服修复速度的用户"
    ],
    "description": "隐形人采用强绑定的自研客户端模式，不开放第三方通用订阅，以此保障节点私密性与抗干扰能力。官方承诺一小时内响应节点维护，适合习惯专有软件的用户。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "rank": 29,
    "badge": "全平台客户端",
    "established": "2023",
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "entryPrice": "¥20/月起",
    "lowestYearly": "¥190/年",
    "pricingTiers": [
      {
        "name": "标准方案",
        "period": "月付",
        "price": "¥20",
        "traffic": "100GB/月",
        "desc": "自研+通用双轨支持"
      }
    ],
    "lineType": "高速中转专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodesSummary": "亚太与欧美主要机房",
    "speedtest": {
      "testedAt": "2026-10-19",
      "latency": "36ms (香港)",
      "peakSpeed": "340 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "36ms",
          "download": "340 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "自研全平台客户端 + 同时支持通用订阅",
      "一键登录便捷操作"
    ],
    "cons": [
      "价格位于常规主流水平"
    ],
    "targetAudience": [
      "兼顾自研客户端便利与第三方订阅灵活性的用户"
    ],
    "description": "梯子云同时支持自研全平台一键客户端和第三方通用订阅导入，各节点流媒体与 AI 解锁能力优秀，兼顾灵活性与易用性。",
    "verificationDate": "2026-10-19"
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud 恶魔之门",
    "rank": 30,
    "badge": "高端老牌",
    "established": "2021",
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "待核实",
    "entryPrice": "¥49/月起 (旧数据)",
    "lowestYearly": "¥480/年起",
    "pricingTiers": [
      {
        "name": "基础款",
        "period": "季付",
        "price": "¥147",
        "traffic": "120GB/月",
        "desc": "高品质专线直连"
      }
    ],
    "lineType": "BGP优质专线 + 多线容灾",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodesSummary": "涵盖港、台、新、日、美、欧等15+地区",
    "speedtest": {
      "testedAt": "2026-05-02 历史实测",
      "latency": "28ms (香港)",
      "peakSpeed": "480 Mbps",
      "sampleNodes": [
        {
          "region": "香港 专线",
          "latency": "28ms",
          "download": "480 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": true,
      "thirdParty": [
        "Clash Verge Rev",
        "Surge",
        "Shadowrocket"
      ]
    },
    "pros": [
      "知名高端老牌，网络容灾体系极为完善",
      "多地区原生 IP 支持"
    ],
    "cons": [
      "价格门槛相对较高，少有低价小包"
    ],
    "targetAudience": [
      "预算充足、追求极致服务 SLA 的高端商务及企业用户"
    ],
    "description": "WgetCloud 在业内拥有极高的高端声誉，其多线容灾架构与自建管理后台非常精致，虽价格较高，但极佳的稳定性让其成为专业机构的信赖之选。",
    "verificationDate": "2026-05-02"
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "rank": 31,
    "badge": "多地区覆盖",
    "established": "2022",
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "待核实",
    "entryPrice": "¥22/月 (季付折算)",
    "lowestYearly": "¥240/年",
    "pricingTiers": [
      {
        "name": "小包季付",
        "period": "季付",
        "price": "¥66",
        "traffic": "100GB/月",
        "desc": "季付 66 元，门槛相对较低"
      }
    ],
    "lineType": "Shadowsocks 跨境专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "覆盖 108 个节点、涉及全球 79 个地区（节点地域极其丰富）",
    "speedtest": {
      "testedAt": "2026-07-17 实测",
      "latency": "160ms (香港统计)",
      "peakSpeed": "115 Mbps",
      "sampleNodes": [
        {
          "region": "香港",
          "latency": "160ms",
          "download": "115 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "partial",
        "claude": "partial",
        "gemini": "partial"
      },
      "media": {
        "netflix": "partial",
        "disney": "partial",
        "youtube": "yes",
        "tiktok": "partial",
        "spotify": "no",
        "hbo": "partial"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "全球冷门地域节点名目极其丰富（涵盖东南亚、南亚多国）",
      "季付 66 元门槛不高"
    ],
    "cons": [
      "部分偏远地区节点速度差异大，流媒体解锁视节点而定"
    ],
    "targetAudience": [
      "需要极多冷门国家 IP、做多国业务运营的用户"
    ],
    "description": "白月光的最大特征在于节点覆盖区域异常广阔，包含大量东南亚及冷门地区。季付 66 元给 100GB/月，是多区域 IP 需求者的实用工具。",
    "verificationDate": "2026-07-17"
  },
  {
    "id": "flyingbird",
    "name": "FlyingBird 飞鸟",
    "rank": 32,
    "badge": "全 IPLC 专线",
    "established": "2022",
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "theo / year85",
    "entryPrice": "¥15/月 (100G)",
    "lowestYearly": "¥144/年",
    "pricingTiers": [
      {
        "name": "青铜套餐",
        "period": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "desc": "全专线 IPLC 无倍率"
      },
      {
        "name": "白银套餐",
        "period": "月付",
        "price": "¥30",
        "traffic": "200GB/月",
        "desc": "双倍流量主力"
      }
    ],
    "lineType": "全专线 IPLC",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "多个老牌机场融合衍生，全专线 IPLC 无倍率不限速",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "26ms (香港)",
      "peakSpeed": "450 Mbps",
      "sampleNodes": [
        {
          "region": "香港 IPLC",
          "latency": "26ms",
          "download": "450 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "全专线 IPLC、无倍率、不限速",
      "月付 15 元起门槛亲民",
      "优惠码 theo 享 9 折"
    ],
    "cons": [
      "需自行导入第三方客户端"
    ],
    "targetAudience": [
      "追求 IPLC 专线但预算在 15~30 元之间的用户"
    ],
    "description": "FlyingBird 飞鸟继承了老牌 IPLC 的纯专线基因，全节点均为 1x 倍率，无虚标限速，性价比在专线机场中颇具杀伤力。",
    "verificationDate": "2026-08-09"
  },
  {
    "id": "cyberguard",
    "name": "CyberGuard",
    "rank": 33,
    "badge": "大容量不限时",
    "established": "2023",
    "affUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "coupon": "待核实",
    "entryPrice": "¥32/月 (350GB)",
    "lowestYearly": "半年付 ¥95 (150GB/月)",
    "pricingTiers": [
      {
        "name": "标准套餐",
        "period": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "desc": "350GB大容量"
      },
      {
        "name": "220G不限时包",
        "period": "一次性",
        "price": "¥79",
        "traffic": "220GB",
        "desc": "不过期备用"
      }
    ],
    "lineType": "Trojan / VLESS 专线",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "nodesSummary": "日、美、澳、德、法、阿联酋、英、印、台、港、新等12地区",
    "speedtest": {
      "testedAt": "2025-06-21",
      "latency": "123ms (日本)",
      "peakSpeed": "488 Mbps",
      "sampleNodes": [
        {
          "region": "日本 节点",
          "latency": "123ms",
          "download": "488 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "月付 32 元给到 350GB 庞大流量",
      "支持不限时流量包（79元220GB）",
      "AI 与主流流媒体解锁率高"
    ],
    "cons": [
      "最低月付门槛 32 元"
    ],
    "targetAudience": [
      "大流量下载党、需要长线备用不限时包的用户"
    ],
    "description": "CyberGuard 在大容量与现代化协议（Trojan/VLESS）上表现亮眼，月付 32 元给 350GB，实测峰值逼近 500 Mbps，还有不限时流量包可选。",
    "verificationDate": "2026-08-23"
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "rank": 34,
    "badge": "长周期高折扣",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "年付享8折/三年6折",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥170/年",
    "pricingTiers": [
      {
        "name": "月付主力款",
        "period": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "desc": "长周期支持最高 48 折"
      }
    ],
    "lineType": "多线 BGP 中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太热门机房",
    "speedtest": {
      "testedAt": "历史测试记录",
      "latency": "38ms (香港)",
      "peakSpeed": "320 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "38ms",
          "download": "320 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "多周期折扣丰富（年付8折/2年7折/3年6折）",
      "支持支付宝、微信与 USDT 全支付通道"
    ],
    "cons": [
      "需自行导入第三方客户端"
    ],
    "targetAudience": [
      "打算长期按年续费的稳健型用户"
    ],
    "description": "龙猫云主打灵活的周期折扣政策，付款方式齐备，线路稳定，适合长期按年续费以获取最大优惠。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "fatcat",
    "name": "FATCAT 肥猫",
    "rank": 35,
    "badge": "多周期弹性",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "多周期递增折扣",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥172/年",
    "pricingTiers": [
      {
        "name": "标准方案",
        "period": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "desc": "全节点覆盖"
      }
    ],
    "lineType": "专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "主要亚太节点",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "40ms (香港)",
      "peakSpeed": "310 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "40ms",
          "download": "310 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "全通道支付便捷，周期折扣阶梯清晰"
    ],
    "cons": [
      "差异化特色相对中规中矩"
    ],
    "targetAudience": [
      "日常办公及浏览常规用户"
    ],
    "description": "FATCAT（肥猫）线路调优稳定，支持各类主流第三方代理工具，各档位计费明确。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "rank": 36,
    "badge": "优惠码 TNT85",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "TNT85",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥168/年",
    "pricingTiers": [
      {
        "name": "月付标准",
        "period": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "desc": "使用优惠码 TNT85 享 85 折"
      }
    ],
    "lineType": "多线优化专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太核心机房",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "36ms (香港)",
      "peakSpeed": "350 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "36ms",
          "download": "350 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "优惠码 TNT85 享 85 折优惠",
      "三网优化入口稳定性好"
    ],
    "cons": [
      "需自行导入订阅"
    ],
    "targetAudience": [
      "寻求成熟折扣中转梯子的用户"
    ],
    "description": "TNTCloud 以优惠码折扣和稳定的三网优化中转见长，在常规节点中表现平稳。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "qingyunti",
    "name": "青云梯",
    "rank": 37,
    "badge": "多档大包",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "qyt85 / qyt80",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥168/年",
    "pricingTiers": [
      {
        "name": "主力版",
        "period": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "desc": "优惠券 qyt80 享 8 折"
      }
    ],
    "lineType": "企业级专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "港、台、日、新、美",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "35ms (香港)",
      "peakSpeed": "360 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "35ms",
          "download": "360 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "双重优惠码可选（85折/8折）",
      "支持支付宝/微信/USDT 全通道"
    ],
    "cons": [
      "年付小包不适用大额优惠券"
    ],
    "targetAudience": [
      "偏好优惠券抵扣的主力梯子用户"
    ],
    "description": "青云梯在折扣优惠和支付便利度上覆盖周全，线路抗波动能力经受住多次网络周期检验。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "shanshuiyun",
    "name": "山水云",
    "rank": 38,
    "badge": "12国多节点",
    "established": "2023",
    "affUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "coupon": "待核实",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥180/年",
    "pricingTiers": [
      {
        "name": "标准版",
        "period": "月付",
        "price": "¥18",
        "traffic": "120GB/月",
        "desc": "12地区节点支持"
      }
    ],
    "lineType": "多地区跨境中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "港、日、新、美、台、越、泰、英、印尼、法、德、加等12国地区",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "39ms (香港)",
      "peakSpeed": "320 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "39ms",
          "download": "320 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "12 国广泛机房覆盖，兼顾欧洲与东南亚地区",
      "常用流媒体解锁良好"
    ],
    "cons": [
      "小众地区速度表现参差不齐"
    ],
    "targetAudience": [
      "需兼顾东南亚与欧洲业务的运营人员"
    ],
    "description": "山水云覆盖了除亚太之外的印尼、泰国、越南、欧洲等 12 个重点国家，是多地域出海业务的得力助手。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "rank": 39,
    "badge": "中规中矩型",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "尚未核实",
    "entryPrice": "¥19/月起",
    "lowestYearly": "¥188/年",
    "pricingTiers": [
      {
        "name": "标准方案",
        "period": "月付",
        "price": "¥19",
        "traffic": "120GB/月",
        "desc": "支持支付宝与USDT"
      }
    ],
    "lineType": "优化中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "主要亚太节点",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "42ms (香港)",
      "peakSpeed": "290 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "42ms",
          "download": "290 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "partial",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "partial"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "支持 USDT 虚拟币匿名结算"
    ],
    "cons": [
      "微信支付需联系客服人工确认"
    ],
    "targetAudience": [
      "看重加密货币结算的隐私用户"
    ],
    "description": "灵动云支持加密货币无缝结算，适合看重支付隐私、进行常规海外上网的群体。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "langwang",
    "name": "浪网",
    "rank": 40,
    "badge": "IEPL 专线",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "尚未核实",
    "entryPrice": "¥22/月起",
    "lowestYearly": "¥210/年",
    "pricingTiers": [
      {
        "name": "专线款",
        "period": "月付",
        "price": "¥22",
        "traffic": "120GB/月",
        "desc": "IEPL 专线网络"
      }
    ],
    "lineType": "IEPL 内网专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "nodesSummary": "主要专线落地机房",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "30ms (香港)",
      "peakSpeed": "380 Mbps",
      "sampleNodes": [
        {
          "region": "香港 IEPL",
          "latency": "30ms",
          "download": "380 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "纯 IEPL 专线架构，抗公网波动能力优秀"
    ],
    "cons": [
      "宣传相对低调"
    ],
    "targetAudience": [
      "对线路质量有一定追求的用户"
    ],
    "description": "浪网以 IEPL 专线技术为底座，不经过公网 GFW，整体延迟和丢包控制在良好区间。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "rank": 41,
    "badge": "优惠码 TH888",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "TH888",
    "entryPrice": "¥19/月起",
    "lowestYearly": "¥180/年",
    "pricingTiers": [
      {
        "name": "标准方案",
        "period": "月付",
        "price": "¥19",
        "traffic": "120GB/月",
        "desc": "使用优惠码 TH888 享 8 折"
      }
    ],
    "lineType": "高速边缘专线",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太及美西边缘节点",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "35ms (香港)",
      "peakSpeed": "340 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "35ms",
          "download": "340 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "yes",
        "gemini": "yes"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "优惠码 TH888 享 8 折",
      "支持支付宝/微信/USDT"
    ],
    "cons": [
      "偏向小众"
    ],
    "targetAudience": [
      "日常均衡上网用户"
    ],
    "description": "EdgeNova 强调边缘网络优化与灵活的支付组合，配合 8 折优惠码，性价比适中。",
    "verificationDate": "2026-08-20"
  },
  {
    "id": "sslar",
    "name": "sslar",
    "rank": 42,
    "badge": "新用户 8 折",
    "established": "2023",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "ko3eTt0w",
    "entryPrice": "¥18/月起",
    "lowestYearly": "¥170/年",
    "pricingTiers": [
      {
        "name": "入门标准版",
        "period": "月付",
        "price": "¥18",
        "traffic": "100GB/月",
        "desc": "优惠码 ko3eTt0w 享 8 折"
      }
    ],
    "lineType": "多线直通中转",
    "protocols": [
      "Shadowsocks"
    ],
    "nodesSummary": "亚太常规机房",
    "speedtest": {
      "testedAt": "历史记录",
      "latency": "40ms (香港)",
      "peakSpeed": "300 Mbps",
      "sampleNodes": [
        {
          "region": "香港 01",
          "latency": "40ms",
          "download": "300 Mbps"
        }
      ]
    },
    "unlock": {
      "ai": {
        "chatgpt": "yes",
        "claude": "partial",
        "gemini": "partial"
      },
      "media": {
        "netflix": "yes",
        "disney": "yes",
        "youtube": "yes",
        "tiktok": "yes",
        "spotify": "yes",
        "hbo": "yes"
      }
    },
    "clients": {
      "hasSelfDevApp": false,
      "thirdParty": [
        "Clash Verge Rev",
        "Shadowrocket",
        "v2rayN"
      ]
    },
    "pros": [
      "优惠码 ko3eTt0w 享 8 折优惠",
      "国内主流微信支付宝均支持"
    ],
    "cons": [
      "现有资料未列 USDT 支付"
    ],
    "targetAudience": [
      "习惯微信支付宝直接付款的入门用户"
    ],
    "description": "sslar 支持国内便捷移动支付，节点网络成熟，结合 8 折券是常规入门梯子的平价选择之一。",
    "verificationDate": "2026-08-20"
  }
];

export const TOP10_AIRPORTS = AIRPORTS.slice(0, 10);
export const FEATURED_AIRPORT = AIRPORTS[0];
