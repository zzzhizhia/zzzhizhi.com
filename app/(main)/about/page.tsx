/* eslint-disable simple-import-sort/imports */
import React from 'react'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import MetamaskCode from './metamask-code.png'
import WechatAppreciationCode from './wechat-appreciation-code.png'

const description = '我是 zzzhizhi，独立开发者，开源热爱者。希望人生可以做出一些用心的 think different 的作品，或许它像鱿鱼干一样耐嚼，又或如爆裂鼓手那般热烈。但总之，希望当有一天我回望我的一生时，会由衷的感慨道，这真的是很有意思的旅途。Coding is love, coding to the world is full of love!'
const title = '关于我'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Hi, zzzhizhi
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>Coding is love, coding to the world is full of love!</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>构成要素</h2>
        <table>
          <thead>
            <tr>
              <th>元素</th>
              <th>特征</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>名称</td>
              <td>zzzhizhi</td>
            </tr>
            <tr>
              <td>生日</td>
              <td>09-14</td>
            </tr>
            <tr>
              <td>MBTI</td>
              <td>ENFP</td>
            </tr>
            <tr>
              <td>坐标</td>
              <td>上海</td>
            </tr>
            <tr>
              <td>最喜欢的颜色</td>
              <td>白色</td>
            </tr>
          </tbody>
        </table>

        <h2>性格属性</h2>
        <p><strong>外向 vs. 内向</strong>：讨论计算机及其它专业领域话题时外向，娱乐性话题内向（可能缘于本人较少接触娱乐性内容）。一对一交际外向，人群中交流视话题而定。</p>
        <p><strong>安静 vs. 喧闹</strong>：偏爱安静的氛围，除非环境本应喧闹（如鼓掌）。</p>
        <p><strong>专注 vs. 分心</strong>：对于一件热衷的事物，往往会废寝忘食。</p>
        <p><strong>考究 vs. 随意</strong>：计算机领域反对过时特性，追求完美，衣着打扮毫无要求。对于造成长期影响的选择，比如为项目挑选技术栈、挑选一部新设备等，一般会抱着强迫症去做出尽量完美的选择；对于造成短期影响或影响不重要的选择，比如中午吃什么等，一般选择随意。</p>
        <p><strong>贝叶斯主义 vs. 频率主义</strong>：不同场景自由切换，判定标准比较复杂；两者通常共存。</p>
        <p><strong>理性 vs. 感性</strong>：不同场景自由切换，判定标准比较复杂。</p>
        <p><strong>理科 vs. 文科</strong>：对理科更感兴趣，但更擅长文科。</p>
        <p><strong>交际</strong>：喜欢和能力强的人交友、聊天。</p>
        <p><strong>习性</strong>：夜猫子，夜晚思维活跃，工作效率高；蛰居简出。</p>
        <p><strong>反对专利</strong>：营造科技壁垒的工具，阻碍科学技术进步。尤其反对计算机程序专利。</p>

        <h2>兴趣爱好</h2>
        <p><strong>开源热爱者</strong>：喜欢使用和编写开源软件。</p>
        <p><strong>自由工作</strong>：喜欢独立自由开发。</p>
        <p><strong>探究性学习</strong>：折腾是一种享受，但效率不高会慎用。</p>
        <p><strong>费曼学习法</strong>：常常输出所学知识。</p>
        <p><strong>交流技术</strong>：喜欢听各路大佬的技术分享。</p>

        <h2>名字由来</h2>
        <details>
          <summary>zzzhizhi</summary>
          <p>我的正式对外名称，读作 “致之” 。有时因名称重复，作 “zzzhizhia”。</p>
        </details>
        <details>
          <summary>致之</summary>
          <p>我的字，化用自西汉戴圣《礼记·大学》“致知在格物，物格而后知至”。意为通过实际行动、努力和过程来实现理想、认知目标，在“格物”之上，达到理性的“知”。</p>
        </details>

        <h2>一些经历</h2>
        <ul>
          <li>
            <strong>2022.05 - now</strong> 
            LPS（创始人、服主）
          </li>
          <li>
            <strong>2024.05 - now</strong> 
            <RichLink href="https://www.ccf.org.cn" target="_blank">
            CCF
            </RichLink>
            （学生会员）
          </li>
          <li>
            <strong>2024.07 - 2025.07</strong> 
            <RichLink href="https://drim.cc" target="_blank">
            DrimTech
            </RichLink>
            （联合创始人、社长）
          </li>
          <li>
            <strong>2024.08 - now</strong> 
            <RichLink href="https://www.tgfmc.top" target="_blank">
            MOC
            </RichLink>
            （文化项目综合体）
          </li>
          <li>
            <strong>2024.10</strong> 
            <RichLink href="https://www.bilibili.com/video/BV1JD1vYRED1" target="_blank">
            MOL 2024
            </RichLink>
            （歌手）
          </li>
          <li>
            <strong>2025.01 - now</strong> 
            MOC/Sizha（服管）
          </li>
          <li>
            <strong>2025.01 - now</strong> 
            <RichLink href="https://xku.ourmoc.cn" target="_blank">
            XKU-SCS
            </RichLink>
            （讲师）
          </li>
        </ul>

        <h2>域名</h2>
        <p><strong>zzzhizhi.com</strong>：个人域名</p>
        <p><strong>zzzhizhi.top</strong>：曾用域名</p>
        <p><strong>drim.cc</strong>：社团域名</p>
        <p><strong>lpslps.com</strong>：MC 服务器域名</p>

        <h2>装备</h2>
        <ul>
          <li>iPhone 12 Pro</li>
          <li><s>Vivo X9s</s></li>
          <li>MECHREVO Jiguang Pro (2023)</li>
          <li><s>MacBook Air 11&#39; (2015)</s></li>
          <li><s>MacBook Pro 15&#39; (2011)</s></li>
          <li>OPPO A2 Pro 5G</li>
          <li>YIMTURM PAMIKANG 5G</li>
          <li>Airpods 4</li>
          <li>KOOTION X1 MAX (512G)</li>
        </ul>

        <h2>喂食渠道</h2>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={WechatAppreciationCode}
            alt="WeChat 赞赏码"
            className="max-w-full"
          />
          <Image
            src={MetamaskCode}
            alt="Metamask 钱包"
            className="max-w-full"
          />
        </p>
      </article>
    </Container>
  )
}
