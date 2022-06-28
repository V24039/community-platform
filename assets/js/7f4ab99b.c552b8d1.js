"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[240],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},p="Installing your own instance",s={unversionedId:"Install",id:"Install",title:"Installing your own instance",description:"Requirements",source:"@site/docs/Install.md",sourceDirName:".",slug:"/Install",permalink:"/community-platform/Install",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Install.md",tags:[],version:"current",frontMatter:{}},c={},m=[{value:"Community Platform Maintainers",id:"community-platform-maintainers",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-your-own-instance"},"Installing your own instance"),(0,o.kt)("p",null,"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"Google Firebase project")),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/projects/learn-more#adding_apps_to_a_project"},"Firebase Web App")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting/quickstart#install-cli"},"FireBase Hosting enabled")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth?authuser=0"},"Authentication")," with the Sign-in providers ",(0,o.kt)("strong",{parentName:"li"},"Email/Password")," enabled."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/quickstart"},"Cloud Firestore")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/database?authuser=0&hl=en"},"Realtime Database")),(0,o.kt)("li",{parentName:"ol"},"Firebase CLI tools](",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cli"},"https://firebase.google.com/docs/cli"),") locally"),(0,o.kt)("li",{parentName:"ol"},"Create an application](",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/appengine/start/create"},"https://console.cloud.google.com/appengine/start/create"),")"),(0,o.kt)("li",{parentName:"ol"},"Your project must be on the Blaze pay as you go pricing plan"),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("inlineCode",{parentName:"li"},"cors.json")," on the storage bucket](",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/configuring-cors"},"https://cloud.google.com/storage/docs/configuring-cors"),") to support your deployed origin. See: functions/src/config/cors.md")),(0,o.kt)("p",null,"Deploying:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"firebase use <my-new-project-id>\nfirebase deploy\n")),(0,o.kt)("p",null,"Troubleshooting:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Error: Can't determine Firebase Database URL"),"\nIf you see this message it is likely you skipped adding the ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/database?authuser=0&hl=en"},"Realtime Database"),". Easily done!")),(0,o.kt)("h2",{id:"community-platform-maintainers"},"Community Platform Maintainers"),(0,o.kt)("p",null,"We deploy to our instances directly from the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"production")," branches of the git repository."),(0,o.kt)("p",null,"You will need to set up a CircleCI context for each target environment. This context should contain the following variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FIREBASE_TOKEN")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GOOGLE_APPLICATION_CREDENTIALS_JSON")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_BRANCH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_FIREBASE_API_KEY")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_FIREBASE_AUTH_DOMAIN")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_FIREBASE_DATABASE_URL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_FIREBASE_MESSAGING_SENDER_ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_FIREBASE_PROJECT_ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_FIREBASE_STORAGE_BUCKET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_GA_TRACKING_ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_PLATFORM_THEME")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_PLATFORM_PROFILES")," - comma separated list of available profiles. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"ProfileType")," from modules/profile/index for guidance here. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"member,workspace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_SUPPORTED_MODULES")," \u2013\xa0comma separated list of available modules. See ",(0,o.kt)("inlineCode",{parentName:"li"},"/src/modules/index.ts")," for the definitions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SITE_NAME"))))}d.isMDXComponent=!0}}]);