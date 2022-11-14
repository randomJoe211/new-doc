"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,m=h["".concat(p,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Graph Service",l={unversionedId:"introduction/nebula-graph-architecture/graph-service",id:"version-1.0.0/introduction/nebula-graph-architecture/graph-service",title:"Graph Service",description:"The Graph Service is used to process the query. It has four submodules: Parser, Validator, Planner, and Executor. This topic will describe the Graph Service accordingly.",source:"@site/versioned_docs/version-1.0.0/2.introduction/5.nebula-graph-architecture/3.graph-service.md",sourceDirName:"2.introduction/5.nebula-graph-architecture",slug:"/introduction/nebula-graph-architecture/graph-service",permalink:"/docs/1.0.0/introduction/nebula-graph-architecture/graph-service",draft:!1,editUrl:"https://github.com/randomJoe211/randomjoe211.github.io/edit/main/versioned_docs/version-1.0.0/2.introduction/5.nebula-graph-architecture/3.graph-service.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Meta Service",permalink:"/docs/1.0.0/introduction/nebula-graph-architecture/meta-service"},next:{title:"Storage Service",permalink:"/docs/1.0.0/introduction/nebula-graph-architecture/storage-service"}},p={},s=[{value:"The architecture of the Graph Service",id:"the-architecture-of-the-graph-service",level:2},{value:"Parser",id:"parser",level:2},{value:"Validator",id:"validator",level:2},{value:"Planner",id:"planner",level:2},{value:"Executor",id:"executor",level:2},{value:"Source code hierarchy",id:"source-code-hierarchy",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graph-service"},"Graph Service"),(0,r.kt)("p",null,"The Graph Service is used to process the query. It has four submodules: Parser, Validator, Planner, and Executor. This topic will describe the Graph Service accordingly."),(0,r.kt)("h2",{id:"the-architecture-of-the-graph-service"},"The architecture of the Graph Service"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/query-engine-architecture.png",alt:"The architecture of the Graph Service"})),(0,r.kt)("p",null,"After a query is sent to the Graph Service, it will be processed by the following four submodules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parser"),": Performs lexical analysis and syntax analysis.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Validator"),": Validates the statements.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Planner"),": Generates and optimizes the execution plans.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Executor"),": Executes the plans with operators."))),(0,r.kt)("h2",{id:"parser"},"Parser"),(0,r.kt)("p",null,"After receiving a request, the statements will be parsed by Parser composed of Flex (lexical analysis tool) and Bison (syntax analysis tool), and its corresponding AST will be generated. Statements will be directly intercepted in this stage because of their invalid syntax."),(0,r.kt)("p",null,"For example, the structure of the AST of ",(0,r.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER like WHERE properties(edge).likeness > 8.0 YIELD dst(edge)')," is shown in the following figure."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/parser-ast-tree.png",alt:"AST"})),(0,r.kt)("h2",{id:"validator"},"Validator"),(0,r.kt)("p",null,"Validator performs a series of validations on the AST. It mainly works on these tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validating metadata"),(0,r.kt)("p",{parentName:"li"},"  Validator will validate whether the metadata is correct or not."),(0,r.kt)("p",{parentName:"li"},"  When parsing the ",(0,r.kt)("inlineCode",{parentName:"p"},"OVER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"YIELD")," clauses, Validator looks up the Schema and verifies whether the edge type and tag data exist or not. For an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statement, Validator verifies whether the types of the inserted data are the same as the ones defined in the Schema.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validating contextual reference"),(0,r.kt)("p",{parentName:"li"},"  Validator will verify whether the cited variable exists or not, or whether the cited property is variable or not."),(0,r.kt)("p",{parentName:"li"},"  For composite statements, like ",(0,r.kt)("inlineCode",{parentName:"p"},'$var = GO FROM "Tim" OVER like YIELD dst(edge) AS ID; GO FROM $var.ID OVER serve YIELD dst(edge)'),", Validator verifies first to see if ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," is defined, and then to check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," property is attached to the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," variable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validating type inference"),(0,r.kt)("p",{parentName:"li"},"  Validator infers what type the result of an expression is and verifies the type against the specified clause."),(0,r.kt)("p",{parentName:"li"},"  For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause requires the result to be a ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," value, a ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," value, or ",(0,r.kt)("inlineCode",{parentName:"p"},"empty"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validating the information of ",(0,r.kt)("inlineCode",{parentName:"p"},"*")),(0,r.kt)("p",{parentName:"li"},"  Validator needs to verify all the Schema that involves ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," when verifying the clause if there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," in the statement."),(0,r.kt)("p",{parentName:"li"},"  Take a statement like ",(0,r.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER * YIELD dst(edge), properties(edge).likeness, dst(edge)')," as an example. When verifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"OVER")," clause, Validator needs to verify all the edge types. If the edge type includes ",(0,r.kt)("inlineCode",{parentName:"p"},"like")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"serve"),", the statement would be ",(0,r.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER like,serve YIELD dst(edge), properties(edge).likeness, dst(edge)'),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Validating input and output"),(0,r.kt)("p",{parentName:"li"},"  Validator will check the consistency of the clauses before and after the ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"."),(0,r.kt)("p",{parentName:"li"},"  In the statement ",(0,r.kt)("inlineCode",{parentName:"p"},'GO FROM "Tim" OVER like YIELD dst(edge) AS ID | GO FROM $-.ID OVER serve YIELD dst(edge)'),", Validator will verify whether ",(0,r.kt)("inlineCode",{parentName:"p"},"$-.ID")," is defined in the clause before the ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"."))),(0,r.kt)("p",null,"When the validation succeeds, an execution plan will be generated. Its data structure will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/planner")," directory."),(0,r.kt)("h2",{id:"planner"},"Planner"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"nebula-graphd.conf")," file, when ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_optimizer")," is set to be ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", Planner will not optimize the execution plans generated by Validator. It will be executed by Executor directly."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"nebula-graphd.conf")," file, when ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_optimizer")," is set to be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", Planner will optimize the execution plans generated by Validator. The structure is as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/optimizer.png",alt:"Optimizer"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before optimization"),(0,r.kt)("p",{parentName:"li"},"  In the execution plan on the right side of the preceding figure, each node directly depends on other nodes. For example, the root node ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," node, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," node depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetNeighbor")," node, and so on, up to the leaf node ",(0,r.kt)("inlineCode",{parentName:"p"},"Start"),". Then the execution plan is (not truly) executed."),(0,r.kt)("p",{parentName:"li"},"  During this stage, every node has its input and output variables, which are stored in a hash table. The execution plan is not truly executed, so the value of each key in the associated hash table is empty (except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Start")," node, where the input variables hold the starting data), and the hash table is defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/context/ExecutionContext.cpp")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"nebula-graph")," repository."),(0,r.kt)("p",{parentName:"li"},"  For example, if the hash table is named as ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultMap")," when creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," node, users can determine that the node takes data from ",(0,r.kt)("inlineCode",{parentName:"p"},'ResultMap["GN1"]'),", then puts the result into ",(0,r.kt)("inlineCode",{parentName:"p"},'ResultMap["Filter2"]'),", and so on. All these work as the input and output of each node.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Process of optimization"),(0,r.kt)("p",{parentName:"li"},"  The optimization rules that Planner has implemented so far are considered RBO (Rule-Based Optimization), namely the pre-defined optimization rules. The CBO (Cost-Based Optimization) feature is under development. The optimized code is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/optimizer/")," directory under the ",(0,r.kt)("inlineCode",{parentName:"p"},"nebula-graph")," repository."),(0,r.kt)("p",{parentName:"li"},"  RBO is a \u201cbottom-up\u201d exploration process. For each rule, the root node of the execution plan (in this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," node) is the entry point, and step by step along with the node dependencies, it reaches the node at the bottom to see if it matches the rule."),(0,r.kt)("p",{parentName:"li"},"  As shown in the preceding figure, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," node is explored, it is found that its children node is ",(0,r.kt)("inlineCode",{parentName:"p"},"GetNeighbors"),", which matches successfully with the pre-defined rules, so a transformation is initiated to integrate the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," node into the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetNeighbors")," node, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," node is removed, and then the process continues to the next rule. Therefore, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetNeighbor")," operator calls interfaces of the Storage layer to get the neighboring edges of a vertex during the execution stage, the Storage layer will directly filter out the unqualified edges internally. Such optimization greatly reduces the amount of data transfer, which is commonly known as filter pushdown."))),(0,r.kt)("h2",{id:"executor"},"Executor"),(0,r.kt)("p",null,"The Executor module consists of Scheduler and Executor. The Scheduler generates the corresponding execution operators against the execution plan, starting from the leaf nodes and ending at the root node. The structure is as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs-cdn.nebula-graph.com.cn/docs-2.0/1.introduction/2.nebula-graph-architecture/executor.png",alt:"Executor"})),(0,r.kt)("p",null,"Each node of the execution plan has one execution operator node, whose input and output have been determined in the execution plan. Each operator only needs to get the values for the input variables, compute them, and finally put the results into the corresponding output variables. Therefore, it is only necessary to execute step by step from ",(0,r.kt)("inlineCode",{parentName:"p"},"Start"),", and the result of the last operator is returned to the user as the final result."),(0,r.kt)("h2",{id:"source-code-hierarchy"},"Source code hierarchy"),(0,r.kt)("p",null,"The source code hierarchy under the nebula-graph repository is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"|--src\n   |--context    //contexts for validation and execution\n   |--daemons\n   |--executor   //execution operators\n   |--mock\n   |--optimizer  //optimization rules\n   |--parser     //lexical analysis and syntax analysis\n   |--planner    //structure of the execution plans\n   |--scheduler  //scheduler\n   |--service\n   |--util       //basic components\n   |--validator  //validation of the statements\n   |--visitor\n")))}c.isMDXComponent=!0}}]);