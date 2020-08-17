var request = require('request');
'use strict';

const createRecoed = (userID,userObj)=>{
	return 	new Promise(function (resolve, reject) {
		var url = 'https://awari.algebragame.app/rpgstory/dbController/create.php?id=' + userID + "&first_name="+ userObj.first_name + "&last_name=" + userObj.last_name;
		request(url, function (error, response, body) {

            if (!error && response.statusCode == 200) {
                resolve("success");
            } else {
                reject("SQL server connection fail");
            }
        })
    });
}

const updateRecoed = (userID,endNo)=>{
	return 	new Promise(function (resolve, reject) {
		var url = 'https://awari.algebragame.app/rpgstory/dbController/update.php?id=' + userID + "&endNo="+ endNo;
		request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve("success");
            } else {
                reject("SQL server connection fail");
            }
        })
    });
}

const selectRecord = (userID) =>{
	return 	new Promise(function (resolve, reject) {
		var url = 'https://awari.algebragame.app/rpgstory/dbController/select.php?id=' + userID;
		request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
				var obj = JSON.parse(body);
                resolve(obj);
            } else {
                reject("SQL server connection fail");
            }
        })
    });
}


const start = (say,sendButton,userID,userObj) => {

	createRecoed(userID,userObj).then(res =>{
	},rej=>{
		say(["insert reject",rej,"You still can build your startup, but the a achievement can not be save"]);
	})


	say([
		"Loading...",
		// this is where the old image of Mr. Fermi's adventure was
		"Hello "+ userObj.first_name
	]).then(()=>{
		sendButton('Welcome to Nemo Bot, the startup incubator! 💰',[
			{title: 'Game Start', payload: '{"action":"start"}'},
			{title: 'Achievement', payload: '{"action":"Achievement"}'}
		]);	
	})
};

