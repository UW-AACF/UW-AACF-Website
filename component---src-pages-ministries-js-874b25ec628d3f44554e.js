"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[142],{6970:function(e,a,r){r.r(a),r.d(a,{default:function(){return E}});var s=r(7294),t=r(1883),l=r(8032),n=r(7354),m=r(2103),i="ministries-module--core--bf7a6",c="ministries-module--detail--c890b",d="ministries-module--heading--671ef",o="ministries-module--name--ff960",f="ministries-module--subtitle--b3b38",N=r(682),u=r(4051),y=r(1555),x=r(3025);var E=()=>{const e=(0,t.useStaticQuery)("4175221218");return s.createElement(n.Z,null,s.createElement(m.Z,{title:"Ministries"}),s.createElement("div",{className:"mb-5"},s.createElement("div",{fluid:!0,className:[d,"text-center mb-0"].join(" ")},s.createElement(N.Z,null,s.createElement(u.Z,null,s.createElement(y.Z,null,s.createElement("h1",null,"AACF LEADERSHIP TEAM"),s.createElement("p",null,"See below who is serving in AACF UW!"))))),e.allMarkdownRemark.edges[0].node.frontmatter.ministries.map(((e,a)=>s.createElement(s.Fragment,{key:a},s.createElement(N.Z,{className:"mb-4"}," ",s.createElement(u.Z,{className:"ministries-module--ministry-title--e553a"},s.createElement(y.Z,null,s.createElement("h2",{className:"text-center mb-2"},e.ministry.type),s.createElement("p",{className:"text-center"},e.ministry.responsibility),s.createElement("hr",null))),s.createElement(u.Z,{className:"d-flex "+("advisor"!==e.ministry.type?"justify-content-left":"justify-content-center")},e.ministry.people.map(((a,r)=>"prayer"===e.ministry.type?s.createElement(y.Z,{key:r,className:"px-5 py-2 d-flex justify-content-center"},s.createElement("h3",{className:"ministries-module--prayer--8e334"},e.ministry.responsibility)):s.createElement(s.Fragment,{key:r},s.createElement(y.Z,{md:4,className:"px-5 py-2 d-flex justify-content-center"},s.createElement(x.Z,{style:{width:"18rem"},className:"border-0"},s.createElement(l.G,{image:(0,l.c)(a.person.featuredImage.childImageSharp),className:"card-img-top"}),s.createElement(x.Z.Body,{className:"ministries-module--card-body--b0ad9"},s.createElement(x.Z.Title,{className:[o,"mb-0"].join(" ")},a.person.name),""!==a.person.core.trim()&&s.createElement(x.Z.Text,{className:[i,"text-muted"].join(" ")},a.person.core),s.createElement(x.Z.Text,{className:[f,""].join(" ")},a.person.detail),s.createElement(x.Z.Text,{className:c},a.person.verse),s.createElement(x.Z.Text,{className:c},a.person.extra))))))))))))))}},3025:function(e,a,r){r.d(a,{Z:function(){return I}});var s=r(4184),t=r.n(s),l=r(7294),n=r(6792),m=r(5893);const i=l.forwardRef((({className:e,bsPrefix:a,as:r="div",...s},l)=>(a=(0,n.vE)(a,"card-body"),(0,m.jsx)(r,{ref:l,className:t()(e,a),...s}))));i.displayName="CardBody";var c=i;const d=l.forwardRef((({className:e,bsPrefix:a,as:r="div",...s},l)=>(a=(0,n.vE)(a,"card-footer"),(0,m.jsx)(r,{ref:l,className:t()(e,a),...s}))));d.displayName="CardFooter";var o=d,f=r(9059);const N=l.forwardRef((({bsPrefix:e,className:a,as:r="div",...s},i)=>{const c=(0,n.vE)(e,"card-header"),d=(0,l.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,m.jsx)(f.Z.Provider,{value:d,children:(0,m.jsx)(r,{ref:i,...s,className:t()(a,c)})})}));N.displayName="CardHeader";var u=N;const y=l.forwardRef((({bsPrefix:e,className:a,variant:r,as:s="img",...l},i)=>{const c=(0,n.vE)(e,"card-img");return(0,m.jsx)(s,{ref:i,className:t()(r?`${c}-${r}`:c,a),...l})}));y.displayName="CardImg";var x=y;const E=l.forwardRef((({className:e,bsPrefix:a,as:r="div",...s},l)=>(a=(0,n.vE)(a,"card-img-overlay"),(0,m.jsx)(r,{ref:l,className:t()(e,a),...s}))));E.displayName="CardImgOverlay";var b=E;const p=l.forwardRef((({className:e,bsPrefix:a,as:r="a",...s},l)=>(a=(0,n.vE)(a,"card-link"),(0,m.jsx)(r,{ref:l,className:t()(e,a),...s}))));p.displayName="CardLink";var v=p,Z=r(9602);const g=(0,Z.Z)("h6"),h=l.forwardRef((({className:e,bsPrefix:a,as:r=g,...s},l)=>(a=(0,n.vE)(a,"card-subtitle"),(0,m.jsx)(r,{ref:l,className:t()(e,a),...s}))));h.displayName="CardSubtitle";var j=h;const w=l.forwardRef((({className:e,bsPrefix:a,as:r="p",...s},l)=>(a=(0,n.vE)(a,"card-text"),(0,m.jsx)(r,{ref:l,className:t()(e,a),...s}))));w.displayName="CardText";var C=w;const P=(0,Z.Z)("h5"),k=l.forwardRef((({className:e,bsPrefix:a,as:r=P,...s},l)=>(a=(0,n.vE)(a,"card-title"),(0,m.jsx)(r,{ref:l,className:t()(e,a),...s}))));k.displayName="CardTitle";var R=k;const T=l.forwardRef((({bsPrefix:e,className:a,bg:r,text:s,border:l,body:i=!1,children:d,as:o="div",...f},N)=>{const u=(0,n.vE)(e,"card");return(0,m.jsx)(o,{ref:N,...f,className:t()(a,u,r&&`bg-${r}`,s&&`text-${s}`,l&&`border-${l}`),children:i?(0,m.jsx)(c,{children:d}):d})}));T.displayName="Card";var I=Object.assign(T,{Img:x,Title:R,Subtitle:j,Body:c,Link:v,Text:C,Header:u,Footer:o,ImgOverlay:b})}}]);
//# sourceMappingURL=component---src-pages-ministries-js-874b25ec628d3f44554e.js.map