(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-019b050c"],{4421:function(b,a,t){},"9fcc":function(b,a,t){"use strict";t.r(a);var s=t("7a23"),r=Object(s["ab"])("data-v-072b46b1");Object(s["I"])("data-v-072b46b1");var S={class:"app-wrapper"},d=Object(s["l"])('<div style="background:#ececec;padding:30px;" data-v-072b46b1><strong data-v-072b46b1>1.背景介绍</strong><br data-v-072b46b1> 前端组件化，这是一个概念，也是一种技术。那么为什么要实现前端组件化？ <br data-v-072b46b1><strong data-v-072b46b1>2.知识剖析</strong><br data-v-072b46b1> 传统开发方式效率低以及维护成本高的主要原因在于很多时候是将一个系统做成了整块应用， 而且往往随着业务的增长或者变更，系统的复杂度会呈现指数级的增长， 经常出现的情况就是一个小小的改动或者一个小功能的增加可能会引起整体逻辑的修改，造成牵一发而动全身。 <br data-v-072b46b1> 针对此弊端，其实业界早就有了一些探索，我们希望一个大且复杂的场景能够被分解成几个小的部分， 这些小的部分彼此之间互不干扰，可以单独开发，单独维护，而且他们之间可以随意的进行组合。 就拿电脑主机来说，一台整机包括CPU，主板，内存，硬盘等等，而这些部件其实都是由不同的公司进行生产的， 他们彼此之间根据一套标准分别生产，最后组装在一起。当某个部件出现问题时，不需要将整台主机都进行维修， 只需要将坏的部件拿下来，维修之后再将其组合上就可以了。这种化繁为简的思想在后端开发中的体现是微服务，而在前端开发中的体现就是组件化。 <br data-v-072b46b1><strong data-v-072b46b1>3.常见问题 CSS怎么做组件化呢？为什么要做组件化？</strong><br data-v-072b46b1><strong data-v-072b46b1>4.解决方案</strong><br data-v-072b46b1> CSS的模块化基本上是将实现某一模块Dom样式的CSS放在不同的文件中， 显然随着WEB应用的发展，开发者已经很不满足于这种简单的模块化了。 其实关于CSS的组件化，业界也早就已经有了很多探索，比如less，sass等。 那么为什么CSS也要组件化呢？ <br data-v-072b46b1> 从开发者角度来看：在CSS上，保证代码上的模块化，具有独立作用域； 内部的布局，字体的变化(不包括颜色这类是不可控的)只由其最外层容器影响。 概括的说就是，组件内部的布局只受容器变化影响。 在容器不受外部影响变化的前提下，内部容器的样式不被外部所影响 <br data-v-072b46b1> 从整个公司的发展来看：业务划分更佳清晰，新人接手更佳容易，可以按组件分配开发任务。 项目可维护性更强，提高开发效率。 更好排查问题，某个组件出现问题，直接对组件进行处理。 开发测试过程中，可以只编译自己那部分代码，不需要编译整个项目代码。 <br data-v-072b46b1> CSS是一种扁平的结构，一个Dom可能对应着一个CSS样式，而这些CSS样式很有可能出现公共的部分， 那么提取这些公共的部分也就实现了CSS的组件化，在诸如less和sass出现之前， 开发者都是把公共的CSS样式写成一个个公共class，但是这样之后CSS文件的阅读性就变得困难了， 当然也不容易修改。而less和sass出现之后，使得CSS的编程可以定义变量， 可以实现继承，CSS内容的结构也变得更加清晰，提高了CSS文件的阅读性，更容易让人理解，修改起来也变得简单。 </div>',1);Object(s["G"])();var c=r((function(b,a,t,r,c,n){return Object(s["F"])(),Object(s["j"])("div",S,[d])})),n={};t("acba");n.render=c,n.__scopeId="data-v-072b46b1";a["default"]=n},acba:function(b,a,t){"use strict";t("4421")}}]);
//# sourceMappingURL=chunk-019b050c.36ed4932.js.map