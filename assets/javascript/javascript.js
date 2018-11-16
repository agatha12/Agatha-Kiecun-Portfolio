$("#about").on("click", about)
function about() {

    $("#display").empty()
    $("#display").css("background-color", "white")
    // $("#display").css("height", "800px")
    $("#display").css("width", "600px")

    var img = $("<img>")
    var b = $("<br>")
    img.attr("src", "assets/images/ag.jpg")
    img.attr("id", "agpic")
    var p = $("<p>")
    p.attr("id", "brand")
    p.text("Enthusiastic full stack developer with a background in Quality Control and Management. Highly motivated, fast learner eager to expand my knowledge of the field and contribute to your company in a meaningful way. Great communicator with experience collaborating on a team to creatively solve problems and produce a quality product on a tight deadline. Detail oriented and neat programer who thrives in a fast paced environment. Proficient in CSS, JavaScript and Node and highly adept at learning new technologies.")
    $("#display").css("background-color", "white")
    $("#display").append(img)
    $("#display").append(b)
    $("#display").append(p)

}

$("#contact").on("click", contact)
function contact(){
    $("#display").empty()
    $("#display").css("background-color", "white")
    // $("#display").css("height", "300px")
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
    div.attr("id", "conact")
    p2.text("Link to GitHub: ")
    p3.text("Link to LInkedin: ")
    p2.append(a)
    p3.append(a2)
    h1.text("Contact Info")
    p4.addClass("space")
    p5.addClass("space")
    

    $("#display").append(div)
    $("#conact").append(p4)
    $("#conact").append(h1)
    $("#conact").append(p)
    $("#conact").append(p2)
    $("#conact").append(p3)
    $("#conact").append(p5)
    
    
}