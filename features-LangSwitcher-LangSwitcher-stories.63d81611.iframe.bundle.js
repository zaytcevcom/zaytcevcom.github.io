"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[549],{"./src/features/LangSwitcher/LangSwitcher.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LangSwitcherStory:()=>LangSwitcherStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"LangSwitcher",component:__webpack_require__("./src/features/LangSwitcher/LangSwitcher.tsx").k,tags:["autodocs"]};var LangSwitcherStory={};LangSwitcherStory.parameters={...LangSwitcherStory.parameters,docs:{...LangSwitcherStory.parameters?.docs,source:{originalSource:"{}",...LangSwitcherStory.parameters?.docs?.source}}};const __namedExportsOrder=["LangSwitcherStory"]},"./src/features/LangSwitcher/LangSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>LangSwitcher});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),Locale=function(Locale){return Locale.ru="ru",Locale.en="en",Locale}({});i18next.ZP.use(es.Db).init({resources:{en:{translation:{components:{Logo:{text:"Logo"},AddToCart:{text:"Add to cart"}}}},ru:{translation:{components:{Logo:{text:"Логотип"},AddToCart:{text:"В корзину"}}}}},lng:localStorage.getItem("lang")||Locale.ru,interpolation:{escapeValue:!1}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LangSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/LangSwitcher/LangSwitcher.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LangSwitcher_module.Z,options);const LangSwitcher_LangSwitcher_module=LangSwitcher_module.Z&&LangSwitcher_module.Z.locals?LangSwitcher_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LangSwitcher=function LangSwitcher(_ref){var className=_ref.className,i18n=(0,es.$G)().i18n,lang=i18n.language===Locale.ru?Locale.en:Locale.ru,text=i18n.language===Locale.ru?"🇷🇺":"🇺🇸";return(0,jsx_runtime.jsx)("button",{type:"button",className:(0,clsx_m.Z)(LangSwitcher_LangSwitcher_module.root,className),onClick:function onClick(){return i18n.changeLanguage(lang)},children:text})};LangSwitcher.displayName="LangSwitcher";try{LangSwitcher.displayName="LangSwitcher",LangSwitcher.__docgenInfo={description:"",displayName:"LangSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/LangSwitcher/LangSwitcher.tsx#LangSwitcher"]={docgenInfo:LangSwitcher.__docgenInfo,name:"LangSwitcher",path:"src/features/LangSwitcher/LangSwitcher.tsx#LangSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/LangSwitcher/LangSwitcher.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".yFlSk9Xlj7lHOyHIKv8o{border:0;padding:0;background:none;outline:none;cursor:pointer;font-size:32px}","",{version:3,sources:["webpack://./src/features/LangSwitcher/LangSwitcher.module.sass"],names:[],mappings:"AAAA,sBACE,QAAA,CACA,SAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CACA,cAAA",sourcesContent:[".root\n  border: 0\n  padding: 0\n  background: none\n  outline: none\n  cursor: pointer\n  font-size: 32px\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"yFlSk9Xlj7lHOyHIKv8o"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);