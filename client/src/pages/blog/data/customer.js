export const customers = {
  status: ["Đang hoạt động", "Ngưng hoạt động"],
  types: ["Cá nhân", "Doanh nghiệp"],
  assignees: [
    "Hoàng Trọng Minh",
    "Nguyễn Văn Quân",
    "Lê Xuân Vinh",
    "Nguyễn Văn Đạt",
  ],
};

export let data = [
  {
    _id: "Đang tải",
    creator: "Đang tải",
    title: "Đang tải",
    view: "Đang tải",
  },
];

export const changeData = (newData) => {
  data = newData;
};
