!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";function r(e,t,r,n){if(loris.hiddenHeaders.indexOf(e)>-1)return null;var a,l={};return n.forEach(function(e,t){l[e]=r[t]},this),"Topic"===e?(a=loris.BaseURL+"/help_editor/edit_help_content/?helpID="+l.HelpID+"&parentID="+l.ParentID,React.createElement("td",null,React.createElement("a",{href:a},t))):"Parent Topic"===e?(a=loris.BaseURL+"/help_editor/edit_help_content/?helpID="+l.ParentID+"&parentID="+l.ParentTopicID,React.createElement("td",null,React.createElement("a",{href:a},t))):React.createElement("td",null,t)}Object.defineProperty(t,"__esModule",{value:!0}),window.formatColumn=r,t.default=r}]);
//# sourceMappingURL=columnFormatter.js.map