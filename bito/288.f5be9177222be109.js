"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[288],{288:(k,r,d)=>{d.r(r),d.d(r,{BilledCasesModule:()=>O});var c=d(9808),p=d(2083),e=d(4893),u=d(2382),s=d(4036),g=d(9783),m=d(5652),_=d(845),f=d(9603),Z=d(4423),C=d(1424),h=d(3407),A=d(5315);const T=["fileUploadData"];function B(t,l){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.AsE(" ",n.name," - ",n.size," bytes ")}}function M(t,l){if(1&t&&(e.TgZ(0,"ul"),e.YNc(1,B,2,2,"li",38),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.uploadedFiles)}}function v(t,l){if(1&t&&e.YNc(0,M,2,1,"ul",36),2&t){const n=e.oxw();e.Q6J("ngIf",n.uploadedFiles.length)}}function b(t,l){if(1&t&&(e.TgZ(0,"div",40),e._UZ(1,"img",41),e._uU(2),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("src",n.imageSrc,e.LSH),e.xp6(1),e.AsE(" ",n.fileName," ",n.fileSize," ")}}function U(t,l){if(1&t&&e.YNc(0,b,3,3,"div",39),2&t){const n=e.oxw();e.Q6J("ngIf",!n.isSelectFileUpload)}}function I(t,l){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",5)(2,"label",27),e._uU(3,"\u9000\u4ef6\u539f\u56e0"),e.qZA(),e.TgZ(4,"textarea",28),e.NdJ("ngModelChange",function(a){e.CHM(n);const i=e.oxw();return e.KtG(i.product.description=a)}),e.qZA()(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(4),e.Q6J("ngModel",n.product.description)}}function x(t,l){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.AsE(" ",n.name," - ",n.size," bytes ")}}function q(t,l){if(1&t&&(e.TgZ(0,"ul"),e.YNc(1,x,2,2,"li",38),e.qZA()),2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",n.uploadedFiles)}}function F(t,l){if(1&t&&e.YNc(0,q,2,1,"ul",36),2&t){const n=e.oxw(2);e.Q6J("ngIf",n.uploadedFiles.length)}}function J(t,l){if(1&t&&(e.TgZ(0,"div",40),e._UZ(1,"img",41),e._uU(2),e.qZA()),2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("src",n.imageSrc,e.LSH),e.xp6(1),e.AsE(" ",n.fileName," ",n.fileSize," ")}}function w(t,l){if(1&t&&e.YNc(0,J,3,3,"div",39),2&t){const n=e.oxw(2);e.Q6J("ngIf",!n.isSelectFileUpload)}}function D(t,l){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",42)(2,"label",43),e._uU(3,"\u57fa\u672c\u8cc7\u6599"),e.qZA()(),e.TgZ(4,"div",5)(5,"label",20),e._uU(6,"\u8cbc\u7d1a\u5225\u6a19\u7c64"),e.qZA(),e.TgZ(7,"div",21)(8,"div",44)(9,"p-radioButton",23),e.NdJ("ngModelChange",function(a){e.CHM(n);const i=e.oxw();return e.KtG(i.product.category=a)}),e.qZA(),e.TgZ(10,"label",24),e._uU(11,"\u666e"),e.qZA()(),e.TgZ(12,"div",44)(13,"p-radioButton",25),e.NdJ("ngModelChange",function(a){e.CHM(n);const i=e.oxw();return e.KtG(i.product.category=a)}),e.qZA(),e.TgZ(14,"label",26),e._uU(15,"\u6025"),e.qZA()(),e.TgZ(16,"div",44)(17,"p-radioButton",45),e.NdJ("ngModelChange",function(a){e.CHM(n);const i=e.oxw();return e.KtG(i.product.category=a)}),e.qZA(),e.TgZ(18,"label",46),e._uU(19,"\u7279\u6025"),e.qZA()()()(),e.TgZ(20,"div",5)(21,"label",27),e._uU(22,"\u5be9\u6838\u610f\u898b"),e.qZA(),e.TgZ(23,"textarea",28),e.NdJ("ngModelChange",function(a){e.CHM(n);const i=e.oxw();return e.KtG(i.product.description=a)}),e.qZA()(),e.TgZ(24,"div",1)(25,"h6"),e._uU(26,"\u4e0a\u50b3\u9644\u4ef6"),e.qZA(),e.TgZ(27,"p-fileUpload",29,30),e.NdJ("onSelect",function(a){e.CHM(n);const i=e.oxw();return e.KtG(i.onFileUploadClicked(a))}),e.YNc(29,F,1,1,"ng-template",31),e.YNc(30,w,1,1,"ng-template",31),e.qZA()(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(9),e.Q6J("ngModel",n.product.category),e.xp6(4),e.Q6J("ngModel",n.product.category),e.xp6(4),e.Q6J("ngModel",n.product.category),e.xp6(6),e.Q6J("ngModel",n.product.description),e.xp6(4),e.Q6J("multiple",!1)("maxFileSize",1e6)("chooseLabel","\u9078\u64c7\u6a94\u6848")("showUploadButton",!1)("showCancelButton",!1)}}function y(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"button",47),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.display=!1)}),e.qZA(),e.TgZ(1,"button",48),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.submit())}),e.qZA()}}const N=function(){return{width:"90vw"}},E=function(){return{"960px":"75vw"}},S=[{path:"",children:[{path:"basicInformation",component:(()=>{class t{constructor(){this.SectorDropdownItems=[{name:"\u90e8\u9580 1",code:"Option 1"},{name:"\u90e8\u9580 2",code:"Option 2"},{name:"\u90e8\u9580 3",code:"Option 3"}],this.applicantsDropdownItems=[{name:"\u4eba\u54e1 1",code:"Option 1"},{name:"\u4eba\u54e1 2",code:"Option 2"},{name:"\u4eba\u54e1 3",code:"Option 3"}],this.dropdownItems=[{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}],this.product={},this.fileUpload={size:"",name:"",image:""},this.list=[],this.productList=[],this.investList=[{id:"1000",code:"f230fh0g3",name:"\u6e2c\u8a661",blockType:"2",articleClassification:"1",productCategory:"1",content:"\u5167\u5bb91",file:{size:"1024",name:"\u6e2c\u8a661",image:"assets/demo/images/product/bamboo-watch.jpg"},sortOrder:"1",createdTime:"2022/09/30"},{id:"1001",code:"nvklal433",name:"\u6e2c\u8a662",blockType:"2",articleClassification:"1",productCategory:"2",content:"\u5167\u5bb92",file:{size:"1024",name:"\u6e2c\u8a662",image:"assets/demo/images/product/black-watch.jpg"},sortOrder:"2",createdTime:"2022/09/25"}],this.display=!1,this.cities=[],this.selectedDrop="",this.uploadedFiles=[],this.blockOptions=[],this.productOptions=[],this.sortOptions=[],this.selectTableType="1",this.selectedBlock="1",this.selectedProduct="",this.htmlData="",this.imageSrc=null,this.fileName="",this.fileSize="",this.isSelectFileUpload=!1,this.toolbarConfig=["heading","|","bold","italic","link","bulletedList","numberedList","|","indent","outdent","|","imageUpload","blockQuote","mediaEmbed","undo","redo"],this.title="",this.sortOrderValue="",this.submitType="",this.sortOrder=0,this.index=0,this.sortField="",this.sourceCities=[],this.targetCities=[],this.orderCities=[],this.dialogTitle="",this.editDialog=""}ngOnInit(){}onFileUploadClicked(n){this.isSelectFileUpload=!0;const o=new FileReader;o.readAsDataURL(n.files[0]),o.onload=()=>{this.imageSrc=o.result},this.fileUpload={size:n.files[0].size,name:n.files[0].name,image:this.imageSrc},this.fileSize=n.files[0].size,this.fileName=n.files[0].name,console.log("this.imageSrc",this.imageSrc)}onBlockChange(n){}onSubmit(n){this.editDialog=n,this.display=!0,"0"===n?this.dialogTitle="\u9000\u4ef6\u610f\u898b\u7de8\u8f2f":"1"===n&&(this.dialogTitle="\u5be9\u6838\u610f\u898b\u7de8\u8f2f")}submit(){this.display=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-basic-information"]],viewQuery:function(n,o){if(1&n&&e.Gf(T,5),2&n){let a;e.iGM(a=e.CRH())&&(o.fileUploadData=a.first)}},decls:116,vars:34,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"grid","p-fluid"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-12"],["htmlFor","incomingNo"],["id","incomingNo",1,"b-form-text"],[1,"field","col-12","md:col-6"],["htmlFor","application-sector"],["optionLabel","name",3,"options","ngModel","ngModelChange"],["htmlFor","contractSubject1"],["htmlFor","contractSubject2"],["pInputText","","id","contractSubject2","type","text"],["htmlFor","contractSubject1",2,"visibility","hidden"],["for","calendar1"],["inputId","calendar1",3,"ngModel","showIcon","ngModelChange"],["for","calendar2"],["inputId","calendar2",3,"ngModel","showIcon","ngModelChange"],[1,"field","col-12","md:col-4"],[1,"mb-3"],[1,"formgrid","grid"],[1,"field-radiobutton","col-6"],["id","category1","name","category","value","Accessories",3,"ngModel","ngModelChange"],["for","category1"],["id","category2","name","category","value","Clothing",3,"ngModel","ngModelChange"],["for","category2"],["for","description"],["id","description","pInputTextarea","","required","","rows","3","cols","20",3,"ngModel","ngModelChange"],["name","demo[]","accept","image/*",3,"multiple","maxFileSize","chooseLabel","showUploadButton","showCancelButton","onSelect"],["fileUploadData",""],["pTemplate","content"],[1,"col-12","text-center"],["type","text","pButton","","label","\u6838\u51c6",2,"width","auto","margin-right","0.5rem",3,"click"],["type","text","pButton","","label","\u9000\u4ef6",1,"p-button-warning",2,"width","auto",3,"click"],["showEffect","fade",3,"header","visible","modal","breakpoints","visibleChange"],[4,"ngIf"],["pTemplate","footer"],[4,"ngFor","ngForOf"],["class","dragdrop-area",4,"ngIf"],[1,"dragdrop-area"],[3,"src"],[1,"field","col-12","md:col-6",2,"display","flex","align-items","center"],["for","",1,"mb-0"],[1,"field-radiobutton","col-4"],["id","category3","name","category","value","Clothing",3,"ngModel","ngModelChange"],["for","category3"],["pButton","","label","\u96e2\u958b",1,"p-button-outlined",3,"click"],["pButton","","label","\u78ba\u5b9a\u9001\u51fa",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"\u7de8\u8f2f\u9032\u4ef6\u958b\u55ae-\u57fa\u672c\u8cc7\u6599"),e.qZA(),e.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"label",6),e._uU(10,"\u9032\u4ef6\u7de8\u865f"),e.qZA(),e.TgZ(11,"div",7),e._uU(12,"CLI0201OAPI-002"),e.qZA()(),e.TgZ(13,"div",8)(14,"label",9),e._uU(15,"\u7533\u8acb\u90e8\u9580*"),e.qZA(),e.TgZ(16,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return o.selectedSector=i}),e.qZA()(),e.TgZ(17,"div",8)(18,"label",9),e._uU(19,"\u7533\u8acb\u4eba\u54e1*"),e.qZA(),e.TgZ(20,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return o.selectedApplicants=i}),e.qZA()(),e.TgZ(21,"div",8)(22,"label",11),e._uU(23,"\u7c3d\u7d04\u4e3b\u9ad4\u6211\u65b9*"),e.qZA(),e.TgZ(24,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return o.selectedApplicants=i}),e.qZA()(),e.TgZ(25,"div",8)(26,"label",12),e._uU(27,"\u7c3d\u7d04\u4e3b\u9ad4\u4ed6\u65b9*"),e.qZA(),e._UZ(28,"input",13),e.qZA(),e.TgZ(29,"div",5)(30,"label",12),e._uU(31,"\u806f\u7d61\u4eba"),e.qZA(),e._UZ(32,"input",13),e.qZA(),e.TgZ(33,"div",8)(34,"label",12),e._uU(35,"\u806f\u7d61\u96fb\u8a71"),e.qZA(),e._UZ(36,"input",13),e.qZA(),e.TgZ(37,"div",8)(38,"label",12),e._uU(39,"\u624b\u6a5f"),e.qZA(),e._UZ(40,"input",13),e.qZA(),e.TgZ(41,"div",5)(42,"label",12),e._uU(43,"\u516c\u53f8\u5730\u5740"),e.qZA(),e._UZ(44,"input",13),e.qZA(),e.TgZ(45,"div",5)(46,"label",12),e._uU(47,"\u5408\u7d04\u540d\u7a31"),e.qZA(),e._UZ(48,"input",13),e.qZA(),e.TgZ(49,"div",8)(50,"label",12),e._uU(51,"\u5408\u7d04\u91d1\u984d(\u542b\u7a05)"),e.qZA(),e._UZ(52,"input",13),e.qZA(),e.TgZ(53,"div",8)(54,"label",14),e._uU(55,"\u5408\u7d04\u91d1\u984d(\u542b\u7a05)"),e.qZA(),e.TgZ(56,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return o.selectedApplicants=i}),e.qZA()(),e.TgZ(57,"div",8)(58,"label",15),e._uU(59,"\u5408\u7d04\u671f\u9593(\u8d77)"),e.qZA(),e.TgZ(60,"p-calendar",16),e.NdJ("ngModelChange",function(i){return o.value1=i}),e.qZA()(),e.TgZ(61,"div",8)(62,"label",17),e._uU(63,"\u5408\u7d04\u671f\u9593(\u8fc4)"),e.qZA(),e.TgZ(64,"p-calendar",18),e.NdJ("ngModelChange",function(i){return o.value2=i}),e.qZA()(),e.TgZ(65,"div",19)(66,"label",12),e._uU(67,"\u5e74"),e.qZA(),e._UZ(68,"input",13),e.qZA(),e.TgZ(69,"div",19)(70,"label",12),e._uU(71,"\u6708"),e.qZA(),e._UZ(72,"input",13),e.qZA(),e.TgZ(73,"div",19)(74,"label",12),e._uU(75,"\u65e5"),e.qZA(),e._UZ(76,"input",13),e.qZA(),e.TgZ(77,"div",5)(78,"label",20),e._uU(79,"NDA \u5728\u6848"),e.qZA(),e.TgZ(80,"div",21)(81,"div",22)(82,"p-radioButton",23),e.NdJ("ngModelChange",function(i){return o.product.category=i}),e.qZA(),e.TgZ(83,"label",24),e._uU(84,"\u6709\u7c3d\u904e"),e.qZA()(),e.TgZ(85,"div",22)(86,"p-radioButton",25),e.NdJ("ngModelChange",function(i){return o.product.category=i}),e.qZA(),e.TgZ(87,"label",26),e._uU(88,"\u6c92\u7c3d\u904e"),e.qZA()()()(),e.TgZ(89,"div",8)(90,"label",9),e._uU(91,"\u57f7\u884c\u55ae\u4f4d"),e.qZA(),e.TgZ(92,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return o.selectedApplicants=i}),e.qZA()(),e.TgZ(93,"div",8)(94,"label",11),e._uU(95,"\u57f7\u884c\u4eba\u54e1"),e.qZA(),e.TgZ(96,"p-dropdown",10),e.NdJ("ngModelChange",function(i){return o.selectedApplicants=i}),e.qZA()(),e.TgZ(97,"div",5)(98,"label",27),e._uU(99,"\u9001\u5be9\u5099\u6ce8"),e.qZA(),e.TgZ(100,"textarea",28),e.NdJ("ngModelChange",function(i){return o.product.description=i}),e.qZA()(),e.TgZ(101,"div",1)(102,"h6"),e._uU(103,"\u4e0a\u50b3\u6a94\u6848"),e.qZA(),e.TgZ(104,"p-fileUpload",29,30),e.NdJ("onSelect",function(i){return o.onFileUploadClicked(i)}),e.YNc(106,v,1,1,"ng-template",31),e.YNc(107,U,1,1,"ng-template",31),e.qZA()()(),e.TgZ(108,"div",32)(109,"button",33),e.NdJ("click",function(){return o.onSubmit("1")}),e.qZA(),e.TgZ(110,"button",34),e.NdJ("click",function(){return o.onSubmit("0")}),e.qZA()()()(),e.TgZ(111,"p-dialog",35),e.NdJ("visibleChange",function(i){return o.display=i}),e.TgZ(112,"div",4),e.YNc(113,I,5,1,"ng-container",36),e.YNc(114,D,31,9,"ng-container",36),e.qZA(),e.YNc(115,y,2,0,"ng-template",37),e.qZA()()()()),2&n&&(e.xp6(16),e.Q6J("options",o.SectorDropdownItems)("ngModel",o.selectedSector),e.xp6(4),e.Q6J("options",o.applicantsDropdownItems)("ngModel",o.selectedApplicants),e.xp6(4),e.Q6J("options",o.applicantsDropdownItems)("ngModel",o.selectedApplicants),e.xp6(32),e.Q6J("options",o.applicantsDropdownItems)("ngModel",o.selectedApplicants),e.xp6(4),e.Q6J("ngModel",o.value1)("showIcon",!0),e.xp6(4),e.Q6J("ngModel",o.value2)("showIcon",!0),e.xp6(18),e.Q6J("ngModel",o.product.category),e.xp6(4),e.Q6J("ngModel",o.product.category),e.xp6(6),e.Q6J("options",o.applicantsDropdownItems)("ngModel",o.selectedApplicants),e.xp6(4),e.Q6J("options",o.applicantsDropdownItems)("ngModel",o.selectedApplicants),e.xp6(4),e.Q6J("ngModel",o.product.description),e.xp6(4),e.Q6J("multiple",!1)("maxFileSize",1e6)("chooseLabel","\u9078\u64c7\u6a94\u6848")("showUploadButton",!1)("showCancelButton",!1),e.xp6(7),e.Akn(e.DdM(32,N)),e.Q6J("header",o.dialogTitle)("visible",o.display)("modal",!0)("breakpoints",e.DdM(33,E)),e.xp6(2),e.Q6J("ngIf","0"===o.editDialog),e.xp6(1),e.Q6J("ngIf","1"===o.editDialog))},dependencies:[c.sg,c.O5,u.Fj,u.JJ,u.Q7,u.On,s.Lt,g.jx,m.f,_.Hq,f.EU,Z.p,C.o,h.g,A.V]}),t})()}]}];let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(S),p.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,Q]}),t})()}}]);