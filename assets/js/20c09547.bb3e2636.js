"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[437],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=i,g=u["".concat(l,".").concat(c)]||u[c]||h[c]||r;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},954:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const r={},o="What is Nebula Graph",s={unversionedId:"introduction/what-is-nebula-graph",id:"introduction/what-is-nebula-graph",title:"What is Nebula Graph",description:"Nebula Graph is an open-source, distributed, easily scalable, and native graph database. It is capable of hosting graphs with hundreds of billions of vertices and trillions of edges, and serving queries with millisecond-latency.",source:"@site/docs/2.introduction/4.what-is-nebula-graph.md",sourceDirName:"2.introduction",slug:"/introduction/what-is-nebula-graph",permalink:"/introduction/what-is-nebula-graph",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/docs/2.introduction/4.what-is-nebula-graph.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Related technologies",permalink:"/introduction/related-tech"},next:{title:"NebulaGraph Architecture",permalink:"/category/nebulagraph-architecture"}},l={},d=[{value:"What is a graph database",id:"what-is-a-graph-database",level:2},{value:"Advantages of Nebula Graph",id:"advantages-of-nebula-graph",level:2},{value:"Open source",id:"open-source",level:3},{value:"Outstanding performance",id:"outstanding-performance",level:3},{value:"High scalability",id:"high-scalability",level:3},{value:"Developer friendly",id:"developer-friendly",level:3},{value:"Reliable access control",id:"reliable-access-control",level:3},{value:"Diversified ecosystem",id:"diversified-ecosystem",level:3},{value:"OpenCypher-compatible query language",id:"opencypher-compatible-query-language",level:3},{value:"Future-oriented hardware with balanced reading and writing",id:"future-oriented-hardware-with-balanced-reading-and-writing",level:3},{value:"Easy data modeling and high flexibility",id:"easy-data-modeling-and-high-flexibility",level:3},{value:"High popularity",id:"high-popularity",level:3},{value:"Use cases",id:"use-cases",level:2},{value:"Fraud detection",id:"fraud-detection",level:3},{value:"Real-time recommendation",id:"real-time-recommendation",level:3},{value:"Intelligent question-answer system",id:"intelligent-question-answer-system",level:3},{value:"Social networking",id:"social-networking",level:3},{value:"Related links",id:"related-links",level:2}],p={toc:d};function h(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-nebula-graph"},"What is Nebula Graph"),(0,i.kt)("p",null,"Nebula Graph is an open-source, distributed, easily scalable, and native graph database. It is capable of hosting graphs with hundreds of billions of vertices and trillions of edges, and serving queries with millisecond-latency."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/figures/nebula-graph-birdview-3.0.0.png",alt:"Nebula Graph birdview"})),(0,i.kt)("h2",{id:"what-is-a-graph-database"},"What is a graph database"),(0,i.kt)("p",null,"A graph database, such as Nebula Graph, is a database that specializes in storing vast graph networks and retrieving information from them. It efficiently stores data as vertices (nodes) and edges (relationships) in labeled property graphs. Properties can be attached to both vertices and edges. Each vertex can have one or multiple tags (labels)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/what-is-a-graph-database.png",alt:"What is a graph database",title:"What is a graph database"})),(0,i.kt)("p",null,"Graph databases are well suited for storing most kinds of data models abstracted from reality. Things are connected in almost all fields in the world. Modeling systems like relational databases extract the relationships between entities and squeeze them into table columns alone, with their types and properties stored in other columns or even other tables. This makes data management time-consuming and cost-ineffective."),(0,i.kt)("p",null,"Nebula Graph, as a typical native graph database, allows you to store the rich relationships as edges with edge types and properties directly attached to them."),(0,i.kt)("h2",{id:"advantages-of-nebula-graph"},"Advantages of Nebula Graph"),(0,i.kt)("h3",{id:"open-source"},"Open source"),(0,i.kt)("p",null,"Nebula Graph is open under the Apache 2.0 License. More and more people such as database developers, data scientists, security experts, and algorithm engineers are participating in the designing and development of Nebula Graph. To join the opening of source code and ideas, surf the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vesoft-inc/nebula-graph"},"Nebula Graph GitHub page"),"."),(0,i.kt)("h3",{id:"outstanding-performance"},"Outstanding performance"),(0,i.kt)("p",null,"Written in C++ and born for graphs, Nebula Graph handles graph queries in milliseconds. Among most databases, Nebula Graph shows superior performance in providing graph data services. The larger the data size, the greater the superiority of Nebula Graph. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://discuss.nebula-graph.io/t/nebula-graph-1-0-benchmark-report/581"},"Nebula Graph benchmarking"),"."),(0,i.kt)("h3",{id:"high-scalability"},"High scalability"),(0,i.kt)("p",null,"Nebula Graph is designed in a shared-nothing architecture and supports scaling in and out without interrupting the database service."),(0,i.kt)("h3",{id:"developer-friendly"},"Developer friendly"),(0,i.kt)("p",null,"Nebula Graph supports clients in popular programming languages like Java, Python, C++, and Go, and more are under development. For more information, see Nebula Graph ",(0,i.kt)("a",{parentName:"p",href:"../20.appendix/6.eco-tool-version.md"},"clients"),"."),(0,i.kt)("h3",{id:"reliable-access-control"},"Reliable access control"),(0,i.kt)("p",null,"Nebula Graph supports strict role-based access control and external authentication servers such as LDAP (Lightweight Directory Access Protocol) servers to enhance data security. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"../7.data-security/1.authentication/1.authentication.md"},"Authentication and authorization"),"."),(0,i.kt)("h3",{id:"diversified-ecosystem"},"Diversified ecosystem"),(0,i.kt)("p",null,"More and more native tools of Nebula Graph have been released, such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vesoft-inc/nebula-web-docker"},"Nebula Studio"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vesoft-inc/nebula-console"},"Nebula Console"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vesoft-inc/nebula-exchange"},"Nebula Exchange"),". For more ecosystem tools, see ",(0,i.kt)("a",{parentName:"p",href:"../20.appendix/6.eco-tool-version.md"},"Ecosystem tools overview"),"."),(0,i.kt)("p",null,"Besides, Nebula Graph has the ability to be integrated with many cutting-edge technologies, such as Spark, Flink, and HBase, for the purpose of mutual strengthening in a world of increasing challenges and chances."),(0,i.kt)("h3",{id:"opencypher-compatible-query-language"},"OpenCypher-compatible query language"),(0,i.kt)("p",null,"The native Nebula Graph Query Language, also known as nGQL, is a declarative, openCypher-compatible textual query language. It is easy to understand and easy to use. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"../3.ngql-guide/1.nGQL-overview/1.overview.md"},"nGQL guide"),"."),(0,i.kt)("h3",{id:"future-oriented-hardware-with-balanced-reading-and-writing"},"Future-oriented hardware with balanced reading and writing"),(0,i.kt)("p",null,"Solid-state drives have extremely high performance and ",(0,i.kt)("a",{parentName:"p",href:"https://blocksandfiles.com/wp-content/uploads/2021/01/Wikibon-SSD-less-than-HDD-in-2026.jpg"},"they are getting cheaper"),". Nebula Graph is a product based on SSD. Compared with products based on HDD and large memory, it is more suitable for future hardware trends and easier to achieve balanced reading and writing."),(0,i.kt)("h3",{id:"easy-data-modeling-and-high-flexibility"},"Easy data modeling and high flexibility"),(0,i.kt)("p",null,"You can easily model the connected data into Nebula Graph for your business without forcing them into a structure such as a relational table, and properties can be added, updated, and deleted freely. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"2.data-model.md"},"Data modeling"),"."),(0,i.kt)("h3",{id:"high-popularity"},"High popularity"),(0,i.kt)("p",null,"Nebula Graph is being used by tech leaders such as Tencent, Vivo, Meituan, and JD Digits. For more information, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://nebula-graph.io/"},"Nebula Graph official website"),"."),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Nebula Graph can be used to support various graph-based scenarios. To spare the time spent on pushing the kinds of data mentioned in this section into relational databases and on bothering with join queries, use Nebula Graph."),(0,i.kt)("h3",{id:"fraud-detection"},"Fraud detection"),(0,i.kt)("p",null,"Financial institutions have to traverse countless transactions to piece together potential crimes and understand how combinations of transactions and devices might be related to a single fraud scheme. This kind of scenario can be modeled in graphs, and with the help of Nebula Graph, fraud rings and other sophisticated scams can be easily detected."),(0,i.kt)("h3",{id:"real-time-recommendation"},"Real-time recommendation"),(0,i.kt)("p",null,"Nebula Graph offers the ability to instantly process the real-time information produced by a visitor and make accurate recommendations on articles, videos, products, and services."),(0,i.kt)("h3",{id:"intelligent-question-answer-system"},"Intelligent question-answer system"),(0,i.kt)("p",null,"Natural languages can be transformed into knowledge graphs and stored in Nebula Graph. A question organized in a natural language can be resolved by a semantic parser in an intelligent question-answer system and re-organized. Then, possible answers to the question can be retrieved from the knowledge graph and provided to the one who asked the question."),(0,i.kt)("h3",{id:"social-networking"},"Social networking"),(0,i.kt)("p",null,"Information on people and their relationships is typical graph data. Nebula Graph can easily handle the social networking information of billions of people and trillions of relationships, and provide lightning-fast queries for friend recommendations and job promotions in the case of massive concurrency."),(0,i.kt)("h2",{id:"related-links"},"Related links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.vesoft.com/en/"},"Official website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.nebula-graph.io/master/"},"Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nebula-graph.io/posts/"},"Blogs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discuss.nebula-graph.io"},"Forum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vesoft-inc"},"GitHub"))))}h.isMDXComponent=!0}}]);