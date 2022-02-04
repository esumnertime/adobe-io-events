(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7808],{10780:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return m}});var n,i=a(22122),s=a(19756),c=(a(15007),a(64983)),d=a(99536),o=["components"],r={},b=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.mdx)("div",e)}),p={_frontmatter:r},g=d.Z;function m(e){var t=e.components,a=(0,s.Z)(e,o);return(0,c.mdx)(g,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"tracing-adobe-io-events"},"Tracing Adobe I/O Events"),(0,c.mdx)("p",null,"To troubleshoot issues with webhook-based event-registrations, Adobe offers Debug Tracing feature. Using Debug Tracing, you can inspect the activity between the Adobe service and your integration to see what data is being sent and how your integration is responding.\nEach trace comprises of the event delivery HTTP request (sent by I/O Events), and response by the consumer application. This information can be of critical importance to your debugging efforts."),(0,c.mdx)(b,{variant:"info",slots:"text",mdxType:"InlineAlert"}),"Note that the maximum size of 'request-body' and 'response-body' in a trace is 2 KB. If any of these fields are larger than 2 KB, then they are trimmed at 2 KB boundary. The event payload that is delivered to your webhook is not trimmed.",(0,c.mdx)("p",null,(0,c.mdx)("strong",{parentName:"p"},"To access Debug Tracing:")),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Log into ",(0,c.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/"},"Adobe Developer Console")," and select the project containing the event registration.")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"From the ",(0,c.mdx)("em",{parentName:"p"},"Project Overview"),", select the event under ",(0,c.mdx)("em",{parentName:"p"},"Events")," in the left navigation.")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"From the ",(0,c.mdx)("em",{parentName:"p"},"Registration Details"),", select the ",(0,c.mdx)("em",{parentName:"p"},"Debug Tracing")," tab. You will see a list of events, beginning with the most recent.")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"The ",(0,c.mdx)("em",{parentName:"p"},"Debug Tracing")," tab shows last 100 traces for your webhook registration. ")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Select any trace in the list to expand its view and see more details. By default, the request (sent by Adobe) is shown, with headers and body. Select ",(0,c.mdx)("em",{parentName:"p"},"Response")," to view your integration's response to the event."))),(0,c.mdx)("p",null,"By inspecting the details of the request and response, you can examine the communication loop between Adobe and your integration to diagnose any breakdown in the flow or processing of events.  "),(0,c.mdx)("p",null,(0,c.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/cb523/events-debug-tracing.webp 320w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/797b9/events-debug-tracing.webp 640w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/4b075/events-debug-tracing.webp 1280w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/f3ff0/events-debug-tracing.webp 1920w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/a662b/events-debug-tracing.webp 2560w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/4f10c/events-debug-tracing.webp 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/72799/events-debug-tracing.png 320w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/6af66/events-debug-tracing.png 640w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/21b4d/events-debug-tracing.png 1280w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/29114/events-debug-tracing.png 1920w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/c2d13/events-debug-tracing.png 2560w","/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/60708/events-debug-tracing.png 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/b1b28ccdffb46d8a445002c01c34e5f1/21b4d/events-debug-tracing.png",alt:"events debug tracing",title:"events debug tracing",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("p",null,(0,c.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/cb523/events-debug-tracing-expanded.webp 320w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/797b9/events-debug-tracing-expanded.webp 640w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/4b075/events-debug-tracing-expanded.webp 1280w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/f3ff0/events-debug-tracing-expanded.webp 1920w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/a662b/events-debug-tracing-expanded.webp 2560w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/4f10c/events-debug-tracing-expanded.webp 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/72799/events-debug-tracing-expanded.png 320w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/6af66/events-debug-tracing-expanded.png 640w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/21b4d/events-debug-tracing-expanded.png 1280w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/29114/events-debug-tracing-expanded.png 1920w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/c2d13/events-debug-tracing-expanded.png 2560w","/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/60708/events-debug-tracing-expanded.png 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/ccf4b1cf6e4266e227a59c22cbb4d91d/21b4d/events-debug-tracing-expanded.png",alt:"events debug tracing expanded",title:"events debug tracing expanded",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("h3",{id:"filters"},"Filters"),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},'Use the "delivery status" dropdown to selectively fetch "success" or "error" traces only.')),(0,c.mdx)("p",null,(0,c.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/74197744a4c344584466919068600189/cb523/events-debug-tracing-by-status.webp 320w","/adobe-io-events/static/74197744a4c344584466919068600189/797b9/events-debug-tracing-by-status.webp 640w","/adobe-io-events/static/74197744a4c344584466919068600189/4b075/events-debug-tracing-by-status.webp 1280w","/adobe-io-events/static/74197744a4c344584466919068600189/f3ff0/events-debug-tracing-by-status.webp 1920w","/adobe-io-events/static/74197744a4c344584466919068600189/a662b/events-debug-tracing-by-status.webp 2560w","/adobe-io-events/static/74197744a4c344584466919068600189/4f10c/events-debug-tracing-by-status.webp 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/74197744a4c344584466919068600189/72799/events-debug-tracing-by-status.png 320w","/adobe-io-events/static/74197744a4c344584466919068600189/6af66/events-debug-tracing-by-status.png 640w","/adobe-io-events/static/74197744a4c344584466919068600189/21b4d/events-debug-tracing-by-status.png 1280w","/adobe-io-events/static/74197744a4c344584466919068600189/29114/events-debug-tracing-by-status.png 1920w","/adobe-io-events/static/74197744a4c344584466919068600189/c2d13/events-debug-tracing-by-status.png 2560w","/adobe-io-events/static/74197744a4c344584466919068600189/60708/events-debug-tracing-by-status.png 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/74197744a4c344584466919068600189/21b4d/events-debug-tracing-by-status.png",alt:"events debug tracing by status",title:"events debug tracing by status",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("ol",{start:2},(0,c.mdx)("li",{parentName:"ol"},'Use the "Add Filter" button to filter traces by one or more granular metrics, like response-time, response-code and retry-deliveries. These filtering options work seamlessly offline without fetching new data from the server. ')),(0,c.mdx)("p",null,(0,c.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/cb523/events-debug-tracing-filters.webp 320w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/797b9/events-debug-tracing-filters.webp 640w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/4b075/events-debug-tracing-filters.webp 1280w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/f3ff0/events-debug-tracing-filters.webp 1920w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/a662b/events-debug-tracing-filters.webp 2560w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/4f10c/events-debug-tracing-filters.webp 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/72799/events-debug-tracing-filters.png 320w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/6af66/events-debug-tracing-filters.png 640w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/21b4d/events-debug-tracing-filters.png 1280w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/29114/events-debug-tracing-filters.png 1920w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/c2d13/events-debug-tracing-filters.png 2560w","/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/60708/events-debug-tracing-filters.png 2872w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/d497ca37a2c675c7effaa5ed769abed9/21b4d/events-debug-tracing-filters.png",alt:"events debug tracing filters",title:"events debug tracing filters",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("h3",{id:"retention-of-traces"},"Retention of Traces"),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},"All traces older than 7 days are deleted for GDPR compliance."),(0,c.mdx)("li",{parentName:"ol"},"Traces from last 100 'success' and 'error' deliveries are retained. All older traces are automatically deleted. ")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-support-tracing-md-77f86f332b32b69fe824.js.map