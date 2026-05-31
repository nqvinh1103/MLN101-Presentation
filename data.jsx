// ============================================================
//  NỘI DUNG — bám sát bản gốc, không thêm lý thuyết mới
// ============================================================

const MARX_QUOTE =
  "Bản chất con người không phải là một cái trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội.";

const INTRO = {
  kicker: "I · Giới thiệu",
  lead: "Trong cuộc sống hằng ngày, chúng ta thường nghĩ rằng mỗi người có một tính cách, suy nghĩ và bản chất riêng tồn tại độc lập với những người khác.",
  turn: "Tuy nhiên, Karl Marx đã đưa ra một quan điểm hoàn toàn khác.",
  body: [
    "Nhận định này khẳng định rằng con người không được hình thành một cách biệt lập mà luôn tồn tại trong các mối quan hệ xã hội. Chính những mối quan hệ đó tạo nên nhân cách, suy nghĩ, hành vi và giá trị sống của mỗi cá nhân.",
    "Sản phẩm “Mảnh Ghép Con Người” được xây dựng nhằm giúp người xem hiểu rằng không ai trở thành chính mình nếu tách khỏi xã hội.",
  ],
};

const MARX = {
  kicker: "II · Giải thích nhận định của Karl Marx",
  title: "Con người vừa là sản phẩm của tự nhiên, vừa là sản phẩm của xã hội",
  cards: [
    {
      tag: "Mặt sinh học",
      text: "Nếu xét về mặt sinh học, con người được sinh ra với những đặc điểm tự nhiên nhất định. Tuy nhiên, điều làm cho con người khác với các loài động vật không phải chỉ là cấu tạo cơ thể mà chính là đời sống xã hội.",
    },
    {
      tag: "Mặt xã hội",
      text: "Một đứa trẻ sinh ra không biết ngôn ngữ, đạo đức, văn hóa hay các quy tắc ứng xử. Thông qua quá trình sống trong gia đình, nhà trường và xã hội, đứa trẻ mới học được cách giao tiếp, lao động, suy nghĩ và hành động như một con người thực sự.",
    },
  ],
  conclusion:
    "Vì vậy, bản chất con người không phải là thứ tồn tại sẵn từ khi sinh ra mà được hình thành và phát triển trong quá trình tham gia vào các quan hệ xã hội.",
};

// 6 mảnh ghép — thứ tự khớp với 6 mảnh của hình người 3D
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
    note: "Một đứa trẻ lớn lên trong môi trường được yêu thương thường có xu hướng tự tin và tích cực hơn. Ngược lại, trẻ em thường xuyên chịu bạo lực gia đình có nguy cơ gặp các vấn đề tâm lý và hành vi.",
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
    lead: "Karl Marx đặc biệt nhấn mạnh vai trò của lao động.",
    listLabel: "Thông qua lao động:",
    list: [
      "Tạo ra của cải vật chất",
      "Cải tạo tự nhiên",
      "Phát triển năng lực bản thân",
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
    lead: "Con người không thể sống cô lập.",
    listLabel: "Thông qua bạn bè và cộng đồng:",
    list: [
      "Học cách hợp tác",
      "Học cách chia sẻ",
      "Phát triển kỹ năng giao tiếp",
      "Hình thành các giá trị sống",
    ],
    note: "Những người xung quanh có ảnh hưởng rất lớn đến suy nghĩ và hành vi của mỗi cá nhân.",
    pin: "Ta lớn lên giữa những người xung quanh.",
    img: "ảnh cộng đồng",
  },
  {
    n: "05",
    title: "Văn hóa & truyền thống",
    part: "Cội rễ",
    color: "#7A5C3A",
    lead: "Mỗi dân tộc đều có những giá trị văn hóa riêng.",
    listLabel: "Người Việt Nam được giáo dục:",
    list: [
      "Tinh thần đoàn kết",
      "Lòng yêu nước",
      "Hiếu thảo với cha mẹ",
      "Tôn trọng người lớn tuổi",
    ],
    note: "Những giá trị đó trở thành một phần trong bản sắc và nhân cách của mỗi người.",
    pin: "Bản sắc khắc sâu trong mỗi con người.",
    img: "ảnh văn hóa Việt",
  },
  {
    n: "06",
    title: "Công nghệ & mạng xã hội",
    part: "Đôi chân số",
    color: "#4A7E7A",
    lead: "Trong thời đại số, mạng xã hội đã trở thành một quan hệ xã hội đặc biệt.",
    listLabel: "TikTok, Facebook, Instagram hay YouTube ảnh hưởng mạnh mẽ đến:",
    list: [
      "Sở thích",
      "Cách giao tiếp",
      "Quan điểm sống",
      "Xu hướng tiêu dùng",
    ],
    note: "Ngày nay, nhiều người trẻ tiếp cận thông tin và hình thành nhận thức xã hội thông qua môi trường trực tuyến. Điều đó cho thấy các quan hệ xã hội đang mở rộng từ thế giới thực sang không gian số.",
    pin: "Quan hệ xã hội mở rộng sang không gian số.",
    img: "ảnh mạng xã hội",
  },
];

