(()=>{var k=class{#e;#i;#t;constructor(e,t){this.#e=e,this.#t=t,this.#t.addObserver(this)}#n(e){let t=e.taskId,i=e.titleValue,a=e.DeadlieValue,n=e.imageValue,l=e.DescriptionValue;console.log("entramos");let r=document.createElement("div");r.setAttribute("class","taskTotal");let s=document.createElement("div");s.setAttribute("class","checkbox1"),r.appendChild(s);let d=document.createElement("input");d.setAttribute("id","checkbox1"),d.setAttribute("type","checkbox"),s.appendChild(d);let o=document.createElement("div");o.setAttribute("class","parte2"),r.appendChild(o);let c=document.createElement("img");c.setAttribute("src",n),c.setAttribute("alt","1"),c.setAttribute("id","fotoTask"),o.appendChild(c);let u=document.createElement("h1");u.setAttribute("id","titolTask"),u.innerHTML=`${i}`,o.appendChild(u);let m=document.createElement("h3");m.setAttribute("id","dateTask"),m.innerHTML=`${a}`,o.appendChild(m);let p=document.createElement("p");p.setAttribute("id","descriptionTask"),p.innerHTML=`${l}`,o.appendChild(p);let b=document.createElement("div");return b.setAttribute("class","saltoP"),r.appendChild(b),r}#l(e){e.addEventListener("click",t=>{t.preventDefault(),checkboxInput.checked=!0})}#d(e){e.addEventListener("click",t=>{t.preventDefault(),checkboxInput.checked&&this.#r(taskId)})}#s(e){e.addEventListener("click",t=>{t.preventDefault(),checkboxInput.checked=!0})}#a(e){let t=this.#n(e);this.#i.appendChild(t)}#r(e){this.#t.removeTask(e)}update(){this.render()}render(){let e=document.createElement("div");e.setAttribute("class","parteSuperior1");let t=document.createElement("src");t.setAttribute("src","'media/img/list-status 1.png"),t.setAttribute("id","statusImage"),t.setAttribute("width","500"),t.setAttribute("height","600"),e.appendChild(t);let i=document.createElement("h1");i.setAttribute("id","Duties"),i.innerHTML="Duties",e.appendChild(i),this.#e.appendChild(e);let a=document.createElement("div");a.setAttribute("class","parteSuperior2");let n=document.createElement("button");n.setAttribute("id","buttonSelectAll"),n.innerHTML="Select all",this.#s(n),a.appendChild(n);let l=document.createElement("button");l.setAttribute("id","buttonTick"),l.innerHTML="\u2713",this.#l(l),a.appendChild(l);let r=document.createElement("button");r.setAttribute("id","buttonDelete"),r.innerHTML="Delete",this.#d(r),a.appendChild(r),this.#e.appendChild(a),this.#i!==void 0&&this.#e.removeChild(this.#i),this.#i=document.createElement("div"),this.#i.setAttribute("class","task-list"),this.#t.getTask().forEach(s=>this.#a(s)),this.#e.appendChild(this.#i)}};var y=class{constructor(e,t,i){this.categoryId=e,this.nameValue=t,this.colorValue=i}};var L=class{#e;#i;#t;#n="media/img/image 2.png";#l="media/img/list-status 1.png";#d="media/img/check 1.png";#s="../media/img/Rectangle 15.png";#a;constructor(e,t){this.#e=e,this.#a=t}#r(e){e.addEventListener("click",t=>{t.preventDefault();let i=document.getElementById("catName").value,a=document.getElementById("color").value,n=(this.#a.getCategory().length||0)+1,l=new y(n,i,a);this.#a.addCategory(l),document.getElementById("catName").value="",this.render2(),console.log(l)})}#o(e,t){e.addEventListener("click",i=>{i.preventDefault(),console.log(t),this.#a.removeCategory(t),console.log(this.#a.getCategory()),this.render2()})}update(){this.render()}render(){let e=document.createElement("div");e.setAttribute("class","div-1"),this.#e.appendChild(e);let t=document.createElement("img");t.setAttribute("alt","logo"),t.setAttribute("src",this.#n),e.appendChild(t);let i=document.createElement("a");i.setAttribute("class","boton-addTodo"),i.setAttribute("href","todoForm2.html");let a=document.createTextNode("Add TODO");i.appendChild(a),e.appendChild(i);let n=document.createElement("div");e.appendChild(n);let l=document.createElement("h3");l.innerHTML="Today",l.setAttribute("id","textToday");let r=document.createElement("h3");r.innerHTML="All duties",r.setAttribute("id","allDuties");let s=document.createElement("h3");s.innerHTML="Categories",s.setAttribute("id","categories"),n.appendChild(l),n.appendChild(r),n.appendChild(s),this.#t=document.createElement("form"),this.#t.setAttribute("name","createCategory"),this.#t.setAttribute("id","createCategory"),e.appendChild(this.#t);let d=document.createElement("select");d.setAttribute("name","color"),d.setAttribute("id","color"),this.#t.appendChild(d);let o=document.createElement("option");o.setAttribute("value","Red"),o.innerHTML="Red",d.appendChild(o);let c=document.createElement("option");c.setAttribute("value","Yellow"),c.innerHTML="Yellow",d.appendChild(c);let u=document.createElement("option");u.setAttribute("value","Green"),u.innerHTML="Green",d.appendChild(u);let m=document.createElement("option");m.setAttribute("value","Blue"),m.innerHTML="Blue",d.appendChild(m);let p=document.createElement("option");p.setAttribute("value","Gray"),p.innerHTML="Gray",d.appendChild(p);let b=document.createElement("option");b.setAttribute("value","Black"),b.innerHTML="Black",d.appendChild(b);let v=document.createElement("div");v.setAttribute("id","categoryName");let E=document.createElement("input");E.setAttribute("type","text"),E.setAttribute("id","catName"),v.appendChild(E),this.#t.appendChild(v);let A=document.createElement("div");A.setAttribute("id","submitCat");let g=document.createElement("input");g.setAttribute("type","reset"),g.setAttribute("value","\u2713"),g.setAttribute("id","submitCategoryButton"),A.appendChild(g),this.#t.appendChild(A);let T=document.createElement("div");T.setAttribute("id","catTableDiv");let C=document.createElement("table");C.setAttribute("id","categoryTable");let f=document.createElement("tbody");C.setAttribute("id","catTableBody"),C.appendChild(f),T.appendChild(C),e.appendChild(T),this.#r(g),this.render2()}render2(){var e=this.#a.getCategory();let t=document.getElementById("catTableBody");t.innerHTML="";for(var i=0;i<e.length;i++){let n=t.insertRow(i),l=n.insertCell(0),r=n.insertCell(1),s=n.insertCell(2);r.innerHTML=e[i].colorValue,s.innerHTML=e[i].nameValue;var a=document.createElement("input");a.type="button",a.value="X",a.setAttribute("id",e[i].categoryId),this.#o(a,a.id),l.appendChild(a),t.appendChild(n)}}};var S=class{#e={};#i=[];constructor(){var e=JSON.parse(localStorage.getItem("task"));e==null&&localStorage.setItem("task",JSON.stringify(this.#e)),this.#e=JSON.parse(localStorage.getItem("task"))}addTask(e){this.#e[e.taskId]=e,localStorage.setItem("task",JSON.stringify(this.#e)),this.#t(),console.log(this.#e)}removeTask(e){delete this.#e[e],localStorage.setItem("task",JSON.stringify(this.#e)),this.#t()}getTask(){return this.#e=JSON.parse(localStorage.getItem("task")),Object.keys(this.#e).map(e=>this.#e[e])}addObserver(e){this.#i.push(e)}#t(){this.#i.forEach(e=>e.update())}};var I=class{#e={};#i=[];constructor(){var e=JSON.parse(localStorage.getItem("cat"));e==null&&localStorage.setItem("cat",JSON.stringify(this.#e)),this.#e=JSON.parse(localStorage.getItem("cat"))}addCategory(e){this.#e[e.categoryId]=e,localStorage.setItem("cat",JSON.stringify(this.#e)),this.#t(),console.log(this.#e)}removeCategory(e){delete this.#e[e],localStorage.setItem("cat",JSON.stringify(this.#e)),this.#t()}getCategory(){return this.#e=JSON.parse(localStorage.getItem("cat")),Object.keys(this.#e).map(e=>this.#e[e])}addObserver(e){this.#i.push(e)}#t(){this.#i.forEach(e=>e.update())}};document.addEventListener("DOMContentLoaded",()=>{let h=new S,e=new I;new L(document.getElementById("container2"),e).render(),new k(document.getElementById("container1"),h).render()});})();
//# sourceMappingURL=index.js.map
