export const TOPIC_NAMES = {
  free: '免费资源',
  tools: '梯子工具',
  faq: '机场FAQ',
  runaway: '跑路预警',
} as const;

export const CATEGORIES: Record<string, Record<string, string>> = {
  free: {
    'public-nodes': '公共节点抓取与订阅',
    'free-trials': '正规商用机场免费试用',
    'github-sources': 'GitHub 开源项目与订阅源',
    'security-risks': '免费节点安全风险与蜜罐防范',
  },
  tools: {
    'desktop': '桌面客户端 (Win/Mac/Linux)',
    'mobile': '移动端 (iOS/Android)',
    'router': '软路由与全屋网关 (OpenWrt/ShellCrash)',
    'troubleshooting': '网络与内核常见疑难排障',
  },
  faq: {
    'protocol-tech': '协议与加解密原理 (SS/Trojan/VLESS)',
    'line-physics': '线路与物理拓扑 (IEPL/IPLC/BGP)',
    'streaming-ai': '流媒体与 AI IP 解锁',
    'purchase-safety': '资金安全与套餐选购陷阱',
  },
  runaway: {
    'radar-list': '疑似失联与高危机场观察清单',
    'warning-signals': '跑路前兆与危险信号识别',
    'emergency-kit': '突发失联维权自救与应急备用',
  },
};
