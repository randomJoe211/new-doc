"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,p(p({ref:t},c),{},{components:n})):a.createElement(d,p({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={},p="Deployment steps",s={unversionedId:"nebula-cloud-on-aws/aws-deployment-steps",id:"nebula-cloud-on-aws/aws-deployment-steps",title:"Deployment steps",description:"After finishing the preparation, you can start the deployment. The deployment costs 15 to 20 minutes.",source:"@site/cloud/nebula-cloud-on-aws/4.aws-deployment-steps.md",sourceDirName:"nebula-cloud-on-aws",slug:"/nebula-cloud-on-aws/aws-deployment-steps",permalink:"/cloud/nebula-cloud-on-aws/aws-deployment-steps",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"cloud",previous:{title:"Planning the deployment",permalink:"/cloud/nebula-cloud-on-aws/aws-planning-deployment"},next:{title:"Connect to NebulaGraph on AWS",permalink:"/cloud/nebula-cloud-on-aws/aws-connect-to-services"}},l={},i=[],c={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment-steps"},"Deployment steps"),(0,r.kt)("p",null,"After finishing the preparation, you can start the deployment. The deployment costs 15 to 20 minutes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into ",(0,r.kt)("a",{parentName:"p",href:"https://us-east-1.console.aws.amazon.com/console/home"},"AWS Console"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"According to the deployment option that you have chosen, click ",(0,r.kt)("a",{parentName:"p",href:"https://fwd.aws/8rkyW?"},"Deploy NebulaGraph in a new VPC")," or ",(0,r.kt)("a",{parentName:"p",href:"https://fwd.aws/rBBkY?"},"Deploy NebulaGraph in an existing VPC")," to specify the template.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the Region on the top-right of the page, and change it if necessary. The default Region is us-east-1.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Create stack")," page, keep the default setting for the template URL, and then choose ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Specify stack details")," page, set the ",(0,r.kt)("strong",{parentName:"p"},"Stack name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the parameters for the template. Provide values for the parameters that require input. For all other parameters, review the default settings and customize them as necessary. When you finish reviewing and customizing the parameters, choose ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Configure stack options")," page, you can specify tags (key-value pairs) for resources in your stack and set ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html"},"advanced options"),". When you finish, choose ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Review")," page, review and confirm the template settings. Under ",(0,r.kt)("strong",{parentName:"p"},"Capabilities"),", select the two checkboxes to acknowledge that the template creates IAM resources and might require the ability to automatically expand macros.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create stack")," to deploy the stack.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Events")," tab, monitor the ",(0,r.kt)("strong",{parentName:"p"},"Status")," of the stack. When the status is ",(0,r.kt)("strong",{parentName:"p"},"CREATE_COMPLETE"),", the NebulaGraph deployment is ready."))))}m.isMDXComponent=!0}}]);