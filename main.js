(()=>{"use strict";class e{constructor(e,t){this.name=e,this.due=t}set taskName(e){return this.name=e}get taskName(){return this.name}set taskDate(e){return this.due=e}get taskDate(){return this.due}checkStatus(){console.log(`${this.name} is due on ${this.due}.`)}}let t=document.querySelector("#task"),n=document.querySelector("#due-date");function a(){document.querySelectorAll(".task").forEach((e=>{let t=e.querySelector(".description").innerText;e.querySelector(".delete").addEventListener("click",(()=>{localStorage.removeItem(t),e.remove()}))}))}function c(){document.querySelectorAll(".task").forEach((e=>{let a=e.querySelector(".description").innerText,c=e.querySelector(".due").innerText;e.querySelector(".edit").addEventListener("click",(()=>{e.remove(),t.value=a,n.value=c}))}))}document.querySelector(".submit").addEventListener("click",(()=>{""===t.value||""===n.value?alert("Please complete all input fields."):function(){const t=new e;let n=document.querySelector("#task"),d=document.querySelector("#due-date");t.taskName=n.value,t.taskDate=d.value,[].push(t),function(){let e=document.querySelector(".tasks-container"),n=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),u=document.createElement("input");u.type="checkbox",u.name="status",u.id="status",n.classList.add("task"),d.classList.add("description"),s.classList.add("due"),l.classList.add("btns"),r.classList.add("delete"),r.innerText="Delete",r.addEventListener("click",(()=>a())),i.classList.add("edit"),i.innerText="Edit",i.addEventListener("click",(()=>c())),l.append(i,r),d.innerText=t.taskName,s.innerText=t.taskDate,n.append(u,d,s,l),e.append(n)}(),t.checkStatus();let s=JSON.stringify(t);localStorage.setItem(n.value,s),n.value="",d.value=""}()})),a(),document.querySelector("#clear").addEventListener("click",(()=>{t.value="",n.value=""})),c(),localStorage.length>0&&function(){let e=Object.keys(localStorage),t=[];e.forEach((e=>{t.push(JSON.parse(localStorage.getItem(e)))})),t.forEach((e=>{!function(){let t=document.querySelector(".tasks-container"),n=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),u=document.createElement("input");u.type="checkbox",u.name="status",u.id="status",n.classList.add("task"),d.classList.add("description"),s.classList.add("due"),l.classList.add("btns"),r.classList.add("delete"),r.innerText="Delete",r.addEventListener("click",(()=>a())),i.classList.add("edit"),i.innerText="Edit",i.addEventListener("click",(()=>c())),l.append(i,r),d.innerText=e.name,s.innerText=e.due,n.append(u,d,s,l),t.append(n)}()}))}()})();