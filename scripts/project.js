/* Lesson 5 */
let today = new Date();
let currentDay = today.getDay();
let Message = "";
let dayOfWeekString = "";
switch (currentDay) {
  case 0:
    dayOfWeekString = "Sunday";
    Message = "Ask a girl to stadium singing";
    break;
  case 1:
    dayOfWeekString = "Monday";
    Message = "Take a girl to roller skating.";
    break;
  case 2:
    dayOfWeekString = "Tuesday";
    Message = "Show off you moves at latin dancing.";

    break;
  case 3:
    dayOfWeekString = "Wednesday";
    Message = "Dip a girl at country dance.";
    break;
  case 4:
    dayOfWeekString = "Thursday";
    Message = "Host a game night. ";
    break;
  case 5:
    dayOfWeekString = "Friday";
    Message = "Date Night. Make your move.";
    break;
  case 6:
    dayOfWeekString = "Saturday";
    Message = "Go on a hike with a beautiful woman.";
    break;
}

document.querySelector("#message1").textContent = Message;
document.querySelector("#message2").textContent = dayOfWeekString;

function getPickuplines() {
  return [
    "If you were a president, you'd be Babe-raham Lincoln. ",
    "Are you a magician? Because whenever I look at you, everyone else disappears!",
    "Did you sit in a pile of sugar? Cause you have a pretty sweet butt ",
    "Are you a camera? Because every time I look at you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Do you know what my shirt is made of? Boyfriend material.",
    "Do you work at Starbucks? Because I like you a latte.",
    "If you were a vegetable you'd be a cute-cumber.",
    "Are you African? Because you're a frican babe.",
    "I'm not a photographer, but I can picture me and you together.",
    "Are you religious? Because you're the answer to all my prayers.",
    "Are you my Appendix? Because I have a funny feeling in my stomach that makes me feel like I should take you out.",
    "Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
    "Is your daddy a Baker? Because you've got some hot buns! ",
    "Do you play soccer? Because you're a keeper!",
    "Did you invent the airplane? Cause you seem Wright for me. ",
    "If God made anything more beautiful than you, I'm sure he'd keep it for himself.",
    "Do you have a map? I'm getting lost in your eyes.",
    "I don't have a library card, but do you mind if I check you out. ",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a fruit, because Honeydew you know how fine you look right now?",
    "Do you live in a corn field, cause I'm stalking you.",
    "Even if there wasn't gravity on earth, I'd still fall for you.",
    "I???m not a hoarder but I really want to keep you forever.",
    "Are you a parking ticket? 'Cause you've got fine written all over you.",
    "You look cold. Want to use me as a blanket?",
    "Let me tie your shoes, cause I don???t want you falling for anyone else.",
    "Do I know you? Cause you look exactly like my next girlfriend.",
    "I'm no organ donor but I'd be happy to give you my heart.",
    "I seem to have lost my phone number. Can I have yours?",
    "Is your nickname Chapstick? Because you???re da balm!",
    "Can I take your picture to prove to all my friends that angels do exist?",
    "Do you want to see a picture of a beautiful person? (hold up a mirror)",
    "Are you Australian? Because you meet all of my koala-fications.",
    "I'm not drunk, I'm just intoxicated by YOU.",
    "I was blinded by your beauty... I'm going to need your name and number for insurance purposes.",
    "Is there an airport nearby or is that just my heart taking off?",
    "There must be a lightswitch on my forehead because everytime I see you, I light up.",
    "Hi, I'm writing a term paper on the finer things in life, and I was wondering if I could interview you?",
    "Have you been to the doctor lately? Cause I think you're lacking some Vitamin Me.",
    "Can I follow you home? Cause my parents always told me to follow my dreams.",
    "You look so familiar... didn't we take a class together? I could've sworn we had chemistry.",
    "Hi, I???m Mr. Right. Someone said you were looking for me?",
    "Do you like Nintendo? Because Wii would look good together. ",
    "Was your dad a boxer? Cause you're a knockout!",
    "You're so beautiful that you made me forget my pickup line.",
    "If I had a star for every time you brightened my day, I'd have a galaxy in my hand.",
    "I was wondering if you had an extra heart mine seems to have been stolen",
    "Do you smoke pot? Because weed be cute together.",
    "I thought happiness started with an H. Why does mine start with U?",
    "Are you a campfire? Cause you are hot and I want s'more.",
    "If I were a cat I'd spend all 9 lives with you.",
    "If you were a tropical fruit, you'd be a Fine-apple!",
    "Are you a banana? Because I find you a-peeling",
    "Are you Netflix? Because I could watch you for hours.",
    "Are you a bank loan? Because you???ve got my interest",
    "Are you Jewish? Cause you ISRAELI HOT.",
    "You may be asked to leave soon, you're making all the other women look bad.",
    "Are you lost ma'am? Because heaven is a long way from here.",
    "Put down that cupcake... you're sweet enough already.",
    "Four plus four equals eight, but you plus me equals fate.",
    "Did you just come out of the oven? Because you're hot!",
    "Is your dad a drug dealer? Cause you're so Dope!",
    "Smoking is hazardous to your health... and baby, you're killing me!",
    "Are you Hurricane Katrina? Cause you???re blowing me away.",
    "Me without you is like a nerd without braces, A shoe without laces, aSentenceWithoutSpaces",
    "If I told you that you had a great body, would you hold it against me?",
    "Babe, your beauty makes the morning sun look like the dull glimmer of the moon.",
    "If I???m vinegar, then you must be baking soda. Because you make me feel all bubbly inside!",
    "You must be the cure for Alzheimer???s, because you???re unforgettable.",
    "Please call 9-1-1, because you just made my heart stop!",
    "You're so hot, that if you ate a piece of bread, you'd poop out toast!",
    "Is your name Ariel? Cause we Mermaid for each other!",
    "Charizards are red, Squirtles are blue, if you were a Pokemon, I would choose you!",
    "Could you please step away from the bar? You???re melting all the ice!",
    "Are you from Russia? ???Cause you???re Russian my heart rate!",
    "I???m in the mood for pizza... a pizza you, that is! ",
    "I was so content with my life and one day I asked God, what could be better than this? And then I met you.",
    "Most guys need 3 meals a day to keep going... I just need eye contact from you.",
    "Are you from Tennessee? Because you're the only ten I see!",
    "There's only one thing I want to change about you, and that's your last name.",
    "I didn't see any stars in the sky tonight, the most heavenly body was standing right next to me.",
    "Is your dad a terrorist? Because you are the bomb!",
    "I must be a snowflake, because I've fallen for you.",
    "There is something wrong with my cell phone. It doesn't have your number in it.",
    "Baby, if you were words on a page, you'd be what they call FINE PRINT!",
    "Do you work at Dick's? Cause you're sporting the goods.",
    "Do you have a twin sister? Then you must be the most beautiful girl in the world!",
    "You know I'd like to invite you over, but I'm afraid you're so hot that you'll skyrocket my air-conditioning bill.",
    "Excuse me, but I think I dropped something. MY JAW!",
    "When God made you, he was showing off.",
    "If you were a booger I'd pick you first.",
    "Excuse me, I think you have something in your eye. Oh wait, it's just a sparkle.",
    "If I were to ask you out on a date, would your answer be the same as the answer to this question?",
    "You must be a very important textbook passage, because seeing you is the highlight of my day.",
    "Are you a magician??? Because Abraca-DAYUM!",
    "You wanna know what's beautiful? Read the first word again.",
    "Your lips look so lonely.... Would they like to meet mine?",
    "My love for you is like diarrhea, I just can't hold it in.",
    "Hello, I'm a thief, and I'm here to steal your heart.",
    "You're so hot you would make the devil sweat.",
    "Hey baby you're so fine you make me stutter, wha-wha-what's your name?",
    "I bet you $20 you're gonna turn me down.",
    "How come you're not on top of a Christmas tree? I thought that's where angels belonged.",
    "Do you have the time? [Tells you the time] No, the time to write down my number?",
    "Your legs must be tired because you've been running through my mind all night.",
    "Wouldn't we look cute on a wedding cake together?",
    "Can I borrow a kiss? I promise I'll give it back.",
    "I may not be a genie, but I can make your dreams come true.",
    "Would you grab my arm so I can tell my friends I've been touched by an angel?",
    "Hey... Didn't I see your name in the dictionary under Shazaam!?",
    "If a thousand painters worked for a thousand years, they could not create a work of art as beautiful as you.",
    "Did you have lucky charms for breakfast? Because you look magically delicious!",
    "No wonder the sky is grey today, all the blue is in your eyes.",
    "Can I borrow your cell phone? I need to call animal control, because I just saw a fox!",
    "Hershey's makes millions of kisses a day.. .all I'm asking for is one from you.",
    "I'm not actually this tall. I'm sitting on my wallet.",
    "When I first saw you I looked for a signature, because every masterpiece has one.",
    "Does your father sell diamonds? Because you are FLAWLESS!",
    "I like Legos, you like Legos, why don't we build a relationship?",
    "Baby I might not be Sriracha sauce but, I sure will spice up your life.",
    "People call me John, but you can call me tonight.",
    "Was you father an alien? Because there's nothing else like you on Earth!",
    "Life without you would be like a broken pencil... pointless.",
    "If I had a penny for every time I thought of you, I'd have exactly one cent, because you never leave my mind.",
    "Kiss me if I'm wrong, but dinosaurs still exist, right?",
    "If I received a nickel for everytime I saw someone as beautiful as you, I'd have five cents.",
    "If nothing lasts forever, will you be my nothing?",
    "Hello are you married? [Yes] Well I didn't hear you say happily.",
    "You are like a candy bar: half sweet and half nuts.",
    "Hello how are you? [Fine] Hey, I didn't ask you how you looked!",
    "Did you clean your pants with Windex? I can practically see myself in them.",
    "How was heaven when you left it?",
    "Did you fart, cause you blew me away.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "Hey... somebody farted. Let's get out of here.",
    "I didn't know that angels could fly so low!",
    "There must be something wrong with my eyes, I can't take them off you.",
    "You are so fine, I wish I could plant you and grow a whole field of you!",
    "Is your last name Gillette? Because you are the best a man can get.",
    "Is your name swiffer? 'Cause you just swept me off my feet.",
    "Excuse me, but you dropped something back there (What?) This conversation, lets pick it up later tonight.",
    "Are you going to kiss me or do I have to lie to my diary?",
    "Are you cold? You look like you could use some hot chocolate... Well, here I am!",
    "Did you die recently? Cause girl, you look like an angel to me.",
    "I could lay next to you forever... or until we decide to go eat.",
    "If stars would fall everytime I would think of you, the sky would soon be empty.",
    "You know, Dr. Phil says I'm afraid of commitment...Want to help prove him wrong?",
    "Baby, you're so sweet, you put Hershey's outta business.",
    "Wanna go bowling? I thought it might be right up your alley.",
    "Is your name Dwayne Johnson? Because you Rock my world!",
    "You???re not a vegetarian, are you? Because I???d love to meat you.",
    "You???re so attractive that my phone gets hot just from talking to you.",
    "Can I buy you a drink or do you just want the money?",
    "Did the sun come out or did you just smile at me?",
    "So there you are! I've been looking all over for YOU, the woman of my dreams!",
    "Do you believe in love at first sight, or should I walk by again?",
    "Inheriting eighty million bucks doesn't mean much when you have a weak heart.",
    "You see my friend over there? [Point to friend] He wants to know if YOU think I'M cute.",
    "The only thing your eyes haven't told me is your name.",
    "Excuse me, I just noticed you noticing me and I just wanted to give you notice that I noticed you too.",
    "(As she is leaving) Hey aren't you forgetting something? (What?) Me!",
    "Somebody better call God, cuz heaven's missing an angel!",
    "Can I borrow a quarter? [What for?] I want to call my mom and tell her I just met the man/woman of my dreams.",
    "If I were a transplant surgeon, I'd give you my heart.",
    "Are you Willy Wonka's daughter, 'cuz you look sweet and delicious.",
    "If you were a transformer, you'd be a HOT-obot, and your name would be Optimus Fine.",
    "Do you remember me? [No.] Oh that's right, we've only met in my dreams.",
    "Did it hurt? (Did what hurt?) When you fell out of heaven?",
    "I'm sorry, were you talking to me? [No] Well then, please start.",
    "I know milk does a body good, but baby, how much have you been drinking?",
    "I play the field, and it looks like I just hit a home run with you.",
    "I'm new in town. Could you give me directions to your apartment?",
    "If I could rearrange the alphabet, I would put 'U' and 'I' together.",
    "If you were a tear in my eye I would not cry for fear of losing you.",
    "If your heart was a prison, I would like to be sentenced for life.",
    "My lenses turn dark in the sunshine of your love.",
    "What time do you have to be back in heaven?",
    "Baby, I'm no Fred Flintstone, but I can make your Bedrock!",
    "You'd better direct that beauty somewhere else, you'll set the carpet on fire.",
    "[Point at her butt] Pardon me, is this seat taken?",
    "Was your father a thief? 'Cause someone stole the stars from the sky and put them in your eyes.",
    "I love you like a pig loves not being bacon.",
    "Are your parents bakers? Cause they sure made you a cutie pie!",
    "Did you go to bed early last night? From the looks of it, you got your beauty sleep.",
    "What's on the menu? Me-n-U",
    "You're like pizza. Even when you are bad, you're good",
    "I'd say God Bless you, but it looks like he already did.",
    "I must be in a museum, because you truly are a work of art.",
    "My friend thinks you're kinda cute, but I don't... I think you're absolutely gorgeous!",
    "Let's commit the perfect crime: I'll steal your heart, and you'll steal mine.",
    "You spend so much time in my mind, I should charge you rent.",
    "If kisses were snowflakes, I'd send you a blizzard",
    "Are you my phone charger? Because without you, I'd die.",
    "Are you a hipster, because you make my hips stir.",
    "Are you a cat? Cause you are purrrfect",
    "I wish I was cross eyed, so I could see you twice.",
    "Are you on Nickelodeon? Cause you're a-Dora-ble!",
    "I don't know if you're beautiful, I haven't gotten past your eyes yet.",
    "You don't need keys to drive me crazy.",
    "If Internet Explorer is brave enough to ask you to be your default browser, I???m brave enough to ask you out!",
    "Is Your Dad A Preacher? Cause Girl You???re A Blessing.",
    "Are you a vampire? Cause you looked a little thirsty when you looked at me.",
    "Can I hit you in the face... with my lips?",
    "You may fall from the sky, you may fall from a tree, but the best way to fall... is in love with me.",
    "When I first saw you, I knew we could win the Stanley Cup in tonsil hockey.",
    "My name isn't Elmo, but you can tickle me any time you want to.",
    "Can you take me to the doctor? Because I just broke my leg falling for you.",
    "You must be a ninja, because you snuck into my heart",
    "I need a dollar, but I only have 90 cents... do you want to be my dime?",
    "[Look at her shirt label.] When they say, What are you doing? You respond: Yep! Made in heaven!",
    "Be unique and different, say yes.",
    "Your eyes are blue, like the ocean. And baby, I'm lost at sea.",
    "My lips are like skittles. Wanna taste the rainbow?",
    "They say dating is a numbers game... so can I get your number?",
    "You be the Dairy Queen and I'll be your Burger King: You treat me right, and I'll do it your way.",
    "Pinch me. [Why?] You're so fine I must be dreaming.",
    "If I had to choose between breathing or loving you, I would say I love you with my last breath!",
    "Ouch! My tooth hurts! [Why?] Because you are soooo sweet!",
    "I'm not trying to impress you or anything, but... I'm Batman!",
    "You must be from Pearl Harbor, because baby, you're the bomb.",
    "You must be Jamaican, because Jamaican me crazy.",
    "Do you know karate? Because your body is really kickin'.",
    "You must be a high test score, because I want to take you home and show you to my mother.",
    "I???m learning about important dates in history class. Wanna be one of them?",
    "I hear they banned you from school lunches for being so sweet.",
    "I need some answers for my math homework. Quick. What???s your number?",
    "Are you a Snickers bar? Cause you satisfy me.",
    "Is your last name Campbell? Cause you're mmmm... good!",
    "You're like a dictionary, you add meaning to my life!",
    "Baby, you are so fine I could put you on a plate and sop you up with a biscuit.",
    "Is there a rainbow today? Because I just found the treasure I've been searching for!",
    "You remind me of a magnet, because you sure are attracting me over here!",
    "Hey, is it just me, or are we destined to be married?",
    "Hello. Are you taking any applications for a boy/girlfriend?",
    "I have an 'owie' on my lip. Will you kiss it and make it better?",
    "Let's make like a fabric softener and 'Snuggle",
    "Hi, my name is Doug. That's 'god' spelled backwards with a little bit of you wrapped up in it.",
    "If I could reach out and hold a star for everytime you've made me smile, I'd hold the sky in the palm of my hand.",
    "Well, here I am. What were your other two wishes?",
    "How much does a polar bear weigh? [How much?] Enough to break the ice... Hi, I'm (insert name here).",
    "Should I smile because we are friends, or cry because I know that is what we will ever be?",
    "When I look into your eyes, it is like a gateway into the world of which I want to be a part.",
    "Hey baby. You got a jersey? [A jersey?...Why?] Because I need your name and number.",
    "You???re so cute it???s distracting!",
    "Hello, I'm doing a survey of what people think are the cheesiest pickup ",
    "ines. So, do you pick 'Do you come here often?', 'What's your sign?', or 'Hello,",
    "I'm doing a survey of what people think are the cheesiest pickup lines.'?",
    "(hold out hand) Would you hold this for me while I go for a walk?",
    "This time next year let???s be laughing together.",
    "Is your last name Whitman, because I want to sample you.",
    "On a scale of 1 to 10, you're a 9. I'm the 1 you need.",
    "Hey baby, I must be a light switch, cuz every time I see you, you turn me on!",
    "I hope your day has been as beautiful as you are.",
    "Is your father Little Caesar? Cause you look Hot 'n Ready.",
    "If you were a chicken, you'd be impeccable.",
    "I could use some spare change and you're a dime.",
    "I'm no mathematician, but I'm pretty good with numbers. Tell you what, Give me yours and watch what I can do with it.",
    "Didn't I see you on the cover of Vogue?",
    "Have you always been this cute, or did you have to work at it?",
    "Hey, don't I know you? Yeah, you're the girl with the beautiful smile.",
    "Is your father a mechanic? Because you???ve got a finely tuned body!",
    "I have had a really bad day and it always makes me feel better to see a pretty girl smile. So, would you smile for me?",
    "I hope you know CPR, because you take my breath away!",
    "I just had to come talk with you. Sweetness is my weakness.",
    "I think I can die happy now, cause I've just seen a piece of heaven.",
    "I sneezed because God blessed me with you.",
    "Is it hot in here or is it just you?",
    "Nice to meet you, I'm (your name) and you are...gorgeous!",
    "I may not be a genie, but I can make all your wishes come true!",
    "Was your dad king for a day? He must have been to make a princess like you.",
    "Were you arrested earlier? It's gotta be illegal to look that good.",
    "Were your parents Greek Gods, 'cause it takes two gods to make a goddess.",
    "What does it feel like to be the most beautiful girl in this room?",
    "What's that on your face? Oh, must just be beauty. Here, let me get it off. Hey, it's not coming off!",
    "I blame you for global warming... your hotness is too much for the planet to handle!",
    "You are the reason men fall in love.",
    "You better call Life Alert, 'cause I've fallen for you and I can't get up.",
    "You're single. I'm single. Coincidence? I think not.",
    "You know, you might be asked to leave soon. You're making the other women look really bad.",
    "You look like my third wife. [how many time have you been married?] Twice.",
    "You make me melt like hot fudge on a sundae.",
    "You should be someone's wife.",
    "Were you in Boy Scouts? Because you sure have tied my heart in a knot.",
    "Are you as beautiful on the inside as you are on the outside?",
    "I know where they give out free drinks... it???s a place called ???My House???!",
    "I can't think of anyone else I???d rather survive a Zombie Apocalypse with.",
    "Babe! you look so fine I could drink your bath water!",
    "If I had a rose for every time I thought of you, I would be walking through my garden forever.",
    "Girl, if I were a fly, I'd be all over you, because you're the shit!",
    "Hey, how did you do that? (What?) Look so good?",
    "Damn girl, you have more curves than a race track.",
    "If you stood in front of a mirror and help up 11 roses, you would see 12 of the most beautiful things in the world.",
    "You are so beautiful that I would marry your brother just to get into your family.",
    "You look like a cool glass of refreshing water, and I am the thirstiest man in the world.",
    "Are you a tamale? 'Cause you're hot.",
    "You are so beautiful that you give the sun a reason to shine.",
    "Do you bleach your teeth? 'Cause your smile lights up the entire room like a candle in the dark. Let's go prove it.",
    "Your butt is so nice that it is a shame that you have to sit on it.",
    "Someone should call the police, because you just stole my heart!",
    "Stop, drop, and roll, baby. You are on fire.",
    "Baby, you're so hot, you make the equator look like the north pole.",
    "Come live in my heart, and pay no rent.",
    "You're hotter than Papa Bear's porridge.",
    "I hope there's a fire truck nearby, cause you're smokin'!",
    "If it weren't for that DAMNED sun, you'd be the hottest thing ever created.",
    "How is your fever? [What fever?] Oh... you just look hot to me.",
    "Tonight this Han doesn???t want to fly Solo.",
    "I just got dumped, and I think that you could make me feel better.",
    "(Walk up to someone and bite them anywhere) Sorry, taking a bite out of crime. [WHAT?] Well it has to be illegal to look that good!",
    "You are a 9 - you'd be a perfect 10 if you were with me.",
    "Excuse me, I'd like to have kids someday, and I wanted to know how your parents created such a beautiful creature.",
    "You???re my favorite weakness.",
    "You're so hot, I bet you could light a candle at 10 paces.",
    "Baby you make palms sweaty, knees weak, arms spaghetti.",
    "If I was an octopus, all my 3 hearts would beat for you???.",
    "Guess what I???m wearing? The smile you gave me!",
    "I don't know you, but I think I love you already.",
    "Here's the key to my house, my car... and my heart.",
    "If we shared a garden, I'd put my tulips and your tulips together. (tulips = two lips)",
    "Is your name Summer? 'Cause you are as hot as hell.",
    "Do you have any sunscreen? 'Cause you are burning me up!",
    "See these keys? I wish I had the one to your heart.",
    "You're hotter than donut grease.",
    "Your eyes are as blue as window cleaner.",
    "Was that an earthquake or did you just rock my world?",
    "If you were a burger at McDonalds, you'd be McGorgeous.",
    "Are your parents retarded, 'cause you sure are special.",
    "If you could put a price tag on beauty you'd be worth more than Fort Knox.",
    "I must be dancing with the devil, because you're hot as hell.",
    "Are you the moon? Because even when it's dark, you still seem to shine.",
    "Roses are red, my face is too, that only happens when I???m around you.",
    "Roses are red, I have a crush, whenever I???m around you, all I do is blush.",
    "I never need to see the sun again because your eyes light up my world.",
    "How much does it cost to date you? Cause dang you look expensive!",
    "If you were a steak you would be well done.",
    "It's dark in here. Wait! It's because all of the light is shining on you.",
    "Your hand looks heavy. Let me hold it for you.",
    "Do you have any raisins? [No] How about a date?",
    "Are you a kidnapper? Because you just abducted my heart.",
    "Is your name Katrina? [No, why?] 'Cuz baby, you rock me like a hurricane!",
    "Can you pull this heart-shaped arrow out of my butt? A damn little kid with wings shot me",
    "Is your body from McDonald's? Cause I'm lovin' it!",
    "Are you a microwave oven? Cause you melt my heart.",
    "Did you get your license suspended for driving so many guys crazy?",
    "Are you a girl scout, cause you tie my heart in knots.",
    "You're so hot, I could bake cookies on you.",
    "You look beautiful today, just like every other day.",
    "If beauty were time, you'd be eternity.",
    "Is your car battery dead? Because I'd like to jump you.",
    "I'm lost. Can you tell me which road leads to your heart?",
    "Where do you hide your wings?",
    "Is your name Mickey? Because you???re so FINE!",
    "Are you made of grapes? Cause you???re fine as wine.",
    "For a moment I thought I had died and gone to heaven. Now I see that I am very much alive, and heaven has been brought to me.",
    "Forget about Spiderman, Superman, and Batman. I'll be your man.",
    "There isn't a word in the dictionary for how good you look.",
    "Girl, you???re like Mastercard - absolutely priceless.",
    "Fascinating. I've been looking at your eyes all night long, 'cause I've never seen such dark eyes with so much light in them.",
    "My doctor says I'm lacking Vitamin U.",
    "I tried my best to not feel anything for you. Guess what? I failed.",
    "Excuse me, but does this smell like chloroform to you?",
    "Can I have directions? [To where?] To your heart.",
    "I'm sorry, I don't think we've met. I wouldn't forget a pretty face like that..",
    "There are people who say Disneyland is the happiest place on earth. Apparently, none of them have ever been in your arms. ",
    "Does your left eye hurt? Because you've been looking right all day.",
    "Do you have a name or can I just call you mine? ",
    "I will stop loving you when an apple grows from a mango tree on the 30th of February.",
    "If I were a stop light, I'd turn red everytime you passed by, just so I could stare at you a bit longer.",
    "It's a good thing I wore gloves today. Otherwise you'd be too hot to handle.",
    "Hello. Cupid called. He says to tell you that he needs my heart back.",
    "Do u know where the nearest bakery is? Cause id like to find a sweetie pie just like you",
  ];
}
function getQuestions() {
  return [
    "What's your name and age?",
    "What school/ward/stake are you in?",
    "What is your favorite animal ",
    "What is your favorite color",
    "What is your favorite class at school",
    "What would be the one super power you would want. ",
    "What's the most rebellious thing you've done as a kid. ",
    "What???s your worst fear?",
    "If you won a million dollars, what would you spend it on?",
    "If you could be anywhere right now, where would you want to be?",
    "Which movies made you cry?",
    "What is the most important thing in life for you?",
    "Where do you think you'll be in 20 years?",
    "What is the one thing you want to accomplish in life?",
    "What is something that you wish you could change about your life. ",
    "If you could go anywhere right now, where would you go?",
    "Who is the biggest influence in your life?",
    "What do you value the most?",
    "When you grew up, what did you want to be?",
    "What's the hardest physical thing you've ever done?",
    "What's the hardest emotional thing you've ever done?",
    "If you found out you were going to die tomorrow, what would you do today?",
    "What are you most grateful for in life?",
    "What does your ideal day look like?",
    "If you could pick a career with no concern for money, which would it be?",
    "What always makes you smile?",
    "When's the last time you failed spectacularly at something?",
    "When's the last thing you stayed up all night?",
    "What's the most bizarre situation you've ever found yourself in?",
  ];
}
let pickupLineList = getPickuplines();
let questionList = getQuestions();

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  // get random item
  const item = arr[randomIndex];

  return item;
}

function displayPickupLine(item) {
  let element = document.querySelector("#pickupline");
  element.textContent = item;
}

function displayQuestion(item) {
  let element2 = document.querySelector("#question");
  element2.textContent = item;
}

function generatePickupLine() {
  let randomPickupLine = getRandomItem(pickupLineList);
  displayPickupLine(randomPickupLine);
}

function generateQuestion() {
  let randomQuestion = getRandomItem(questionList);
  displayQuestion(randomQuestion);
}

function printAllPickUpLines() {
  let listPickuplinesElement = document.querySelector("#pickupline");
  for (const iterator of pickupLineList) {
    let article = document.createElement("article");
    article.append((document.createElement("h3").textContent = iterator));
  }
}

function main() {
  generatePickupLine();
  generateQuestion();
  document.querySelector("#nextPickUpLine").addEventListener("click", () => {
    generatePickupLine();
  });

  document.querySelector("#allPickUpLine").addEventListener("click", () => {
    printAllPickUpLines();
  });

  document.querySelector("#nextQuestion").addEventListener("click", () => {
    generateQuestion();
  });
}

main();
