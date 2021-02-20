class Form{
    constructor(){

    }
display(){
    var title=createElement('h2')
    title.html("Car Racing Game With Miss Sheetal")
    title.position(130,0);
    var input=createInput("NAME")
    var MyClick= createButton("Intialise")
    var welcome= createElement('h3')
    input.position(130,160);
    MyClick.position(250,200);
    MyClick.mousePressed(function(){
        input.hide()
        MyClick.hide()
        var name= input.value()
        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount)
        welcome.html("HELLO"+name)
        welcome.position(130,160)
    })


}
}