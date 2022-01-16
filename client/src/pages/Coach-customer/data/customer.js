export const customers = {
  status: ["Đang hoạt động", "Ngưng hoạt động"],
  types: ["Cá nhân", "Doanh nghiệp"],
  assignees: [
    // "Hoàng Trọng Minh",
    // "Nguyễn Văn Quân",
    // "Lê Xuân Vinh",
    // "Nguyễn Văn Đạt",
  ],
};

export let data = [
  {
    _id: "Đang tải",
    name: "Đang tải",
    gender: "Đang tải",
    phone: "Đang tải",
  },
  {
    _id: "Đang tải",
    name: "Đang tải",
    gender: "Đang tải",
    phone: "Đang tải",
  },
];

export const changeData = (newData) => {
  data = newData;
};
