// ============================================================
//  NỘI DUNG — 11 sections
// ============================================================

const MARX_QUOTE =
  "Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội.";

// II · Bối cảnh lịch sử
const HISTORY = {
  kicker: "II · Bối cảnh lịch sử",
  title: "Trước Marx, con người được hiểu như thế nào?",
  intro:
    "Suốt hàng nghìn năm lịch sử, các triết gia đã đặt câu hỏi: bản chất con người là gì? Mỗi thời đại đưa ra một câu trả lời khác nhau.",
  views: [
    {
      n: "01",
      tag: "Tôn giáo & thần học",
      color: "#CBA45A",
      title: "Con người là hình ảnh của Thượng đế",
      text: "Thần học Trung cổ cho rằng bản chất con người được Chúa tạo ra, cố định và bất biến. Con người chỉ có thể hoàn thiện thông qua đức tin và tuân theo ý Chúa.",
      critique: "Bỏ qua vai trò của xã hội và thực tiễn lịch sử.",
    },
    {
      n: "02",
      tag: "Triết học duy tâm",
      color: "#8A9C66",
      title: "Con người là chủ thể lý tính thuần túy",
      text: "Descartes, Kant, Hegel đều coi bản chất con người nằm ở ý thức, lý trí hoặc tinh thần tuyệt đối — tách khỏi thế giới vật chất và hoạt động xã hội.",
      critique: "Trừu tượng hóa con người, tách rời khỏi điều kiện sinh sống thực tế.",
    },
    {
      n: "03",
      tag: "Chủ nghĩa tự nhiên",
      color: "#A2511F",
      title: "Con người là sản phẩm của tự nhiên",
      text: "Feuerbach, Hobbes: bản chất con người do bản năng sinh vật quyết định. Con người tốt hay xấu là do 'thiên tính' bẩm sinh, không thể thay đổi.",
      critique: "Đồng nhất con người với động vật, phủ nhận vai trò của lịch sử và xã hội.",
    },
  ],
  turn: "Karl Marx đã vượt lên tất cả các quan niệm này bằng một luận điểm mang tính cách mạng...",
};

// III · So sánh Đông – Tây – Mác
const COMPARISON = {
  kicker: "III · So sánh Đông – Tây – Mác",
  title: "Ba cách nhìn về bản chất con người",
  cols: [
    {
      heading: "Triết học Đông phương",
      color: "#CBA45A",
      rows: [
        {
          label: "Nho giáo",
          text: "Con người được định nghĩa qua các mối quan hệ: vua–tôi, cha–con, vợ–chồng, anh–em, bạn bè. Cá nhân chỉ có ý nghĩa trong cộng đồng.",
        },
        {
          label: "Phật giáo",
          text: "Con người là chuỗi nhân duyên, không có 'ngã' cố định. Bản chất là sự tương tác liên tục với thế giới xung quanh.",
        },
        {
          label: "Điểm chung",
          text: "Đặt con người trong mối quan hệ, không nhìn cá nhân như một thực thể độc lập tuyệt đối.",
        },
      ],
    },
    {
      heading: "Triết học Tây phương",
      color: "#8A9C66",
      rows: [
        {
          label: "Chủ nghĩa tự do",
          text: "Con người là cá nhân tự do, có quyền tự nhiên bẩm sinh. Xã hội là sản phẩm của hợp đồng giữa các cá nhân tự do.",
        },
        {
          label: "Descartes",
          text: "'Tôi suy nghĩ, vậy tôi tồn tại.' Bản chất người nằm ở ý thức cá nhân, không phụ thuộc vào người khác.",
        },
        {
          label: "Điểm chung",
          text: "Đặt cá nhân làm trung tâm, xã hội chỉ là bối cảnh bên ngoài, không tạo nên bản chất người.",
        },
      ],
    },
    {
      heading: "Triết học Mác",
      color: "#D07A3E",
      rows: [
        {
          label: "Tổng hòa quan hệ",
          text: "Bản chất con người không phải cái trừu tượng có sẵn, mà là tổng hòa các quan hệ xã hội trong tính hiện thực của nó.",
        },
        {
          label: "Thực tiễn lao động",
          text: "Con người tạo ra lịch sử thông qua lao động. Lao động biến đổi tự nhiên và qua đó biến đổi chính bản thân con người.",
        },
        {
          label: "Tính lịch sử",
          text: "Bản chất con người thay đổi theo từng thời đại lịch sử. Không có 'bản chất người' vĩnh cửu, bất biến.",
        },
      ],
    },
  ],
};

