"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[766],{33269:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return b}});var n=a(87462),i=a(63366),o=(a(15007),a(64983)),s=a(91515),c=["components"],d={},p={_frontmatter:d},r=s.Z;function b(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.mdx)(r,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"adobe-io-events-and-amazon-eventbridge-integration"},"Adobe I/O Events and Amazon EventBridge Integration"),(0,o.mdx)("p",null,"Adobe I/O Events, now seamlessly integrates with ",(0,o.mdx)("a",{parentName:"p",href:"https://aws.amazon.com/eventbridge/"},"Amazon EventBridge"),", empowering you to effortlessly route events from Adobe's Creative Cloud, Document Cloud, Experience Cloud, and ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/events/docs/guides/using/custom_events/"},"Custom Events")," from ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/overview/"},"Adobe Developer App Builder")," to over 20 AWS services, making it easier to build event-driven architectures"),(0,o.mdx)("p",null,"By leveraging this integration, you can increase developer agility by spending less time writing integration code and building features faster that combine best-in-class Software-as-a-Service (SaaS) capabilities with AWS services."),(0,o.mdx)("h2",{id:"what-is-amazon-eventbridge"},"What is Amazon EventBridge?"),(0,o.mdx)("p",null,"Amazon EventBridge is a serverless integration service that enables you to create highly scalable event-driven applications by routing events between your own applications, third-party SaaS applications, and AWS services. You can set up rules to determine where to send your events, allowing for applications to react to changes in your systems as they occur. EventBridge makes it easier to build event-driven applications by facilitating event ingestion, delivery, security, authorization, and error handling. EventBridge has over 45 pre-built partner integrations that can scale seamlessly to handle spikes in event delivery without requiring provisioning of infrastructure or ongoing operations."),(0,o.mdx)("h2",{id:"pre-requisite-setup"},"Pre-Requisite Setup"),(0,o.mdx)("p",null,"A customer AWS account and the corresponding AWS region where the events can be routed to."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("h3",{id:"configuring-developer-console"},"Configuring Developer Console"),(0,o.mdx)("p",null,"Basic instructions for getting started with the EventBridge integration, starting from the ",(0,o.mdx)("a",{parentName:"p",href:"/adobe-io-events/console/"},"developer console"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Start from a new project or an existing one. To create a new project, select ",(0,o.mdx)("inlineCode",{parentName:"p"},"Create new project"),"."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"305px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.34426229508196%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/7fa18/console_create_new_project.webp 305w"],sizes:"(max-width: 305px) 100vw, 305px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/05c01/console_create_new_project.png 305w"],sizes:"(max-width: 305px) 100vw, 305px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/05c01/console_create_new_project.png",alt:"Create new project",title:"Quick Start",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Click ",(0,o.mdx)("inlineCode",{parentName:"p"},"Add to Project")," and select ",(0,o.mdx)("inlineCode",{parentName:"p"},"Event")),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.93750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/5530d/console_add_event_to_project.webp 320w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/0c8fb/console_add_event_to_project.webp 640w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/94b1e/console_add_event_to_project.webp 1280w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/0b34d/console_add_event_to_project.webp 1920w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/33483/console_add_event_to_project.webp 2408w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/dd4a7/console_add_event_to_project.png 320w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/0f09e/console_add_event_to_project.png 640w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/bbbf7/console_add_event_to_project.png 1280w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/ac7a9/console_add_event_to_project.png 1920w","/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/6596b/console_add_event_to_project.png 2408w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/e7cb19484b83388479986e5c59605ecb/bbbf7/console_add_event_to_project.png",alt:"Add Event to project",title:"Add Event to Project",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Filter by product, and then select a suitable event provider from the available list."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/5530d/console_provider_selection.webp 320w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/0c8fb/console_provider_selection.webp 640w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/94b1e/console_provider_selection.webp 1280w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/0b34d/console_provider_selection.webp 1920w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/d5269/console_provider_selection.webp 2560w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/4b2f3/console_provider_selection.webp 3326w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/dd4a7/console_provider_selection.png 320w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/0f09e/console_provider_selection.png 640w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/bbbf7/console_provider_selection.png 1280w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/ac7a9/console_provider_selection.png 1920w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/c7a69/console_provider_selection.png 2560w","/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/d1d95/console_provider_selection.png 3326w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/fdb81269acb8b7fed640f0f6d384716c/bbbf7/console_provider_selection.png",alt:"Provider selection",title:"Select event provider",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Subscribe to the events that you're interested in corresponding to the selected event provider."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.06250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/5530d/console-event-code-selection.webp 320w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/0c8fb/console-event-code-selection.webp 640w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/94b1e/console-event-code-selection.webp 1280w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/0b34d/console-event-code-selection.webp 1920w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/d5269/console-event-code-selection.webp 2560w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/b8ec4/console-event-code-selection.webp 3304w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/dd4a7/console-event-code-selection.png 320w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/0f09e/console-event-code-selection.png 640w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/bbbf7/console-event-code-selection.png 1280w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/ac7a9/console-event-code-selection.png 1920w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/c7a69/console-event-code-selection.png 2560w","/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/0a04e/console-event-code-selection.png 3304w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/8cefa5d69ab5e4982b1d91ac7055865b/bbbf7/console-event-code-selection.png",alt:"Event selection",title:"Select event subscriptions",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Set up the authentication to be used"),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/5530d/console_select_authentication.webp 320w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/0c8fb/console_select_authentication.webp 640w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/94b1e/console_select_authentication.webp 1280w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/0b34d/console_select_authentication.webp 1920w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/d5269/console_select_authentication.webp 2560w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/18137/console_select_authentication.webp 3308w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/dd4a7/console_select_authentication.png 320w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/0f09e/console_select_authentication.png 640w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/bbbf7/console_select_authentication.png 1280w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/ac7a9/console_select_authentication.png 1920w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/c7a69/console_select_authentication.png 2560w","/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/d27b5/console_select_authentication.png 3308w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/cb3641effa79fb9a822c6460fb530ef1/bbbf7/console_select_authentication.png",alt:"Set up credentials",title:"Set up credentials",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Set the name and description for your event registration"),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.12500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/dd15323e774480e72070831fb56404fd/5530d/console_set_event-reg_name-and-description.webp 320w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/0c8fb/console_set_event-reg_name-and-description.webp 640w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/94b1e/console_set_event-reg_name-and-description.webp 1280w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/0b34d/console_set_event-reg_name-and-description.webp 1920w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/d5269/console_set_event-reg_name-and-description.webp 2560w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/b818e/console_set_event-reg_name-and-description.webp 3310w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/dd15323e774480e72070831fb56404fd/dd4a7/console_set_event-reg_name-and-description.png 320w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/0f09e/console_set_event-reg_name-and-description.png 640w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/bbbf7/console_set_event-reg_name-and-description.png 1280w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/ac7a9/console_set_event-reg_name-and-description.png 1920w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/c7a69/console_set_event-reg_name-and-description.png 2560w","/adobe-io-events/static/dd15323e774480e72070831fb56404fd/3c00e/console_set_event-reg_name-and-description.png 3310w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/dd15323e774480e72070831fb56404fd/bbbf7/console_set_event-reg_name-and-description.png",alt:"Set the name and description",title:"Set Name and Description",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"On the ",(0,o.mdx)("inlineCode",{parentName:"p"},"How to receive events")," screen, choose the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Amazon EventBridge")," option. Enter the customer's AWS account ID and the AWS region where the events will be routed."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.12500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/5530d/console_eventbridge_option_masked.webp 320w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/0c8fb/console_eventbridge_option_masked.webp 640w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/94b1e/console_eventbridge_option_masked.webp 1280w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/0b34d/console_eventbridge_option_masked.webp 1920w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/d5269/console_eventbridge_option_masked.webp 2560w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/fa8e0/console_eventbridge_option_masked.webp 3306w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/dd4a7/console_eventbridge_option_masked.png 320w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/0f09e/console_eventbridge_option_masked.png 640w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/bbbf7/console_eventbridge_option_masked.png 1280w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/ac7a9/console_eventbridge_option_masked.png 1920w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/c7a69/console_eventbridge_option_masked.png 2560w","/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/e8081/console_eventbridge_option_masked.png 3306w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/ee2c43049aec1ba3ff86bf4ee7dffebf/bbbf7/console_eventbridge_option_masked.png",alt:"Select Amazon EventBridge option",title:"Select Amazon EventBridge option",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Finish Event Registration Setup by clicking on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Save configured events")," button.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"After saving, your event registration should appear with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Pending")," status, indicating that further configuration is required on the AWS console."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.81249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/5530d/console_eventbridge_pending_status_masked.webp 320w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/0c8fb/console_eventbridge_pending_status_masked.webp 640w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/94b1e/console_eventbridge_pending_status_masked.webp 1280w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/0b34d/console_eventbridge_pending_status_masked.webp 1920w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/d5269/console_eventbridge_pending_status_masked.webp 2560w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/47c3b/console_eventbridge_pending_status_masked.webp 2678w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/dd4a7/console_eventbridge_pending_status_masked.png 320w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/0f09e/console_eventbridge_pending_status_masked.png 640w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/bbbf7/console_eventbridge_pending_status_masked.png 1280w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/ac7a9/console_eventbridge_pending_status_masked.png 1920w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/c7a69/console_eventbridge_pending_status_masked.png 2560w","/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/fdad3/console_eventbridge_pending_status_masked.png 2678w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/034572e6273d8fc00102ceecc3716176/bbbf7/console_eventbridge_pending_status_masked.png",alt:"Verify setup",title:"Verify setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-amazon-eventbridge-index-md-7d4b169b438927808f58.js.map