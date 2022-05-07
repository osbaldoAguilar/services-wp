!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.hooks},function(e,t){e.exports=window.wp.keycodes},function(e,t){e.exports=window.wp.data},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=s.apply(null,o);i&&e.push(i)}else if("object"===r)for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o)}()},,function(e,t,n){e.exports=function(e,t){var n,o,s=0;function r(){var r,i,a=n,l=arguments.length;e:for(;a;){if(a.args.length===arguments.length){for(i=0;i<l;i++)if(a.args[i]!==arguments[i]){a=a.next;continue e}return a!==n&&(a===o&&(o=a.prev),a.prev.next=a.next,a.next&&(a.next.prev=a.prev),a.next=n,a.prev=null,n.prev=a,n=a),a.val}a=a.next}for(r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return a={args:r,val:e.apply(null,r)},n?(n.prev=a,a.next=n):o=a,s===t.maxSize?(o=o.prev).next=null:s++,n=a,a.val}return t=t||{},r.clear=function(){n=null,o=null,s=0},r}},function(e,t,n){var o;!function(){"use strict";var s={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function r(e){return a(c(e),arguments)}function i(e,t){return r.apply(null,[e].concat(t||[]))}function a(e,t){var n,o,i,a,l,c,u,p,d,h=1,g=e.length,f="";for(o=0;o<g;o++)if("string"==typeof e[o])f+=e[o];else if("object"==typeof e[o]){if((a=e[o]).keys)for(n=t[h],i=0;i<a.keys.length;i++){if(null==n)throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"',a.keys[i],a.keys[i-1]));n=n[a.keys[i]]}else n=a.param_no?t[a.param_no]:t[h++];if(s.not_type.test(a.type)&&s.not_primitive.test(a.type)&&n instanceof Function&&(n=n()),s.numeric_arg.test(a.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(r("[sprintf] expecting number but found %T",n));switch(s.number.test(a.type)&&(p=n>=0),a.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,a.width?parseInt(a.width):0);break;case"e":n=a.precision?parseFloat(n).toExponential(a.precision):parseFloat(n).toExponential();break;case"f":n=a.precision?parseFloat(n).toFixed(a.precision):parseFloat(n);break;case"g":n=a.precision?String(Number(n.toPrecision(a.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=a.precision?n.substring(0,a.precision):n;break;case"t":n=String(!!n),n=a.precision?n.substring(0,a.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=a.precision?n.substring(0,a.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=a.precision?n.substring(0,a.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}s.json.test(a.type)?f+=n:(!s.number.test(a.type)||p&&!a.sign?d="":(d=p?"+":"-",n=n.toString().replace(s.sign,"")),c=a.pad_char?"0"===a.pad_char?"0":a.pad_char.charAt(1):" ",u=a.width-(d+n).length,l=a.width&&u>0?c.repeat(u):"",f+=a.align?d+n+l:"0"===c?d+l+n:l+d+n)}return f}var l=Object.create(null);function c(e){if(l[e])return l[e];for(var t,n=e,o=[],r=0;n;){if(null!==(t=s.text.exec(n)))o.push(t[0]);else if(null!==(t=s.modulo.exec(n)))o.push("%");else{if(null===(t=s.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){r|=1;var i=[],a=t[2],c=[];if(null===(c=s.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(i.push(c[1]);""!==(a=a.substring(c[0].length));)if(null!==(c=s.key_access.exec(a)))i.push(c[1]);else{if(null===(c=s.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");i.push(c[1])}t[2]=i}else r|=2;if(3===r)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");o.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return l[e]=o}t.sprintf=r,t.vsprintf=i,"undefined"!=typeof window&&(window.sprintf=r,window.vsprintf=i,void 0===(o=function(){return{sprintf:r,vsprintf:i}}.call(t,n,t,e))||(e.exports=o))}()},function(e,t){e.exports=window.wp.htmlEntities},function(e,t){e.exports=window.wp.compose},function(e,t){e.exports=window.wp.apiFetch},function(e,t){e.exports=window.wp.dom},function(e,t){e.exports=window.wp.blockEditor},,,function(e,t,n){"use strict";n.r(t);var o=n(8),s=n.n(o),r=n(9),i=n.n(r);const a=s()(console.error);function l(e,...t){try{return i.a.sprintf(e,...t)}catch(t){return a("sprintf error: \n\n"+t.toString()),e}}var c,u,p,d;c={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},u=["(","?"],p={")":["("],":":["?","?:"]},d=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var h={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,n){if(e)throw t;return n}};var g={contextDelimiter:"",onMissingKey:null};function f(e,t){var n;for(n in this.data=e,this.pluralForms={},this.options={},g)this.options[n]=void 0!==t&&n in t?t[n]:g[n]}f.prototype.getPluralForm=function(e,t){var n,o,s,r,i=this.pluralForms[e];return i||("function"!=typeof(s=(n=this.data[e][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(o=function(e){var t,n,o;for(t=e.split(";"),n=0;n<t.length;n++)if(0===(o=t[n].trim()).indexOf("plural="))return o.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),r=function(e){var t=function(e){for(var t,n,o,s,r=[],i=[];t=e.match(d);){for(n=t[0],(o=e.substr(0,t.index).trim())&&r.push(o);s=i.pop();){if(p[n]){if(p[n][0]===s){n=p[n][1]||n;break}}else if(u.indexOf(s)>=0||c[s]<c[n]){i.push(s);break}r.push(s)}p[n]||i.push(n),e=e.substr(t.index+n.length)}return(e=e.trim())&&r.push(e),r.concat(i.reverse())}(e);return function(e){return function(e,t){var n,o,s,r,i,a,l=[];for(n=0;n<e.length;n++){if(i=e[n],r=h[i]){for(o=r.length,s=Array(o);o--;)s[o]=l.pop();try{a=r.apply(null,s)}catch(e){return e}}else a=t.hasOwnProperty(i)?t[i]:+i;l.push(a)}return l[0]}(t,e)}}(o),s=function(e){return+r({n:e})}),i=this.pluralForms[e]=s),i(t)},f.prototype.dcnpgettext=function(e,t,n,o,s){var r,i,a;return r=void 0===s?0:this.getPluralForm(e,s),i=n,t&&(i=t+this.options.contextDelimiter+n),(a=this.data[e][i])&&a[r]?a[r]:(this.options.onMissingKey&&this.options.onMissingKey(n,e),0===r?n:o)};const m={"":{plural_forms:e=>1===e?0:1}},b=/^i18n\.(n?gettext|has_translation)(_|$)/;var w=n(3);const y=((e,t,n)=>{const o=new f({}),s=new Set,r=()=>{s.forEach(e=>e())},i=(e,t="default")=>{o.data[t]={...m,...o.data[t],...e},o.data[t][""]={...m[""],...o.data[t][""]}},a=(e,t)=>{i(e,t),r()},l=(e="default",t,n,s,r)=>(o.data[e]||i(void 0,e),o.dcnpgettext(e,t,n,s,r)),c=(e="default")=>e,_x=(e,t,o)=>{let s=l(o,t,e);return n?(s=n.applyFilters("i18n.gettext_with_context",s,e,t,o),n.applyFilters("i18n.gettext_with_context_"+c(o),s,e,t,o)):s};if(n){const e=e=>{b.test(e)&&r()};n.addAction("hookAdded","core/i18n",e),n.addAction("hookRemoved","core/i18n",e)}return{getLocaleData:(e="default")=>o.data[e],setLocaleData:a,resetLocaleData:(e,t)=>{o.data={},o.pluralForms={},a(e,t)},subscribe:e=>(s.add(e),()=>s.delete(e)),__:(e,t)=>{let o=l(t,void 0,e);return n?(o=n.applyFilters("i18n.gettext",o,e,t),n.applyFilters("i18n.gettext_"+c(t),o,e,t)):o},_x:_x,_n:(e,t,o,s)=>{let r=l(s,void 0,e,t,o);return n?(r=n.applyFilters("i18n.ngettext",r,e,t,o,s),n.applyFilters("i18n.ngettext_"+c(s),r,e,t,o,s)):r},_nx:(e,t,o,s,r)=>{let i=l(r,s,e,t,o);return n?(i=n.applyFilters("i18n.ngettext_with_context",i,e,t,o,s,r),n.applyFilters("i18n.ngettext_with_context_"+c(r),i,e,t,o,s,r)):i},isRTL:()=>"rtl"===_x("ltr","text direction"),hasTranslation:(e,t,s)=>{var r,i;const a=t?t+""+e:e;let l=!(null===(r=o.data)||void 0===r||null===(i=r[null!=s?s:"default"])||void 0===i||!i[a]);return n&&(l=n.applyFilters("i18n.has_translation",l,e,t,s),l=n.applyFilters("i18n.has_translation_"+c(s),l,e,t,s)),l}}})(0,0,w.defaultHooks);y.getLocaleData.bind(y);const v=y.setLocaleData.bind(y),k=(y.resetLocaleData.bind(y),y.subscribe.bind(y),y.__.bind(y)),x=(y._x.bind(y),y._n.bind(y));y._nx.bind(y),y.isRTL.bind(y),y.hasTranslation.bind(y);var _=n(0),S=n(1),O=e=>{const{field:t,getValue:n,getNameFromAPI:o,onChange:s}=e,r=e=>e&&e.id?parseInt(e.id):0,i={id:0,name:"",...n(e)};return Object(_.createElement)(D,{field:t,apiSlug:t.post_type_rest_slug,value:i.id,displayValue:i.name,getValueFromAPI:r,getDisplayValueFromAPI:o,onChange:e=>{"string"==typeof e?(i.name=e,i.id=0):(i.name=o(e),i.id=r(e)),s(i)}})},j=n(6),C=n.n(j),P=n(10),E=n(4),I=n(11);function F(e="",t){if(!t||!Object.keys(t).length)return e;let n=e;const o=e.indexOf("?");return-1!==o&&(t=Object.assign(function(e){return(function(e){let t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce((e,t)=>{const[n,o=""]=t.split("=").filter(Boolean).map(decodeURIComponent);return n&&function(e,t,n){const o=t.length,s=o-1;for(let r=0;r<o;r++){let o=t[r];!o&&Array.isArray(e)&&(o=e.length.toString());const i=!isNaN(Number(t[r+1]));e[o]=r===s?n:e[o]||(i?[]:{}),Array.isArray(e[o])&&!i&&(e[o]={...e[o]}),e=e[o]}}(e,n.replace(/\]/g,"").split("["),o),e},{})}(e),t),n=n.substr(0,o)),n+"?"+function(e){let t="";const n=Object.entries(e);let o;for(;o=n.shift();){let[e,s]=o;if(Array.isArray(s)||s&&s.constructor===Object){const t=Object.entries(s).reverse();for(const[o,s]of t)n.unshift([`${e}[${o}]`,s])}else void 0!==s&&(null===s&&(s=""),t+="&"+[e,s].map(encodeURIComponent).join("="))}return t.substr(1)}(t)}var R=n(12),B=n.n(R);const N=e=>e.stopPropagation();class A extends _.Component{constructor({autocompleteRef:e}){super(...arguments),this.onBlur=this.onBlur.bind(this),this.onFocus=this.onFocus.bind(this),this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.autocompleteRef=e||Object(_.createRef)(),this.inputRef=Object(_.createRef)(),this.updateSuggestions=this.updateSuggestions.bind(this),this.setInputValidity=this.setInputValidity.bind(this),this.suggestionNodes=[],this.state={loading:!1,results:[],showSuggestions:!1,selectedSuggestion:null}}componentDidUpdate(e,t){const{results:n,showSuggestions:o}=this.state,{prevResults:s,prevShowSuggestions:r}=t;n===s&&o===r||o&&(n.length?this.setInputValidity(!0):this.setInputValidity(!1))}componentWillUnmount(){delete this.suggestionsRequest}bindSuggestionNode(e){return t=>{this.suggestionNodes[e]=t}}updateSuggestions(e){this.setState({loading:!0});const t=B()({path:F("/wp/v2/"+this.props.apiSlug,{search:e,per_page:5})});t.then(e=>{this.suggestionsRequest===t&&(this.setState({results:e,showSuggestions:!0,loading:!1}),e.length?(this.props.debouncedSpeak(
/* translators: %d: the number of results */
l(x("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",e.length,"genesis-custom-blocks-pro"),e.length),"assertive"),null===this.state.selectedSuggestion&&""!==this.getInputValue()&&this.setState({selectedSuggestion:0})):this.props.debouncedSpeak(k("No results.","genesis-custom-blocks-pro"),"assertive"))}).catch(()=>{this.suggestionsRequest===t&&this.setState({loading:!1})}),this.suggestionsRequest=t}setInputValidity(e){this.inputRef.current&&this.inputRef.current.setCustomValidity&&(e?this.inputRef.current.setCustomValidity(""):(
/* translators: %s: the control name */
this.inputRef.current.setCustomValidity(l(k("Invalid %s","genesis-custom-blocks-pro"),this.props.field.control)),this.inputRef.current.reportValidity()),this.inputRef.current.className=C()("gcb-fetch__input",{"text-control__error":!e}))}onBlur(e){if(e.relatedTarget&&!e.relatedTarget.classList.contains("components-popover__content")&&!e.relatedTarget.classList.contains("gcb-fetch-input__suggestion")){if(this.setState({showSuggestions:!1}),""===this.getInputValue())return;!1===this.inputRef.current.checkValidity()?this.handlePopoverButton(""):this.handlePopoverButton(this.state.results[this.state.selectedSuggestion])}}onFocus(){this.updateSuggestions(this.getInputValue())}onChange(e){const t=e.target.value;this.props.onChange(t),this.updateSuggestions(t)}onKeyDown(e){const{showSuggestions:t,selectedSuggestion:n,results:o,loading:s}=this.state,r=this.getInputValue();if(!t||!o.length||s){switch(e.keyCode){case E.UP:0!==e.target.selectionStart&&(e.stopPropagation(),e.preventDefault(),e.target.setSelectionRange(0,0));break;case E.DOWN:r.length!==e.target.selectionStart&&(e.stopPropagation(),e.preventDefault(),e.target.setSelectionRange(r.length,r.length))}return}const i=this.state.results[this.state.selectedSuggestion];switch(e.keyCode){case E.UP:{e.stopPropagation(),e.preventDefault();const t=n?n-1:o.length-1;this.setState({selectedSuggestion:t});break}case E.DOWN:{e.stopPropagation(),e.preventDefault();const t=null===n||n===o.length-1?0:n+1;this.setState({selectedSuggestion:t});break}case E.ENTER:null!==this.state.selectedSuggestion&&(e.stopPropagation(),this.handlePopoverButton(i),this.inputRef.current.blur())}}handlePopoverButton(e){this.setState({selectedSuggestion:null,showSuggestions:!1}),this.props.onChange(e)}getInputValue(){return this.props.hasOwnProperty("displayValue")?this.props.displayValue:this.props.value}render(){const{autoFocus:e=!1,className:t,getDisplayValueFromAPI:n,getValueFromAPI:o,field:s,instanceId:r}=this.props,{showSuggestions:i,results:a,selectedSuggestion:l,loading:c}=this.state,u=i&&!!a.length,p=this.getInputValue(),d=n||o;return Object(_.createElement)(S.BaseControl,{label:s.label,id:"fetch-input-"+r,className:C()("gcb-fetch-input",t),help:s.help},Object(_.createElement)("input",{autoFocus:e,className:"gcb-fetch__input",type:"text","aria-label":s.label,value:p,onBlur:this.onBlur,onFocus:this.onFocus,onChange:this.onChange,onInput:N,onKeyDown:this.onKeyDown,role:"combobox","aria-expanded":i,"aria-autocomplete":"list","aria-controls":"gcb-fetch-input-suggestions-"+r,"aria-owns":"gcb-fetch-input-suggestions-"+r,"aria-activedescendant":null!==l?`editor-url-input-suggestion-${r}-${l}`:void 0,ref:this.inputRef,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}),!!c&&Object(_.createElement)(S.Spinner,null),u&&Object(_.createElement)(S.Popover,{position:"bottom center",noArrow:!0,focusOnMount:!1,className:C()("gcb-fetch__popover",s.location)},Object(_.createElement)("div",{className:"gcb-fetch-input__suggestions",id:"gcb-fetch-input-suggestions-"+r,ref:this.autocompleteRef,role:"listbox"},a.map((e,t)=>{const n=d(e);return!!n&&Object(_.createElement)("button",{key:"gcb-fetch-suggestion-"+t,role:"option",tabIndex:"-1",id:`gcb-fetch-input-suggestion-${r}-${t}`,ref:this.bindSuggestionNode(t),className:C()("gcb-fetch-input__suggestion",{"is-selected":t===l}),onClick:()=>this.handlePopoverButton(e),"aria-selected":t===l},Object(P.decodeEntities)(n))}))))}}var D=Object(S.withSpokenMessages)(Object(I.withInstanceId)(A)),V=n(5);const T=e=>{let t="genesis-custom-blocks-control";return e.width&&(t+=" width-"+e.width),t};var L=({fields:e,parentBlockProps:t,parentBlock:n,rowIndex:o})=>H(e).map(e=>{if(e.location&&!e.location.includes("editor"))return null;const s=(e=>Object(w.applyFilters)("genesisCustomBlocks.controls",{})[e.control])(e);return!!s&&Object(_.createElement)("div",{className:T(e),key:`${e.name}-control-${o}`},Object(_.createElement)(s,{field:e,getValue:({field:e,parentBlockProps:t,rowIndex:n})=>{const o={...t.attributes};return e.parent&&o[e.parent]&&o[e.parent].rows?o[e.parent].rows[n][e.name]:o[e.name]},onChange:n=>{const{clientId:s,setAttributes:r}=t,i={...Object(V.select)("core/block-editor").getBlockAttributes(s)};if(void 0===o)i[e.name]=n,r(i);else{const s=i[e.parent],r=[{}],a=s&&s.rows?s.rows:r;a[o]||(a[o]={}),a[o][e.name]=n,i[e.parent]={rows:a},t.setAttributes(i)}},parentBlock:n,rowIndex:o,parentBlockProps:t}))}),M=n(13);class $ extends _.Component{constructor(){super(...arguments),this.getParent=this.getParent.bind(this),this.removeRow=this.removeRow.bind(this),this.move=this.move.bind(this),this.getRows=this.getRows.bind(this),this.repeaterRows=Object(_.createRef)(),this.state={activeRow:0},this.timeouts=[]}componentWillUnmount(){this.timeouts.forEach(e=>{clearTimeout(e)})}getParent(){const{subFields:e}=this.props;let t=null;for(const n in e)if(e.hasOwnProperty(n)){if(t&&t!==e[n].parent)return null;t=e[n].parent}return t}removeRow(e){return()=>{const{parentBlockProps:t}=this.props,n={...t.attributes},o=this.getParent(),s=n[o],r=this.getRows(s);if(!r)return;const i=r.slice();i.splice(e,1),n[o]={rows:i},t.setAttributes(n)}}move(e,t){const n=()=>{const n=Object(M.getScrollContainer)(this.repeaterRows.current),o=this.repeaterRows.current.querySelectorAll(".genesis-custom-blocks-repeater--row"),s=o[e],r=o[t],i=n.scrollTop+(r.offsetTop-s.offsetTop);r.classList.add("row-to"),s.classList.add("row-from"),this.timeouts.push(setTimeout(()=>{r.classList.remove("row-to"),s.classList.remove("row-from")},1e3)),n.scroll({top:i,behavior:"smooth"})};return()=>{const{parentBlockProps:o}=this.props,s={...o.attributes},r=this.getParent(),i=s[r],a=this.getRows(i).slice();[a[e],a[t]]=[a[t],a[e]],s[r]={rows:a},o.setAttributes(s),n()}}getRows(e){return e&&e.rows?e.rows:[{}]}render(){const{rows:e,field:t,subFields:n,parentBlockProps:o,parentBlock:s}=this.props;return Object(_.createElement)(_.Fragment,null,Object(_.createElement)("div",{className:"genesis-custom-blocks-repeater__rows",ref:this.repeaterRows},e.map((r,i)=>{const a=this.state.activeRow===parseInt(i)?"active":"";return Object(_.createElement)(S.BaseControl,{className:"genesis-custom-blocks-repeater--row "+a,key:"gcb-row-"+i},Object(_.createElement)("div",{className:"genesis-custom-blocks-repeater--row-delete"},Object(_.createElement)(S.Button,{icon:"no",key:i+"-menu",className:"button-delete",label:k("Delete","genesis-custom-blocks-pro"),onClick:this.removeRow(i),disabled:!!t.min&&e.length<=t.min,isSmall:!0})),Object(_.createElement)(L,{fields:n,parentBlockProps:o,parentBlock:s,rowIndex:i}),Object(_.createElement)("div",{className:"genesis-custom-blocks-repeater--row-actions"},Object(_.createElement)(S.Button,{icon:"arrow-up-alt2",key:i+"-move-up",className:"button-move-up",label:k("Move up","genesis-custom-blocks-pro"),onClick:this.move(i,i-1),isSmall:!0}),Object(_.createElement)(S.Button,{icon:"arrow-down-alt2",key:i+"-move-down",className:"button-move-down",label:k("Move down","genesis-custom-blocks-pro"),onClick:this.move(i,i+1),isSmall:!0})))})))}}var z=$;class K extends _.Component{constructor(e){super(e),this.initialize=this.initialize.bind(this),this.onSetup=this.onSetup.bind(this),this.focus=this.focus.bind(this)}componentDidMount(){const{baseURL:e,suffix:t}=window.wpEditorL10n.tinymce;window.tinymce.EditorManager.overrideDefaults({base_url:e,suffix:t}),"complete"===document.readyState?this.initialize():window.addEventListener("DOMContentLoaded",this.initialize)}componentWillUnmount(){window.addEventListener("DOMContentLoaded",this.initialize),wp.oldEditor.remove("editor-"+this.props.editorId)}componentDidUpdate(e){const{content:t,onChange:n}=this.props;e.content!==t&&n(t||"")}initialize(){const{editorId:e}=this.props,{settings:t}=window.wpEditorL10n.tinymce;wp.editor.getDefaultSettings=()=>({tinymce:{}}),wp.oldEditor.initialize("editor-"+e,{tinymce:{...t,inline:!0,convert_urls:!1,content_css:!1,fixed_toolbar_container:"#toolbar-"+e,setup:this.onSetup,toolbar1:"formatselect,bold,italic,bullist,numlist,outdent,indent,alignleft,aligncenter,alignright,link,unlink,wp_add_media,strikethrough",toolbar2:""}})}onSetup(e){const{content:t,onChange:n}=this.props;let o;this.editor=e,t&&e.on("loadContent",()=>e.setContent(t)),e.on("blur",()=>(o=e.selection.getBookmark(2,!0),n(e.getContent()),e.once("focus",()=>{o&&e.selection.moveToBookmark(o)}),!1)),e.on("mousedown touchstart",()=>{o=null}),e.on("change",()=>{n(e.getContent())}),e.on("keydown",e=>{const{altKey:t}=e;t&&e.keyCode===E.F10&&e.stopPropagation()}),e.addButton("wp_add_media",{tooltip:k("Insert Media","genesis-custom-blocks-pro"),icon:"dashicon dashicons-admin-media",cmd:"WP_Medialib"}),e.on("init",()=>{const e=this.editor.getBody();document.activeElement===e&&(e.blur(),this.editor.focus())})}focus(){this.editor&&this.editor.focus()}onToolbarKeyDown(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}render(){const{editorId:e}=this.props;return[Object(_.createElement)("div",{key:"toolbar",id:"toolbar-"+e,className:"classic-text__toolbar",onClick:this.focus,"data-placeholder":k("Classic text","genesis-custom-blocks-pro"),onKeyDown:this.onToolbarKeyDown}),Object(_.createElement)("div",{key:"editor",id:"editor-"+e,className:"classic-text__edit"})]}}var U=K,W=(n(2),n(14)),q={classic_text:e=>{const{field:t,getValue:n,onChange:o,rowIndex:s,parentBlockProps:{clientId:r}}=e,i="number"==typeof s?`gcb-${r}-${t.name}-rowIndex-${s}`:`gcb-${r}-${t.name}`,a=n(e),l=void 0!==a?a:t.default;return Object(_.createElement)(S.BaseControl,{label:t.label,id:"gcb-classic-text-"+r,className:"genesis-custom-blocks-classic-text-control",help:t.help},Object(_.createElement)(U,{content:l,onChange:o,editorId:i}))},rich_text:e=>{const{field:t,getValue:n,onChange:o}=e,s="gcb-rich-text-"+(t?t.name:"");return Object(_.createElement)(S.BaseControl,{label:t.label,id:s,className:"genesis-custom-blocks-rich-text-control",help:t.help},Object(_.createElement)(W.RichText,{id:s,"aria-label":t?t.label:"",key:"genesis-custom-blocks-"+t.name,placeholder:t.placeholder||"",keepPlaceholderOnFocus:!0,defaultValue:t.default,value:n(e),className:"input-control",multiline:!0,inlineToolbar:!0,onChange:o}))},repeater:e=>{const{field:t,instanceId:n,onChange:o,parentBlock:s,parentBlockProps:r}=e,{attributes:i,setAttributes:a}=r,l={...i},c=l[t.name],u=new Array(t.min?t.min:1).fill({"":""}),p=c&&c.hasOwnProperty("rows"),d=p?c.rows:u;return p||o({rows:u}),Object(_.createElement)(S.BaseControl,{className:"genesis-custom-blocks-repeater",label:t.label,id:"gcb-repeater-"+n,help:t.help},Object(_.createElement)(z,{rows:d,field:t,subFields:t.sub_fields||u,parentBlockProps:r,parentBlock:s}),Object(_.createElement)("div",{className:"genesis-custom-blocks-repeater--row-add"},Object(_.createElement)(S.Button,{key:t.name+"-repeater-insert",icon:"insert",label:k("Add new","genesis-custom-blocks-pro"),onClick:()=>{const e=d.concat({"":""});l[t.name]={rows:e},a(l)},disabled:!!t.max&&d.length>=t.max})))},post:e=>{const t={...e,getNameFromAPI:e=>e&&e.title&&e.title.rendered?e.title.rendered:""};return Object(_.createElement)(O,t)},taxonomy:e=>{const t={...e,getNameFromAPI:e=>e&&e.name?e.name:""};return Object(_.createElement)(O,t)},user:e=>{const{field:t,getValue:n,onChange:o}=e,s=e=>e&&e.id?e.id:0,r=e=>e&&e.name?e.name:"",i={id:0,userName:"",..."object"==typeof n(e)?n(e):{}};return Object(_.createElement)(D,{field:t,apiSlug:"users",value:i.id,displayValue:i.userName,getValueFromAPI:s,getDisplayValueFromAPI:r,onChange:e=>{"string"==typeof e?(i.userName=e,i.id=0):(i.userName=r(e),i.id=s(e)),o(i)}})}};const X=(e,t)=>e.order<t.order?-1:e.order>t.order?1:0;var H=e=>{const t=[];for(const n in e){if(""===n)continue;if(!e.hasOwnProperty(n))continue;const o=e[n];t.push({...o,name:n})}return t.sort(X),t};v({"":{}},"genesis-custom-blocks-pro"),Object(w.addFilter)("genesisCustomBlocks.controls","genesisCustomBlocksPro/addControls",e=>({...e,...q}))}]);