// IV · Thực thể sinh học – xã hội
const BIOSOCIAL = {
  kicker: "IV · Con người – Thực thể sinh học–xã hội",
  title: "Hai chiều tạo nên một con người",
  bio: {
    tag: "Mặt sinh học",
    color: "#A2511F",
    headline: "Nền tảng tự nhiên",
    points: [
      "Cấu tạo cơ thể, hệ thần kinh, bộ não",
      "Bản năng sinh tồn, nhu cầu cơ bản",
      "Khả năng ngôn ngữ và tư duy tiềm năng",
      "Giới hạn của gen và sinh lý học",
    ],
    note: "Tất cả mọi người đều có nền tảng sinh học như nhau — nhưng điều đó không giải thích tại sao họ suy nghĩ và hành động khác nhau.",
  },
  social: {
    tag: "Mặt xã hội",
    color: "#4A7E7A",
    headline: "Chiều kích làm nên người",
    points: [
      "Ngôn ngữ, văn hóa, đạo đức",
      "Ý thức, tư duy, thế giới quan",
      "Kỹ năng lao động và sáng tạo",
      "Cảm xúc xã hội: yêu thương, trách nhiệm, công bằng",
    ],
    note: "Một đứa trẻ sinh ra với đầy đủ tố chất sinh học, nhưng nếu không được tiếp xúc với xã hội, nó không thể trở thành 'người' theo nghĩa đầy đủ.",
  },
  bridge:
    "Marx chỉ ra: nền tảng sinh học là điều kiện cần, nhưng chính các quan hệ xã hội mới là điều kiện đủ để hình thành bản chất người.",
  example: {
    title: "Trường hợp 'trẻ em hoang dã'",
    text: "Những đứa trẻ bị tách khỏi xã hội từ nhỏ dù có cơ thể người nhưng không có ngôn ngữ, không có ý thức xã hội, hành xử như động vật — minh chứng sống cho thấy xã hội là điều kiện thiết yếu để trở thành con người.",
  },
};

// V · Giải thích luận điểm
const TOTALITY = {
  kicker: "V · Giải thích luận điểm",
  title: "\"Tổng hòa\" — không phải phép cộng đơn giản",
  meaning:
    "'Tổng hòa' (ensemble) mà Marx dùng không có nghĩa là cộng các quan hệ lại như phép toán, mà là sự kết hợp hữu cơ, năng động — tạo ra chất mới vượt lên trên các thành phần.",
  points: [
    {
      n: "01",
      color: "#C26B36",
      title: "Con người không thể tồn tại ngoài quan hệ xã hội",
      text: "Mọi khía cạnh của đời sống — ngôn ngữ, tư duy, đạo đức — đều được hình thành thông qua tương tác xã hội. Tách khỏi xã hội, con người đánh mất chính mình.",
    },
    {
      n: "02",
      color: "#6E7F4E",
      title: "Quan hệ xã hội có tính lịch sử – cụ thể",
      text: "Mỗi thời đại, mỗi xã hội có hệ thống quan hệ riêng. Con người trong xã hội phong kiến khác con người trong xã hội tư bản vì họ tham gia vào các quan hệ khác nhau.",
    },
    {
      n: "03",
      color: "#A2511F",
      title: "Lao động là hoạt động nền tảng",
      text: "Thông qua lao động, con người không chỉ tạo ra của cải mà còn tạo ra chính mình. Lao động là cầu nối giữa cá nhân và xã hội, giữa con người và thế giới.",
    },
    {
      n: "04",
      color: "#4A7E7A",
      title: "Bản chất người là năng động, không cố định",
      text: "Vì các quan hệ xã hội thay đổi, bản chất con người cũng biến đổi theo. Điều này mở ra khả năng: thay đổi xã hội để giải phóng con người.",
    },
  ],
};

