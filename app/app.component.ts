import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tennis Score Board';
	Tennis :tennis={
	scoreA: 0,
	scoreB:0,
	scoreCard : null,
	totalScoreA : 0,
	totalScoreB: 0
	}
	public mainfun(scoreCard:any,scoreA:number,scoreB:number,totalScoreA:any,totalScoreB:any):any{
	var l = scoreCard.length;
	
	for(var i = 0; i < l; i++){
	 	if(scoreCard[i] == 1) scoreA = scoreA +1;
		if(scoreCard[i] == 2) scoreB = scoreB +1;
		if(scoreA >= 4 || scoreB >= 4){
			var diff : number = scoreA - scoreB;
			if (diff >= 2){
				totalScoreA = this.incScoreCard(totalScoreA);
				scoreA = 0;
				scoreB = 0;
				
			}
			if (diff <= -2){
				totalScoreB = this.incScoreCard(totalScoreB);
				scoreA = 0;
				scoreB = 0;
				
			}
		}	
		
	
		}
		var outp :any;
		outp = this.scoreDisplay(totalScoreA,totalScoreB,scoreA,scoreB);
		return outp;		
	}
	public incScoreCard(totalScore :any):any{
		totalScore = totalScore +1;
		return totalScore;
	}
	public scoreDisplay(totalScoreA:any,totalScoreB:any,scoreA:any,scoreB:any):any{
	    var scoreNameA : any = this.scoreName(scoreA);
		var scoreNameB : any = this.scoreName(scoreB);
		var outp = totalScoreA+" - 0 :: 0 - "+totalScoreB+", current state "+scoreNameA+"-"+scoreNameB;
		return outp;
	}
	public scoreName(score :any):any{
		if(score == 0) return "LOVE";
		if(score == 1) return "FIFTEEN";
		if(score == 2) return "THITRY";
		return "FOURTY";
	}
}


export class tennis{
	scoreA : number;
	scoreB : number;
	scoreCard : any;
	totalScoreA:any;
	totalScoreB:any;
}