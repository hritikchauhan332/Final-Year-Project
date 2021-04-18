export const button_primary = "#0080ff";
export const name_color = "#000080";

export const randomCardColors = [
  "#CCFF99",
  "#FFCC66",
  "#CC66FF",
  "#F39C12",
  "#66CCFF",
  "#76D7C4",
];

export const randomAvatarColors = [
  "#33CC00",
  "#990000",
  "#990066",
  "#009900",
  "#3300FF",
];

export const getRandomColors = (colors) => {
  const index = Math.ceil(Math.random() * 10) % 5;
  console.log("index", index);
  return colors[index];
};