// VI · Các quan hệ xã hội hình thành con người (8 items)
const PIECES = [
  {
    n: "01",
    title: "Gia đình",
    part: "Trái tim",
    color: "#C26B36",
    lead: "Gia đình là môi trường xã hội đầu tiên của mỗi con người.",
    listLabel: "Từ gia đình, chúng ta học:",
    list: [
      "Cách yêu thương",
      "Cách giao tiếp",
      "Chuẩn mực đạo đức",
      "Trách nhiệm với người khác",
    ],
    note: "Một đứa trẻ lớn lên trong môi trường được yêu thương thường có xu hướng tự tin và tích cực hơn. Ngược lại, trẻ thường xuyên chịu bạo lực gia đình có nguy cơ gặp các vấn đề tâm lý và hành vi.",
    pin: "Mảnh ghép đầu tiên hình thành nhân cách con người.",
    img: "ảnh gia đình",
  },
  {
    n: "02",
    title: "Nhà trường",
    part: "Khối óc",
    color: "#6E7F4E",
    lead: "Nhà trường giúp con người tiếp cận tri thức và các giá trị xã hội.",
    listLabel: "Tại đây, con người học:",
    list: [
      "Kiến thức khoa học",
      "Kỹ năng sống",
      "Tinh thần hợp tác",
      "Ý thức trách nhiệm",
    ],
    note: "Nhà trường không chỉ đào tạo nghề nghiệp mà còn góp phần hình thành nhân cách và thế giới quan của mỗi cá nhân.",
    pin: "Nơi tri thức và thế giới quan được vun đắp.",
    img: "ảnh lớp học",
  },
  {
    n: "03",
    title: "Lao động",
    part: "Đôi tay",
    color: "#A2511F",
    lead: "Karl Marx đặc biệt nhấn mạnh vai trò của lao động trong việc tạo nên bản chất người.",
    listLabel: "Thông qua lao động:",
    list: [
      "Tạo ra của cải vật chất",
      "Cải tạo tự nhiên",
      "Phát triển năng lực bản thân",
      "Khẳng định giá trị cá nhân",
    ],
    note: "Lao động giúp con người khẳng định giá trị của mình trong xã hội. Chính vì vậy, lao động được xem là một trong những yếu tố quan trọng nhất làm nên bản chất con người.",
    pin: "Yếu tố cốt lõi làm nên bản chất con người.",
    img: "ảnh lao động",
  },
  {
    n: "04",
    title: "Bạn bè & cộng đồng",
    part: "Bàn tay nối",
    color: "#CBA45A",
    lead: "Con người không thể sống cô lập — cộng đồng là môi trường trưởng thành.",
    listLabel: "Thông qua bạn bè và cộng đồng:",
    list: [
      "Học cách hợp tác",
      "Học cách chia sẻ",
      "Phát triển kỹ năng giao tiếp",
      "Hình thành các giá trị sống",
    ],
    note: "Những người xung quanh có ảnh hưởng rất lớn đến suy nghĩ và hành vi của mỗi cá nhân. Ta lớn lên giữa những người xung quanh.",
    pin: "Ta lớn lên giữa những người xung quanh.",
    img: "ảnh cộng đồng",
  },
  {
    n: "05",
    title: "Văn hóa & truyền thống",
    part: "Cội rễ",
    color: "#7A5C3A",
    lead: "Mỗi dân tộc đều có những giá trị văn hóa riêng định hình con người trong cộng đồng đó.",
    listLabel: "Người Việt Nam được giáo dục:",
    list: [
      "Tinh thần đoàn kết",
      "Lòng yêu nước",
      "Hiếu thảo với cha mẹ",
      "Tôn trọng người lớn tuổi",
    ],
    note: "Những giá trị đó trở thành một phần trong bản sắc và nhân cách của mỗi người — dù họ có đi đâu, văn hóa vẫn đi theo.",
    pin: "Bản sắc khắc sâu trong mỗi con người.",
    img: "ảnh văn hóa Việt",
  },
  {
    n: "06",
    title: "Công nghệ & mạng xã hội",
    part: "Đôi chân số",
    color: "#4A7E7A",
    lead: "Trong thời đại số, mạng xã hội đã trở thành một quan hệ xã hội đặc biệt, định hình thế hệ mới.",
    listLabel: "TikTok, Facebook, Instagram ảnh hưởng đến:",
    list: [
      "Sở thích và thị hiếu",
      "Cách giao tiếp",
      "Quan điểm sống",
      "Xu hướng tiêu dùng",
    ],
    note: "Ngày nay, nhiều người trẻ tiếp cận thông tin và hình thành nhận thức xã hội thông qua môi trường trực tuyến — các quan hệ xã hội đang mở rộng sang không gian số.",
    pin: "Quan hệ xã hội mở rộng sang không gian số.",
    img: "ảnh mạng xã hội",
  },
];

