var win = Ti.UI.currentWindow;
win.backgroundColor='#9fa2ab';
var prev = Ti.UI.createButton({title:'Previous Month'});
var next = Ti.UI.createButton({title:'Next Month'});
var barView = null;
var calendayView = null;
var selected = null;
var today = null;
var label = Ti.UI.createButton({top:300,height:50,width:200,title:'Go Back'});
win.rightNavButton=next;
win.leftNavButton=prev;
var showCal = function(a,b,c){
	barView = Ti.UI.createView({width:320,height:45,top:0,left:0,backgroundImage:'barview.png'});
	calendayView = Ti.UI.createView({width:320,height:270,top:46,left:3,layout:'horizontal'});

	var date = new Date(a,b,c);	
	var year = date.getFullYear();
	var month = date.getMonth();
	var daysInMonth = 32 - new Date(year,month,32).getDate();
	var dayOfMonth = date.getDate();
	var dayOfWeek = new Date(year,month,1).getDay();

	var selectedDay = dayOfMonth;

	Ti.API.info(year);
	Ti.API.info(month);
	Ti.API.info(dayOfMonth);
	Ti.API.info(dayOfWeek);
	
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
	var title = thisMonth+" "+year;

	var monthName =  Ti.UI.createButton({color:'#545454',top:0,left:35,width:250,height:30,title:title,style:'NONE',font:{fontSize:22,fontWeight:'bold'}});

	var sunLabel = Ti.UI.createButton({title:'sun',left:3,height:20,width:45,top:30,color:'#545454',font:{fontWeight:'bold',fontSize:10},style:'NONE',enabled:false});	
	var monLabel = Ti.UI.createButton({title:'mon',left:47,height:20,width:45,top:30,color:'#545454',font:{fontWeight:'bold',fontSize:10},style:'NONE',enabled:false});	
	var tuesLabel = Ti.UI.createButton({title:'tues',left:92,height:20,width:45,top:30,color:'#545454',font:{fontWeight:'bold',fontSize:10},style:'NONE',enabled:false});	
	var wedLabel = Ti.UI.createButton({title:'wed',left:137,height:20,width:45,top:30,color:'#545454',font:{fontWeight:'bold',fontSize:10},style:'NONE',enabled:false});	
	var thurLabel = Ti.UI.createButton({title:'thur',left:182,height:20,width:44,top:30,color:'#545454',font:{fontWeight:'bold',fontSize:10},style:'NONE',enabled:false});	
	var friLabel = Ti.UI.createButton({title:'fri',left:227,height:20,width:45,top:30,color:'#545454',font:{fontWeight:'bold',fontSize:10},style:'NONE',enabled:false});	
	var satLabel = Ti.UI.createButton({title:'sat',left:272,height:20,width:45,top:30,color:'#545454',font:{fontWeight:'bold',fontSize:10},style:'NONE',enabled:false});	

	barView.add(monthName);
	barView.add(sunLabel);

	barView.add(monLabel);
	barView.add(tuesLabel);
	barView.add(wedLabel);
	barView.add(thurLabel);
	barView.add(friLabel);
	barView.add(satLabel);
	
	var startDay = null;
	if (dayOfWeek == 0){startDay = -1;}		// sunday
	if (dayOfWeek == 1){startDay = 44;}		// monday
	if (dayOfWeek == 2){startDay = 89;}		// tuesday
	if (dayOfWeek == 3){startDay = 134;}	// wednesday
	if (dayOfWeek == 4){startDay = 179;}	// thursday
	if (dayOfWeek == 5){startDay = 224;}	// friday
	if (dayOfWeek == 6){startDay = 269;}	// saturday

	var i = 1;
	var day1 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:startDay,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day2 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day3 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day4 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day5 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day6 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day7 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day8 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day9 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day10 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day11 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day12 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day13 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day14 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day15 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day16 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day17 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day18 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day19 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day20 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day21 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day22 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day23 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day24 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day25 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day26 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day27 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day28 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	if (daysInMonth > 28){
	var day29 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	var day30 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});i++;
	if (daysInMonth > 30){
	var day31 =  Ti.UI.createButton({title:i,color:'#2c3540',font:{fontWeight:'bold',fontSize:22},width:46, height:45,left:-1,top:-1,backgroundImage:'button1.png',backgroundSelectedImage:'button2.png'});
	}}

	calendayView.add(day1);
	calendayView.add(day2);
	calendayView.add(day3);
	calendayView.add(day4);
	calendayView.add(day5);
	calendayView.add(day6);
	calendayView.add(day7);
	calendayView.add(day8);
	calendayView.add(day9);
	calendayView.add(day10);
	calendayView.add(day11);
	calendayView.add(day12);
	calendayView.add(day13);
	calendayView.add(day14);
	calendayView.add(day15);
	calendayView.add(day16);
	calendayView.add(day17);
	calendayView.add(day18);
	calendayView.add(day19);
	calendayView.add(day20);
	calendayView.add(day21);
	calendayView.add(day22);
	calendayView.add(day23);
	calendayView.add(day24);
	calendayView.add(day25);
	calendayView.add(day26);
	calendayView.add(day27);
	calendayView.add(day28);
	if (daysInMonth > 28){
	calendayView.add(day29);
	calendayView.add(day30);
	if (daysInMonth > 30){
	calendayView.add(day31);
	}}
