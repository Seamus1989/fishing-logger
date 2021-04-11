/* eslint-disable camelcase */
export const deviceWidth = Math.min(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.documentElement.clientWidth,
);

export const deviceHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.documentElement.clientHeight,
);

export const totalPlusIconWidth = 32;

export const rodEmoji = '🎣';
export const fishEmojis = ['🐟', '🐠', '🐡', rodEmoji];
const randomNumberGenerator = (num: number) =>
  Math.floor(num * fishEmojis.length);

export const randomFishEmojiGenerator = (num: number): string =>
  fishEmojis[randomNumberGenerator(num)];