// VII · Tính lịch sử
const HISTORICAL_NATURE = {
  kicker: "VII · Tính lịch sử của bản chất con người",
  title: "Bản chất con người thay đổi theo thời đại",
  intro:
    "Nếu bản chất con người là tổng hòa các quan hệ xã hội, và các quan hệ xã hội thay đổi theo lịch sử, thì bản chất con người cũng mang tính lịch sử.",
  eras: [
    {
      era: "Xã hội nguyên thủy",
      color: "#7A5C3A",
      relations: "Quan hệ cộng đồng bình đẳng, sở hữu tập thể",
      human:
        "Con người tập thể, phụ thuộc vào nhóm để sinh tồn, chưa có ý thức về 'cái tôi' cá nhân rõ ràng",
    },
    {
      era: "Xã hội phong kiến",
      color: "#A2511F",
      relations: "Quan hệ lãnh chúa–nông nô, đẳng cấp cứng nhắc",
      human:
        "Con người bị ràng buộc bởi thân phận, danh dự dòng họ, nghĩa vụ với lãnh chúa là ưu tiên hàng đầu",
    },
    {
      era: "Xã hội tư bản",
      color: "#6E7F4E",
      relations: "Quan hệ hàng hóa–tiền tệ, cạnh tranh cá nhân",
      human:
        "Con người cá nhân chủ nghĩa, đề cao tự do cá nhân, lợi ích kinh tế là động lực chính",
    },
    {
      era: "Xã hội hiện đại",
      color: "#4A7E7A",
      relations: "Quan hệ toàn cầu hóa, số hóa, đa văn hóa",
      human:
        "Con người phức tạp hơn, bản sắc đa chiều, chịu ảnh hưởng từ nhiều nền văn hóa và môi trường kỹ thuật số",
    },
  ],
  conclusion:
    "Không có 'bản chất người' vĩnh cửu, bất biến. Mỗi thế hệ, mỗi xã hội tạo ra kiểu con người của chính mình.",
};

// VIII · Dẫn chứng thực tiễn
const PRACTICAL_EVIDENCE = {
  kicker: "VIII · Dẫn chứng thực tiễn",
  title: "Dẫn chứng thực tiễn",
  intro:
    "Để chứng minh cho quan điểm của Karl Marx rằng \"Bản chất con người là tổng hòa các quan hệ xã hội\", chúng ta có thể nhìn vào nhiều hiện tượng thực tiễn trong đời sống hiện nay.",
  items: [
    {
      n: "1",
      color: "#C26B36",
      title: "Chuyển đổi số và trí tuệ nhân tạo (AI) tại Việt Nam",
      paragraphs: [
        "Trước hết, sự phát triển mạnh mẽ của công nghệ số và trí tuệ nhân tạo đang làm thay đổi sâu sắc môi trường học tập và làm việc của con người.",
        "Sinh viên ngày nay không thể quyết định việc AI có xuất hiện hay không, bởi đó là xu thế khách quan của xã hội. Tuy nhiên, mỗi người có thể chủ động thích nghi bằng cách học tập các kỹ năng mới như kỹ năng số, ngoại ngữ, tư duy phản biện và khả năng sáng tạo.",
        "Chính những mối quan hệ xã hội mới trong thời đại công nghệ đã góp phần hình thành nên mẫu con người hiện đại: năng động hơn, linh hoạt hơn và có tinh thần học tập suốt đời. Điều đó cho thấy con người không phát triển một cách tách biệt mà luôn chịu sự tác động của môi trường xã hội xung quanh.",
      ],
    },
    {
      n: "2",
      color: "#6E7F4E",
      title: "Đại dịch COVID-19",
      paragraphs: [
        "Một minh chứng rõ nét khác là đại dịch COVID-19.",
        "Không ai mong muốn hay lựa chọn sự xuất hiện của đại dịch. Tuy nhiên, trong hoàn cảnh khó khăn đó, hàng triệu người Việt Nam đã cùng nhau tham gia các hoạt động hỗ trợ cộng đồng như quyên góp nhu yếu phẩm, hỗ trợ người nghèo, tham gia lực lượng tuyến đầu chống dịch và giúp đỡ những hoàn cảnh khó khăn.",
        "Chính trong môi trường xã hội đặc biệt ấy, những phẩm chất tốt đẹp của con người Việt Nam như tinh thần đoàn kết, lòng nhân ái và trách nhiệm cộng đồng đã được thể hiện mạnh mẽ. Qua đó có thể thấy hoàn cảnh lịch sử và các quan hệ xã hội có ảnh hưởng sâu sắc đến sự hình thành và phát triển nhân cách con người.",
      ],
    },
    {
      n: "3",
      color: "#4A7E7A",
      title: "Phong trào tình nguyện của sinh viên",
      paragraphs: [
        "Bên cạnh đó, các phong trào tình nguyện cũng là một minh chứng sinh động.",
        "Những chương trình như \"Mùa hè xanh\", \"Tiếp sức mùa thi\", hiến máu nhân đạo hay các hoạt động bảo vệ môi trường không chỉ mang lại lợi ích cho cộng đồng mà còn giúp sinh viên rèn luyện bản thân.",
        "Thông qua quá trình tham gia các hoạt động xã hội, nhiều bạn trẻ đã thay đổi nhận thức, biết quan tâm đến người khác, sống có trách nhiệm và có ý thức cống hiến cho xã hội. Điều này chứng tỏ rằng những phẩm chất tốt đẹp của con người không tự nhiên có sẵn mà được hình thành, phát triển thông qua các mối quan hệ và hoạt động thực tiễn trong xã hội.",
      ],
    },
  ],
};

