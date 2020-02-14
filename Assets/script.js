var date = $("#currentDay")
var year = moment().year()
var month = moment().month()
var day = moment().date()
var main = $("#main")
var set = $(".set")
// var set = $(".set10")
// var set = $(".set11")
// var set = $(".set12")
// var set = $(".set13")
// var set = $(".set14")
// var set = $(".set15")
// var set = $(".set16")
// var set = $(".set17")
var save = $(".save")

date.append("Today's Date" + "<br>" +month + "/" + day + "/" + year)

var hour = $(".hour").text().split(" ");
var intHour = parseInt(hour)

console.log(hour)
console.log(document.body.children[1].children[0].children[1].children[0].children[1])
console.log(parseInt(hour[1]))
console.log(moment().hour())

function checker() {
    var attempt = document.body.children[1].children[0].children[1]
    console.log(attempt.children[1])
    
    for (i = 0; i < 9; i++) {
        var int = i
        var test = attempt.children[int].children[1]
        console.log(test)
        if (parseInt(hour[i]) === moment().hour()) {
            console.log(attempt.children[1].children[1])
            test.addClass("present")

        }
        else if (parseInt(hour[i]) > moment().hour()) {
            this.set.addClass("future")
        }
        else if (parseInt(hour[i]) < moment().hour()) {
            this.set.addClass("past")
        }
    }
}
checker()
// document.on("click", "button",function(event){
//     localStorage.setItem(hour,save)

// })
// localStorage.getItem(hour)

