var names = ["50fr", "100fr", "200fr", "500fr", "1650fr", "50bk", "100bk", "200bk", "50br", "100br", "200br", "50fl", "100fl", "200fl", "200im", "400im"]
var times = [17.63, 39.90, 89.15, 246.32, 852.08, 20.08, 43.35, 95.73, 23.56, 49.69, 107.91, 20.10, 42.80, 97.35, 97.69, 212.88]

var form = document.getElementById("eventSubmission")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    var event1event = document.getElementById("event_1").value
    console.log(event1event)

    var event1Time = +document.getElementById("event_1_min").value * 60 + +document.getElementById("event_1_sec").value + +document.getElementById("event_1_mil").value / 100
    console.log(event1Time)


    var event2event = document.getElementById("event_2").value
    console.log(event2event)

    var event2Time = +document.getElementById("event_2_min").value * 60 + +document.getElementById("event_2_sec").value + +document.getElementById("event_2_mil").value / 100
    console.log(event2Time)

    var event3event = document.getElementById("event_3").value
    console.log(event3event)

    var event3Time = +document.getElementById("event_3_min").value * 60 + +document.getElementById("event_3_sec").value + +document.getElementById("event_3_mil").value / 100
    console.log(event3Time)

    var event4event = document.getElementById("event_4").value
    console.log(event4event)

    var event4Time = +document.getElementById("event_4_min").value * 60 + +document.getElementById("event_4_sec").value + +document.getElementById("event_4_mil").value / 100
    console.log(event4Time)

    var numTrack1 = 0;
    var numTrack2 = 0;
    var numTrack3 = 0;
    var numTrack4 = 0;

    for (let i = 0; i < names.length; i++) {
        if (event1event == names[i]) {
            numTrack1 = i
        }
        if (event2event == names[i]) {
            numTrack2 = i
        }
        if (event3event == names[i]) {
            numTrack3 = i
        }
        if (event4event == names[i]) {
            numTrack4 = i
        }
    }

    // console.log(times[numTrack1])
    // console.log(times[numTrack2])
    // console.log(times[numTrack3])
    // console.log(times[numTrack4])

    var score = 0.4 * ((times[numTrack1] / event1Time) ** 3) * 1000 + 0.4 * ((times[numTrack2] / event2Time) ** 3) * 1000 + 0.15 * ((times[numTrack3] / event3Time) ** 3) * 1000 + 0.05 * ((times[numTrack4] / event4Time) ** 3) * 1000
    console.log(score)

    const text = document.createElement("h3")
    const node = document.createTextNode("Your swimcloud score is: " + score)
    text.appendChild(node)
    text.setAttribute('id', "number")

    const el = document.getElementById("result")
    const chil = document.getElementById("number")
    el.replaceChild(text, chil)
})  