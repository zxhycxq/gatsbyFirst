(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return l});a(102),a(71),a(47),a(235),a(103),a(237),a(239);var n=a(0),r=a.n(n),i=(a(218),a(219)),o=a(221);t.default=function(e){var t=e.data.allMarkdownRemark,a={};t.edges.forEach(function(e){e.node.frontmatter.tags.forEach(function(e){a[e]?a[e]+=1:a[e]=1})});var n=Array.from(Object.keys(a)).sort(function(e,t){return a[t]-a[e]});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement("div",{className:"col "},n.map(function(e){return r.a.createElement(i.a,{name:e,key:e,count:a[e]})}))),r.a.createElement(o.a,{title:"標籤",url:"/tags/",siteTitleAlt:"的博客",isPost:!1,description:"Tags Page",image:"https://i.imgur.com/M795H8A.jpg"}))};var l="3215885689"},217:function(e){e.exports={data:{all:{totalCount:4},limited:{latestPosts:[{node:{fields:{slug:"/2019/09/13/about/"},frontmatter:{id:"c192eaba9fefc632acf87ed636593475",title:"关于作者",url:"/2019/09/13/about/",date:"2019-09-13T00:00:00.000Z",tags:["杂谈"],description:"你好。",headerImage:""}}},{node:{fields:{slug:"learn-javascript-through-stackoverflow"},frontmatter:{id:null,title:"标题？",url:"learn-javascript-through-stackoverflow",date:"2019-03-15T00:00:00.000Z",tags:["JavaScript"],description:"描述",headerImage:""}}},{node:{fields:{slug:"/why-import"},frontmatter:{id:null,title:"我是标题啊？",url:"/why-import",date:"2019-02-26T09:44:05.963Z",tags:["React","Babel","JSX","閱讀","前端"],description:"哈哈我是描述啊",headerImage:"https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin/417.jpg?2"}}},{node:{fields:{slug:"/如何用"},frontmatter:{id:null,title:"React",url:"/如何用",date:"2019-02-23T00:00:00.000Z",tags:["Markdown","React","XSS","GatsbyJS"],description:"嘻嘻。",headerImage:""}}}]}}}},218:function(e,t,a){"use strict";a(24);var n=a(217),r=a(0),i=a.n(r),o=a(18),l=a(1),c=a.n(l),s=a(67),m=a(2),u=a(36),f=(a(197),m.config.friends),p=void 0===f?[]:f,d=function(){return i.a.createElement("div",{className:"friend"},i.a.createElement("p",null,"友情链接"),p.map(function(e){return i.a.createElement(u.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})}))},g=(a(198),function(e){var t=e.posts;return i.a.createElement("div",{className:"latest-post"},i.a.createElement("p",null,"最新文章"),t.map(function(e){var t=e.node;return i.a.createElement(o.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)}))});g.propTypes={posts:c.a.arrayOf(c.a.object).isRequired};a(199);var h=function(e){var t=e.totalCount;e.posts;return i.a.createElement("div",{className:"d-none d-lg-block information"},i.a.createElement("hr",null),i.a.createElement("p",null,"共 ",t," 篇文章"),i.a.createElement("hr",null),i.a.createElement("hr",null),i.a.createElement(d,null))};h.propTypes={totalCount:c.a.number.isRequired,posts:c.a.array},h.defaultProps={posts:[]};var E=h,v=(a(200),m.config.wordings),y=void 0===v?[]:v,b=m.config.githubUsername,w=m.config.zhihuUsername,k=m.config.email,N=m.config.iconUrl,T=m.config.about,P=m.config.facebook,A=function(e){var t=e.href,a=e.icon;return i.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},i.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},i.a.createElement(s.a,{icon:a})))},R=function(e){var t=e.totalCount,a=e.latestPosts;return i.a.createElement("header",{className:"intro-header site-heading col-xl-4  order-lg-1"},i.a.createElement("div",{className:"about-me"},i.a.createElement(o.Link,{to:T,href:T,className:"name"},i.a.createElement("img",{className:"avatar",src:N,alt:"Calpa"}),i.a.createElement("h4",null,"向前")),i.a.createElement("p",{className:"mb-1"},y[0]),i.a.createElement("p",{className:"mb-3"},y[1]),i.a.createElement(A,{href:"https://www.zhihu.com/people/"+w,icon:["fab","zhihu"]}),i.a.createElement(A,{href:"https://github.com/"+b,icon:["fab","github"]}),i.a.createElement(A,{href:"mailto:"+k,icon:["far","envelope"]}),P&&i.a.createElement(A,{href:"https://www.facebook.com/"+P+"/",icon:["fab","facebook"]}),i.a.createElement(E,{totalCount:t,posts:a})))};A.propTypes={href:c.a.string.isRequired,icon:c.a.arrayOf(c.a.string).isRequired},R.propTypes={totalCount:c.a.number,latestPosts:c.a.array},R.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return i.a.createElement(o.StaticQuery,{query:"1307080370",render:function(e){return i.a.createElement(R,Object.assign({},e.all,e.limited))},data:n})}},219:function(e,t,a){"use strict";a(95);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),l=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};l.propTypes={name:o.a.string.isRequired,count:o.a.oneOfType([o.a.string,o.a.number])},l.defaultProps={count:""},t.a=l},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(69),o=a.n(i),l=a(1),c=a.n(l),s=a(2),m=a.n(s),u=function(e){var t=e.url,a=e.title,n=e.description,i=e.image,l=(e.siteTitleAlt,e.isPost);return r.a.createElement(o.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:i}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,i=e.image,o=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:i}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:i},description:o}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),l?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:i}),r.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:m.a.twitter_username?m.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:i}))};u.propTypes={url:c.a.string.isRequired,title:c.a.string,description:c.a.string.isRequired,image:c.a.string.isRequired,siteTitleAlt:c.a.string.isRequired,isPost:c.a.bool.isRequired},u.defaultProps={title:m.a.title},t.a=u},235:function(e,t,a){var n=a(35),r=a(46);a(236)("keys",function(){return function(e){return r(n(e))}})},236:function(e,t,a){var n=a(14),r=a(26),i=a(25);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",o)}},237:function(e,t,a){"use strict";var n=a(28),r=a(14),i=a(35),o=a(98),l=a(99),c=a(19),s=a(238),m=a(100);r(r.S+r.F*!a(101)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,u,f=i(e),p="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,h=void 0!==g,E=0,v=m(f);if(h&&(g=n(g,d>2?arguments[2]:void 0,2)),null==v||p==Array&&l(v))for(a=new p(t=c(f.length));t>E;E++)s(a,E,h?g(f[E],E):f[E]);else for(u=v.call(f),a=new p;!(r=u.next()).done;E++)s(a,E,h?o(u,g,[r.value,E],!0):r.value);return a.length=E,a}})},238:function(e,t,a){"use strict";var n=a(27),r=a(70);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},239:function(e,t,a){"use strict";var n=a(14),r=a(37),i=a(35),o=a(25),l=[].sort,c=[1,2,3];n(n.P+n.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!a(240)(l)),"Array",{sort:function(e){return void 0===e?l.call(i(this)):l.call(i(this),r(e))}})},240:function(e,t,a){"use strict";var n=a(25);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-tags-js-bbdce3db461dcc1451bd.js.map