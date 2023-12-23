"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[349],{9516:function(e,a,r){r.r(a),r.d(a,{default:function(){return b}});var t=r(7294),s=r(1883),l=r(7354),c=r(2103),n=r(8032),o=r(682),d=r(4051),m=r(1555),i=r(3025),f=r(5005),u=r(3489),h=r(9267),N=(r.p,"churches-module--button--756e2"),E="churches-module--card--a28d6",v="churches-module--heading--52fee";var b=()=>{const e=(0,s.useStaticQuery)("1791853699");return t.createElement(l.Z,null,t.createElement(c.Z,{title:"Churches"}),t.createElement("div",{class:"jumbotron",fluid:!0,className:[v,"text-center"].join(" ")},t.createElement(o.Z,null,t.createElement(d.Z,null,t.createElement(m.Z,null,t.createElement("h1",null,"AACF IS NOT A REPLACEMENT FOR CHURCH!"))),t.createElement(d.Z,{className:"justify-content-center"},t.createElement(m.Z,{sm:12,md:8},t.createElement("p",null,"People in AACF go to different churches around UW and in their hometowns. Below are a list of churches in UW that some members of AACF go to. Click on each church to learn more about them."),t.createElement("p",null,"Click below to add your church or to check other churches!"),""===e.allMarkdownRemark.edges[0].node.frontmatter.link.trim()?t.createElement(h.Z,{overlay:t.createElement(u.Z,{id:"tooltip-disabled"}," Not Ready Yet! ")},t.createElement("span",{className:"d-inline-block"},t.createElement(f.Z,{className:N,disabled:!0,style:{pointerEvents:"none"},size:"lg",variant:"secondary"},"MORE CHURCHES"))):t.createElement(f.Z,{className:N,href:e.allMarkdownRemark.edges[0].node.frontmatter.link,rel:"noopener noreferrer",target:"_blank",size:"lg",variant:"dark"},"MORE CHURCHES"))))),t.createElement(o.Z,{className:"mb-5 text-center"}," ",t.createElement(d.Z,{className:"d-flex justify-content-center"},e.allMarkdownRemark.edges[0].node.frontmatter.churches.map(((e,a)=>t.createElement(t.Fragment,{key:a},console.log("@@@",e.church.img),t.createElement(m.Z,{md:4,lg:3,className:"px-2 py-2 d-flex justify-content-center"},t.createElement("a",{href:e.church.link,target:"_blank",rel:"noopener noreferrer"},t.createElement(i.Z,{style:{width:"14rem"},className:["border-0",E].join(" ")},t.createElement(n.G,{image:(0,n.c)(e.church.img),className:"card-img-top"}),t.createElement(i.Z.Body,null,t.createElement(i.Z.Title,{className:"churches-module--card-text--9f86a"},e.church.name)))))))))))}},3025:function(e,a,r){r.d(a,{Z:function(){return A}});var t=r(4184),s=r.n(t),l=r(7294),c=r(6792),n=r(5893);const o=l.forwardRef((({className:e,bsPrefix:a,as:r="div",...t},l)=>(a=(0,c.vE)(a,"card-body"),(0,n.jsx)(r,{ref:l,className:s()(e,a),...t}))));o.displayName="CardBody";var d=o;const m=l.forwardRef((({className:e,bsPrefix:a,as:r="div",...t},l)=>(a=(0,c.vE)(a,"card-footer"),(0,n.jsx)(r,{ref:l,className:s()(e,a),...t}))));m.displayName="CardFooter";var i=m,f=r(9059);const u=l.forwardRef((({bsPrefix:e,className:a,as:r="div",...t},o)=>{const d=(0,c.vE)(e,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,n.jsx)(f.Z.Provider,{value:m,children:(0,n.jsx)(r,{ref:o,...t,className:s()(a,d)})})}));u.displayName="CardHeader";var h=u;const N=l.forwardRef((({bsPrefix:e,className:a,variant:r,as:t="img",...l},o)=>{const d=(0,c.vE)(e,"card-img");return(0,n.jsx)(t,{ref:o,className:s()(r?`${d}-${r}`:d,a),...l})}));N.displayName="CardImg";var E=N;const v=l.forwardRef((({className:e,bsPrefix:a,as:r="div",...t},l)=>(a=(0,c.vE)(a,"card-img-overlay"),(0,n.jsx)(r,{ref:l,className:s()(e,a),...t}))));v.displayName="CardImgOverlay";var b=v;const x=l.forwardRef((({className:e,bsPrefix:a,as:r="a",...t},l)=>(a=(0,c.vE)(a,"card-link"),(0,n.jsx)(r,{ref:l,className:s()(e,a),...t}))));x.displayName="CardLink";var y=x,g=r(9602);const p=(0,g.Z)("h6"),C=l.forwardRef((({className:e,bsPrefix:a,as:r=p,...t},l)=>(a=(0,c.vE)(a,"card-subtitle"),(0,n.jsx)(r,{ref:l,className:s()(e,a),...t}))));C.displayName="CardSubtitle";var k=C;const w=l.forwardRef((({className:e,bsPrefix:a,as:r="p",...t},l)=>(a=(0,c.vE)(a,"card-text"),(0,n.jsx)(r,{ref:l,className:s()(e,a),...t}))));w.displayName="CardText";var R=w;const Z=(0,g.Z)("h5"),j=l.forwardRef((({className:e,bsPrefix:a,as:r=Z,...t},l)=>(a=(0,c.vE)(a,"card-title"),(0,n.jsx)(r,{ref:l,className:s()(e,a),...t}))));j.displayName="CardTitle";var P=j;const H=l.forwardRef((({bsPrefix:e,className:a,bg:r,text:t,border:l,body:o=!1,children:m,as:i="div",...f},u)=>{const h=(0,c.vE)(e,"card");return(0,n.jsx)(i,{ref:u,...f,className:s()(a,h,r&&`bg-${r}`,t&&`text-${t}`,l&&`border-${l}`),children:o?(0,n.jsx)(d,{children:m}):m})}));H.displayName="Card";var A=Object.assign(H,{Img:E,Title:P,Subtitle:k,Body:d,Link:y,Text:R,Header:h,Footer:i,ImgOverlay:b})}}]);
//# sourceMappingURL=component---src-pages-churches-js-9d17c41479ba98d81efa.js.map