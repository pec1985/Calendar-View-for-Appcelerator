var win = Ti.UI.createWindow({backgroundColor:'#9fa2ab'});
var data  = [];

var row = Ti.UI.createTableViewRow({height:'auto',backgroundColor:'#ffffff',id:'date'}); 
var label1 = Ti.UI.createLabel({color:'#516691', width:75,  text: 'Date', textAlign:'right', left:10, height:40, font:{fontWeight:'bold',fontSize:12} });
var label2 = Ti.UI.createLabel({color: '#333', textAlign:'left', left:95, width:190, font:{fontWeight:'bold',fontSize:15} });
row.add(label1);	
row.add(label2);	
data[0] = row;
var tableview = Titanium.UI.createTableView({data:data,style:Titanium.UI.iPhone.TableViewStyle.GROUPED});

win.add(tableview);
win.open();
var date = new Date();	

var year = date.getFullYear();
var month = date.getMonth();
var dayOfMonth = date.getDate();

var thisMonth = null;
if (month == 0){thisMonth="January";}
if (month == 1){thisMonth="February";}
if (month == 2){thisMonth="March";}
if (month == 3){thisMonth="April";}
if (month == 4){thisMonth="May";}
if (month == 5){thisMonth="June";}
if (month == 6){thisMonth="July";}
if (month == 7){thisMonth="Augost";}
if (month == 8){thisMonth="Sept";}
if (month == 9){thisMonth="October";}
if (month == 10){thisMonth="November";}
if (month == 11){thisMonth="December";}

var dateValue = thisMonth+' '+dayOfMonth+' '+year;
var selectedDay = dayOfMonth;
label2.text=dateValue;

tableview.addEventListener('click',function(e){
	if (e.rowData.id == 'date'){
		var win2 = Ti.UI.createWindow({url:'calendar.js',dateValue:dateValue});
		win2.open({modal:true});
		win2.addEventListener('close',function(){
			label2.text=win2.finalDate;
			Ti.API.info(win2.finalDate);
		});
	}
});