//	var today = function(){
		if (day1.title == dayOfMonth){day1.backgroundImage='button3.png';day1.color='white';selected=day1;today=day1;}
		if (day2.title == dayOfMonth){day2.backgroundImage='button3.png';day2.color='white';selected=day2;today=day2;}
		if (day3.title == dayOfMonth){day3.backgroundImage='button3.png';day3.color='white';selected=day3;today=day3;}
		if (day4.title == dayOfMonth){day4.backgroundImage='button3.png';day4.color='white';selected=day4;today=day4;}
		if (day5.title == dayOfMonth){day5.backgroundImage='button3.png';day5.color='white';selected=day5;today=day5;}
		if (day6.title == dayOfMonth){day6.backgroundImage='button3.png';day6.color='white';selected=day6;today=day6;}
		if (day7.title == dayOfMonth){day7.backgroundImage='button3.png';day7.color='white';selected=day7;today=day7;}
		if (day8.title == dayOfMonth){day8.backgroundImage='button3.png';day8.color='white';selected=day8;today=day8;}
		if (day9.title == dayOfMonth){day9.backgroundImage='button3.png';day9.color='white';selected=day9;today=day9;}
		if (day10.title == dayOfMonth){day10.backgroundImage='button3.png';day10.color='white';selected=day10;today=day10;}
		if (day11.title == dayOfMonth){day11.backgroundImage='button3.png';day11.color='white';selected=day11;today=day11;}
		if (day12.title == dayOfMonth){day12.backgroundImage='button3.png';day12.color='white';selected=day12;today=day12;}
		if (day13.title == dayOfMonth){day13.backgroundImage='button3.png';day13.color='white';selected=day13;today=day13;}
		if (day14.title == dayOfMonth){day14.backgroundImage='button3.png';day14.color='white';selected=day14;today=day14;}
		if (day15.title == dayOfMonth){day15.backgroundImage='button3.png';day15.color='white';selected=day15;today=day15;}
		if (day16.title == dayOfMonth){day16.backgroundImage='button3.png';day16.color='white';selected=day16;today=day16;}
		if (day18.title == dayOfMonth){day17.backgroundImage='button3.png';day17.color='white';selected=day17;today=day17;}
		if (day17.title == dayOfMonth){day18.backgroundImage='button3.png';day18.color='white';selected=day18;today=day18;}
		if (day19.title == dayOfMonth){day19.backgroundImage='button3.png';day19.color='white';selected=day19;today=day19;}
		if (day20.title == dayOfMonth){day20.backgroundImage='button3.png';day20.color='white';selected=day20;today=day20;}
		if (day21.title == dayOfMonth){day21.backgroundImage='button3.png';day21.color='white';selected=day21;today=day21;}
		if (day22.title == dayOfMonth){day22.backgroundImage='button3.png';day22.color='white';selected=day22;today=day22;}
		if (day23.title == dayOfMonth){day23.backgroundImage='button3.png';day23.color='white';selected=day23;today=day23;}
		if (day24.title == dayOfMonth){day24.backgroundImage='button3.png';day24.color='white';selected=day24;today=day24;}
		if (day25.title == dayOfMonth){day25.backgroundImage='button3.png';day25.color='white';selected=day25;today=day25;}
		if (day26.title == dayOfMonth){day26.backgroundImage='button3.png';day26.color='white';selected=day26;today=day26;}
		if (day27.title == dayOfMonth){day27.backgroundImage='button3.png';day27.color='white';selected=day27;today=day27;}
		if (day28.title == dayOfMonth){day28.backgroundImage='button3.png';day28.color='white';selected=day28;today=day28;}
		if (daysInMonth > 28){
		if (day29.title == dayOfMonth){day29.backgroundImage='button3.png';day29.color='white';selected=day29;today=day29;}
		if (day30.title == dayOfMonth){day30.backgroundImage='button3.png';day30.color='white';selected=day30;today=day30;}
		if (daysInMonth > 30){
		if (day31.title == dayOfMonth){day31.backgroundImage='button3.png';day31.color='white';selected=day31;today=day31;}
		}}
