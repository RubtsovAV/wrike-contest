
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"480",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=ga.getAll()[0].get(\"clientId\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#wrike-page-tracking-version-control\").text();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=[],b=document.querySelectorAll(\".post_tags a\"),a=0;a\u003Cb.length;a+=1)b[a].textContent\u0026\u0026b[a].textContent.length\u0026\u0026c.push(b[a].textContent);if(c.length)return c.join(\" | \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".post-meta__category-link\").textContent;if(-1\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1==document.getElementById(\"cEmail\").value?\"corporate\":0==document.getElementById(\"cEmail\").value?\"generic\":\"not_defined\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){a:{var b=\"uid\\x3d\";for(var d=document.cookie.split(\";\"),a,c=0;c\u003Cd.length;c++){for(a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(b)){b=a.substring(b.length,a.length);break a}}b=\"None\"}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return encodeURIComponent(document.location.href)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){MktCreLevels=[\"C-Level \\x26 Partner\",\"VP\/Head of\",\"Group Manager, Lead, Coordinator\",\"Manager, Sr. Manager, Supervisor, Strategist\",\"Director, Sr. Director, Associate Director\"];itPmLevels=[\"C-Level \\x26 Partner\",\"VP\/Head of\",\"Group Manager, Lead, Coordinator\",\"Director, Sr. Director, Associate Director\"];mapping={Creative:MktCreLevels,Marketing:MktCreLevels,\"IT Ops \\x26 Technology\":itPmLevels,\"Project\/Program management\":itPmLevels};department=document.querySelector(\"[name\\x3dDepartment]\").value;\nlevel=document.querySelector(\"[name\\x3dwrikeBucketLevel]\").value;return icpRoles=mapping[department]\u0026\u0026-1\u003Cmapping[department].indexOf(level)?1:0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.hcTopicName;\"undefined\"==typeof a\u0026\u0026window.url.match(\".*\/posts\/new.*\")\u0026\u0026(a=document.getElementById(\"community_post_topic_id\"),a=a.options[a.selectedIndex].text.split(\" \").join(\"_\"));return a})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emrr12"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"emrr"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"country"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"adposition",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__j",
      "vtp_name":"window.wrike.t200"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__d",
      "vtp_elementId":"wrike-page-tracking-version-control",
      "vtp_selectorType":"ID"
    },{
      "function":"__k",
      "vtp_name":"_ga"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_defaultValue":"YvrPCL6995ABEM-j64UD",
      "vtp_map":["list",["map","key","corporate","value","R75aCP_X8JABEM-j64UD"],["map","key","generic","value","YvrPCL6995ABEM-j64UD"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ga_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"collaborate_2019_social"
    },{
      "function":"__k",
      "vtp_name":"_utma"
    },{
      "function":"__k",
      "vtp_name":"ga"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ga_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ga_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"exp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"creative"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","\/price\/","value","price"],["map","key","\/tour\/","value","tour"],["map","key","\/project-management\/","value","project"],["map","key","\/marketing-project-management\/","value","marketing"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"WrikeBrandedTraffic"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","cookieDomain","value",".wrike.com"],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",2]],["map","index","2","group",["macro",3]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-43330364-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":9
    },{
      "function":"__ga",
      "vtp_webPropertyId":"UA-2346671-1",
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableInPageLinkId":false,
      "vtp_contentGroup":["list"],
      "vtp_campaignTrack":true,
      "vtp_clientInfo":true,
      "vtp_detectFlash":true,
      "vtp_detectTitle":true,
      "vtp_sendHitsToGoogle":true,
      "vtp_useDebugVersion":false,
      "vtp_forceSsl":false,
      "tag_id":11
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"962492627",
      "vtp_conversionLabel":"V_OICPvbsW8Q0_H5ygM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":18
    },{
      "function":"__ua",
      "vtp_trackingId":"UA-43330364-1",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":["macro",13],
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",15],
      "vtp_eventValue":["macro",16],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "tag_id":25
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"962492627",
      "vtp_conversionLabel":"6RItCLTetGcQ0_H5ygM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":49
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","google_conversion_format","value","3"]],
      "vtp_conversionId":"1056104813",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",11],
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",".wrike.com"],["map","fieldName","allowLinker","value","false"],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",2]],["map","index","2","group",["macro",3]],["map","index","3","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-43330364-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":54
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"935016334",
      "vtp_conversionLabel":"QBwuCL-Jj2gQju_svQM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",16],
      "vtp_eventCategory":["macro",13],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",15],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-43330364-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":61
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"962492627",
      "vtp_conversionLabel":"YkJ0CI7xqG0Q0_H5ygM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":65
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"962492627",
      "vtp_conversionLabel":"y8PvCIvgh28Q0_H5ygM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":69
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"848267165",
      "vtp_conversionLabel":"_g4UCNr_zXIQnY--lAM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":83
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",18],
      "vtp_conversionId":"958052401",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"e_o7CKTn3HMQsfDqyAM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":93
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"962492627",
      "vtp_conversionLabel":"6RItCLTetGcQ0_H5ygM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":98
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"959886350",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"fz7WCL-L9XUQjujayQM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":100
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"957412038",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"oVmhCLTL5XYQxuXDyAM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":101
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"114863",
      "tag_id":104
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"959730723",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"VEgGCP-funoQo6jRyQM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":105
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"964084416",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"a123CK6tk3wQwIXbywM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":107
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"966806077",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"SAw4CN2zz38QvZSBzQM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":112
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973915060",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"iZ56CLuP338QtIez0AM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":117
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"978136396",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"s2fWCLaI238QzNq00gM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":118
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",19],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"804998230",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"yZ5RCNmguIIBENaY7f8C",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":123
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00596545",
      "tag_id":124
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"848267165",
      "vtp_conversionLabel":"V3dcCIa_0IcBEJ2PvpQD",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":127
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"962492627",
      "vtp_conversionLabel":"ixViCN_7lJMBENPx-coD",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":139
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"962492627",
      "vtp_conversionLabel":"8zJkCOiNlZMBENPx-coD",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":140
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"QSZB7NA2DRCDVN2XBCYBLM",
      "vtp_customerId":"52UUGYOERRFQVLGGNUT2ZW",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":142
    },{
      "function":"__cl",
      "tag_id":155
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"215620_346",
      "tag_id":156
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"215620_347",
      "vtp_enableTriggerStartOption":true,
      "tag_id":157
    },{
      "function":"__hl",
      "tag_id":158
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"215620_375",
      "tag_id":159
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"405-WQD-629\",{cookieAnon:!0}))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction readCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null}function setCookie(b,d,c){getParam(\"gclid\");var a=new Date;a.setTime(a.getTime()+864E5*c);c=\"; expires\\x3d\"+a.toGMTString();null==readCookie(\"gclid\")\u0026\u0026(document.cookie=b+\"\\x3d\"+d+c+\";domain\\x3d.wrike.com;path\\x3d\/\")}\nfunction getParam(b){return(b=RegExp(\"[?\\x26]\"+b+\"\\x3d([^\\x26]*)\").exec(window.location.search))\u0026\u0026decodeURIComponent(b[1].replace(\/\\+\/g,\" \"))}var gclid=getParam(\"gclid\");if(gclid){var gclsrc=getParam(\"gclsrc\");gclsrc\u0026\u0026-1===gclsrc.indexOf(\"aw\")||setCookie(\"gclid\",gclid,90)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function l(){var b=h(\"__utmz\");return null!=b?\"\\x26utmz\\x3d\"+b:\"\"}function h(b){b+=\"\\x3d\";for(var f=document.cookie.split(\";\"),g=0;g\u003Cf.length;g++){for(var c=f[g];\" \"==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(b))return c.substring(b.length,c.length)}return null}var k=200,f=0,n=50,p=setInterval(function(){if(f==n)clearInterval(p);else{var b=h(\"_ga\");if(null==b)f++;else try{var k=document.createElement(\"img\");var g=\"\/analyticstracking.htm\"==document.location.pathname?\"workspace\":\n\"website\";var c=(new Date).getTime().toString()+Math.random().toString().slice(0,4);b=\"\";var a=",["escape",["macro",9],8,16],";if(-1!=a.indexOf(\"\/\")\u0026\u0026(a=a.slice(a.lastIndexOf(\"\/\")+1),a=a.split(\"?\"),1\u003Ca.length)){a=a[1].split(\"\\x26\");for(var e=[],d=0;d\u003Ca.length;d++)-1!=a[d].search(\"utm_\")?e.push(a[d]):-1!=a[d].search(\"ga_\")?e.push(a[d].replace(\"ga_\",\"utm_\")):-1!=a[d].search(\"\\x3d\")\u0026\u0026\"r\"==a[d].split(\"\\x3d\")[0]\u0026\u0026e.push(a[d]);b=\"\\x26\"+e.join(\"\\x26\")}var q=b;console.log(l());var m=document.domain;b=m;a=\"try.wrike.com go.wrike.com help.wrike.com get.wrike.com learn.wrike.com studio.wrike.com cdn.wrike.com library.wrike.com status.wrike.com assets.wrike.com\".split(\" \");\nfor(e=0;e\u003Ca.length;e++)if(a[e]==m.toLowerCase()){b=\"www.wrike.com\";break}var r=b;el_src=\"https:\/\/\"+r+\"\/stat\/marketing?area\\x3d\"+g+\"\\x26logic_block\\x3d\"+",["escape",["macro",1],8,16],"+\"\\x26adposition\\x3d\"+",["escape",["macro",24],8,16],"+\"\\x26page\\x3d\"+",["escape",["macro",17],8,16],"+\"\\x26element\\x3dpage\\x26event\\x3dviewed\\x26gaid\\x3d\"+h(\"_ga\")+\"\\x26dc\\x3d\"+c+q+\"\\x26referrer\\x3d\"+encodeURIComponent(",["escape",["macro",25],8,16],")+l()+\"\\x26t200\\x3d\"+",["escape",["macro",26],8,16],";\"undefined\"!=typeof ",["escape",["macro",20],8,16],"\u0026\u0026(el_src+=\"\\x26country\\x3d\"+\n",["escape",["macro",20],8,16],".substring(0,2));k.src=el_src;f=50}catch(t){f=50,console.log(\"tag.manager.tracking:: \"+t.message)}}},k)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){$(\".applist-item\").click(function(){var a=$(this).children(\".applist-item-title\").text();dataLayer.push({event:\"gaEvent\",eventCategory:\"Apps\\x26integrations\",eventAction:a,eventLabel:\"\",eventValue:\"\"})})});\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){var a=$(\".apps-article-header-name\").text();dataLayer.push({event:\"gaEvent\",eventCategory:\"Clicks_inside_apps_pages\",eventAction:a,eventLabel:",["escape",["macro",27],8,16],"})});\u003C\/script\u003E"],
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(e,d){var a=e.location.search.substr(1);if(-1\u003Ca.indexOf(d)){a=a.split(\"\\x26\");for(var c=0;c\u003Ca.length;c++){var b=a[c].split(\"\\x3d\");b[0]===d\u0026\u0026\"undefined\"!==typeof b[1]\u0026\u0026b[1].length\u0026\u0026(console.log(b[1]),dataLayer.push({event:\"gaEvent\",eventCategory:\"test_tracking\",eventAction:b[1],eventLabel:",["escape",["macro",17],8,16],",eventValue:1}))}}})(document,\"trackme\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6029477390871\",{value:\"0.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6029477390871\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){var a=window.location.pathname.indexOf(\"search\"),b;-1!=a\u0026\u0026(b=decodeURI(window.location.pathname.substring(a+7).replace(RegExp(\"\\\\+\",\"g\"),\" \")));a=document.getElementById(\"SnapABug_Button\");document.getElementsByName(\"s\");null!=a\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Live_chat\",eventAction:",["escape",["macro",17],8,16],",eventLabel:b})})};\u003C\/script\u003E"],
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onload=function(){var a=document.getElementById(\"logo_bb\");a\u0026\u0026a.addEventListener(\"click\",function(){dataLayer\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Page\",eventAction:\"Click\",eventLabel:\"Logo\"})})};\u003C\/script\u003E",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4056416\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(b){b+=\"\\x3d\";for(var c=document.cookie.split(\";\"),a,d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(b))return a.substring(b.length,a.length)}return null}function k(b,c,a){var d=new Date;d.setTime(d.getTime()+864E5*a);a=d.toUTCString();document.cookie=b+\"\\x3d\"+c+\";expires\\x3d\"+a}var e,l=1E3,m=20,g=0,h=setInterval(function(){g==m\u0026\u0026clearInterval(h);e=f(\"_ga\");null!==e\u0026\u0026f(\"send_dim1\")!=e\u0026\u0026(ga\u0026\u0026ga(function(){if(ga.getAll()){var b=ga.getAll();\nif(b)for(var c=0;c\u003Cb.length;c++)trackerName=b[c].get(\"name\"),clientId=b[c].get(\"clientId\"),\"UA-43330364-1\"==b[c].get(\"trackingId\")\u0026\u0026(ga(trackerName+\".set\",{dimension1:e}),ga(trackerName+\".send\",\"event\",\"get_ga\",\"get_ga1\",\"get_ga1\",{nonInteraction:!0}))}}),k(\"send_dim1\",e,180),clearInterval(h));g+=1},l)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(){setTimeout(function(){d+=1;var a=document.querySelector(\"#SnapABug_WP.online\"),e=document.querySelector(\".modal-support-success\");a||e?dataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Submit\",eventLabel:b.join(\" -\\x3e \")}):120\u003Ed\u0026\u0026c()},250)}var b=[],d=0;document.addEventListener(\"click\",function(a){a=a.target;\"#contact\"===a.getAttribute(\"href\")?b[0]=\"Contact support team\":-1!==a.className.indexOf(\"js-btn-open-ticket\")?b[0]=\"Open a ticket\":-1!==a.className.indexOf(\"btn-open-livechat\")\u0026\u0026\n(b[0]=\"Open live chat\");-1!==a.className.indexOf(\"modal-form-support-submit\")?(b[1]=\"Submit a ticket\",c()):\"SnapABug_SB\"===a.id\u0026\u0026(b[1]=\"Start chat\",c())},!0)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuvmx\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){var a=document.getElementById(\"exit-popup-root\");a\u0026\u0026a.addEventListener(\"exitmodal.open\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Pop-up shown\",eventLabel:",["escape",["macro",17],8,16],"+\" (\"+",["escape",["macro",28],8,16],"+\")\"})})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){var a=document.getElementById(\"lp-pom-button-1007\"),b=document.getElementById(\"lp-pom-button-1026\");a\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Click\",eventLabel:",["escape",["macro",17],8,16],"+\" (\"+",["escape",["macro",28],8,16],"+\") \"+this.getAttribute(\"id\")})});b\u0026\u0026b.addEventListener(\"click\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Click\",eventLabel:",["escape",["macro",17],8,16],"+\n\" (\"+",["escape",["macro",28],8,16],"+\") \"+this.getAttribute(\"id\")})})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){function a(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Goal\",eventAction:\"Goal_achieved\",eventLabel:\"Time_on_page\"})}setTimeout(a,1E4)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction send_event(b,a,c){dataLayer.push({event:\"gaEvent\",eventCategory:b,eventAction:a,eventLabel:c});return!1}function get_domain(b){return-1\u003Cb.indexOf(\":\/\/\")?b.split(\"\/\")[2]:b.split(\"\/\")[0]}\nwindow.addEventListener(\"load\",function(){var b=document.querySelectorAll(\".cat-item\"),a=0;if(b)for(a=0;a\u003Cb.length;a+=1)b[a].addEventListener(\"click\",function(){send_event(\"Sidebar\",\"Categories Clicks\",this.textContent)});if(b=document.querySelectorAll(\"#menu-additional-resources .menu-item\"))for(a=0;a\u003Cb.length;a+=1)b[a].addEventListener(\"click\",function(){send_event(\"Sidebar\",\"Additional Resources Clicks\",this.textContent)});if(b=document.querySelectorAll(\".rpwe-block .rpwe-li\"))for(a=0;a\u003Cb.length;a+=\n1)b[a].addEventListener(\"click\",function(){send_event(\"Sidebar\",\"Individual Blogs Clicks\",this.textContent)});a=document.querySelectorAll(\"#text_icl-6\");a[0]\u0026\u0026a[0].addEventListener(\"click\",function(){send_event(\"Sidebar\",\"Graphic Blocks\",\"Download Free PDF\")});a=document.querySelectorAll(\"#text_icl-3\");a[0]\u0026\u0026a[0].addEventListener(\"click\",function(){send_event(\"Sidebar\",\"Graphic Blocks\",\"Project Management Guide for Beginners\")});window.$\u0026\u0026$(\"#primary-sidebar\").submit(function(){send_event(\"Sidebar\",\n\"Trial\",\"Start Trial\")});a=document.querySelectorAll(\"#text_icl-5\");a[0]\u0026\u0026a[0].addEventListener(\"click\",function(){send_event(\"Sidebar\",\"Graphic Blocks\",\"Learn more\")});b=document.querySelectorAll(\"#wrike_social_links-2 .social_list \\x3e li \\x3e a\");if(b.length)for(a=0;a\u003Cb.length;a+=1)b[a].addEventListener(\"click\",function(){send_event(\"Sidebar\",\"Socials\",get_domain(this.getAttribute(\"href\")))})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=307980792700798\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){window.addEventListener(\"agile.step\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Quiz\",eventLabel:a.detail.step})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=\"creative\",l={url:[\"marketer\",\"marketing\",\"design\",\"creative\",\"workfront\"],ga_keyword:[\"marketer\",\"marketing\",\"design\",\"creative\",\"workfront\"],ga_adgroup:[\"marketer\",\"marketing\",\"design\",\"creative\",\"workfront\"],ga_campaign:[\"marketer\",\"marketing\",\"design\",\"creative\",\"workfront\"],utm_term:[\"marketer\",\"marketing\",\"design\",\"creative\",\"workfront\"],utm_content:[\"marketer\",\"marketing\",\"design\",\"creative\",\"workfront\"],utm_campaign:[\"marketer\",\"marketing\",\"design\",\"creative\",\"workfront\"],\nutm_adgroup:[\"workfront\"]},m={url:[[\"remarketing\",\"design\"],[\"remarketing\",\"marketer\"],[\"remarketing\",\"marketing\"],[\"remarketing\",\"creative\"],[\"remarketing\",\"workfront\"]],ga_keyword:[[\"remarketing\",\"design\"],[\"remarketing\",\"marketer\"],[\"remarketing\",\"marketing\"],[\"remarketing\",\"creative\"],[\"remarketing\",\"workfront\"]],ga_adgroup:[[\"remarketing\",\"design\"],[\"remarketing\",\"marketer\"],[\"remarketing\",\"marketing\"],[\"remarketing\",\"creative\"],[\"remarketing\",\"workfront\"]],ga_campaign:[[\"remarketing\",\"design\"],\n[\"remarketing\",\"marketer\"],[\"remarketing\",\"marketing\"],[\"remarketing\",\"creative\"],[\"remarketing\",\"workfront\"]],utm_term:[[\"remarketing\",\"design\"],[\"remarketing\",\"marketer\"],[\"remarketing\",\"marketing\"],[\"remarketing\",\"creative\"],[\"remarketing\",\"workfront\"]],utm_content:[[\"remarketing\",\"design\"],[\"remarketing\",\"marketer\"],[\"remarketing\",\"marketing\"],[\"remarketing\",\"creative\"],[\"remarketing\",\"workfront\"]],utm_campaign:[[\"remarketing\",\"design\"],[\"remarketing\",\"marketer\"],[\"remarketing\",\"marketing\"],[\"remarketing\",\n\"creative\"],[\"remarketing\",\"workfront\"]]},n=function(e){var f=\/[?\u0026]([^=#]+)=([^\u0026#]*)\/g,b={},a;for(b.url=e.split(\"?\").shift().toLowerCase();a=f.exec(e);)b[a[1].toLowerCase()]=a[2].toLowerCase();return b},k=function(e,f){var b=new Date;b.setTime(b.getTime()+6048E5);document.cookie=e+\"\\x3d\"+f+\";domain\\x3d.wrike.com;expires\\x3d\"+b.toUTCString()+\";path\\x3d\/\";window.dispatchEvent(new CustomEvent(\"rtp_update\"))},p=function(e){for(var f in e)if(e.hasOwnProperty(f)){var b=e[f],a=l[f],d=m[f];if(\"object\"===\ntypeof a\u0026\u0026a.length){a:{var c=b;for(var g=0;g\u003Ca.length;g++)if(-1!==c.indexOf(a[g])){c=a[g];break a}c=!1}if(!1!==c)if(\"object\"===typeof d\u0026\u0026d.length){a:{a=!1;for(c=0;c\u003Cd.length;c++)if(-1!==b.indexOf(d[c][0])){a=b.replace(d[c][0],\"\");if(-1!==a.indexOf(d[c][1])){d=!0;break a}a=!0}d=!a}if(d)return k(h,1)}else return k(h,1)}}};return-1===document.cookie.indexOf(h+\"\\x3d\")\u0026\u0026p(n(window.location.href))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(!\/(?:^|; )wrikeVisitor=([^;]+)\/.exec(document.cookie)){if(!\/(?:^|; )firstVisit=([^;]+)\/.exec(document.cookie)){var a=new Date;a.setDate(a.getDate()+365);var b=encodeURIComponent('{\"referrer\":'+(document.referrer?'\"'+document.referrer.substring(0,150)+'\"':null)+',\"uri\":'+(location.pathname?'\"'+location.pathname.substring(0,150)+'\"':null)+',\"query\":'+(location.search?'\"'+location.search.substring(0,150)+'\"':null)+\"}\");b+=\"; expires\\x3d\"+a.toUTCString();b+=\"; domain\\x3dwrike.com\";document.cookie=\n\"firstVisit\\x3d\"+(b+\"; path\\x3d\/\")}if(\"function\"===typeof window.onload)var c=window.onload;window.onload=function(){c\u0026\u0026c();var a=new Image;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"wrike.com\/statvisitor.gif\";a.style.display=\"none\";document.body.appendChild(a)}}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cdn.wrike.com\/image\/lp-assets\/scripts\/qualaroo17-2.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendEvent(a,b,c){dataLayer.push({event:\"gaEvent\",eventCategory:a,eventAction:b,eventLabel:c});return!1}window.addEventListener(\"gameEvent.loaded\",function(){sendEvent(\"games\",\"loaded\",\"NY game\")});window.addEventListener(\"gameEvent.finished\",function(){sendEvent(\"games\",\"finished\",\"NY game\")});window.addEventListener(\"gameEvent.gameover\",function(){sendEvent(\"games\",\"gameover\",\"NY game\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){(function(){for(var a=document.querySelectorAll(\".new_community_post\"),c=0;c\u003Ca.length;c++)a[c].addEventListener(\"click\",function(b){b=b.target;b.matches(\".searchbox-suggestions a\")\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Community Ticket Deflection\",eventAction:\"Deflect\",eventLabel:b.href})})})();(function(){for(var a=document.querySelectorAll('form[role\\x3d\"search\"]'),c=0;c\u003Ca.length;c++)a[c].addEventListener(\"submit\",function(b){b=b.target;b=b.querySelectorAll('input[type\\x3d\"search\"]');\nb=b.length?b[0].value.toLowerCase():\"\";dataLayer.push({event:\"gaEvent\",eventCategory:\"search\",eventAction:\"search-submit\",eventLabel:b})})})();(function(){for(var a=document.querySelectorAll(\"a.submit-a-request, .article-more-questions a\"),c=0;c\u003Ca.length;c++)a[c].addEventListener(\"click\",function(){var b=window.location.pathname;dataLayer.push({event:\"gaEvent\",eventCategory:\"Submit Request\",eventAction:\"Submit Request Form\",eventLabel:b})})})();(function(){for(var a=document.querySelectorAll(\"#new_request\"),\nc=0;c\u003Ca.length;c++)a[c].addEventListener(\"click\",function(b){b=b.target;b.matches(\".searchbox-suggestions a\")\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Submit Ticket Deflection\",eventAction:\"Deflect\",eventLabel:b.href})})})();(function(){var a=document.getElementById(\"new_request\");a\u0026\u0026a.addEventListener(\"submit\",function(){var a=document.querySelectorAll(\"#new_request .required input, #new_request .required textarea\"),b=0;if(a)for(var d=0;d\u003Ca.length;d++)0\u003Ca[d].value.length?b++:0;a.length\u003C=b\u0026\u0026\ndataLayer.push({event:\"gaEvent\",eventCategory:\"Submit Request form\",eventAction:\"Submit Request Submit button\",eventLabel:location.pathname})})})();(function(){var a=\"\";HelpCenter\u0026\u0026HelpCenter.user\u0026\u0026HelpCenter.user.email\u0026\u0026(a=HelpCenter.user.email);var c=-1!=a.search(\"team.wrike.com\")?\"Internal_user\":\"External_user\";a=document.querySelectorAll(\"form.new_community_post\");var b=document.querySelectorAll(\"form.comment-form\"),d=document.getElementById(\"community_post_title\"),e=document.querySelectorAll(\"form.new_community_post .required a\"),\nf=document.querySelector(\"a.ask-wrike\");a\u0026\u0026a[0]\u0026\u0026a[0].addEventListener(\"submit\",function(){if(d\u0026\u0026e[0]\u0026\u0026\"\"!=d.value\u0026\u0026\"-\"!=e[0].textContent\u0026\u0026\"Internal_user\"!=c){var a=document.getElementById(\"community_post_topic_id\");\"undefined\"!==typeof a\u0026\u0026(hcTopic=a.options[a.selectedIndex].text.split(\" \").join(\"_\"),dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:\"New_community_post\",eventLabel:hcTopic}))}});b\u0026\u0026b[0]\u0026\u0026b[0].addEventListener(\"submit\",function(){var a=document.getElementById(\"community_comment_body_ifr\");\nif(a)var b=a.contentWindow.document.getElementById(\"tinymce\");b\u0026\u0026\"\"!=b.textContent\u0026\u0026\"Internal_user\"!=c\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:\"New_comment\",eventLabel:",["escape",["macro",8],8,16],"})});f\u0026\u0026f.addEventListener(\"click\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:\"Ask Wrike Button Click\",eventLabel:c})})})();(function(){var a=document.querySelectorAll(\".categories .blocks-list .blocks-item\");if(a)for(var c=0;c\u003Ca.length;c++)a[c].addEventListener(\"click\",\nfunction(a){a=a.currentTarget;a.getElementsByTagName(\"h4\")[0]\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:\"Icons Click\",eventLabel:a.getElementsByTagName(\"h4\")[0].textContent})})})();(function(){var a=document.querySelector(\".container .container-small h2\");a\u0026\u0026a.addEventListener(\"click\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:\"Top Banner Click\",eventLabel:a.currentTarget.textContent})})})();(function(){var a=document.querySelector(\"div.post-vote \\x3e .vote-up\");\na\u0026\u0026a.addEventListener(\"click\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:\"Thumbs Up\",eventLabel:",["escape",["macro",8],8,16],"})})})()});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega\u0026\u0026ga(function(){if(ga.getAll()){var a=ga.getAll();if(a)for(var b=0;b\u003Ca.length;b++)a[b]\u0026\u0026(trackerName=a[b].get(\"name\"),clientId=a[b].get(\"clientId\"),\"UA-43330364-7\"==a[b].get(\"trackingId\")?ga(trackerName+\".set\",{dimension3:clientId,dimension1:",["escape",["macro",29],8,16],",dimension4:",["escape",["macro",5],8,16],"}):\"UA-43330364-1\"==a[b].get(\"trackingId\")\u0026\u0026ga(trackerName+\".set\",{dimension16:clientId,dimension17:",["escape",["macro",5],8,16],"}),ga(trackerName+\".send\",\"event\",\"service\",\"clientId\",{nonInteraction:!0}))}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$\u0026\u0026$(\".block-selector\")\u0026\u0026$(\".block-selector\").change(function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Selector Changed\",eventLabel:a.target.value})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){var a=document.getElementById(\"mktoForm_1539\");a\u0026\u0026a.addEventListener(\"submit\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Forms\",eventAction:\"Sumbit\",eventLabel:\"Like our stories? We have more!\"})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendEvent(a,b,c,d){dataLayer.push({event:\"gaEvent\",eventCategory:a,eventAction:b,eventLabel:c,eventValue:d});return!1}window.addEventListener(\"akinator\",function(a){if(a.detail){var b=null===a.detail.action?\"finished\":a.detail.action;sendEvent(\"Akinator\",a.detail.text,b,Number(a.detail.isResult))}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"button.pressed\",function(a){if(a.detail){var b=\"i am - \"+a.detail.iam+\" | doing - \"+a.detail.doing+\" | interested - \"+a.detail.interested+\" | text - \"+a.detail.replacementText;console.log(a.detail);dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Selector Changed\",eventLabel:b})}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/trc.taboola.com\/taboolaaccount-ireneteamwrikecom\/log\/3\/mark?marking-type=okr-remark\u0026amp;item-url=",["escape",["macro",6],12],"\" width=\"0\" height=\"0\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createPixel(b){var a=document.createElement(\"img\");a.height=0;a.width=0;a.src=b;document.body.appendChild(a)}function sendGaEvent(b){dataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Submit\",eventLabel:b})}\n\"ebook_form__submitted\"==",["escape",["macro",12],8,16],"?(createPixel(\"https:\/\/www.facebook.com\/tr?id\\x3d307980792700798\\x26ev\\x3debook_form__submitted\"),sendGaEvent(\"Ebook Form Submitted\")):\"webinar_form__submitted\"==",["escape",["macro",12],8,16],"?(createPixel(\"https:\/\/www.facebook.com\/tr?id\\x3d307980792700798\\x26ev\\x3dwebinar_form__submitted\"),sendGaEvent(\"Webinar Registration\")):\"template_form__submitted\"==",["escape",["macro",12],8,16],"\u0026\u0026(createPixel(\"https:\/\/www.facebook.com\/tr?id\\x3d307980792700798\\x26ev\\x3dtemplate_form__submitted\"),\nsendGaEvent(\"Template Form Submit\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=307980792700798\u0026amp;ev=CalendarButtonClick\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Click\",eventLabel:\"CalendarButton\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"productivity_tour_form_submit\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Submit\",eventLabel:\"Productivity Tour\"});var a=document.createElement(\"img\");a.height=0;a.width=0;a.src=\"https:\/\/www.facebook.com\/tr?id\\x3d307980792700798\\x26ev\\x3dProductivityTourRegistration\";document.body.appendChild(a)});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function a(){0\u003Cdocument.querySelectorAll(\"[role\\x3ddialog]\").length\u0026\u0026!b\u0026\u0026(dataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Click\",eventLabel:\"Integrate with Google\"}),b=!0);setTimeout(a,1E3)}var b=!1;a()})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003Efunction sendEvent(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"new ROI page\",eventLabel:a})}window.addEventListener(\"input.update\",function(a){sendEvent(a.detail)});window.addEventListener(\"contact.click\",function(a){sendEvent(\"Contact us click\")});window.addEventListener(\"pdf.click\",function(a){sendEvent(\"Download pdf\")});window.addEventListener(\"toggle.beforeafter\",function(a){sendEvent(\"Toogle Chart\")});window.addEventListener(\"sharelink\",function(a){sendEvent(\"Share link click\")});\nwindow.addEventListener(\"sharelink\",function(a){sendEvent(\"Share link click\")});window.addEventListener(\"calculatepopup.contact.click\",function(a){sendEvent(\"Calculation popup contact us click in\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cnlform.submitted\",function(a){dataLayer.push({event:a.type})});window.addEventListener(\"exitmodal.submitted\",function(a){dataLayer.push({event:a.type})});window.addEventListener(\"ebookform.submitted\",function(a){dataLayer.push({event:a.type})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendEvent(a,b){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:a,eventLabel:b})}window.addEventListener(\"IMAGE_PROOFING_ACTION\",function(a){sendEvent(\"Image Proofing\",a.detail)});window.addEventListener(\"VIDEO_PROOFING_ACTION\",function(a){sendEvent(\"Video Proofing\",a.detail)});window.addEventListener(\"DOCUMENT_PROOFING_ACTION\",function(a){sendEvent(\"Document Proofing\",a.detail)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){var a=document.querySelectorAll(\".shinypic\");if(0\u003Ca.length)for(var b=0;b\u003Ca.length;b++)a[b].addEventListener(\"click\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Banner Click\",eventLabel:document.location.pathname})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function r(a){var c=[],b;for(b in a)if(a.hasOwnProperty(b)\u0026\u0026\"function\"!==typeof a[b]){var d=encodeURIComponent(b)+\"\\x3d\";d=\"object\"===typeof a[b]?d+encodeURIComponent(JSON.stringify(a[b])):d+encodeURIComponent(a[b]);c.push(d)}return c.join(\"\\x26\")}function h(a){this.storageKey=a;window.addEventListener(\"beforeunload\",function(){f.eraseCookie(self.storageKey+this.sessionPostfix)})}function e(a){this.key=a;this.lc=new h(this.key)}var p=\"isr\",t=\"sc\",u=\"www.wrike.com\",v=\"UA-43330364-7\",g=\n\"_crp _edu _pr _free _cp _zd _hm _prc _pmc _hlp _fre _mce _win _mac _chrome _firefox _safari _ie _en _mobile _competitor\".split(\" \"),l=.060158599,w={_crp:2.32942009,_edu:-.776422024,_pr:.078331299,_free:-1.434470057,_cp:1.064800024,_zd:1.054970026,_hm:.629745007,_prc:.311055005,_pmc:.296287,_hlp:.841852009,_fre:-.131555006,_mce:.411868989,_win:.0837363,_mac:.422865003,_chrome:-.137813002,_firefox:-.276980996,_safari:-.213057995,_ie:-.096017301,_en:.411338001,_mobile:-.295780987,_competitor:-.223602995},\nk=[1.26164362E-11,29.079418,.10610204,4.74431314],q=-2.915994644,n=[{countries:\"AO BF BI BJ BW CD CF CG CI CM CV DJ ER ET GA GH GM GN GQ GW KE KM LR LS LY MG ML MR MU MW MZ NA NE NG RE RW SC SL SN SO SS ST SZ TD TG TZ UG YT ZM ZW\".split(\" \"),score:-3.412337065},{countries:\"BD BT FM MH NP NR NU PK PW TO\".split(\" \"),score:-9.999995232},{countries:\"AF CN IN LK MN MP MV PF TW\".split(\" \"),score:-3.403633595},{countries:[\"BR\"],score:-3.027284861},{countries:\"AL BA BG GR HR ME MK PL RO RS XK\".split(\" \"),\nscore:-2.975222826},{countries:\"CY CZ EE HU LT LV SI SK\".split(\" \"),score:-2.691224098},{countries:[\"AT\",\"CH\",\"DE\",\"LI\"],score:-2.115684748},{countries:[\"AD\",\"DZ\",\"MA\",\"TN\"],score:-3.134845257},{countries:[\"BE\",\"FR\",\"LU\",\"MC\"],score:-2.104984283},{countries:[\"IT\",\"SM\"],score:-2.271875858},{countries:[\"HK\",\"JP\",\"KR\",\"MO\",\"SG\"],score:-2.199761629},{countries:\"AI AR BL BO BQ BS CO CR CU DM DO EC FK GD GF GP GT GY HT JM KI LC MF MS NI PA PE PR PY SR SV SX TC TV UY VC VE\".split(\" \"),score:-2.793750048},\n{countries:\"AG AW BB BZ CL CW HN KN MQ MX TT VI\".split(\" \"),score:-2.476722479},{countries:\"BH EG IQ IR JO KW LB OM PS QA SD SY TR YE\".split(\" \"),score:-3.444497347},{countries:[\"AE\",\"SA\"],score:-1.678791404},{countries:[\"BM\",\"CA\",\"KY\"],score:-2.037349939},{countries:[\"US\"],score:-1.449002385},{countries:[\"AX\",\"FI\",\"IS\",\"NL\"],score:-2.165637732},{countries:[\"DK\",\"FO\",\"GL\",\"NO\",\"SE\"],score:-1.974584579},{countries:\"AS AU CK FJ IO NC NZ SB VU WS\".split(\" \"),score:-1.852559566},{countries:\"AM BY GE KG KZ MD TJ TM UA UZ\".split(\" \"),\nscore:-3.194761753},{countries:[\"AZ\",\"RU\"],score:-2.779341459},{countries:[\"BN\",\"ID\",\"PG\",\"TL\",\"VN\"],score:-2.541050196},{countries:\"GU KH LA MM MY PH TH\".split(\" \"),score:-2.733840466},{countries:[\"ES\",\"PT\"],score:-2.566735268},{countries:\"GG IE IL MT VG ZA\".split(\" \"),score:-2.556703568},{countries:[\"GB\",\"GI\",\"IM\",\"JE\"],score:-1.909969211}],f={createCookie:function(a,c,b){if(b){var d=new Date;d.setTime(d.getTime()+864E5*b);b=\"; expires\\x3d\"+d.toGMTString()}else b=\"\";document.cookie=a+\"\\x3d\"+c+b+\n\"; path\\x3d\/; domain\\x3dwrike.com\"},readCookie:function(a){a+=\"\\x3d\";for(var c=document.cookie.split(\";\"),b=0;b\u003Cc.length;b++){for(var d=c[b];\" \"==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null},eraseCookie:function(a){f.createCookie(a,\"\",-1)},isIFrame:function(){try{return window.self!==window.top}catch(a){return!0}},currentUrlContains:function(a){return-1\u003Cwindow.location.pathname.search(a)},getQueryVariable:function(a){var c=window.location.search.substring(1);\nc=c.split(\"\\x26\");for(var b=0;b\u003Cc.length;b++){var d=c[b].split(\"\\x3d\");if(decodeURIComponent(d[0])==a)return decodeURIComponent(d[1])}}};h.prototype.sessionPostfix=\"-session\";h.prototype.set=function(a,c,b){var d=b?this.storageKey+this.sessionPostfix:this.storageKey,e=f.readCookie(d);data=e?JSON.parse(e):{};data[a]=c;f.eraseCookie(d);f.createCookie(d,JSON.stringify(data),b?0:365)};h.prototype.get=function(a,c){var b=c?this.storageKey+this.sessionPostfix:this.storageKey;if(b=f.readCookie(b))return data=\nJSON.parse(b),data[a]};h.prototype.getAll=function(a){a=a?this.storageKey+this.sessionPostfix:this.storageKey;return data=(a=f.readCookie(a))?JSON.parse(a):{}};h.prototype.getAllWithSession=function(){var a=this.getAll(),c=this.getAll(!0),b;for(b in c)c.hasOwnProperty(b)\u0026\u0026(a[b]=c[b]);return a};e.prototype.updateVisitedPages=function(){if(!f.isIFrame()){var a=this.lc.get(\"_pg\");-1===document.location.href.indexOf(\"\/resend\/\")\u0026\u0026this.lc.set(\"_pg\",a?a+1:1)}};e.prototype.specificPageVisit=function(){f.currentUrlContains(\/^\\\/([a-z]{2}(-[a-z]{2})?\\\/)?([a-z]{2}\\\/)?$\/)\u0026\u0026\n-1===window.location.pathname.indexOf(\"\/hc\")\u0026\u0026this.lc.set(\"_hm\",!0);f.currentUrlContains(\/(price|pricing)\/)\u0026\u0026this.lc.set(\"_pr\",!0);f.currentUrlContains(\/(-vs-|competitors|alternative|trello|basecamp|smartsheet)\/)\u0026\u0026this.lc.set(\"_cmp\",!0);f.currentUrlContains(\/(project|manage|collab|tour|blog)\/)\u0026\u0026this.lc.set(\"_pmc\",!0);f.currentUrlContains(\/(\\\/hc|\\\/help|webinar)\/)\u0026\u0026this.lc.set(\"_hlp\",!0);f.currentUrlContains(\/(free)\/)\u0026\u0026this.lc.set(\"_fre\",!0);f.currentUrlContains(\/(marketing|creativ|enterprise)\/)\u0026\u0026-1===\nwindow.location.pathname.indexOf(\"\/embed\")\u0026\u0026this.lc.set(\"_mce\",!0)};e.prototype.detectOS=function(){-1===window.navigator.appVersion.indexOf(\"Mobile\")\u0026\u0026(-1!==window.navigator.appVersion.indexOf(\"Win\")?this.lc.set(\"_win\",!0):-1!==window.navigator.appVersion.indexOf(\"Mac\")\u0026\u0026this.lc.set(\"_mac\",!0))};e.prototype.detectBrowser=function(){var a=navigator.userAgent;\/(mobile|samsung|opera|edge|facebook|yandex|android|pinterest|uc\\sbrowser|chromium|vivaldi)\/.test(a.toLowerCase())||(-1!==a.indexOf(\"MSIE\")||\n0\u003Ca.indexOf(\"Trident\/\")?this.lc.set(\"_ie\",!0):-1!==a.indexOf(\"Chrome\")?this.lc.set(\"_chrome\",!0):-1!==a.indexOf(\"Safari\")?this.lc.set(\"_safari\",!0):-1!==a.indexOf(\"Firefox\")\u0026\u0026this.lc.set(\"_firefox\",!0))};e.prototype.detectLang=function(){var a=navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage;0===a.indexOf(\"en\")\u0026\u0026this.lc.set(\"_en\",!0)};e.prototype.detectDeviceType=function(){var a=navigator.userAgent,c=\/(iphone|ipad|android|j2me|mobile|tablet|opera mini|iemobile|edgios|edga|opera mobi)\/ig;\nc.test(a)\u0026\u0026this.lc.set(\"_mobile\",!0)};e.prototype.chatConv=function(){if(null==this.lc.get(\"_zd\")){var a=this;if(window.SnapABug){var c=SnapABug.submitForm.bind(SnapABug);SnapABug.submitForm=function(){a.lc.set(\"_zd\",!0);return c()};var b=SnapABugChat.submitChat.bind(SnapABugChat);SnapABugChat.submitChat=function(){a.lc.set(\"_zd\",!0);return b()}}var d=document.querySelector('[action\\x3d\"\/hc\/ru\/requests\"]');d\u0026\u0026d.addEventListener(\"submit\",function(c){a.lc.set(\"_zd\",!0)})}};e.prototype.pricingRegister=\nfunction(){for(var a=document.querySelectorAll(\"[data-signup-form]\"),c=document.querySelectorAll(\".wrike-lp-form\"),b=0;b\u003Ca.length;b++)a[b].addEventListener(\"submit\",this.singupSubmit.bind(this));for(b=0;b\u003Cc.length;b++)c[b].parentElement.addEventListener(\"submit\",this.singupSubmit.bind(this))};e.prototype.competitorCampaign=function(){var a=f.getQueryVariable(\"ga_campaign\")||f.getQueryVariable(\"utm_campaign\"),c=f.getQueryVariable(\"utm_referrer\"),b=\/(competitor)\/ig;(a\u0026\u0026b.test(a)||c\u0026\u0026b.test(c))\u0026\u0026this.lc.set(\"_competitor\",\n!0,!0)};e.prototype.singupSubmit=function(a){var c=a.target;a=c.getAttribute(\"data-plan-id\")||\"pro\";f.currentUrlContains(\/(price|pricing)\/)\u0026\u0026this.lc.set(\"_prc\",!0);var b=\/\\.edu\/;c=c.querySelector('[name\\x3d\"email\"]');b.test(c.value.split(\"@\").pop())\u0026\u0026this.lc.set(\"_edu\",!0);switch(a){case \"free\":this.lc.set(\"_free\",!0);break;case \"pro-price\":case \"pro\":this.lc.set(\"_free\",void 0);this.lc.set(\"_cp\",void 0);break;default:this.lc.set(\"_cp\",!0)}};e.prototype.isCorporate=function(){this.lc.set(\"_crp\",",["escape",["macro",4],8,16],"\u0026\u0026\n\"corporate\"===",["escape",["macro",4],8,16],")};e.prototype.setSources=function(){if(null==this.lc.get(\"_dr\",!0)\u0026\u0026null==this.lc.get(\"_cpt\",!0)){var a=!1,c;ga\u0026\u0026ga(function(){var a=ga.getAll();if(a)for(var b=0;b\u003Ca.length;b++)if(a[b]\u0026\u0026a[b].get(\"trackingId\")===v){c=a[b];break}});if(c){var b=f.getQueryVariable(\"utm_referrer\");b=b\u0026\u0026-1\u003Cb.indexOf(\"wrike.com\");var d=f.getQueryVariable(\"ga_campaign\")||f.getQueryVariable(\"utm_campaign\"),e=c.get(\"_utmz\")\u0026\u0026-1\u003Cc.get(\"_utmz\").indexOf(\"utmcsr\\x3d(direct)\"),g=!c.get(\"referrer\");\n!d\u0026\u0026(b||e)\u0026\u0026g\u0026\u0026(a=!0)}this.lc.set(\"_dr\",a,!0)}};e.prototype.getScoreByCountryCode=function(a){if(!a)return q;for(var c=0;c\u003Cn.length;c++)if(-1\u003Cn[c].countries.indexOf(a))return n[c].score;return q};e.prototype.getCountryScore=function(){var a=f.readCookie(\"country\");if(!a)return this.getScoreByCountryCode();a=a.split(\":\").shift();return this.getScoreByCountryCode(a)};e.prototype.runScoring=function(){for(var a=\"updateVisitedPages specificPageVisit detectOS detectBrowser detectLang chatConv pricingRegister setSources isCorporate detectDeviceType competitorCampaign\".split(\" \"),\nc=0;c\u003Ca.length;c++)this[a[c]]()};e.prototype.getScoreByFlag=function(a){return w[a]||0};e.prototype.debugLog=function(){var a=this.lc.getAllWithSession();console.log(a._pg);for(var c=0;c\u003Cg.length;c++)console.log(g[c],a[g[c]]);(a=f.readCookie(\"country\"))\u0026\u0026console.log(\"country\",a.split(\":\").shift())};e.prototype.calculateScore=function(){var a=this.lc.getAllWithSession();6\u003Ca._pg\u0026\u0026(a._pg=6);for(var c=0,b=[],d=0;d\u003Cg.length;d++)a[g[d]]\u0026\u0026(c+=this.getScoreByFlag(g[d]),b.push({flag:g[d],value:this.getScoreByFlag(g[d])}));\nc+=a._pg*l;b.push({flag:\"_pg\",value:a._pg*l});b.push({flag:\"country\",value:this.getCountryScore()});c+=this.getCountryScore();a=1\/(1+Math.exp(-c));a=k[0]*Math.exp(k[1]*a)+k[2]*Math.exp(k[3]*a);dataLayer.push({emrr:parseFloat(Number(a).toFixed(3)),event:\"emrr\"});dataLayer.push({emrr12:parseFloat(Number(12*a).toFixed(3)),event:\"emrr12\"});return a};e.prototype.sendStats=function(){var a=this.lc.getAllWithSession();6\u003Ca._pg\u0026\u0026(a._pg=6);for(var c=0,b={},d=0;d\u003Cg.length;d++)a[g[d]]\u0026\u0026(c+=this.getScoreByFlag(g[d]),\nb[g[d]]=this.getScoreByFlag(g[d]));c+=a._pg*l;b._pg=a._pg*l;a=f.readCookie(\"country\");b.country=a?a.split(\":\").shift():\"--\";a=this.getCountryScore();b.country_value=a;c+=a;c=1\/(1+Math.exp(-c));c=k[0]*Math.exp(k[1]*c)+k[2]*Math.exp(k[3]*c);b.emrr=Number(c).toFixed(3);var e=new XMLHttpRequest;b={events:[{group:\"registration\",event:\"registration_scor\",path:window.location.pathname,value:b}]};b=r(b);e.open(\"POST\",\"https:\/\/\"+u+\"\/stat\/site\",!0);e.setRequestHeader(\"Content-type\",\"application\/x-www-form-urlencoded\");\ne.setRequestHeader(\"Wrike-Client-Id\",\"site- \"+(new Date).getTime());var h=this;e.onreadystatechange=function(){4===e.readyState\u0026\u0026200===e.status\u0026\u0026h.lc.set(p,!0)};e.send(b)};var m=new e(t);ga(function(){m.lc.get(p)||(m.runScoring(),m.calculateScore(),-1\u003Cwindow.location.pathname.indexOf(\"\/resend\/\")\u0026\u0026m.sendStats())})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"comparison.dragged\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Before\/After dragged\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar banner;function writeLog(c){return function(a){if(a.detail.task){var b=\"Task:\"+a.detail.task;a.detail.board\u0026\u0026(b=\"Task:\"+a.detail.task+\", Board: \"+a.detail.board)}else a.detail.status\u0026\u0026(b=a.detail.status);dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:c,eventLabel:b})}}window.addEventListener(\"IS_BOARDS__TASK_MOVED\",writeLog(\"Boards: task moved\"));window.addEventListener(\"IS_CUSTOM_WORKFLOW__STATUS_CHANGED\",writeLog(\"Custom workflow: status changed\"));\nwindow.addEventListener(\"IS_GANTT_CHART__TASK_MOVED\",writeLog(\"Gantt chart: task moved\"));window.addEventListener(\"IS_GANTT_CHART__TASK_RESIZED\",writeLog(\"Gantt chart: task resized\"));window.addEventListener(\"IS_REPORT__STATUS_STATE_CHANGED\",writeLog(\"Report: status state changed\"));(banner=document.querySelector(\"#lp-code-826 a\"))\u0026\u0026banner.addEventListener(\"click\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Banner Click\",eventLabel:\"To Demo Form\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendEvent(a,b,c){dataLayer.push({event:\"gaEvent\",eventCategory:a,eventAction:b,eventLabel:c})}window.addEventListener(\"DEADLINE_CHECKED\",function(a){sendEvent(\"Train Brain Page\",\"Result\",a.detail.reason)});window.addEventListener(\"TIMELINE__TASK_MOVED\",function(a){sendEvent(\"Train Brain Page\",\"Task Moved\",a.detail.task)});window.addEventListener(\"TIMELINE__TASK_RESIZED\",function(a){sendEvent(\"Train Brain Page\",\"Task Resized\",a.detail.task)});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(){var a=\"undefined\";HelpCenter.user.role\u0026\u0026HelpCenter.user\u0026\u0026HelpCenter\u0026\u0026(a=HelpCenter.user.role);window.SnapEngage\u0026\u0026SnapEngage.setCallback(\"StartChat\",function(b,c,d){dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:\"Chat Started\",eventLabel:a})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"game.finished\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Games\",eventAction:\"Halloween Game\",eventLabel:\"Finished\"})});window.addEventListener(\"game.start\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Games\",eventAction:\"Halloween Game\",eventLabel:\"Started\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"SA_SURVEY.ANSWER\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Self Assessment Survey\",eventAction:a.detail.question,eventLabel:a.detail.answer})});window._saSurvey\u0026\u0026window._saSurvey.stage\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Self Assessment Survey\",eventAction:\"Result\",eventLabel:window._saSurvey.stage});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(a){var d=[],b;for(b in a)if(a.hasOwnProperty(b)\u0026\u0026\"function\"!==typeof a[b]){var c=encodeURIComponent(b)+\"\\x3d\";c=\"object\"===typeof a[b]?c+encodeURIComponent(JSON.stringify(a[b])):c+encodeURIComponent(a[b]);d.push(c)}return d.join(\"\\x26\")}function g(a,d,b){a=new XMLHttpRequest;var c=f(e);a.onreadystatechange=function(){4==this.readyState\u0026\u0026200==this.status?\"function\"===typeof d\u0026\u0026d():\"function\"===typeof b\u0026\u0026b(this.status)};a.withCredentials=!0;a.open(\"POST\",\"https:\/\/www.wrike.com\/stat\/site\",\n!0);a.setRequestHeader(\"Content-type\",\"application\/x-www-form-urlencoded\");a.setRequestHeader(\"Wrike-Client-Id\",\"site- \"+(new Date).getTime());a.send(c)}var e={events:[{group:\"interactions\",event:\"page__scrolled\",path:window.location.pathname,value:{percent:",["escape",["macro",22],8,16],"}}]};g(e)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(a){var d=[],b;for(b in a)if(a.hasOwnProperty(b)\u0026\u0026\"function\"!==typeof a[b]){var c=encodeURIComponent(b)+\"\\x3d\";c=\"object\"===typeof a[b]?c+encodeURIComponent(JSON.stringify(a[b])):c+encodeURIComponent(a[b]);d.push(c)}return d.join(\"\\x26\")}function g(a,d,b){a=new XMLHttpRequest;var c=f(e);a.onreadystatechange=function(){4==this.readyState\u0026\u0026200==this.status?\"function\"===typeof d\u0026\u0026d():\"function\"===typeof b\u0026\u0026b(this.status)};a.withCredentials=!0;a.open(\"POST\",\"https:\/\/www.wrike.com\/stat\/site\",\n!0);a.setRequestHeader(\"Content-type\",\"application\/x-www-form-urlencoded\");a.setRequestHeader(\"Wrike-Client-Id\",\"site- \"+(new Date).getTime());a.send(c)}var e={events:[{group:\"interactions\",event:\"link__click\",path:\"library.wrike.com\"==window.location.hostname?window.location.pathname.match(\"(\/[^\/]*\/).*\")[1]:window.location.pathname,value:{click_url:",["escape",["macro",30],8,16],",click_target:",["escape",["macro",31],8,16],",click_text:",["escape",["macro",32],8,16],",click_id:",["escape",["macro",33],8,16],",click_class:",["escape",["macro",34],8,16],"}}]};\ng(e)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar events=[\"ebook_form__submitted\",\"webinar_form__submitted\",\"template_form__submitted\",\"pm_guide_form__submitted\"];events.forEach(function(a){window.addEventListener(a,function(){dataLayer.push({event:a})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cariers_form__subbmitted\",function(){dataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Submit\",eventLabel:\"Cariers Form Subbmitted\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createPixel(b){var a=document.createElement(\"img\");a.height=0;a.width=0;a.src=b;document.body.appendChild(a)}\"ebook_form__submitted\"==",["escape",["macro",12],8,16],"\u0026\u0026(createPixel(\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id\\x3dnz8xq\\x26p_id\\x3dTwitter\\x26tw_sale_amount\\x3d0\\x26tw_order_quantity\\x3d0\"),createPixel(\"\/\/t.co\/i\/adsct?txn_id\\x3dnz8xq\\x26p_id\\x3dTwitter\\x26tw_sale_amount\\x3d0\\x26tw_order_quantity\\x3d0\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createPixel(b){var a=document.createElement(\"img\");a.height=0;a.width=0;a.src=b;document.body.appendChild(a)}\"ebook_form__submitted\"==",["escape",["macro",12],8,16],"?createPixel(\"https:\/\/dc.ads.linkedin.com\/collect\/?pid\\x3d114863\\x26conversionId\\x3d335337\\x26fmt\\x3dgif\"):\"webinar_form__submitted\"==",["escape",["macro",12],8,16],"\u0026\u0026createPixel(\"https:\/\/dc.ads.linkedin.com\/collect\/?pid\\x3d114863\\x26conversionId\\x3d335345\\x26fmt\\x3dgif\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"interview_slider__switched\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Slider Swithed (David page)\",eventLabel:a.detail.name})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"conversion\",ea:\"form_submit\",el:\"trial_with_threshold\",ev:",["escape",["macro",19],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"conversion\",ea:\"form_submit\",el:\"trial_corporate_email\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"term-e7e5d07437489\" data-gtmsrc=\"https:\/\/vidassets.terminus.services\/a3816217-2e51-4af0-ad1b-7bc624e02e1f\/t.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendEvent(a,b){dataLayer.push({event:\"gaEvent\",eventCategory:\"Help_center\",eventAction:a,eventLabel:b})}window.addEventListener(\"fiveminFirstlink\",function(a){sendEvent(\"HC PopUp Link Click\",\"Ask the Wrike Community\")});window.addEventListener(\"tenminFirstlink\",function(a){sendEvent(\"Community PopUp Link Click\",\"Sign-in with Wrike\")});window.addEventListener(\"tenminSecondlink\",function(a){sendEvent(\"Community PopUp Link Click\",\"Start a free Wrike Trial\")});\nwindow.addEventListener(\"tenminPopup\",function(a){sendEvent(\"Community PopUp Shown\")});window.addEventListener(\"fiveminPopup\",function(a){sendEvent(\"HC PopUp Shown\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar bfId=\"RMNuOhvlXHjo8OFM\",bfSession=.041666666666666664;(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"munchkin.brightfunnel.com\/js\/build\/bf-munchkin.min.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar bF=document.createElement(\"div\");bF.innerHTML=\"\\x3cbrightfunnel\\x3e\\x3c\/brightfunnel\\x3e\";document.body.appendChild(bF);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"live_demo__interaction\",function(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Live Demo Interaction\",eventAction:a.detail.action,eventLabel:a.detail.step})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(a){var d=[],b;for(b in a)if(a.hasOwnProperty(b)\u0026\u0026\"function\"!==typeof a[b]){var c=encodeURIComponent(b)+\"\\x3d\";c=\"object\"===typeof a[b]?c+encodeURIComponent(JSON.stringify(a[b])):c+encodeURIComponent(a[b]);d.push(c)}return d.join(\"\\x26\")}function g(a,d,b){a=new XMLHttpRequest;var c=f(e);a.onreadystatechange=function(){4==this.readyState\u0026\u0026200==this.status?\"function\"===typeof d\u0026\u0026d():\"function\"===typeof b\u0026\u0026b(this.status)};a.withCredentials=!0;a.open(\"POST\",\"https:\/\/www.wrike.com\/stat\/site\",\n!0);a.setRequestHeader(\"Content-type\",\"application\/x-www-form-urlencoded\");a.setRequestHeader(\"Wrike-Client-Id\",\"site- \"+(new Date).getTime());a.send(c)}var e={events:[{group:\"interactions\",event:\"page__scrolled\",path:window.location.pathname.match(\"(\/[^\/]*\/).*\")[1],value:{percent:",["escape",["macro",22],8,16],"}}]};g(e)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendEvent(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Library Ebook\",eventAction:\"Social Sharing\",eventLabel:a})}var socialButton=",["escape",["macro",35],8,16],";void 0!=socialButton?(\"icon sprite\"==",["escape",["macro",34],8,16],"\u0026\u0026(socialButton=socialButton.parentElement),sendEvent(socialButton.dataset.tp)):console.error(\"Failed to read social button click\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_airpr={id:\"665839\",ga_dim:\"10\",ga_account_preset:\"UA-43330364-7\"};(function(c,d,a,b){a=c.createElement(d);a.async=1;a.src=\"\/\/px.airpr.com\/airpr.js\";b=c.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)})(document,\"script\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction json2urlencoded(a){var d=[],b;for(b in a)if(a.hasOwnProperty(b)\u0026\u0026\"function\"!==typeof a[b]){var c=encodeURIComponent(b)+\"\\x3d\";c=\"object\"===typeof a[b]?c+encodeURIComponent(JSON.stringify(a[b])):c+encodeURIComponent(a[b]);d.push(c)}return d.join(\"\\x26\")}\nfunction sendData(a,d,b){var c=new XMLHttpRequest;a=json2urlencoded(a);c.onreadystatechange=function(){4==this.readyState\u0026\u0026200==this.status?\"function\"===typeof d\u0026\u0026d():\"function\"===typeof b\u0026\u0026b(this.status)};c.withCredentials=!0;c.open(\"POST\",\"https:\/\/www.wrike.com\/stat\/site\",!0);c.setRequestHeader(\"Content-type\",\"application\/x-www-form-urlencoded\");c.setRequestHeader(\"Wrike-Client-Id\",\"site- \"+(new Date).getTime());c.send(a)}\nfunction sendEventToLog(a,d){var b={events:[{group:\"interactions\",event:a,path:window.location.pathname,value:{plan:d}}]};sendData(b)}function sendEventToGa(a){dataLayer.push({event:\"gaEvent\",eventCategory:\"Page elements\",eventAction:\"Pricing page ROI calculator\",eventLabel:a})}window.addEventListener(\"calculator.open\",function(a){sendEventToGa(\"Calculator opened\");sendEventToLog(\"roi__calc_opened_pricing_page\",\"(none)\")});\nwindow.addEventListener(\"input.update\",function(a){sendEventToGa(a.detail+\" input updated\")});window.addEventListener(\"plan.recommended\",function(a){sendEventToLog(\"roi__calc_plan_recommended\",a.detail)});window.addEventListener(\"trialForm.open\",function(a){sendEventToLog(\"roi__calc_plan_form_opened\",a.detail)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar yahoo_conversion_id=1000988783,yahoo_conversion_label=",["escape",["macro",36],8,16],",yahoo_conversion_value=\"undefined\"!==typeof ",["escape",["macro",19],8,16],"?",["escape",["macro",19],8,16],":0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cdiv style=\"display:inline;\"\u003E\n        \u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/b91.yahoo.co.jp\/pagead\/conversion\/1000988783\/?value=0\u0026amp;label=",["escape",["macro",36],12],"\u0026amp;guid=ON\u0026amp;script=0\u0026amp;disvt=true\"\u003E\n    \u003C\/div\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"techScroll\",percent:",["escape",["macro",22],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"spaNewPageLoaded\",function(a){dataLayer.push({event:\"technicalReload\",url:a.detail.virtualUrl,path:a.detail.virtualPath})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar campaign=",["escape",["macro",37],8,16],"||",["escape",["macro",38],8,16],"||\"\";if(campaign.toLowerCase().includes(\"brand\")){var d=new Date;d.setTime(d.getTime()+36E5);document.cookie=\"WrikeBrandedTraffic\\x3dtrue;expires\\x3d\"+d.toUTCString()+\";domain\\x3d.wrike.com;path\\x3d\/\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=",["escape",["macro",30],8,16],"||\"\";",["escape",["macro",30],8,16],".endsWith(\".pdf\")\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Link Clicks\",eventAction:\"File Downloaded\",eventLabel:a})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=",["escape",["macro",30],8,16],"||\"\",a=",["escape",["macro",34],8,16],"||\"\",c=[\"\/wrike-creative-teams\/\",\"\/wrike-marketers-teams\/\"];\"card__link\"!=a\u0026\u0026!a.includes(\"td-cta__button\")||-1==c.indexOf(document.location.pathname)||dataLayer.push({event:\"gaEvent\",eventCategory:\"Link Clicks\",eventAction:\"Traina Content Links\",eventLabel:b})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(b){var a=document.createElement(\"img\");a.height=1;a.width=1;a.style=\"display:none\";a.src=b;document.body.appendChild(a)}var d=",["escape",["macro",30],8,16],"||\"\",c=",["escape",["macro",34],8,16],"||\"\",e=[\"\/lg-where-work-flows-creative\/\",\"\/lg-where-work-flows-marketer\/\"];\"card__link\"!=c\u0026\u0026!c.includes(\"td-cta__button\")||-1==e.indexOf(document.location.pathname)||(b(\"https:\/\/dc.ads.linkedin.com\/collect\/?pid\\x3d114863\\x26conversionId\\x3d776569\\x26fmt\\x3dgif\"),b(\"https:\/\/www.facebook.com\/tr?id\\x3d307980792700798\\x26ev\\x3dclick_on_the_asset_-_where_work_flows\"),\ndataLayer.push({event:\"gaEvent\",eventCategory:\"Click on the asset\",eventAction:\"Where work flows\",eventLabel:d}))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar pageviewSuffix=\" page viewed\";function sendEventToGa(a,b){dataLayer.push({event:\"gaEvent\",eventCategory:\"AirPR Actions\",eventAction:a,eventLabel:b})}\nswitch(!0){case \/^(\\\/((\\w{2})|(pt-br)))?\\\/([vw]\\w\\\/)?$\/.test(window.location.pathname):window.addEventListener(\"trial_form__submitted\",function(){sendEventToGa(\"Homepage trial start\",\"\")});window.addEventListener(\"non_trial_form__submitted\",function(a){content=a.detail.value.content||\"\";\"outro_demo\"==content\u0026\u0026sendEventToGa(\"Homepage demo request\",content)});break;case \/^(\\\/((\\w{2})|(pt-br)))?\\\/tour(-[wv]\\w)?\\\/.*$\/.test(window.location.pathname):sendEventToGa(\"Tour\"+pageviewSuffix,\"\");window.addEventListener(\"trial_form__submitted\",\nfunction(){sendEventToGa(\"Tour trial start\",\"\")});window.addEventListener(\"non_trial_form__submitted\",function(a){content=a.detail.value.content||\"\";\"outro_demo\"==content?sendEventToGa(\"Tour demo request\",content):\"watchdemo\"==content\u0026\u0026sendEventToGa(\"Tour watch demo request\",content)});break;case \/^(\\\/((\\w{2})|(pt-br)))?\\\/demo(-[wv]\\w)?\\\/.*$\/.test(window.location.pathname):sendEventToGa(\"Demo\"+pageviewSuffix);window.addEventListener(\"trial_form__submitted\",function(){sendEventToGa(\"Tour trial start\",\n\"\")});window.addEventListener(\"non_trial_form__submitted\",function(a){content=a.detail.value.content||\"\";\"outro_demo\"==content?sendEventToGa(\"Demo page demo request\",content):\"watchdemo\"==content\u0026\u0026sendEventToGa(\"Demo page watch demo request\",content)});break;case \/^(\\\/((\\w{2})|(pt-br)))?\\\/customers(-[wv]\\w)?\\\/.*$\/.test(window.location.pathname):var customer=window.location.pathname.split(\"\/\")[2];sendEventToGa(\"Customers\"+(\"\"==customer?\"\":\" \"+customer)+pageviewSuffix,\"\");window.addEventListener(\"trial_form__submitted\",\nfunction(){sendEventToGa(\"Customers\"+(\"\"==customer?\"\":\" \"+customer)+\" trial start\",\"\")});break;case \/^(\\\/((\\w{2})|(pt-br)))?\\\/price(-[wv]\\w)?\\\/$\/.test(window.location.pathname):sendEventToGa(\"Price\"+pageviewSuffix,\"\");window.addEventListener(\"trial_form__submitted\",function(a){sendEventToGa(\"Price \"+a.detail.value.registration_plan+\" trial start\",a.detail.value.registration_plan)});window.addEventListener(\"non_trial_form__submitted\",function(a){sendEventToGa(\"Price contact request\",a.detail.value.content)});\nbreak;case \/^(\\\/((\\w{2})|(pt-br)))?\\\/(marketing-project-management|creative-project-management|project-management|product-management-software|business-operations-teams|professional-services-management|team-collaboration-software)(-[wv]\\w)?\\\/$\/.test(window.location.pathname):solution=window.location.pathname.split(\"\/\").join(\"\");sendEventToGa(\"Solution \"+solution+pageviewSuffix,\"\");window.addEventListener(\"trial_form__submitted\",function(){sendEventToGa(\"Solution \"+solution+\" trial start\",\"\")});window.addEventListener(\"non_trial_form__submitted\",\nfunction(a){sendEventToGa(\"Price contact request\",a.detail.value.content)});break;case \/\\\/newsroom\\\/\/.test(window.location.pathname):sendEventToGa(\"Newsroom\"+pageviewSuffix,\"\"),window.addEventListener(\"trial_form__submitted\",function(){sendEventToGa(\"Newsroom trial start\",\"\")})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar aud=\/.*\\?.*targetID=[^\u0026]*aud-(\\d+).*\/g.exec(document.location.href);aud=null==aud?\"\":aud[1];ga\u0026\u0026\"\"!=aud\u0026\u0026ga(function(){if(ga.getAll()){var a=ga.getAll();if(a)for(var b=0;b\u003Ca.length;b++)trackerName=a[b].get(\"name\"),clientId=a[b].get(\"clientId\"),\"UA-43330364-7\"==a[b].get(\"trackingId\")\u0026\u0026(ga(trackerName+\".set\",{dimension12:aud}),ga(trackerName+\".send\",\"event\",\"service\",\"get_audience\",\"get_audience\",{nonInteraction:!0}))}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.cookie=\"collaborate_2019_social\\x3d1; expires\\x3d Wed, 1 Jan 2020 00:00:00 PST\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"gaEvent\",eventCategory:\"Buttons\",eventAction:\"Collaborate register button click\",eventLabel:document.location.pathname});\"1\"==",["escape",["macro",40],8,16],"\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"Collaborate 2019\",eventAction:\"Social traffic reg link\",eventLabel:document.location.pathname});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"technicalReload"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"www.wrike.com"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"(analyticstracking|frontend)"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/blog\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"wrike.com\/help"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"www.wrike.com\\\/library.*thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"gaEvent"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/resend"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"sales"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"workspace"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"profile"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"accounts"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"analyticsframe"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"labs"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"analyticstracking"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"login"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/test-page-remarketing-1"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/wrike-savings"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"corporate"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/affiliate-registration-success"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"(ebook|webinar|template)\\_form__submitted"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"pm_guide_form__submitted"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"emrr12"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"Productivity Tour"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gaEvent"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"0.7"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"emrr"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"0.45"
    },{
      "function":"_sw",
      "arg0":["macro",20],
      "arg1":"RU"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"1.2"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"1"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"0.3"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"1.1"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"0.6"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"1.5"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"(try|learn)\\.wrike\\.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"library.wrike.com"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"75"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"techScroll"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)215620_346($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"collaborate.wrike.com"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/apps"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"\/apps\/.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/library\/ebooks\/.*thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"try.wrike.com\/all-in-one-collaboration-project-management-software"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\/help\/"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/avoid-marketing-horror-stories"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/design-clients-from-hell"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/the-true-cost-of-doing-nothing"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/overcome-creative-productivity-roadblocks"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/reclaim-your-creative-time"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/best-marketing-management-software"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/marketing-project-management-software"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/become-agile-with-wrike"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/marketing-operations-management-software"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"go.wrike.com\/(agile-marketing-quiz|agile-quiz)"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"\/project-management-guide"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/project-management\/"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/marketing-project-management\/"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/creative-project-management\/"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/blog\/"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/product-management-software"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"\/business-operations-teams"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"\/professional-services-management"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/team-collaboration-software\/"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"\/library\/ebooks\/.+thank-you\/"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/(v[a-z]?\\\/)?$"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"cdn.wrike.com\/image\/lp-assets\/ny-campaign\/index.html"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"help.wrike.com"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/web-based-task-management-software"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/3-prehistoric-tools"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/is-wrike-right-for-you"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/all-in-one-collaboration-and-project-management"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/blogpost\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/wrike-at-martech\/"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"\/wrike-at-martech\/clkn\/https\/calendly.com\/wrike-team\/15-minute-demo\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"learn.wrike.com\/productivity-tour"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"try.wrike.com\/g-suite"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/proofing-and-approval-add-on\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/easy-project-planning"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/main\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/before-after-pm"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/([cmp]r\\\/)?$"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\/(ru|fr|de|es|ja)\/$"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/gantt-chart"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"train-your-brain"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/halloween-2017\/index.html"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/self-assessment-survey"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"mark_as_read"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"remind.htm"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"frontend"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"open-wrike-app"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"reset-password-confirm"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"resend"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"library.wrike.com"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(25|50|75|100)"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.linkClick"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/careers\/"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/davids-interview"
    },{
      "function":"_ge",
      "arg0":["macro",19],
      "arg1":"4"
    },{
      "function":"_sw",
      "arg0":["macro",20],
      "arg1":"US"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"\/frontend\/"
    },{
      "function":"_css",
      "arg0":["macro",35],
      "arg1":".share-popup .buttons-wrapper div"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"\/price"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)215620_347($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"Social"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"^(Collaborate_2019|Wrike_Collaborate|Wrike_Collaborate_Nashville|Wrike_Collaborate_London|Collaborate_Nashville|Collaborate_London)$"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"www.cvent.com\/d\/"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"(^$|((^|,)215620_375($|,)))"
    }],
  "rules":[
    [["if",0,1],["add",0,5,37,38,41,53]],
    [["if",2],["add",0,1,5,7,8,19,30,36,37,38,41,45,46,48,53,55,56,60,74,83,92,93,94,97,106,107]],
    [["if",1,3],["add",1]],
    [["if",1,5],["add",2,52,65,73]],
    [["if",1,6],["add",2,43]],
    [["if",1,7],["add",3]],
    [["if",8,9],["add",4,10]],
    [["if",1,10],["unless",11],["add",6,9,99]],
    [["if",1],["unless",12,13,14,15,16,17,18],["add",7,8,19,30,36,45,55,56,74,83,93,97,101,102,106]],
    [["if",1,20],["add",11,70]],
    [["if",1,21],["add",12,89]],
    [["if",1,22],["add",13]],
    [["if",23],["add",14,66,85,86]],
    [["if",24],["add",14]],
    [["if",10,25],["add",15]],
    [["if",26,27],["add",16]],
    [["if",10,28,29],["add",17]],
    [["if",10,29,30],["add",18]],
    [["if",10,29,32],["add",20]],
    [["if",10,29,33],["add",21]],
    [["if",10,29,34],["add",22]],
    [["if",10,29,35],["add",23]],
    [["if",10,29,36],["add",24]],
    [["if",10,29,37],["add",25]],
    [["if",1,38],["add",26,76]],
    [["if",23,39],["add",27]],
    [["if",40,41,42],["add",28]],
    [["if",43,44],["add",29]],
    [["if",1],["add",31,33,34,46,48,60,94,107]],
    [["if",1,40],["add",32]],
    [["if",1,45],["add",35]],
    [["if",1,46],["add",39]],
    [["if",9,47,48],["add",40]],
    [["if",1,49],["add",42]],
    [["if",1,50],["add",44,61]],
    [["if",1,51],["add",47]],
    [["if",1,52],["add",49,50,51]],
    [["if",1,53],["add",49,50]],
    [["if",1,54],["add",49]],
    [["if",1,55],["add",49]],
    [["if",1,56],["add",49]],
    [["if",1,57],["add",51]],
    [["if",1,58],["add",51]],
    [["if",1,59],["add",51]],
    [["if",1,60],["add",51]],
    [["if",1,61],["add",54]],
    [["if",1,62],["add",57]],
    [["if",1,63],["add",57]],
    [["if",1,64],["add",57]],
    [["if",1,65],["add",57]],
    [["if",1,66],["add",57]],
    [["if",1,67],["add",57]],
    [["if",1,68],["add",57]],
    [["if",1,69],["add",57]],
    [["if",1,70],["add",57]],
    [["if",1,71],["add",57]],
    [["if",1,72],["add",57,72,76]],
    [["if",1,73],["add",58]],
    [["if",1,74],["add",59,78,91]],
    [["if",1,75],["add",61]],
    [["if",1,76],["add",62]],
    [["if",1,77],["add",63]],
    [["if",1,78],["add",64]],
    [["if",1,79],["add",65,71]],
    [["if",9,47,80,81],["add",67]],
    [["if",1,82],["add",68]],
    [["if",1,83],["add",69]],
    [["if",1,84],["add",72]],
    [["if",1,85],["add",72,76]],
    [["if",1,86],["add",72,76]],
    [["if",1,87],["add",75]],
    [["if",1,88],["add",76]],
    [["if",1,89],["add",76]],
    [["if",1,90],["add",76]],
    [["if",1,91],["add",77]],
    [["if",1,92],["add",79]],
    [["if",1,93],["add",80]],
    [["if",42,101],["unless",14,17,94,95,96,97,98,99,100],["add",81]],
    [["if",102],["add",82,103,104,105]],
    [["if",1,103],["add",84]],
    [["if",1,104],["add",87]],
    [["if",10,29,105],["add",88]],
    [["if",106,107],["add",90]],
    [["if",107],["unless",12,13,14,15,16,17,18],["add",92]],
    [["if",40,42],["add",95]],
    [["if",109,110],["add",96]],
    [["if",1,111],["add",98]],
    [["if",112,113],["add",100]],
    [["if",1,45,114,115],["add",108]],
    [["if",102,116,117],["add",109]],
    [["if",1,4],["block",1,93]],
    [["if",1,19],["block",7]],
    [["if",1,31],["block",19,86]],
    [["if",107,108],["block",92]],
    [["if",1],["unless",40],["block",96]]]
},
"runtime":[
[],[]
]



};
var ba,da=function(){var a=ca,b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ea=this||self,fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ja=function(){},ka=function(a){return"function"==typeof a},la=function(a){return"string"==typeof a},ma=function(a){return"number"==typeof a&&!isNaN(a)},na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},pa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},qa=function(a,b){if(a&&na(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ra=function(a,b){if(!ma(a)||
!ma(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ta=function(a,b){for(var c=new sa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ua=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},va=function(a){return Math.round(Number(a))||0},wa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},xa=function(a){var b=[];if(na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ya=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},za=function(){return(new Date).getTime()},sa=function(){this.prefix="gtm.";this.values={}};sa.prototype.set=function(a,b){this.values[this.prefix+a]=b};sa.prototype.get=function(a){return this.values[this.prefix+a]};sa.prototype.contains=function(a){return void 0!==this.get(a)};
var Aa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ba=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ca=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},f=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,C=document,Ka=navigator,La=C.currentScript&&C.currentScript.src,Ma=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Na=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Oa=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Na(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=ea.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Pa=function(){if(La){var a=La.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Qa=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Na(c,b);void 0!==a&&(c.src=a);return c},Ra=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Sa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Ua=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Va=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Za=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},$a=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},ab=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var cb={},db=function(a,b){cb[a]=cb[a]||[];cb[a][b]=!0},eb=function(a){for(var b=[],c=cb[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var fb=/:[0-9]+$/,gb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},kb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=hb(a.protocol)||hb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(fb,"").toLowerCase());var g=b,h,k=hb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ib(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(fb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||db("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=pa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=gb(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},hb=function(a){return a?a.replace(":","").toLowerCase():""},ib=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
lb=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||db("TAGGING",1),c="/"+c);var d=b.hostname.replace(fb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var mb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},pb=function(a,b,c,d){var e=nb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ob(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=ob(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function qb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=mb(b,e).indexOf(c)}
var ub=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=rb(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!tb(y,t)&&qb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!tb(p,t)&&qb(m,a,l)}return k};function ob(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function nb(a,b){for(var c=[],d=mb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var vb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,wb=/(^|\.)doubleclick\.net$/i,tb=function(a,b){return wb.test(document.location.hostname)||"/"===b&&vb.test(a)},rb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var xb=[],yb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},zb=function(a){return yb[a]},Ab=/[\x00\x22\x26\x27\x3c\x3e]/g;var Eb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Fb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Gb=function(a){return Fb[a]};
xb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Eb,Gb)+"'"}};var Mb=/['()]/g,Nb=function(a){return"%"+a.charCodeAt(0).toString(16)};xb[12]=function(a){var b=
encodeURIComponent(String(a));Mb.lastIndex=0;return Mb.test(b)?b.replace(Mb,Nb):b};var Ob=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Pb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Qb=function(a){return Pb[a]};xb[16]=function(a){return a};var Sb=[],Tb=[],Ub=[],Vb=[],Wb=[],Yb={},Zb,$b,ac,bc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},cc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Yb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Yb[c](e):(void 0)(c,e,b)},ec=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=dc(a[e],b,c));return d},
fc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Yb[b];return c?c.priorityOverride||0:0},dc=function(a,b,c){if(na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(dc(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Sb[g];if(!h||b.Cc(h))return;c[g]=!0;try{var k=ec(h,b,c);k.vtp_gtmEventId=b.id;d=cc(k,b);ac&&(d=ac.wf(d,k))}catch(w){b.Ud&&b.Ud(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[dc(a[l],b,c)]=dc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=dc(a[n],b,c);$b&&(m=m||p===$b.vb);d.push(p)}return $b&&m?$b.zf(d):d.join("");case "escape":d=dc(a[1],b,c);if($b&&na(a[1])&&"macro"===a[1][0]&&$b.ag(a))return $b.lg(d);d=String(d);for(var t=2;t<a.length;t++)xb[a[t]]&&(d=xb[a[t]](d));return d;case "tag":var q=a[1];if(!Vb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Hd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=gc(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},gc=function(a,b,c){try{return Zb(ec(a,b,c))}catch(d){JSON.stringify(a)}return null};var hc=function(){var a=function(b){return{toString:function(){return b}}};return{cd:a("convert_case_to"),dd:a("convert_false_to"),ed:a("convert_null_to"),fd:a("convert_true_to"),gd:a("convert_undefined_to"),ja:a("function"),Le:a("instance_name"),Me:a("live_only"),Ne:a("malware_disabled"),Oe:a("metadata"),Vg:a("original_vendor_template_id"),Pe:a("once_per_event"),wd:a("once_per_load"),xd:a("setup_tags"),yd:a("tag_id"),zd:a("teardown_tags")}}();var ic=null,lc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ic=jc(a);for(var e=0;e<Tb.length;e++){var g=Tb[e],h=kc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Vb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},kc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ic(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ic(e[g]);if(null===h)return null;
if(h)return!1}return!0},jc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=gc(Ub[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var oc,ca="floor ceil round max min abs pow sqrt".split(" "),pc="undefined"!=typeof Symbol&&Symbol.iterator&&ca[Symbol.iterator];oc=pc?pc.call(ca):{next:da()};for(var qc=oc.next();!qc.done;qc=oc.next())Math.hasOwnProperty(qc.value);var Ec={},Fc=null,Gc=Math.random();Ec.i="GTM-WRBD5L";Ec.zb="7v2";var Hc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Ic="www.googletagmanager.com/gtm.js";var Jc=Ic,Kc=null,Lc=null,Mc=null,Nc="//www.googletagmanager.com/a?id="+Ec.i+"&cv=480",Oc={},Pc={},Qc=function(){var a=Fc.sequence||0;Fc.sequence=a+1;return a};var F=function(a,b,c,d){return(2===Rc()||d||"http:"!=u.location.protocol?a:b)+c},Rc=function(){var a=Pa(),b;if(1===a)a:{var c=Jc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};
var Yc=function(){return"&tc="+Vb.filter(function(a){return a}).length},gd=function(){Zc&&(u.clearTimeout(Zc),Zc=void 0);void 0===$c||ad[$c]&&!bd||(cd[$c]||dd.cg()||0>=ed--?(db("GTM",1),cd[$c]=!0):(dd.xg(),Ra(fd()),ad[$c]=!0,bd=""))},fd=function(){var a=$c;if(void 0===a)return"";var b=eb("GTM"),c=eb("TAGGING");return[hd,ad[a]?"":"&es=1",id[a],b?"&u="+b:"",c?"&ut="+c:"",Yc(),bd,"&z=0"].join("")},jd=function(){return[Nc,"&v=3&t=t","&pid="+ra(),"&rv="+Ec.zb].join("")},kd="0.005000">
Math.random(),hd=jd(),ld=function(){hd=jd()},ad={},bd="",$c=void 0,id={},cd={},Zc=void 0,dd=function(a,b){var c=0,d=0;return{cg:function(){if(c<a)return!1;za()-d>=b&&(c=0);return c>=a},xg:function(){za()-d>=b&&(c=0);c++;d=za()}}}(2,1E3),ed=1E3,md=function(a,b){if(kd&&!cd[a]&&$c!==a){gd();$c=a;bd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";id[a]="&e="+c+"&eid="+a;Zc||(Zc=u.setTimeout(gd,500))}},nd=function(a,b,c){if(kd&&!cd[a]&&b){a!==$c&&(gd(),$c=a);var d=String(b[hc.ja]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;bd=bd?bd+"."+e:"&tr="+e;Zc||(Zc=u.setTimeout(gd,500));2022<=fd().length&&gd()}};var od={},pd=new sa,qd={},rd={},vd={name:"dataLayer",set:function(a,b){f(sd(a,b),qd);td()},get:function(a){return ud(a,2)},reset:function(){pd=new sa;qd={};td()}},ud=function(a,b){if(2!=b){var c=pd.get(a);if(kd){var d=wd(a);c!==d&&db("GTM",5)}return c}return wd(a)},wd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:yd(d)},yd=function(a){for(var b=qd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Bd=function(a,b){rd.hasOwnProperty(a)||(pd.set(a,b),f(sd(a,b),qd),td())},sd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},td=function(a){ua(rd,function(b,c){pd.set(b,c);f(sd(b,void 0),qd);f(sd(b,c),qd);a&&delete rd[b]})},Cd=function(a,b,c){od[a]=od[a]||{};var d=1!==c?wd(b):pd.get(b);"array"===Ha(d)||"object"===Ha(d)?od[a][b]=f(d):od[a][b]=d},Dd=function(a,b){if(od[a])return od[a][b]};var Ed=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Fd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Gd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Hd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Jd=function(a){var b=ud("gtm.whitelist");b&&db("GTM",9);var c=b&&Fa(xa(b),Fd),d=ud("gtm.blacklist");d||(d=ud("tagTypeBlacklist"))&&db("GTM",3);
d?db("GTM",8):d=[];Id()&&(d=xa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=pa(xa(d),"google")&&db("GTM",2);var e=d&&Fa(xa(d),Gd),g={};return function(h){var k=h&&h[hc.ja];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Pc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>pa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
pa(c,l[p])){db("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=pa(e,k);if(q)t=q;else{var r=ta(e,l||[]);r&&db("GTM",10);t=r}}var v=!m||t;v||!(0<=pa(l,"sandboxedScripts"))||c&&-1!==pa(c,"sandboxedScripts")||(v=ta(e,Hd));return g[k]=v}},Id=function(){return Ed.test(u.location&&u.location.hostname)};var Kd={wf:function(a,b){b[hc.cd]&&"string"===typeof a&&(a=1==b[hc.cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(hc.ed)&&null===a&&(a=b[hc.ed]);b.hasOwnProperty(hc.gd)&&void 0===a&&(a=b[hc.gd]);b.hasOwnProperty(hc.fd)&&!0===a&&(a=b[hc.fd]);b.hasOwnProperty(hc.dd)&&!1===a&&(a=b[hc.dd]);return a}};var Ld={active:!0,isWhitelisted:function(){return!0}},Md=function(a){var b=Fc.zones;!b&&a&&(b=Fc.zones=a());return b};var Nd=!1,Od=0,Pd=[];function Qd(a){if(!Nd){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Nd=!0;for(var e=0;e<Pd.length;e++)D(Pd[e])}Pd.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function Rd(){if(!Nd&&140>Od){Od++;try{C.documentElement.doScroll("left"),Qd()}catch(a){u.setTimeout(Rd,50)}}}var Sd=function(a){Nd?a():Pd.push(a)};var Td={},Ud={},Vd=function(a,b,c,d){if(!Ud[a]||Hc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Ud[a].tags.push(e)-1},Wd=function(a,b,c,d){if(Ud[a]){var e=Ud[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Xd(a){for(var b=Td[a]||[],c=0;c<b.length;c++)b[c]();Td[a]={push:function(d){d(Ec.i,Ud[a])}}}
var $d=function(a,b,c){Ud[a]={tags:[]};ka(b)&&Yd(a,b);c&&u.setTimeout(function(){return Xd(a)},Number(c));return Zd(a)},Yd=function(a,b){Td[a]=Td[a]||[];Td[a].push(Ba(function(){return D(function(){b(Ec.i,Ud[a])})}))};function Zd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ba(function(){b++;d&&b>=c&&Xd(a)})},cf:function(){d=!0;b>=c&&Xd(a)}}};var ae=function(){function a(d){return!ma(d)||0>d?0:d}if(!Fc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ma(vd.get("gtm.start"))?vd.get("gtm.start"):0;Fc._li={cst:a(c-b),cbt:a(Lc-b)}}};var ee=!1,fe=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},ge=!1;
var he=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||db("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}ae();return u[b]},ie=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=fe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ke=function(){},je=function(){return u.GoogleAnalyticsObject||"ga"};var re=function(a){};function qe(a,b){a.containerId=Ec.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function se(a,b,c,d){var e=Vb[a],g=te(a,b,c,d);if(!g)return null;var h=dc(e[hc.xd],c,[]);if(h&&h.length){var k=h[0];g=se(k.index,{I:g,R:1===k.Hd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function te(a,b,c,d){function e(){if(g[hc.Ne])k();else{var w=ec(g,c,[]),y=Vd(c.id,String(g[hc.ja]),Number(g[hc.yd]),w[hc.Oe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=za()-B;nd(c.id,Vb[a],"5");Wd(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=za()-B;nd(c.id,Vb[a],"6");Wd(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;nd(c.id,g,"1");var z=function(A){var E=za()-B;re(A);nd(c.id,g,"7");Wd(c.id,y,"exception",E);x||(x=!0,k())};var B=za();try{cc(w,c)}catch(A){z(A)}}}var g=Vb[a],h=b.I,k=b.R,l=b.terminate;if(c.Cc(g))return null;var m=dc(g[hc.zd],c,[]);if(m&&m.length){var n=m[0],p=se(n.index,{I:h,R:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Hd?l:p}if(g[hc.wd]||g[hc.Pe]){var t=g[hc.wd]?Wb:c.Hg,q=h,r=k;if(!t[a]){e=Ba(e);var v=ue(a,t,e);h=v.I;k=v.R}return function(){t[a](q,r)}}return e}
function ue(a,b,c){var d=[],e=[];b[a]=ve(d,e,c);return{I:function(){b[a]=we;for(var g=0;g<d.length;g++)d[g]()},R:function(){b[a]=xe;for(var g=0;g<e.length;g++)e[g]()}}}function ve(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function we(a){a()}function xe(a,b){b()};var Ae=function(a,b){for(var c=[],d=0;d<Vb.length;d++)if(a.ab[d]){var e=Vb[d];var g=b.add();try{var h=se(d,{I:g,R:g,terminate:g},a,d);h?c.push({me:d,ae:fc(e),Hf:h}):(ye(d,a),g())}catch(l){g()}}b.cf();c.sort(ze);for(var k=0;k<c.length;k++)c[k].Hf();return 0<c.length};function ze(a,b){var c,d=b.ae,e=a.ae;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.me,k=b.me;g=h>k?1:h<k?-1:0}return g}
function ye(a,b){if(!kd)return;var c=function(d){var e=b.Cc(Vb[d])?"3":"4",g=dc(Vb[d][hc.xd],b,[]);g&&g.length&&c(g[0].index);nd(b.id,Vb[d],e);var h=dc(Vb[d][hc.zd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Be=!1,Ce=function(a,b,c,d,e){if("gtm.js"==b){if(Be)return!1;Be=!0}md(a,b);var g=$d(a,d,e);Cd(a,"event",1);Cd(a,"ecommerce",1);Cd(a,"gtm");var h={id:a,name:b,Cc:Jd(c),ab:[],Hg:[],Ud:function(n){db("GTM",6);re(n)}};h.ab=lc(h);var k=Ae(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ke();if(!k)return k;for(var l=0;l<h.ab.length;l++)if(h.ab[l]){var m=
Vb[l];if(m&&!Hc[String(m[hc.ja])])return!0}return!1};var Ee=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};var G={Yb:"event_callback",Ma:"event_timeout",T:"gtag.config",M:"allow_ad_personalization_signals",O:"cookie_expires",La:"cookie_update",wa:"session_duration"};var Fe=function(){var a=!1;return a};function Ge(){var a=Fc;return a.gcq=a.gcq||new He}var Ie=function(a,b){Ge().register(a,b)},Je=function(){this.status=1;this.uc={};this.be=null},Ke=function(a,b,c,d,e){this.type=a;this.Mg=b;this.ca=c||"";this.Bb=d;this.defer=e},He=function(){this.ne={};this.Md={};this.Wa=[]},Le=function(a,b){return a.ne[b]=a.ne[b]||new Je},Me=function(a,b,c,d){var e=Le(a,d.ca).be;if(e){var g=f(c),h=f(Le(a,d.ca).uc),k=f(a.Md),l=new Ee(g,h,k);try{e(b,d.Mg,l)}catch(m){}}};
He.prototype.register=function(a,b){3!==Le(this,a).status&&(Le(this,a).be=b,Le(this,a).status=3,this.flush())};He.prototype.push=function(a,b,c,d){var e=Math.floor(za()/1E3);if(c&&1===Le(this,c).status&&(Le(this,c).status=2,this.push("require",[],c),!Fe())){var g=encodeURIComponent(c);Oa(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Wa.push(new Ke(a,e,c,b,d));d||this.flush()};
He.prototype.flush=function(a){for(var b=this;this.Wa.length;){var c=this.Wa[0];if(c.defer)c.defer=!1,this.Wa.push(c);else switch(c.type){case "require":if(3!==Le(this,c.ca).status&&!a)return;break;case "set":ua(c.Bb[0],function(e,g){b.Md[e]=g});break;case "config":var d=c.Bb[0];Le(this,c.ca).uc={};Me(this,G.T,d,c);Le(this,c.ca).uc=d;break;case "event":Me(this,c.Bb[1],c.Bb[0],c)}this.Wa.shift()}};var Ne=/[A-Z]+/,Oe=/\s/,Pe=function(a){if(la(a)&&(a=ya(a),!Oe.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ne.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ka:d}}}}},Re=function(a){for(var b={},c=0;c<a.length;++c){var d=Pe(a[c]);d&&(b[d.id]=d)}Qe(b);var e=[];ua(b,function(g,h){e.push(h)});return e};
function Qe(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ka[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Se={};var Te=null,Ue={},We={},Xe,Ye=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[G.Yb]&&(c.eventCallback=b[G.Yb]),b[G.Ma]&&(c.eventTimeout=b[G.Ma]));return c};
var df={config:function(a){},event:function(a){var b=a[1];if(la(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=Ye(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Se[b]||(Se[b]=[]);Se[b].push(c)}},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&la(a[1])&&(b={},b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},ef={policy:!0};var gf=function(a){return ff?C.querySelectorAll(a):null},hf=function(a,b){if(!ff)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},jf=!1;if(C.querySelectorAll)try{var kf=C.querySelectorAll(":root");kf&&1==kf.length&&kf[0]==C.documentElement&&(jf=!0)}catch(a){}var ff=jf;var rf=function(a){if(qf(a))return a;this.Pg=a};rf.prototype.Of=function(){return this.Pg};var qf=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};rf.prototype.getUntrustedUpdateValue=rf.prototype.Of;var sf=!1,tf=[];function uf(){if(!sf){sf=!0;for(var a=0;a<tf.length;a++)D(tf[a])}}var vf=function(a){sf?D(a):tf.push(a)};var wf=[],xf=!1,yf=function(a){return u["dataLayer"].push(a)},zf=function(a){var b=Fc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Bf=function(a){var b=a._clear;ua(a,function(g,h){"_clear"!==g&&(b&&Bd(g,void 0),Bd(g,h))});Kc||(Kc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Qc(),a["gtm.uniqueEventId"]=d,Bd("gtm.uniqueEventId",d));Mc=c;var e=Af(a);
Mc=null;switch(c){case "gtm.init":db("GTM",19),e&&db("GTM",20)}return e};function Af(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Fc.zones;d=e?e.checkState(Ec.i,c):Ld;return d.active?Ce(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Cf=function(){for(var a=!1;!xf&&0<wf.length;){xf=!0;delete qd.eventModel;td();var b=wf.shift();if(null!=b){var c=qf(b);if(c){var d=b;b=qf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ud(h,1);if(na(k)||Ja(k))k=f(k);rd[h]=k}}try{if(ka(b))try{b.call(vd)}catch(v){}else if(na(b)){var l=b;if(la(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ud(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&la(b[0])){var r=df[b[0]];if(r&&(!c||!ef[b[0]])){b=r(b);break a}}b=void 0}if(!b){xf=!1;continue}}a=Bf(b)||a}}finally{c&&td(!0)}}xf=!1}
return!a},Df=function(){var a=Cf();try{var b=Ec.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Ef=function(){var a=Ma("dataLayer",[]),b=Ma("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Sd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});vf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<Fc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new rf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);wf.push.apply(wf,d);if(300<this.length)for(db("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Cf()&&h};wf.push.apply(wf,a.slice(0));D(Df)};var Ff;var ag={};ag.vb=new String("undefined");
var bg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ag.vb?b:a[d]);return c.join("")}};bg.prototype.toString=function(){return this.resolve("undefined")};bg.prototype.valueOf=bg.prototype.toString;ag.Qe=bg;ag.kc={};ag.zf=function(a){return new bg(a)};var cg={};ag.yg=function(a,b){var c=Qc();cg[c]=[a,b];return c};ag.Ed=function(a){var b=a?0:1;return function(c){var d=cg[c];if(d&&"function"===typeof d[b])d[b]();cg[c]=void 0}};ag.ag=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ag.lg=function(a){if(a===ag.vb)return a;var b=Qc();ag.kc[b]=a;return'google_tag_manager["'+Ec.i+'"].macro('+b+")"};ag.eg=function(a,b,c){a instanceof ag.Qe&&(a=a.resolve(ag.yg(b,c)),b=ja);return{zc:a,I:b}};var dg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},eg=function(a){Fc.hasOwnProperty("autoEventsSettings")||(Fc.autoEventsSettings={});var b=Fc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},fg=function(a,b,c){eg(a)[b]=c},gg=function(a,b,c,d){var e=eg(a),g=Aa(e,b,d);e[b]=c(g)},hg=function(a,b,c){var d=eg(a);return Aa(d,b,c)};var ig=function(){for(var a=Ka.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(za()/1E3)].join(".")},lg=function(a,b,c,d){var e=jg(b);return pb(a,e,kg(c),d)},mg=function(a,b,c,d){var e=""+jg(c),g=kg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},jg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},kg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ng=["1"],og={},sg=function(a,b,c,d){var e=pg(a);og[e]||qg(e,b,c)||(rg(e,ig(),b,c,d),qg(e,b,c))};function rg(a,b,c,d,e){var g=mg(b,"1",d,c);ub(a,g,c,d,0==e?void 0:new Date(za()+1E3*(void 0==e?7776E3:e)))}function qg(a,b,c){var d=lg(a,b,c,ng);d&&(og[a]=d);return d}function pg(a){return(a||"_gcl")+"_au"};var tg=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Wc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Wc]||(g[a[h].Wc]=[]),g[a[h].Wc].push({timestamp:k[1],Lf:k[2]}))}return g};function ug(){for(var a=vg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function wg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var vg,xg,yg=function(a){vg=vg||wg();xg=xg||ug();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(vg[l],vg[m],vg[n],vg[p])}return b.join("")},zg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=xg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}vg=vg||wg();xg=xg||
ug();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ag;function Bg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Fg=function(){var a=Cg,b=Dg,c=Eg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Sa(C,"mousedown",d);Sa(C,"keyup",d);Sa(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Eg=function(){var a=Ma("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Gg=/(.*?)\*(.*?)\*(.*)/,Hg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ig=/^(?:www\.|m\.|amp\.)+/,Jg=/([^?#]+)(\?[^#]*)?(#.*)?/,Kg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Mg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(yg(String(d))))}var e=b.join("*");return["1",Lg(e),e].join("*")},Lg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ag)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Ag=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ag[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Og=function(){return function(a){var b=lb(u.location.href),c=b.search.replace("?",""),d=gb(c,"_gl",!0)||"";a.query=Ng(d)||{};var e=kb(b,"fragment").match(Kg);a.fragment=Ng(e&&e[3]||
"")||{}}},Pg=function(){var a=Og(),b=Eg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ca(c,d.query),Ca(c,d.fragment));return c},Ng=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Gg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Lg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=zg(t[q+1]);return p}}}}catch(r){}};
function Qg(a,b,c){function d(m){var n=m,p=Kg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Jg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Rg(a,b,c){for(var d={},e={},g=Eg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Bg(k.domains,b)&&(k.fragment?Ca(e,k.callback()):Ca(d,k.callback()))}if(Ea(d)){var l=Mg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Qg(l,a.action);bb.test(v)&&(a.action=v)}}}else Sg(l,a,!1)}if(!c&&Ea(e)){var w=Mg(e);Sg(w,a,!0)}}function Sg(a,b,c){if(b.href){var d=Qg(a,b.href,void 0===c?!1:c);bb.test(d)&&(b.href=d)}}
var Cg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Rg(e,e.hostname,!1)}}catch(h){}},Dg=function(a){try{if(a.action){var b=kb(lb(a.action),"host");Rg(a,b,!0)}}catch(c){}},Tg=function(a,b,c,d){Fg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Eg().decorators.push(e)},Ug=function(){var a=C.location.hostname,b=Hg.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Ig,"")===e.replace(Ig,"")},Vg=function(a,b){return!1===a?!1:a||b||Ug()};var Wg={};var Xg=/^\w+$/,Yg=/^[\w-]+$/,Zg=/^~?[\w-]+$/,$g={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function ah(a){return a&&"string"==typeof a&&a.match(Xg)?a:"_gcl"}var ch=function(){var a=lb(u.location.href),b=kb(a,"query",!1,void 0,"gclid"),c=kb(a,"query",!1,void 0,"gclsrc"),d=kb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||gb(e,"gclid",void 0);c=c||gb(e,"gclsrc",void 0)}return bh(b,c,d)};
function bh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Yg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Wg.gtm_3pds?0:Wg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function dh(a,b,c){function d(p,t){var q=eh(p,e);q&&ub(q,t,h,g,l,!0)}b=b||{};var e=ah(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Vd?7776E3:b.Vd;c=c||za();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.vh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var eh=function(a,b){var c=$g[a];if(void 0!==c)return b+c},fh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function gh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var hh=function(a,b,c,d,e){if(na(b)){var g=ah(e);Tg(function(){for(var h={},k=0;k<a.length;++k){var l=eh(a[k],g);if(l){var m=mb(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},ih=function(a){return a.filter(function(b){return Zg.test(b)})},jh=function(a){for(var b=["aw","dc"],c=ah(a&&a.prefix),d={},e=0;e<b.length;e++)$g[b[e]]&&(d[b[e]]=$g[b[e]]);ua(d,function(g,h){var k=mb(c+h,C.cookie);if(k.length){var l=k[0],m=fh(l),n={};n[g]=[gh(l)];dh(n,a,m)}})};var kh=/^\d+\.fls\.doubleclick\.net$/;function lh(a){var b=lb(u.location.href),c=kb(b,"host",!1);if(c&&c.match(kh)){var d=kb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function mh(a,b){if("aw"==a||"dc"==a){var c=lh("gcl"+a);if(c)return c.split(".")}var d=ah(b);if("_gcl"==d){var e;e=ch()[a]||[];if(0<e.length)return e}var g=eh(a,d),h;if(g){var k=[];if(C.cookie){var l=mb(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=gh(l[m]);n&&-1===pa(k,n)&&k.push(n)}h=ih(k)}else h=k}else h=k}else h=[];return h}
var nh=function(){var a=lh("gac");if(a)return decodeURIComponent(a);var b=tg(),c=[];ua(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Lf);g=ih(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},oh=function(a,b,c,d,e){sg(b,c,d,e);var g=og[pg(b)],h=ch().dc||[],k=!1;if(g&&0<h.length){var l=Fc.joined_au=Fc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ka.sendBeacon&&Ka.sendBeacon(t)||Ra(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=pg(b),r=og[q];r&&rg(q,r,c,d,e)}};var ph;if(3===Ec.zb.length)ph="g";else{var rh="G";ph=rh}
var sh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ph,OPT:"o"},th=function(a){var b=Ec.i.split("-"),c=b[0].toUpperCase(),d=sh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Ec.zb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Ec.zb+e};var yh=["input","select","textarea"],zh=["button","hidden","image","reset","submit"],Ah=function(a){var b=a.tagName.toLowerCase();return!qa(yh,function(c){return c===b})||"input"===b&&qa(zh,function(c){return c===a.type.toLowerCase()})?!1:!0},Bh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):$a(a,["form"],100)},Ch=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Ah(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Fh=!!u.MutationObserver,Gh=void 0,Hh=function(a){if(!Gh){var b=function(){var c=C.body;if(c)if(Fh)(new MutationObserver(function(){for(var e=0;e<Gh.length;e++)D(Gh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Sa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<Gh.length;e++)D(Gh[e])}))})}};Gh=[];C.body?b():D(b)}Gh.push(a)};
var Zh=function(){var a=C.body,b=C.documentElement||a&&a.parentElement,c,d;if(C.compatMode&&"BackCompat"!==C.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};db("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},$h=function(a){var b=Zh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},ai=function(a){if(C.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!u.getComputedStyle)return!0;var c=u.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=u.getComputedStyle(d,null))}return!1};var ii=u.clearTimeout,ji=u.setTimeout,M=function(a,b,c){if(Fe()){b&&D(b)}else return Oa(a,b,c)},ki=function(){return new Date},li=function(){return u.location.href},mi=function(a){return kb(lb(a),"fragment")},ni=function(a){return ib(lb(a))},oi=null;
var pi=function(a,b){return ud(a,b||2)},qi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return yf(a)},ri=function(a,b){u[a]=b},N=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},si=function(a,b,c){return mb(a,b,void 0===c?!0:!!c)},ti=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Vd:d},g=ch();dh(g,e);jh(e)},ui=function(a,b,c,d,e){for(var g=Pg(),h=ah(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==$g[l]){var m=eh(l,h),
n=g[m];if(n){var p=Math.min(fh(n),za()),t;b:{for(var q=p,r=mb(m,C.cookie),v=0;v<r.length;++v)if(fh(r[v])>q){t=!0;break b}t=!1}t||ub(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};dh(bh(g.gclid,g.gclsrc),w);},vi=function(a,b,c,d,e){hh(a,b,c,d,e);},wi=function(a,b){if(Fe()){
b&&D(b)}else Qa(a,b)},xi=function(a){return!!hg(a,"init",!1)},yi=function(a){fg(a,"init",!0)},zi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Jc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ua(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});M(F("https://","http://",d))},Ai=function(a,b){var c=a[b];return c};var Ci=ag.eg;
var Di=new sa,Ei=function(a,b){function c(h){var k=lb(h),l=kb(k,"protocol"),m=kb(k,"host",!0),n=kb(k,"port"),p=kb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Fi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&na(c)){for(var d=0;d<c.length;d++)if(Fi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=pa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Di.get(q);r||(r=new RegExp(c,t),Di.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ei(b,c)}return!1};var Hi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ii={},Ji=encodeURI,Y=encodeURIComponent,Ki=Ra;var Li=function(a,b){if(!a)return!1;var c=kb(lb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Mi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Ii.bg=function(){var a=!1;return a};var lj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||ra();return a.hid};var Cj=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Dj=function(){this.c=1;this.e=[];this.p2=this.p=null};function Ej(a){var b=Fc,c=b.gss=b.gss||{};return c[a]=c[a]||new Dj}
var Fj=function(a){if(Ej(a).p&&!Ej(a).p2){var b=Ej(a).p;Ej(a).p2=function(c,d,e){b(c,d,e.eventModel)}}return Ej(a).p2},Gj=function(a,b){Ej(a).p2=b;Ej(a).p=function(c,d,e){return b(c,d,new Ee(e))}},Hj=function(a){var b=Ej(a),c=Fj(a);if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,new Ee(l.p))}catch(m){}};g(d);g(e)}};var ak=window,bk=document,ck=function(a){var b=ak._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ak["ga-disable-"+a])return!0;try{var c=ak.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=mb("AMP_TOKEN",bk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return bk.getElementById("__gaOptOutExtension")?!0:!1};var hk=!1;hk=!0;
var jk=function(a,b,c){if(hk)Ge().push("event",[c,b],a,void 0);else{ik(a);var d=Math.floor(za()/1E3);Ej(a).e.push(new Cj(b,d,c,void 0));Hj(a)}},kk=function(a,b,c){if(hk)Ge().push("event",[c,b],a,!0);else{ik(a);var d=Math.floor(za()/1E3);Ej(a).e.push(new Cj(b,d,c,!0))}},ik=function(a){if(1===Ej(a).c&&(Ej(a).c=2,!Fe())){var b=encodeURIComponent(a);Oa(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},mk=function(a,b){},lk=function(a,b){},nk=function(a){return"_"===a.charAt(0)},ok=function(a){ua(a,function(c){nk(c)&&
delete a[c]});var b=a[G.ub]||{};ua(b,function(c){nk(c)&&delete b[c]})};var Z={a:{}};
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),A=0;A<B.length;A++){var E=Number(B[A]);if(isNaN(E))return[];n.test(B[A])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=Zh(),A=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+A,z);return{Cf:x,Df:z}}}function d(){q=N("self");
r=q.document;v=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,z,B,A){var E=l(z),J={},H;for(H in E){J.qa=H;if(E.hasOwnProperty(J.qa)){var R=Number(J.qa);x<R||(qi({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[J.qa].join(",")}),gg("sdl",z,function(X){return function(V){delete V[X.qa];return V}}(J),{}))}J={qa:J.qa}}}function g(){var x=y(),z=x.Cf,B=x.Df,A=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
p.xb,t.vd);e(A,"horiz.pct",p.wb,t.vd);e(B,"vert.pix",p.xb,t.Ad);e(E,"vert.pct",p.wb,t.Ad);fg("sdl","pending",!1)}function h(){var x=250,z=!1;r.scrollingElement&&r.documentElement&&q.addEventListener&&(x=50,z=!0);var B=0,A=!1,E=function(){A?B=ji(E,x):(B=0,g(),xi("sdl")&&!a()&&(Ta(q,"scroll",J),Ta(q,"resize",J),fg("sdl","init",!1)));A=!1},J=function(){z&&y();B?A=!0:(B=ji(E,x),fg("sdl","pending",!0))};return J}function k(x,z,B){if(z){var A=b(String(x));gg("sdl",B,function(E){for(var J=0;J<A.length;J++){var H=
String(A[J]);E.hasOwnProperty(H)||(E[H]=[]);E[H].push(z)}return E},{})}}function l(x){return hg("sdl",x,{})}function m(x){D(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,A=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,J=x.vtp_verticalThresholdsPixels,H=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case p.xb:k(B,z,"horiz.pix");break;case p.wb:k(A,z,"horiz.pct")}switch(E){case p.xb:k(J,z,"vert.pix");break;case p.wb:k(H,
z,"vert.pct")}xi("sdl")?hg("sdl","pending")||(w||(d(),w=!0),D(function(){return g()})):(d(),w=!0,v&&(yi("sdl"),fg("sdl","pending",!0),D(function(){g();if(a()){var R=h();Sa(q,"scroll",R);Sa(q,"resize",R)}else fg("sdl","init",!1)})))}var n=/^\s*$/,p={wb:"PERCENT",xb:"PIXELS"},t={Ad:"vertical",vd:"horizontal"},q,r,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):vf(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=N("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=a.vtp_gtmOnFailure;ae();M("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=N("google_trackConversion");if(ka(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Mi(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),
a.vtp_eventValue&&(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:th()})||b()}else b()},b)})}();Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=gf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=C.getElementById(a.vtp_elementId);b&&(c=d?Ua(b,d):Va(b));return ya(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Dd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=pi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?kb(lb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ni(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=dg(c,"gtm.click");qi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!xi("cl")){var c=N("document");Sa(c,"click",a,!0);yi("cl")}D(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=N(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return si(a.vtp_name,pi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();


Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:pi("gtm.url",1))||li();var d=b[a("vtp_component")];if(!d||"URL"==d)return ni(String(c));var e=lb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?na(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=kb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=kb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=pi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Hc&&b.Jc>=b.Hc)b.Bc&&N("self").clearInterval(b.Bc);else{b.Jc++;var c=ki().getTime();qi({event:b.U,"gtm.timerId":b.Bc,"gtm.timerEventNumber":b.Jc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Hc,"gtm.timerStartTime":b.ke,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ke,"gtm.triggers":b.Ng})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){D(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{U:b.vtp_eventName,Jc:0,interval:Number(b.vtp_interval),Hc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ng:String(b.vtp_uniqueTriggerId||"0"),ke:ki().getTime()};c.Bc=N("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.asp=["nonGoogleScripts"],function(){(function(a){Z.__asp=a;Z.__asp.b="asp";Z.__asp.g=!0;Z.__asp.priorityOverride=0})(function(a){u.adroll_adv_id=a.vtp_customerId;u.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(u.adroll_conversion_value=a.vtp_conversionValueInDollars,u.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=Mi(a.vtp_customData,"key","value");u.adroll_custom_data=b}a.vtp_segmentName&&(u.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(u.adroll_email=a.vtp_visitorEmail);u.__adroll_loaded=!0;var c=F("https://s","http://a",".adroll.com/j/roundtrip.js");M(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Mi(n.vtp_fieldsToSet,"fieldName","value"),g);f(Mi(n.vtp_contentGroup,"index","group"),h);f(Mi(n.vtp_dimension,"index","dimension"),k);f(Mi(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(Mi(d.vtp_fieldsToSet,"fieldName","value"),g);f(Mi(d.vtp_contentGroup,
"index","group"),h);f(Mi(d.vtp_dimension,"index","dimension"),k);f(Mi(d.vtp_metric,"index","metric"),l);var t=he(d.vtp_functionName);if(ka(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Qc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(Q){var P=[].slice.call(arguments,0);P[0]=q+P[0];t.apply(window,P)},x=function(Q,P){return void 0===P?P:Q(P)},z=function(Q,P){if(P)for(var ia in P)P.hasOwnProperty(ia)&&y("set",Q+ia,P[ia])},B=function(){},A=function(Q,P,ia){var Wa=0;if(Q)for(var Da in Q)if(Q.hasOwnProperty(Da)&&(ia&&v[Da]||!ia&&void 0===v[Da])){var Xa=w[Da]?wa(Q[Da]):Q[Da];"anonymizeIp"!=Da||Xa||(Xa=void 0);P[Da]=Xa;Wa++}return Wa},E={name:r};A(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",th(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(Q,P){void 0!==d[P]&&y("set",Q,d[P])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(g,J,!1)&&y("set",J);var H;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var Q=g&&g.hitCallback;ka(Q)&&Q();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(va,d.vtp_eventValue||
e.value)};A(H,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var T=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:T})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var W="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:W})}H?y("send","pageview",H):y("send","pageview");}if(!a){var aa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(aa="internal/"+aa);a=!0;var oa=F("https:","http:","//www.google-analytics.com/"+aa,g&&g.forceSSL);M(oa,function(){var Q=fe();Q&&Q.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else D(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();




Z.a.aev=["google"],function(){function a(q,r){var v=Dd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(q,w);if(z&&(x=v(z),n[y]=x,p.push(y),35<p.length)){var B=p.shift();delete n[B]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(li());na(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Li(q,w)}function e(q){m.test(q)||(q="http://"+q);return kb(lb(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":return b(r,"FORM."+q,k)||v;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":return a(r,"interactedFormFieldPosition")||
v;case "INTERACT_SEQUENCE_NUMBER":return a(r,"interactSequenceNumber")||v;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Ua(q,"value");case "button":return Va(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Ah(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Ua(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",
ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||v;case "TEXT":return b(r,
w,Va)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),B=lb(z),A=String(q.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=kb(B,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var J=q.vtp_attribute,H=a(r,"element");E=H&&Ua(H,J)||v||""}return E;case "MD":var R=q.vtp_mdValue,X=b(r,"MD",Vh);return R&&X?Yh(X,R)||v:X||v;case "FORM":return g(String(q.vtp_component||
"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.ga=["google"],function(){var a,b,c=function(d){function e(L){var I=[].slice.call(arguments,0);I[0]=v+I[0];q.push(I)}function g(L,I){void 0!==d[I]&&e(L,d[I])}function h(L,I){void 0!==d[I]&&e(L,Number(d[I]))}function k(L,I){if(t(I))for(var O=0;O<I.length;O++)e(L,I[O])}function l(L,I,O){if(t(I))for(var S=0;S<I.length;S++){for(var T=[L],W=I[S],aa=0;aa<O.length;aa++)T.push(W[O[aa]]);e.apply(this,T)}}function m(L,I){void 0!==d[I]&&e("_set",L,d[I])}function n(L,I){return void 0===I?I:L(I)}function p(L,
I){void 0!==I&&(w+="&"+L+"="+I)}var t=na,q=N("_gaq",[],!1),r=!1,v="";void 0==d.vtp_trackerName?v="gtm"+Qc()+".":""!==d.vtp_trackerName&&(v=d.vtp_trackerName+".");g("_setAccount","vtp_webPropertyId");e("_set","gtmid",th(!0));



var w="";

if(""!==w){var y=function(L,I,O){for(var S=I.length-1;0<=S;S--){var T=I[S].split("=");if(T[0]===L)return T[1]||"1"}for(var W=O.length-1;0<=W;W--){var aa=O[W].split("=");if(aa[0]===L)return aa[1]||"1"}},x=lb(li()),z=kb(x,"query").split("&"),B=d.vtp_allowAnchor?kb(x,"fragment").split("&"):[];p("gclid",y("gclid",B,z));p("gclsrc",y("gclsrc",B,z));p("dclid",y("dclid",B,z));e("_set","campaignParams",w)}
d.vtp_enableInPageLinkId&&e("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");l("_setPageGroup",d.vtp_contentGroup,["index","group"]);g("_setCampaignTrack",
"vtp_campaignTrack");g("_setClientInfo","vtp_clientInfo");g("_setDetectFlash","vtp_detectFlash");g("_setDetectTitle","vtp_detectTitle");

void 0!==d.vtp_forceSsl&&d.vtp_forceSsl&&(q.push(["_gat._forceSSL"]),r=!!d.vtp_forceSsl);e("_set","hitCallback",function(){ka(d.vtp_hitCallback)&&d.vtp_hitCallback();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("LINK"==d.vtp_trackType){}else if("LINK_BY_POST"==d.vtp_trackType){}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else e("_trackPageview");
var U=function(){N("_gat")||d.vtp_gtmOnFailure()};if(d.vtp_doubleClick)b||(b=!0,M(F("https","http","://stats.g.doubleclick.net/dc.js",r),U,d.vtp_gtmOnFailure));else if(!a){var K=d.vtp_useDebugVersion?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";a=!0;M(F("https://ssl","http://www",K,r),U,d.vtp_gtmOnFailure)}};Z.__ga=c;Z.__ga.b="ga";Z.__ga.g=!0;Z.__ga.priorityOverride=0}();

Z.a.cegg=["nonGoogleScripts"],function(){var a={};(function(b){Z.__cegg=b;Z.__cegg.b="cegg";Z.__cegg.g=!0;Z.__cegg.priorityOverride=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(u.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");M("//script.crazyegg.com"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else D(b.vtp_gtmOnFailure)}catch(g){D(b.vtp_gtmOnFailure)}})}();
Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:li()}function b(g,h){Sa(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:ni(l),D:mi(l)})})}function c(g,h){Sa(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:ni(l),D:mi(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ka(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:ni(li()),
D:mi(li())})}}catch(n){}}function e(){var g={source:null,state:N("history").state||null,url:ni(li()),D:mi(li())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;qi(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=N("self");if(!xi("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);yi("hl")}D(g.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=N("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){ae();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:th()},m=function(t){return function(q,r,v){var w="DATA_LAYER"==t?pi(v):k[r];w&&(l[q]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,M("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){try{u._bizo_data_partner_id=a.vtp_id,u._bizo_data_partner_title=a.vtp_title,u._bizo_data_partner_domain=a.vtp_domain,u._bizo_data_partner_company=a.vtp_company,u._bizo_data_partner_location=a.vtp_location,u._bizo_data_partner_employee_range=a.vtp_employeeRange,u._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,u._bizo_data_partner_email=a.vtp_email,M(F("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){D(a.vtp_gtmOnFailure)}})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Mi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){D(a.vtp_gtmOnFailure)})}();

Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Na(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Ci(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.zc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Za(h),k,e)()}else ji(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();





Z.a.lcl=[],function(){function a(){var c=N("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=$a(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=hg("lcl",k?"nv.mwt":"mwt",0),m;m=k?hg("lcl","nv.ids",[]):hg("lcl","ids",[]);if(m.length){var n=dg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=N((Ai(h,"target")||"_self").substring(1)),t=!0;if(qi(n,zf(function(){t&&p&&(p.location.href=Ai(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else qi(n,function(){},l||2E3);return!0}}};Sa(c,"click",e,!1);Sa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Ai(d,"href"),h=g.indexOf("#"),k=Ai(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=ni(g),m=ni(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};gg("lcl","mwt",k,0);e||gg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};gg("lcl","ids",l,[]);e||gg("lcl","nv.ids",l,[]);xi("lcl")||(a(),yi("lcl"));D(c.vtp_gtmOnSuccess)})}();

var pk={};pk.macro=function(a){if(ag.kc.hasOwnProperty(a))return ag.kc[a]},pk.onHtmlSuccess=ag.Ed(!0),pk.onHtmlFailure=ag.Ed(!1);pk.dataLayer=vd;pk.callback=function(a){Oc.hasOwnProperty(a)&&ka(Oc[a])&&Oc[a]();delete Oc[a]};pk.jf=function(){Fc[Ec.i]=pk;Ca(Pc,Z.a);$b=$b||ag;ac=Kd};
pk.Xf=function(){Wg.gtm_3pds=!0;Fc=u.google_tag_manager=u.google_tag_manager||{};if(Fc[Ec.i]){var a=Fc.zones;a&&a.unregisterChild(Ec.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Sb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Vb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Ub.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Tb.push(p)}Yb=Z;Zb=Fi;pk.jf();Ef();Nd=!1;Od=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Qd();else{Sa(C,"DOMContentLoaded",Qd);Sa(C,"readystatechange",Qd);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(y){}q&&Rd()}Sa(u,"load",Qd)}sf=!1;"complete"===C.readyState?uf():
Sa(u,"load",uf);a:{if(!kd)break a;u.setInterval(ld,864E5);}
Lc=(new Date).getTime();}};(0,pk.Xf)();

})()
