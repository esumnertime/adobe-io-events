"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2880],{66996:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(15007),a(64983)),d=a(91515),m=a(50260),p=a(43500),o=["components"],s={},l={_frontmatter:s},c=d.Z;function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"setting-up-marketo-user-audit-data-stream-with-adobe-io-events"},"Setting up Marketo User Audit Data Stream with Adobe I/O Events"),(0,i.mdx)("p",null,"These instructions describe how to set up and get started using Adobe I/O Events for Marketo user driven change events.  You can use Adobe I/O for streaming Marketo user driven change events such as the modification of emails, campaigns, and landing pages."),(0,i.mdx)("h2",{id:"introduction"},"Introduction"),(0,i.mdx)("p",null,"User Audit Data Stream provides all the user driven change events that are shown in the MLM Audit Trail as an event stream to which you can subscribe."),(0,i.mdx)("h2",{id:"setup-user-audit-data-stream-in-marketo"},"Setup User Audit Data Stream in Marketo"),(0,i.mdx)("p",null,"User Audit Data Stream is currently a Beta Product and thus cannot be enabled in Marketo without a Beta agreement.  After a Beta agreement is in place, work with your TAM and Customer Engineering team to enable User Audit Data Stream for your subscription."),(0,i.mdx)("h2",{id:"setup-adobe-io"},"Setup Adobe I/O"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/adobe-io-events/src/pages/index.md"},"Getting Started with Adobe I/O Events")),(0,i.mdx)("p",null,"For basic instructions for this use case, starting from ",(0,i.mdx)("a",{parentName:"p",href:"/adobe-io-events/console/"},"console.adobe.io"),":"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"When prompted, click the designated button to proceed")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("inlineCode",{parentName:"p"},"Create new project")),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"305px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.34426229508196%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/7fa18/console_create_new_project.webp 305w"],sizes:"(max-width: 305px) 100vw, 305px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/05c01/console_create_new_project.png 305w"],sizes:"(max-width: 305px) 100vw, 305px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/05c01/console_create_new_project.png",alt:"Create new project",title:"Quick Start",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("inlineCode",{parentName:"p"},"Add event")),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"515px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/5530d/UserAuditDataStreamIOSetup2.webp 320w","/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/2a394/UserAuditDataStreamIOSetup2.webp 515w"],sizes:"(max-width: 515px) 100vw, 515px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/dd4a7/UserAuditDataStreamIOSetup2.png 320w","/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/70021/UserAuditDataStreamIOSetup2.png 515w"],sizes:"(max-width: 515px) 100vw, 515px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/70021/UserAuditDataStreamIOSetup2.png",alt:"Add event",title:"Get started with your new project by adding an event subscription",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Filter by ",(0,i.mdx)("inlineCode",{parentName:"p"},"Experience Cloud"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("inlineCode",{parentName:"p"},"Marketo User Audit Data Stream")),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/5530d/UserAuditDataStreamIOSetup3.webp 320w","/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/0c8fb/UserAuditDataStreamIOSetup3.webp 640w","/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/94b1e/UserAuditDataStreamIOSetup3.webp 1280w","/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/d38a2/UserAuditDataStreamIOSetup3.webp 1812w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/dd4a7/UserAuditDataStreamIOSetup3.png 320w","/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/0f09e/UserAuditDataStreamIOSetup3.png 640w","/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/bbbf7/UserAuditDataStreamIOSetup3.png 1280w","/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/5c1e2/UserAuditDataStreamIOSetup3.png 1812w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/d2da7c32968fcc7606e940c9c43b956a/bbbf7/UserAuditDataStreamIOSetup3.png",alt:"Provider selection",title:"Select event provider",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Subscribe to the user driven change events of your choosing"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/58062598336312e875b6e5398f0d9760/5530d/UserAuditDataStreamIOSetup4.webp 320w","/adobe-io-events/static/58062598336312e875b6e5398f0d9760/0c8fb/UserAuditDataStreamIOSetup4.webp 640w","/adobe-io-events/static/58062598336312e875b6e5398f0d9760/94b1e/UserAuditDataStreamIOSetup4.webp 1280w","/adobe-io-events/static/58062598336312e875b6e5398f0d9760/87cd1/UserAuditDataStreamIOSetup4.webp 1822w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/58062598336312e875b6e5398f0d9760/dd4a7/UserAuditDataStreamIOSetup4.png 320w","/adobe-io-events/static/58062598336312e875b6e5398f0d9760/0f09e/UserAuditDataStreamIOSetup4.png 640w","/adobe-io-events/static/58062598336312e875b6e5398f0d9760/bbbf7/UserAuditDataStreamIOSetup4.png 1280w","/adobe-io-events/static/58062598336312e875b6e5398f0d9760/db98b/UserAuditDataStreamIOSetup4.png 1822w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/58062598336312e875b6e5398f0d9760/bbbf7/UserAuditDataStreamIOSetup4.png",alt:"Event selection",title:"Select event subscriptions",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Set up JWT Credentials (either generate a new key pair or upload a public key)"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/5530d/UserAuditDataStreamIOSetup5.webp 320w","/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/0c8fb/UserAuditDataStreamIOSetup5.webp 640w","/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/94b1e/UserAuditDataStreamIOSetup5.webp 1280w","/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/eb6e1/UserAuditDataStreamIOSetup5.webp 1813w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/dd4a7/UserAuditDataStreamIOSetup5.png 320w","/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/0f09e/UserAuditDataStreamIOSetup5.png 640w","/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/bbbf7/UserAuditDataStreamIOSetup5.png 1280w","/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/aae08/UserAuditDataStreamIOSetup5.png 1813w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/8f60569a28d6cf9b93f234e89af4af7f/bbbf7/UserAuditDataStreamIOSetup5.png",alt:"Set up credentials",title:"Set up credentials",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Set up Event Registration"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/5530d/UserAuditDataStreamIOSetup6.webp 320w","/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/0c8fb/UserAuditDataStreamIOSetup6.webp 640w","/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/94b1e/UserAuditDataStreamIOSetup6.webp 1280w","/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/838f5/UserAuditDataStreamIOSetup6.webp 1814w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/dd4a7/UserAuditDataStreamIOSetup6.png 320w","/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/0f09e/UserAuditDataStreamIOSetup6.png 640w","/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/bbbf7/UserAuditDataStreamIOSetup6.png 1280w","/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/97d01/UserAuditDataStreamIOSetup6.png 1814w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/d007e6017b6081caeb6e060c7fae2d88/bbbf7/UserAuditDataStreamIOSetup6.png",alt:"Complete registration",title:"Complete registration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Provide a name and description for this event subscription"),(0,i.mdx)("li",{parentName:"ul"},"Optionally choose whether to enable Webhook or Runtime action",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Enable Webhook",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"We recommend batch over single webhooks"),(0,i.mdx)("li",{parentName:"ul"},"For ",(0,i.mdx)("inlineCode",{parentName:"li"},"Webhook URL")," a public https endpoint must be provided"),(0,i.mdx)("li",{parentName:"ul"},"The endpoint much be able to handle get and post requests"),(0,i.mdx)("li",{parentName:"ul"},"The get request must respond with the challenge query if it exists"),(0,i.mdx)("li",{parentName:"ul"},"The post request must respond that it received the message or the webhook will re-attempt to send several times before giving up and automatically disabling the webhook sends"))),(0,i.mdx)("li",{parentName:"ul"},"Enable Runtime action",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/adobe-io-events/runtime/docs/guides/getting-started/"},"See Setting up your Runtime Environment")),(0,i.mdx)("li",{parentName:"ul"},"Select a pre-made runtime action/runtime namespace"))))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"After Saving"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1269px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/85e3ec820555888e7c300171088a6ae5/5530d/UserAuditDataStreamIOSetup7.webp 320w","/adobe-io-events/static/85e3ec820555888e7c300171088a6ae5/0c8fb/UserAuditDataStreamIOSetup7.webp 640w","/adobe-io-events/static/85e3ec820555888e7c300171088a6ae5/271ac/UserAuditDataStreamIOSetup7.webp 1269w"],sizes:"(max-width: 1269px) 100vw, 1269px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/85e3ec820555888e7c300171088a6ae5/dd4a7/UserAuditDataStreamIOSetup7.png 320w","/adobe-io-events/static/85e3ec820555888e7c300171088a6ae5/0f09e/UserAuditDataStreamIOSetup7.png 640w","/adobe-io-events/static/85e3ec820555888e7c300171088a6ae5/6cbfb/UserAuditDataStreamIOSetup7.png 1269w"],sizes:"(max-width: 1269px) 100vw, 1269px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/85e3ec820555888e7c300171088a6ae5/6cbfb/UserAuditDataStreamIOSetup7.png",alt:"Verify setup",title:"Verify setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Verify that the Status is ",(0,i.mdx)("inlineCode",{parentName:"li"},"Active")),(0,i.mdx)("li",{parentName:"ul"},"If Webhook was selected, verify that it successfully passed the challenge without errors")))),(0,i.mdx)(m.default,{mdxType:"DeveloperGuidelines"}),(0,i.mdx)("h3",{id:"event-data-structure"},"Event Data Structure"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"We are still finalizing the data structure as we prepare for Beta release.  While we don't expect any major changes, there may be some minor modifications.")),(0,i.mdx)("p",null,"Events are structured in JSON format using the ",(0,i.mdx)("a",{parentName:"p",href:"https://cloudevents.io/"},"CloudEvents")," spec"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Example Event (batch)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "event_id": "cf904f43-56bc-4f80-935d-a484de6e4181",\n        "event": {\n            "body": {\n                "specversion": "1.0",\n                "id": "b77c743a-8e28-40f2-8aab-9541bbc85e68",\n                "type": "com.adobe.platform.marketo.audit.user.email",\n                "source": "https://www.marketo.com",\n                "time": "2020-05-28T19:14:44.807Z",\n                "datacontenttype": "application/json",\n                "dataschema": "V2.0",\n                "data": {\n                    "componentId": 232459,\n                    "componentType": "Email",\n                    "eventAction": "approve",\n                    "munchkinId": "123-ABC-456",\n                    "imsOrgId": "49C579695EA927530A494036@AdobeOrg",\n                    "userId": "user@marketo.com"\n                }\n            }\n        }\n    },\n    {\n        "event_id": "e931c3ec-9d76-406b-ac89-626e9650813a",\n        "event": {\n            "body": {\n                "specversion": "1.0",\n                "id": "afcb6581-198c-4056-a395-6f77cf242d05",\n                "type": "com.adobe.platform.marketo.audit.user.landingpage",\n                "source": "https://www.marketo.com",\n                "time": "2020-05-28T19:14:46.221Z",\n                "datacontenttype": "application/json",\n                "dataschema": "V2.0",\n                "data": {\n                    "componentId": 123321,\n                    "componentType": "Landing Page",\n                    "eventAction": "approve",\n                    "munchkinId": "123-ABC-456",\n                    "imsOrgId": "49C579695EA927530A494036@AdobeOrg",\n                    "userId": "user@marketo.com"\n                }\n            }\n        }\n    }\n]\n')),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Example Event (single)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": "a9ef9c3c-bafe-48b8-9eae-bc63dfaed28c",\n    "event": {\n        "body": {\n            "specversion": "1.0",\n            "id": "72dd1983-decb-4390-afde-2fa1307c9770",\n            "type": "com.adobe.platform.marketo.audit.user.email",\n            "source": "https://www.marketo.com",\n            "time": "2020-05-28T19:20:47.283Z",\n            "datacontenttype": "application/json",\n            "dataschema": "V2.0",\n            "data": {\n                "componentId": 232459,\n                "componentType": "Email",\n                "eventAction": "approve",\n                "munchkinId": "123-ABC-456",\n                "imsOrgId": "49C579695EA927530A494036@AdobeOrg",\n                "userId": "user@marketo.com"\n            }\n        }\n    }\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Data Field Definitions:")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Field"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"event_id"),(0,i.mdx)("td",{parentName:"tr",align:null},"Unique UUID generated per event")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"specversion"),(0,i.mdx)("td",{parentName:"tr",align:null},"CloudEvents version specification being used")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"id"),(0,i.mdx)("td",{parentName:"tr",align:null},"Unique UUID generated per event")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"type"),(0,i.mdx)("td",{parentName:"tr",align:null},"Type of event used for event subscription routing")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"source"),(0,i.mdx)("td",{parentName:"tr",align:null},"Context in which an event happened")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"time"),(0,i.mdx)("td",{parentName:"tr",align:null},"Timestamp of the completion of the action")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"datacontenttype"),(0,i.mdx)("td",{parentName:"tr",align:null},"Content type of the data object")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"dataschema"),(0,i.mdx)("td",{parentName:"tr",align:null},"User Audit Data Stream event schema version")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"data"),(0,i.mdx)("td",{parentName:"tr",align:null},"Event data object")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"componentId"),(0,i.mdx)("td",{parentName:"tr",align:null},"ID of the asset in Marketo")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"componentType"),(0,i.mdx)("td",{parentName:"tr",align:null},"Type of the asset in Marketo")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"eventAction"),(0,i.mdx)("td",{parentName:"tr",align:null},"Asset action that occurred in Marketo")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"munchkinId"),(0,i.mdx)("td",{parentName:"tr",align:null},"Internal Marketo subscription identifier")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"imsOrgId"),(0,i.mdx)("td",{parentName:"tr",align:null},"Internal Adobe organization identifier")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"userId"),(0,i.mdx)("td",{parentName:"tr",align:null},"Email ID of the user in Marketo who completed the action")))),(0,i.mdx)("h3",{id:"event-list"},"Event List"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note - This is a snapshot listing of most available events.  There may be some events that don't show up or no longer exist.")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Component"),(0,i.mdx)("th",{parentName:"tr",align:null},"Event Type List"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Default Program"),(0,i.mdx)("td",{parentName:"tr",align:null},"clone, create, delete, edit channel, export, modify program setup, modify program token, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Email"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, clone, create, delete, edit, move, rename, unapprove")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Email Batch Program"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, childUpdate, clone, create, delete, edit, edit channel, modify program schedule, modify program setup, modify program token, rename, unapprove")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Email Template"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, clone, create, delete, draftCreate, draftDiscard, edit, rename, unapprove")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Engagement Program"),(0,i.mdx)("td",{parentName:"tr",align:null},"clone, create, delete, edit channel, modify program setup, modify program stream, modify program token, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Event Program"),(0,i.mdx)("td",{parentName:"tr",align:null},"clone, create, delete, edit channel, modify program schedule, modify program setup, modify program token, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Folder"),(0,i.mdx)("td",{parentName:"tr",align:null},"create, delete, edit")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Form"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, clone, create, delete, draftCreate, edit, move, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Landing Page"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, clone, create, delete, draftDiscard, edit, move, rename, unapprove")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Landing Page Template"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, clone, create, delete, draftCreate, draftDiscard, edit, rename, unapprove")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"List"),(0,i.mdx)("td",{parentName:"tr",align:null},"clone, create, delete, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Marketing Folder"),(0,i.mdx)("td",{parentName:"tr",align:null},"create, delete, edit")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Nurture Program"),(0,i.mdx)("td",{parentName:"tr",align:null},"clone, create, delete, edit channel, modify program setup, modify program stream, modify program token, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Segment"),(0,i.mdx)("td",{parentName:"tr",align:null},"create, delete, edit, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Segmentation"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, create, delete, draftCreated, draftDiscarded, rename, unapprove")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Smart Campaign"),(0,i.mdx)("td",{parentName:"tr",align:null},"abort, activate, clone, create, deactivate, delete, edit, modify campaign schedule, modify flow step action, modify smart list setup, move, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Smart List"),(0,i.mdx)("td",{parentName:"tr",align:null},"clone, create, delete, edit, export, modify smartlist setup, rename")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Snippet"),(0,i.mdx)("td",{parentName:"tr",align:null},"approve, approve with no-draft, clone, create, delete, edit, rename, unapprove")))),(0,i.mdx)(p.default,{mdxType:"Debug"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-marketo-marketo-user-audit-data-stream-setup-md-c0816b27cf5798717b92.js.map