// XI · Kết luận
const CONCLUSION = {
  kicker: "XI · Kết luận nhân văn",
  headline: "Bản chất con người — tổng hòa của những gì ta đã sống, đã yêu, đã lao động.",
  lines: [
    ["Gia đình", "dạy chúng ta yêu thương."],
    ["Nhà trường", "dạy chúng ta tri thức."],
    ["Lao động", "giúp chúng ta trưởng thành."],
    ["Cộng đồng", "giúp chúng ta hoàn thiện bản thân."],
    ["Lịch sử", "đặt chúng ta vào đúng thời đại mình thuộc về."],
    ["Tha hóa", "nhắc chúng ta đấu tranh cho một xã hội tốt hơn."],
  ],
  body: [
    "Bởi vậy, bản chất con người không phải là thứ có sẵn bên trong mỗi cá nhân mà được hình thành trong quá trình sống, học tập, lao động và giao tiếp với xã hội.",
    "Nhận định của Karl Marx đến nay vẫn giữ nguyên giá trị — và thậm chí còn mang tính thời sự hơn trong thời đại số, khi môi trường xã hội của con người mở rộng ra không gian kỹ thuật số.",
    "Hiểu điều này, chúng ta hiểu rằng: để phát triển bản thân, mỗi người cần xây dựng những mối quan hệ xã hội tích cực và có trách nhiệm với cộng đồng.",
  ],
};

// V · Hoạt động tương tác (giữ cho tương thích)
const ACTIVITIES = [
  {
    n: "01",
    title: "Tôi là ai?",
    desc: "Người tham quan nhận một tờ giấy, trả lời và dán câu trả lời lên bảng.",
    questions: [
      "Nếu không có gia đình, bạn sẽ là ai?",
      "Nếu không có giáo dục, bạn sẽ là ai?",
      "Nếu không có bạn bè, bạn sẽ là ai?",
    ],
  },
  {
    n: "02",
    title: "Hoàn thiện mảnh ghép",
    desc: "Một hình người được ghép từ nhiều mảnh puzzle. Người xem ghép đủ các mảnh để tạo thành hình người hoàn chỉnh.",
    questions: ["Gia đình", "Nhà trường", "Lao động", "Bạn bè", "Văn hóa", "Công nghệ"],
  },
  {
    n: "03",
    title: "Thiếu một mảnh ghép",
    desc: "Người tham gia tháo một mảnh ghép bất kỳ. Khi đó hình người trở nên không hoàn chỉnh.",
    message: '“Không có cá nhân nào được hình thành ngoài các mối quan hệ xã hội.”',
  },
];

const NAV = [
  ["hero",       "Mở đầu"],
  ["history",    "Lịch sử"],
  ["comparison", "So sánh"],
  ["biosocial",  "Sinh học & XH"],
  ["totality",   "Tổng hòa"],
  ["pieces",     "Quan hệ XH"],
  ["historical", "Tính lịch sử"],
  ["practical",  "Dẫn chứng"],
  ["conclusion", "Kết luận"],
];

Object.assign(window, {
  MARX_QUOTE,
  HISTORY,
  COMPARISON,
  BIOSOCIAL,
  TOTALITY,
  PIECES,
  HISTORICAL_NATURE,
  PRACTICAL_EVIDENCE,
  CONCLUSION,
  ACTIVITIES,
  NAV,
});
