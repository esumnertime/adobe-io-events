(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9244],{10172:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var a,i=n(22122),o=n(19756),r=(n(15007),n(64983)),d=n(99536),s=["components"],l={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),m={_frontmatter:l},u=d.Z;function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.mdx)(u,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"events-publishing-api"},"Events Publishing API"),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Create a project and a workspace in the ",(0,r.mdx)("a",{parentName:"li",href:"/adobe-io-events/developer-console/docs/guides/projects/projects-empty/"},"Adobe Developer Console")),(0,r.mdx)("li",{parentName:"ul"},"Add the ",(0,r.mdx)("inlineCode",{parentName:"li"},"I/O Management API")," in this Adobe Developer Console workspace "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/adobe-io-events/developer-console/docs/guides/credentials/"},"Generate a JWT token")),(0,r.mdx)("li",{parentName:"ul"},"Using ",(0,r.mdx)("a",{parentName:"li",href:"provider_api.md"},"Adobe I/O Events Provider API")," ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"create your own ",(0,r.mdx)("inlineCode",{parentName:"li"},"Custom Events Provider")),(0,r.mdx)("li",{parentName:"ul"},"create at least one ",(0,r.mdx)("inlineCode",{parentName:"li"},"Event Metadata")," associated with the above")))),(0,r.mdx)(p,{slots:"title, text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Data Residency:"),(0,r.mdx)("p",null,"Please note that all custom events are stored in the ",(0,r.mdx)("strong",{parentName:"p"},"United States (US)")," region.  "),(0,r.mdx)("h2",{id:"throttling-policy"},"Throttling Policy"),(0,r.mdx)("p",null,"We do have a throttling policy in place, we accept up to 3,000 requests / 5 secs per api-key.\nYour throttled requests will receive a HTTP Status 429 (Too Many Requests) response\nwith a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Retry-After")," header, following the ",(0,r.mdx)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-7.1.3"},"RFC 7231")," HTTP standard."),(0,r.mdx)("h2",{id:"test-drive"},"Test Drive"),(0,r.mdx)("p",null,"Once its ",(0,r.mdx)("inlineCode",{parentName:"p"},"Event Metadata")," is persisted in Adobe I/O Events (see above prerequisites),\nyour ",(0,r.mdx)("inlineCode",{parentName:"p"},"Custom Events Provider")," can start publishing its\n",(0,r.mdx)("a",{parentName:"p",href:"https://cloudevents.io"},"CloudEvents")," to Adobe I/O Events publishing endpoint (",(0,r.mdx)("inlineCode",{parentName:"p"},"https://eventsingress.adobe.io"),")."),(0,r.mdx)("p",null,"Please follow ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cloudevents/spec/blob/v1.0/spec.md"},"CloudEvents v1.0 specification"),",\nhere is a sample ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},' curl -i --location --request POST  \\\n         --url https://eventsingress.adobe.io \\\n         --header "x-api-key: $api_key" \\\n         --header "Authorization: Bearer $jwt_token" \\\n         --header \'Content-Type: application/cloudevents+json\' \\\n         --data \'{\n           "datacontenttype": "application/json",\n           "specversion": "1.0",\n           "source": "urn:uuid:\'"${provider_id}"\'",\n           "type": "\'"${event_code}"\'",\n           "id": "\'"${event_id}"\'",\n           "data": "your event json payload"\n         }\'\n')),(0,r.mdx)("p",null,"The environment variables used in this ",(0,r.mdx)("inlineCode",{parentName:"p"},"curl")," command are computed from the above prerequisites"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"api_key")," is the api-key associated with your Adobe Developer Console workspace"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"jwt_token")," is a jwt token generated using the set up from the same workspace"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"provider_id")," is your ",(0,r.mdx)("inlineCode",{parentName:"li"},"Custom Events Provider")," uuid generated by ",(0,r.mdx)("a",{parentName:"li",href:"../api/provider_api.md"},"Adobe I/O Events Provider API")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"event_code")," is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Custom Events Provider"),"'s ",(0,r.mdx)("inlineCode",{parentName:"li"},"Event Metadata"),"'s ",(0,r.mdx)("inlineCode",{parentName:"li"},"event_code")," as persisted using ",(0,r.mdx)("a",{parentName:"li",href:"../api/provider_api.md"},"Adobe I/O Events Provider API")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"event_id")," is any id of your choice (examples: UUID, event counter) guaranteeing that ",(0,r.mdx)("inlineCode",{parentName:"li"},"source + id")," is unique\nfor each distinct event see ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/cloudevents/spec/blob/v1.0/spec.md#id"},"CloudEvents spec")),(0,r.mdx)("li",{parentName:"ul"},"as for the value of ",(0,r.mdx)("inlineCode",{parentName:"li"},"data")," in the CloudEvents body payload, it can be any json payload.")),(0,r.mdx)("p",null,"The API returns"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"HTTP Status 200 (OK) if the event has been processed correctly and there are active registrations for the event,"),(0,r.mdx)("li",{parentName:"ul"},"HTTP Status 204 (No Content) if there are no registrations for the event,"),(0,r.mdx)("li",{parentName:"ul"},"HTTP Status 429 (Too Many Requests) if your api-key is being throttled (see our ",(0,r.mdx)("a",{parentName:"li",href:"#throttling-policy"},"Throttling Policy"),")."),(0,r.mdx)("li",{parentName:"ul"},"as well as the usual (4xx/5xx) error codes if there was an issue in processing the request.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-api-eventsingress-api-md-812b529d4232b628bb71.js.map