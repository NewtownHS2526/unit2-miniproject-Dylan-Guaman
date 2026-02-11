
// This function generates a random number from 1 -100
// This function generates a random number from 1-100
const getRandomInt = () =>
  Math.floor(Math.random() * 100) + 1;


// This function takes in a hex string and returns true if its a "dark" color and false if its not.
const is_dark = (hexNum) => {
  const hex = String(hexNum).replace("#", "");
  if (!/^([0-9a-fA-F]{6})$/.test(hex)) return false;
  const rgb = hex.match(/.{1,2}/g).map((c) => parseInt(c, 16));
  const [r, g, b] = rgb;

  const srgb = [r, g, b].map((v) => v / 255);
  const linear = srgb.map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  const luminance = 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];

  return luminance < 0.5;
};