function drawChart(data_){var data=google.visualization.arrayToDataTable(data_);var options={focusTarget:'category',isStacked:false,interpolateNulls:true};var chart=new google.visualization.AreaChart(document.getElementById('chart_div'));chart.draw(data,options);montalista(data_);}
function montalista(data_){var mv1t,mv2t,mv3t,mv4t,mv5t,mv6t,mv7t,mv8t,mv9t,mv10t;var v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,sd;var v1t=1;var v2t=1;var v3t=1;var v4t=1;var v5t=1;var v6t=1;var v7t=1;var v8t=1;var v9t=1;var v10t=1;var v1t_=0;var v2t_=0;var v3t_=0;var v4t_=0;var v5t_=0;var v6t_=0;var v7t_=0;var v8t_=0;var v9t_=0;var v10t_=0;for(var i=0;i<data_.length;i++){if(isNaN(data_[i][1])==false){v1t*=1+(data_[i][1]/100);v2t*=1+(data_[i][2]/100);v3t*=1+(data_[i][3]/100);v4t*=1+(data_[i][4]/100);v5t*=1+(data_[i][5]/100);v6t*=1+(data_[i][6]/100);v7t*=1+(data_[i][7]/100);v8t*=1+(data_[i][8]/100);v9t*=1+(data_[i][9]/100);v10t*=1+(data_[i][10]/100);v1t_+=data_[i][1];v2t_+=data_[i][2];v3t_+=data_[i][3];v4t_+=data_[i][4];v5t_+=data_[i][5];v6t_+=data_[i][6];v7t_+=data_[i][7];v8t_+=data_[i][8];v9t_+=data_[i][9];v10t_+=data_[i][10];}}
if(data_.length>1){mv1t=((v1t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv2t=((v2t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv3t=((v3t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv4t=((v4t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv5t=((v5t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv6t=((v6t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv7t=((v7t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv8t=((v8t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv9t=((v9t_/(data_.length-1)).toFixed(2)+'').replace('.',',');mv10t=((v10t_/(data_.length-1)).toFixed(2)+'').replace('.',',');}else{mv1t=0;mv2t=0;mv3t=0;mv4t=0;mv5t=0;mv6t=0;mv7t=0;mv8t=0;mv9t=0;mv10t=0;}
v1t=(v1t-1)*100;v2t=(v2t-1)*100;v3t=(v3t-1)*100;v4t=(v4t-1)*100;v5t=(v5t-1)*100;v6t=(v6t-1)*100;v7t=(v7t-1)*100;v8t=(v8t-1)*100;v9t=(v9t-1)*100;v10t=(v10t-1)*100;v1t=(v1t.toFixed(2)+'').replace('.',',');v2t=(v2t.toFixed(2)+'').replace('.',',');v3t=(v3t.toFixed(2)+'').replace('.',',');v4t=(v4t.toFixed(2)+'').replace('.',',');v5t=(v5t.toFixed(2)+'').replace('.',',');v6t=(v6t.toFixed(2)+'').replace('.',',');v7t=(v7t.toFixed(2)+'').replace('.',',');v8t=(v8t.toFixed(2)+'').replace('.',',');v9t=(v9t.toFixed(2)+'').replace('.',',');v10t=(v10t.toFixed(2)+'').replace('.',',');sd="<tr><td>Acumulado</td><td>"+v1t+"</td><td>"+v2t+"</td><td>"+v3t+"</td><td>"+v4t+"</td><td>"+v5t+"</td><td>"+v6t+"</td><td>"+v7t+"</td><td>"+v8t+"</td><td>"+v9t+"</td><td>"+v10t+"</td> </tr>";sd+="<tr><td style='border-bottom:2px solid #DDD'>Média</td><td style='border-bottom:2px solid #DDD'>"+mv1t+"</td><td style='border-bottom:2px solid #DDD'>"+mv2t+"</td><td style='border-bottom:2px solid #DDD'>"+mv3t+"</td><td style='border-bottom:2px solid #DDD'>"+mv4t+"</td><td style='border-bottom:2px solid #DDD'>"+mv5t+"</td><td style='border-bottom:2px solid #DDD'>"+mv6t+"</td><td style='border-bottom:2px solid #DDD'>"+mv7t+"</td><td style='border-bottom:2px solid #DDD'>"+mv8t+"</td><td style='border-bottom:2px solid #DDD'>"+mv9t+"</td><td style='border-bottom:2px solid #DDD'>"+mv10t+"</td> </tr>";data_=data_.reverse();for(var i=0;i<(data_.length-1);i++){v1=(data_[i][1]+'').replace('.',',');v2=(data_[i][2]+'').replace('.',',');v3=(data_[i][3]+'').replace('.',',');v4=(data_[i][4]+'').replace('.',',');v5=(data_[i][5]+'').replace('.',',');v6=(data_[i][6]+'').replace('.',',');v7=(data_[i][7]+'').replace('.',',');v8=(data_[i][8]+'').replace('.',',');v9=(data_[i][9]+'').replace('.',',');v10=(data_[i][10]+'').replace('.',',');sd+="<tr><td>"+data_[i][0]+"</td><td>"+v1+"</td><td>"+v2+"</td><td>"+v3+"</td><td>"+v4+"</td><td>"+v5+"</td><td>"+v6+"</td><td>"+v7+"</td><td>"+v8+"</td><td>"+v9+"</td><td>"+v10+"</td> </tr>";}
jQuery('#tblista tbody').html(sd);}
jQuery(document).ready(function(){google.charts.load('current',{'packages':['corechart'],'language':'pt'});jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-indices.php",data:{col:'Data,Geral,Alimentação,Habitação,Artigos Residenciais,Vestuário,Transporte,Comunicação,Saúde,Despesas Pessoais,Educação',cds:data1_,ini:data2_,fim:data3_}}).done(function(msg){a=eval(msg);if(a.length>1)drawChart(a);else jQuery('#chart_div').html('<div class="inputsconvtdv"><p>&nbsp;</p><p>O filtro de datas não retornou valor. Por favor, selecione um intervalo de datas maior que um mês.</p><div>');});if(data4_!=undefined){jQuery('#de_').val(data4_);jQuery('#ate_').val(data5_);}});