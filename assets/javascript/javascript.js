$( window ).resize(function() {
    media(x)
  });


$("#about").on("click", about)
function about() {

    $("#display").empty()
    $("#display").css("background-color", "white")
    media(x)
    // $("#display").css("width", "800px")

    var img = $("<img>")
    var b = $("<br>")
    var p = $("<p>")
    var div = $("<div>")
    var p2 = $("<p>")


    img.attr("src", "assets/images/agpic.jpg")
    img.attr("id", "agimg")
    div.attr("id", "agpic")
    p2.text("Shedrick Pelt sdotpdotmedia.com social media: @sdotpdotmedia")
    p.attr("id", "brand")
    p.text("Enthusiastic full stack developer with a background in Quality Control and Management. Highly motivated, fast learner eager to expand my knowledge of the field and contribute to your company in a meaningful way. Great communicator with experience collaborating on a team to creatively solve problems and produce a quality product on a tight deadline. Detail oriented and neat programer who thrives in a fast paced environment. Proficient in CSS, JavaScript and Node and highly adept at learning new technologies.")
    
    div.append(img)
    div.append(p2)
    $("#display").append(div)
    $("#display").append(b)
    $("#display").append(p)

}

$("#contact").on("click", contact)
function contact(){
    $("#display").empty()
    $("#display").css("background-color", "white")
    $("#display").css("width", "300px")

    var a = $("<a>")
    var a2 = $("<a>")
    var b = $("<br>")
    var p = $("<p>")
    var p2 = $("<p>")
    var p3 = $("<p>")
    var p4 = $("<p>")
    var p5 = $("<p>")
    var div = $("<div>")
    var h1 = $("<h1>")
    var button = $("<button>")


    a.attr("href", "https://github.com/agatha12")
    a.addClass("contactlink")
    a.text("Link")
    a.attr("target", "blank")
    a2.attr("href", "https://www.linkedin.com/in/agatha-kiecun-783a625b/")
    a2.addClass("contactlink")
    a2.text("Link")
    a2.attr("target", "blank")
    p.text("Email: agkiecun@gmail.com")
    p.css("margin-top", "20px")
    div.attr("id", "conactdiv")
    p2.text("Link to GitHub: ")
    p3.text("Link to LInkedin: ")
    p2.append(a)
    p3.append(a2)
    h1.text("Contact Info")
    p4.addClass("space")
    p5.addClass("space")
    button.attr("id", "modalbutton")
    button.attr("type", "button")
    button.attr("data-toggle", "modal")
    button.addClass("btn btn-primary")
    button.attr("data-target", "#exampleModal")
    button.text("Click to send me a message")
    

    $("#display").append(div)
    $("#conactdiv").append(p4)
    $("#conactdiv").append(h1)
    $("#conactdiv").append(p)
    $("#conactdiv").append(p2)
    $("#conactdiv").append(p3)
    $("#conactdiv").append(button)
    $("#conactdiv").append(p5)

    
    
}

$("#portfolio").on("click", portfolio)
function portfolio(){
    
    $("#display").empty()
    $("#display").css("background-color", "white")
    media(x)
    // $("#display").css("width", "800px")
    makeCards(4)

    var link1a = "https://frozen-atoll-67387.herokuapp.com/"
    var link1b = "https://github.com/agatha12/Project2"
    var link2a = "https://agatha12.github.io/Job-Search-Site/"
    var link2b= "https://github.com/agatha12/Job-Search-Site"
    var link3a = "https://agatha12.github.io/TriviaGame/index.html"
    var link3b = "https://github.com/agatha12/TriviaGame"
    var link4a = "https://agatha12.github.io/Liri-Bot/index.html"
    var link4b = "https://github.com/agatha12/Liri-Bot"
    var img1 = "assets/images/Screenshot (55).png"
    var img2 = "assets/images/dreamjob.png"
    var img3 = "assets/images/trivia.png" 
    var img4 = "assets/images/Screenshot (7).png"


    $("#b0").text("Shopping Site")
    $("#b1").text("Job Search Site")
    $("#b2").text("Animal Trivia Game")
    $("#b3").text("Liri Bot Node Application")
    $("#cardlink10").attr("href", link1a)
    $("#cardlink10").text("Check out the site")
    $("#cardlink11").attr("href", link2a)
    $("#cardlink11").text("Check out the site")
    $("#cardlink12").attr("href", link3a)
    $("#cardlink12").text("Play the game")
    $("#cardlink13").attr("href", link4a)
    $("#cardlink13").text("See the screenshoots")
    $("#cardlink20").attr("href", link1b)
    $("#cardlink20").text("See the code on GitHub")
    $("#cardlink21").attr("href", link2b)
    $("#cardlink21").text("See the code on GitHub")
    $("#cardlink22").attr("href", link3b)
    $("#cardlink22").text("See the code on GitHub")
    $("#cardlink23").attr("href", link4b)
    $("#cardlink23").text("See the code on GitHub")
    $("#cardimg0").attr("src", img1)
    $("#cardimg1").attr("src", img2)
    $("#cardimg2").attr("src", img3)
    $("#cardimg3").attr("src", img4)
    $(".cardlink").attr("target", "blank")




}

