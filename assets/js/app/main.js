function Constructor(arg) { this.x = arg; };
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


