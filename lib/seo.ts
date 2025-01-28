export const seo = {
  title: 'zzzhizhi | 开发者、创造力、细节控、探索者',
  description:
    '我是 zzzhizhi，独立开发者，开源热爱者。希望人生可以做出一些用心的 think different 的作品，或许它像鱿鱼干一样耐嚼，又或如爆裂鼓手那般热烈。但总之，希望当有一天我回望我的一生时，会由衷的感慨道，这真的是很有意思的旅途。Coding is love, coding to the world is full of love!',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://zzzhizhi.top'
      : 'http://localhost:3000'
  ),
} as const