function makeCards(howmany){

    for(var i = 0; i < howmany; i++){

        var div1 = $("<div>")
        var h4 = $("<h4>")
        var b = $("<b>")
        var img = $("<img>")
        var div2 = $("<div>")
        var a1 = $("<a>")
        var a2 = $("<a>")
        var p1 = $("<p>")
        var p2 = $("<p>")
        var p3 = $("<p>")

        div1.addClass("card")
        div1.attr("id", ("card" + i))
        h4.addClass("h4")
        h4.attr("id", "h4" + i)
        b.addClass("b")
        b.attr("id", "b" + i)
        img.addClass("cardimg")
        img.attr("id", "cardimg" + i)
        div2.addClass("cardcont")
        div2.attr("id", "cardcont" + i)
        a1.addClass("cardlink")
        a1.attr("id", "cardlink1" + i)
        a2.addClass("cardlink")
        a2.attr("id", "cardlink2" + i)
        p1.addClass("lilspace")
        p2.addClass("lilspace")
        p3.addClass("lilspace")

        $("#display").append(div1)
        $("#card" + i).append(p1)
        $("#card" + i).append(h4)
        $("#h4" + i).append(b)
        $("#card" + i).append(img)
        $("#card" + i).append(div2)
        $("#card" + i).append(p2)
        $("#cardcont" + i).append(a1)
        $("#cardcont" + i).append(p3)
        $("#cardcont" + i).append(a2)


    }
}
$('#exampleModal').on('show.bs.modal', function (event) {
    var modal = $(this)
    modal.find('.modal-title').text("New message to Agatha")
    modal.find('.modal-body input').val('Agatha')
  })
  $("#sendbutton").on("click", Email)
  function Email(){
    $("#sendbutton").remove()
    
    var sname = $("#sendername").val()
    var semail = $("#senderemail").val()
    var message = $("#messagetext").val()
    var subject = ("From portfolio from: " + sname + semail)
    var data = {
        "access_token": "{4jfxb4lcw3n6ql7ifxo4eim0}" 
    };

    console.log(sname)
    console.log(semail)
    console.log(message)



        data['subject'] = subject;
        data['text'] = message;

        $.post('https://postmail.invotes.com/send',
            data,
            console.log("sucsess")
        ).fail();

        return false;
    
    









//     Email.send(semail,
// "agkiecun@gmail.com",
// "Sent for portfolio by " + sname,
// message,
// "smtp.yourisp.com",
// "agkiecun@gmail.com",
// "Big@tom12");
  }

  $("#resume").on("click", resume)
function resume(){
    $("#display").empty()

    var embed = $("<embed>")

    embed.attr("src", "assets/pdf/Agatha Kiecun Resume.pdf")
    embed.attr("type", "application/pdf")
    embed.attr("id", "resumepdf")


    $("#display").append(embed)

}

function media(x) {
    if (x.matches) { // If media query matches
      $("#display").css("width", "350px")
    } else {
      $("#display").css("width", "800px")
    }
  }
  
  var x = window.matchMedia("(max-width: 680px)")