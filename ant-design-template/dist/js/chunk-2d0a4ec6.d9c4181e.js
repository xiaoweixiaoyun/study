(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4ec6"],{"0907":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"content"},u=Object(n["l"])('<div class="jieshao"><p class="title"><i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i> 权限控制指令 </p><p class="text"> 自定义组件就是实现Vue提供的钩子函数，在Vue 3中钩子函数的生命周期和组件的生命周期类似： <br> created: 元素创建后，但是属性和事件还没有生效时调用。 <br> beforeMount(bind): 仅调用一次，当指令第一次绑定元素的时候。 <br> mounted(inserted): 元素被插入父元素时调用。 <br> beforeUpdate(updated): 在元素自己更新之前调用。 <br> updated(componentUpdated): 元素或者子元素更新之后调用。 <br> beforeUnmount: 元素卸载前调用。 <br> unmounted(unbind): 当指令卸载后调用，仅调用一次。 <br><br> 登录之后获取权限并存入：localStorage.setItem(&#39;PERMISSIONS&#39;, [&#39;user:view&#39;, &#39;role:update&#39;, &#39;dept:add&#39;, &#39;role:add&#39;]); <br> 使用方法：v-permission=&quot;[&#39;user:editor&#39;,&#39;user:insert&#39;]&quot; </p></div><br>',2),b=Object(n["m"])(" editor "),c=Object(n["m"])(" update "),d=Object(n["m"])(" insert "),i=Object(n["m"])(" delete ");function s(e,t,r,s,o,p){var l=Object(n["N"])("a-button"),j=Object(n["O"])("permission");return Object(n["F"])(),Object(n["j"])("div",a,[u,Object(n["Y"])(Object(n["n"])(l,{type:"primary",style:{"margin-left":"10px"}},{default:Object(n["X"])((function(){return[b]})),_:1},512),[[j,["user:editor"]]]),Object(n["Y"])(Object(n["n"])(l,{type:"primary",style:{"margin-left":"10px"}},{default:Object(n["X"])((function(){return[c]})),_:1},512),[[j,["user:update"]]]),Object(n["Y"])(Object(n["n"])(l,{type:"primary",style:{"margin-left":"10px"}},{default:Object(n["X"])((function(){return[d]})),_:1},512),[[j,["user:insert"]]]),Object(n["Y"])(Object(n["n"])(l,{type:"primary",style:{"margin-left":"10px"}},{default:Object(n["X"])((function(){return[i]})),_:1},512),[[j,["user:delete"]]])])}var o={name:"Index"};o.render=s;t["default"]=o}}]);
//# sourceMappingURL=chunk-2d0a4ec6.d9c4181e.js.map