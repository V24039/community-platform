import{a,F as C}from"./jsx-runtime-913be41c.js";import{C as i}from"./CharacterCount-16bb8a2c.js";import"./index-2506bfc3.js";import"./theme-ui-components.esm-a8d58c50.js";import"./emotion-react.browser.esm-aba50b66.js";import"./theme-ui-css.esm-b19fe7ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-11801e73.js";const D={title:"Components/CharacterCount",component:i},l=[{currentSize:10,minSize:50,maxSize:200},{currentSize:200,minSize:0,maxSize:100}],e=()=>a(i,{currentSize:0,minSize:0,maxSize:100}),r=()=>a(i,{currentSize:50,minSize:0,maxSize:100}),t=()=>a(C,{children:l.map((o,x)=>a(i,{currentSize:o.currentSize,minSize:o.minSize,maxSize:o.maxSize},x))});var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"() => <CharacterCount currentSize={0} minSize={0} maxSize={100} />",...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var c,S,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"() => <CharacterCount currentSize={50} minSize={0} maxSize={100} />",...(u=(S=r.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var z,p,d;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`() => <>
    {errorValues.map((state, index) => {
    return <CharacterCount key={index} currentSize={state.currentSize} minSize={state.minSize} maxSize={state.maxSize} />;
  })}
  </>`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const F=["Default","WithValidState","WithError"];export{e as Default,t as WithError,r as WithValidState,F as __namedExportsOrder,D as default};
//# sourceMappingURL=CharacterCount.stories-9c5461ad.js.map