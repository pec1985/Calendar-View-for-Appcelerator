var win = Ti.UI.createWindow({backgroundColor:'#9fa2ab'});
var data  = [];

var row = Ti.UI.createTableViewRow({height:'auto',backgroundColor:'#ffffff',id:'date'}); 
var label1 = Ti.UI.createLabel({color:'#516691', width:75,  text: 'Date', textAlign:'right', left:10, height:40, font:{fontWeight:'bold',fontSize:12} });
var label2 = Ti.UI.createLabel({text:'ddd',color: '#333', textAlign:'left', left:95, width:190, font:{fontWeight:'bold',fontSize:15} });
row.add(label1);	
row.add(label2);	
data[0] = row;
var tableview = Titanium.UI.createTableView({data:data,style:Titanium.UI.iPhone.TableViewStyle.GROUPED});

win.add(tableview);
win.open();
tableview.addEventListener('click',function(e){
	if (e.rowData.id == 'date'){
		var win2 = Ti.UI.createWindow({url:'calendar.js'});
		win2.open({modal:true});
		win2.addEventListener('close',function(){
			label2.text=win2.finalDate;
			Ti.API.info(win2.finalDate);
		});
	}
});
