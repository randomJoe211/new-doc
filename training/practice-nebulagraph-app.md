# 基于 NebulaGraph 的智能问答机器人应用

<iframe src="//player.bilibili.com/player.html?aid=647525312&bvid=BV1he4y1W76N&cid=891346458&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="720px" height="480px"> </iframe>

本文给大家简单演示如何开发一个基于 NebulaGraph 的智能问答机器人应用。细节说明可以在这个示例项目作者的[博客](https://www.siwei.io/siwi)中查看。

## 前言

像一般的 Web 应用之于数据库一样，一个典型的基于 NebulaGraph 的传统线上应用可以由三部分组成：

- 前端：作为人机交互界面，调用后端 API。
- 后端：处理基于 Web 的 API，生成 NebulaGraph 图数据库的查询语句，请求 NebulaGraph，处理结果返回 API 调用方。
- 图数据库：NebulaGraph。

## 数据建模

示例使用的数据集为`basketballplayer` 这个数据集。

用户可以下载示例数据集 [basketballplayer 文件](https://docs.nebula-graph.io/2.0/basketballplayer-2.X.ngql)，然后使用 NebulaGraph Console，使用选项`-f`执行脚本。

## 应用设计

### 前端

我们用 VueJS 做一个带有文字和语音输入输出的机器人界面，它能接受问题，透过后端处理问题，返回问题的答案。这其中用到了 Vue Bot UI 这个项目和 Chrome 浏览器的 Web Speech API。

下图为前端界面，我们可以看到提出的问题和回复的答案，以及右边浏览器调试 console 里返回数据的结构。

![vue_app](https://docs-cdn.nebula-graph.com.cn/figures/courses/vue_app_221117.png)

### 后端

我们用 Python Flask 作为 Web 框架，用 Nebula-Python 作为后端访问 NebulaGraph。

当一个前端的语句通过 RESTful API 发送到后端应用的时候，我们要实现的逻辑是：

1. 对语句进行意图识别和语义处理，得到问句的意图（Intent，例如“查关联”）与问句涉及的实体（Entities，例如“Yao Ming” 与“火箭队”）。

2. 根据不同意图，再构造图库查询（Intent Actor），调用 Nebula-Python 访问 NebulaGraph，通过 nGQL 查询结果。

3. 将结果处理为人能够理解的答案语句并返回。

架构和流程如下：

```bash
┌────────────────┬──────────────────────────────────────┐
│                │                                      │
│                │  Speech                              │
│     ┌──────────▼──────────┐                           │
│     │            Frontend │   Siwi, /ˈsɪwi/           │
│     │ Web_Speech_API      │   A PoC of                │
│     │                     │   Dialog System           │
│     │ Vue.JS              │   With Graph Database     │
│     │                     │   Backed Knowledge Graph  │
│     └──────────┬──────────┘                           │
│                │  Sentence                            │
│                │                                      │
│   ┌────────────┼──────────────────────────────┐       │
│   │            │                              │       │
│   │            │              Backend         │       │
│   │ ┌──────────▼──────────┐                   │       │
│   │ │ Web API, Flask      │   ./app/          │       │
│   │ └──────────┬──────────┘                   │       │
│   │            │  Sentence    ./bot/          │       │
│   │ ┌──────────▼──────────┐                   │       │
│   │ │                     │                   │       │
│   │ │ Intent matching,    │   ./bot/classifier│       │
│   │ │ Symentic Processing │                   │       │
│   │ │                     │                   │       │
│   │ └──────────┬──────────┘                   │       │
│   │            │  Intent, Entities            │       │
│   │ ┌──────────▼──────────┐                   │       │
│   │ │                     │                   │       │
│   │ │ Intent Actor        │   ./bot/actions   │       │
│   │ │                     │                   │       │
│   └─┴──────────┬──────────┴───────────────────┘       │
│                │  Graph Query                         │
│     ┌──────────▼──────────┐                           │
│     │                     │                           │
│     │ Graph Database      │    Nebula Graph           │
│     │                     │                           │
│     └─────────────────────┘                           │
│                                                       │
│                                                       │
│                                                       │
└───────────────────────────────────────────────────────┘
```

![vue_app](https://docs-cdn.nebula-graph.com.cn/figures/courses/answer_221117.png)

## 代码

我们不会讲解实际应用的代码，欢迎访问[代码仓库](https://github.com/wey-gu/nebula-siwi/)进行了解、讨论。代码的目录如下。

```bash
.
├── README.md
├── src
│   ├── siwi                        # Siwi-API Backend
│   │   ├── app                     # Web Server, take HTTP requests and calls Bot API
│   │   └── bot                     # Bot API
│   │       ├── actions             # Take Intent, Slots, Query Knowledge Graph here
│   │       ├── bot                 # Entrypoint of the Bot API
│   │       ├── classifier          # Symentic Parsing, Intent Matching, Slot Filling
│   │       └── test                # Example Data Source as equivalent/mocked module
│   └── siwi_frontend               # Browser End
│       ├── README.md
│       ├── package.json
│       └── src
│           ├── App.vue             # Listening to user and pass Questions to Siwi-API
│           └── main.js
└── wsgi.py
```
