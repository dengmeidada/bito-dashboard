"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[650],{2650:(A,n,o)=>{o.r(n),o.d(n,{DashboardModule:()=>j});var l=o(9808),m=o(2382),g=o(464),h=o(1874),p=o(6697),y=o(845),f=o(3986),v=o(6208),d=o(2083),c=o(9783),e=o(4893),b=o(6122),x=o(8568);const D=function(){return{width:"2.5rem",height:"2.5rem"}};let C=(()=>{class s{constructor(t,i,r){this.productService=t,this.layoutService=i,this.messageService=r,this.list=[{id:"",code:"",name:"",email:"",description:"",image:"",permission:""}],this.display=!1,this.name="",this.staffCode="",this.roleList=[{roleId:"1",roleName:"\u7ba1\u7406\u8005"},{roleId:"2",roleName:"\u4e3b\u7ba1"},{roleId:"3",roleName:"\u4e00\u822c\u54e1\u5de5"},{roleId:"4",roleName:"\u5de5\u8b80\u751f"}],this.valSwitch="",this.assignedRoleList=[],this.subscription=this.layoutService.configUpdate$.subscribe(()=>{this.initChart()})}ngOnInit(){this.list=[{id:"2019005",code:"f230fh0g3",name:"\u738b\u5bcc\u8cb4",email:"xxx@cathayholdings.com",description:"Product Description",image:"bamboo-watch.jpg",permission:"\u7ba1\u7406\u54e1"},{id:"2010010",code:"nvklal433",name:"\u5f35\u7f8e\u5973",email:"ooo@cathayholdings.com",description:"Product Description",image:"black-watch.jpg",permission:"\u4e3b\u7ba1"},{id:"2018005",code:"244wgerg2",name:"\u738b\u66c9\u660e",email:"oxo@cathayholdings.com",description:"Product Description",image:"blue-t-shirt.jpg",permission:"\u4e00\u822c\u54e1\u5de5"},{id:"2022015",code:"h456wer53",name:"\u9673\u7f8e\u7f8e",email:"xoo@cathayholdings.com",description:"Product Description",image:"bracelet.jpg",permission:"\u5de5\u8b80\u751f"}],this.initChart(),this.productService.getProductsSmall().then(t=>this.products=t),this.items=[{label:"\u7de8\u8f2f/\u67e5\u770b",command:()=>{this.update()}},{label:"\u522a\u9664",command:()=>{this.delete()}}]}initChart(){const t=getComputedStyle(document.documentElement),i=t.getPropertyValue("--text-color"),r=t.getPropertyValue("--text-color-secondary"),u=t.getPropertyValue("--surface-border");this.chartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:t.getPropertyValue("--bluegray-700"),borderColor:t.getPropertyValue("--bluegray-700"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:t.getPropertyValue("--green-600"),borderColor:t.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:i}}},scales:{x:{ticks:{color:r},grid:{color:u,drawBorder:!1}},y:{ticks:{color:r},grid:{color:u,drawBorder:!1}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}onGlobalFilter(t,i){t.filterGlobal(i.target.value,"contains")}submit(){this.display=!1}update(){this.display=!0}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}updateCheckboxValue(t){const i=this.assignedRoleList.findIndex(r=>r===t.roleId);i>-1?this.assignedRoleList.splice(i,1):this.assignedRoleList.push(t.roleId),console.log("this.assignedRoleList",this.assignedRoleList)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(b.M),e.Y36(x.P),e.Y36(c.ez))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],features:[e._Bn([c.ez])],decls:16,vars:2,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3","text-xl"],[1,"font-medium"],[1,"text-500","font-medium"],[1,"text-900","text-green-500","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-yellow-100","border-round",3,"ngStyle"],[1,"pi","pi-bell","text-yellow-500","text-xl"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"span",4),e._uU(6,"\u9032\u4ef6\u958b\u55ae"),e.qZA(),e.TgZ(7,"div",5)(8,"span",6),e._uU(9,"\u5f85\u6709 "),e.qZA(),e.TgZ(10,"span",7),e._uU(11," 2 "),e.qZA(),e.TgZ(12,"span",6),e._uU(13," \u4ef6\u9700\u8655\u7406"),e.qZA()()(),e.TgZ(14,"div",8),e._UZ(15,"i",9),e.qZA()()()()()),2&t&&(e.xp6(14),e.Q6J("ngStyle",e.DdM(1,D)))},dependencies:[l.PC],encapsulation:2}),s})(),S=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:C}]),d.Bz]}),s})();var P=o(5315),M=o(1424),Z=o(7773),I=o(242);let j=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[l.ez,m.u5,g.S,h.$9,p.U$,f.l,v.ml,y.hJ,S,P.S,M.j,Z.EV,I.Iu]}),s})()}}]);