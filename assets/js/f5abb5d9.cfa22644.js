"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,u=d["".concat(p,".").concat(m)]||d[m]||h[m]||s;return a?n.createElement(u,o(o({ref:t},l),{},{components:a})):n.createElement(u,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},o="An introduction to graphs",i={unversionedId:"introduction/graph",id:"introduction/graph",title:"An introduction to graphs",description:"People from tech giants (such as Amazon and Facebook) to small research teams are devoting significant resources to exploring the potential of graph databases to solve data relationships problems. What exactly is a graph database? What can it do? Where does it fit in the database landscape? To answer these questions, we first need to understand graphs.",source:"@site/docs/2.introduction/1.graph.md",sourceDirName:"2.introduction",slug:"/introduction/graph",permalink:"/introduction/graph",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/docs/2.introduction/1.graph.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/category/introduction"},next:{title:"Market overview of graph databases",permalink:"/introduction/graph-database"}},p={},c=[{value:"What are graphs?",id:"what-are-graphs",level:2},{value:"Property graphs",id:"property-graphs",level:2},{value:"Why do we use graph databases?",id:"why-do-we-use-graph-databases",level:2},{value:"RDF",id:"rdf",level:2}],l={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"an-introduction-to-graphs"},"An introduction to graphs"),(0,r.kt)("p",null,"People from tech giants (such as Amazon and Facebook) to small research teams are devoting significant resources to exploring the potential of graph databases to solve data relationships problems. What exactly is a graph database? What can it do? Where does it fit in the database landscape? To answer these questions, we first need to understand graphs."),(0,r.kt)("p",null,"Graphs are one of the main areas of research in computer science. Graphs can efficiently solve many of the problems that exist today. This topic will start with graphs and explain the advantages of graph databases and their great potential in modern application development, and then describe the differences between distributed graph databases and several other types of databases."),(0,r.kt)("h2",{id:"what-are-graphs"},"What are graphs?"),(0,r.kt)("p",null,"Graphs are everywhere. When hearing the word graph, many people think of bar charts or line charts, because sometimes we call them graphs, which show the connections between two or more data systems. The simplest example is the following picture, which shows the number of Nebula Graph GitHub repository stars over time."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42762957/91426247-d3861000-e88e-11ea-8e17-e3d7d7069bd1.png",alt:"image",title:"This is not the graph talked about in this book"})),(0,r.kt)("p",null,"This type of diagram is often called a line chart. As you can see, the number of starts rises over time. A line chart can show data changes over time (depending on the scale settings). Here we have given only examples of line charts. There are various graphs, such as pie charts, bar charts, etc."),(0,r.kt)("p",null,"Another kind of diagram is often used in daily conversation, such as image recognition, retouched photos. This type of diagram is called a picture/photo/image."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/image.png",alt:"image",title:"This is not te book talked about in this book"})),(0,r.kt)("p",null,"The diagram we discuss in this topic is a different concept, the graph in graph theory."),(0,r.kt)("p",null,"In graph theory, a branch of mathematics, graphs are used to represent the relationships between entities. A graph consists of several small dots (called vertices or nodes) and lines or curves (called edges) that connect these dots. The term graph was proposed by Sylvester in 1878."),(0,r.kt)("p",null,"The following picture is what this topic calls a graph."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/undirectedgraph.png",alt:"Image"})),(0,r.kt)("p",null,"Simply put, graph theory is the study of graphs. Graph theory began in the early 18th century with the problem of the Seven Bridges of K\xf6nigsberg. K\xf6nigsberg was then a Prussian city (now part of Russia, renamed Kaliningrad). The river Preger crossed K\xf6nigsberg and not only divided K\xf6nigsberg into two parts, but also formed two small islands in the middle of the river. This divided the city into four areas, each connected by seven bridges. There was a game associated with K\xf6nigsberg at the time, namely how to cross each bridge only once and navigate the entire four areas of the city. A simplified view of the seven bridges is shown below. Try to find the answer to this game if you are interested ",(0,r.kt)("sup",{parentName:"p",id:"fnref-171"},(0,r.kt)("a",{parentName:"sup",href:"#fn-171",className:"footnote-ref"},"171")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42762957/91536940-1526c180-e948-11ea-8fe8-90f40ce28171.png",alt:"image"})),(0,r.kt)("p",null,"To solve this problem, the great mathematician Euler proved that the problem was unsolvable by abstracting the four regions of the city into points and the seven bridges connecting the city into edges connecting the points. The simplified abstract diagram is as follows ",(0,r.kt)("sup",{parentName:"p",id:"fnref-063"},(0,r.kt)("a",{parentName:"sup",href:"#fn-063",className:"footnote-ref"},"063")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/42762957/91538126-e578b900-e949-11ea-980c-5704254e8063.png",alt:"image"})),(0,r.kt)("p",null,"The four dots in the picture represent the four regions of K\xf6nigsberg, and the lines between the dots represent the seven bridges connecting the four regions. It is easy to see that the area connected by the even-numbered bridges can be easily passed because different routes can be chosen to come and go. The areas connected by the odd-numbered bridges can only be used as starting or endings points because the same route can only be taken once. The number of edges associated with a node is called the node degree. Now it can be shown that the K\xf6nigsberg problem can only be solved if two nodes have odd degrees and the other nodes have even degrees, i.e., two regions must have an even number of bridges and the remaining regions have an odd number of bridges. However, as we know from the above picture, there is no even number of bridges in any region of K\xf6nigsberg, so this puzzle is unsolvable."),(0,r.kt)("h2",{id:"property-graphs"},"Property graphs"),(0,r.kt)("p",null,"From a mathematical point of view, graph theory studies the relationships between modeled objects. However, it is common to extend the underlying graph model. The extended graphs are called the ",(0,r.kt)("strong",{parentName:"p"},"attribute graph model"),". A property graph usually consists of the following components."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node, an object or entity. In this topic, nodes are called vertices."),(0,r.kt)("li",{parentName:"ul"},"Relationship between nodes. In this topic, relationships are called edges. Usually, the edges can be directed or undirected to indicate a relationship between two entities."),(0,r.kt)("li",{parentName:"ul"},"There can be properties on nodes and edges.")),(0,r.kt)("p",null,"In real life, there are many examples of property graphs."),(0,r.kt)("p",null,"For example, Qichacha or BOSS Zhipin use graphs to model business equity relationships. A vertex usually represents a natural person or a business, and the edge represents the equity relationship between a person and a business. The properties on vertices can be the name, age, ID number, etc. of the natural person. The properties on edges can be the investment amount, investment time, position such as director and supervisor."),(0,r.kt)("p",null,"A vertex can be a listed company and an edge can be a correlation between listed companies. The vertex property can be a stock code, abbreviation, market capitalization, sector, etc. The edge property can be the time-series correlation coefficient of the stock price ",(0,r.kt)("sup",{parentName:"p",id:"fnref-t01"},(0,r.kt)("a",{parentName:"sup",href:"#fn-t01",className:"footnote-ref"},"T01")),"."),(0,r.kt)("p",null,"The graph relationship can also be similar to the character relationship in a TV series like Game of Thrones ",(0,r.kt)("sup",{parentName:"p",id:"fnref-s-01"},(0,r.kt)("a",{parentName:"sup",href:"#fn-s-01",className:"footnote-ref"},"s-01")),". Vertices stand for the characters. Edges represent the interactions between the characters. Vertex properties are the character's names, ages, camps, etc., and edge properties are the number of interactions between two characters. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/game-of-thrones-01.png",alt:"image"})),(0,r.kt)("p",null,"Graphs are also used for governance within IT systems. For example, a company like WeBank has a very large data warehouse and corresponding data warehouse management tools. These management tools record the ETL relationships between the Hive tables in the data warehouse through Job implementation ",(0,r.kt)("sup",{parentName:"p",id:"fnref-ware"},(0,r.kt)("a",{parentName:"sup",href:"#fn-ware",className:"footnote-ref"},"ware")),". Such ETL relationships can be very easily presented and managed in the form of graphs, and the root cause can be easily traced when problems arise."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/dataware2.png",alt:"image"})),(0,r.kt)("p",null,"Graphs can also be used to document the invocation relationships between the intricate microservices within a large IT system ",(0,r.kt)("sup",{parentName:"p",id:"fnref-tice"},(0,r.kt)("a",{parentName:"sup",href:"#fn-tice",className:"footnote-ref"},"tice")),", which is used by operations teams for service governance. Here each point represents a microservice and the edge represents the invocation relationship between two microservices; thus, Ops can easily find invocation links with availability below a threshold (99.99%) or discover microservice nodes that would be particularly affected by a failure."),(0,r.kt)("p",null,"Graphs are also used to record the invocation relationships between the intricate microservices ",(0,r.kt)("sup",{parentName:"p",id:"fnref-tice"},(0,r.kt)("a",{parentName:"sup",href:"#fn-tice",className:"footnote-ref"},"tice")),". Each vertex represents a microservice and an edge represents the invocation relationship between two microservices. This allows Ops to easily find call links with availability below a threshold (99.99%), or to discover microservice nodes where a failure would have a particularly large impact."),(0,r.kt)("p",null,"Graphs can also be used to improve the efficiency of code development. Graphs store function call relationships between codes ",(0,r.kt)("sup",{parentName:"p",id:"fnref-tice"},(0,r.kt)("a",{parentName:"sup",href:"#fn-tice",className:"footnote-ref"},"tice"))," to improve the efficiency of reviewing and testing the code. In such a graph, each vertex is a function or variable, each edge is a call relationship between functions or variables. When there is a new code commit, one can more easily see other interfaces that may be affected, which helps testers better assess potential go-live risks."),(0,r.kt)("p",null,"In addition, we can discover more scenarios by adding some temporal information as opposed to a static property graph that does not change."),(0,r.kt)("p",null,"For example, inside a network of interbank account fund flows ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1440w"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1440w",className:"footnote-ref"},"1440w")),", a vertex is an account, an edge is the transfer record between accounts. Edge properties record the time, amount, etc. of the transfer. Companies can use graph technology to easily explore the graph to discover obvious misappropriation of funds, paying back a load to with the loan, loan gang scams, and other phenomena.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/bank-transfer.jpg",alt:"image"})),(0,r.kt)("p",null,"The same approach can be used to explore the discovery of the flow of cryptocurrencies."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/block-chain.png",alt:"image"})),(0,r.kt)("p",null,"In a network of accounts and devices ",(0,r.kt)("sup",{parentName:"p",id:"fnref-360"},(0,r.kt)("a",{parentName:"sup",href:"#fn-360",className:"footnote-ref"},"360")),", vertices can be accounts, mobile devices, and WIFI networks, edges are the login relationships between these accounts and mobile devices, and the access relationships between mobile devices and WIFI networks."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/360-user-1.png",alt:"image"})),(0,r.kt)("p",null,"These graph data records the characteristic of the network black production operations. Some big companies such as 360 DigiTech",(0,r.kt)("sup",{parentName:"p",id:"fnref-360"},(0,r.kt)("a",{parentName:"sup",href:"#fn-360",className:"footnote-ref"},"360")),", Kuaishou",(0,r.kt)("sup",{parentName:"p",id:"fnref-kuaishou"},(0,r.kt)("a",{parentName:"sup",href:"#fn-kuaishou",className:"footnote-ref"},"kuaishou")),", WeChat",(0,r.kt)("sup",{parentName:"p",id:"fnref-weixin"},(0,r.kt)("a",{parentName:"sup",href:"#fn-weixin",className:"footnote-ref"},"weixin")),", Zhihu",(0,r.kt)("sup",{parentName:"p",id:"fnref-zhihu"},(0,r.kt)("a",{parentName:"sup",href:"#fn-zhihu",className:"footnote-ref"},"zhihu")),", and Ctrip Finance all identified over a million crime groups through technology."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/360-user-2.png",alt:"image"})),(0,r.kt)("p",null,"In addition to the dimension of time, you can find more scenarios for property graphs by adding some geographic location information."),(0,r.kt)("p",null,"For an example of tracing the source of the Coronavirus Disease (COVID-19) ",(0,r.kt)("sup",{parentName:"p",id:"fnref-cov02"},(0,r.kt)("a",{parentName:"sup",href:"#fn-cov02",className:"footnote-ref"},"CoV02")),", vertices are the person and edges are the contact between people. Vertex properties are the information of the person's ID card and onset time, and edge properties are the time and geographical location of the close contact between people, etc. It provides help for health prevention departments to quickly identify high-risk people and their behavioral trajectories."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www-cdn.nebula-graph.com.cn/nebula-blog/nCoV02.png",alt:"image"})),(0,r.kt)("p",null,"The combination of geographic location and graph is also used in some O2O scenarios, such as real-time food recommendation based on POI (Point-of-Interest) ",(0,r.kt)("sup",{parentName:"p",id:"fnref-mt"},(0,r.kt)("a",{parentName:"sup",href:"#fn-mt",className:"footnote-ref"},"mt")),", which enables local life service platform companies like Meituan to recommend more suitable businesses in real-time when consumers open the APP."),(0,r.kt)("p",null,"A graph is also used for knowledge inference. Huawei, Vivo, OPPO, WeChat, Meituan, and other companies use graphs for the representation of the underlying knowledge relationships."),(0,r.kt)("h2",{id:"why-do-we-use-graph-databases"},"Why do we use graph databases?"),(0,r.kt)("p",null,"Although relational databases and semi-structured databases such as XML/JSON can be used to describe a graph-structured data model, a graph (database) not only describes the graph structure and stores data itself but also focuses on handling the associative relationships between the data. Specifically, graph databases have several advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Graphs are a more visual and intuitive way of representing knowledge to human brains. This allows us to focus on the business problem itself rather than how to describe the problem as a particular structure of the database (e.g., a table structure).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is easier to show the characteristic of the data in graphs. Such as transfer paths and nearby communities. To analyze the relationships of characters and character importance in Game of Thrones, data displayed with tables is not as intuitive as with graphs."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://www-cdn.nebula-graph.com.cn/nebula-blog/game-of-thrones-01.png",alt:"image"})),(0,r.kt)("p",{parentName:"li"},"Especially when some central vertices are deleted:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://www-cdn.nebula-graph.com.cn/nebula-blog/tv-game-thrones.png",alt:"image"})),(0,r.kt)("p",{parentName:"li"},"Adding an edge can completely change the entire topology."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://www-cdn.nebula-graph.com.cn/nebula-blog/tv-game-thrones-02.png",alt:"image"})),(0,r.kt)("p",{parentName:"li"},"We can intuitively sense the importance of minor changes in graphs rather than in tables.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Graph query language is designed based on graph structures. The following is a query example in LDBC. Requirements: Query the posts posted by a person, and query the corresponding replies (the replies themselves will also be replied multiple times). Since the posting time and reply time both meet certain conditions, you can sort the results according to the number of replies."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/books/images/efficientquery.png",alt:"image"})),(0,r.kt)("p",{parentName:"li"},"Write querying statements using PostgreSQL:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},'--PostgreSQL\nWITH RECURSIVE post_all(psa_threadid\n                      , psa_thread_creatorid, psa_messageid\n                      , psa_creationdate, psa_messagetype\n                       ) AS (\n    SELECT m_messageid AS psa_threadid\n         , m_creatorid AS psa_thread_creatorid\n         , m_messageid AS psa_messageid\n         , m_creationdate, \'Post\'\n      FROM message\n     WHERE 1=1 AND m_c_replyof IS NULL -- post, not comment\n       AND m_creationdate BETWEEN :startDate AND :endDate\n  UNION ALL\n    SELECT psa.psa_threadid AS psa_threadid\n         , psa.psa_thread_creatorid AS psa_thread_creatorid\n         , m_messageid, m_creationdate, \'Comment\'\n      FROM message p, post_all psa\n     WHERE 1=1 AND p.m_c_replyof = psa.psa_messageid\n     AND m_creationdate BETWEEN :startDate AND :endDate\n)\nSELECT p.p_personid AS "person.id"\n     , p.p_firstname AS "person.firstName"\n     , p.p_lastname AS "person.lastName"\n     , count(DISTINCT psa.psa_threadid) AS threadCount\nEND) AS messageCount\n     , count(DISTINCT psa.psa_messageid) AS messageCount\n  FROM person p left join post_all psa on (\n       1=1   AND p.p_personid = psa.psa_thread_creatorid\n   AND psa_creationdate BETWEEN :startDate AND :endDate\n   )\n GROUP BY p.p_personid, p.p_firstname, p.p_lastname\n ORDER BY messageCount DESC, p.p_personid\n LIMIT 100;\n')),(0,r.kt)("p",{parentName:"li"},"Write querying statements using Cypher designed especially for graphs:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-Cypher"},"--Cypher\nMATCH (person:Person)<-[:HAS_CREATOR]-(post:Post)<-[:REPLY_OF*0..]-(reply:Message)\nWHERE post.creationDate >= $startDate AND post.creationDate <= $endDate\n  AND reply.creationDate >= $startDate AND reply.creationDate <= $endDate\nRETURN\n  person.id, person.firstName, person.lastName, count(DISTINCT post) AS threadCount,\n  count(DISTINCT reply) AS messageCount\nORDER BY\n  messageCount DESC, person.id ASC\nLIMIT 100\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Graph traversal (corresponding to Join in SQL) is much more efficient because the storage and query engines are designed specifically for the structure of the graph. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Graph databases have a wide range of application scenarios. Examples include data integration (knowledge graph), personalized recommendations, fraud, and threat detection, risk analysis, and compliance, identity (and control) verification, IT infrastructure management, supply chain, and logistics, social network research, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"According to the literature ",(0,r.kt)("sup",{parentName:"p",id:"fnref-ubiquity"},(0,r.kt)("a",{parentName:"sup",href:"#fn-ubiquity",className:"footnote-ref"},"Ubiquity")),", the fields that use graph technology are (from the greatest to least): information technology (IT), research in academia, finance, laboratories in industry, government, healthcare, defense, pharmaceuticals, retail, and e-commerce, transportation, telecommunications, and insurance."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In 2019, according to Gartner's questionnaire research, 27% of customers (500 groups) are using graph databases and 20% have plans to use them.")),(0,r.kt)("h2",{id:"rdf"},"RDF"),(0,r.kt)("p",null,"This topic does not discuss the RDF data model due to space limitations."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-171"},"Souce of the picture: ",(0,r.kt)("a",{parentName:"li",href:"https://medium.freecodecamp.org/i-dont-understand-graph-theory-1c96572a1401"},"https://medium.freecodecamp.org/i-dont-understand-graph-theory-1c96572a1401"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-171",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-063"},"Source of the picture: ",(0,r.kt)("a",{parentName:"li",href:"https://medium.freecodecamp.org/i-dont-understand-graph-theory-1c96572a1401"},"https://medium.freecodecamp.org/i-dont-understand-graph-theory-1c96572a1401"),(0,r.kt)("a",{parentName:"li",href:"#fnref-063",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-t01"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/stock-interrelation-analysis-jgrapht-nebula-graph/"},"https://nebula-graph.com.cn/posts/stock-interrelation-analysis-jgrapht-nebula-graph/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-t01",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-s-01"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/game-of-thrones-relationship-networkx-gephi-nebula-graph/"},"https://nebula-graph.com.cn/posts/game-of-thrones-relationship-networkx-gephi-nebula-graph/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-s-01",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-ware"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/practicing-nebula-graph-webank/"},"https://nebula-graph.com.cn/posts/practicing-nebula-graph-webank/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-ware",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-tice"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/meituan-graph-database-platform-practice/"},"https://nebula-graph.com.cn/posts/meituan-graph-database-platform-practice/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-tice",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-1440w"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/90635957"},"https://zhuanlan.zhihu.com/p/90635957"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1440w",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-360"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/graph-database-data-connections-insight/"},"https://nebula-graph.com.cn/posts/graph-database-data-connections-insight/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-360",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-kuaishou"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/kuaishou-security-intelligence-platform-with-nebula-graph/"},"https://nebula-graph.com.cn/posts/kuaishou-security-intelligence-platform-with-nebula-graph/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-kuaishou",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-weixin"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/nebula-graph-for-social-networking/"},"https://nebula-graph.com.cn/posts/nebula-graph-for-social-networking/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-weixin",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-zhihu"},(0,r.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/K2QinpR5Rplw1teHpHtf4w"},"https://mp.weixin.qq.com/s/K2QinpR5Rplw1teHpHtf4w"),(0,r.kt)("a",{parentName:"li",href:"#fnref-zhihu",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-cov02"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/detect-corona-virus-spreading-with-graph-database/"},"https://nebula-graph.com.cn/posts/detect-corona-virus-spreading-with-graph-database/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-cov02",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-mt"},(0,r.kt)("a",{parentName:"li",href:"https://nebula-graph.com.cn/posts/meituan-graph-database-platform-practice/"},"https://nebula-graph.com.cn/posts/meituan-graph-database-platform-practice/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-mt",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-ubiquity"},(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1709.03188"},"https://arxiv.org/abs/1709.03188"),(0,r.kt)("a",{parentName:"li",href:"#fnref-ubiquity",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);