"use strict";(self.webpackChunkecommerce_dashboard=self.webpackChunkecommerce_dashboard||[]).push([[438],{5438:(K,m,i)=>{i.r(m),i.d(m,{OrderModule:()=>X});var c=i(6895),f=i(7605),p=i(8729),u=i(4006),t=i(4650);let h=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-order"]],decls:1,vars:0,template:function(r,o){1&r&&t._UZ(0,"router-outlet")},dependencies:[p.lC]})}return e})();var d=i(671),_=i(7766),x=i(5259),O=i(9625),Z=i(5938),C=i(7009),A=i(3238),g=i(9549),v=i(7392),T=i(1572),b=i(4385),U=i(6308),q=i(266);function y(e,a){if(1&e&&(t.TgZ(0,"mat-option",36),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.Q6J("value",n.value),t.xp6(1),t.Oqu(n.label)}}function S(e,a){1&e&&(t.TgZ(0,"th",37)(1,"span")(2,"mat-icon",38),t._uU(3,"check_box"),t.qZA(),t._uU(4,"\xa0\xa0Order ID "),t.qZA()())}function P(e,a){if(1&e&&(t.TgZ(0,"td",39)(1,"span"),t._uU(2),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.Oqu(n._id)}}function L(e,a){1&e&&(t.TgZ(0,"th",37)(1,"span")(2,"mat-icon",38),t._uU(3,"redeem"),t.qZA(),t._uU(4,"\xa0\xa0Gift Wrap "),t.qZA()())}function M(e,a){if(1&e&&(t.TgZ(0,"td",39)(1,"span"),t._UZ(2,"i",40),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.Tol(!0===(null==n?null:n.giftWrap)?"gift":"noGift"),t.Q6J("matTooltip",!0===(null==n?null:n.giftWrap)?"Yes":"No")}}function D(e,a){1&e&&(t.TgZ(0,"th",41)(1,"span")(2,"mat-icon",38),t._uU(3,"group"),t.qZA(),t._uU(4,"\xa0\xa0Customer Details "),t.qZA()())}function w(e,a){if(1&e&&(t.TgZ(0,"td",39)(1,"span")(2,"h3",42),t._uU(3,"Billing Address:"),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"span"),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"span"),t._uU(11),t.ALo(12,"titlecase"),t.ALo(13,"titlecase"),t.qZA(),t._UZ(14,"br"),t.qZA()()),2&e){const n=a.$implicit;t.xp6(5),t.Oqu(n.customerName),t.xp6(3),t.Oqu(n.customerEmailId),t.xp6(3),t.lnq("",n.customerAddress.doorNoAndStreet,",",t.lcZ(12,5,n.customerAddress.city),",",t.lcZ(13,7,null==n.customerAddress?null:n.customerAddress.state),"")}}function N(e,a){1&e&&(t.TgZ(0,"th",41)(1,"span")(2,"mat-icon",38),t._uU(3,"assignment_turned_in"),t.qZA(),t._uU(4,"\xa0\xa0Order Details "),t.qZA()())}function k(e,a){if(1&e&&(t.TgZ(0,"div",44)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"titlecase"),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"span"),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"span"),t._uU(11),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"span"),t._uU(14),t.qZA(),t._UZ(15,"br"),t.qZA()),2&e){const n=a.$implicit,r=a.index;t.xp6(2),t.AsE("",r+1,"",".",""),t.xp6(2),t.Oqu(t.lcZ(5,8,null==n.productId?null:n.productId.productName)),t.xp6(4),t.Oqu(null==n.productId?null:n.productId.category.join(", ")),t.xp6(3),t.AsE("","Quantity:","",null==n?null:n.quantity,""),t.xp6(3),t.AsE("","Price:","",null==n.productId?null:n.productId.discountPrice,"")}}function Y(e,a){if(1&e&&(t.TgZ(0,"td",39)(1,"span")(2,"h3",42),t._uU(3,"Product:"),t.qZA(),t.YNc(4,k,16,10,"div",43),t.qZA()()),2&e){const n=a.$implicit;t.xp6(4),t.Q6J("ngForOf",n.orders)}}function I(e,a){1&e&&(t.TgZ(0,"th",41)(1,"span")(2,"mat-icon",38),t._uU(3,"calendar_month"),t.qZA(),t._uU(4,"\xa0\xa0Created At "),t.qZA()())}function F(e,a){if(1&e&&(t.TgZ(0,"td",39)(1,"span"),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,n.createdAt,"longDate")," ")}}function Q(e,a){1&e&&(t.TgZ(0,"th",45)(1,"span")(2,"mat-icon",38),t._uU(3,"task_alt"),t.qZA(),t._uU(4,"\xa0\xa0Order Status "),t.qZA()())}function J(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"span",49),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit,s=t.oxw();return t.KtG(s.updateOrderStatus(o))}),t.TgZ(1,"mat-icon",50),t._uU(2,"shopping_basket"),t.qZA()()}}function z(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"span",49),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().$implicit,s=t.oxw();return t.KtG(s.updateOrderStatus(o))}),t.TgZ(1,"mat-icon",51),t._uU(2,"local_shipping"),t.qZA()()}}function E(e,a){1&e&&(t.TgZ(0,"span")(1,"mat-icon",52),t._uU(2,"check_circle"),t.qZA()())}function $(e,a){if(1&e&&(t.TgZ(0,"td",46),t.YNc(1,J,3,0,"span",47),t.YNc(2,z,3,0,"span",47),t.YNc(3,E,3,0,"span",48),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("ngIf","pending"==n.orderStatus),t.xp6(1),t.Q6J("ngIf","dispatch"==n.orderStatus),t.xp6(1),t.Q6J("ngIf","delivered"==n.orderStatus)}}function B(e,a){1&e&&t._UZ(0,"tr",53)}function H(e,a){1&e&&t._UZ(0,"tr",54)}function G(e,a){1&e&&(t.TgZ(0,"div",55),t._UZ(1,"mat-spinner",56),t.qZA()),2&e&&(t.xp6(1),t.Q6J("diameter",50))}function j(e,a){1&e&&(t.TgZ(0,"div",57)(1,"p"),t._uU(2),t.qZA()()),2&e&&(t.xp6(2),t.Oqu("No data available"))}let R=(()=>{class e{constructor(n,r,o,s){this.api=n,this.dialog=r,this.router=o,this.snackbar=s,this.dataSource=new d.by([]),this.columnsToDisplay=["order_id","gift","customer_details","order_details","created_At","order_status"],this.orderStatus=[{label:"Dispatch",value:"pending"},{label:"On the way",value:"dispatch"},{label:"Delivered",value:"delivered"}],this.noData=!1,this.orderStatusPending=0,this.orderStatusDispatch=0,this.orderStatusdelivery=0}ngOnInit(){this.getOrderList()}applyFilter(n){this.dataSource.filter=n.trim().toLowerCase()}applyTypeFilter(){console.log(this.selectedValue),this.dataSource.data=this.selectedValue&&this.selectedValue.length?this.orderList.filter(n=>this.selectedValue.some(r=>-1!==n.orderStatus.indexOf(r))):this.orderList}viewMarket(n){this.router.navigate(["/marketing/view",n])}getOrderList(){this.api.apiGetCall("order/getAllOrder/"+localStorage.getItem("storeId")).subscribe(n=>{this.orderList=n.data,this.dataSource.data=n.data.sort((r,o)=>Date.parse(o.createdAt)-Date.parse(r.createdAt)),this.allOrderList=this.orderList,this.getCountStatus(),n.data?.length||(this.noData=!0)})}getCountStatus(){let n=[],r=[],o=[];this.allOrderList.forEach(s=>{"pending"==s.orderStatus?n.push(s):"dispatch"==s.orderStatus?r.push(s):o.push(s)}),this.orderStatusPending=n.length,this.orderStatusDispatch=r.length,this.orderStatusdelivery=o.length}updateOrderStatus(n){this.dialog.open(_.$,{width:"pending"===n.orderStatus?"350px":"300px",data:{from:"orderStatus",data:n}}).afterClosed().subscribe(o=>{o&&this.api.apiPutCall({_id:n._id,orderStatus:"pending"===n.orderStatus?"dispatch":"delivered"},"order/updateOrder").subscribe(l=>{l.message.includes("Update Order Successfully")&&(this.snackbar.openFromComponent(x.h,{data:l.message}),this.getOrderList())},l=>{})})}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(O.s),t.Y36(Z.uw),t.Y36(p.F0),t.Y36(C.ux))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-order-list"]],decls:68,vars:13,consts:[[1,"container"],[1,"row"],[1,"col-md-4"],[1,"card-stat",2,"background","#c2e1fe"],[1,"title"],[1,"flex-bot"],[1,"rate",2,"color","#2193f8"],[1,"card-stat",2,"background","#fcf1d9"],[1,"rate",2,"color","#f5b707"],[1,"card-stat",2,"background","#e8cfe2"],[1,"rate",2,"color","#b33789"],[1,"card"],[1,"row",2,"display","flex","flex-direction","row","align-items","center"],[1,"section-b","col-md-6"],["type","text","name","Search","placeholder","Search...",1,"input","m-3",3,"keyup"],[1,"col-md-6",2,"display","flex","justify-content","flex-end"],["appearance","outline"],["multiple","",3,"value","valueChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"table-container"],["mat-table","","matSort","",1,"table",3,"dataSource"],["matColumnDef","order_id"],["class","first","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","gift"],["matColumnDef","customer_details"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","order_details"],["matColumnDef","created_At"],["matColumnDef","order_status"],["class","last","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","style","text-align: center;",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","spinner-container",4,"ngIf"],["class","no_data",4,"ngIf"],[3,"value"],["mat-header-cell","",1,"first"],[1,"headerIcon"],["mat-cell",""],[1,"fa","fa-gift","fa-3x",3,"matTooltip"],["mat-header-cell",""],[1,"font-weight-bolder",2,"margin-bottom","0px"],["class","mb-3",4,"ngFor","ngForOf"],[1,"mb-3"],["mat-header-cell","",1,"last"],["mat-cell","",2,"text-align","center"],[3,"click",4,"ngIf"],[4,"ngIf"],[3,"click"],["matTooltip","Dispatch",1,"cursor-pointer",2,"color","#ff0303"],["matTooltip","On the Way",1,"cursor-pointer",2,"color","#f29d08"],["matTooltip","Delivered",2,"color","#00ff59"],["mat-header-row",""],["mat-row",""],[1,"spinner-container"],[3,"diameter"],[1,"no_data"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5)(7,"span",6),t._uU(8),t.qZA(),t._uU(9,"\xa0"),t.TgZ(10,"span"),t._uU(11,"| impression - 10 %"),t.qZA()()()(),t.TgZ(12,"div",2)(13,"div",7)(14,"span",4),t._uU(15),t.qZA(),t.TgZ(16,"div",5)(17,"span",8),t._uU(18),t.qZA(),t._uU(19,"\xa0"),t.TgZ(20,"span"),t._uU(21,"| impression - 15 %"),t.qZA()()()(),t.TgZ(22,"div",2)(23,"div",9)(24,"span",4),t._uU(25),t.qZA(),t.TgZ(26,"div",5)(27,"span",10),t._uU(28),t.qZA(),t._uU(29,"\xa0"),t.TgZ(30,"span"),t._uU(31,"| impression - 16 %"),t.qZA()()()()(),t.TgZ(32,"div",11)(33,"div",12)(34,"div",13)(35,"input",14),t.NdJ("keyup",function(l){return o.applyFilter(l.target.value)}),t.qZA()(),t.TgZ(36,"div",15)(37,"form")(38,"mat-form-field",16)(39,"mat-label"),t._uU(40,"Select Order"),t.qZA(),t.TgZ(41,"mat-select",17),t.NdJ("valueChange",function(l){return o.selectedValue=l})("selectionChange",function(){return o.applyTypeFilter()}),t.YNc(42,y,2,2,"mat-option",18),t.qZA()()()()()(),t.TgZ(43,"div",11)(44,"div",19)(45,"table",20),t.ynx(46,21),t.YNc(47,S,5,0,"th",22),t.YNc(48,P,3,1,"td",23),t.BQk(),t.ynx(49,24),t.YNc(50,L,5,0,"th",22),t.YNc(51,M,3,3,"td",23),t.BQk(),t.ynx(52,25),t.YNc(53,D,5,0,"th",26),t.YNc(54,w,15,9,"td",23),t.BQk(),t.ynx(55,27),t.YNc(56,N,5,0,"th",26),t.YNc(57,Y,5,1,"td",23),t.BQk(),t.ynx(58,28),t.YNc(59,I,5,0,"th",26),t.YNc(60,F,4,4,"td",23),t.BQk(),t.ynx(61,29),t.YNc(62,Q,5,0,"th",30),t.YNc(63,$,4,3,"td",31),t.BQk(),t.YNc(64,B,1,0,"tr",32),t.YNc(65,H,1,0,"tr",33),t.qZA(),t.YNc(66,G,2,1,"div",34),t.YNc(67,j,3,1,"div",35),t.qZA()()()),2&r&&(t.xp6(5),t.Oqu("New Orders"),t.xp6(3),t.Oqu(o.orderStatusPending),t.xp6(7),t.Oqu("Dispatched Orders"),t.xp6(3),t.Oqu(o.orderStatusDispatch),t.xp6(7),t.Oqu("Delivered Orders"),t.xp6(3),t.Oqu(o.orderStatusdelivery),t.xp6(13),t.Q6J("value",o.selectedValue),t.xp6(1),t.Q6J("ngForOf",o.orderStatus),t.xp6(3),t.Q6J("dataSource",o.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",o.columnsToDisplay),t.xp6(1),t.Q6J("matRowDefColumns",o.columnsToDisplay),t.xp6(1),t.Q6J("ngIf",0===(null==o.dataSource.data?null:o.dataSource.data.length)&&!o.noData),t.xp6(1),t.Q6J("ngIf",0===(null==o.dataSource.data?null:o.dataSource.data.length)&&o.noData))},dependencies:[c.sg,c.O5,A.ey,g.KE,g.hX,v.Hw,T.Ou,b.gD,U.YE,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,q.gM,u._Y,u.JL,c.rS,c.uU],styles:[".section-b[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{padding:15px;border:none;border-radius:10px;background:#f3f3f9;width:100%;line-height:24px}.add-coupon[_ngcontent-%COMP%]{font-size:16px}.add-coupon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:500!important;color:#0e1f53!important;text-decoration:none!important}.no_data[_ngcontent-%COMP%]{font-size:16px;font-weight:500;margin:12px 0 0 12px}.card[_ngcontent-%COMP%]{background-color:#fff;height:90%;border-radius:10px;box-shadow:0 2px 5px #0000001a;padding:5px;text-align:center;margin:10px}.rate[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.gift[_ngcontent-%COMP%]{color:#0e1f53}.noGift[_ngcontent-%COMP%]{color:gray}.card-stat[_ngcontent-%COMP%]{background-color:#fff;height:90%;border-radius:18px;box-shadow:0 2px 5px #0000001a;padding:25px;text-align:center;margin:10px}.disFlex[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.disFlex[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{position:relative}.disFlex[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .normal-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{border:none;height:2.375rem;padding-left:2.5rem;padding-right:1.25rem;background-color:#f3f3f9;box-shadow:none;border-radius:1.875rem;outline:0}.disFlex[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .normal-search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;font-size:1rem;line-height:2.375rem;left:.813rem;top:0;color:#74788d}.mat-table[_ngcontent-%COMP%]{width:100%}.displayicon[_ngcontent-%COMP%]{display:flex}.flexRow[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px}.activeWhatsappIcon[_ngcontent-%COMP%]{background-color:green;color:#fff;font-size:16px;padding:5px;border-radius:5px}.disActiveIcon[_ngcontent-%COMP%]{background-color:#fff;filter:grayscale(100%);font-size:16px;padding:5px;border-radius:5px}.activeSmsIcon[_ngcontent-%COMP%]{background-color:#dcdcdc;color:#2a2a84;font-size:16px;padding:5px;border-radius:5px}.activeEmailIcon[_ngcontent-%COMP%]{background-color:#fa0303;color:#fff;font-size:16px;padding:5px;border-radius:5px}.headerIcon[_ngcontent-%COMP%]{color:#0e1f53;position:relative;top:5px}.title[_ngcontent-%COMP%]{text-align:center;font-weight:600}.table-container[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto}.table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}[_ngcontent-%COMP%]::-webkit-scrollbar{width:20px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#0E1F53;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#3e4c75}"]})}return e})();var V=i(7506);const W=[{path:"",component:h,children:[{path:"list",component:R}]}];let X=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,f.q,p.Bz.forChild(W),u.UX,V.m]})}return e})()}}]);