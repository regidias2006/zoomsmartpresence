var inject = "\ function Constructor(arg) { this.x = arg; }\
var timeInMeeting = {};\
 Constructor.prototype = {\
    loadScript: function (scriptUrl) {\
        var head = document.getElementsByTagName('head')[0];\
        var script = document.createElement('script');\
        script.type = 'text/javascript';\
        script.src = scriptUrl;\
        head.appendChild(script);\
    },\
    ParticipantsTracker: function (participants, refreshTime) {\
\
        for (var key in timeInMeeting) {\
            timeInMeeting[key] = this.getParticipantTime(timeInMeeting, key, Math.floor((refreshTime / 60000) * 100) / 100)\
            \
        }\
\
        return participants;\
    },\
    participantIspresent: function (participant) {\
        var allparticipants = {};\
      \
        allparticipants =  this.getOnlineParticipants();\
       \
        if (allparticipants[participant] === undefined) {\
            return false;\
        }\
        else {\
            return true;\
        }\
    },\
    getOnlineParticipants: function () {\
        var ParticipansInMeetingNow = {};\
        var Allparticipants = document.querySelectorAll('.participants-item__display-name');\
        Allparticipants.forEach(\
            el => ParticipansInMeetingNow[el.innerText] = 0\
        );\
\
        this.InsertNewParticipant(Allparticipants);\
\
        return ParticipansInMeetingNow;\
    },\
    InsertNewParticipant: function (allparticipants, ParticipansInMeetingNow) {\
\
        allparticipants.forEach(\
\
            element => {\
                if (timeInMeeting[element.innerText] === undefined) {\
                    timeInMeeting[element.innerText] = 0\
                }\
            }\
        );\
\
        return '';\
    },\
    getParticipantTime: function (participants, participant, timetoadd) {\
\
        var IsPresent = this.participantIspresent(participant);\
\
        var participantTime = participants[participant];\
       \
        \
        if (IsPresent == true) {\
            participantTime = participantTime + timetoadd;\
        }\
        return participantTime;\
    },\
\
}";

var s = window.document.createElement('script'); 
s.type = 'text/javascript';
s.text  = inject,
window.document.head.appendChild(s); 


// function create(htmlStr) {
//     var frag = document.createDocumentFragment(),
//         temp = document.createElement('div');
//     temp.innerHTML = htmlStr;
//     while (temp.firstChild) {
//         frag.appendChild(temp.firstChild);
//     }
//     return frag;
// }

// function myFunction() {
//     alert("Hello World!");
// }

// function HasWcContent() {

//     if (document.getElementById("wc-content")) {
//         //alert("Element exists");
//         var fragment = create('<div id="app{{ message }}</div>');
//         document.getElementById("wc-content").appendChild(fragment);

//         var app = new Vue({
//             el: '#app',
//             data: {
//                 message: 'Hello Vue!'
//             }
//         })

//         //clearInterval(timerMainElement)
//     } else {
// //alert("Element does not exist");
//         return "Não ainda.";
//     }
// }

//var timerMainElement = setInterval(() => HasWcContent(), 10 * 1000);





//var timerID = setInterval(() => MyMethods.ParticipantsTracker(timeInMeeting, 10 * 1000), 10 * 1000);

//https://www.codeproject.com/Articles/1909172/What-Web-Developers-Need-to-Know-About-Content-Sec
//https://developers.google.com/web/fundamentals/security/csp
//https://content-security-policy.com/unsafe-hashes/
//https://www.netsparker.com/blog/web-security/content-security-policy/