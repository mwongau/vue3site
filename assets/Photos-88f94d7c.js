import{_ as n,r as l,o as u,c as i,b as e,t as _,p,d}from"./index-2ec83296.js";const a=s=>(p("data-v-934a79e6"),s=s(),d(),s),h={class:"photos"},r=a(()=>e("h1",null,"Photos",-1)),v=a(()=>e("b",null,"Click to select next photo",-1)),g=[v],m=a(()=>e("br",null,null,-1)),y=["src","alt"],S={__name:"Photos",setup(s){const t=l(0),o=l([{desc:"Australian Catholic University, Strathfield Campus, NSW, Australia",image:"/acupy.jpg",alt:"acu"},{desc:"University of Technology Sydney, Building 5, Sydney, Australia",image:"/uts-bldg5.jpg",alt:"uts"},{desc:"Homebush Public School, Homebush, NSW, Australia",image:"/hps.jpg",alt:"hps"}]);function c(){t.value++,t.value>2&&(t.value=0)}return(f,b)=>(u(),i("div",h,[r,e("button",{onClick:c},g),m,e("h4",null,_(o.value[t.value].desc),1),e("img",{src:o.value[t.value].image,alt:o.value[t.value].alt},null,8,y)]))}},P=n(S,[["__scopeId","data-v-934a79e6"]]);export{P as default};
