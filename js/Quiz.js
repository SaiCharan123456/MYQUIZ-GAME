class Quiz {
  constructor(){
    this.tall = createElement('h1');
    this.tall.hide();
    }

  hide(){
   this.tall.hide();
    }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
        
      }
      question = new Question()
      question.display();
      this.tall.hide();
    }
  }

  play(){
    background("yellow");
    //write code here to hide question elements
     
    //write code to change the background color here
    
    //write code to show a heading for showing the result of Quiz
   this.tall.html("Result of the Quiz");
   this.tall = createElement('h1');
    this.tall.position(350, 0);

    //Question.reset.display();
    //call getContestantInfo( ) here
   Contestant.getContestantInfo();
    
    //write condition to check if contestantInfor is not undefined
     if(allContestants!==undefined){
       fill("blue");
       textSize(20)
       text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
     console.log("hi")
     var y = 250;
    //write code to add a note here
for(var plr in allContestants){
  
  var correctAns = "2";
  if(correctAns === allContestants[plr].answer){
    fill("green");
  }
  else{
    fill("white");
 }
 y = y + 30
 textSize(20);
 text(allContestants[plr].name+":"+allContestants[plr].answer,130,y);
}
}  
 }

}
