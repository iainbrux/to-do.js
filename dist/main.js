(()=>{"use strict";class e{constructor(e,t,a){this.name=e,this.due=t,this.status=a}set taskName(e){return this.name=e}get taskName(){return this.name}set taskDate(e){return this.due=e}get taskDate(){return this.due}set taskStatus(e){return this.status=e}get taskStatus(){return this.status}checkStatus(){console.log(`${this.name} is due on ${this.due}.`)}}let t=document.querySelector("#task"),a=document.querySelector("#due-date");function c(){document.querySelectorAll(".task").forEach((e=>{let c=e.querySelector(".description").innerText,n=e.querySelector(".due").innerText;e.querySelector(".edit").addEventListener("click",(()=>{e.remove(),t.value=c,a.value=n}))}))}document.querySelector(".submit").addEventListener("click",(()=>{""===t.value||""===a.value?alert("Please complete all input fields."):function(){const t=new e;let a=document.querySelector("#task"),n=document.querySelector("#due-date");t.taskName=a.value,t.taskDate=n.value,t.status=null,[].push(t),function(){let e=document.querySelector(".tasks-container"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),o=document.createElement("input");o.type="checkbox",o.name="status",o.id="status",o.addEventListener("click",(function(){let e=Object.keys(localStorage),t=[];e.forEach((e=>{t.push(JSON.parse(localStorage.getItem(e)))})),t.forEach((e=>{let a=e.name,c=t.find((e=>e.name===a)),n=o.checked;c.status=n;let s=JSON.stringify(e);localStorage.setItem(a,s)}))})),a.classList.add("task"),n.classList.add("description"),s.classList.add("due"),l.classList.add("btns"),r.classList.add("delete"),r.innerText="Delete",r.addEventListener("click",(()=>{localStorage.removeItem(n.innerText),a.remove()})),d.classList.add("edit"),d.innerText="Edit",d.addEventListener("click",(()=>c())),l.append(d,r),n.innerText=t.taskName,s.innerText=t.taskDate,a.append(o,n,s,l),e.append(a)}(),t.checkStatus();let s=JSON.stringify(t);localStorage.setItem(a.value,s),a.value="",n.value=""}()})),document.querySelectorAll(".task").forEach((e=>{let t=e.querySelector(".description").innerText;e.querySelector(".delete").addEventListener("click",(()=>{localStorage.removeItem(t),e.remove()}))})),document.querySelector("#clear").addEventListener("click",(()=>{t.value="",a.value=""})),c(),function(){let e=document.querySelector(".to-do-add");document.querySelector(".new-task-btn").addEventListener("click",(()=>e.style.display="flex"))}(),function(){let e=document.querySelector(".to-do-add");document.querySelector(".exit").addEventListener("click",(()=>e.style.display="none"))}(),document.querySelectorAll("#status").forEach((e=>{e.addEventListener("click",(function(){let t=Object.keys(localStorage),a=[];t.forEach((e=>{a.push(JSON.parse(localStorage.getItem(e)))})),a.forEach((t=>{let c=t.name,n=a.find((e=>e.name===c)),s=e.checked;n.status=s;let l=JSON.stringify(t);localStorage.setItem(c,l)}))}))})),localStorage.length>0&&function(){let e=Object.keys(localStorage),t=[];e.forEach((e=>{t.push(JSON.parse(localStorage.getItem(e)))})),t.forEach((e=>{!function(){let t=document.querySelector(".tasks-container"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),o=document.createElement("input");o.type="checkbox",o.name="status",o.id="status",o.addEventListener("click",(function(){let e=Object.keys(localStorage),t=[];e.forEach((e=>{t.push(JSON.parse(localStorage.getItem(e)))})),t.forEach((e=>{let a=e.name,c=t.find((e=>e.name===a)),n=o.checked;c.status=n;let s=JSON.stringify(e);localStorage.setItem(a,s)}))})),a.classList.add("task"),n.classList.add("description"),s.classList.add("due"),l.classList.add("btns"),r.classList.add("delete"),r.innerText="Delete",r.addEventListener("click",(()=>{localStorage.removeItem(n.innerText),a.remove()})),d.classList.add("edit"),d.innerText="Edit",d.addEventListener("click",(()=>c())),l.append(d,r),n.innerText=e.name,s.innerText=e.due,o.checked=e.status,a.append(o,n,s,l),t.append(a)}()}))}()})();