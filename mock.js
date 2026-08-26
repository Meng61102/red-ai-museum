/* ============================================================
   红色电子AI博物馆 - Mock 数据
   ============================================================ */

window.MOCK = {
  // 展厅数据
  halls: [
    {
      id: 'party-founding',
      title: '建党历程厅',
      subtitle: '开天辟地 · 从星火到燎原',
      description: '追溯中国共产党从诞生到发展壮大的光辉历程，通过珍贵史料和历史文物，展现中国共产党人的初心与使命。',
      cover: 'linear-gradient(135deg, #C41E3A 0%, #7D1226 100%)',
      icon: 'flag',
      items: 128,
      views: '128.6万',
      category: '党史历程',
      color: 'red'
    },
    {
      id: 'revolutionary-relics',
      title: '革命文物厅',
      subtitle: '峥嵘岁月 · 文物中的红色记忆',
      description: '收藏革命战争时期的珍贵文物，每一件都承载着波澜壮阔的历史故事，见证着先辈们的奋斗与牺牲。',
      cover: 'linear-gradient(135deg, #8B4513 0%, #5C3317 100%)',
      icon: 'scroll',
      items: 256,
      views: '256.3万',
      category: '珍贵文物',
      color: 'brown'
    },
    {
      id: 'heroes-martyrs',
      title: '英烈人物厅',
      subtitle: '浩气长存 · 永远的丰碑',
      description: '缅怀革命先烈的英雄事迹，感受他们崇高的革命精神和家国情怀，传承红色基因。',
      cover: 'linear-gradient(135deg, #2C3E50 0%, #1A252F 100%)',
      icon: 'award',
      items: 186,
      views: '198.7万',
      category: '英雄人物',
      color: 'blue'
    },
    {
      id: 'battle-history',
      title: '战役历史厅',
      subtitle: '烽火硝烟 · 经典战役回眸',
      description: '重温革命战争年代的经典战役，通过3D战场复原，感受革命先辈的军事智慧和英勇无畏。',
      cover: 'linear-gradient(135deg, #4A0E0E 0%, #2A0808 100%)',
      icon: 'swords',
      items: 72,
      views: '89.2万',
      category: '战役史',
      color: 'darkred'
    },
    {
      id: 'red-spirit',
      title: '红色精神厅',
      subtitle: '精神谱系 · 代代相传',
      description: '系统展示中国共产党人的精神谱系，从红船精神到脱贫攻坚精神，感悟精神的力量。',
      cover: 'linear-gradient(135deg, #D4AF37 0%, #8C720B 100%)',
      icon: 'sparkles',
      items: 46,
      views: '67.5万',
      category: '精神谱系',
      color: 'gold'
    },
    {
      id: 'new-era',
      title: '新时代成就厅',
      subtitle: '伟大复兴 · 新时代辉煌',
      description: '展现党的十八大以来，中国在各个领域取得的历史性成就，感受新时代的磅礴力量。',
      cover: 'linear-gradient(135deg, #1E88E5 0%, #0D47A1 100%)',
      icon: 'trending-up',
      items: 94,
      views: '145.8万',
      category: '时代成就',
      color: 'blue'
    }
  ],

  // 精选文物
  relics: [
    {
      id: 1,
      name: '《共产党宣言》中文全译本',
      era: '1920年',
      hall: '建党历程厅',
      description: '陈望道翻译的《共产党宣言》第一个中文全译本，为中国共产党的创立奠定了重要思想基础。',
      rarity: '一级文物',
      image: 'linear-gradient(135deg, #8B0000 0%, #4A0000 100%)'
    },
    {
      id: 2,
      name: '嘉兴南湖红船模型',
      era: '1921年',
      hall: '建党历程厅',
      description: '1921年中共一大在南湖红船上闭幕，宣告中国共产党正式成立，红船成为中国革命原点的象征。',
      rarity: '一级文物',
      image: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)'
    },
    {
      id: 3,
      name: '红军长征穿过的棉袄',
      era: '1935年',
      hall: '革命文物厅',
      description: '红军战士在二万五千里长征中穿过的棉袄，上面有多处补丁，见证了长征的艰辛与伟大。',
      rarity: '一级文物',
      image: 'linear-gradient(135deg, #8B4513 0%, #5D2E0C 100%)'
    },
    {
      id: 4,
      name: '雷锋日记手迹',
      era: '1960年代',
      hall: '英烈人物厅',
      description: '雷锋同志生前写下的日记，字里行间充满了对党和人民的无限忠诚与热爱。',
      rarity: '一级文物',
      image: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)'
    },
    {
      id: 5,
      name: '狼牙山五壮士纪念碑',
      era: '1941年',
      hall: '英烈人物厅',
      description: '为纪念狼牙山五壮士而建，他们为掩护大部队转移，将日军引上绝路后跳崖，气壮山河。',
      rarity: '纪念建筑',
      image: 'linear-gradient(135deg, #37474F 0%, #263238 100%)'
    },
    {
      id: 6,
      name: '开国大典上使用的礼炮',
      era: '1949年',
      hall: '革命文物厅',
      description: '1949年10月1日开国大典上使用的礼炮，54门礼炮齐鸣28响，象征着中国共产党领导人民奋斗的28年。',
      rarity: '一级文物',
      image: 'linear-gradient(135deg, #B8860B 0%, #8B6508 100%)'
    },
    {
      id: 7,
      name: '半条被子',
      era: '1934年',
      hall: '革命文物厅',
      description: '红军长征时期，三名女红军借宿徐解秀家，临走时剪下自己仅有的半条被子留给她。',
      rarity: '一级文物',
      image: 'linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)'
    },
    {
      id: 8,
      name: '邓稼先的计算尺',
      era: '1960年代',
      hall: '新时代成就厅',
      description: '"两弹一星"元勋邓稼先当年使用过的计算尺，见证了中国国防科技事业的起步。',
      rarity: '一级文物',
      image: 'linear-gradient(135deg, #546E7A 0%, #37474F 100%)'
    }
  ],

  // 英雄人物
  heroes: [
    {
      id: 1,
      name: '李大钊',
      title: '中国共产党主要创始人之一',
      period: '1889-1927',
      description: '中国共产主义运动的先驱，伟大的马克思主义者，为中国革命事业献出了宝贵生命。',
      quote: '铁肩担道义，妙手著文章。',
      image: 'linear-gradient(135deg, #1A237E 0%, #0D1550 100%)'
    },
    {
      id: 2,
      name: '方志敏',
      title: '无产阶级革命家、军事家',
      period: '1899-1935',
      description: '赣东北革命根据地的创建者，在狱中写下《可爱的中国》等不朽篇章。',
      quote: '敌人只能砍下我们的头颅，决不能动摇我们的信仰！',
      image: 'linear-gradient(135deg, #B71C1C 0%, #7F0000 100%)'
    },
    {
      id: 3,
      name: '赵一曼',
      title: '抗日民族英雄',
      period: '1905-1936',
      description: '东北抗日联军杰出领导人，在抗日战争中英勇就义，被誉为"甘将热血沃中华"的女英雄。',
      quote: '未惜头颅新故国，甘将热血沃中华。',
      image: 'linear-gradient(135deg, #880E4F 0%, #500028 100%)'
    },
    {
      id: 4,
      name: '焦裕禄',
      title: '县委书记的榜样',
      period: '1922-1964',
      description: '兰考县委书记，带领全县人民与风沙、盐碱、内涝作斗争，鞠躬尽瘁，死而后已。',
      quote: '吃别人嚼过的馍没味道。',
      image: 'linear-gradient(135deg, #33691E 0%, #1B5E20 100%)'
    },
    {
      id: 5,
      name: '钱学森',
      title: '中国航天之父',
      period: '1911-2009',
      description: '世界著名科学家，中国航天事业奠基人，"两弹一星"功勋奖章获得者。',
      quote: '我的事业在中国，我的成就在中国，我的归宿在中国。',
      image: 'linear-gradient(135deg, #01579B 0%, #002F6C 100%)'
    },
    {
      id: 6,
      name: '黄文秀',
      title: '时代楷模、脱贫攻坚楷模',
      period: '1989-2019',
      description: '北师大硕士毕业后回乡工作，主动请缨到贫困村任第一书记，在山洪中不幸遇难。',
      quote: '只有扎根泥土，才能懂得人民。',
      image: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)'
    }
  ],

  // 红色精神谱系
  spirits: [
    { name: '红船精神', core: '开天辟地、敢为人先的首创精神', period: '1921年', symbol: '🚢' },
    { name: '井冈山精神', core: '坚定信念、艰苦奋斗', period: '1927年', symbol: '⛰️' },
    { name: '长征精神', core: '不怕牺牲、坚韧不拔', period: '1934-1936年', symbol: '🥾' },
    { name: '延安精神', core: '自力更生、艰苦奋斗', period: '1935-1948年', symbol: '🏛️' },
    { name: '抗战精神', core: '天下兴亡、匹夫有责', period: '1931-1945年', symbol: '⚔️' },
    { name: '西柏坡精神', core: '两个务必、进京赶考', period: '1948-1949年', symbol: '🏠' },
    { name: '抗美援朝精神', core: '祖国和人民利益高于一切', period: '1950-1953年', symbol: '🎖️' },
    { name: '两弹一星精神', core: '热爱祖国、无私奉献', period: '1950-1970年代', symbol: '🚀' },
    { name: '雷锋精神', core: '全心全意为人民服务', period: '1960年代', symbol: '⭐' },
    { name: '焦裕禄精神', core: '亲民爱民、艰苦奋斗', period: '1960年代', symbol: '🌳' },
    { name: '特区精神', core: '敢闯敢试、敢为人先', period: '1980年代', symbol: '🏙️' },
    { name: '脱贫攻坚精神', core: '上下同心、尽锐出战', period: '2013-2020年', symbol: '🌾' },
    { name: '抗疫精神', core: '生命至上、举国同心', period: '2020年', symbol: '🦠' },
    { name: '科学家精神', core: '胸怀祖国、服务人民', period: '新时代', symbol: '🔬' },
    { name: '工匠精神', core: '爱岗敬业、精益求精', period: '新时代', symbol: '🔧' }
  ],

  // 历史时间线（建党历程）
  timeline: [
    { year: '1921', event: '中国共产党成立', desc: '中共一大在上海和嘉兴南湖召开，宣告中国共产党正式成立。', type: 'founding' },
    { year: '1927', event: '南昌起义', desc: '打响了武装反抗国民党反动派的第一枪，人民军队诞生。', type: 'military' },
    { year: '1934', event: '红军长征开始', desc: '中央红军开始二万五千里长征，铸就伟大长征精神。', type: 'military' },
    { year: '1935', event: '遵义会议', desc: '确立了毛泽东在党中央和红军的领导地位，是党的历史上生死攸关的转折点。', type: 'political' },
    { year: '1937', event: '全面抗战爆发', desc: '七七事变后，中国开始全民族抗战，中国共产党成为中流砥柱。', type: 'war' },
    { year: '1945', event: '中共七大', desc: '确立毛泽东思想为党的指导思想，为夺取抗战胜利和新民主主义革命胜利奠定基础。', type: 'political' },
    { year: '1949', event: '新中国成立', desc: '中华人民共和国成立，中国人民从此站起来了。', type: 'founding' },
    { year: '1956', event: '三大改造完成', desc: '社会主义基本制度在我国建立起来，中国进入社会主义社会。', type: 'political' },
    { year: '1978', event: '改革开放', desc: '党的十一届三中全会召开，开启了改革开放和社会主义现代化建设新时期。', type: 'reform' },
    { year: '1992', event: '南方谈话', desc: '邓小平南方谈话，推动改革开放进入新阶段。', type: 'reform' },
    { year: '2012', event: '党的十八大', desc: '中国特色社会主义进入新时代，提出中华民族伟大复兴中国梦。', type: 'new-era' },
    { year: '2021', event: '建党百年', desc: '中国共产党成立100周年，全面建成小康社会，开启第二个百年奋斗目标新征程。', type: 'milestone' }
  ],

  // 红色地图数据
  redSites: [
    { name: '中共一大会址', location: '上海', type: '会址', importance: 5, year: 1921 },
    { name: '南湖红船', location: '浙江嘉兴', type: '会址', importance: 5, year: 1921 },
    { name: '井冈山革命根据地', location: '江西井冈山', type: '根据地', importance: 5, year: 1927 },
    { name: '瑞金中央苏区', location: '江西瑞金', type: '根据地', importance: 4, year: 1931 },
    { name: '遵义会议会址', location: '贵州遵义', type: '会址', importance: 5, year: 1935 },
    { name: '延安革命圣地', location: '陕西延安', type: '根据地', importance: 5, year: 1935 },
    { name: '西柏坡纪念馆', location: '河北平山县', type: '会址', importance: 4, year: 1948 },
    { name: '天安门广场', location: '北京', type: '纪念地', importance: 5, year: 1949 },
    { name: '韶山冲', location: '湖南韶山', type: '故居', importance: 4, year: 1893 },
    { name: '南湖革命纪念馆', location: '浙江嘉兴', type: '纪念馆', importance: 3, year: 1921 },
    { name: '狼牙山', location: '河北易县', type: '纪念地', importance: 3, year: 1941 },
    { name: '焦裕禄纪念馆', location: '河南兰考', type: '纪念馆', importance: 3, year: 1962 },
    { name: '雷锋纪念馆', location: '辽宁抚顺', type: '纪念馆', importance: 3, year: 1963 },
    { name: '古田会议会址', location: '福建上杭', type: '会址', importance: 4, year: 1929 },
    { name: '百色起义纪念馆', location: '广西百色', type: '纪念馆', importance: 3, year: 1929 },
    { name: '西路军纪念馆', location: '甘肃高台', type: '纪念馆', importance: 3, year: 1937 }
  ],

  // AI功能介绍
  aiFeatures: [
    {
      id: 'guide',
      name: 'AI智能导览',
      desc: '根据您的兴趣偏好，智能推荐参观路线和展品，打造个性化的博物馆体验。',
      icon: 'bot',
      color: 'red'
    },
    {
      id: 'qa',
      name: 'AI知识问答',
      desc: '关于红色历史的任何问题，AI都能为您提供专业、准确的解答。',
      icon: 'message-circle',
      color: 'gold'
    },
    {
      id: 'restore',
      name: '老照片修复',
      desc: '上传老照片，AI自动修复破损、增强清晰度，让历史影像重现光彩。',
      icon: 'image',
      color: 'blue'
    },
    {
      id: 'recreate',
      name: '历史场景还原',
      desc: '输入描述，AI生成对应的历史场景图像，让您身临其境感受历史。',
      icon: 'palette',
      color: 'green'
    },
    {
      id: 'voice',
      name: 'AI语音讲解',
      desc: 'AI数字人深情讲解文物背后的故事，支持多种方言和语言。',
      icon: 'volume-2',
      color: 'purple'
    },
    {
      id: 'timeline',
      name: '智能时间轴',
      desc: '输入年份或事件，AI为您生成专属历史时间轴，理清历史脉络。',
      icon: 'calendar',
      color: 'orange'
    }
  ],

  // 首页数据统计
  stats: {
    halls: 6,
    relics: 782,
    heroes: 186,
    visitors: '1280万+'
  }
};
