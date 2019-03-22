(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docz/examples/07-example-custom-render.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),c=t("./node_modules/react/index.js"),d=t.n(c),u=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./docz/utils/Playground.jsx"),p=t("./src/material-table.js"),b=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).layout=null,t}return Object(i.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=Object(r.a)(e,["components"]);return d.a.createElement(u.MDXTag,{name:"wrapper",components:n},d.a.createElement(u.MDXTag,{name:"h1",components:n,props:{id:"custom-render-example"}},"Custom Render Example"),d.a.createElement(m.a,{__position:0,__code:"<MaterialTable\n  columns={[\n    {\n      title: 'Name',\n      render: rowData => rowData.name + ' ' + rowData.surname,\n    },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n    {\n      title: 'Score',\n      field: 'successScore',\n      render: rowData => {\n        const score = rowData.successScore + '%'\n        const color = rowData.successScore > 70 ? '#4CAF50' : '#f44336'\n        return (\n          <div style={{ width: '100%', backgroundColor: '#ddd', height: 20 }}>\n            <div\n              style={{\n                textAlign: 'left',\n                padding: 1,\n                color: 'white',\n                width: score,\n                backgroundColor: color,\n                height: 20,\n              }}\n            >\n              {score}\n            </div>\n          </div>\n        )\n      },\n    },\n  ]}\n  data={[\n    {\n      name: 'Mehmet',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 63,\n      successScore: 58,\n    },\n    {\n      name: 'Zerya Bet\xfcl',\n      surname: 'Baran',\n      birthYear: 2017,\n      birthCity: 34,\n      successScore: 90,\n    },\n  ]}\n  title=\"Custom Render Example\"\n/>",__scope:{props:this?this.props:t,Playground:m.a,MaterialTable:p.b},__codesandbox:"undefined"},d.a.createElement(p.b,{columns:[{title:"Name",render:function(e){return e.name+" "+e.surname}},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}},{title:"Score",field:"successScore",render:function(e){var n=e.successScore+"%",t=e.successScore>70?"#4CAF50":"#f44336";return d.a.createElement("div",{style:{width:"100%",backgroundColor:"#ddd",height:20}},d.a.createElement("div",{style:{textAlign:"left",padding:1,color:"white",width:n,backgroundColor:t,height:20}},n))}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63,successScore:58},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34,successScore:90}],title:"Custom Render Example"})))}}]),n}(d.a.Component);b.isMDXComponent=!0},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var r=t("./node_modules/docz/dist/index.esm.js"),a=t("./node_modules/codemirror/lib/codemirror.js");t.n(a).a.defaults.viewportMargin=1/0,n.a=r.c}}]);
//# sourceMappingURL=docz-examples-07-example-custom-render.43c5b4c9a5cff2471fc7.js.map