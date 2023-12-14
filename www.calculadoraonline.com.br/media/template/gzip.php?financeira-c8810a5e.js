var modo="A";var arredondamento=16;var ultimaFunc="";var ultimoVal=[];var trigmedida="R";var trigmedidamask='Radianos';var memoria="";var ultimocampo="";var tema="P";var funcoesp=[];var funcoespc=[];var openj=false;var openf=false;var opend=false;function parsear(val){try{for(var k=0;k<funcoesp.length;k++)val=val.replace(new RegExp(funcoesp[k],'g'),funcoesp[k]+'__');}catch(e){}
val=val.replace(/ /gi,'');val=val.toLowerCase();val=val.replace(/([0-9]+)([a-z]+)/gi,'$1*$2');val=val.replace(/([a-z]+)([0-9]+)/gi,'$1*$2');val=val.replace(/\)\(/gi,')*(');val=val.replace(/([a-z]+)\(/gi,'$1*(');val=val.replace(/([0-9]+)\(/gi,'$1*(');val=val.replace(/\)([a-z]+)/gi,')*$1');val=val.replace(/\)([0-9]+)/gi,')*$1');val=val.replace(/,/g,'.');val=val.replace(/;/g,',');val=val.replace(/×/g,'*');val=val.replace(/valoravista\*\(/gi,'valoravista(');val=val.replace(/jcmontante\*\(/gi,'jcmontante(');val=val.replace(/jsmontante\*\(/gi,'jsmontante(');val=val.replace(/montante\*3\*\(/gi,'montante3(');val=val.replace(/montante\*2\*\(/gi,'montante2(');val=val.replace(/montante\*\(/gi,'montante(');val=val.replace(/mediana\*\(/gi,'mediana(');val=val.replace(/fatorar\*\(/gi,'fatorar(');val=val.replace(/inteiro\*\(/gi,'inteiro(');val=val.replace(/pricesd\*\(/gi,'pricesd(');val=val.replace(/pricevp\*\(/gi,'pricevp(');val=val.replace(/pricep\*\(/gi,'pricep(');val=val.replace(/pricej\*\(/gi,'pricej(');val=val.replace(/pricea\*\(/gi,'pricea(');val=val.replace(/pricen\*\(/gi,'pricen(');val=val.replace(/pricei\*\(/gi,'pricei(');val=val.replace(/pricet\*\(/gi,'pricet(');val=val.replace(/acosec\*\(/gi,'acosec(');val=val.replace(/raiz\*3\*\(/gi,'raiz3(');val=val.replace(/acotg\*\(/gi,'acotg(');val=val.replace(/cosec\*\(/gi,'cosec(');val=val.replace(/jciam\*\(/gi,'jciam(');val=val.replace(/jcima\*\(/gi,'jcima(');val=val.replace(/jsiam\*\(/gi,'jsiam(');val=val.replace(/jsima\*\(/gi,'jsima(');val=val.replace(/raizn\*\(/gi,'raizn(');val=val.replace(/delta\*\(/gi,'delta(');val=val.replace(/convt\*\(/gi,'convt(');val=val.replace(/convc\*\(/gi,'convc(');val=val.replace(/dscvd\*\(/gi,'dscvd(');val=val.replace(/dscvd\*\(/gi,'dscvd(');val=val.replace(/dscvn\*\(/gi,'dscvn(');val=val.replace(/dsbvn\*\(/gi,'dsbvn(');val=val.replace(/sacsd\*\(/gi,'sacsd(');val=val.replace(/sacvp\*\(/gi,'sacvp(');val=val.replace(/safsd\*\(/gi,'safsd(');val=val.replace(/safvp\*\(/gi,'safvp(');val=val.replace(/pfrac\*\(/gi,'pfrac(');val=val.replace(/dcrvn\*\(/gi,'dcrvn(');val=val.replace(/dccvn\*\(/gi,'dccvn(');val=val.replace(/dsrvd\*\(/gi,'dsrvd(');val=val.replace(/dsrvn\*\(/gi,'dsrvn(');val=val.replace(/ipcaa\*\(/gi,'ipcaa(');val=val.replace(/ipcac\*\(/gi,'ipcac(');val=val.replace(/ipcai\*\(/gi,'ipcai(');val=val.replace(/ipcap\*\(/gi,'ipcap(');val=val.replace(/samsd\*\(/gi,'samsd(');val=val.replace(/samvp\*\(/gi,'samvp(');val=val.replace(/saasd\*\(/gi,'saasd(');val=val.replace(/saavp\*\(/gi,'saavp(');val=val.replace(/raiz\*\(/gi,'raiz(');val=val.replace(/asen\*\(/gi,'asen(');val=val.replace(/acos\*\(/gi,'acos(');val=val.replace(/asec\*\(/gi,'asec(');val=val.replace(/jcvp\*\(/gi,'jcvp(');val=val.replace(/cotg\*\(/gi,'cotg(');val=val.replace(/medp\*\(/gi,'medp(');val=val.replace(/medh\*\(/gi,'medh(');val=val.replace(/medg\*\(/gi,'medg(');val=val.replace(/jsvp\*\(/gi,'jsvp(');val=val.replace(/perc\*\(/gi,'perc(');val=val.replace(/logc\*\(/gi,'logc(');val=val.replace(/simp\*\(/gi,'simp(');val=val.replace(/objt\*\(/gi,'objt(');val=val.replace(/objp\*\(/gi,'objp(');val=val.replace(/obja\*\(/gi,'obja(');val=val.replace(/objo\*\(/gi,'objo(');val=val.replace(/piso\*\(/gi,'piso(');val=val.replace(/teto\*\(/gi,'teto(');val=val.replace(/frac\*\(/gi,'frac(');val=val.replace(/pint\*\(/gi,'pint(');val=val.replace(/dcra\*\(/gi,'dcra(');val=val.replace(/dcri\*\(/gi,'dcri(');val=val.replace(/dcrn\*\(/gi,'dcrn(');val=val.replace(/dcca\*\(/gi,'dcca(');val=val.replace(/dsri\*\(/gi,'dsri(');val=val.replace(/dsrn\*\(/gi,'dsrn(');val=val.replace(/dsbi\*\(/gi,'dsbi(');val=val.replace(/dsbh\*\(/gi,'dsbh(');val=val.replace(/dcci\*\(/gi,'dcci(');val=val.replace(/dccn\*\(/gi,'dccn(');val=val.replace(/dsci\*\(/gi,'dsci(');val=val.replace(/dscn\*\(/gi,'dscn(');val=val.replace(/dsbn\*\(/gi,'dsbn(');val=val.replace(/sacp\*\(/gi,'sacp(');val=val.replace(/sacj\*\(/gi,'sacj(');val=val.replace(/saca\*\(/gi,'saca(');val=val.replace(/sacn\*\(/gi,'sacn(');val=val.replace(/saci\*\(/gi,'saci(');val=val.replace(/sact\*\(/gi,'sact(');val=val.replace(/safp\*\(/gi,'safp(');val=val.replace(/safj\*\(/gi,'safj(');val=val.replace(/safa\*\(/gi,'safa(');val=val.replace(/safn\*\(/gi,'safn(');val=val.replace(/safi\*\(/gi,'safi(');val=val.replace(/saft\*\(/gi,'saft(');val=val.replace(/samp\*\(/gi,'samp(');val=val.replace(/samj\*\(/gi,'samj(');val=val.replace(/sama\*\(/gi,'sama(');val=val.replace(/samn\*\(/gi,'samn(');val=val.replace(/sami\*\(/gi,'sami(');val=val.replace(/samt\*\(/gi,'samt(');val=val.replace(/saap\*\(/gi,'saap(');val=val.replace(/saaj\*\(/gi,'saaj(');val=val.replace(/saaa\*\(/gi,'saaa(');val=val.replace(/saan\*\(/gi,'saan(');val=val.replace(/saai\*\(/gi,'saai(');val=val.replace(/saat\*\(/gi,'saat(');val=val.replace(/dsc\*\(/gi,'dsc(');val=val.replace(/jcn\*\(/gi,'jcn(');val=val.replace(/jci\*\(/gi,'jci(');val=val.replace(/hip\*\(/gi,'hip(');val=val.replace(/mmc\*\(/gi,'mmc(');val=val.replace(/mdc\*\(/gi,'mdc(');val=val.replace(/med\*\(/gi,'med(');val=val.replace(/rpa\*\(/gi,'rpa(');val=val.replace(/apr\*\(/gi,'apr(');val=val.replace(/exp\*\(/gi,'exp(');val=val.replace(/log\*\(/gi,'log(');val=val.replace(/atg\*\(/gi,'atg(');val=val.replace(/sen\*\(/gi,'sen(');val=val.replace(/cos\*\(/gi,'cos(');val=val.replace(/sec\*\(/gi,'sec(');val=val.replace(/jsn\*\(/gi,'jsn(');val=val.replace(/jsi\*\(/gi,'jsi(');val=val.replace(/pkn\*\(/gi,'pkn(');val=val.replace(/gpa\*\(/gi,'gpa(');val=val.replace(/spa\*\(/gi,'spa(');val=val.replace(/gpg\*\(/gi,'gpg(');val=val.replace(/ppg\*\(/gi,'ppg(');val=val.replace(/spg\*\(/gi,'spg(');val=val.replace(/dpr\*\(/gi,'dpr(');val=val.replace(/abs\*\(/gi,'abs(');val=val.replace(/ale\*\(/gi,'ale(');val=val.replace(/inv\*\(/gi,'inv(');val=val.replace(/akk\*\(/gi,'akk(');val=val.replace(/tkk\*\(/gi,'tkk(');val=val.replace(/fpv\*\(/gi,'fpv(');val=val.replace(/frc\*\(/gi,'frc(');val=val.replace(/dcr\*\(/gi,'dcr(');val=val.replace(/dcc\*\(/gi,'dcc(');val=val.replace(/dsr\*\(/gi,'dsr(');val=val.replace(/dsb\*\(/gi,'dsb(');val=val.replace(/tif\*\(/gi,'tif(');val=val.replace(/dtc\*\(/gi,'dtc(');val=val.replace(/e\*2\*g\*\(/gi,'e2g(');val=val.replace(/ex\*10\*\(/gi,'ex10(');val=val.replace(/tg\*\(/gi,'tg(');val=val.replace(/jc\*\(/gi,'jc(');val=val.replace(/js\*\(/gi,'js(');val=val.replace(/nb\*\(/gi,'nb(');val=val.replace(/cc\*\(/gi,'cc(');val=val.replace(/ac\*\(/gi,'ac(');val=val.replace(/ex\*\(/gi,'ex(');val=val.replace(/ln\*\(/gi,'ln(');val=val.replace(/ar\*\(/gi,'ar(');val=val.replace(/as\*\(/gi,'as(');val=val.replace(/cs\*\(/gi,'cs(');val=val.replace(/cr\*\(/gi,'cr(');val=val.replace(/ps\*\(/gi,'ps(');val=val.replace(/pc\*\(/gi,'pc(');val=val.replace(/lb\*\(/gi,'lb(');val=val.replace(/x\*2\*\(/gi,'x2(');val=val.replace(/x\*3\*\(/gi,'x3(');val=val.replace(/r\*3\*\(/gi,'r3(');val=val.replace(/dl\*\(/gi,'dl(');val=val.replace(/!\(/gi,'fato(');val=val.replace(/%\(/gi,'porc(');val=val.replace(/\*mod\*/gi,'%');val=val.replace(/mod\*\(/gi,'%(');val=val.replace(/\)\*mod/gi,')%');val=val.replace(/([a-z]+)π+/gi,'$1*π');val=val.replace(/([0-9]+)π+/gi,'$1*π');val=val.replace(/π([a-z]+)/gi,'π*$1');val=val.replace(/π([0-9]+)/gi,'π*$1');val=val.replace(/π/gi,Math.PI.toFixed(arredondamento));val=val.replace(/pi$/gi,Math.PI.toFixed(arredondamento));val=val.replace(/\^/gi,'**');val=val.replace(/\*e\+/gi,'e+');val=val.replace(/\*e\-/gi,'e-');try{for(var k=0;k<funcoesp.length;k++)val=val.replace(new RegExp(funcoesp[k]+'__','g'),funcoesp[k]);}catch(e){}
return val;}
function gravabiscoito(nome,valor){var dt,n;dt=new Date();n=dt.getFullYear()+2;dt.setFullYear(n);jQuery.cookie(nome,valor,{expires:dt});}
function carregado(url){var v=false;jQuery('script').each(function(){if(this.src.indexOf(url)>=0)v=true;});return v;}
function mudamodo(md){switch(md){case'A':jQuery('#painelConv').hide('fast');jQuery('.uk-dropdown_').addClass('uk-dropdown');if(carregado("/assets/calc/financeira-a.min.js")==false){var scp=document.createElement('script');scp.src="/assets/calc/financeira-a.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
break;case'C':jQuery('#painelConv').show('fast');jQuery('.uk-dropdown_').html('');jQuery('.uk-dropdown_').removeClass('uk-dropdown');if(carregado("/assets/calc/financeira-c.min.js")==false){var scp=document.createElement('script');scp.src="/assets/calc/financeira-c.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
break;case'E':jQuery('#painelConv').hide('fast');jQuery('.uk-dropdown_').html('');jQuery('.uk-dropdown_').removeClass('uk-dropdown');if(carregado("/assets/calc/financeira-e.min.js")==false){var scp=document.createElement('script');scp.src="/assets/calc/financeira-e.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
break;}}
function mudatema(tm){switch(tm){case'P':jQuery('.ctrig').removeClass('bt5l').removeClass('bt5a').addClass('bt5');jQuery('.cfin').removeClass('bt3l').removeClass('bt3a').addClass('bt3');jQuery('.cest').removeClass('bt4l').removeClass('bt4a').addClass('bt4');jQuery('.ccom').removeClass('bt2l').addClass('bt2');jQuery('.cnum').removeClass('bt1l').addClass('bt1');jQuery('.quadt').removeClass('bt5l').removeClass('bt5a').addClass('bt5');jQuery('.quadf').removeClass('bt3l').removeClass('bt3a').addClass('bt3');jQuery('.quada').removeClass('bt4l').removeClass('bt4a').addClass('bt4');break;case'A':jQuery('.ctrig').removeClass('bt5').removeClass('bt5l').addClass('bt5a');jQuery('.cfin').removeClass('bt3').removeClass('bt3l').addClass('bt3a');jQuery('.cest').removeClass('bt4').removeClass('bt4l').addClass('bt4a');jQuery('.ccom').removeClass('bt2l').addClass('bt2');jQuery('.cnum').removeClass('bt1l').addClass('bt1');jQuery('.quadt').removeClass('bt5').removeClass('bt5l').addClass('bt5a');jQuery('.quadf').removeClass('bt3').removeClass('bt3l').addClass('bt3a');jQuery('.quada').removeClass('bt4').removeClass('bt4l').addClass('bt4a');break;case'L':jQuery('.ctrig').removeClass('bt5').removeClass('bt5a').addClass('bt5l');jQuery('.cfin').removeClass('bt3').removeClass('bt3a').addClass('bt3l');jQuery('.cest').removeClass('bt4').removeClass('bt4a').addClass('bt4l');jQuery('.ccom').removeClass('bt2').addClass('bt2l');jQuery('.cnum').removeClass('bt1').addClass('bt1l');jQuery('.quadt').removeClass('bt5').removeClass('bt5a').addClass('bt5l');jQuery('.quadf').removeClass('bt3').removeClass('bt3a').addClass('bt3l');jQuery('.quada').removeClass('bt4').removeClass('bt4a').addClass('bt4l');break;}
gravabiscoito('tem_f',tm);}
function replexp(){var val=jQuery('#TIExp').val();val=val.replace(/⁰/g,'^0');val=val.replace(/¹/g,'^1');val=val.replace(/²/g,'^2');val=val.replace(/³/g,'^3');val=val.replace(/⁴/g,'^4');val=val.replace(/⁵/g,'^5');val=val.replace(/⁶/g,'^6');val=val.replace(/⁷/g,'^7');val=val.replace(/⁸/g,'^8');val=val.replace(/⁹/g,'^9');jQuery('#TIExp').val(val);}
function testatrat(v){var r,tt=0,p;r=arredondamento;if(r!=16){p=((v+'').indexOf('.')>=0)?(v+'').split('.')[1]:v;switch(parseInt(r)){case 1:tt=0.1;break;case 2:tt=0.01;break;case 3:tt=0.001;break;case 4:tt=0.0001;break;case 5:tt=0.00001;break;}
if(parseFloat('0.'+p)<tt){r=16;}}
return r;}
function arrendtrat(v){var s,r;s=(v+'').split('.');r=v;if(s[1]!=undefined){if(s[1].substr(0,11)=='00000000000'){r=s[0];}
if(s[1].substr(0,11)=='99999999999'){r=parseInt(s[0])+1;}}
return r;}
function formataresultado(val){var r=(val+'').replace(/\./g,',');return r;}
function numseg(n){return(n>=-9007199254740991&&n<=9007199254740991)?n:n.toExponential();}
function calculachange(){var f,r,arr;replexp();f=parsear(jQuery('#TIExp').val());try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='-';}
if(isNaN(r)||f==r)jQuery('#LBSubResu').html('');else jQuery('#LBSubResu').html(formataresultado(r));}
function inserevalor(val){jQuery('#TIExp').val(jQuery('#TIExp').val()+val);calculachange();if(jQuery(document).width()>800){jQuery('#TIExp').focus();}}
function inserefuncao(funcao){jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+funcao);jQuery('#btnfechaprog').click();}
function apagafuncao(obj){var funcs,td;jQuery(obj).remove();funcs='';jQuery('#tbfuncoesprog').find('tr').each(function(){td=jQuery(this).find('td:eq(2)').first();if(jQuery(td).html()!=undefined){funcs+=jQuery(td).html()+'_|_';}});funcs=funcs.substring(0,funcs.length-3);if(funcs=='')jQuery.removeCookie("fun_f");else gravabiscoito('fun_f',funcs);}
function salvarhistorico(){var biscoito='';jQuery('.tbresultado').each(function(){jQuery(this).find('[type=text]').each(function(){biscoito+=this.value+'_|_';});biscoito+=jQuery(this).find('.resu2l1i').text()+'_|_';biscoito+=jQuery(this).find('.italico').text();biscoito+='|-|';});gravabiscoito('his_f',biscoito);}
function limparhistorico(){jQuery('#result').html('');jQuery.removeCookie('his_f');}
function guardarmemoria(){var n;n=(jQuery('#TIExp').val()).replace(/,/g,'.');n=parseFloat(n).toFixed(arredondamento);n=parseFloat(n);memoria=(isNaN(n))?'':formataresultado(n);}
function limpamemoria(){memoria="";}
function alphanum(e){var regex=new RegExp("^[qwertyuiopasdfghjklzxcvbnm_;\(\)]+$");var str=String.fromCharCode(!e.charCode?e.which:e.charCode);if(regex.test(str)){return true;}
e.preventDefault();return false;}
function subfpg(val){val=val.replace(/⁰/g,'^0');val=val.replace(/¹/g,'^1');val=val.replace(/²/g,'^2');val=val.replace(/³/g,'^3');val=val.replace(/⁴/g,'^4');val=val.replace(/⁵/g,'^5');val=val.replace(/⁶/g,'^6');val=val.replace(/⁷/g,'^7');val=val.replace(/⁸/g,'^8');val=val.replace(/⁹/g,'^9');val=val.replace(/\^/g,'**');return val;}
function atzarrayf(){var c,v,i,nom,re='',vv,bi='',ver=true;jQuery.removeCookie('funp_f');for(var k=0;k<funcoesp.length;k++)eval(funcoesp[k]+'=undefined;');funcoesp=[],funcoespc=[];jQuery('#tbfuncoesprogftb tr').each(function(){c='';v='';i=0;jQuery(this).find('input').each(function(){if(i==0)c=this.value;if(i==1)v=subfpg(this.value);i++;});if(c!=''&&v!=''){nom=c.substring(0,c.indexOf('('));if(funcoesp.indexOf(nom)<0){funcoesp.push(nom);funcoespc.push(c+'|_|'+v);bi+=c+'|_|'+v+'|_|'+nom+'|-|';}}});for(var j=0;j<funcoespc.length;j++){vv=funcoespc[j].split('|_|');re+=" function "+vv[0].replace(';',',')+" { return "+vv[1]+"; }; ";}
try{jQuery('#funcoesdin').html('<script>'+re+'</script>');bi=bi.substring(0,bi.length-3);}catch(e){alert('Função inserida não é válida, por favor corrija e tente novamente.');ver=false;}
if(bi=='')ver=false;if(ver==true){gravabiscoito('funp_f',bi);}else{jQuery.removeCookie('funp_f');}}
function apagafunpg(obj){jQuery(obj).remove();atzarrayf();}
function inserefuncpg(obj){inserefuncao(jQuery(obj).find('input:first').val());}
function addnewfunc(){jQuery('#lnrtf').remove();var ct="<tr> <td onclick=\"inserefuncpg(this.parentNode)\" style='cursor:pointer;width:20px' class='uk-dropdown-close' title='Usar'> <i class='uk-icon-mail-forward'></i> </td> "+"<td onclick='apagafunpg(this.parentNode)' style='cursor:pointer;width:20px' title='Apagar'> <i class='uk-icon-close'></i> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Nome da função, ex: funcao(x;y)' onblur='atzarrayf();verifnfunc(this)' onkeypress='alphanum(event)'/> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Matemática da função' onblur='atzarrayf()'/> </td> "+"</tr> ";jQuery('#tbfuncoesprogftb').append(ct);}
function verifnfunc(obj){var v=obj.value;var c=v.indexOf('(');if(c>0){v=v.substring(0,c);if(eval("typeof "+v)=='function'&&funcoesp.indexOf(v)<0){alert('Função já existe. Por favor insira outro nome de função.');obj.value='';}}else obj.value='';}
function menuescolhido(num){var arr,ct,val,m;switch(num){case 1:modo='A';gravabiscoito('mod_f',modo);mudamodo('A');break;case 2:modo='C';gravabiscoito('mod_f',modo);mudamodo('C');break;case 3:modo='E';gravabiscoito('mod_f',modo);mudamodo('E');break;case 4:arredondamento=16;jQuery.removeCookie("arr_f");break;case 5:arredondamento=1;gravabiscoito('arr_f',arredondamento);break;case 6:arredondamento=2;gravabiscoito('arr_f',arredondamento);break;case 7:arredondamento=3;gravabiscoito('arr_f',arredondamento);break;case 8:arredondamento=4;gravabiscoito('arr_f',arredondamento);break;case 9:arredondamento=5;gravabiscoito('arr_f',arredondamento);break;case 10:inserevalor(' '+Math.PI.toFixed(arredondamento));break;case 11:inserevalor(' '+Math.E.toFixed(arredondamento));break;case 12:inserevalor(' '+(1.61803398875).toFixed(arredondamento));break;case 13:inserevalor(' '+Math.sqrt(2).toFixed(arredondamento));break;case 14:inserevalor(' '+(0.57721566490153286060651209008240243).toFixed(arredondamento));break;case 15:arr=(jQuery.cookie('fun_f')==undefined)?[]:decodeURIComponent(jQuery.cookie('fun_f')).split('_|_');ct="<div class='uk-overflow-container' id='tbfuncoesprog'>";if(arr.length>0){ct+="<table style='width:100%;text-align:left'>";ct+="<tr><th colspan='2'></th><th></th></tr>";for(var i=0;i<arr.length;i++){ct+="<tr><td onclick=\"inserefuncao('"+arr[i]+"')\" style='cursor:pointer;width:20px' class='uk-modal-close'> <i class='uk-icon-mail-forward'></i> </td>";ct+="<td onclick='apagafuncao(this.parentNode)' style='cursor:pointer;width:20px'> <i class='uk-icon-close'></i> </td>";ct+="<td style='padding:5px 0px 5px 20px'>"+arr[i]+"</td></tr>";}
ct+="</table>"}else{ct+="Não há expressão salva.";}
ct+="</div>";jQuery('#alvoprogramadosc').html(ct);break;case 16:if(jQuery('#TIExp').val()!=''){val=(jQuery.cookie('fun_f')==undefined)?jQuery('#TIExp').val():decodeURIComponent(jQuery.cookie('fun_f'))+'_|_'+jQuery('#TIExp').val();gravabiscoito('fun_f',val);}
break;case 17:salvarhistorico();break;case 18:limparhistorico();break;case 19:if(memoria!='')m=(memoria+'').replace(/\./g,',');else m='Memória vazia!';jQuery('#alvomemoriac').html(m);break;case 20:if(memoria!=''){m=(memoria+'').replace(/\./g,',');jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+m);}
break;case 21:guardarmemoria();break;case 22:limpamemoria();break;case 23:mudatema('P');break;case 24:mudatema('A');break;case 25:mudatema('L');break;case 26:jQuery('#alvocotacaoc').load('/cron/cotacao_lightbox.html');break;case 27:var pd;arr=funcoespc;ct="<div class='uk-overflow-container' style='padding:5px'>";ct+="<div style='text-align:right;width:100%'><i class='uk-icon-small uk-icon-plus' style='cursor:pointer' title='Adicionar função' onclick='addnewfunc()'></i> </div>";ct+="<table style='width:100%;text-align:left;margin-top:10px' id='tbfuncoesprogftb'>";if(arr.length>0){for(var i=0;i<arr.length;i++){pd=arr[i].split('|_|');if(pd[0]=='')continue;ct+="<tr>"+"<td onclick=\"inserefuncao('"+pd[0]+"')\" style='cursor:pointer;width:20px' class='uk-modal-close' title='Usar'> <i class='uk-icon-mail-forward'></i> </td> "+"<td onclick='apagafunpg(this.parentNode);' style='cursor:pointer;width:20px' title='Apagar'> <i class='uk-icon-close'></i> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Nome da função, ex: funcao(x;y)' onblur='atzarrayf();verifnfunc(this)' onkeypress='alphanum(event)' value='"+pd[0]+"'/> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Matemática da função' onblur='atzarrayf()' value='"+pd[1].replace(/\*\*/g,'^')+"'/> </td> "+"</tr> ";}}else ct+="<tr id='lnrtf'><td colspan='4'> Não há função salva. </td></tr>";ct+='</table>';ct+="<div style='margin-top:30px;text-align:justify'><blockquote style='font-size:12px'> <p>Escreva a função atribuindo um nome seguido de parênteses contendo uma ou mais variáveis separadas por ponto e vírgula (;). No segundo campo, escreva o que a função deve calcular utilizando operadores, funções nativas da calculadora¹ ou outras funções criadas por você. </p>"+"<p> Exemplo 1: minhafuncao(x) | 2*x <br/> Exemplo 2: mediaescolar(a;b;c;d) | (a+b+c+d)/4 <br/> Exemplo 3: areatriangulo(b;h) | (b*h)/2 </p> <p>¹ Consulte a lista de funções nativas da calculadora no final da página, coluna \"Como escrever\".</p></blockquote></div>";jQuery('#alvofprogramadosc').html(ct);break;}}
function cp_exp(val){if(jQuery('#TIExp').val()!='')jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+val);else jQuery('#TIExp').val(val);jQuery('#TIExp').focus();}
function cp_men(val){var n;n=(val+'').replace(/,/g,'.');n=parseFloat(n).toFixed(arredondamento);n=parseFloat(n);memoria=(isNaN(n))?'':formataresultado(n);}
function set_anot(obj){jQuery(obj).find('.Anotacao').focus();}
function fecha_res(obj){jQuery(obj).remove();}
function inserehistorico(exp,val,rot,desc){var r;desc=(desc==undefined)?'':desc;r="<div class='resultado'>"+"<table class='tbresultado'>"+" <tr>"+"  <td style='width:10px'><a class='uk-icon-justify uk-icon-level-up' title='Copiar expressão para o campo' onclick=\"cp_exp('"+exp+"')\"></a></td> "+
((rot)?" <td title='"+exp+"'> <table class='tbresusubtb'><tr><td style='width:40%'><input type='text' value='"+exp+"' onkeypress='return false'></text></td><td class='uk-hidden-small italico' style='width:60%'>"+rot+"</td></tr></table> </td> ":" <td title='"+exp+"'> <input type='text' value='"+exp+"' onkeypress='return false'></text> </td> ")+"  <td style='width:70px;text-align:right'>"+"   <a class='uk-icon-justify uk-icon-hdd-o' title='Copiar resultado para memória' onclick=\"cp_men('"+val+"')\"></a> "+"   <a class='uk-icon-justify uk-icon-edit' title='Anotação' onclick='set_anot(this.parentNode.parentNode.parentNode)'></a> "+"   <a class='uk-icon-justify uk-icon-remove' title='Remover este resultado' onclick='fecha_res(this.parentNode.parentNode.parentNode.parentNode.parentNode)'></a> "+"  </td>"+" </tr>"+" <tr>"+"  <td><a class='uk-icon-justify uk-icon-level-up' style='cursor:pointer' title='Copiar resultado para área de expressão' onclick=\"cp_exp('"+val+"')\"></a></td> "+"  <td colspan='2'><table style='width:100%'><tr><td style='width:60%'> <div class='resu2l1i'>"+val+"</div> </td><td style='width:40%'> <input type='text' class='Anotacao' value='"+desc+"'> </td></tr></table></td> "+" </tr>"+"</table>"+"</div>";jQuery('#result').prepend(r);jQuery('#LBSubResu').html('');}
function calcula(){var f,r,r2,arr;if(jQuery('#TIExp').val()=='')return;if(ultimaFunc!=''){calculaconvencional(ultimaFunc);return;}
f=parsear(jQuery('#TIExp').val());try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='Erro';}
r2=r;inserehistorico(jQuery('#TIExp').val(),formataresultado(r));jQuery('#LBSubResu').html('');jQuery('#TIExp').val(formataresultado(r2));if(jQuery(document).width()>800)jQuery('#TIExp').focus();}
function limpa(){jQuery('#TIExp').val('');calculachange();ultimaFunc='';ultimoVal=[];jQuery('#painelConv').html('&nbsp;');}
function calcula2(exp_,rot){var f,r,r2,arr;f=parsear(exp_);try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='Erro';}
r2=r;inserehistorico(exp_,formataresultado(r),rot);jQuery('#LBSubResu').html('');jQuery('#TIExp').val(formataresultado(r2));if(jQuery(document).width()>800)jQuery('#TIExp').focus();}
function somarmemoria(){calcula2(jQuery('#TIExp').val()+'+'+memoria);}
function subtrairmemoria(){calcula2(jQuery('#TIExp').val()+'-'+memoria);}
function mudatrigmedida(obj){switch(trigmedida){case'R':jQuery(obj).html('Graus');trigmedida='G';trigmedidamask='Graus';break;case'G':jQuery(obj).html('Grad');trigmedida='A';trigmedidamask='Grados';break;case'A':jQuery(obj).html('Rad');trigmedida='R';trigmedidamask='Radianos';break;}}
function calculaenter(e){var v;v=e.keyCode;if(v==13)calcula();}
function precalcula(op,id,ver){if(ver=='d'){switch(modo){case"A":if(jQuery('#'+id).hasClass("uk-open")!=true){jQuery('#dp'+id).html(abtns[parseInt(id.replace('b',''))]);}
break;case"C":calculaconvencional(op);break;case"E":modoexpressao(op);break;}}else{switch(modo){case"A":if(jQuery('#m'+id).hasClass("uk-open")!=true){jQuery('#mdp'+id).html(abtns[parseInt(id.replace('b',''))]);}
break;case"C":calculaconvencional(op);break;case"E":modoexpressao(op);break;}}}
function ins_visor(num){if(ultimocampo==''){if(jQuery('#'+num+'_0').val()=='')jQuery('#'+num+'_0').val(jQuery('#TIExp').val());else jQuery('#'+num+'_0').val(jQuery('#'+num+'_0').val()+' '+jQuery('#TIExp').val());jQuery('#'+num+'_0').focus();}else{if(jQuery('#'+ultimocampo).val()=='')jQuery('#'+ultimocampo).val(jQuery('#TIExp').val());else jQuery('#'+ultimocampo).val(jQuery('#'+ultimocampo).val()+' '+jQuery('#TIExp').val());jQuery('#'+ultimocampo).focus();}}
function ins_men(num){if(ultimocampo==''){if(jQuery('#'+num+'_0').val()=='')jQuery('#'+num+'_0').val(memoria);else jQuery('#'+num+'_0').val(jQuery('#'+num+'_0').val()+' '+memoria);jQuery('#'+num+'_0').focus();}
else{if(jQuery('#'+ultimocampo).val()=='')jQuery('#'+ultimocampo).val(memoria);else jQuery('#'+ultimocampo).val(jQuery('#'+ultimocampo).val()+' '+memoria);jQuery('#'+ultimocampo).focus();}}
function ins_pi(num){if(ultimocampo==''){if(jQuery('#'+num+'_0').val()='')jQuery('#'+num+'_0').val(Math.PI.toFixed(arredondamento));else jQuery('#'+num+'_0').val(jQuery('#'+num+'_0').val()+' '+Math.PI.toFixed(arredondamento));jQuery('#'+num+'_0').focus();}else{if(jQuery('#'+ultimocampo).val()=='')jQuery('#'+ultimocampo).val(Math.PI.toFixed(arredondamento));else jQuery('#'+ultimocampo).val(jQuery('#'+ultimocampo).val()+' '+Math.PI.toFixed(arredondamento));jQuery('#'+ultimocampo).focus();}}
function ultimofield(num){ultimocampo=num;}
function inseremoeda(val){jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+val);jQuery('#btnfechacot').click();}
function trigmedidaconverte(val){switch(trigmedida){case"G":val=val*Math.PI/180;break;case"A":val=val*Math.PI/200;break;}
return val;}
function calcula3(exp_,rot){var f,r,r2;f=parsear(exp_);r=eval(f);r=arrendtrat(r);r2=r;inserehistorico(exp_,r,rot);jQuery('#LBSubResu').html('');jQuery('#TIExp').val(r2);}
function calculadireto(){var f,r,arr;if(jQuery('#TIExp').val()=='')return;f=parsear(jQuery('#TIExp').val());try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='Erro';}
jQuery('#LBSubResu').html('');jQuery('#TIExp').val('');return formataresultado(r);}
function abacarreg(aba){switch(aba){case'd':jQuery('#hlp_d').click();if(jQuery('#hlp_d').html()=='')jQuery('#hlp_d').load('/assets/embed/financeira-ajuda-descontos.html');break;case'f':jQuery('#hlp_f').click();if(jQuery('#hlp_f').html()=='')jQuery('#hlp_f').load('/assets/embed/financeira-ajuda-financiamento.html');break;case'i':jQuery('#hlp_i').click();if(jQuery('#hlp_i').html()=='')jQuery('#hlp_i').load('/assets/embed/financeira-ajuda-indices.html');break;case'o':jQuery('#hlp_o').click();if(jQuery('#hlp_o').html()=='')jQuery('#hlp_o').load('/assets/embed/financeira-ajuda-outros.html');break;}}
function fechaabinha(id_){if(jQuery(document).width()<=800){jQuery('#mb'+id_).click();}else{jQuery('#b'+id_).click();}}
function buskcmda(){var v=jQuery('#buskcmda_').val();if(v.length>=3){jQuery('#buskcre_').val("<div style='text-align:center;padding-top:130px'><i class='uk-icon-refresh uk-icon-spin uk-icon-large'></i><h3>&nbsp;&nbsp;&nbsp;Carregando...</h3></div>");jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-cotacao.php",data:{op:'lstmd',val:v}}).done(function(msg){if(msg=='<table style="width:100%"></table>')jQuery('#buskcre_').html("<div style='width:100%;text-align:center'>Não encontrado.</div>");else jQuery('#buskcre_').html(msg);});}}
jQuery(document).ready(function(){var cb,v,fp,p,re='',vv;if(jQuery(document).width()>800)jQuery('#TIExp').focus();if(jQuery.cookie('arr_f')!=undefined)arredondamento=parseInt(jQuery.cookie('arr_f'));if(jQuery.cookie('mod_f')!=undefined){modo=jQuery.cookie('mod_f');}else{if(jQuery(document).width()<=800){modo='C';if(jQuery.cookie('arr_f')==undefined)arredondamento=5;}else modo='A';}
mudamodo(modo);if(jQuery.cookie('his_f')!=undefined){cb=jQuery.cookie('his_f').split('|-|');cb=cb.reverse();for(var i=0;i<cb.length;i++){v=cb[i].split('_|_');if(v[0]!='')inserehistorico(v[0],v[2],v[3],v[1]);}}
if(jQuery.cookie('tem_f')!=undefined){tema=jQuery.cookie('tem_f');mudatema(tema);}
if(jQuery.cookie('funp_f')!=undefined){if(jQuery.cookie('funp_f')!=''){fp=jQuery.cookie('funp_f').split('|-|');for(var i=0;i<fp.length;i++){p=fp[i].split('|_|');funcoesp.push(p[2]);funcoespc.push(p[0]+'|_|'+p[1]);}
for(var j=0;j<funcoespc.length;j++){vv=funcoespc[j].split('|_|');if(vv[0]=='')continue;re+=" function "+vv[0].replace(';',',')+" { return "+vv[1]+"; }; ";}
jQuery('#funcoesdin').html('<script>'+re+'</script>');}else{jQuery.removeCookie('funp_f');}}
jQuery('#TIExp').val('');if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();google.charts.load('current',{'packages':['corechart'],'language':'pt'});});function insereAjax(val){jQuery('#TIExp').val(val);}
function habilita(aba){switch(aba){case'j':if(openj==false){jQuery('#divj').load('/assets/embed/financeira-juros.html');var script=document.createElement('script');script.src='/assets/calc/financeira-juros.min.js';document.getElementsByTagName('head')[0].appendChild(script);openj=true;}
break;case'f':if(openf==false){jQuery('#divf').load('/assets/embed/financeira-financiamento.html');var script=document.createElement('script');script.src='/assets/calc/financeira-financiamento.min.js';document.getElementsByTagName('head')[0].appendChild(script);openf=true;}
break;case'd':if(opend==false){jQuery('#divd').load('/assets/embed/financeira-descontos.html');var script=document.createElement('script');script.src='/assets/calc/financeira-desconto.min.js';document.getElementsByTagName('head')[0].appendChild(script);opend=true;}
break;}}
function x2(v){return Math.pow(v,2);}
function x3(v){return Math.pow(v,3);}
function exp(a,b){return Math.pow(a,b);}
function raizn(a,b){if(a>=0)return Math.pow(a,1/b);else{if(b%2==0)return Math.pow(a,1/b);else return-1*Math.pow(-1*a,1/b);}}
function raiz3(a){if(a>=0)return Math.pow(a,1/3);else return-1*Math.pow(-1*a,1/3);}
function raiz(v){return Math.sqrt(v);}
function log(a,b){return Math.log(a)/Math.log(b);}
function porc(a,b){return parseFloat(a)/100*b;}
function perc(a,b){return parseFloat(a)/parseFloat(b);}
function fato(x){var resultado=1;for(cont=1;cont<=x;cont++){resultado=resultado*cont;}
return resultado;}
function sen(a){return Math.sin(trigmedidaconverte(a));}
function cos(a){return Math.cos(trigmedidaconverte(a));}
function tg(a){return Math.tan(trigmedidaconverte(a));}
function r3(a,b,c){return(parseFloat(c)*parseFloat(b))/parseFloat(a);}
function jcmontante(p,i,n){return parseFloat(p)*Math.pow(1+(parseFloat(i)/100),parseFloat(n));}
function jc(p,i,n){return jcmontante(p,i,n)-parseFloat(p);}
function jcvp(m,i,n){return parseFloat(m)/(Math.pow(1+(parseFloat(i)/100),parseFloat(n)))}
function jcn(p,i,m){return Math.log(parseFloat(m)/parseFloat(p))/Math.log(1+(parseFloat(i)/100));}
function jci(p,n,m){return(Math.pow(parseFloat(m)/parseFloat(p),1/parseFloat(n))-1)*100;}
function jciam(ia){return(Math.pow(1+parseFloat(ia)/100,1/12)-1)*100;}
function jcima(im){return(Math.pow(1+parseFloat(im)/100,12)-1)*100;}
function jsmontante(p,i,n){return p*(1+(parseFloat(i)/100)*parseFloat(n));}
function js(p,i,n){return parseFloat(p)*(parseFloat(i)/100)*parseFloat(n);}
function jsvp(m,i,n){return parseFloat(m)/(1+(parseFloat(i)/100)*parseFloat(n));}
function jsn(p,i,m){return(parseFloat(m)-parseFloat(p))/(parseFloat(p)*(parseFloat(i)/100));}
function jsi(p,n,m){return((parseFloat(m)-parseFloat(p))/(parseFloat(p)*parseFloat(n)))*100;}
function jsiam(ia){return parseFloat(ia)/12;}
function jsima(im){return parseFloat(im)*12;}
function valoravista(r,i,n){return parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/((parseFloat(i)/100)*Math.pow(1+parseFloat(i)/100,parseFloat(n))));}
function cotg(x){return Math.cos(trigmedidaconverte(x))/Math.sin(trigmedidaconverte(x));}
function sec(x){return 1/Math.cos(trigmedidaconverte(x));}
function cosec(x){return 1/Math.sin(trigmedidaconverte(x));}
function asen(x){return Math.asin(trigmedidaconverte(x));}
function acos(x){return Math.acos(trigmedidaconverte(x));}
function atg(x){return Math.atan(trigmedidaconverte(x));}
function hip(x,y){return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));}
function mmc(ar){var c,cont,fat,ver,veri,d,verif_,verif,resu;ar=ar.split(',');c=2;cont=true;fat=new Array();ver=false;while(cont){veri=new Array();for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d==0){ar[i]=parseInt(eval(ar[i]))/c;ver=true;}
veri.push(eval(ar[i]));}
if(ver)fat.push(c);verif_=false
for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))%c==0)verif_=true;if(verif_==false)c++;else c=2;ver=false;verif=false;for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))!=1)verif=true;if(verif==false)cont=false;}
resu=1;for(var i=0;i<fat.length;i++){resu=resu*parseInt(fat[i]);}
return resu;}
function mdc(ar){var c,comm,cont,fat,ver,veri_,d,verif_,veri,verif,resu;ar=ar.split(',');c=2;comm=new Array();cont=true;fat=new Array();ver=false;while(cont){veri_=true;for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d!=0)veri_=false;}
if(veri_==true){comm.push(c);}
veri=new Array();for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d==0){ar[i]=parseInt(eval(ar[i]))/c;ver=true;}else veri_=false;veri.push(eval(ar[i]));}
if(ver)fat.push(c);verif_=false
for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))%c==0)verif_=true;if(verif_==false)c++;else c=2;ver=false;verif=false;for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))!=1)verif=true;if(verif==false)cont=false;}
resu=1;for(var i=0;i<comm.length;i++){resu=resu*parseInt(comm[i]);}
return resu;}
function med(ar){ar=ar.split(',');var tot=0;for(var i=0;i<ar.length;i++){tot+=parseFloat(eval(ar[i]));}
return tot/ar.length;}
function medg(ar){ar=ar.split(',');var tot=1;for(var i=0;i<ar.length;i++){tot*=parseFloat(eval(ar[i]));}
return Math.pow(tot,1/ar.length);}
function medh(ar){ar=ar.split(',');var tot=0;for(var i=0;i<ar.length;i++){tot+=1/parseFloat(eval(ar[i]));}
return ar.length/tot;}
function medp(ar){var tot,den,prov;ar=ar.split(',');tot=0;den=0;for(var i=0;i<ar.length;i++){prov=ar[i].split('*');tot+=parseFloat(eval(prov[0]))*parseFloat(eval(prov[1]));den+=parseFloat(eval(prov[1]));}
return tot/den;}
function mediana(ar){ar=ar.split(',');var tot=0;if(ar.length%2==0){tot=(parseFloat(eval(ar[parseInt(ar.length/2)-1]))+parseFloat(eval(ar[parseInt(ar.length/2)])))/2;}else{tot=eval(ar[parseInt(ar.length/2)]);}
return tot;}
function cc(r){r=r.split(',');return 2*parseFloat(r)*Math.PI;}
function ac(r){r=r.split(',');return Math.pow(parseFloat(r),2)*Math.PI;}
function acotg(x){return Math.PI/2-Math.atan(trigmedidaconverte(x));}
function asec(x){return Math.acos(1/trigmedidaconverte(x));}
function acosec(x){return Math.asin(1/trigmedidaconverte(x));}
function delta(a,b,c){return Math.pow(b,2)-4*a*c;}
function apr(x){return(parseFloat(x)*Math.PI)/180;}
function rpa(x){return 180*parseFloat(x)/Math.PI;}
function ex(x){return Math.pow(Math.E,parseFloat(x));}
function ln(x){return log(parseFloat(x),Math.E);}
function lb(x){return log(parseFloat(x),2);}
function ex10(x){return Math.pow(10,parseFloat(x));}
function ar(n,r){return exp(parseFloat(n),parseFloat(r));}
function as(n,r){return fato(parseFloat(n))/fato(parseFloat(n)-parseFloat(r));}
function cs(n,r){return fato(parseFloat(n))/(fato(parseFloat(n)-parseFloat(r))*fato(parseFloat(r)));}
function cr(x,y){return fato(parseFloat(x)+parseFloat(y)-1)/(fato(parseFloat(y))*(fato(parseFloat(x)-1)));}
function ps(x){return fato(parseFloat(x));}
function pc(x){return fato(parseFloat(x)-1);}
function dpr(a,x,b,y,c){var val=parseFloat(a)*parseFloat(x)+parseFloat(b)*parseFloat(y)+parseFloat(c);val=(val<0)?val*-1:val;var val2=Math.sqrt(Math.pow(parseFloat(a),2)+Math.pow(parseFloat(b),2));return val/val2;}
function gpa(a,r,n){return parseFloat(a)+(parseFloat(n)-1)*parseFloat(r);}
function spa(a1,an,n){return((parseFloat(a1)+parseFloat(an))*parseFloat(n))/2;}
function gpg(a1,q,n){return parseFloat(a1)*Math.pow(parseFloat(q),parseFloat(n)-1);}
function ppg(a1,q,n){return Math.pow(parseFloat(a1),parseFloat(n))*Math.pow(parseFloat(q),(parseFloat(n)*(parseFloat(n)-1))/2);}
function spg(a1,q,n){return(parseFloat(a1)*(Math.pow(parseFloat(q),parseFloat(n))-1))/(parseFloat(q)-1);}
function nb(n,p){return fato(parseInt(n))/(fato(parseInt(p))*fato(parseInt(n)-parseInt(p)));}
function pkn(k,n,p){return nb(parseFloat(n),parseFloat(k))*Math.pow(parseFloat(p),parseFloat(k))*Math.pow(1-parseFloat(p),parseFloat(n)-parseFloat(k));}
function fatorar(nr){var partes='';nr=parseInt(nr);while(nr>1){for(var i=2;i<=nr;i++){if(nr%i)continue;partes+='*'+i;nr=nr/i;break;}}
return partes.substring(1);}
function abs(x){return Math.sqrt(Math.pow(parseFloat(x),2));}
function pfrac(x){var a=(x+'').split('.');return(a[1]==undefined)?'0':'0.'+a[1];}
function pint(x){return parseInt(x);}
function ale(min,max){return Math.floor(Math.random()*(parseInt(max)-parseInt(min)))+parseInt(min);}
function piso(x){return Math.floor(parseFloat(x));}
function teto(x){return Math.ceil(parseFloat(x));}
function inv(x){return 1/parseFloat(x);}
function frac(x){var p,a,b;p=(x+'').split('.');a=p[0];b=p[1];return(b==undefined)?'Erro':simp(a+''+b,Math.pow(10,b.length));}
function simp(n,d){var a,b,c;a=mdc(n+','+d);b=parseInt(n)/parseInt(a);c=parseInt(d)/parseInt(a);return b+'/'+c;}
function montante(vp,r,i,n){return jcmontante(vp,i,n)+parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100));}
function montante2(vp,r,i,n,s){return jcmontante(vp,i,n)+parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100))-parseFloat(s)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100));}
function montante3(vp,r,ii,n,s,f){var i=parseFloat(ii)-parseFloat(f);return jcmontante(vp,i,n)+parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100))-parseFloat(s)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100));}
function dcr(vn,i,n){return parseFloat(vn)-(parseFloat(vn)/Math.pow(1+(parseFloat(i)/100),parseFloat(n)));}
function dcra(vn,i,n){return parseFloat(vn)/Math.pow(1+(parseFloat(i)/100),parseFloat(n));}
function dcrvn(a,i,n){return parseFloat(a)*Math.pow(1+(parseFloat(i)/100),parseFloat(n));}
function dcri(N,a,n){return 100*(Math.pow(parseFloat(N)/parseFloat(a),1/parseFloat(n))-1);}
function dcrn(a,N,i){return Math.log(parseFloat(N)/parseFloat(a))/Math.log(1+(parseFloat(i)/100));}
function dsb(N,i,n,h){return parseFloat(N)*((parseFloat(i)/100)*parseFloat(n)+(parseFloat(h)/100));}
function dsbi(N,h,n,Db){return 100*((parseFloat(Db)-parseFloat(N)*(parseFloat(h)/100))/(parseFloat(N)*parseFloat(n)));}
function dsbh(N,i,n,Db){return 100*((parseFloat(Db)-parseFloat(N)*(parseFloat(i)/100)*parseFloat(n))/parseFloat(N));}
function dcc(vn,i,n){return parseFloat(vn)-(parseFloat(vn)*Math.pow(1-(parseFloat(i)/100),parseFloat(n)));}
function dcca(vn,i,n){return parseFloat(vn)*Math.pow(1-(parseFloat(i)/100),parseFloat(n));}
function dccvn(a,i,n){return parseFloat(a)/Math.pow(1-(parseFloat(i)/100),parseFloat(n));}
function dcci(a,N,n){return 100*(1-Math.pow(parseFloat(a)/parseFloat(N),1/parseFloat(n)));}
function dccn(a,N,i){return Math.log(parseFloat(a)/parseFloat(N))/Math.log(1-(parseFloat(i)/100));}
function dsbvn(Db,i,n,h){return parseFloat(Db)/((parseFloat(i)/100)*parseFloat(n)+(parseFloat(h)/100));}
function dsbn(N,h,i,Db){return(parseFloat(Db)-parseFloat(N)*(parseFloat(h)/100))/(parseFloat(N)*(parseFloat(i)/100));}
function tif(D,a,n){return 100*(parseFloat(D)/(parseFloat(n)*parseFloat(a)));}
function objt(o,vp,r,i){return Math.log(((parseFloat(i)/100)*parseFloat(o)+parseFloat(r))/(parseFloat(r)+(parseFloat(i)/100)*parseFloat(vp)))/Math.log(1+(parseFloat(i)/100));}
function objp(o,vp,n,i){return((parseFloat(i)/100)*parseFloat(o)-(parseFloat(i)/100)*parseFloat(vp)*Math.pow(1+(parseFloat(i)/100),parseFloat(n)))/(Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1);}
function obja(o,t,p,i){return(parseFloat(o)*(parseFloat(i)/100)-parseFloat(p)*(Math.pow(1+(parseFloat(i)/100),parseFloat(t))-1))/((parseFloat(i)/100)*Math.pow(1+(parseFloat(i)/100),parseFloat(t)));}
function objo(t,a,p,i){return(parseFloat(p)*(Math.pow(1+(parseFloat(i)/100),parseFloat(t))-1))/(parseFloat(i)/100)+parseFloat(a)*Math.pow(1+(parseFloat(i)/100),parseFloat(t));}
function akk(vp,n,i){return((parseFloat(i)/100)*1000000-(parseFloat(i)/100)*parseFloat(vp)*Math.pow(1+(parseFloat(i)/100),parseFloat(n)))/(Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1);}
function tkk(vp,r,i){return Math.log(((parseFloat(i)/100)*1000000+parseFloat(r))/(parseFloat(r)+(parseFloat(i)/100)*parseFloat(vp)))/Math.log(1+(parseFloat(i)/100));}
function sacp(vp,i,n,t){return(parseFloat(vp)/parseFloat(n))*(1+(parseFloat(n)-parseFloat(t)+1)*(parseFloat(i)/100));}
function saca(vp,n){return parseFloat(vp)/parseFloat(n);}
function sacvp(pmt,i,n,t){return(parseFloat(pmt)*parseFloat(n))/(1+(parseFloat(i)/100)*(parseFloat(n)-parseFloat(t)+1));}
function sacn(pmt,pv,i,t){return(parseFloat(pv)*(parseFloat(i)/100)*parseFloat(t)-parseFloat(pv)-parseFloat(pv)*(parseFloat(i)/100))/(parseFloat(pv)*(parseFloat(i)/100)-parseFloat(pmt));}
function saci(vp,n,t,pmt){return 100*((parseFloat(pmt)*parseFloat(n)-parseFloat(vp))/(parseFloat(vp)*(parseFloat(n)-parseFloat(t)+1)));}
function sacsd(vp,n,t){return parseFloat(vp)-((parseFloat(vp)/parseFloat(n))*parseFloat(t));}
function sacj(vp,i,n,t){return(parseFloat(vp)/parseFloat(n))*(parseFloat(n)-parseFloat(t)+1)*(parseFloat(i)/100);}
function sact(vp,i,n){var re=0;if(isNaN(n)==false){for(var t=1;t<=parseInt(n);t++){re+=sacp(vp,i,n,t);}}
return re;}
function safp(vp,i,n){return parseFloat(vp)/((1-(1/Math.pow(1+(parseFloat(i)/100),parseFloat(n))))/(parseFloat(i)/100));}
function safj(pmt,i,n,t){return(parseFloat(i)/100)*safsd(pmt,i,n,(parseFloat(t)-1));}
function safa(pv,pmt,i,t){return(parseFloat(pmt)-parseFloat(pv)*(parseFloat(i)/100))*Math.pow(1+(parseFloat(i)/100),parseFloat(t)-1);}
function safsd(pmt,i,n,t){return parseFloat(pmt)*((1-(1/Math.pow(1+(parseFloat(i)/100),parseFloat(n)-parseFloat(t))))/(parseFloat(i)/100));}
function safvp(pmt,i,n){return parseFloat(pmt)*(1-1/Math.pow(1+(parseFloat(i)/100),n))/(parseFloat(i)/100);}
function safn(pmt,vp,i){return Math.log(parseFloat(pmt)/(parseFloat(pmt)-parseFloat(vp)*(parseFloat(i)/100)))/Math.log(1+(parseFloat(i)/100));}
function safi(a1,an,t){return 100*(raizn(parseFloat(an)/parseFloat(a1),(parseFloat(t)-1))-1);}
function saft(vp,i,n){return parseFloat(n)*safp(vp,i,n);}
function fpv(i,n){return(1-Math.pow(1+(parseFloat(i)/100),-1*parseFloat(n)))/(parseFloat(i)/100);}
function pricep(vp,i,n){return parseFloat(vp)/frc(i,n);}
function pricej(pmt,i,n,t){return(parseFloat(i)/100)*pricesd(pmt,i,n,(parseFloat(t)-1));}
function pricea(vp,pmt,i,t){return(parseFloat(pmt)-(parseFloat(vp)*(parseFloat(i)/100)))*Math.pow(1+(parseFloat(i)/100),parseFloat(t)-1);}
function pricesd(pmt,i,n,t){return parseFloat(pmt)*((1-(1/Math.pow(1+(parseFloat(i)/100),parseFloat(n)-parseFloat(t))))/(parseFloat(i)/100));}
function pricevp(pmt,i,n){return parseFloat(pmt)*(1-1/Math.pow(1+(parseFloat(i)/100),n))/(parseFloat(i)/100);}
function pricen(pmt,vp,i){return Math.log(parseFloat(pmt)/(parseFloat(pmt)-parseFloat(vp)*(parseFloat(i)/100)))/Math.log(1+(parseFloat(i)/100));}
function pricei(a1,an,t){return 100*(raizn(parseFloat(an)/parseFloat(a1),(parseFloat(t)-1))-1);}
function pricet(vp,i,n){return parseFloat(n)*pricep(vp,i,n);}
function frc(i,n){return(1-Math.pow(1+(parseFloat(i)/100),-1*parseFloat(n)))/(parseFloat(i)/100);}
function samp(vp,i,n,t){return(sacp(vp,i,n,t)+safp(vp,i,n))/2;}
function samj(vp,pmt,i,n,t){return(sacj(vp,i,n,t)+safj(pmt,i,n,t))/2;}
function sama(vp,pmt,i,n,t){return(saca(vp,n)+safa(vp,pmt,i,t))/2;}
function samsd(vp,pmt,i,n,t){return(sacsd(vp,n,t)+safsd(pmt,i,n,t))/2;}
function samvp(pmt,i,n,t){return((2*Math.pow((parseFloat(i)/100)+1,parseFloat(n))-2)*parseFloat(n))*parseFloat(pmt)/(-1*((((parseFloat(i)/100)*Math.pow((parseFloat(i)/100)+1,parseFloat(n))-(parseFloat(i)/100))*parseFloat(t)+((parseFloat(i)/100)-2*(parseFloat(i)/100)*Math.pow((parseFloat(i)/100)+1,parseFloat(n)))*parseFloat(n)+((-1*(parseFloat(i)/100))-1)*Math.pow((parseFloat(i)/100)+1,parseFloat(n))+(parseFloat(i)/100)+1)));}
function samn(vp,pmt,i,atz,t){return parseFloat(vp)/(2*parseFloat(atz)-(parseFloat(pmt)-parseFloat(vp)*(parseFloat(i)/100))*Math.pow(1+(parseFloat(i)/100),parseFloat(t)-1));}
function sami(vp,pmt,n,atz1){return 100*((2*parseFloat(atz1)-parseFloat(pmt)-(parseFloat(vp)/parseFloat(n)))/(-1*parseFloat(vp)));}
function samt(vp,i,n){var saf=safp(vp,i,n);var re=0;if(isNaN(n)==false){for(var t=1;t<=parseInt(n);t++){re+=(saf+sacp(vp,i,n,t))/2;}}
return re;}
function saap(vp,i,n,t){return(parseFloat(n)==parseFloat(t))?parseFloat(vp)+parseFloat(vp)*(parseFloat(i)/100):parseFloat(vp)*(parseFloat(i)/100);}
function saaa(vp,n,t){return(parseFloat(n)==parseFloat(t))?parseFloat(vp):0;}
function saavp(pmt,i,n,t){return(parseFloat(n)==parseFloat(t))?parseFloat(pmt)/((parseFloat(i)/100)+1):parseFloat(pmt)/(parseFloat(i)/100);}
function saan(tot,vp,i){return(parseFloat(tot)-parseFloat(vp)*((parseFloat(i)/100)+1))/((parseFloat(i)/100)*parseFloat(vp))+1;}
function saai(vp,pmt,n,t){return(parseFloat(n)==parseFloat(t))?100*(parseFloat(pmt)/parseFloat(vp)-1):100*(parseFloat(pmt)/parseFloat(vp));}
function saaj(vp,n,i,t){return(t==n)?vp+(parseFloat(i)/100)*parseFloat(vp):(parseFloat(i)/100)*parseFloat(vp);}
function saasd(vp,n,t){return(parseFloat(n)==parseFloat(t))?0:parseFloat(vp);}
function saat(vp,i,n){return(parseFloat(n)-1)*saap(vp,i,n,1)+saap(vp,i,n,n);}
function selic(d,m,a){jQuery('#selic_').html('');jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-consulta.php",data:{tipo:"se_ul",dia:d,mes:m,ano:a}}).done(function(val_){insereAjax((val_+'').replace('.',','));inserehistorico('Selic em '+d+'/'+m+'/'+a+' (% a.d.)',val_.replace('.',','));jQuery('#selic_').html('SELIC');});}
function ipca(d,m,a){jQuery('#ipca_').html('');jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-consulta.php",data:{tipo:"ip_ul",dia:d,mes:m,ano:a}}).done(function(val_){insereAjax((val_+'').replace('.',','));inserehistorico('IPCA em '+d+'/'+m+'/'+a+' (Var. Mensal)',val_.replace('.',','));jQuery('#ipca_').html('IPCA');});}
function ipcaa(d1,d2){jQuery('#ipcaa_').html('');jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-consulta.php",data:{tipo:"ip_ac",di:d1,df:d2}}).done(function(val_){insereAjax((val_+'').replace('.',','));inserehistorico('IPCA acumulado de '+d1+' até '+d2,val_.replace('.',','));jQuery('#ipcaa_').html('IPCA A');});}
function ipcac(val,d1,d2){jQuery('#ipcac_').html('');jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-consulta.php",data:{tipo:"ip_co",v:val,di:d1,df:d2}}).done(function(val_){insereAjax((val_+'').replace('.',','));inserehistorico('Valor corrigido pela inflação ('+d1+' até '+d2+')',val_.replace('.',','));jQuery('#ipcac_').html('IPCA C');});}
function ipcai(val,d1,d2){jQuery('#ipcai_').html('');jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-consulta.php",data:{tipo:"ip_pi",v:val,di:d1,df:d2}}).done(function(val_){insereAjax((val_+'').replace('.',','));inserehistorico('Valor após inflação ('+d1+' até '+d2+')',val_.replace('.',','));jQuery('#ipcai_').html('IPCA I');});}
function ipcap(val,d1,d2){jQuery('#ipcap_').html('');jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-consulta.php",data:{tipo:"ip_pe",v:val,di:d1,df:d2}}).done(function(val_){insereAjax((val_+'').replace('.',','));inserehistorico('Perdido para inflação ('+d1+' até '+d2+')',val_.replace('.',','));jQuery('#ipcap_').html('IPCA P');});}
function dl(vp,r,n){return(parseFloat(vp)-parseFloat(r))/parseFloat(n);}
function dtc(vp,i,t){var re=parseFloat(vp);if(isNaN(t)==false){for(c=0;c<parseInt(t);c++){re-=re*(parseFloat(i)/100);}}else re='erro';return re;}
function dsr(no,i,n){return(parseFloat(no)*(parseFloat(i)/100)*parseFloat(n))/(1+(parseFloat(i)/100)*parseFloat(n));}
function dsc(no,i,n){return parseFloat(no)*(parseFloat(i)/100)*parseFloat(n);}
function dsrvd(no,i,n){return parseFloat(no)-(parseFloat(no)*(parseFloat(i)/100)*parseFloat(n))/(1+(parseFloat(i)/100)*parseFloat(n));}
function dscvd(no,i,n){return parseFloat(no)-(parseFloat(no)*(parseFloat(i)/100)*parseFloat(n));}
function dsrvn(a,i,n){return parseFloat(a)*(1+(parseFloat(i)/100)*parseFloat(n));}
function dscvn(a,i,n){return parseFloat(a)/(1-(parseFloat(i)/100)*parseFloat(n));}
function dsri(a,no,n){return(parseFloat(no)-parseFloat(a))/(parseFloat(a)*parseFloat(n))*100;}
function dsci(a,no,n){return((parseFloat(no)-parseFloat(a))/(parseFloat(no)*parseFloat(n)))*100;}
function dsrn(a,no,i){return(parseFloat(no)-parseFloat(a))/(parseFloat(a)*(parseFloat(i)/100));}
function dscn(a,no,i){return(parseFloat(no)-parseFloat(a))/(parseFloat(no)*(parseFloat(i)/100));}
function tempotrans(val,t1,t2){val=(val+'').replace(',','.');val=parseFloat(val);var re=0;switch(t1){case'dia':switch(t2){case'dia':re=val;break;case'mes':re=val*30;break;case'semestre':re=val*30*6;break;case'ano':re=val*30*12;break;}
break;case'mes':switch(t2){case'dia':re=val/30;break;case'mes':re=val;break;case'semestre':re=val*6;break;case'ano':re=val*12;break;}
break;case'semestre':switch(t2){case'dia':re=val/(30*6);break;case'mes':re=val/6;break;case'semestre':re=val;break;case'ano':re=val*2;break;}
break;case'ano':switch(t2){case'dia':re=val/365;break;case'mes':re=val/12;break;case'semestre':re=val/2;break;case'ano':re=val;break;}
break;}
return re;}
function jurostrans(tipo,val,t1,t2){var re=0;val=(val+'').replace(',','.');val=parseFloat(val);if(tipo=='s'){switch(t1){case'dia':switch(t2){case'dia':re=val;break;case'mes':re=val*30;break;case'semestre':re=val*30*6;break;case'ano':re=val*30*12;break;}
break;case'mes':switch(t2){case'dia':re=val/30;break;case'mes':re=val;break;case'semestre':re=val*6;break;case'ano':re=val*12;break;}
break;case'semestre':switch(t2){case'dia':re=val/(30*6);break;case'mes':re=val/6;break;case'semestre':re=val;break;case'ano':re=val*2;break;}
break;case'ano':switch(t2){case'dia':re=val/365;break;case'mes':re=val/12;break;case'semestre':re=val/2;break;case'ano':re=val;break;}
break;}}else{switch(t1){case'dia':switch(t2){case'dia':re=val;break;case'mes':re=(Math.pow(1+parseFloat(val)/100,30)-1)*100;break;case'semestre':re=(Math.pow(1+parseFloat(val)/100,180)-1)*100;break;case'ano':re=(Math.pow(1+parseFloat(val)/100,365)-1)*100;break;}
break;case'mes':switch(t2){case'dia':re=(Math.pow(1+parseFloat(val)/100,1/30)-1)*100;break;case'mes':re=val;break;case'semestre':re=(Math.pow(1+parseFloat(val)/100,6)-1)*100;break;case'ano':re=(Math.pow(1+parseFloat(val)/100,12)-1)*100;break;}
break;case'semestre':switch(t2){case'dia':re=(Math.pow(1+parseFloat(val)/100,1/180)-1)*100;break;case'mes':re=(Math.pow(1+parseFloat(val)/100,1/6)-1)*100;break;case'semestre':re=val;break;case'ano':re=(Math.pow(1+parseFloat(val)/100,2)-1)*100;break;}
break;case'ano':switch(t2){case'dia':re=(Math.pow(1+parseFloat(val)/100,1/365)-1)*100
break;case'mes':re=(Math.pow(1+parseFloat(val)/100,1/12)-1)*100
break;case'semestre':re=(Math.pow(1+parseFloat(val)/100,1/2)-1)*100
break;case'ano':re=val;break;}
break;}}
return re;}