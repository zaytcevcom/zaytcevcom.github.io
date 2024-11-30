"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[218],{"./src/shared/layout/Layout.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LayoutStory:()=>LayoutStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Layout_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/header/header.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header_module.Z,options);const header_header_module=header_module.Z&&header_module.Z.locals?header_module.Z.locals:void 0;var logo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/logo/logo.module.sass"),logo_module_options={};logo_module_options.styleTagTransform=styleTagTransform_default(),logo_module_options.setAttributes=setAttributesWithoutAttributes_default(),logo_module_options.insert=insertBySelector_default().bind(null,"head"),logo_module_options.domAPI=styleDomAPI_default(),logo_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(logo_module.Z,logo_module_options);const logo_logo_module=logo_module.Z&&logo_module.Z.locals?logo_module.Z.locals:void 0;var _templateObject,es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Logo=function Logo(){var strings,raw,t=(0,es.$G)().t;return(0,jsx_runtime.jsx)("div",{className:logo_logo_module.logo,children:t(_templateObject||(strings=["components.Logo.text"],raw||(raw=strings.slice(0)),_templateObject=Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))))})};Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/shared/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}var ThemeSwitcher=__webpack_require__("./src/shared/ThemeSwitcher/ThemeSwitcher.tsx"),LangSwitcher=__webpack_require__("./src/shared/LangSwitcher/LangSwitcher.tsx"),Header=function Header(){return(0,jsx_runtime.jsxs)("header",{className:header_header_module.header,children:[(0,jsx_runtime.jsx)(Logo,{}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(LangSwitcher.k,{}),(0,jsx_runtime.jsx)(ThemeSwitcher.O,{})]})]})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/shared/header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}var layout_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/layout/layout.module.sass"),layout_module_options={};layout_module_options.styleTagTransform=styleTagTransform_default(),layout_module_options.setAttributes=setAttributesWithoutAttributes_default(),layout_module_options.insert=insertBySelector_default().bind(null,"head"),layout_module_options.domAPI=styleDomAPI_default(),layout_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(layout_module.Z,layout_module_options);const layout_layout_module=layout_module.Z&&layout_module.Z.locals?layout_module.Z.locals:void 0;var Layout=function Layout(_ref){var children=_ref.children;return(0,jsx_runtime.jsxs)("div",{className:layout_layout_module.container,children:[(0,jsx_runtime.jsx)(Header,{}),children]})};Layout.displayName="Layout";try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/shared/layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}const Layout_stories={title:"Layout",component:Layout,tags:["autodocs"]};var LayoutStory={};LayoutStory.parameters={...LayoutStory.parameters,docs:{...LayoutStory.parameters?.docs,source:{originalSource:"{}",...LayoutStory.parameters?.docs?.source}}};const __namedExportsOrder=["LayoutStory"]},"./src/shared/LangSwitcher/LangSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>LangSwitcher});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),Locale=function(Locale){return Locale.ru="ru",Locale.en="en",Locale}({});i18next.ZP.use(es.Db).init({resources:{en:{translation:{components:{Logo:{text:"Logo"},AddToCart:{text:"Add to cart"}}}},ru:{translation:{components:{Logo:{text:"Логотип"},AddToCart:{text:"В корзину"}}}}},lng:localStorage.getItem("lang")||Locale.ru,interpolation:{escapeValue:!1}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LangSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/LangSwitcher/LangSwitcher.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LangSwitcher_module.Z,options);const LangSwitcher_LangSwitcher_module=LangSwitcher_module.Z&&LangSwitcher_module.Z.locals?LangSwitcher_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LangSwitcher=function LangSwitcher(_ref){var className=_ref.className,i18n=(0,es.$G)().i18n,lang=i18n.language===Locale.ru?Locale.en:Locale.ru,text=i18n.language===Locale.ru?"🇷🇺":"🇺🇸";return(0,jsx_runtime.jsx)("button",{type:"button",className:(0,clsx_m.Z)(LangSwitcher_LangSwitcher_module.root,className),onClick:function onClick(){return i18n.changeLanguage(lang)},children:text})};LangSwitcher.displayName="LangSwitcher";try{LangSwitcher.displayName="LangSwitcher",LangSwitcher.__docgenInfo={description:"",displayName:"LangSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/LangSwitcher/LangSwitcher.tsx#LangSwitcher"]={docgenInfo:LangSwitcher.__docgenInfo,name:"LangSwitcher",path:"src/shared/LangSwitcher/LangSwitcher.tsx#LangSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ThemeSwitcher/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ThemeSwitcher});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ThemeSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ThemeSwitcher/ThemeSwitcher.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ThemeSwitcher_module.Z,options);const ThemeSwitcher_ThemeSwitcher_module=ThemeSwitcher_module.Z&&ThemeSwitcher_module.Z.locals?ThemeSwitcher_module.Z.locals:void 0;var _icons,theming=__webpack_require__("./src/app/theming/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var icons=(_defineProperty(_icons={},theming.Q2.light,"🌝"),_defineProperty(_icons,theming.Q2.dark,"🌚"),_icons),ThemeSwitcher=function ThemeSwitcher(_ref){var className=_ref.className,_useThemeContext=(0,theming.TC)(),theme=_useThemeContext.theme,toggleTheme=_useThemeContext.toggleTheme;return(0,jsx_runtime.jsx)("button",{type:"button",className:(0,clsx_m.Z)(ThemeSwitcher_ThemeSwitcher_module.root,className),onClick:toggleTheme,children:icons[theme]})};ThemeSwitcher.displayName="ThemeSwitcher";try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:"",displayName:"ThemeSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ThemeSwitcher/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/shared/ThemeSwitcher/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/LangSwitcher/LangSwitcher.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".U0qWZGNAhHPOhOjxA9uo{border:0;padding:0;background:none;outline:none;cursor:pointer;font-size:32px}","",{version:3,sources:["webpack://./src/shared/LangSwitcher/LangSwitcher.module.sass"],names:[],mappings:"AAAA,sBACE,QAAA,CACA,SAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CACA,cAAA",sourcesContent:[".root\n  border: 0\n  padding: 0\n  background: none\n  outline: none\n  cursor: pointer\n  font-size: 32px\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"U0qWZGNAhHPOhOjxA9uo"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ThemeSwitcher/ThemeSwitcher.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sVa9RoOHAwqpmTcoUtzh{border:0;padding:0;background:none;outline:none;cursor:pointer;font-size:32px}","",{version:3,sources:["webpack://./src/shared/ThemeSwitcher/ThemeSwitcher.module.sass"],names:[],mappings:"AAAA,sBACE,QAAA,CACA,SAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CACA,cAAA",sourcesContent:[".root\n  border: 0\n  padding: 0\n  background: none\n  outline: none\n  cursor: pointer\n  font-size: 32px\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"sVa9RoOHAwqpmTcoUtzh"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/header/header.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CXkGRTItXdKW5oVtZZiA{position:sticky;top:0;left:0;right:0;background:linear-gradient(45deg, rgb(69, 104, 220) -11.32%, rgb(176, 106, 179) 109.99%);padding:12px 32px;z-index:99999;display:flex;align-items:center;justify-content:space-between;border-radius:12px}.CXkGRTItXdKW5oVtZZiA div{display:flex;align-items:center;justify-content:space-around;gap:18px}","",{version:3,sources:["webpack://./src/shared/header/header.module.sass"],names:[],mappings:"AAAA,sBACI,eAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,wFAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CAEJ,0BACI,YAAA,CACA,kBAAA,CACA,4BAAA,CACA,QAAA",sourcesContent:[".header\n    position: sticky\n    top: 0\n    left: 0\n    right: 0\n    background: linear-gradient(45deg, rgb(69, 104, 220) -11.32%, rgb(176, 106, 179) 109.99%)\n    padding: 12px 32px\n    z-index: 99999\n    display: flex\n    align-items: center\n    justify-content: space-between\n    border-radius: 12px\n\n.header div\n    display: flex\n    align-items: center\n    justify-content: space-around\n    gap: 18px\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={header:"CXkGRTItXdKW5oVtZZiA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/layout/layout.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"html.light body{background-color:#fff}html.dark body{background-color:#23272f}.qbzmlDd7Vvp9HTVcWfTn{margin:0 auto;max-width:1200px;padding-top:8px}html.light .qbzmlDd7Vvp9HTVcWfTn{background-color:#fff}html.dark .qbzmlDd7Vvp9HTVcWfTn{background-color:#23272f}","",{version:3,sources:["webpack://./src/app/theming/mixins.scss","webpack://./src/shared/layout/layout.module.sass"],names:[],mappings:"AA2BW,gBACP,qBAAA,CAEO,eACP,wBAAA,CC1BJ,sBACI,aAAA,CACA,gBAAA,CACA,eAAA,CDmBO,iCACP,qBAAA,CAEO,gCACP,wBAAA",sourcesContent:['@import "./theme";\n\n/**\nПример использования:\n  body\n    @include theme(color, text)\n\n  создаст\n  html.light body {\n    color: text для светлой темы\n  }\n\n  html.dark body {\n    color: text для темной темы\n  }\n*/\n\n/**\nКак это работает\n@at-root обозначает это написанные свойства не должны быть вложены. То есть не body html.light body, а html.light body\nhtml:global(.light) #{&} обозначает, что нужно в html с классом light в выбранном элементе (& будет заменен на соответствущий селектор) указать следующие свойства\nпоследующая строка создает свойства, например color: #ccc\nmap-get - встроенная функция sass, которая достает из карты (map) значение переменной $var\nв некоторых свойствах недостаточно указать просто значение, а нужно указать дополнительные данные,\nнапример theme(border, var, 1px solid) создаст border: 1px solid varValue(тот цвет, который находится в по ключу var)\n*/\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root html:global(.light) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root html:global(.dark) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}\n','@import "src/app/theming/mixins"\n\nbody\n    +theme(background-color, mainBg)\n\n.container\n    margin: 0 auto\n    max-width: 1200px\n    padding-top: 8px\n    +theme(background-color, mainBg)\n\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"qbzmlDd7Vvp9HTVcWfTn"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/logo/logo.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CBgynX5RvTlv9ISZihlU{color:#fff;font-weight:bold;text-transform:uppercase;font-family:Arial,serif}","",{version:3,sources:["webpack://./src/shared/logo/logo.module.sass"],names:[],mappings:"AAAA,sBACI,UAAA,CACA,gBAAA,CACA,wBAAA,CACA,uBAAA",sourcesContent:[".logo\n    color: white\n    font-weight: bold\n    text-transform: uppercase\n    font-family: Arial, serif\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={logo:"CBgynX5RvTlv9ISZihlU"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);