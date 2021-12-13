export default function getRandomColor() {
  const darkColor =
    "rgb(" +
    Math.random() * 200 +
    "," +
    Math.random() * 200 +
    "," +
    Math.random() * 200 +
    ")";
  return darkColor;
}