// IV · Dẫn chứng — kèm "Lời dẫn" để thuyết trình trực tiếp
const EVIDENCE = [
  {
    n: "01",
    title: "Ảnh hưởng của mạng xã hội",
    core: "Nhiều bạn trẻ thay đổi cách ăn mặc, cách nói chuyện và thậm chí định hướng nghề nghiệp dựa trên những nội dung họ tiếp xúc hằng ngày trên mạng xã hội.",
    proves:
      "Điều này chứng minh môi trường xã hội có khả năng tác động trực tiếp đến nhận thức và hành vi của con người.",
    script:
      "Hãy thử quan sát chính chúng ta: một trào lưu trên mạng có thể khiến cả một thế hệ thay đổi gu thời trang, cách nói chuyện, thần tượng, thậm chí lựa chọn ngành nghề tương lai. Khi môi trường trực tuyến thay đổi, con người trong đó cũng thay đổi theo — đúng như Marx nói, bản chất ấy được định hình bởi các quan hệ xã hội mà ta tham gia.",
  },
  {
    n: "02",
    title: "Đại dịch COVID-19",
    core: "Trong thời gian giãn cách xã hội, nhiều người cảm thấy cô đơn, căng thẳng và suy giảm sức khỏe tinh thần.",
    proves:
      "Sự kiện này cho thấy con người luôn cần các mối quan hệ xã hội để phát triển bình thường.",
    script:
      "Khi các mối quan hệ xã hội bị cắt đứt trong giãn cách, ta mới thấy chúng quan trọng đến nhường nào. Thiếu đi sự gặp gỡ, sẻ chia và kết nối, con người trở nên trống trải và mệt mỏi. Điều đó chứng minh: quan hệ xã hội không phải thứ trang trí cho cuộc sống — nó là điều kiện để con người phát triển bình thường.",
  },
  {
    n: "03",
    title: "Giáo dục",
    core: "Hai người có xuất phát điểm tương tự nhưng được học tập trong những môi trường giáo dục khác nhau thường có tư duy, kỹ năng và cơ hội phát triển khác nhau.",
    proves:
      "Điều đó cho thấy xã hội góp phần tạo nên sự khác biệt giữa các cá nhân.",
    script:
      "Cùng một điểm khởi đầu, nhưng đặt vào hai môi trường giáo dục khác nhau, hai con người sẽ lớn lên với tư duy, kỹ năng và cơ hội rất khác biệt. Không phải vì họ sinh ra đã khác nhau, mà vì những quan hệ xã hội xung quanh đã nhào nặn nên họ theo những cách khác nhau.",
  },
];

// V · Hoạt động tương tác (mô tả booth)
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
    questions: [
      "Gia đình",
      "Nhà trường",
      "Lao động",
      "Bạn bè",
      "Văn hóa",
      "Công nghệ",
    ],
  },
  {
    n: "03",
    title: "Thiếu một mảnh ghép",
    desc: "Người tham gia tháo một mảnh ghép bất kỳ. Khi đó hình người trở nên không hoàn chỉnh.",
    message:
      "“Không có cá nhân nào được hình thành ngoài các mối quan hệ xã hội.”",
  },
];

const CONCLUSION = {
  kicker: "V · Thông điệp kết luận",
  headline: "Mỗi con người là kết quả của vô số mối quan hệ xã hội.",
  lines: [
    ["Gia đình", "dạy chúng ta yêu thương."],
    ["Nhà trường", "dạy chúng ta tri thức."],
    ["Lao động", "giúp chúng ta trưởng thành."],
    ["Cộng đồng", "giúp chúng ta hoàn thiện bản thân."],
  ],
  body: [
    "Bởi vậy, bản chất con người không phải là thứ có sẵn bên trong mỗi cá nhân mà được hình thành trong quá trình sống, học tập, lao động và giao tiếp với xã hội.",
    "Nhận định của Karl Marx đến nay vẫn giữ nguyên giá trị, giúp chúng ta hiểu rằng để phát triển bản thân, mỗi người cần xây dựng những mối quan hệ xã hội tích cực và có trách nhiệm với cộng đồng.",
  ],
};

const NAV = [
  ["hero", "Mở đầu"],
  ["intro", "Giới thiệu"],
  ["marx", "Karl Marx"],
  ["pieces", "6 mảnh ghép"],
  ["evidence", "Dẫn chứng"],
  ["conclusion", "Kết luận"],
];

Object.assign(window, {
  MARX_QUOTE,
  INTRO,
  MARX,
  PIECES,
  EVIDENCE,
  ACTIVITIES,
  CONCLUSION,
  NAV,
});
