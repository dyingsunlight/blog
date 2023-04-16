---
layout: post
title: "论如何更好的充分白嫖 GitHub Actions 指南"
date: 2023-04-16 23:27:58 +0800
---

## 序言

简单概况来说
[GitHub Actions](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions) 
是 Github 为项目提供持续集成功能的一部分，私有项目每个月有 2000 分钟的执行时间配额，而公开项目则可以
[不受时间限制](https://docs.github.com/zh/billing/managing-billing-for-github-actions/about-billing-for-github-action)
的使用 GitHub Actions 执行任务。   

就像下单前肯定会找优惠券一样，作为一名薅过无数云服务的羊毛全栈开发，这免费的计算资源的勾起了我的觊觎已经很久了。 

GitHub Actions 任务运行时可以正常的访问网络资源，但它本身是不会被分配到公网 ip 的，这样就极大的限制了它的用途。
根据不同的用途，接下来将详细介绍如何实现白嫖。



### 风险警告
***注意，本文仅从技术层面进行探讨各种可能实现方案从而帮助理解网络原理，请勿用于实际用途。***   
***注意，GitHub 使用条款中明确声明 GitHub 可以[无理由封禁](https://docs.github.com/zh/site-policy/github-terms/github-terms-of-service#3-github-may-terminate)任何账户。***

--------

### GitHub 项目地址
[Free-Rider](https://github.com/dyingsunlight/free-rider)
~~免费的骑士~~

---------
## 现在开始吧

### 示例
#### 使用 Github Actions 代理上网 
众所周知，代理请求上网对于连接和流量的消耗巨大。`Ngrok` 等一众工具不仅仅延迟高，而且被严格限制协议或者流量，明显它们已经无法适应新版本的环境，要寻找新的解决方案了。

这里的方案选择的是组建
[虚拟局域网（VLAN）](https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E5%B1%80%E5%9F%9F%E7%BD%91)
，可用方案非常多了，比如
- [ZeroTie](https://www.zerotier.com)
- [Tailscale](https://tailscale.com)

尽管这两家的用例都会给出，但只推荐使用 `ZeroTie`， `Tailscale` 只能使用设备别名而不能使用固定的 IP 地址，并且设备别名同步并不是有延迟，
这使得客户端无法及时的知道服务器可能已经发生变动，导致网络中断。

##### 流程
- GitHub Actions 任务中安装 ZeroTie/Tailscale，并且设置定时任务和任务超时，使得任务和超时直接尽可能无缝连接
- GitHub Actions 任务执行 ZeroTie/Tailscale，将当前机器注册到某个固定地址或者别名
- GitHub Actions 任务中生成服务端配置，并且初始化服务端


##### 效果评测
从连接效果上来看，无论和 ZeroTier 或者是 Tailscale 都能实现打洞直连不使用 relay 中转，实际网络性能测试可以达到 `250ms`/`50Mbps` 的水准，但延迟波动不稳定。
![zero-tier](/assets/github-actions-free-rider/zero-tier.png)
![tailscale.png](/assets/github-actions-free-rider/tailscale.png)

![azure.jpg](/assets/github-actions-free-rider/azure-ip.jpg)

遗憾的是，这个方法是无法在移动端使用。尽管 zerotier 和 tailscale 有提供 App 客户端，但是它们运行时需要占用 VPN 功能来实现组网。

#### 使用 Github Actions 搭建网站
众所周知，一个网站至少需要有地址和服务器构成。思路很简单，既然 GitHub Actions 任务没有公网 IP，那么自己做内网穿透就可以了。
##### 流程
以 [Ngrok](https://ngrok.com) 内网穿透为例，大致流程如下：
- 以服务的形式，执行你的 web 服务器 (推荐使用 Docker 镜像)
- GitHub Actions 安装 Ngrok
- 执行 Ngrok 取得可访问 `Ngrok 域名`，注意 Ngrok 的免费账户获得的 `Ngrok 域名` 是***随机***的
- 域名托管于 [Cloudflare](https://www.cloudflare.com/) DNS，因此这里可以 Cloudflare DNS API 将 `Ngrok 域名` 更新到网站的 CNAME 记录上即可

`Ngrok` 但免费账户有着严格限制每分钟的连接数和流量限制，实际使用中 `Ngrok` 穿透只适合小流量的网站，另外有许多其它类似的替代产品诸如：
- [Localtunnel](https://localtunnel.github.io/www/)
- [Serveo](https://serveo.net/)
- [Pagekite](https://pagekite.net/)

实际场景中可用选配其中一个或者多个使用，但无论如何，这些工具的稳定性都仍然有着较高的提升空间。
### 总结
总的来说，这个东西目前只能图一乐，不推荐真拿来日常使用。

未完待续
