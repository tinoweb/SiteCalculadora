var arredondamento=5;var jabet=false;var tabet=false;function abrejuros(){if(jabet==false){jQuery('#alvjuros').load('/cron/indice_aba_juros.html');jabet=true;}}
function abretrab(){if(tabet==false){jQuery('#alvmerc').load('/cron/indice_aba_trabalho.html');tabet=true;}}
function replexp(){var val=jQuery('#TIExp').val();val=val.replace(/⁰/g,'^0');val=val.replace(/¹/g,'^1');val=val.replace(/²/g,'^2');val=val.replace(/³/g,'^3');val=val.replace(/⁴/g,'^4');val=val.replace(/⁵/g,'^5');val=val.replace(/⁶/g,'^6');val=val.replace(/⁷/g,'^7');val=val.replace(/⁸/g,'^8');val=val.replace(/⁹/g,'^9');jQuery('#TIExp').val(val);}
function parsear(val){val=val.replace(/ /gi,'');val=val.toLowerCase();val=val.replace(/([0-9]+)([a-z]+)/gi,'$1*$2');val=val.replace(/([a-z]+)([0-9]+)/gi,'$1*$2');val=val.replace(/\)\(/gi,')*(');val=val.replace(/([a-z]+)\(/gi,'$1*(');val=val.replace(/([0-9]+)\(/gi,'$1*(');val=val.replace(/\)([a-z]+)/gi,')*$1');val=val.replace(/\)([0-9]+)/gi,')*$1');val=val.replace(/,/g,'.');val=val.replace(/;/g,',');val=val.replace(/×/g,'*');val=val.replace(/\^/gi,'**');val=val.replace(/\*e\+/gi,'e+');val=val.replace(/\*e\-/gi,'e-');return val;}
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
function calcula(){var f,r,r2,arr;if(jQuery('#TIExp').val()=='')return;f=parsear(jQuery('#TIExp').val());try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='Erro';}
r2=r;jQuery('#LBSubResu').html('');jQuery('#TIExp').val(formataresultado(r2));if(jQuery(document).width()>1010)jQuery('#TIExp').focus();}
function calculaenter(e){var v;v=e.keyCode;if(v==13)calcula();}
function inserevalor(val){jQuery('#TIExp').val(jQuery('#TIExp').val()+val);calculachange();if(jQuery('#painelcalcdesk').is(':visible')==true){jQuery('#TIExp').focus();}}