


var timeInMeeting = {};
// var MyMethods = Constructor.prototype = {
 Constructor.prototype = {
    loadScript: function (scriptUrl) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptUrl;
        head.appendChild(script);
    },
    //fn60sec: function (timerID) {
    //    var inicio = (document.body.contains(document.getElementsByClassName('_2dH1A')[0])) ? true : false; 
    //    var opendchat = (document.body.contains(document.getElementsByClassName('_27lSL')[0])) ? true : false;
    //    var WhastappIni = 'Não Logado';
      
    //    if (inicio == true || opendchat == true) {
    //        clearInterval(timerID);
    //        WhastappIni = document.getElementsByClassName('_2dH1A')[0].textContent;
    //        //alert(WhastappIni);
    //    }
    //    //alert(WhastappIni);
    //    return WhastappIni;
    //},
    ParticipantsTracker: function (participants, refreshTime) {

        for (var key in timeInMeeting) {
            timeInMeeting[key] = this.getParticipantTime(timeInMeeting, key, Math.floor((refreshTime / 60000) * 100) / 100)
            
        }

        return participants;
    },
    participantIspresent: function (participant) {
        var allparticipants = {};
      
        allparticipants =  this.getOnlineParticipants();
       
        if (allparticipants[participant] === undefined) {
            return false;
        }
        else {
            return true;
        }
    },
    getOnlineParticipants: function () {
        var ParticipansInMeetingNow = {};
        var Allparticipants = document.querySelectorAll(".participants-item__display-name");
        Allparticipants.forEach(
            el => ParticipansInMeetingNow[el.innerText] = 0
        );

        this.InsertNewParticipant(Allparticipants);

        return ParticipansInMeetingNow;
    },
    InsertNewParticipant: function (allparticipants, ParticipansInMeetingNow) {

        allparticipants.forEach(

            element => {
                if (timeInMeeting[element.innerText] === undefined) {
                    timeInMeeting[element.innerText] = 0
                }
            }
        );

        return "";
    },
    getParticipantTime: function (participants, participant, timetoadd) {

        var IsPresent = this.participantIspresent(participant);

        var participantTime = participants[participant];
       
        
        if (IsPresent == true) {
            participantTime = participantTime + timetoadd;
        }
        return participantTime;
    },

}


var obj = new Constructor(17);



//obj.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js');
//obj.loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js');
//obj.loadScript('https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js');

//var timerID = setInterval(() => obj.fn60sec(timerID), 10 * 1000);


var participants = document.querySelectorAll(".participants-item__display-name");
participants.forEach(
    element => timeInMeeting[element.innerText] = 0
);
 
//function create(htmlStr) {
//    var frag = document.createDocumentFragment(),
//        temp = document.createElement('div');
//    temp.innerHTML = htmlStr;
//    while (temp.firstChild) {
//        frag.appendChild(temp.firstChild);
//    }
//    return frag;
//}

//function myFunction() {
//   alert("Hello World!");
//}

//function HasWcContent(timerMainElement) {
//    if (document.getElementById("wc-content") == null) {
//        return "Não ainda."
//    } else {
//        var fragment = create('<button type="button" id="record-meeting" class="btn btn-info btn-lg" onclick="myFunction()">MONITORAR REUNIÃO</button>');
//        document.getElementById("wc-content").appendChild(fragment);
//        clearInterval(timerMainElement)
//    }
//}

//var timerMainElement = setInterval(() => HasWcContent(timerMainElement), 10 * 1000);



var timerID = setInterval(() => obj.ParticipantsTracker(timeInMeeting, 10 * 1000), 10 * 1000);


