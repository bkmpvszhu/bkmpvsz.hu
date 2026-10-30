import{B as e,C as t,D as n,E as r,F as i,G as a,H as o,I as s,K as c,L as l,N as u,U as d,X as f,a as p,k as m,o as h,q as g,s as _,v,x as y,z as b}from"../chunks/Dz07wyY1.js";import{t as x}from"../chunks/CAX4Ql-m.js";import{s as S}from"../chunks/BcQERoUB.js";var C=t(`<div class="intro svelte-b0t7rp"><p class="svelte-b0t7rp">A Bács-Kiskun Megyei Polgári Védelmi Szövetség Alapszabályban lefektetett célja szerinti
		feladata, egy olyan tanácsadó - felkészítő rendszer megszervezése és működtetése, melynek
		eredményeként az állampolgárok megismerhetik környezetük veszélyforrásait, képessé válnak
		önmaguk és embertársaik életét, vagyontárgyait eredményesen oltalmazni, menteni, mind az elemi
		csapások, mind az ipari katasztrófák esetén.</p> <button class="svelte-b0t7rp"> </button> <div><p>Ugyanakkor a folyamatosan változó világ megköveteli, hogy a Szövetség igazodjon a 21. századi
			valósághoz. Ezért a korábbi, klasszikus feladataink megtartása mellett tágabban értelmezzük a
			lakosságot, ezen belül kiemelten az ifjúságot veszélyeztető hatásokat. Így jutottunk arra a
			következtetésre, hogy előrelátóan cselekvő módon, megfelelő szakember bevonásával a
			drogprevenciót is feladataink közé emeljük. Ezzel az a célunk, hogy bemutassuk a droghasználat
			egyértelmű veszélyeit, és tudatosítassuk: a szer alkalmazója fizikailag, pszichikailag,
			anyagilag szakadékba taszítja önmagát és megnyomorítja környezetét. A drogok tudatos
			visszautasítása, az egészséges életmód kialakítása társadalmi ügy, és ebben a Bács-Kiskun
			Megyei Polgári Védelmi Szövetség felelősséget vállal.</p> <p>A drogprevenciót sokan csinálják, de tapasztalatunk szerint kevés a jó előadó. Szerencsére az
			élet úgy alakult, hogy találkoztunk Marosi Antallal, aki a „Drogokról másképpen" című igen
			látványos és elgondolkodtató előadásával lebilincseli a hallgatóságot. Kétségünk nincs afelől,
			hogy a mondanivaló nem jut el mindenkihez. De, ha egy-egy osztályból csak egy potenciális
			áldozatot sikerül eltérítenünk, akkor már megérte. Úgy véljük, annál ezért jobb az arány.</p> <p>2016. óta indított kezdeményezésünk nyitott fülekre talált az iskoláknál, mondhatni visszajáró
			vendégek vagyunk. Talán ez is mutatja, hogy a probléma, vagy legalább is a veszélye létező
			dolog, mint ahogy a tudatos biztonságra való törekvésünk is.</p></div></div>`);function w(t){let r=d(!1);var a=C(),s=e(l(a),2),c=b(s,!0),u=e(s,2);let g;f(a),i(()=>{p(s,`aria-expanded`,m(r)),v(c,m(r)?`Kevesebb`:`Tovább olvasom`),g=h(u,1,`rest svelte-b0t7rp`,null,g,{expanded:m(r)})}),n(`click`,s,()=>o(r,!m(r))),y(t,a)}r([`click`]);function T(e,t){g(t,!0);let n=a(()=>t.data.posts),r=a(()=>t.data.category),i=a(()=>t.data.total);_(`10ff13b`,e=>{u(()=>{s.title=`BKMPVSZ: ${S[m(r)]??``}`})});{let t=a(()=>m(r)===`prevencio`?w:void 0);x(e,{get posts(){return m(n)},page:1,get totalPosts(){return m(i)},get title(){return S[m(r)]},get paginationPath(){return`/blog/category/${m(r)??``}/page`},get intro(){return m(t)}})}c()}export{T as component};