"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5075],{5075:(M,c,g)=>{g.r(c),g.d(c,{HomePageModule:()=>F});var s=g(177),r=g(791),m=g(4341),u=g(70),h=g(467),e=g(3953);function _(a,d){if(1&a&&(e.j41(0,"ion-item")(1,"ion-label"),e.EFF(2),e.nrm(3,"br"),e.EFF(4),e.nrm(5,"br"),e.EFF(6),e.nrm(7,"br"),e.EFF(8),e.nrm(9,"br"),e.EFF(10),e.nrm(11,"br"),e.EFF(12),e.nrm(13,"br"),e.EFF(14),e.nrm(15,"br"),e.EFF(16),e.nrm(17,"br"),e.EFF(18),e.nrm(19,"br"),e.EFF(20),e.nrm(21,"br"),e.k0s()()),2&a){const l=d.$implicit;e.R7$(2),e.SpI(" RUT: ",l.rut,""),e.R7$(2),e.SpI(" Nombres: ",l.nombres,""),e.R7$(2),e.SpI(" Apellidos: ",l.apellidos,""),e.R7$(2),e.SpI(" Direcci\xf3n: ",l.direccion,""),e.R7$(2),e.SpI(" Ciudad: ",l.ciudad,""),e.R7$(2),e.SpI(" Tel\xe9fono: ",l.telefono,""),e.R7$(2),e.SpI(" Correo: ",l.correo,""),e.R7$(2),e.SpI(" Fecha de Nacimiento: ",l.fechaNacimiento,""),e.R7$(2),e.SpI(" Estado Civil: ",l.estadoCivil,""),e.R7$(2),e.SpI(" Comentarios: ",l.comentarios,"")}}function p(a,d){if(1&a&&(e.j41(0,"ion-list"),e.DNE(1,_,22,10,"ion-item",21),e.k0s()),2&a){const l=e.XpG();e.R7$(),e.Y8G("ngForOf",l.filteredRecords)}}const f=[{path:"",component:(()=>{var a;class d{constructor(i){this.alertCtrl=i,this.formData={rut:"",nombres:"",apellidos:"",direccion:"",ciudad:"",telefono:"",correo:"",fechaNacimiento:"",estadoCivil:"",comentarios:""},this.dataRecords=[],this.filteredRecords=[],this.isFormValid=!1}ngOnInit(){this.filteredRecords=[...this.dataRecords],this.checkFormValidity()}checkFormValidity(){this.isFormValid=Object.values(this.formData).every(i=>""!==i.trim())}guardarData(){var i=this;return(0,h.A)(function*(){if(!i.isFormValid)return;const o=i.dataRecords.findIndex(t=>t.rut===i.formData.rut);o>=0?yield(yield i.alertCtrl.create({header:"Registro existente",message:"El registro con este RUT ya existe. \xbfDesea sobrescribirlo?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Sobrescribir",handler:()=>{i.dataRecords[o]={...i.formData},i.limpiarFormulario()}}]})).present():(i.dataRecords.push({...i.formData}),i.limpiarFormulario())})()}limpiarFormulario(){this.formData={rut:"",nombres:"",apellidos:"",direccion:"",ciudad:"",telefono:"",correo:"",fechaNacimiento:"",estadoCivil:"",comentarios:""},this.filteredRecords=[...this.dataRecords],this.checkFormValidity()}cerrarFormulario(){console.log("Cerrando formulario y redirigiendo a Google..."),window.location.href="https://www.google.com"}buscarPorApellido(i){const o=i.target.value.toLowerCase();this.filteredRecords=this.dataRecords.filter(t=>t.apellidos.toLowerCase().includes(o))}onFormFieldChange(){this.checkFormValidity()}}return(a=d).\u0275fac=function(i){return new(i||a)(e.rXU(r.hG))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-home"]],decls:41,vars:14,consts:[[3,"translucent"],["placeholder","Buscar por apellido",2,"margin-bottom","20px",3,"ionInput"],[4,"ngIf"],["type","text","id","rut","required","","minlength","9","maxlength","12","pattern","^(\\d{1,3}(?:\\.\\d{1,3}){2}-[\\dkK])$","fill","solid","label","RUT","labelPlacement","floating","helperText","Ej: 12.345.678-9","errorText","Rut Inv\xe1lido",3,"ngModelChange","ngModel"],["type","text","id","nombres","required","","minlength","3","maxlength","50","fill","solid","label","Nombres","labelPlacement","floating","helperText","Ej: Pedro Pablo","errorText","Nombre Inv\xe1lido",3,"ngModelChange","ngModel"],["type","text","id","apellidos","required","","minlength","3","maxlength","50","fill","solid","label","Apellidos","labelPlacement","floating","helperText","Ej: Perez Pereira","errorText","Apellido Inv\xe1lido",3,"ngModelChange","ngModel"],["type","text","id","direccion","required","","minlength","10","maxlength","70","fill","solid","label","Direcci\xf3n","labelPlacement","floating","helperText","Ingresa una direcci\xf3n v\xe1lida","errorText","Direcci\xf3n Inv\xe1lida",3,"ngModelChange","ngModel"],["type","text","id","ciudad","required","","minlength","3","maxlength","25","fill","solid","label","Ciudad","labelPlacement","floating","helperText","Ingresa una ciudad v\xe1lida","errorText","Ciudad Inv\xe1lida",3,"ngModelChange","ngModel"],["type","number","id","telefono","required","","minlength","8","maxlength","9","fill","solid","label","Tel\xe9fono","labelPlacement","floating","helperText","Ej: 9 1234 5678","errorText","Tel\xe9fono Inv\xe1lido",3,"ngModelChange","ngModel"],["type","email","id","correo","required","","minlength","4","pattern","^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$","fill","solid","label","Correo Electr\xf3nico","labelPlacement","floating","helperText","Ej: correo@electronico.cl","errorText","Correo Electr\xf3nico Inv\xe1lido",3,"ngModelChange","ngModel"],["type","date","id","fechaNacimiento","required","","fill","solid","label","Fecha de Nacimiento","labelPlacement","floating","errorText","Fecha de Nacimiento Inv\xe1lida",3,"ngModelChange","ngModel"],["id","estadoCivil","required","","label","Estado Civil","labelPlacement","floating",2,"margin-bottom","20px","margin-left","5px","margin-right","5px",3,"ngModelChange","ngModel"],["value","Soltero(a)"],["value","Casado(a)"],["value","Conviviente Civil"],["value","Divorciado(a)"],["value","Viudo(a)"],["label","Comentarios","labelPlacement","floating","fill","solid","placeholder","Ingrese sus comentarios","maxlength","500",2,"height","100px",3,"ngModelChange","counter","ngModel"],[2,"text-align","center","margin","30px"],[3,"click","disabled"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(i,o){1&i&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Ficha M\xe9dica"),e.k0s()()(),e.j41(4,"ion-content")(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),e.EFF(8,"Ingrese sus datos"),e.k0s()(),e.j41(9,"ion-card-content")(10,"ion-searchbar",1),e.bIt("ionInput",function(n){return o.buscarPorApellido(n)}),e.k0s(),e.j41(11,"ion-label"),e.EFF(12,"v4.00"),e.k0s(),e.DNE(13,p,2,1,"ion-list",2),e.j41(14,"ion-input",3),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.rut,n)||(o.formData.rut=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(15,"ion-input",4),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.nombres,n)||(o.formData.nombres=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(16,"ion-input",5),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.apellidos,n)||(o.formData.apellidos=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(17,"ion-input",6),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.direccion,n)||(o.formData.direccion=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(18,"ion-input",7),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.ciudad,n)||(o.formData.ciudad=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(19,"ion-input",8),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.telefono,n)||(o.formData.telefono=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(20,"ion-input",9),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.correo,n)||(o.formData.correo=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(21,"ion-input",10),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.fechaNacimiento,n)||(o.formData.fechaNacimiento=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(22,"ion-select",11),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.estadoCivil,n)||(o.formData.estadoCivil=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.j41(23,"ion-select-option",12),e.EFF(24,"Soltero(a)"),e.k0s(),e.j41(25,"ion-select-option",13),e.EFF(26,"Casado(a)"),e.k0s(),e.j41(27,"ion-select-option",14),e.EFF(28,"Conviviente Civil"),e.k0s(),e.j41(29,"ion-select-option",15),e.EFF(30,"Divorciado(a)"),e.k0s(),e.j41(31,"ion-select-option",16),e.EFF(32,"Viudo(a)"),e.k0s()(),e.j41(33,"ion-textarea",17),e.mxI("ngModelChange",function(n){return e.DH7(o.formData.comentarios,n)||(o.formData.comentarios=n),n}),e.bIt("ngModelChange",function(){return o.onFormFieldChange()}),e.k0s(),e.j41(34,"div",18)(35,"ion-button",19),e.bIt("click",function(){return o.guardarData()}),e.EFF(36," Guardar "),e.k0s(),e.j41(37,"ion-button",20),e.bIt("click",function(){return o.limpiarFormulario()}),e.EFF(38,"Limpiar"),e.k0s(),e.j41(39,"ion-button",20),e.bIt("click",function(){return o.cerrarFormulario()}),e.EFF(40,"Cerrar"),e.k0s()()()()()),2&i&&(e.Y8G("translucent",!0),e.R7$(13),e.Y8G("ngIf",o.filteredRecords.length>0),e.R7$(),e.R50("ngModel",o.formData.rut),e.R7$(),e.R50("ngModel",o.formData.nombres),e.R7$(),e.R50("ngModel",o.formData.apellidos),e.R7$(),e.R50("ngModel",o.formData.direccion),e.R7$(),e.R50("ngModel",o.formData.ciudad),e.R7$(),e.R50("ngModel",o.formData.telefono),e.R7$(),e.R50("ngModel",o.formData.correo),e.R7$(),e.R50("ngModel",o.formData.fechaNacimiento),e.R7$(),e.R50("ngModel",o.formData.estadoCivil),e.R7$(11),e.Y8G("counter",!0),e.R50("ngModel",o.formData.comentarios),e.R7$(2),e.Y8G("disabled",!o.isFormValid))},dependencies:[s.Sq,s.bT,m.BC,m.YS,m.xh,m.tU,m.R_,m.vS,r.Jm,r.b_,r.I9,r.ME,r.tN,r.W9,r.eU,r.$w,r.uz,r.he,r.nf,r.S1,r.Nm,r.Ip,r.nc,r.BC,r.ai,r.su,r.Je,r.Gw],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";@charset "UTF-8";*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;--color1: #2B7F75;--color2: #F2F5F3;--color3: #192939;--color4: #F3F5F7}ion-toolbar[_ngcontent-%COMP%]{--background: var(--color1);color:var(--color2);font-family:Roboto,sans-serif;text-transform:uppercase}ion-title[_ngcontent-%COMP%]{font-weight:900}ion-card-title[_ngcontent-%COMP%]{margin:30px;text-align:center;font-weight:600}ion-content[_ngcontent-%COMP%]{--background: var(--color2)}ion-input[_ngcontent-%COMP%]{margin-bottom:20px}ion-button[_ngcontent-%COMP%]{--background: var(--color1)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#comentarios[_ngcontent-%COMP%]{height:300px;align-items:\\a0start}']}),d})()}];let C=(()=>{var a;class d{}return(a=d).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[u.iI.forChild(f),u.iI]}),d})(),F=(()=>{var a;class d{}return(a=d).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[s.MD,m.YN,r.bv,C]}),d})()}}]);