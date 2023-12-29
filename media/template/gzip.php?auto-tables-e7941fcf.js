const SORT_TYPES={INT:"int",STRING:"string",DATE:"date",};Date.prototype.valid=function(){return isFinite(this);}
jQuery(document).ready(function(){loadAllTableText();addEventListeners();if(jQuery('.tablesort th.tablesort-default').length){jQuery('.tablesort th.tablesort-default').trigger('click');}
jQuery.expr[':'].contains=function(a,i,m){return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;};});function addEventListeners(){jQuery('body').on('click','.tablesort th',function(){tableSort(this);});jQuery('.tablesearch-input').on('keyup',function(){tableSearch(this);});}
function tableSort(thClicked){var table=jQuery(thClicked).closest('.tablesort');var columnIndex=getCellIndex(thClicked);var rows=jQuery(table).find('tbody tr');var sortType;if(jQuery(thClicked).data('tablesort-type'))
sortType=jQuery(thClicked).attr('data-tablesort-type');else
sortType=determineType(thClicked);if(jQuery(thClicked).hasClass('tablesort-asc')){jQuery(table).find('thead th').removeClass('tablesort-asc').removeClass('tablesort-desc');jQuery(thClicked).addClass('tablesort-desc');switch(sortType){case SORT_TYPES.INT:rows=sortRowsIntDesc(rows,columnIndex);break;case SORT_TYPES.DATE:rows=sortRowsDateDesc(rows,columnIndex);break;default:rows=sortRowsStringDesc(rows,columnIndex);break;}}
else{jQuery(table).find('thead th').removeClass('tablesort-asc').removeClass('tablesort-desc');jQuery(thClicked).addClass('tablesort-asc');switch(sortType){case SORT_TYPES.INT:rows=sortRowsInt(rows,columnIndex);break;case SORT_TYPES.DATE:rows=sortRowsDate(rows,columnIndex);break;default:rows=sortRowsString(rows,columnIndex);break;}}
jQuery(table).find('tbody').html(rows);}
function determineType(thClicked){var table=jQuery(thClicked).closest('.tablesort');var columnIndex=getCellIndex(thClicked);var rows=jQuery(table).find('tbody tr');var isString=false;for(var count=0;count<rows.length;count++){var cells=jQuery(rows[count]).find('td');var cellValue=jQuery(cells[columnIndex]).text();if(jQuery.isNumeric(cellValue)==false)
isString=true;}
if(isString)
return SORT_TYPES.STRING;else
return SORT_TYPES.INT;}
function getCellIndex(th){var index=jQuery(th).closest('table').find('tr').find(th).index();return index;}
function sortRowsString(rows,columnIndex){var sortedRows=rows.sort(function(a,b){var cellsA=jQuery(a).find('td');var cellsB=jQuery(b).find('td');var textA=jQuery(cellsA[columnIndex]).text().toUpperCase();var textB=jQuery(cellsB[columnIndex]).text().toUpperCase();return textA<textB?-1:1;});return sortedRows;}
function sortRowsStringDesc(rows,columnIndex){var sortedRows=rows.sort(function(a,b){var cellsA=jQuery(a).find('td');var cellsB=jQuery(b).find('td');var textA=jQuery(cellsA[columnIndex]).text().toUpperCase();var textB=jQuery(cellsB[columnIndex]).text().toUpperCase();return textA>textB?-1:1;});return sortedRows;}
function sortRowsInt(rows,columnIndex){var sortedRows=rows.sort(function(a,b){var cellsA=jQuery(a).find('td');var cellsB=jQuery(b).find('td');var numA=parseFloat(jQuery(cellsA[columnIndex]).text().trim().replace(' ','').replace(',','.'));var numB=parseFloat(jQuery(cellsB[columnIndex]).text().trim().replace(' ','').replace(',','.'));return numA<numB?-1:1;});return sortedRows;}
function sortRowsIntDesc(rows,columnIndex){var sortedRows=rows.sort(function(a,b){var cellsA=jQuery(a).find('td');var cellsB=jQuery(b).find('td');var numA=parseFloat(jQuery(cellsA[columnIndex]).text().trim().replace(' ','').replace(',','.'));var numB=parseFloat(jQuery(cellsB[columnIndex]).text().trim().replace(' ','').replace(',','.'));return numA>numB?-1:1;});return sortedRows;}
function sortRowsDate(rows,columnIndex){var sortedRows=rows.sort(function(a,b){var cellsA=jQuery(a).find('td');var cellsB=jQuery(b).find('td');var dateA=new Date(jQuery(cellsA[columnIndex]).text());var dateB=new Date(jQuery(cellsB[columnIndex]).text());return dateA<dateB?-1:1;});return sortedRows;}
function sortRowsDateDesc(rows,columnIndex){var sortedRows=rows.sort(function(a,b){var cellsA=jQuery(a).find('td');var cellsB=jQuery(b).find('td');var dateA=new Date(jQuery(cellsA[columnIndex]).text());var dateB=new Date(jQuery(cellsB[columnIndex]).text());return dateA>dateB?-1:1;});return sortedRows;}
function isValidDate(dateString){var testDate=new Date(dateString);return testDate.valid();}
function loadAllTableText(){var tablesearchTables=jQuery('.tablesearch-table');for(var count=0;count<tablesearchTables.length;count++)
loadTableText(tablesearchTables[count]);}
function loadTableText(table){var cells=jQuery(table).find('tbody td.tablesearch-source');if(cells.length===0){cells=jQuery(table).find('tbody td');}
for(var count=0;count<cells.length;count++){var cell=cells[count];var upperCaseText=jQuery(cell).text().trim().toUpperCase();jQuery(cell).attr('data-tablesearch-text',upperCaseText);}}
function tableSearch(input){var text=jQuery(input).val().toUpperCase();var table=jQuery(input).attr('data-tablesearch-table');if(text==''||text.length<2){jQuery(table).find('tbody tr').removeClass('uk-hidden');return;}
jQuery(table).find('tbody tr').addClass('uk-hidden');jQuery(table+' td:contains("'+text+'")').closest('tr').removeClass('uk-hidden');}