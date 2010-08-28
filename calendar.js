//set up the window

var win = Ti.UI.currentWindow;
win.backgroundColor='#9fa2ab';

//buttons of 'next' and 'prevoius' month
var prev = Ti.UI.createButton({title:'Previous Month'});
var next = Ti.UI.createButton({title:'Next Month'});
win.rightNavButton=next;
win.leftNavButton=prev;

//vars that will be called later
var barView = null;
var calendarView = null;
var selected = null;
var today = null;

//button with the selected day that closes the window
var label = Ti.UI.createButton({top:300,height:50,width:200,title:'Go Back'});
win.add(label);

//---main function, this draws the calendar on the window, the values:---
// a = year
// b = month
// c = day
var showCal = function(a,b,c){
	// main two views
	barView = Ti.UI.createView({width:320,height:45,top:0,left:0,backgroundImage:'barview.png'});
	calendarView = Ti.UI.createView({width:320,height:270,top:46,left:3,layout:'horizontal'});
	
	//set up the date according to the values a, b, and c
	var date = new Date(a,b,c);	
	var year = date.getFullYear();
	var month = date.getMonth();
	var daysInMonth = 32 - new Date(year,month,32).getDate();
	var dayOfMonth = date.getDate();
	var dayOfWeek = new Date(year,month,1).getDay();

	var selectedDay = dayOfMonth;

	//some things to show up on the console
	Ti.API.info('year: '+year);
	Ti.API.info('month :'+month);
	Ti.API.info('day of the month :'+dayOfMonth);
	Ti.API.info('first day of the week' +dayOfWeek);
	
	//what month are we on?
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
	
	//set up the barView, name of month, days of the week, etc
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
	
	//set up the first day of the month on the calendar
	var startDay = null;
	if (dayOfWeek == 0){startDay = -1;}		// sunday
	if (dayOfWeek == 1){startDay = 44;}		// monday
	if (dayOfWeek == 2){startDay = 89;}		// tuesday
	if (dayOfWeek == 3){startDay = 134;}	// wednesday
	if (dayOfWeek == 4){startDay = 179;}	// thursday
	if (dayOfWeek == 5){startDay = 224;}	// friday
	if (dayOfWeek == 6){startDay = 269;}	// saturday

	//function that makes everything work
	var clicker = function(e){
		e.addEventListener('click',function(thisday){
			selected.backgroundImage='button1.png';selected.color='#2c3540';
			today.backgroundImage='button3.png';today.color='white';
			thisday.source.backgroundImage='button2.png';thisday.source.color='white';
			label.title = thisMonth+" "+thisday.source.title+" "+year; 
			selected=thisday.source;
		});
	};

	//draw the calendar. The number of days of the month is the number of times that the loop repeats
	var i = 1;
	while (i < daysInMonth+1){
		var day =  Ti.UI.createButton({title:i,font:{fontWeight:'bold',fontSize:22},width:46, height:45,top:-1,backgroundSelectedImage:'button2.png'});

		//where to put the first day. (monday, tuesday, etc)
		if (day.title == 1){
			day.left=startDay;
		}else{
			day.left=-1;
		}

		//determine which day has to be special, this highlights 'today'
		if (day.title == dayOfMonth){
			day.backgroundImage='button3.png';
			day.color='white';
			selected=day;
			today=day;
		}else{
			day.backgroundImage='button1.png';
			day.color='#2c3540';
		}

		//make everything work!
		clicker(day);

		//add everyday to the calendarView (one by one, obviously)
		calendarView.add(day);
		i++;
	}
	win.add(barView);
	win.add(calendarView);
	win.title = selectedDay;
};
//---end of the main function---

//set up todays date (default, but you can change it)
var setDate = new Date();
setYear = setDate.getFullYear();
setMonth = setDate.getMonth();
setDay = setDate.getDate();

//change to next month
next.addEventListener('click',function(e){
	//add one month
	setMonth++;
	//remove everything from the window
	win.remove(barView);
	win.remove(calendarView);
	//redraw, and of course, put everything back on the window with the new values
	showCal(setYear,setMonth,setDay);
});

//change to next month
prev.addEventListener('click',function(e){
	//subtract one month
	setMonth--;
	//remove everything from the window
	win.remove(barView);
	win.remove(calendarView);
	//redraw, and of course, put everything back on the window with the new values
	showCal(setYear,setMonth,setDay);
});

//draw the calendar, this calls the main function 'showCal' with the default values
showCal(setYear,setMonth,setDay);

//click on the main button to close the window and create a variable called 'finalDate' with the selected date to pass to the previous window
label.addEventListener('click',function(){
	win.finalDate = label.title;
	Ti.API.info(win.finalDate);
	win.close();
});