//	};

	var clicker = function(thisday){
		selected.backgroundImage='button1.png';selected.color='#2c3540';
		today.backgroundImage='button3.png';today.color='white';
		//today();
		Ti.API.info(selected.title);
		thisday.backgroundImage='button2.png';thisday.color='white';
		label.title = thisMonth+" "+thisday.title+" "+year; 
		selected=thisday;
		
	};
	//today();
	day1.addEventListener('click',function(e){clicker(day1);});
	day2.addEventListener('click',function(e){clicker(day2);});
	day3.addEventListener('click',function(e){clicker(day3);});
	day4.addEventListener('click',function(e){clicker(day4);});
	day5.addEventListener('click',function(e){clicker(day5);});
	day6.addEventListener('click',function(e){clicker(day6);});
	day7.addEventListener('click',function(e){clicker(day7);});
	day8.addEventListener('click',function(e){clicker(day8);});
	day9.addEventListener('click',function(e){clicker(day9);});
	day10.addEventListener('click',function(e){clicker(day10);});
	day11.addEventListener('click',function(e){clicker(day11);});
	day12.addEventListener('click',function(e){clicker(day12);});
	day13.addEventListener('click',function(e){clicker(day13);});
	day14.addEventListener('click',function(e){clicker(day14);});
	day15.addEventListener('click',function(e){clicker(day15);});
	day16.addEventListener('click',function(e){clicker(day16);});
	day17.addEventListener('click',function(e){clicker(day17);});
	day18.addEventListener('click',function(e){clicker(day18);});
	day19.addEventListener('click',function(e){clicker(day19);});
	day20.addEventListener('click',function(e){clicker(day20);});
	day21.addEventListener('click',function(e){clicker(day21);});
	day22.addEventListener('click',function(e){clicker(day22);});
	day23.addEventListener('click',function(e){clicker(day23);});
	day24.addEventListener('click',function(e){clicker(day24);});
	day25.addEventListener('click',function(e){clicker(day25);});
	day26.addEventListener('click',function(e){clicker(day26);});
	day27.addEventListener('click',function(e){clicker(day27);});
	day28.addEventListener('click',function(e){clicker(day28);});
	if (daysInMonth > 28){
	day29.addEventListener('click',function(e){clicker(day29);});
	day30.addEventListener('click',function(e){clicker(day30);});
	if (daysInMonth > 30){
	day31.addEventListener('click',function(e){clicker(day31);});
	
	}}
	win.add(barView);
	win.add(calendayView);
	win.title = selectedDay;
};
var setDate = new Date();
setYear = setDate.getFullYear();
setMonth = setDate.getMonth();
setDay = setDate.getDate();

next.addEventListener('click',function(e){
	setMonth++;
	win.remove(barView);
	win.remove(calendayView);
	showCal(setYear,setMonth,setDay);
});
prev.addEventListener('click',function(e){
	setMonth--;
	win.remove(barView);
	win.remove(calendayView);
	showCal(setYear,setMonth,setDay);
});

showCal(setYear,setMonth,setDay);

label.addEventListener('click',function(){
	win.finalDate = label.title;
	Ti.API.info(win.finalDate);
	win.close();
});

win.add(label);
win.open({modal:true});