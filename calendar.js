//set up the window

var win = Ti.UI.currentWindow;
win.layout='vertical';
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
var bgView=Ti.UI.createView({width:'320',height:'48',backgroundImage:'bgcal.png'});
var otherView=Ti.UI.createView({width:'320',height:'200',backgroundColor:'#FFF'});
var label = Ti.UI.createButton({top:0,height:50,width:200,title:'Go Back'});

//---main function, this draws the calendar on the window, the values:---
// a = year
// b = month
// c = day
var showCal = function(a,b,c){
	/*
	Ti.API.info('');
	Ti.API.info('a: '+a);
	Ti.API.info('b: '+b);
	Ti.API.info('c: '+c);
	Ti.API.info('');
	*/
	// main two views
	barView = Ti.UI.createView({width:320,height:45,top:0,left:0,backgroundImage:'barview.png'});
	calendarView = Ti.UI.createView({width:'auto',left:3,height:'auto',layout:'horizontal'});
	
	//set up the date according to the values a, b, and c
	var date = new Date(a,b,c);	
	var year = a; //date.getFullYear();
	var month = b; //date.getMonth();
	var daysInMonth = 32 - new Date(a,b,32).getDate();
	var dayOfMonth = date.getDate();
	var dayOfWeek = new Date(year,month,1).getDay();

	var selectedDay = dayOfMonth;

	//some things to show up on the console
/*
	Ti.API.info('year: '+year);
	Ti.API.info('month: '+month);
	Ti.API.info('day of the month: '+dayOfMonth);
	Ti.API.info('first day of the week: ' +dayOfWeek);
*/
	
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
	
	
	var i = 0;
	
	//figure out how many days where in last month
	var daysInLastMonth = 32 - new Date(year,month-1,32).getDate();
	
	//figure out where to start counting the days from last month
	startCountingLastMonthsDays = daysInLastMonth-dayOfWeek;
	
	//draw the last few days from last month to fill the gap
	while (i < dayOfWeek){
		var dayBefore =  Ti.UI.createButton({font:{fontWeight:'bold',fontSize:22},width:46, height:45,top:-1,backgroundSelectedImage:'button2.png'});
		dayBefore.title=startCountingLastMonthsDays+1;
		dayBefore.left=-1;
		dayBefore.backgroundImage='button1.png';
		dayBefore.color='#858A92';
		calendarView.add(dayBefore);
		startCountingLastMonthsDays++;
	i++;
	}
	
/*
	This is not needed anymore, since the days missing from last month are drawn before

	if (dayOfWeek == 0){startDay = -1;}		// sunday
	if (dayOfWeek == 1){startDay = 44;}		// monday
	if (dayOfWeek == 2){startDay = 89;}		// tuesday
	if (dayOfWeek == 3){startDay = 134;}	// wednesday
	if (dayOfWeek == 4){startDay = 179;}	// thursday
	if (dayOfWeek == 5){startDay = 224;}	// friday
	if (dayOfWeek == 6){startDay = 269;}	// saturday
*/



	//draw the calendar. The number of days of the month is the number of times that the loop repeats
	i = 1;
	while (i < daysInMonth+1){
		var day =  Ti.UI.createButton({title:i,font:{fontWeight:'bold',fontSize:22},width:46, height:45,top:-1,backgroundSelectedImage:'button2.png'});

		//where to put the first day. (monday, tuesday, etc)
			day.left=-1;


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
	
	//this is just a new var, nothing special
	var t = 0;
	
	//figure out how many days if next month need to be drawn to fill the gap
	var startCountingNextMonthsDays = null;
	while (t<7){
		if(dayOfWeek==t && daysInMonth==31){startCountingNextMonthsDays = 4-t;}
		if(dayOfWeek==t && daysInMonth==30){startCountingNextMonthsDays = 5-t;}
		if(dayOfWeek==t && daysInMonth==29){startCountingNextMonthsDays = 6-t;}
		if(dayOfWeek==t && daysInMonth==28){startCountingNextMonthsDays = 7-t;}
		t++;
	}
	//if we get a negative number, correct it
	if(startCountingNextMonthsDays == -1){startCountingNextMonthsDays=6;}
	if(startCountingNextMonthsDays == -2){startCountingNextMonthsDays=5;}
	
	//draw the missing days of next month to fill the gap
	i = 1;
	while (i < startCountingNextMonthsDays+1){
		var dayAfter =  Ti.UI.createButton({font:{fontWeight:'bold',fontSize:22},width:46, height:45,top:-1,backgroundSelectedImage:'button2.png'});
		dayAfter.title=i;
		dayAfter.left=-1;
		dayAfter.backgroundImage='button1.png';
		dayAfter.color='#858A92';
		calendarView.add(dayAfter);
		startCountingLastMonthsDays++;
	i++;
	}
	
	//add all of this mess to the window :)
	
	win.add(barView);
	win.add(calendarView);
	otherView.add(label);
	win.add(bgView);
	win.add(otherView);

	win.title = setMonth+1;
};
//---end of the main function---

//set up todays date (default, but you can change it)
var setDate = new Date();
setYear = setDate.getFullYear();
setMonth = setDate.getMonth();
setDay = setDate.getDate();
//draw the calendar, this calls the main function 'showCal' with the default values

//showCal(setYear,3,setDay);
showCal(setYear,setMonth,setDay);


//change to next month
next.addEventListener('click',function(e){
	//add one month
	setMonth++;
	if (setMonth > 11){setMonth = setMonth-12; setYear++;}
	
	//remove everything from the window
	win.remove(barView);
	win.remove(calendarView);
	win.remove(bgView);
	win.remove(otherView);
	//redraw, and of course, put everything back on the window with the new values
	showCal(setYear,setMonth,setDay);
});

//change to next month
prev.addEventListener('click',function(e){
	//subtract one month
	setMonth--;
	if (setMonth < 0){setMonth = setMonth+12; setYear--;}
	
	//remove everything from the window
	win.remove(barView);
	win.remove(calendarView);
	win.remove(bgView);
	win.remove(otherView);
	//redraw, and of course, put everything back on the window with the new values
	showCal(setYear,setMonth,setDay);
});


//click on the main button to close the window and create a variable called 'finalDate' with the selected date to pass to the previous window
label.addEventListener('click',function(){
	win.finalDate = label.title;
	Ti.API.info(win.finalDate);
	win.close();
});
