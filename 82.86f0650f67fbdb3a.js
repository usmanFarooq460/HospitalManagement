"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[82],{3082:(D,p,u)=>{u.r(p),u.d(p,{PatientsModule:()=>$});var r=u(9808),m=u(5059),a=u(4182),g=u(7416),l=u(4366),f=u(5168),t=u(5e3),c=u(520),U=u(2340);let Z=(()=>{class n{constructor(e){this.http=e,this.header=new c.WM({"Content-Type":"application/json"}),this.apiUrl=U.N.apiUrl}savePatients(e){return this.http.post(this.apiUrl+"addPatients/addNew",e,{headers:this.header})}getPatientsHistory(){return this.http.get(this.apiUrl+"addPatients/getAll",{headers:this.header})}updatePatients(e,i){return this.http.put(this.apiUrl+"addPatients/update/"+e,i,{headers:this.header})}deletePatient(e){return this.http.delete(this.apiUrl+"addPatients/delete/"+e,{headers:this.header})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(c.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=u(7433),A=u(7184),h=u(8743),T=u(6945);function C(n,o){1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                            Required\n                        "),t.qZA())}function q(n,o){if(1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                        "),t.YNc(2,C,2,0,"div",8),t._uU(3,"\n                    "),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.form.Name.errors.required)}}function N(n,o){1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                            Required\n                        "),t.qZA())}function P(n,o){if(1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                        "),t.YNc(2,N,2,0,"div",8),t._uU(3,"\n                    "),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.form.fatherName.errors.required)}}function x(n,o){1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                            Required\n                        "),t.qZA())}function y(n,o){if(1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                        "),t.YNc(2,x,2,0,"div",8),t._uU(3,"\n                    "),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.form.Age.errors.required)}}function b(n,o){1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                            Required\n                        "),t.qZA())}function I(n,o){if(1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                        "),t.YNc(2,b,2,0,"div",8),t._uU(3,"\n                    "),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.form.contactNo.errors.required)}}function J(n,o){1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                            Required\n                        "),t.qZA())}function S(n,o){if(1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                        "),t.YNc(2,J,2,0,"div",8),t._uU(3,"\n                    "),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.form.CNIC_No.errors.required)}}function w(n,o){1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                            Required\n                        "),t.qZA())}function Q(n,o){if(1&n&&(t.TgZ(0,"div",45),t._uU(1,"\n                        "),t.YNc(2,w,2,0,"div",8),t._uU(3,"\n                    "),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.form.City.errors.required)}}function M(n,o){if(1&n&&(t.TgZ(0,"option",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.s9C("value",e.status),t.xp6(1),t.hij("\n                            ",e.status,"\n                        ")}}function F(n,o){if(1&n&&(t.TgZ(0,"option",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.s9C("value",e.gender),t.xp6(1),t.hij("\n                            ",e.gender,"\n                        ")}}function Y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",47),t.NdJ("click",function(){return t.CHM(e),t.oxw().Save()}),t._uU(1,"\n                Save\n            "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.loaderOn_Save_Update)}}function H(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",47),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return s.update(s.updateId)}),t._uU(1,"\n                Update\n            "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.loaderOn_Save_Update)}}function O(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",48),t.NdJ("click",function(){return t.CHM(e),t.oxw().clear()}),t._uU(1,"\n                clear\n            "),t.qZA()}}function k(n,o){1&n&&(t.TgZ(0,"div",49),t._uU(1,"\n            No Data Found\n        "),t.qZA())}function L(n,o){1&n&&(t.TgZ(0,"div",50),t._uU(1,"\n            "),t._UZ(2,"app-loader"),t._uU(3,"\n        "),t.qZA())}function V(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",51),t._uU(1,"\n            "),t.TgZ(2,"div",52),t._uU(3,"\n                "),t.TgZ(4,"div",53),t._uU(5),t.qZA(),t._uU(6,"\n                "),t.TgZ(7,"div",54),t._uU(8,"\n                    "),t.TgZ(9,"div",55),t._uU(10,"\n                        "),t.TgZ(11,"i",56),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().getById(d)}),t.qZA(),t._uU(12,"\n                    "),t.qZA(),t._uU(13,"\n                    "),t.TgZ(14,"div",57),t._uU(15,"\n                        "),t.TgZ(16,"i",58),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().deleteStaff(d._id)}),t.qZA(),t._uU(17,"\n                    "),t.qZA(),t._uU(18,"\n                "),t.qZA(),t._uU(19,"\n            "),t.qZA(),t._uU(20,"\n            "),t.TgZ(21,"div",59),t._uU(22,"\n                "),t.TgZ(23,"div",60),t._uU(24,"\n                    "),t.TgZ(25,"div",61),t._uU(26,"Father Name"),t.qZA(),t._uU(27,"\n                    "),t.TgZ(28,"div",62),t._uU(29),t.qZA(),t._uU(30,"\n                "),t.qZA(),t._uU(31,"\n                "),t.TgZ(32,"div",60),t._uU(33,"\n                    "),t.TgZ(34,"div",61),t._uU(35,"PhoneNo"),t.qZA(),t._uU(36,"\n                    "),t.TgZ(37,"div",62),t._uU(38),t.qZA(),t._uU(39,"\n                "),t.qZA(),t._uU(40,"\n                "),t.TgZ(41,"div",60),t._uU(42,"\n                    "),t.TgZ(43,"div",61),t._uU(44,"Age"),t.qZA(),t._uU(45,"\n                    "),t.TgZ(46,"div",62),t._uU(47),t.qZA(),t._uU(48,"\n                "),t.qZA(),t._uU(49,"\n                "),t.TgZ(50,"div",60),t._uU(51,"\n                    "),t.TgZ(52,"div",61),t._uU(53,"CNIC_No"),t.qZA(),t._uU(54,"\n                    "),t.TgZ(55,"div",62),t._uU(56),t.ALo(57,"date"),t.qZA(),t._uU(58,"\n                "),t.qZA(),t._uU(59,"\n                "),t.TgZ(60,"div",60),t._uU(61,"\n                    "),t.TgZ(62,"div",61),t._uU(63,"City"),t.qZA(),t._uU(64,"\n                    "),t.TgZ(65,"div",62),t._uU(66),t.qZA(),t._uU(67,"\n                "),t.qZA(),t._uU(68,"\n                "),t.TgZ(69,"div",60),t._uU(70,"\n                    "),t.TgZ(71,"div",61),t._uU(72,"Contact No"),t.qZA(),t._uU(73,"\n                    "),t.TgZ(74,"div",62),t._uU(75),t.qZA(),t._uU(76,"\n                "),t.qZA(),t._uU(77,"\n                "),t.TgZ(78,"div",60),t._uU(79,"\n                    "),t.TgZ(80,"div",61),t._uU(81,"Marital Status"),t.qZA(),t._uU(82,"\n                    "),t.TgZ(83,"div",62),t._uU(84),t.qZA(),t._uU(85,"\n                "),t.qZA(),t._uU(86,"\n                "),t.TgZ(87,"div",60),t._uU(88,"\n                    "),t.TgZ(89,"div",61),t._uU(90,"Gender"),t.qZA(),t._uU(91,"\n                    "),t.TgZ(92,"div",62),t._uU(93),t.qZA(),t._uU(94,"\n                "),t.qZA(),t._uU(95,"\n                "),t.TgZ(96,"div",60),t._uU(97,"\n                    "),t.TgZ(98,"div",61),t._uU(99,"Address"),t.qZA(),t._uU(100,"\n                    "),t.TgZ(101,"div",62),t._uU(102),t.qZA(),t._uU(103,"\n                "),t.qZA(),t._uU(104,"\n            "),t.qZA(),t._uU(105,"\n        "),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(5),t.Oqu(e.Name),t.xp6(24),t.Oqu(e.fatherName),t.xp6(9),t.Oqu(e.PhoneNo),t.xp6(9),t.Oqu(e.Age),t.xp6(9),t.Oqu(t.xi3(57,10,e.CNIC_No,"mediumDate")),t.xp6(10),t.Oqu(e.City),t.xp6(9),t.Oqu(e.contactNo),t.xp6(9),t.Oqu(e.MaritalStatus),t.xp6(9),t.Oqu(e.Gender),t.xp6(9),t.Oqu(e.Address)}}function G(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-warning-popups",63),t.NdJ("closePopup",function(s){return t.CHM(e),t.oxw().closeNotification(s)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("isSuccessPopup",!0)("Message",e.message)}}function E(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-warning-popups",64),t.NdJ("closePopup",function(s){return t.CHM(e),t.oxw().closeNotification(s)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("isWarningPopup",!0)("Message",e.message)}}function R(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-warning-popups",65),t.NdJ("closePopup",function(s){return t.CHM(e),t.oxw().closeNotification(s)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("isErrorPopup",!0)("Message",e.message)}}const _=function(n){return{invalid_field:n}},B=function(n){return{for_no_data:n}},K=function(n){return{"max-height":n}},j=[{path:"",component:(()=>{class n extends f.c{constructor(e,i){super(),this.service=e,this.formBuilder=i,this.allPatientsHistoryList=[],this.maritalStatusList=[{status:"Married"},{status:"Single"}],this.GenderList=[{gender:"Male"},{gender:"Female"}],this.initForm()}initForm(){this.formdata=this.formBuilder.group({Name:[null,[a.kI.required]],fatherName:[null,[a.kI.required]],Age:[null,[a.kI.required]],CNIC_No:[null,[a.kI.required]],City:[null,[a.kI.required]],contactNo:[null,[a.kI.required]],MaritalStatus:[null],Gender:[null],Address:[null]})}get form(){return this.formdata.controls}ngOnInit(){this.getPatientsHistory()}getById(e){this.updateId=e._id,this.formdata.patchValue(e),this.formdata.patchValue({staffType:e.staffType._id})}getPatientsHistory(){this.isLoading=!0,this.service.getPatientsHistory().subscribe(e=>{this.isLoading=!1,this.allPatientsHistoryList=e},e=>{this.isLoading=!1,this.errorPopup(e.message)})}clear(){this.updateId=null,this.initForm()}Save(){0!=this.formdata.valid?(this.loaderOn_Save_Update=!0,this.service.savePatients(this.formdata.value).subscribe(e=>{this.loaderOn_Save_Update=!1,this.SuccessPopup("Successfully added"),this.getPatientsHistory(),this.clear()},e=>{this.loaderOn_Save_Update=!1,this.errorPopup(e.message)})):this.formdata.markAllAsTouched()}update(e){this.formdata.invalid?this.formdata.markAllAsTouched():(this.loaderOn_Save_Update=!0,this.service.updatePatients(this.updateId,this.formdata.value).subscribe(i=>{this.SuccessPopup("Data has updated"),this.clear(),this.loaderOn_Save_Update=!1,this.getPatientsHistory()},i=>{this.errorPopup(i.message)}))}deleteStaff(e){console.log("id for delete : ",e),this.service.deletePatient(e).subscribe(i=>{this.SuccessPopup("Deleted Successfully"),console.log("deleted: ",i),this.getPatientsHistory()},i=>{console.log("err in deleting ",i),this.errorPopup(i.message)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z),t.Y36(a.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-patients"]],features:[t.qOj],decls:169,vars:47,consts:[[3,"heading","icon"],[1,"form"],[3,"formGroup"],[1,"row","ml-1"],[1,"col-md-4","col-6","m-0","p-1"],[1,"form_group"],["for","Name"],["type","text","id","Name","formControlName","Name","placeholder","Name",1,"form_control",3,"ngClass"],["class","invalid-feedback d-block",4,"ngIf"],[1,"col-md-3","col-6","m-0","p-1"],["for","fatherName"],["type","text","id","fatherName","formControlName","fatherName","placeholder","Father Name",1,"form_control",3,"ngClass"],["for","Age"],["type","number","id","Age","formControlName","Age","placeholder","Age",1,"form_control",3,"ngClass"],["for","contactNo"],["type","text","id","contactNo","formControlName","contactNo","placeholder","Contact No",1,"form_control",3,"ngClass"],["for","CNIC_No"],["type","text","id","CNIC_No","formControlName","CNIC_No","placeholder","CNIC No",1,"form_control",3,"ngClass"],["for","City"],["type","text","id","City","formControlName","City","placeholder","City",1,"form_control",3,"ngClass"],[1,"col-md-3","col-6","mr-0","p-1"],["for","MaritalStatus"],["name","MaritalStatus","id","MaritalStatus","formControlName","MaritalStatus",1,"form_control"],["value","null"],[3,"value",4,"ngFor","ngForOf"],["for","Gender"],["name","Gender","id","Gender","formControlName","Gender",1,"form_control"],[1,"col-md-6","col-6","m-0","p-1"],["for","Address"],["type","text","id","Address","formControlName","Address","placeholder","City",1,"form_control"],[1,"text-right"],["style","margin-top: 18px","type","submit","class","btn blue-color focused-button text-white btn-sm",3,"disabled","click",4,"ngIf"],["type","submit","style","margin-top: 18px","class","btn blue-color focused-button text-white btn-sm",3,"disabled","click",4,"ngIf"],["type","button","style","margin-top: 18px","class","btn blue-color focused-button text-white btn-sm",3,"click",4,"ngIf"],[1,"search_wrape"],["type","text","placeholder","search",1,"search",3,"keyup"],[1,"canvas_view",3,"ngClass","ngStyle"],["class","",4,"ngIf"],["class","no_data_found_in_canvas",4,"ngIf"],["class","custom_card",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],[3,"isSuccessPopup","Message","closePopup",4,"ngIf"],[3,"isWarningPopup","Message","closePopup",4,"ngIf"],[3,"isErrorPopup","Message","closePopup",4,"ngIf"],[1,"invalid-feedback","d-block"],[3,"value"],["type","submit",1,"btn","blue-color","focused-button","text-white","btn-sm",2,"margin-top","18px",3,"disabled","click"],["type","button",1,"btn","blue-color","focused-button","text-white","btn-sm",2,"margin-top","18px",3,"click"],[1,""],[1,"no_data_found_in_canvas"],[1,"custom_card"],[1,"header_edit_delete"],[1,"Header"],[1,"delete_Edit_btns","edit-delete-wrape"],[1,"edit-icon"],[1,"mdi","mdi-grease-pencil","cursor_pointer",3,"click"],[1,"delete-icon"],[1,"mdi","mdi-delete-forever","cursor_pointer",3,"click"],[1,"Card_body"],[1,"caption_value_wrape"],[1,"caption"],[1,"value"],[3,"isSuccessPopup","Message","closePopup"],[3,"isWarningPopup","Message","closePopup"],[3,"isErrorPopup","Message","closePopup"]],template:function(e,i){1&e&&(t._UZ(0,"page-title",0),t._uU(1,"\n\n"),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.TgZ(4,"form",2),t._uU(5,"\n        "),t.TgZ(6,"div",3),t._uU(7,"\n            "),t.TgZ(8,"div",4),t._uU(9,"\n                "),t.TgZ(10,"div",5),t._uU(11,"\n                    "),t.TgZ(12,"label",6),t._uU(13,"Name"),t.qZA(),t._uU(14,"\n                    "),t._UZ(15,"input",7),t._uU(16,"\n                    "),t.YNc(17,q,4,1,"div",8),t._uU(18,"\n                "),t.qZA(),t._uU(19,"\n            "),t.qZA(),t._uU(20,"\n            "),t.TgZ(21,"div",9),t._uU(22,"\n                "),t.TgZ(23,"div",5),t._uU(24,"\n                    "),t.TgZ(25,"label",10),t._uU(26,"Father Name"),t.qZA(),t._uU(27,"\n                    "),t._UZ(28,"input",11),t._uU(29,"\n                    "),t.YNc(30,P,4,1,"div",8),t._uU(31,"\n                "),t.qZA(),t._uU(32,"\n            "),t.qZA(),t._uU(33,"\n            "),t.TgZ(34,"div",9),t._uU(35,"\n                "),t.TgZ(36,"div",5),t._uU(37,"\n                    "),t.TgZ(38,"label",12),t._uU(39,"Age"),t.qZA(),t._uU(40,"\n                    "),t._UZ(41,"input",13),t._uU(42,"\n                    "),t.YNc(43,y,4,1,"div",8),t._uU(44,"\n                "),t.qZA(),t._uU(45,"\n            "),t.qZA(),t._uU(46,"\n            "),t.TgZ(47,"div",9),t._uU(48,"\n                "),t.TgZ(49,"div",5),t._uU(50,"\n                    "),t.TgZ(51,"label",14),t._uU(52,"Contact No"),t.qZA(),t._uU(53,"\n                    "),t._UZ(54,"input",15),t._uU(55,"\n                    "),t.YNc(56,I,4,1,"div",8),t._uU(57,"\n                "),t.qZA(),t._uU(58,"\n            "),t.qZA(),t._uU(59,"\n            "),t.TgZ(60,"div",9),t._uU(61,"\n                "),t.TgZ(62,"div",5),t._uU(63,"\n                    "),t.TgZ(64,"label",16),t._uU(65,"CNIC No"),t.qZA(),t._uU(66,"\n                    "),t._UZ(67,"input",17),t._uU(68,"\n                    "),t.YNc(69,S,4,1,"div",8),t._uU(70,"\n                "),t.qZA(),t._uU(71,"\n            "),t.qZA(),t._uU(72,"\n            "),t.TgZ(73,"div",9),t._uU(74,"\n                "),t.TgZ(75,"div",5),t._uU(76,"\n                    "),t.TgZ(77,"label",18),t._uU(78,"City"),t.qZA(),t._uU(79,"\n                    "),t._UZ(80,"input",19),t._uU(81,"\n                    "),t.YNc(82,Q,4,1,"div",8),t._uU(83,"\n                "),t.qZA(),t._uU(84,"\n            "),t.qZA(),t._uU(85,"\n\n            "),t.TgZ(86,"div",20),t._uU(87,"\n                "),t.TgZ(88,"div",5),t._uU(89,"\n                    "),t.TgZ(90,"label",21),t._uU(91,"Marital Status"),t.qZA(),t._uU(92,"\n                    "),t.TgZ(93,"select",22),t._uU(94,"\n                        "),t.TgZ(95,"option",23),t._uU(96,"Select Marital Status"),t.qZA(),t._uU(97,"\n                        "),t.YNc(98,M,2,2,"option",24),t._uU(99,"\n                    "),t.qZA(),t._uU(100,"\n                "),t.qZA(),t._uU(101,"\n            "),t.qZA(),t._uU(102,"\n            "),t.TgZ(103,"div",20),t._uU(104,"\n                "),t.TgZ(105,"div",5),t._uU(106,"\n                    "),t.TgZ(107,"label",25),t._uU(108,"Gender"),t.qZA(),t._uU(109,"\n                    "),t.TgZ(110,"select",26),t._uU(111,"\n                        "),t.TgZ(112,"option",23),t._uU(113,"Select Gender"),t.qZA(),t._uU(114,"\n                        "),t.YNc(115,F,2,2,"option",24),t._uU(116,"\n                    "),t.qZA(),t._uU(117,"\n                "),t.qZA(),t._uU(118,"\n            "),t.qZA(),t._uU(119,"\n            "),t.TgZ(120,"div",27),t._uU(121,"\n                "),t.TgZ(122,"div",5),t._uU(123,"\n                    "),t.TgZ(124,"label",28),t._uU(125,"Address"),t.qZA(),t._uU(126,"\n                    "),t._UZ(127,"input",29),t._uU(128,"\n                "),t.qZA(),t._uU(129,"\n            "),t.qZA(),t._uU(130,"\n\n        "),t.qZA(),t._uU(131,"\n\n        "),t.TgZ(132,"div",30),t._uU(133,"\n            "),t.YNc(134,Y,2,1,"button",31),t._uU(135,"\n            "),t.YNc(136,H,2,1,"button",32),t._uU(137,"\n            "),t.YNc(138,O,2,0,"button",33),t._uU(139,"\n        "),t.qZA(),t._uU(140,"\n    "),t.qZA(),t._uU(141,"\n\n\n    "),t.TgZ(142,"div",34),t._uU(143,"\n        "),t.TgZ(144,"input",35),t.NdJ("keyup",function(d){return i.HandleSearchChange(d.target.value)}),t.qZA(),t._uU(145,"\n    "),t.qZA(),t._uU(146,"\n    "),t.TgZ(147,"div",36),t._uU(148,"\n        "),t.YNc(149,k,2,0,"div",37),t._uU(150,"\n        "),t.YNc(151,L,4,0,"div",38),t._uU(152,"\n        "),t.YNc(153,V,106,13,"div",39),t.ALo(154,"filterByAllProperties"),t._uU(155,"\n    "),t.qZA(),t._uU(156,"\n\n    "),t.TgZ(157,"div",40),t._uU(158,"\n        "),t.TgZ(159,"div",41),t._uU(160,"\n            "),t.YNc(161,G,1,2,"app-warning-popups",42),t._uU(162,"\n            "),t.YNc(163,E,1,2,"app-warning-popups",43),t._uU(164,"\n            "),t.YNc(165,R,1,2,"app-warning-popups",44),t._uU(166,"\n        "),t.qZA(),t._uU(167,"\n    "),t.qZA(),t._uU(168,"\n"),t.qZA()),2&e&&(t.Q6J("heading","Patients")("icon","mdi mdi-account-multiple"),t.xp6(4),t.Q6J("formGroup",i.formdata),t.xp6(11),t.Q6J("ngClass",t.VKq(31,_,i.form.Name.invalid&&i.form.Name.touched)),t.xp6(2),t.Q6J("ngIf",i.form.Name.invalid&&i.form.Name.touched),t.xp6(11),t.Q6J("ngClass",t.VKq(33,_,i.form.fatherName.invalid&&i.form.fatherName.touched)),t.xp6(2),t.Q6J("ngIf",i.form.fatherName.invalid&&i.form.fatherName.touched),t.xp6(11),t.Q6J("ngClass",t.VKq(35,_,i.form.Age.invalid&&i.form.Age.touched)),t.xp6(2),t.Q6J("ngIf",i.form.Age.invalid&&i.form.Age.touched),t.xp6(11),t.Q6J("ngClass",t.VKq(37,_,i.form.contactNo.invalid&&i.form.contactNo.touched)),t.xp6(2),t.Q6J("ngIf",i.form.contactNo.invalid&&i.form.contactNo.touched),t.xp6(11),t.Q6J("ngClass",t.VKq(39,_,i.form.CNIC_No.invalid&&i.form.CNIC_No.touched)),t.xp6(2),t.Q6J("ngIf",i.form.CNIC_No.invalid&&i.form.CNIC_No.touched),t.xp6(11),t.Q6J("ngClass",t.VKq(41,_,i.form.City.invalid&&i.form.City.touched)),t.xp6(2),t.Q6J("ngIf",i.form.City.invalid&&i.form.City.touched),t.xp6(16),t.Q6J("ngForOf",i.maritalStatusList),t.xp6(17),t.Q6J("ngForOf",i.GenderList),t.xp6(19),t.Q6J("ngIf",null==i.updateId||null==i.updateId),t.xp6(2),t.Q6J("ngIf",null!=i.updateId||null!=i.updateId),t.xp6(2),t.Q6J("ngIf",null!=i.updateId||null!=i.updateId),t.xp6(9),t.Q6J("ngClass",t.VKq(43,B,!((null==i.allPatientsHistoryList?null:i.allPatientsHistoryList.length)>0)))("ngStyle",t.VKq(45,K,i.gridHeight+"px")),t.xp6(2),t.Q6J("ngIf",!((null==i.allPatientsHistoryList?null:i.allPatientsHistoryList.length)>0)&&0==i.isLoading),t.xp6(2),t.Q6J("ngIf",i.isLoading&&!((null==i.allPatientsHistoryList?null:i.allPatientsHistoryList.length)>0)),t.xp6(2),t.Q6J("ngForOf",t.xi3(154,28,i.allPatientsHistoryList,i.searchValue)),t.xp6(8),t.Q6J("ngIf",i.isSucessPopupVisible),t.xp6(2),t.Q6J("ngIf",i.isWarningPopupVisible),t.xp6(2),t.Q6J("ngIf",i.isErrorPopupVisible))},directives:[v.T,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,r.mk,r.O5,a.wV,a.EJ,a.YN,a.Kr,r.sg,r.PC,A.R,h.V],pipes:[T.m,r.uU],styles:[""]}),n})()}];let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(j)],l.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,W,m.a,a.UX,a.u5,g.T]]}),n})()}}]);