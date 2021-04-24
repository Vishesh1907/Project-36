class Food{
constructor(){
this.foodStock = 0;
this.lastFeed ;
this.image = loadImage("images/Milk.png");

}
updateFoodStock(foodStock){
this.foodStock = foodStock;
}

getFedTime(lastFed){
    this.lastfed = lastFed
}
deductFood(){
    if(this.foodStock>0){
        this.foodStock = this.foodStock-1;
    }
}
getFoodStock(){
return this.foodStock;
}


display() {
    background(46,139,87)
    fill(255,255,254);
    textSize(15);

    if(lastFed>=12){
        text("last time:"+ lastFed%12 + "PM",50,30)
        
      }
      else if (lastFed == 0){
        text("last feed:12 AM",50,30)
      }
      else{
        text("last feed:" + lastFed +"AM",50,30)
      }
var x = 70,y = 100
imageMode(CENTER);
if(this.foodStock!=0){
    for (var i = 0;i<this.foodStock;i++){
        if(i%10 == 0){
            x = 70
            y = y+50
        }
        image(this.image,x,y,50,50)
        x = x+30
    }
}
}
bedRoom(){
    background(bedRoom,550,500);
}
washRoom(){
    background(washRoom,550,500);
}
garden(){
    background(garden,550,500);
}
}

