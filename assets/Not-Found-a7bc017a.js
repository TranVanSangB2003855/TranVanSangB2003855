import{_ as n,o as i,c as o,f as d,p as r,g as a,a as t,b as s}from"./index-a5c14a1a.js";const h={data(){return{height:0,width:0}},methods:{resizeHandler(){this.height=window.innerHeight,this.width=window.innerWidth}},computed:{heightOfNotFound(){return(this.height-document.getElementsByClassName("header")[0].offsetHeight-document.getElementsByClassName("footer")[0].offsetHeight-0).toString()+"px"}},mounted(){this.height=window.innerHeight,this.width=window.innerWidth},created(){window.addEventListener("resize",this.resizeHandler)},destroyed(){window.removeEventListener("resize",this.resizeHandler)}},c=e=>(r("data-v-fe620fdb"),e=e(),a(),e),_=c(()=>t("div",{class:"text-center text-wrap"},[s(" Oops, không thể tìm thấy trang. Trở về, "),t("a",{href:"/"}," trang chủ"),s(". ")],-1)),f=[_];function p(e,l,g,u,m,w){return i(),o("div",{class:"container-fluid d-flex align-items-center justify-content-center",style:d({height:this.heightOfNotFound})},f,4)}const x=n(h,[["render",p],["__scopeId","data-v-fe620fdb"]]);export{x as default};