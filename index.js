const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
// 定义文章数据
const articles = [
  {
    id: 1,
    title: "箭头函数与普通函数",
    author: "dou",
    description:
      "本文详细介绍了箭头函数与普通函数的区别，包括 this 绑定、arguments 对象等方面的对比。",
    update_time: "2024-08-21",
  },
  {
    id: 2,
    title: "Vue 3 组合式 API 入门",
    author: "dou",
    description:
      "Vue 3 的组合式 API 提供了更灵活的逻辑复用方式，本文将带你快速上手组合式 API。",
    update_time: "2024-08-22",
  },
  {
    id: 3,
    title: "JavaScript 闭包详解",
    author: "dou",
    description:
      "闭包是 JavaScript 中的重要概念，本文将深入探讨闭包的原理及其在实际开发中的应用。",
    update_time: "2024-08-23",
  },
  {
    id: 4,
    title: "React Hooks 使用指南",
    author: "dou",
    description:
      "React Hooks 是 React 16.8 引入的新特性，本文将介绍如何使用 Hooks 来管理状态和副作用。",
    update_time: "2024-08-24",
  },
  {
    id: 5,
    title: "TypeScript 类型系统深入",
    author: "dou",
    description:
      "TypeScript 的类型系统非常强大，本文将深入探讨类型推断、泛型、联合类型等高级特性。",
    update_time: "2024-08-25",
  },
  {
    id: 6,
    title: "前端性能优化实践",
    author: "dou",
    description:
      "前端性能优化是提升用户体验的关键，本文将分享一些常见的性能优化技巧和最佳实践。",
    update_time: "2024-08-26",
  },
  {
    id: 7,
    title: "Node.js 异步编程模型",
    author: "dou",
    description:
      "Node.js 的异步编程模型是其核心特性之一，本文将介绍回调、Promise 和 async/await 的使用。",
    update_time: "2024-08-27",
  },
  {
    id: 8,
    title: "Webpack 配置详解",
    author: "dou",
    description:
      "Webpack 是现代前端开发中不可或缺的工具，本文将详细介绍如何配置 Webpack 以满足项目需求。",
    update_time: "2024-08-28",
  },
  {
    id: 9,
    title: "CSS Grid 布局实战",
    author: "dou",
    description:
      "CSS Grid 是一种强大的布局方式，本文将通过实战案例展示如何使用 CSS Grid 实现复杂布局。",
    update_time: "2024-08-29",
  },
  {
    id: 10,
    title: "vue响应式底层",
    author: "dou",
    description:
      "Vue 的响应式系统是其核心特性之一，本文将深入探讨 Vue 响应式原理及其底层实现。",
    update_time: "2025-01-01",
  },
];

// 归档数据
const archives = [
  {
    id: 1,
    year: "2024",
    aticle: [
      {
        id: 4,
        title: "React Hooks 使用指南",
        update_time: "2024-08-24",
      },
      {
        id: 5,
        title: "TypeScript 类型系统深入",
        update_time: "2024-08-25",
      },
      {
        id: 6,
        title: "前端性能优化实践",
        update_time: "2024-08-26",
      },
      {
        id: 7,
        title: "Node.js 异步编程模型",
        update_time: "2024-08-27",
      },
      {
        id: 8,
        title: "Webpack 配置详解",
        update_time: "2024-08-28",
      },
      {
        id: 9,
        title: "CSS Grid 布局实战",
        update_time: "2024-08-29",
      },
      {
        id: 10,
        title: "vue响应式底层",
        update_time: "2025-01-01",
      },
    ],
  },
  {
    id: 2,
    year: "2023",
    aticle: [
      {
        id: 1,
        title: "箭头函数与普通函数",
        update_time: "2024-08-21",
      },
      {
        id: 2,
        title: "Vue 3 组合式 API 入门",
        update_time: "2024-08-22",
      },
      {
        id: 3,
        title: "JavaScript 闭包详解",
        update_time: "2024-08-23",
      },
    ],
  },
];

// 定义 /api/articles 接口
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.get("/api/archives", (req, res) => {
  res.json(archives);
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
