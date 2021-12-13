export default function getRandomColor() {
  const lightColor =
    "rgb(" +
    (Math.floor((256 - 99) * Math.random()) + 100) +
    "," +
    (Math.floor((256 - 99) * Math.random()) + 100) +
    "," +
    (Math.floor((256 - 99) * Math.random()) + 100) +
    ")";
  return lightColor;
}
