(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={Container:"Profile_Container__XPxUT",Description:"Profile_Description__cBv-6",Avatar:"Profile_Avatar__3DREm",Name:"Profile_Name__3DlBQ",Tag:"Profile_Tag__3_WSb",Location:"Profile_Location__1mmr4",Stats:"Profile_Stats__303rv",Label:"Profile_Label__3NYIf",Quantity:"Profile_Quantity__3Ed8R"}},,function(e,a,t){e.exports={Statistics:"Statistics_Statistics__3chBt",Title:"Statistics_Title__30NrR",Stat:"Statistics_Stat__2clUM",Item:"Statistics_Item__1ENJF",Label:"Statistics_Label__2PAL1",Percentage:"Statistics_Percentage__Udud5"}},function(e,a,t){e.exports={Item:"Friend-list-item_Item__3zluJ",Status:"Friend-list-item_Status__2bXr_",StatusOnline:"Friend-list-item_StatusOnline__36sFH",StatusOffline:"Friend-list-item_StatusOffline__jgxPm",Avatar:"Friend-list-item_Avatar__39ZCL",Name:"Friend-list-item_Name__1PHsR"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e,a,t){e.exports={FriendList:"FriendList_FriendList__1KuNS"}},function(e,a,t){e.exports={TransactionTable:"Transactions-history_TransactionTable__3f874"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),i=t(7),s=t.n(i),r=t(1),l=t.n(r),d=t(0);function o(e){var a=e.username,t=e.tag,n=e.location,c=e.avatar,i=e.stats;return Object(d.jsxs)("div",{className:l.a.Container,children:[Object(d.jsxs)("div",{className:l.a.Description,children:[Object(d.jsx)("img",{className:l.a.Avatar,src:c,alt:"User avatar",width:"100"}),Object(d.jsx)("p",{className:l.a.Name,children:a}),Object(d.jsxs)("p",{className:l.a.Tag,children:["@",t]}),Object(d.jsx)("p",{className:l.a.Location,children:n})]}),Object(d.jsxs)("ul",{className:l.a.Stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.Label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.Quantity,children:i.followers})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.Label,children:"Views"}),Object(d.jsx)("span",{className:l.a.Quantity,children:i.views})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.Label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.Quantity,children:i.likes})]})]})]})}var b=t(3),m=t.n(b);function u(e){var a=e.title,t=e.stats;return Object(d.jsxs)("section",{className:m.a.Statistics,children:[a&&Object(d.jsx)("h2",{className:m.a.Title,children:a}),Object(d.jsx)("ul",{className:m.a.Stat,children:t.map((function(e){var a=e.id,t=e.label,n=e.percentage;return Object(d.jsxs)("li",{className:m.a.Item,style:{backgroundColor:"rgb("+200*Math.random()+","+200*Math.random()+","+200*Math.random()+")"},children:[Object(d.jsx)("span",{className:m.a.Label,children:t}),Object(d.jsxs)("span",{className:m.a.Percentage,children:[n,"%"]})]},a)}))})]})}var p=t(4),j=t.n(p);function f(e){var a=e.avatar,t=e.name,n=e.isOnline?"StatusOnline":"StatusOffline";return Object(d.jsxs)("li",{className:j.a.Item,children:[Object(d.jsx)("span",{className:"".concat(j.a.Status," ").concat(j.a[n])}),Object(d.jsx)("img",{className:j.a.Avatar,src:a,alt:"User avatar",width:"48"}),Object(d.jsx)("p",{className:j.a.Name,children:t})]})}var _=t(8),O=t.n(_);function h(e){var a=e.friends;return console.log(a),Object(d.jsx)("ul",{className:O.a.FriendList,children:a.map((function(e){var a=e.avatar,t=e.name,n=e.isOnline,c=e.id;return Object(d.jsx)(f,{avatar:a,name:t,isOnline:n},c)}))})}var y=t(9),x=t.n(y);function v(e){var a=e.items;return Object(d.jsxs)("table",{className:x.a.TransactionTable,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:n}),Object(d.jsx)("td",{children:c})]},a)}))})]})}var N=t(5),g=t(10),S=t(11),w=t(12),L=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{username:N.username,tag:N.tag,location:N.location,avatar:N.avatar,stats:N.stats}),Object(d.jsx)(u,{title:"Upload stats",stats:g}),Object(d.jsx)(h,{friends:S}),Object(d.jsx)(v,{items:w})]})};t(18);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7fb68b5f.chunk.js.map