(()=>{var C=class{constructor(t,e,n,i,s){this.taskId=t,this.titleValue=e,this.DeadlieValue=n,this.imageValue=i,this.DescriptionValue=s}};var o=class{#t=new Array;constructor(){this.#t[0]="media/img/Rectangle 15.png",this.#t[1]="media/img/Rectangle 16.png",this.#t[2]="media/img/Rectangle 17.png",this.#t[3]="media/img/Rectangle 18.png",this.#t[4]="media/img/Rectangle 19.png",this.#t[5]="media/img/Rectangle 20.png"}selectImage(t){return this.#t[t]}getImage(t){return t==null?this.#t[defaultImg]:this.#t[t]}};var k=class{#t;#e;#p="../media/img/Rectangle 15.png";#i={};#s={};#n={};#a={};#r={};#d={};#l={};#o;#m=0;img=new o;constructor(t,e){this.#o=e,this.#t=t}#u(t){t.addEventListener("click",e=>{e.preventDefault();let n=this.#i.input.value,i=this.#s.input.value,s=this.img.getImage(this.#m),a=this.#a.input.value;if(n.length>50)return;let l=(this.#o.getTask().length||0)+1,r=new C(l,n,i,s,a);this.#o.addTask(r),this.#h()})}#h(){this.#i.input.value="",this.#s.input.value="",this.#a.input.value=""}#g(t){t.addEventListener("click",e=>{e.preventDefault(),window.location.href="index.html"})}#c(t,e){t.addEventListener("click",n=>{n.preventDefault();var i=this.img.selectImage(e);document.getElementById("fotoGran").src=i,this.#m=e,console.log(i),this.update()})}update(){this.render}render(){let t=document.createElement("div");t.setAttribute("class","fotoGran"),this.#t.appendChild(t);let e=document.createElement("img");e.setAttribute("id","fotoGran"),e.src=this.img.selectImage(this.#m),t.appendChild(e);let n=document.createElement("div");n.setAttribute("class","fotos"),this.#t.appendChild(n);let i=document.createElement("picture");n.appendChild(i);let s=document.createElement("input");s.setAttribute("type","image"),s.setAttribute("src","media/img/Rectangle 15.png"),s.setAttribute("alt","0"),s.setAttribute("id","0"),this.#c(s,s.id),i.appendChild(s);let a=document.createElement("input");a.setAttribute("type","image"),a.setAttribute("src","media/img/Rectangle 16.png"),a.setAttribute("alt","1"),a.setAttribute("id","1"),this.#c(a,a.id),i.appendChild(a);let l=document.createElement("input");l.setAttribute("type","image"),l.setAttribute("src","media/img/Rectangle 17.png"),l.setAttribute("alt","2"),l.setAttribute("id","2"),this.#c(l,l.id),i.appendChild(l);let r=document.createElement("input");r.setAttribute("type","image"),r.setAttribute("src","media/img/Rectangle 18.png"),r.setAttribute("alt","3"),r.setAttribute("id","3"),this.#c(r,r.id),i.appendChild(r);let d=document.createElement("input");d.setAttribute("type","image"),d.setAttribute("src","media/img/Rectangle 19.png"),d.setAttribute("alt","4"),d.setAttribute("id","4"),this.#c(d,d.id),i.appendChild(d);let c=document.createElement("input");c.setAttribute("type","image"),c.setAttribute("src","media/img/Rectangle 20.png"),c.setAttribute("alt","5"),c.setAttribute("id","5"),this.#c(c,c.id),i.appendChild(c),this.#e=document.createElement("form"),this.#e.setAttribute("id","form"),this.#t.appendChild(this.#e);let h=document.createElement("div");h.setAttribute("class","title"),this.#e.appendChild(h),this.#i.label=document.createElement("label");let f=document.createElement("span");f.innerHTML="Title",this.#i.label.appendChild(f),h.appendChild(this.#i.label),this.#i.input=document.createElement("input"),this.#i.input.setAttribute("id","title"),this.#i.input.setAttribute("type","text"),this.#i.label.appendChild(this.#i.input);let g=document.createElement("div");g.setAttribute("class","deadline"),this.#e.appendChild(g),this.#s.label=document.createElement("label");let y=document.createElement("span");y.innerHTML="Deadline",this.#s.label.appendChild(y),g.appendChild(this.#s.label),this.#s.input=document.createElement("input"),this.#s.input.setAttribute("id","date"),this.#s.input.setAttribute("type","date"),this.#s.label.appendChild(this.#s.input);let m=document.createElement("div");m.setAttribute("class","category"),this.#e.appendChild(m),this.#n.label=document.createElement("label"),this.#n.label.setAttribute("for","category");let S=document.createElement("span");S.innerHTML="Category",this.#n.label.appendChild(S),m.appendChild(this.#n.label),this.#n.select=document.createElement("select"),this.#n.select.setAttribute("id","category"),this.#n.select.setAttribute("name","category"),m.appendChild(this.#n.select);let I=document.createElement("option"),T=document.createElement("span");T.innerHTML="la1",I.appendChild(T),this.#n.select.appendChild(I);let L=document.createElement("option"),w=document.createElement("span");w.innerHTML="la2",L.appendChild(w),this.#n.select.appendChild(L);let u=document.createElement("div");u.setAttribute("class","description"),this.#e.appendChild(u),this.#a.label=document.createElement("label"),this.#a.label.setAttribute("for","description");let R=document.createElement("span");R.innerHTML="Description",this.#a.label.appendChild(R),u.appendChild(this.#a.label),this.#a.input=document.createElement("input"),this.#a.input.setAttribute("id","text"),this.#a.input.setAttribute("type","text"),u.appendChild(this.#a.input);let b=document.createElement("div");b.setAttribute("class","checkbox1"),this.#e.appendChild(b),this.#l.label=document.createElement("label");let x=document.createElement("span");this.#l.input=document.createElement("input"),this.#l.input.setAttribute("id","checkbox1"),this.#l.input.setAttribute("type","checkbox"),this.#l.label.appendChild(this.#l.input),x.innerHTML="Completed",this.#l.label.appendChild(x),b.appendChild(this.#l.label);let A=document.createElement("div");A.setAttribute("class","submit-cancel"),this.#e.appendChild(A),this.#d=document.createElement("input"),this.#d.setAttribute("id","submit-cancel"),this.#d.setAttribute("type","submit"),this.#d.setAttribute("value","Cancel"),this.#g(this.#d),A.appendChild(this.#d);let E=document.createElement("div");E.setAttribute("class","submit-accept"),this.#r=document.createElement("input"),this.#r.setAttribute("id","submit-accept"),this.#r.setAttribute("type","submit"),this.#r.setAttribute("value","Accept"),this.#u(this.#r),E.appendChild(this.#r),this.#e.appendChild(E)}};var v=class{#t={};#e=[];constructor(){var t=JSON.parse(localStorage.getItem("task"));t==null&&localStorage.setItem("task",JSON.stringify(this.#t)),this.#t=JSON.parse(localStorage.getItem("task")),console.log("constructor"),console.log(this.#t)}addTask(t){this.#t[t.taskId]=t,localStorage.setItem("task",JSON.stringify(this.#t)),this.#p(),console.log(this.#t)}removeTask(t){delete this.#t[t],localStorage.setItem("task",JSON.stringify(this.#t)),console.log("removed"),this.#p()}getTask(){return this.#t=JSON.parse(localStorage.getItem("task")),Object.keys(this.#t).map(t=>this.#t[t])}addObserver(t){this.#e.push(t)}#p(){this.#e.forEach(t=>t.update())}};document.addEventListener("DOMContentLoaded",()=>{let p=new v,t=new o;new k(document.getElementById("container"),p).render()});})();
//# sourceMappingURL=todoForm.js.map
