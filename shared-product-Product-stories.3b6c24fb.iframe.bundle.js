"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[216],{"./src/shared/product/Product.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProductStory:()=>ProductStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Product_stories});__webpack_require__("./node_modules/react/index.js");var product_module=__webpack_require__("./src/shared/product/product.module.sass"),AddToCart=__webpack_require__("./src/shared/addToCart/AddToCart.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Product=function Product(_ref){var photo=_ref.photo,name=_ref.name,description=_ref.description,price=_ref.price;return(0,jsx_runtime.jsxs)("div",{className:product_module.Z.product,children:[(0,jsx_runtime.jsx)("div",{className:product_module.Z.photo,children:(0,jsx_runtime.jsx)("img",{src:photo,alt:name})}),(0,jsx_runtime.jsx)("div",{className:product_module.Z.title,children:name}),(0,jsx_runtime.jsx)("div",{className:product_module.Z.description,children:description}),(0,jsx_runtime.jsxs)("div",{className:product_module.Z.price,children:[price," руб."]}),(0,jsx_runtime.jsx)(AddToCart.o,{count:0,disabled:!0})]})};Product.displayName="Product";try{Product.displayName="Product",Product.__docgenInfo={description:"",displayName:"Product",props:{photo:{defaultValue:null,description:"",name:"photo",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/product/Product.tsx#Product"]={docgenInfo:Product.__docgenInfo,name:"Product",path:"src/shared/product/Product.tsx#Product"})}catch(__react_docgen_typescript_loader_error){}const Product_stories={title:"Product",component:Product,tags:["autodocs"]};var ProductStory={args:{photo:"https://barskayatrapeza.ru/image/cache/catalog/frukty/krasnyejabloki-750x670.jpg",name:"Яблоки",description:"Вкусные, свежие, домашние",price:240}};ProductStory.parameters={...ProductStory.parameters,docs:{...ProductStory.parameters?.docs,source:{originalSource:"{\n  args: {\n    photo: 'https://barskayatrapeza.ru/image/cache/catalog/frukty/krasnyejabloki-750x670.jpg',\n    name: 'Яблоки',\n    description: 'Вкусные, свежие, домашние',\n    price: 240\n  }\n}",...ProductStory.parameters?.docs?.source}}};const __namedExportsOrder=["ProductStory"]},"./src/shared/addToCart/AddToCart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>AddToCart});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),addToCart=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/addToCart/addToCart.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(addToCart.Z,options);addToCart.Z&&addToCart.Z.locals&&addToCart.Z.locals;var _templateObject,es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var AddToCart=function AddToCart(_ref){var strings,raw,count=_ref.count,disabled=_ref.disabled,t=(0,es.$G)().t;return 0===count?(0,jsx_runtime.jsx)("button",{disabled,children:t(_templateObject||(strings=["components.AddToCart.text"],raw||(raw=strings.slice(0)),_templateObject=Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))))}):(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{className:"decrease",disabled,children:"-"}),count," шт.",(0,jsx_runtime.jsx)("button",{className:"increase",disabled,children:"+"})]})};AddToCart.displayName="AddToCart";try{AddToCart.displayName="AddToCart",AddToCart.__docgenInfo={description:"",displayName:"AddToCart",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/addToCart/AddToCart.tsx#AddToCart"]={docgenInfo:AddToCart.__docgenInfo,name:"AddToCart",path:"src/shared/addToCart/AddToCart.tsx#AddToCart"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/product/product.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".mynlQdabFRuAa2X330KZ{border-radius:8px;border:1px solid;padding:12px;font-family:Arial,serif;display:inline-block;margin:8px;max-width:240px}html.light .mynlQdabFRuAa2X330KZ{background-color:#fff}html.dark .mynlQdabFRuAa2X330KZ{background-color:#23272f}html.light .mynlQdabFRuAa2X330KZ{border-color:#f0f0f0}html.dark .mynlQdabFRuAa2X330KZ{border-color:#3e4148}html.light .mynlQdabFRuAa2X330KZ{color:#404757}html.dark .mynlQdabFRuAa2X330KZ{color:#f6f7f9}.AskNtZl4Ps_5uEHkrXB7{border-radius:8px;border:1px solid;padding:12px;font-family:Arial,serif;display:flex;justify-content:left;gap:10px}html.light .AskNtZl4Ps_5uEHkrXB7{background-color:#fff}html.dark .AskNtZl4Ps_5uEHkrXB7{background-color:#23272f}html.light .AskNtZl4Ps_5uEHkrXB7{border-color:#f0f0f0}html.dark .AskNtZl4Ps_5uEHkrXB7{border-color:#3e4148}html.light .AskNtZl4Ps_5uEHkrXB7{color:#404757}html.dark .AskNtZl4Ps_5uEHkrXB7{color:#f6f7f9}.AskNtZl4Ps_5uEHkrXB7 .tk7Y8EqGRcrUWcEJCHs2{margin:12px 0}.zNyXcKcTBeNGrElRweQh{width:100%;min-width:140px;height:140px;border-radius:8px;margin-bottom:12px}html.light .zNyXcKcTBeNGrElRweQh{background-color:linear-gradient(90deg, #f2f2f2, #e6e6e6, #f2f2f2)}html.dark .zNyXcKcTBeNGrElRweQh{background-color:linear-gradient(90deg, #383838, #2c2c2c, #383838)}.OO_INopn9Joc0PTMH2H4{color:#505050;font-size:13px}html.light .OO_INopn9Joc0PTMH2H4{color:#5f697e}html.dark .OO_INopn9Joc0PTMH2H4{color:#ebecf0}.mynlQdabFRuAa2X330KZ .tk7Y8EqGRcrUWcEJCHs2{text-align:right;margin-top:12px}.zNyXcKcTBeNGrElRweQh img{width:100%;height:100%;object-fit:contain}","",{version:3,sources:["webpack://./src/shared/product/product.module.sass","webpack://./src/app/theming/mixins.scss"],names:[],mappings:"AAEA,sBACI,iBAAA,CACA,gBAAA,CACA,YAAA,CACA,uBAAA,CACA,oBAAA,CACA,UAAA,CACA,eAAA,CCkBO,iCACP,qBAAA,CAEO,gCACP,wBAAA,CAJO,iCACP,oBAAA,CAEO,gCACP,oBAAA,CAJO,iCACP,aAAA,CAEO,gCACP,aAAA,CDjBJ,sBACI,iBAAA,CACA,gBAAA,CACA,YAAA,CACA,uBAAA,CACA,YAAA,CACA,oBAAA,CACA,QAAA,CCMO,iCACP,qBAAA,CAEO,gCACP,wBAAA,CAJO,iCACP,oBAAA,CAEO,gCACP,oBAAA,CAJO,iCACP,aAAA,CAEO,gCACP,aAAA,CDLJ,4CACI,aAAA,CAEJ,sBACI,UAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,kBAAA,CCPO,iCACP,kEAAA,CAEO,gCACP,kEAAA,CDMJ,sBACI,aAAA,CACA,cAAA,CCZO,iCACP,aAAA,CAEO,gCACP,aAAA,CDWJ,4CACI,gBAAA,CACA,eAAA,CAEJ,0BACI,UAAA,CACA,WAAA,CACA,kBAAA",sourcesContent:['@import "src/app/theming/mixins"\n\n.product\n    border-radius: 8px\n    border: 1px solid\n    padding: 12px\n    font-family: Arial, serif\n    display: inline-block\n    margin: 8px\n    max-width: 240px\n    +theme(background-color, mainBg)\n    +theme(border-color, borderColor2)\n    +theme(color, text)\n\n.product_full\n    border-radius: 8px\n    border: 1px solid\n    padding: 12px\n    font-family: Arial, serif\n    display: flex\n    justify-content: left\n    gap: 10px\n    +theme(background-color, mainBg)\n    +theme(border-color, borderColor2)\n    +theme(color, text)\n\n.product_full .price\n    margin: 12px 0\n\n.photo\n    width: 100%\n    min-width: 140px\n    height: 140px\n    border-radius: 8px\n    margin-bottom: 12px\n    +theme(background-color, skeletonImage)\n\n.description\n    color: rgb(80, 80, 80)\n    font-size: 13px\n    +theme(color, lightText)\n\n.product .price\n    text-align: right\n    margin-top: 12px\n\n.photo img\n    width: 100%\n    height: 100%\n    object-fit: contain\n\n','@import "./theme";\n\n/**\nПример использования:\n  body\n    @include theme(color, text)\n\n  создаст\n  html.light body {\n    color: text для светлой темы\n  }\n\n  html.dark body {\n    color: text для темной темы\n  }\n*/\n\n/**\nКак это работает\n@at-root обозначает это написанные свойства не должны быть вложены. То есть не body html.light body, а html.light body\nhtml:global(.light) #{&} обозначает, что нужно в html с классом light в выбранном элементе (& будет заменен на соответствущий селектор) указать следующие свойства\nпоследующая строка создает свойства, например color: #ccc\nmap-get - встроенная функция sass, которая достает из карты (map) значение переменной $var\nв некоторых свойствах недостаточно указать просто значение, а нужно указать дополнительные данные,\nнапример theme(border, var, 1px solid) создаст border: 1px solid varValue(тот цвет, который находится в по ключу var)\n*/\n@mixin theme($property, $var, $before:null, $after:null) {\n  @at-root html:global(.light) #{&} {\n    #{$property}: #{$before} #{map-get($light, $var)} #{$after};\n  }\n  @at-root html:global(.dark) #{&} {\n    #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={product:"mynlQdabFRuAa2X330KZ",product_full:"AskNtZl4Ps_5uEHkrXB7",price:"tk7Y8EqGRcrUWcEJCHs2",photo:"zNyXcKcTBeNGrElRweQh",description:"OO_INopn9Joc0PTMH2H4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/shared/addToCart/addToCart.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/product/product.module.sass":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_product_module_sass__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/product/product.module.sass"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_product_module_sass__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_product_module_sass__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_product_module_sass__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_product_module_sass__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);