const state = (payload, say, sendButton,userID, userObj) => {
	var payloadObj = JSON.parse(payload);
	var action = payloadObj['action'];
	// Chapter 1: Idea Creation
	var copycat = payloadObj['copycat'];
	var fillsNeed = payloadObj['FillsNeed'];
	var listenToFriend = payloadObj['listenToFriend'];
	var newIdea = payloadObj['newIdea'];
	var followInternetAdvice = payloadObj['followInternetAdvice'];
	// Chapter 2: Product Development
	var missionStatement = payloadObj['missionStatement'];
	var startHiringMarketing = payloadObj['startHiringMarketing'];
	var focusOnProduct = payloadObj['focusOnProduct'];
	var hireEarly = payloadObj['hireEarly'];
	var addNewFeatures = payloadObj['addNewFeatures'];
	var keepAddingFeatures = payloadObj['keepAddingFeatures'];
	// Chapter 3: Culture/Structure/Hiring & Firing
	var values = payloadObj['values'];
	var coreValues = payloadObj['coreValues'];
	var firstTen = payloadObj['firstTen'];
	var interview = payloadObj['interview'];
	var interviewedElsewhere = payloadObj['interviewedElsewhere'];
	var quirkyCandidate = payloadObj['quirkyCandidate'];
	var fireOrDemote = payloadObj['fireOrDemote'];
	var raise = payloadObj['raise'];
	var references = payloadObj['references'];
	var fire1 = payloadObj['fire1'];
	var fire2 = payloadObj['fire2'];
	var promote = payloadObj['promote'];
	// Chapter 4: Marketing
	var enterMarket = payloadObj['enterMarket'];
	var waitToEnter = payloadObj['waitToEnter'];
	var lateViralCampaign = payloadObj['lateViralCampaign'];
	var marketingMedium = payloadObj['marketingMedium'];
	var switchToDigital = payloadObj['switchToDigital'];
	var increaseVirality = payloadObj['increaseVirality'];
	// Chapter 5: User Input
	var dataMetric = payloadObj['dataMetric'];
	var customerImp = payloadObj['customerImp'];
	var hiring = payloadObj['hiring'];
	var development = payloadObj['development'];
	var competitor = payloadObj['competitor'];
	var feedback = payloadObj['feedback'];
	// Chapter 6: Fundraising
	var equitySplit = payloadObj['equitySplit'];
	var vestEquity = payloadObj['vestEquity'];
	var vestedfirstRound = payloadObj['vestedfirstRound'];
	var unvestedfirstRound = payloadObj['unvestedfirstRound'];
	var meetingReins = payloadObj['meetingReins'];
	var checkUse = payloadObj['checkUse'];
	// Chapter 7: Growth
	var growthTeam = payloadObj['growthTeam'];
	var wholeComp = payloadObj['wholeComp'];
	var twoStages = payloadObj['twoStages'];
	var review = payloadObj['review'];
	var northStar = payloadObj['northStar'];
	var magicMoment = payloadObj['magicMoment'];
	var internationalize = payloadObj['internationalize'];
	// Other variables
	var population = payloadObj['population'];
	var cs = payloadObj['cs'];
	var ma = payloadObj['ma'];
	var billionDollar = 0;

	/*
	say("1");
	say(userObj.first_name);
	say(userID);
	*/

	if(action == "Achievement"){
		selectRecord(userID).then(res=>{
			if(res["select"] === "success"){
				var percentage = (res["end1"]+res["end2"]+res["end3"]+res["end4"]+res["end5"]+res["end6"]+res["end7"]+res["end8"]+res["end9"]+res["end10"]+res["end11"]+res["end12"]+res["end13"]+res["end14"]+res["end15"]+res["end16"]+res["end17"]+res["end18"]+res["end19"]+res["end20"]+res["end21"]+res["end22"]+res["end23"]+res["end24"]+res["end25"]+res["end26"]+res["end27"]) / 27 * 100
				percentage = percentage.toFixed(2);
				say(`
27 total endings:
1:	${res["end1"]==0?"Not unlocked":"Ending 1: Copy cat"}
2:	${res["end2"]==0?"Not unlocked":"Ending 2: Doesn't fill your needs"}
3:	${res["end3"]==0?"Not unlocked":"Ending 3: Started too big"}
4:	${res["end4"]==0?"Not unlocked":"Ending 4: Hired too early"}
5:	${res["end5"]==0?"Not unlocked":"Ending 5: Website too complex"}
6:	${res["end6"]==0?"Not unlocked":"Ending 6: Overlooked Culture"}
7:	${res["end7"]==0?"Not unlocked":"Ending 7: First 10 hires failure"}
8:	${res["end8"]==0?"Not unlocked":"Ending 8: Innapropriate hire"}
9:	${res["end9"]==0?"Not unlocked":"Ending 9: Too many raises"}
10:	${res["end10"]==0?"Not unlocked":"Ending 10: Inappropriate fire"}
11:	${res["end11"]==0?"Not unlocked":"Ending 11: Too early"}
12:	${res["end12"]==0?"Not unlocked":"Ending 12: Wrong medium"}
13:	${res["end13"]==0?"Not unlocked":"Ending 13: Ineffective strategy"}
14:	${res["end14"]==0?"Not unlocked":"Ending 14: Feedback not valued"}
15:	${res["end15"]==0?"Not unlocked":"Ending 15: Customer support"}
16:	${res["end16"]==0?"Not unlocked":"Ending 16: Bad customer feedback"}
17:	${res["end17"]==0?"Not unlocked":"Ending 17: Poor use of resources"}
18:	${res["end18"]==0?"Not unlocked":"Ending 18: Allocated growth team"}
19:	${res["end19"]==0?"Not unlocked":"Ending 19: Poor planning"}
20:	${res["end20"]==0?"Not unlocked":"Ending 20: Identify magic moment"}
21:	${res["end21"]==0?"Not unlocked":"Ending 21: Sucessful startup!"}
22:	${res["end21"]==0?"Not unlocked":"Ending 22: Billion dollar startup!"}
23:	${res["end23"]==0?"Not unlocked":"Ending 23: Initial Equity Split Required"}
24:	${res["end24"]==0?"Not unlocked":"Ending 24: Friends & Family Round"}
25:	${res["end25"]==0?"Not unlocked":"Ending 25: Fraudulent Investor"}
26:	${res["end26"]==0?"Not unlocked":"Ending 26: Bad Pitch Intuition"}
27:	${res["end27"]==0?"Not unlocked":"Ending 27: Embezzelment Charges"}
Complete: ${percentage}%
				`);
			}else{
				say("please restart this game from offical game");
			}
		},rej=>{
			say("SQL server error, You still can play this game, but the an achievement can not be saved");
		})

	}

	if(action == "start"){
		say([
			"Nemo Bot Incubator is here to guide you on your journey to building a successful technology startup.",
			"🚧 We must warn you 🚧\u000AStartups are all consuming and founding a startup will be one of the biggest challenges you might ever have to face.",
		]).then(()=>{
			sendButton("Do you have what it takes?",[
				{title: 'Yes', payload:'{"action":"0.1"}'},
			]);
		});
	}

	/****************************************************************************************************/
	// Chapter 1: Idea Creation
	if(action == "0.1"){
		say([
            "Beginning Chapter 1: Idea creation 💭",
			"So you have an idea for a startup? You may be dreaming that this company is the next Google or Facebook or that it will change the world for the better in some way.",
			"Before you begin to turn your idea into a reality, how did you come up with this great idea?"
		]).then(()=>{
			sendButton("A. You want to copy another successful company, try to enter their market, and believe you can do what they do better.\u000AB. This startup fulfills a direct problem you are facing in your everyday life and it’s something nobody has done before.\u000AC. You have a new idea that you think a lot of other people can benefit from.",[
				{title:'A',payload:'{"action":"1.a"}'},
				{title:'B',payload:'{"action":"1.b"}'},
				{title:'C',payload:'{"action":"1.c"}'}
			]);
		});
	}


	// Result of select copy cat idea
	if(action == "1.a"){
		say([
			"Interesting idea... 🤔",
			"When you tell your friends about your idea, they say that it isn’t innovative enough as you are only adopting someone else’s idea.",
			"They tell you not to do it. What will you do?",
		]).then(()=>{
			sendButton("A. Stick to your idea. Though your design might not be innovative enough, it is still a plus to the original system, which may attract more uses.\u000AB. Listen to your friends. You have to be an order of magnitude better than the others to really earn a share in the market.",[
				{title:'A',payload:'{"copycat":"yes"}'},
				{title:'B',payload:'{"copycat":"no"}'},
			]);
		});
	}
	
	// Looses game if they stick to their copycat idea
	if (copycat == "yes"){
		updateRecoed(userID,"end1");
		say([
            "Ending 1: Copy cat 🙀",
            "It is a bad idea to try and copy another company and enter their market unless you deliver a product that is an order of magnitude better than the existing company.",
            "You should heavily reconsider your idea before starting a company."
		]);
	}

	// result of saying your idea fits others' needs
	if(action == "1.c"){
		say([
		    "Interesting idea... 🤔",
			"When you tell your friends about your idea, they are a little skeptical.",
			"You tell them this product is something you wouldn’t necessarily use, but other people would.",
			"They are unsure about the success of your company because they believe it should fulfill one of your needs.",
		]).then(()=>{
			sendButton("A. Listen to your friends. If you wouldn’t use your own product why would other people.\u000AB. Stick to your idea. You think that people are different and even though you wouldn’t use your product a lot of other people will.",[
				{title:'A',payload:'{"fillsNeed": "yes", "action":"1.b"}'},
				{title:'B',payload:'{"fillsNeed": "no", "action":"1.c.b"}'},
			]);
		});
	}
	
	// Ends game if user sticks to idea they aren't passionate about
	if (fillsNeed == "no" || action == "1.c.b"){
		updateRecoed(userID,"end2");
		say([
            		"Ending 2: Doesn't fill your needs",
            		"It is a big mistake to start a company that does not actively fulfill a problem you are facing.",
            		"You should heavily reconsider your idea before starting a company."
		]);
	}
			
	// You have an idea that fills your own needs
	if (action == "1.b" || copycat == "no" || fillsNeed == "yes") {
		say([
			"That's great! 👍 Your startup should fulfill one of your needs!",
			"You are talking to your friends and telling them the idea.",
			"After explaining your target market, they say that it is too small and it will have no value at all.",
			"What do you do?",
		]).then(()=>{
			sendButton("A. Stick to your idea. Starting with a small target market will allow you to dominate that market.\u000AB. Listen to your friend. A small market could also mean increased levels of difficulty in finding potential users, which makes it hard to generate revenue.",[
				{title:'A',payload:'{"listenToFriend": "no"}'},
				{title:'B',payload:'{"listenToFriend": "yes"}'},
			]);
	    });
	    
	}			
	
	// Listens to friend that wants you to start with a large market which is a bad idea
	if (listenToFriend == "yes"){
		say([
			"You come up with a new idea that now scales to a much bigger market 💯",
			"Your friends like it and they think a lot of people will use your product.",
		]).then(()=>{
			sendButton("A. Build a startup with your new idea!\u000AB. Decide to hold off and go back to your original idea that works with the small market.",[
				{title:'A',payload:'{"newIdea": "yes"}'},
				{title:'B',payload:'{"newIdea": "no"}'},
			]);
		});
	}
	
	// Looses game if user continues to listen to friend's bad idea.
	if (newIdea == "yes"){
		updateRecoed(userID,"end3");
		say([
            "Ending 3: Started too big",
            "It is extremely important to target a small market first.",
            "If you beginning by trying to get a large amount of customers right out of the gate you will be overly consumed with this and not creating the best product you can.",
            "In the intital stages of a startup, you should focus on making a great product first. Then try to get a small group of people to love it and eventually scale bigger and bigger."
		]);
	}
	
	// Sticks with idea that targets small market and does not create a new idea for larger one
	if (listenToFriend == "no" || newIdea == "no"){
		say([
			"Awesome choice! You want to focus in on a much smaller market before scaling to larger ones 🌍",
			"You want your startup to succeed so you make a google search for \"How to make the next billion dollar startup.\" 💻",
			"You scroll through different websites with advice on how to start a great company.",
			"What do you do with this information?",
		]).then(()=>{
		    // Payload of button can be used later to dectuct from the success of the users startup, but will not fail the startup in this chapter.
			sendButton("A. You follow this advice to a tee. Startups are all similar and if go through the motions of a standard start up yours will be a success.\u000AB. You decide to devote your efforts to learning about the market for your specific product and base your decisions of this knowledge.",[
				{title:'A',payload:'{"action":"2.a", "followInternetAdvice": "yes"}'},
				{title:'B',payload:'{"action":"2.b", "followInternetAdvice": "no"}'},
			]);
		});
	}
	
	
    // feedback for choosing to learn about markets
    if (followInternetAdvice == "no"){
	    // Adds a point for a more successful startup
	    billionDollar = billionDollar + 1;
		say([
			"Good choice! 👍",
			"Don't try to emulate exactly what others have done, your market is unique and you should do your own research.",
		    	"Congratulations! You reached the end of Chapter 1: Idea Creation 💭",
            		"Here are some of the key points that can assist you in the process of building your startup:",
            		"1. Build something you yourself needs that you should be able to explain in one sentence and that is completely new.\u000A2. Think about your market first and how it will grow. You want an idea that you can get a monopoly.\u000A3. Sometimes the best ideas sound terrible. This means no one is working on them!"
		]).then(()=>{
			sendButton("Go to Chapter 2!",[
				{title:'Yes!',payload:'{"action": "2"}'},
			]);
		});
	}
	
	// feedback for choosing to follow advice to a tee
	if (followInternetAdvice == "yes"){
		say([
			"🚧 Be careful following this advice perfectly 🚧",
			"Every startup is different and if you try to emulate what others have done your could fail.",
			"Congratulations! You reached the end of Chapter 1: Idea Creation 💭",
            		"Here are some of the key points that can assist you in the process of building your startup:",
            		"1. Build something you yourself needs. You should be able to explain this idea in one sentence and it should be completely new.\u000A2. Think about your market first and how it will grow. You want an idea that you can get a monopoly.\u000A3. Sometimes the best ideas sound terrible. This means no one is working on them!"
		]).then(()=>{
			sendButton("Go to Chapter 2!",[
				{title:'Yes!',payload:'{"action": "2"}'},
			]);
		});
	}

	/****************************************************************************************************/
	// Chapter 2: Product development
	if (action == "2"){
		say([
			"Beginning Chapter 2: Product Development 📱",
			"You now have a strong idea and are beginning to develop your product!",
			"You are searching for a mission statement that will help you build the best product.",
			"You should:",
		]).then(()=>{
			sendButton("A. Make something only a small number of people will love at first. Your focuses are on quality and building a small devoted following.\u000AB. Reach out to more users and making something a large number of people like but don’t love as much. Your focus is on getting tons of users even if the product isn’t as good initially.",[
				{title:'A',payload:'{"missionStatement":"smallAndLove"}'},
				{title:'B',payload:'{"missionStatement":"largeAndLike"}'},
			]);
		});
	}
	
	// Chooses correct answer to focus in on smaller market
	if (missionStatement == "smallAndLove"){
		say([
			"Great! You seem to value creating a great product people will love and focusing on a small group of people first is the way to go!",
			"But creating something can be stressful and the hours you are working are long and hard. ",
			"You get the feeling like you need to devote more time to other things (marketing, hiring, etc.)",
			"What do you do?",
		]).then(()=>{
			sendButton("A. You stay focused on building a great product! This is the most important part and everything will come easier if you get this right. 📲\u000AB. Hire more people and start marketing your product! This is key in the very beginning stages. 🙋‍♂️",[
				{title:'A',payload:'{"startHiringMarketing": "no"}'},
				{title:'B',payload:'{"startHiringMarketing": "yes"}'},
			]);
		});
	}
	
	// Result of selecting wrong annswer to hire people
	if (startHiringMarketing == "yes"){
		say([
			"You decide to start hiring people to relieve some of your work burden even though it is still in the early stages of development.",
			"The best canidate is an engineer who wants a 10% equity. 👩‍💻",
			"Do you hire them?",
		]).then(()=>{
			sendButton("A. No! Try to avoid hiring as much as possible in the early stages.\u000AB. Yes! He is qualified for the job.",[
				{title:'A',payload:'{"hireEarly": "no"}'},
				{title:'B',payload:'{"hireEarly": "yes"}'},
			]);
		});
	}
	
	// Loss of game resulting in too early of a hire
	if (hireEarly == "yes"){
		updateRecoed(userID,"end4");
		say([
            "Ending 4: Hired too early",
            "It is vital to your statup's success that you wait as long as possible before you hire anyone in the early stages.",
            "Because you devoted more efforts to marketing and hiring your app was never good enough and your startup failed."
		]);
	}
	
	// Result of selectinng wrong answer to small/love and large/like question
	if (missionStatement == "largeAndLike"){
		say([
			"🚧 You are ambitious and want a lot of people to use your product, but that might cost you in the long run when your product isn’t as good. 🚧",
			"Now, the stress of building something is getting hard to handle and the long hours of work are weighing on you.",
			"You get the feeling like you need to devote more time to other things (marketing, hiring, etc.).",
			"What do you do?",
		]).then(()=>{
			sendButton("A. You stay focused on building a great product! Having the best product you can offer is the most important part and everything will come easier after. 📲\u000AB. Hire more people and start marketing your product! This is key in the very beginning stages. 🙋‍♂️",[
				{title:'A',payload:'{"focusOnProduct": "yes"}'},
				{title:'B',payload:'{"focusOnProduct": "no"}'},
			]);
		});
	}
	
	// Result of choosing to hire more people instead of focusing on product
	if (focusOnProduct == "no"){
		updateRecoed(userID,"end4");
			say([
				"Ending 4: Hired too early ⏳",
                "It is vital to your statup's success that you wait as long as possible before you hire anyone in the early stages.",
                "Because you devoted more efforts to marketing and hiring your app was never good enough and your startup failed."
			]);
	}
	
	// Makes it through hiring, focus on product, and small market questions
	// Asks a question about keeping product intuitive
	if (hireEarly == "no" || focusOnProduct == "yes" || startHiringMarketing == "no"){
		say([
			"Your startup is still in the very early stages, but moving along.",
			"Right now, you have a simple working version of your product.",
			"What should your next step be?",
		]).then(()=>{
			sendButton("A. Add new features! Lots of features will lead to a great product. \u000AB. Keep it simple! Your aim should make the product as intuitive as possible",[
				{title:'A',payload:'{"addNewFeatures": "yes"}'},
				{title:'B',payload:'{"addNewFeatures": "no"}'},
			]);
		});
	}
	
	// chooses to add new features
	if (addNewFeatures == "yes"){
		say([
			"You want to add new features to your product.",
			"For example, your website is looking bare and you want to add more links and buttons users can click on.",
			"However, one of your co-founders thinks you shouldn’t do this.",
		]).then(()=>{
			sendButton("A. Listen to your co-founder! Make your website as simple as possible for the user.\u000AB. Go ahead with adding new features! Users want to be linked to more web pages.",[
				{title:'A',payload:'{"keepAddingFeatures": "correct"}'},
				{title:'B',payload:'{"keepAddingFeatures": "wrong"}'},
			]);
		});
	}
	
	// Looses as a result of making website too complex
	if (keepAddingFeatures == "wrong"){
		updateRecoed(userID,"end5");
		say([
            "Ending 5: Made website too complex",
            "\"The knowledge gap\" is a measure of how intuitive a product is.",
            "|--------|",
            "It starts with the user knowing nothing about how your app/website works, and ends with the user understanding it completely. The gap inbetween shows how easy it is to use your website.",
            "The more features you add the larger the gap, or the harder it is to use.",
            "|---------------|",
            "The simpler your product, the easier it is to use and the smaller the gap.",
            "|----|",
            "Your startup failed. It was to hard for users to interact with your website, had too many features, and too big a knowledge gap."
		]);
	}
	
	// Result of not adding new features and winning chapter 2!
	if (addNewFeatures == "no"){
		say([
			"Congratulations! You reached the end of Chapter 2: Product Development 📱",
            		"Here are some of the key points that can assist you in the process of developing:",
            		"1. A great product is key to long term growth. 🔑\u000A2. You don't need many initial users but get them to love the product!"
		]).then(()=>{
			sendButton("Go to chapter 3!",[
				{title:'Yes!',payload:'{"action": "3"}'},
			]);
		});
	}
	
	// End of chapter 2
	if (keepAddingFeatures == "correct"){
		say([
			"Congratulations! You reached the end of Chapter 2: Product Development 📱",
            		"Here are some of the key points that can assist you in the process of developing:",
            		"1. A great product is key to long term growth. 🔑\u000A2. You don't need many initial users but get them to love the product!"
		]).then(()=>{
			sendButton("Go to Chapter 3!",[
				{title:'Yes!',payload:'{"action": "3"}'},
			]);
		});
	}


	/****************************************************************************************************/
	// Chapter 3: Culture/Structure/Hiring & Firing
	if(action == "3"){
		say([
            "Beginning Chapter 3: Culture, Structure, Hiring & Firing 👩‍💼👨‍💼",
			"Having a set of core values is an extremely important part of a successful startup.",
			"You should take these values into consideration when hiring employees, leading your team, and interacting with customers.",
			"As the founder, you make the wise decision to write down these values for everyone at your company to see.",
			"When do you choose to do this?",
		]).then(()=>{
			sendButton("A. The very beginning. Start writing these down as early as possible (even if they take a while to develop).\u000AB. Give it some time. You don’t want to write these down until you are a well established company.",[
				{title:'A',payload:'{"values":"yes"}'},
				{title:'B',payload:'{"values":"no"}'},
			]);
		});
	}

    // Did not value company culture as a necessary 
	if(values == "no"){
		say([
			"Oops! You end up waiting a long time to write down your core values and as a result you make a hire that doesn’t exactly fit the agenda of your company.",
			"This hire was within your first 10 hires of a company.",
			"How will this affect your startup?",
		]).then(()=>{
			sendButton("A. Little to no effect. It’s only one hire and will be insignificant in the long run.\u000AB. Huge effect. This was a costly mistake because the first hires you make are always the most important.",[
				{title:'A',payload:'{"coreValues":"no"}'},
				{title:'B',payload:'{"coreValues":"yes"}'},
			]);
		});
	}

	// Result of not fully understanding the importance of hiring your first 10 people
	if (coreValues == "no"){
		updateRecoed(userID,"end6");
		say([
            "Ending 6: Overlooked Culture",
            "Your startup is doomed in the long run because your costly decision to value company culture as a priority early on caused you to hire someone who didn't fit well.",
            "Even worse! That hire was within the first 10 people of your company and those are the 10 most important hires you will make as a startup.",
            "It is almost impossible to rebound from a bad hire within the first 10."
		]);
	}

    // Answered correctly and write down your company values
	if (coreValues == "yes" || values == "yes"){
		say([
            "The right thing to do is write down your company values early. Good job! 👍",
		    "You are working on establishing a distinct company cultre, however, you are a little behind schedule and you need to hire the first 10 people to get the ball rolling.",
		    "What should your mindset be at this juncture?",
		]).then(()=>{
			sendButton("A. You decide to hire quickly so you can get the ball rolling on the startup. Time is money.\u000AB. You decide to slow things down because hiring the first 10 people is very consequential to future hires.",[
				{title:'A',payload:'{"firstTen": "no"}'},
				{title:'B',payload:'{"firstTen": "yes"}'},
			]);
		});
	}
    
    // Result of incorrectly answering first 10 hires
	if (firstTen == "no"){
		updateRecoed(userID,"end7");
		say([
            "Ending 7: First 10 hires failure",
            "The first 10 people you hire at your startup will be the most important hires you ever make.",
            "In no circumstances should you ever hire these people quickly to get things moving.",
            "You made a fatal error as founder or your tech company and it failed."
		]);
	}
    
    // Result of correctly answering question to not rush into hiring
	if (firstTen == "yes") {
		say([
			"You are interviewing a canidate 👨‍🎓 and ask them a very tough question.",
            		"If you had 1 year left to live would you still work at this company?",
            		"The canidate looks perplexed and, even though he wants the job, he says\"No. Nobody would do that.\"",
            		"Do you hire this cannidate?"
		]).then(()=>{
			sendButton("A. Yes, that was an absurd question you ask most canidates to try and trip them up. You wouldn't expect them to actually do that.\u000AB. No, they do not buy into your company as much as they should to be hired.",[
				{title:'A',payload:'{"interviewedElsewhere": "wrong"}'},
				{title:'B',payload:'{"interviewedElsewhere": "correct"}'},
			]);
		});
	}
	
	if (interviewedElsewhere == "correct"){
		// Adds a point for a more successful startup
	    	billionDollar = billionDollar + 1;
	}
    
    	// Answered incorrectly to question about loyal emplyees you should hire
	if (interviewedElsewhere == "wrong"){
		say([
			"You quickly realize that you know someone in common with this canidate.",
			"You call that person and discover that the interview candidate is also interviewing at three other startups.",
			"Do you still hire them?",
		]).then(()=>{
			sendButton("A. No. You decide that the candidate is not striving to achieve a goal but is more interested in looking for experience.\u000AB. Yes! The candidate is a hard worker and has excellent academic credentials.",[
				{title:'A',payload:'{"interview": "correct"}'},
				{title:'B',payload:'{"interview": "wrong"}'},
			]);
	    });
	}
    
    // Hired someone not inline with your company goals
	if (interview == "wrong"){
		updateRecoed(userID,"end8");
		say([
            		"Ending 8: Innapropriate hire",
            		"Within your first 10 hires you need to make sure your canidate is all in and that they buy into your company culture.",
            		"The founder of Airbnb asked this very question to all of his canidates to make sure they were dedicated to the company.",
            		"Your startup failed because you did not pick the people you brought into your company well enough."
		]);
	}	    

	if (interviewedElsewhere == "correct" || interview == "correct"){
		say([
            		"It looks like you are doing a fantastic job hiring people that fit your company culture!",
			"One of your employees is doing a standup job and has a solid future with the company. He senses he is on the right track and asks you for a raise.",
            		"You decide that his performance merits a bump in salary. You give him the raise and ask him to maintain confidentiality. 💵",
            		"Several months later, another employee asks for a raise and you suspect that word got out about the earlier raise.",
			"What do you do?",
		]).then(()=>{
		    // Payload of button can be used later to dectuct from the success of the users startup, but will not fail the startup in this chapter.
			sendButton("A. You decide not to give out any more raises outside of a formal evaluation process and announce that you will assess employees for raises during scheduled intervals.\u000AB. You give him a raise because he deserves it and ask him to maintain silence about it.",[
				{title:'A',payload:'{"raise": "yes"}'},
				{title:'B',payload:'{"raise": "no"}'},
			]);
		});
	}

    // You gave out too many raises too early in your startup's life
	if (raise == "no"){
		updateRecoed(userID,"end9");
		say([
            		"Ending 9: Too many raises 💸",
            		"You gave out too many raises too early in your startup's life and this will only spiral further.",
            		"Furthermore you should not need to keep confidential who gets raises. This should only inspire your team to work harder."
		]);
	}	
    
    // Correct choice to re-evaluate the process of getting a raise
	if (raise == "yes"){
		say([
            "Good choice making a formal evaluation process for team members to recieve raises! 👍",
			"Now, you become concerned about one of your other employees. Eventually, you decide to fire them. How should you approach this?",
		]).then(()=>{
			sendButton("A. When firing her, you keep in mind that the reason it didn’t work out is also your own failure because you didn’t match the needs of the company with your hire accurately enough.\u000AB. You blame it on their poor performance.",[
				{title:'A',payload:'{"fire2": "yes"}'},
				{title:'B',payload:'{"fire2": "no"}'},
			]);
		});
	}

    // Chooses insufficient way to fire employee
	if (fire2 == "no"){
		updateRecoed(userID,"end10");
		say([
            "Ending 10: Inappropriate fire 😱",
            "As the person in charge you should take responsibility for not hiring someone who fit your culture. If you blame performance on others that will only weaken your culture."
		]);
    }	
	
	if (fire1 == "yes" || fire2 == "yes"){
		say([
			"Congratulations! You reached the end of Chapter 3: Culture, Structure, Hiring & Firing 👩‍💼👨‍💼",
			"Here are some of the key points that can assist you in the process of building your startup:",
			"1. The first 10 hires are the most important to company culture and success.\u000A2. References are key to successful hiring.\u000A3. Great employees want to make a contribution, not just do a job]\u000A4. Metaphor for a leader’s job is to be an editor of the team – always hiring, firing, promoting and demoting to improve culture."
		]).then(()=>{
			sendButton("Go to Chapter 4!",[
				{title:'Yes!',payload:'{"action": "4"}'},
			]);
		});
	}

	/****************************************************************************************************/
	// Chapter 4: Marketing
	if (action == "4"){
		say([
            "Beginning Chapter 4: Marketing 📰",
			"Your startup is off the ground and running!",
			"You have a developed product, team, and distinct company culture.",
			"Now you are looking to enter the market and get your product in the hands of users.",
			"When do you plan to do that?",
		]).then(()=>{
			sendButton("A. At the very beginning. Try your best to be the first one so that there is no competition at all in the market.\u000AB. Somewhere in the middle. Markets still welcome new entries and you can take time to have your product be an order of magnitude better than the existing companies.\u000AC. Be one of the last players. At this stage, you can do some case study on existing companies and learn from their mistakes.",[
				{title:'A',payload:'{"enterMarket": "wrong1"}'},
				{title:'B',payload:'{"enterMarket": "correct"}'},
				{title:'C',payload:'{"enterMarket": "wrong2"}'},
			]);
		});
	}
	
	// Result of entering the market too early
	if (enterMarket == "wrong1"){
		say([
			"You shared your plan about entering the market as early as possible.",
			"However, your co-founders warn you about the upcoming competitors and tell you to put off a while.",
			"What do you do?",
		]).then(()=>{
			sendButton("A. Take his advice. Enter the market later, but not too late to ensure that the market still takes in new entries.\u000AB. Stick to the original plan. By the time there are competitors, you would have built a monopoly already.",[
				{title:'A',payload:'{"waitToEnter": "yes"}'},
				{title:'B',payload:'{"waitToEnter": "no"}'},
			]);
		});
	}
	
	// Continued to stick to your incorrect plan to enter the market too early
	if (waitToEnter == "no"){
		updateRecoed(userID,"end11");
		say([
            "Ending 11: Too early",
            "You entered the market too early and your product wasn't strong enough to withstand the competitors."
		]);
	}
	
	
	if (enterMarket == "wrong2"){
		say([
			"You are too late! The market is already crowded and you have to launch fast!",
			"You are going to need a viral marketing campaign to need a viral marketing campaign to announce the launching of your product.",
			"Which platform do you choose to put the advertisements?",
		]).then(()=>{
			sendButton("A. Digital media such as Twitter, Facebook and Youtube. These platforms are relatively cost-saving.\u000AB. Traditional media such as television, radio and newspaper. They still influence quite a lot of people and seem to be more trustworthy.",[
				{title:'A',payload:'{"lateViralCampaign": "correct"}'},
				{title:'B',payload:'{"lateViralCampaign": "wrong"}'},
			]);
		});
	}
	
	if (lateViralCampaign == "wrong"){
		updateRecoed(userID,"end12");
		say([
            "Ending 12: Wrong medium",
            "You chose the wrong medium to start your viral marketing campaign. Traditional media will not be as effective."
		]);
	}
	
	if (enterMarket == "correct" || waitToEnter == "yes"){
		say([
			"Entering the market in the middle is a great time!",
			"You want to launch a viral marketing campaign to announce the release of your product.",
			"Which platform do you choose to put the advertisements?",
		]).then(()=>{
			sendButton("A. Traditional media such as television, radio and newspaper. They still influence quite a lot of people and seem to be more trustworthy.\u000AB. Digital media such as Twitter, Facebook and Youtube. These platforms are relatively cost-saving.",[
				{title:'A',payload:'{"marketingMedium": "wrong"}'},
				{title:'B.',payload:'{"marketingMedium": "correct"}'},
			]);
		});
		
	}
	
	if (marketingMedium == "wrong"){
		say([
			"You found that the conversion rate of your advertisements 🗞 is lower than what you expected. You decide to take measures to enhance the virality.",
			"What do you do?",
		]).then(()=>{
			sendButton("A. Put in more money to the same television program/radio program/newspapers and ask them to put your advertisement somewhere eye-catching.\u000AB. Find other television programs/radio programs/newspapers companies and ask them to advertise for you as well.\u000AC. Turn to digital media instead and invest your funds into those platforms.",[
				{title:'A.',payload:'{"switchToDigital": "wrong"}'},
				{title:'B.',payload:'{"switchToDigital": "wrong"}'},
				{title:'C.',payload:'{"switchToDigital": "correct"}'},
			]);
		});
	}
	
	if (switchToDigital == "wrong"){
		updateRecoed(userID,"end12");
		say([
			"Ending 12: Wrong medium 📰",
            "You chose the wrong medium to start your viral marketing campaign. Traditional media will not be as effective."
		]);
	}
	
	if (marketingMedium == "correct" || switchToDigital == "correct" || lateViralCampaign == "correct"){
		say([
			"Your co-founder comes to you with three new ideas for ways to further enhance virality.",
			"You choose what you think is the most efficient use of the company’s time.",
		]).then(()=>{
			sendButton("A. Send out a newsletter to all of your customers about new features.\u000AB. Increase the volume of advertisements to potential customers to familiarize them with your branding.\u000AC. Do search engine optimization which increases the visibility of your web page to search engine users.",[
				{title:'A',payload:'{"increaseVirality": "wrong"}'},
				{title:'B',payload:'{"increaseVirality": "wrong"}'},
				{title:'C',payload:'{"increaseVirality": "correct"}'},
			]);
		});
	}
	
	if (increaseVirality == "wrong"){
		updateRecoed(userID,"end13");
		say([
            "Ending 13: Ineffective strategy",
            "Sending out newsletters is not an effective way to reach customers and simply increasing the volume of advertisements does not change its effectiveness.",
            "SEO (search engine optimization) is a fantastic way to increase the volume of people who view your wesite and company."
		]);
	}
	
	// End of chapter 4
	if (increaseVirality == "correct"){
		say([
			"Congratulations! You reached the end of Chapter 4: Marketing 📰",
            "Here are some of the key points that can assist you in your marketing efforts:",
            "1. Don't use things like Google ad words in the beginning stages. You should recruit initial users by hand.\u000A2. Enter the market sometime in the middle to ensure that your competitors are not to strong.\u000A3. To create a viral marketing campaign go digital!"
		]).then(()=>{
			sendButton("Go to Chapter 5!",[
				{title:'Yes!',payload:'{"action": "5"}'},
			]);
		});
	}
	
	
	/****************************************************************************************************/
	// Chapter 5: Valuing customers/getting user input
	if (action == "5"){
		say([
			"Beginning Chapter 5: Valuing Customers and Gathering User Input 👥",
			"Your company now has the proper underlying structure and you are beginning to gather feedback from your users on your product.",
			"With your marketing efforts you are bringing in new users who are some of the first people to be trying out your product. When collecting data, what do you think is the most important metric?",
		]).then(()=>{
			sendButton("A. The revenue generated.\u000AB. The retention rate of your customers.",[
				{title:'A',payload:'{"dataMetric":"wrong"}'},
				{title:'B',payload:'{"dataMetric":"correct"}'},
			]);
		});
	}
	
	// incorrect answer
	if (dataMetric == "wrong"){
		say([
			"Even though revenue is an important part of the success of a company, it is important in the early stages to retain the customers that use your product.",
			"Your co-founder says that the best way to do that is to now focus your efforts on customer feedback.",
			"How important do you view customer feedback?"
		]).then(()=>{
			sendButton("A. Not as important.\u000AB. High priority.",[
				{title:'A',payload:'{"customerImp":"wrong"}'},
				{title:'B',payload:'{"customerImp":"correct"}'},
			]);
		});
	}
	
	// ending early if not valuing early users
	if (customerImp == "wrong"){
		updateRecoed(userID,"end14");
		say([
            "Ending 14: Feedback not valued",
            "Your early customers and users were not valued properly.",
            "Therefore, more and more users were not treated properly and your company failed to adapt."
		]);
	}
	
	// correct answer
	if (dataMetric == "correct" || customerImp == "correct"){
		say([
			"Great choice! 👍 Valuing your early users/customers is critical to your company's expansion of its userbase, especially later down the line when it comes to further product development.",
			"Your next step is to deal with customer support. Do you choose to hire someone for this role or do it yourself? 🗣",
		]).then(()=>{
			sendButton("A. Do it yourself. You are the most knowledgeable about your product.\u000AB. Hire someone. You have more important matters of the company to spend your time on.",[
				{title:'A',payload:'{"hiring":"correct"}'},
				{title:'B',payload:'{"hiring": "wrong", "action": "5.b.b"}'},
			]);
		});
	}
    
    // Result of bad choice to hire someone to do CF
	if (hiring == "wrong" || action == "5.b.b") {
		updateRecoed(userID,"end15");
		say([
            		"Ending 15: Didn't do customer support",
           		 "It is vital that the founders do not hire workers to do customer support in the early stages of a startup.",
            		"You know your product the best and should be constantly on the phone with users who are experiencing problems."
		]);
	}
	
	// chooses to handle support on their own or valued customers
	if (hiring == "correct"){
		say([
			"You've been valuing your customers very well and are handling the user input portion of your company perfectly!",
            		"Now, a dedicated user who has been testing your product comes to you with a new idea that they think you should add.",
           		"How do you respond?"
		]).then(()=>{
			sendButton("A. Thank them and put the feature in development as soon as possible.\u000AB. Let them know that you will wait to see if more users mention this improvement before dedicating resources to it and thank them for their suggestion.",[
				{title:'A',payload:'{"development":"wrong"}'},
				{title:'B',payload:'{"development":"correct"}'},
			]);
		});					
	}
	
	if (development == "correct"){
		say([
			"Dedicating resources to something only a small amount of people suggested is usually not good, as you just indicated!",
			"Now you want to deal with expansion.",
			"Your main competitor still has a much larger user base than your company; what should you do in order to gain more traction and potentially become the more successful company?",
		]).then(()=>{
			sendButton("A. Talk to your competitor’s users and find out why their product is more desirable than yours.\u000AB. Talk to non-users who have never been exposed to your company or the competitor’s and ask for their input.",[
				{title:'A',payload:'{"competitor":"wrong"}'},
				{title:'B',payload:'{"competitor":"correct"}'},
			]);
		});
	}

	if (competitor == "wrong"){
		say([
			"Talking to your competitor’s users can be time consuming and an ineffective method. Instead you try one of these ways to get customer feedback:",
		]).then(()=>{
			sendButton("A. Have customers fill out a survey you email to them.\u000AB. Create a place on your website where users can directly comment on their experience and give them a way to express their mood while using your product.\u000AC. Customers will simply email you when they have a problem.",[
				{title:'A',payload:'{"feedback":"wrong"}'},
				{title:'B',payload:'{"feedback":"correct"}'},
				{title:'C',payload:'{"feedback":"wrongTwo"}'},
			]);
		});
	}

	if (feedback == "wrong" || feedback == "wrongTwo"){
		updateRecoed(userID,"end16");
		say([
            "Ending 16: Bad customer feedback",
            "If you have customers fill out a survey online or simply email you when they want to give you feedback you will only recieve feedback from the people who love or hate your product. You want to reach the middle ground where people are unsure if they want to continue using."
		]);
	}
	
	// if you valued your first users TOO MUCH; as in did what they said without contemplation
	if (development == "wrong"){
		updateRecoed(userID, "end17");
		say([
            "Ending 17: Poor use of resources",
            "You overvalued your first users' feedback and dedicated too many resources to something only a minor amount of people suggested."
		]);
	}
	
	// End of chapter 5
	if (feedback == "correct" || competitor == "correct"){
		say([
			"Congratulations! You reached the end of Chapter 5: Valuing Customers and Gathering User Input",
            "Here are some of the key points that can assist you in the process of building your startup:",
            "1. Do your own customer service! This is the most important thing because you know your product the best in the early stages and you need to hear from users directly.\u000A2. Always listen to negative feedback.\u000A3. Don't just listen to the feedback of the customers who use your product the most."
		]).then(()=>{
			sendButton("Go to Chapter 6!",[
				{title:'Yes!',payload:'{"action": "6"}'},
			]);
		});
	}
		
	/****************************************************************************************************/
	// Chapter 6: Fundraising
	if (action == "6"){
    	say([
        	"Beginning Chapter 6: 💰Fundraising💰",
        	"So...You've gotten to valuing user input and want to start fundraising?",
        	"Now that your product is picking up traction, you need to decide on an equity split among the founders.  How will you go about splitting up the equity?",
    	]).then(()=>{
        	sendButton("A. We’ll wait to see how much the investors take, then decide internally based on what’s most fair.\u000AB. We will split equity with the others, but I will take 10% extra as an “idea premium” for coming up with the idea as a reward for good ideas.\u000AC. We will split it evenly. ",[
				{title:'A',payload:'{"equitySplit":"investorWait"}'},
				{title:'B',payload:'{"equitySplit":"ideaPremium"}'},
				{title:'C',payload:'{"equitySplit":"evenly"}'},
			]);
    	});
	}
	
	// Result of not splitting equity before fundraising
	if (equitySplit == "investorWait"){
		updateRecoed(userID,"end23");
		say([
            	"Ending 23: Initial Equity Split Required",
            	"Oof. Investors like to see that founder equity is split up and written in ink.",
            	"No investors are interested at all.  Too bad!"
		]);
	}
	
	// Result of idea premium in equity split
	if (equitySplit == "ideaPremium"){
	    say([
			"Investors in Silicon Valley like to see that founders like you have equity split roughly evenly among cofounders…",
			"Idea Premiums aren’t a thing in practice.  But don’t despair!  You can come back from this.",
			"In the event of a founder breakup, how will the equity be handled? 📊",
	    ]).then(()=>{
			sendButton("A. To incentivize work, a founder leaves before the first year receives no equity.  After that, their equity grows proportionally with time until the end of the fifth year (when they finally own 100%).\u000AB. All founders are entitled to their equity ad infinitum, as the product wouldn’t be where it is without their effort.",[
		        {title:'A',payload:'{"vestEquity": "yesVest"}'},
		        {title:'B',payload:'{"vestEquity": "noVest"}'},
		    ]);
	    });
	}
	
	// Result of even  equity split
	if (equitySplit == "evenly"){
	    say([
			"Great! Investors in Silicon Valley like to see that founders like you have equity split roughly evenly among cofounders.",
			"But in the event of a founder breakup, how will the equity be handled?",
	    ]).then(()=>{
			sendButton("A. To incentivize work, a founder leaves before the first year receives no equity.  After that, their equity grows proportionally with time until the end of the fifth year (when they finally own 100%).\u000AB. All founders are entitled to their equity ad infinitum, as the product wouldn’t be where it is without their effort.",[
		        {title:'A',payload:'{"vestEquity": "yesVest"}'},
		        {title:'B',payload:'{"vestEquity": "noVest"}'},
		    ]);
	    });
	}
	
	if (vestEquity == "yesVest"){
    	say([
        	"Awesome! Investors also like to see that founder equity is “vested”, meaning it grows over time.  This ensures founders have “skin in the game” to incentivize staying and protects against deadweight equity.",
        	"Now that your initial equity is split up, you can fundraise!",
        	"Your product draws interest from many top venture capitalists from around the globe, as well as family members and friends begging to help out since they know you. You have so many options, you don’t know what to do! Who do you go to?",
    	]).then(()=>{
        	sendButton("A. I’ll go to my friends and family to see how they can help out, then scope out the investor scene.\u000AB. There’s one investor who’s shown a lot of interest, but I don’t know much about his track record and credentials.  He promises a “grand slam” deal for us, so I’ll go with him.\u000AC. I’m going to test my luck and go through the accredited investor process.  There’s no guarantee of anything, but I’ll play it safe and only frequent known and trusted firms. ",[
				{title:'A',payload:'{"vestedfirstRound":"f&f"}'},
				{title:'B',payload:'{"vestedfirstRound":"riskyInvestor"}'},
				{title:'C',payload:'{"vestedfirstRound":"accredited"}'},
			]);
    	});
	}
	
	if (vestedfirstRound == "f&fVest"){
		updateRecoed(userID,"end24");
		say([
            	"Ending 24: Friends & Family Round",
            	"Oops! Investors hate to see that you have a lot of equity held by loved ones.",
            	"No investors are interested at all.  Too bad!"
		])
	}
	if (vestedfirstRound == "riskyInvestorVest"){
		updateRecoed(userID,"end25");
		say([
            	"Ending 25: Fraudulent Investor",
            	"Ick!  You pursued a lead with a risky investor and it failed. There's no coming back from this."
		])
	}
	
	if (vestEquity == "noVest"){
    	say([
        	"Setback alert! 🚨 Investors also like to see that  founder equity is “vested”, meaning it grows over time.  This ensures founders have “skin in the game” to incentivize staying and protects against deadweight equity.  Your equity isn’t vested. ",
        	"However, your product draws interest from many top venture capitalists from around the globe, as well as family members and friends begging to help out since they know you. You have so many options, you don’t know what to do! Who do you go to?",
    	]).then(()=>{
        	sendButton("A. I’ll go to my friends and family to see how they can help out, then scope out the investor scene.\u000AB. There’s one investor who’s shown a lot of interest, but I don’t know much about his track record and credentials.  He promises a “grand slam” deal for us, so I’ll go with him.\u000AC. I’m going to test my luck and go through the accredited investor process.  There’s no guarantee of anything, but I’ll play it safe and only frequent known and trusted firms. ",[
				{title:'A',payload:'{"unvestfirstRound":"f&f"}'},
				{title:'B',payload:'{"unvestfirstRound":"riskyInvestor"}'},
				{title:'C',payload:'{"unvestfirstRound":"accredited"}'},
		    ]);
	    });
	}
	
	if (unvestedfirstRound == "f&f"){
		updateRecoed(userID,"end24");
		say([
            	"Ending 24: Friends & Family Round",
            	"Oops! Investors hate to see that you have a lot of equity held by loved ones.",
            	"No investors are interested at all.  Too bad!"
		]);
	}
	
	if (unvestedfirstRound == "riskyInvestor"){
		updateRecoed(userID,"end25");
		say([
            	"Ending 25: Fraudulent Investor",
            	"Ick!  You pursued a lead with a risky investor and it failed. There's no coming back from this."
		]);
	}	
	
	if (vestedfirstRound == "accredited" || unvestedfirstRound == "accredited"){
	say([
        	"Great thinking!  You should only trust accredited investors when fundraising.",
        	"You sit down with Ben Horowitz, founder at Andreessen Horowitz (one of the most storied VC firms in Silicon Valley), for a meeting.  He gives you the reins and you run the meeting.  What do you do?  ",
    	]).then(()=>{
        	sendButton("A. Give him your best 30-second pitch and show you’re growing fast.  Even though you’re a small company now, there’s enough room in the market for a unicorn (billion dollar startup).  Give him the floor to share his ideas and questions, then ask for a concrete dollar-amount of funding.\u000AB. Ask him if he’s ready for the next big thing in tech.  Tell him how the media has compared you to Twitter, Facebook and Amazon for months.  You even have emails from Jeff Bezos!  Show him your financial statements and ask what dollar-amount he’s willing to give.\u000AC. Ask him how much he knows about the current market.  If he knows a lot, have an enlightening conversation with him about market trends.  If he doesn’t, teach him something new.  Follow up with him in the next few days to discuss another meeting where you’ll discuss dollar-amounts of funding.",[
				{title:'A',payload:'{"meetingReins":"thirtySec"}'},
				{title:'B',payload:'{"meetingReins":"mediaBuzz"}'},
				{title:'C',payload:'{"meetingReins":"marketTrends"}'},
		    ]);
	    });
	}
	if (meetingReins == "thirtySec" || meetingReins == "marketTrends"){
	say([
        	"Great going champ!  Ben and Andreessen Horowitx thought you had a home run pitch!",
        	"Ben talked to his colleages and they’ve decided to invest!  They loved your pitch and think they can score big betting on you.",
    		"Now that you have a check in hand, what do you do?",
    	]).then(()=>{
        sendButton("A. Use the money to treat the team to a vacation weekend in order to recharge and motivate.  Use the solid momentum to talk to other investors and try another round of funding at a higher valuation. \u000AB. Cash that check and put it to use immediately!  Get back to work and improve the product as much as within your budget.",[
				{title:'A',payload:'{"checkUse":"vacay"}'},
				{title:'B',payload:'{"checkUse":"work"}'},
		    ]);
	    });
	}
	
	if (meetingReins == "mediaBuzz"){
		updateRecoed(userID,"end26");
		say([
            	"Ending 26: Bad Pitch Intuition",
            	"Good thing you don't play baseball!  Because Andreessen Horowitz was unimpressed with your pitch. Next time, try sticking to short pitch and impress them with your knowledge of the market...media buzz is worth nothing in finance!"
		]);
	}	
	
	if (checkUse == "vacay"){
		updateRecoed(userID,"end27");
		say([
            	"Ending 27: Embezzelment Charges",
            	"Oh no!  You were caught on a golf outing in Las Vegas using business money for personal expenses.  Your credibility in the business world plummets and you can’t recover."
		]);
	}	
	
	// End of chapter 6
	if (checkUse == "work"){
		say([
			"Congratulations! You reached the end of Chapter 6: 💰Fundraising💰",
            "Here are some of the key points that can assist you in the process of building your startup:",
            "1. Split up founder equity early (before talking to anyone).\u000A2. Vest your equity!\u000A3. Only talk to accredited investors (respectable shops or individuals).\u000A4. Know your details and crush the pitch!"
		]).then(()=>{
			sendButton("Go to Chapter 7!",[
				{title:'Yes!',payload:'{"action": "7"}'},
			]);
		});
	}


	/****************************************************************************************************/
	// Chapter 7: Growth
	if (action == "7"){
    	say([
        	"Begining Chapter 7: Growth 📈",
        	"You have gotten fundraising and your startup is growing quickly.",
        	"You want to expand your business and turn your attention to focusing on growth.",
        	"Who do you plan to hold responsible for the growth of the startup?",
    	]).then(()=>{
        	sendButton("A. A growth team. This team has one single job to do and that is to analyze and manage the growth of the startup.\u000AB. The whole company should be the growth team and everyone should focus on the growth of the company.",[
           			{title:'A',payload:'{"growthTeam": "wrong"}'},
           			{title:'B',payload:'{"growthTeam": "correct"}'},
        	]);
    	});
	}

	// Result of setting up a growth Team
	if (growthTeam == "wrong"){
	    say([
			"Oh no!",
			"You allocated a growth team and lost control of the direction your company is going in.",
			"What do you do now?",
	    ]).then(()=>{
		sendButton("A. Allocate a different team. The people you originally selected were not the right fit for the job.\u000AB. Have the entire company focus on growth with you as the leader.",[
		        {title:'A',payload:'{"wholeComp": "wrong"}'},
		        {title:'B',payload:'{"wholeComp": "correct"}'},
		    ]);
	    });
	}
	
	if (wholeComp == "wrong"){
		updateRecoed(userID,"end18");
		say([
            	"Ending 18: Allocated growth team",
            	"You should not allocate a growth team! Everyone should focus on growth!",
            	"This will cause your startup to fail because nobody will bbe on the same page interms of growth and not driven by a particular mission."
		])
	}
	
	// Product market fit and growth should be two stages
	if (growthTeam == "correct" || wholeComp == "correct"){
	    say([
		    "As the head of your company you take charge of your team and sit them down to discuss the growth of your company.",
		    "One team member wants to make sure your product satisfies the demand of the market.",
		    "Another team member suggests you should make a growth model that will help you plan out your journey to acquiring new users.",
		    "What do you do?",
	    ]).then(()=>{
		    sendButton("A. Listen to the second team member! Start with a growth model; it is the most important!\u000AB. Merge the two phases into one and try your best to do both things. Just build a model and use it for now. Later improve this model if time permits.\u000AC. Divide them into two phases! Take the time to make sure your product satisfies the demand of the market, then take the time to build the model, scale and grow.",[
		   		{title:'A',payload:'{"twoStages": "wrong"}'},
		   		{title:'B',payload:'{"twoStages": "wrong"}'},
		   	    {title:'C',payload:'{"twoStages": "correct"}'},
		    ]);
	   });
	}

	if (twoStages == "wrong"){
		say([
			"Oops!",
			"Finding product-market fit and making a growth model is an important two step process.",
			"You still don’t have a stable customer base and are losing some of your existing customers.",
			"What do you do now?",
	    ]).then(()=>{
			sendButton("A. Do growth hacking to boost user acquisition.\u000AB. Review your product-market fit to check what went wrong.",[
				{title:'A',payload:'{"review": "wrong"}'},
		 		{title:'B',payload:'{"review": "correct"}'},
			]);
		});
	}

	if (review == "wrong"){
		updateRecoed(userID,"end19");
		say([
            "Ending 19: Poor planning",
            "You did not plan accordingly and your startup lost momentum as a result!"
		]);
	}
	
	
	// Find your North Star
	if (twoStages == "correct" || review == "correct"){
		say([
			"One of the most important aspects of growing a company is finding your north star objective.",
			"This is the statistic that drives your company towards a common goal.",
			"How do you find this?",
	    ]).then(()=>{
			sendButton("A. The statistic in your company that represents the user base you want to grow the most. For example, if you were a social media company you want to grow the number of active users on your site and not just people who have signed up.\u000AB. Find the weakest link in your company and try to improve it. For example, if you were a social media company and you identified your greatest weakness to be the number of registered users.",[
	    		{title:'A',payload:'{"northStar": "correct"}'},
	    		{title:'B',payload:'{"northStar": "wrong"}'},
			]);
    	});
	}

	if (northStar == "wrong"){
		say([
			"Before you go ahead with that plan, your team member thinks this is the wrong direction to go in.",
			"He thinks the best way to find the startup’s north star is to identify the magic moment.",
			"Do you agree with him?",
	    ]).then(()=>{
			sendButton("A. Yes! Identify the “magic moment” which is the moment users get hooked on your product. Then use notifications to show them this ASAP.\u000AB. No! Go ahead with your original plan!",[
		    		{title:'A',payload:'{"magicMoment": "correct"}'},
		    		{title:'B',payload:'{"magicMoment": "wrong"}'},
			]);
	    });
	}
	
	if (magicMoment == "wrong"){
		updateRecoed(userID,"end20");
		say([
            		"Ending 20: Identify magic moment",
            		"Identifying the magic moment is key to growth and you need to find it to be successful!",
            		"For example, Facebook's magic moment was the instance users saw their friends on the app. Then they were hooked.",
			"if you don't indentify this your startup will not make it."
		]);
	}

	// internationalization
	if (northStar == "correct" || magicMoment == "correct"){
		say([
			"While checking the product-market fit, you notice the international market seems profitable.",
			"You want to translate your software into multiple languages but your teammates think you should only focus on the local market.",
			"What do you do?",
	    ]).then(()=>{
			sendButton("A. Listen to your teammates. Now you only have a small business, internationalization could be left for future concerns.\u000AB. Stick to your idea. A scalable translation infrastructure will enable you to attack all the languages in the future and thus enable you to scale.",[
		    		{title:'A',payload:'{"action": "gameEnd","internationalize": "wrong"}'},
		    		{title:'B',payload:'{"action": "gameEnd","internationalize": "correct"}'},
			]);
	    });
	}
	
	if (internationalize == "correct"){
	    // Adds a point for a more successful startup
	    billionDollar = billionDollar + 1;
	}
	
	if (internationalize == "wrong" || internationalize == "correct"){
	    	say([
			"Congratulations! You reached the end of Chapter 7: Growth",
            		"Here are some of the key points that can assist you in:",
            		"1. Ensure product-market fit and then make a growth model.\u000A2. Use a magical moment to grow base. For example, Facebook's magic moment was the instance users saw their friends on the app. Then they were hooked."
    	]).then(()=>{
			sendButton("You reached the end of Nemobot Startup Incubator! Press continue to see how your company did.",[
				{title:'Continue',payload:'{"action": "8"}'},
			]);
		});
	}
	
	/****************************************************************************************************/
	// End of game
	if (action == "8" && billionDollar < 3){
		updateRecoed(userID,"end21");
		say([
			"Ending 21: Sucessful startup!",
			"You are on your way to making a great company! 🎉"
		]);
    	}
	
	if (action == "8" && billionDollar >= 3){
		updateRecoed(userID,"end22");
		say([
			"Ending 22: Billion dollar startup!",
			"You answered perfectly! Your startup will be a raging success! 🎉"
		]);
	}
    
};


module.exports = {
	filename: 'helloworld',
	title: 'Can you start a startup?',
	introduction: [
		'In this game you will role play as the founder of a technology startup 👩‍💻👨‍💻',
		'You will be asked questions that simulate the challenges of growing your new company,\u000AThe choices you make will impact the success of your startup,\u000ACan you create the next big technology company?',
	],
	start: start,
	state: state
};
