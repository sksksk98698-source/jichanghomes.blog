// 机场homes (jichanghomes.blog) 2026 全平台机场代理客户端资料库
// 数据来源：第三方代理客户端.txt

export interface ClientApp {
  name: string;
  badge?: string;
  core: string;
  platforms: string[];
  features: string[];
  recommendedFor: string;
  downloadNote: string;
  downloadUrl?: string;
}

export interface PlatformClients {
  platformId: string;
  platformName: string;
  iconName: string;
  description: string;
  searchKeywords: string[];
  clients: ClientApp[];
  setupGuideSummary: string[];
}

export const CLIENT_PLATFORMS: PlatformClients[] = [
  {
    platformId: 'windows',
    platformName: 'Windows 电脑客户端',
    iconName: 'windows',
    description: '适用于 Windows 10/11 系统的桌面代理客户端，支持 TUN 虚拟网卡模式、全局/规则分流与一键节点测速。',
    searchKeywords: ['Clash for Windows', 'Clash Verge Rev 下载', 'v2rayN 下载', 'Windows 机场客户端', 'Mihomo 客户端', 'VLESS Windows 客户端'],
    setupGuideSummary: [
      '下载推荐的 Clash Verge Rev 或 v2rayN 安装包并解压安装。',
      '从机场官网复制 Clash / V2Ray 订阅链接。',
      '打开客户端订阅管理界面，粘贴订阅链接并点击「更新/下载」。',
      '在代理组中选择延迟最低或指定地区节点（如香港、日本、新加坡），开启系统代理或 TUN 模式即可畅游。'
    ],
    clients: [
      {
        name: 'Clash Verge Rev',
        badge: '首选主力',
        core: 'Mihomo (Clash.Meta)',
        platforms: ['Windows', 'macOS', 'Linux'],
        features: ['原生支持 TUN 模式免配系统代理', '优雅现代 UI 界面', '内置规则分流与延迟测试', '支持 Script / Merge 配置覆写'],
        recommendedFor: '新手至进阶日常主力用户，替代已停更的旧版 Clash for Windows',
        downloadNote: '开源托管于 GitHub，建议认准官方 release 发行版。'
      },
      {
        name: 'v2rayN',
        badge: '多协议全能',
        core: 'Xray / sing-box / V2Ray',
        platforms: ['Windows'],
        features: ['多核心自由切换', '原生深度支持 VLESS, Trojan, Shadowsocks, Hysteria2', '精细化节点测速与路由规则'],
        recommendedFor: '追求多协议支持、注重底层参数控制的极客用户',
        downloadNote: '开源托管于 GitHub，下载解压即可使用（建议下载含 Core 的完整包）。'
      },
      {
        name: 'FlClash',
        badge: '极简轻快',
        core: 'Mihomo',
        platforms: ['Windows', 'macOS', 'Linux', 'Android'],
        features: ['基于 Flutter 构建跨平台极简 UI', '资源占用低，秒速启动', '支持标准 Clash 订阅'],
        recommendedFor: '看重界面清爽、低内存占用的办公电脑用户',
        downloadNote: 'GitHub 开源项目，全平台一致交互体验。'
      },
      {
        name: 'Hiddify',
        badge: '自动选点',
        core: 'sing-box',
        platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
        features: ['高度自动化节点健康监测与故障切换', '多协议自动解析', '新手向简易控制面板'],
        recommendedFor: '希望完全傻瓜化自动切换节点的用户',
        downloadNote: 'GitHub 开源项目，支持多语言。'
      },
      {
        name: 'Karing',
        badge: 'sing-box 生态',
        core: 'sing-box',
        platforms: ['Windows', 'macOS', 'iOS', 'Android'],
        features: ['跨平台统一配置', '对新协议兼容性佳', '简化分流策略配置'],
        recommendedFor: '在苹果与 Windows 间寻求相似操作界面的多端用户',
        downloadNote: 'GitHub 开源发布。'
      }
    ]
  },
  {
    platformId: 'android',
    platformName: 'Android 安卓手机客户端',
    iconName: 'android',
    description: '适用于各类 Android 手机与平板，支持常驻后台、智能分流绕过大陆局域网与分应用代理。',
    searchKeywords: ['v2rayNG 下载', 'Clash 安卓版', 'FlClash Android', '安卓科学上网客户端', 'Shadowsocks 安卓'],
    setupGuideSummary: [
      '下载安装 v2rayNG 或 FlClash APK 安装包。',
      '在客户端中选择「从剪贴板导入」或扫描机场提供的订阅二维码。',
      '在设置中开启「分应用代理」，将国内微信、网银等设为直连。',
      '点击右下角连接浮标，首次连接允许系统创建 VPN 连接权限。'
    ],
    clients: [
      {
        name: 'v2rayNG',
        badge: '安卓装机标配',
        core: 'Xray / sing-box',
        platforms: ['Android'],
        features: ['稳定后台长久保活', '支持几乎所有主流代理协议与自建节点', '灵活的路由规则设置与分应用代理'],
        recommendedFor: '所有 Android 用户，兼容性与稳定性首选',
        downloadNote: 'GitHub 开源下载官方 APK，避免使用非官方修改版。'
      },
      {
        name: 'FlClash',
        badge: '高颜值推荐',
        core: 'Mihomo',
        platforms: ['Android', 'Windows', 'macOS'],
        features: ['现代 Material You 风格', '节点策略组切换直观', '与桌面端配置互通'],
        recommendedFor: '喜欢美观 UI 与直观策略组分流的手机用户',
        downloadNote: 'GitHub Release 提供标准 APK 安装包。'
      },
      {
        name: 'Clash Meta for Android (CMFA)',
        badge: '功能强大',
        core: 'Mihomo',
        platforms: ['Android'],
        features: ['完整移植 Clash.Meta 核心能力', '支持复杂路由分流与自定义 Provider', '深色模式自适应'],
        recommendedFor: '熟悉 Clash 规则的高级手机用户',
        downloadNote: 'GitHub 开源项目。'
      },
      {
        name: 'Hiddify (Android)',
        badge: '新手入门',
        core: 'sing-box',
        platforms: ['Android'],
        features: ['一键智能连接', '自动选择延迟最低节点', '纯净无广告'],
        recommendedFor: '不想研究复杂分流设置的普通用户',
        downloadNote: 'GitHub 官方发布。'
      }
    ]
  },
  {
    platformId: 'ios',
    platformName: 'iPhone / iPad 苹果客户端',
    iconName: 'apple',
    description: '适用于 iOS 系统的代理神器，需使用非国区 Apple ID（如美区、港区）在 App Store 下载。',
    searchKeywords: ['Shadowrocket 小火箭下载', '小火箭配置教程', 'Stash 下载', 'Quantumult X 圈X', 'iOS 翻墙软件'],
    setupGuideSummary: [
      '准备一个美区/港区 Apple ID 并登录 App Store（注意：仅在 App Store 登录，切勿在系统设置 iCloud 登录）。',
      '在 App Store 搜索购买并下载 Shadowrocket（售价约 $2.99）或 Stash。',
      '打开机场用户中心，点击「一键导入 Shadowrocket」，或复制订阅链接在小火箭右上角「+」类型选 Subscribe 粘贴。',
      '滑动连接开关，允许系统添加 VPN 配置，全局路由默认选择「配置 (Config)」以实现国内外流量自动分流。'
    ],
    clients: [
      {
        name: 'Shadowrocket (小火箭)',
        badge: 'iOS 统治级标配',
        core: '自主开发',
        platforms: ['iOS', 'iPadOS', 'macOS (Apple Silicon)'],
        features: ['极其轻巧省电，秒开秒连', '完美支持几乎全协议订阅一键导入', '内置丰富去广告与国内外智能分流规则'],
        recommendedFor: '所有 iPhone 用户首选必备客户端，性价比与易用性最高',
        downloadNote: '非国区 App Store 付费应用（约 $2.99），需自备外区 Apple ID。'
      },
      {
        name: 'Stash',
        badge: 'iOS 版 Clash',
        core: 'Clash 内核适配',
        platforms: ['iOS', 'tvOS', 'macOS'],
        features: ['完美兼容 Clash YAML 配置文件', '支持策略组、DNS 覆写与脚本控制', '完美支持 Apple TV 原生客户端'],
        recommendedFor: '习惯 Clash 配置逻辑、或有 Apple TV 科学上网需求的用户',
        downloadNote: '非国区 App Store 付费应用（约 $3.99）。'
      },
      {
        name: 'Quantumult X (圈 X)',
        badge: '极客高阶定制',
        core: '自主开发',
        platforms: ['iOS', 'iPadOS'],
        features: ['强大的 JS 脚本重写能力', '深度网络流量分析', '超精细分流控制'],
        recommendedFor: '热衷折腾去广告重写、复杂策略定制的高级玩家',
        downloadNote: '非国区 App Store 付费应用（约 $7.99）。'
      },
      {
        name: 'Karing (iOS)',
        badge: '免费好用',
        core: 'sing-box',
        platforms: ['iOS', 'iPadOS'],
        features: ['支持主流订阅格式', '界面清晰直观', '可免费下载使用'],
        recommendedFor: '暂无外区付费手段但需要使用苹果客户端的用户',
        downloadNote: 'App Store 提供免费下载。'
      }
    ]
  },
  {
    platformId: 'macos',
    platformName: 'macOS 苹果电脑客户端',
    iconName: 'mac',
    description: '适用于 MacBook 与 iMac 桌面系统，同时提供原生支持 Apple Silicon（M1/M2/M3/M4）与 Intel 架构的高性能客户端。',
    searchKeywords: ['Mac 机场客户端', 'Clash Verge Mac 下载', 'Surge Mac', 'Mac 科学上网工具'],
    setupGuideSummary: [
      '根据 Mac 芯片架构下载对应版本（Apple Silicon 请下载 aarch64/arm64 版本，Intel 芯片请下载 x64 版本）。',
      '将应用拖拽入「应用程序」文件夹，首次打开若遇未信任开发者提示，在「系统偏好设置 → 安全与隐私」中点击「仍要打开」。',
      '导入机场订阅，开启「系统代理」或「TUN 模式」，终端开发建议配合 ProxyChains 或在终端 profile 中设置 export http_proxy。'
    ],
    clients: [
      {
        name: 'Clash Verge Rev for Mac',
        badge: 'Mac 桌面首选',
        core: 'Mihomo',
        platforms: ['macOS'],
        features: ['原生支持 M 系列与 Intel 双架构', '集成 TUN 虚拟网卡解决终端与特定开发工具不走代理的问题', '沉浸式暗色模式支持'],
        recommendedFor: '绝大多数 Mac 办公、科研与开发人员日常主力',
        downloadNote: 'GitHub 开源项目，提供 .dmg 安装包。'
      },
      {
        name: 'FlClash (Mac)',
        badge: '清爽低耗',
        core: 'Mihomo',
        platforms: ['macOS'],
        features: ['极简设计，界面精巧优雅', '占用低且快速响应', '快速切换策略组'],
        recommendedFor: '看重菜单栏小工具轻量使用的用户',
        downloadNote: 'GitHub 开源下载对应架构 dmg。'
      },
      {
        name: 'Surge Mac',
        badge: '高端网络调试',
        core: 'Surge 商业核心',
        platforms: ['macOS'],
        features: ['抓包与网络调试分析天花板', '强大的增强模式与进程分流', '极致低延迟'],
        recommendedFor: '网络工程师、前端/移动端开发者与企业高级用户',
        downloadNote: '官网购买授权下载，价格较高。'
      }
    ]
  },
  {
    platformId: 'linux',
    platformName: 'Linux 客户端与服务器代理',
    iconName: 'linux',
    description: '适用于 Ubuntu / Debian / CentOS / Arch 以及 Linux 无桌面服务器环境，支持 DEB、RPM、AppImage 与 Web UI 集中式管理。',
    searchKeywords: ['Linux 代理客户端', 'v2rayA 使用教程', 'Clash Linux GUI', 'Linux 终端代理配置'],
    setupGuideSummary: [
      '桌面端直接下载 Clash Verge Rev 的 AppImage 或 deb 包安装运行。',
      '无头服务器（Headless Server）推荐安装 v2rayA，通过 Web 页面（默认端口 2017）导入订阅并管理节点。',
      '对于终端纯命令行环境，在 ~/.bashrc 或 ~/.zshrc 中追加 export http_proxy=http://127.0.0.1:7890 即可畅享极速更新与源码拉取。'
    ],
    clients: [
      {
        name: 'v2rayA',
        badge: 'Web UI 运维神器',
        core: 'Xray / V2Ray',
        platforms: ['Linux (Debian/Ubuntu/CentOS/Arch)'],
        features: ['全功能 Web 控制面板，无需安装任何 X11 桌面', '一键接管透明代理（通过 iptables/nftables）', '适合家用 Linux 小主机与软路由'],
        recommendedFor: 'Linux 服务器、软路由及 NAS 容器环境用户',
        downloadNote: '通过官方 APT / YUM 源或 Docker 容器直接部署。'
      },
      {
        name: 'Clash Verge Rev (Linux)',
        badge: '桌面端优选',
        core: 'Mihomo',
        platforms: ['Linux Desktop'],
        features: ['提供 AppImage / deb / rpm 多种主流发行格式', '支持 Linux 系统的 TUN 网卡接管', '完整的 GUI 图形配置'],
        recommendedFor: '使用 Ubuntu / Fedora / Arch Linux 等桌面发行版的开发工程师',
        downloadNote: 'GitHub Releases 下载对应架构安装包。'
      }
    ]
  },
  {
    platformId: 'router',
    platformName: 'OpenWrt / 软路由客户端',
    iconName: 'router',
    description: '适用于家用软路由、群晖/威联通 NAS 与智能网关，实现家庭与办公室内所有设备（TV、PS5、Switch、智能家居）全屋免配翻墙。',
    searchKeywords: ['OpenClash 配置教程', 'PassWall 使用方法', '软路由科学上网', '全屋透明代理', 'Nikki OpenWrt'],
    setupGuideSummary: [
      '登录 OpenWrt 路由器后台，确认 CPU 架构（如 x86_64, aarch64）并安装对应 ipk 依赖包。',
      '在 OpenClash / PassWall 中上传机场订阅配置文件。',
      '模式推荐选择「Fake-IP (TUN 混合模式)」以获得最佳游戏主机与电视低延迟分流体验。',
      '配置大陆白名单与直连域名列表，避免国内银行、网购及局域网打印机绕行海外。'
    ],
    clients: [
      {
        name: 'OpenClash',
        badge: '软路由装机之王',
        core: 'Mihomo / Clash.Meta',
        platforms: ['OpenWrt'],
        features: ['功能极其强大的软路由透明代理', 'Fake-IP 与 Redir-Host 模式自由切换', '全屋智能分流与 DNS 污染防护'],
        recommendedFor: '拥有 x86 软路由、畅网微主机、玩客云等 OpenWrt 设备的全屋科学上网用户',
        downloadNote: 'GitHub 开源项目，通过 OpenWrt 软件包管理安装。'
      },
      {
        name: 'PassWall2',
        badge: '稳定防失联',
        core: 'Xray / sing-box / Shadowsocks-libev',
        platforms: ['OpenWrt'],
        features: ['支持自动故障检测与节点轮换', '节点分流策略灵活明了', '对国内流媒体直连穿透优化好'],
        recommendedFor: '追求路由长期稳定不折腾、家属无感分流的用户',
        downloadNote: '开源定制固件常用内置插件。'
      },
      {
        name: 'Nikki',
        badge: '新一代轻量路由',
        core: 'Mihomo',
        platforms: ['OpenWrt 24.10+'],
        features: ['针对较新 OpenWrt 内核优化，性能开销小', '现代扁平化设置面板', '精简高效的策略管理'],
        recommendedFor: '使用较新 OpenWrt 官方固件、看重系统精简的用户',
        downloadNote: '要求 OpenWrt 24.10 及以上系统环境。'
      }
    ]
  }
];
