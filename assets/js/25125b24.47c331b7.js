"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,v=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s="NebulaGraph on AWS overview",l={unversionedId:"nebula-cloud-on-aws/aws-overview",id:"nebula-cloud-on-aws/aws-overview",title:"NebulaGraph on AWS overview",description:"NebulaGraph offers a secure, reliable cloud service powered by AWS EC2. You can use the CloudFormation template to quickly deploy a NebulaGraph Enterprise service cluster, including the network, compute, storage, and visualization services.",source:"@site/cloud/nebula-cloud-on-aws/1.aws-overview.md",sourceDirName:"nebula-cloud-on-aws",slug:"/nebula-cloud-on-aws/aws-overview",permalink:"/cloud/nebula-cloud-on-aws/aws-overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"cloud",previous:{title:"NebulaGraph on AWS",permalink:"/cloud/category/nebulagraph-on-aws"},next:{title:"Deployment Architecture",permalink:"/cloud/nebula-cloud-on-aws/aws-architecture"}},i={},c=[{value:"Costs",id:"costs",level:2},{value:"Licenses",id:"licenses",level:2},{value:"Core version",id:"core-version",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nebulagraph-on-aws-overview"},"NebulaGraph on AWS overview"),(0,o.kt)("p",null,"NebulaGraph offers a secure, reliable cloud service powered by AWS EC2. You can use the CloudFormation template to quickly deploy a NebulaGraph Enterprise service cluster, including the network, compute, storage, and visualization services."),(0,o.kt)("h2",{id:"costs"},"Costs"),(0,o.kt)("p",null,"You are responsible for the AWS resources used to deploy and run the NebulaGraph service cluster."),(0,o.kt)("p",null,"When creating a NebulaGraph service cluster, some of the settings, such as the instance type, storage media type, and disk space, affect the cost of deployment. The bottom of the creation page displays the estimated cost."),(0,o.kt)("p",null,"After you deploy the NebulaGraph service cluster, you can create ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports-gettingstarted-turnonreports.html"},"AWS Cost and Usage Reports")," to deliver billing metrics to an Amazon Simple Storage Service (Amazon S3) bucket in your account. These reports provide cost estimates based on usage throughout each month and aggregate the data at the end of the month."),(0,o.kt)("p",null,"In addition to AWS resources, you need valid licenses to keep the NebulaGraph services running. Applying for the licenses requires certain costs."),(0,o.kt)("h2",{id:"licenses"},"Licenses"),(0,o.kt)("p",null,"NebulaGraph on AWS applies the NebulaGraph Enterprise services with 3-day licenses by default. After the licenses expire, the services become unavailable but the data remains in the AWS resources."),(0,o.kt)("p",null,"For how to apply for and configure licenses, see ",(0,o.kt)("a",{parentName:"p",href:"../../4.deployment-and-installation/deploy-license.md"},"License"),"."),(0,o.kt)("h2",{id:"core-version"},"Core version"),(0,o.kt)("p",null,"The supported NebulaGraph Enterprise core version is {{cloud.awsRelease}}."))}p.isMDXComponent=!0}}]);