var logged = 0;
var prevresp = "";
var shiftdown = 0;
var allowtype = 0;
window.onload = startup();
function startup() {
  allowtype = 0;
  setTimeout(function() {
    Response("Booting...");
  }, 500);
  setTimeout(function() {
    Response("Booted");
  }, 1500);

  setTimeout(function() {
    Response("Initializing...");
  }, 2000);
  setTimeout(function() {
    Response("Initialized");
  }, 2500);
  setTimeout(function() {
    Response("Type 'logon'");
    allowtype = 1;
  }, 2600);
  console.log(
    " The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. Ding  A single lap should be completed each time you hear this sound. Ding  Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, ding "
  );
}
function ClearTerminal() {
  let resp = document.getElementById("response");
  resp.innerHTML = "";
  startup();
}
function Response(message, user) {
  let cursor = document.getElementById("cursor");
  let resp = document.getElementById("response");
  resp.innerHTML += "&#62; " + message + "<br>";
  window.scrollTo(0, 99999999);
  if (user != 1) {
    prevresp = message;
  }
}
//keyboard handlers
document.addEventListener("keydown", event => {
  if (allowtype == 1) {
    if (event.keyCode == 16) {
      shiftdown = 1;
    }
    var key = "  ";
    if (shiftdown == 1) {
      if (event.keyCode == 65) {
        console.log("A has been pressed");
        key = "A";
      }
      if (event.keyCode == 66) {
        console.log("B has been pressed");
        key = "B";
      }
      if (event.keyCode == 67) {
        console.log("C has been pressed");
        key = "C";
      }
      if (event.keyCode == 68) {
        console.log("D has been pressed");
        key = "D";
      }
      if (event.keyCode == 69) {
        console.log("E has been pressed");
        key = "E";
      }
      if (event.keyCode == 70) {
        console.log("F has been pressed");
        key = "F";
      }
      if (event.keyCode == 71) {
        console.log("G has been pressed");
        key = "G";
      }
      if (event.keyCode == 72) {
        console.log("H has been pressed");
        key = "H";
      }
      if (event.keyCode == 73) {
        console.log("I has been pressed");
        key = "I";
      }
      if (event.keyCode == 74) {
        console.log("J has been pressed");
        key = "J";
      }
      if (event.keyCode == 75) {
        console.log("K has been pressed");
        key = "K";
      }
      if (event.keyCode == 76) {
        console.log("L has been pressed");
        key = "L";
      }
      if (event.keyCode == 77) {
        console.log("M has been pressed");
        key = "M";
      }
      if (event.keyCode == 78) {
        console.log("N has been pressed");
        key = "N";
      }
      if (event.keyCode == 79) {
        console.log("O has been pressed");
        key = "O";
      }
      if (event.keyCode == 80) {
        console.log("P has been pressed");
        key = "P";
      }
      if (event.keyCode == 81) {
        console.log("Q has been pressed");
        key = "Q";
      }
      if (event.keyCode == 82) {
        console.log("R has been pressed");
        key = "R";
      }
      if (event.keyCode == 83) {
        console.log("S has been pressed");
        key = "S";
      }
      if (event.keyCode == 84) {
        console.log("T has been pressed");
        key = "T";
      }
      if (event.keyCode == 85) {
        console.log("U has been pressed");
        key = "U";
      }
      if (event.keyCode == 86) {
        console.log("V has been pressed");
        key = "V";
      }
      if (event.keyCode == 87) {
        console.log("W has been pressed");
        key = "W";
      }
      if (event.keyCode == 88) {
        console.log("X has been pressed");
        key = "X";
      }
      if (event.keyCode == 89) {
        console.log("Y has been pressed");
        key = "Y";
      }
      if (event.keyCode == 90) {
        console.log("Z has been pressed");
        key = "Z";
      }
    } else {
      if (event.keyCode == 65) {
        console.log("a has been pressed");
        key = "a";
      }
      if (event.keyCode == 66) {
        console.log("b has been pressed");
        key = "b";
      }
      if (event.keyCode == 67) {
        console.log("c has been pressed");
        key = "c";
      }
      if (event.keyCode == 68) {
        console.log("d has been pressed");
        key = "d";
      }
      if (event.keyCode == 69) {
        console.log("e has been pressed");
        key = "e";
      }
      if (event.keyCode == 70) {
        console.log("f has been pressed");
        key = "f";
      }
      if (event.keyCode == 71) {
        console.log("g has been pressed");
        key = "g";
      }
      if (event.keyCode == 72) {
        console.log("h has been pressed");
        key = "h";
      }
      if (event.keyCode == 73) {
        console.log("i has been pressed");
        key = "i";
      }
      if (event.keyCode == 74) {
        console.log("j has been pressed");
        key = "j";
      }
      if (event.keyCode == 75) {
        console.log("k has been pressed");
        key = "k";
      }
      if (event.keyCode == 76) {
        console.log("l has been pressed");
        key = "l";
      }
      if (event.keyCode == 77) {
        console.log("m has been pressed");
        key = "m";
      }
      if (event.keyCode == 78) {
        console.log("n has been pressed");
        key = "n";
      }
      if (event.keyCode == 79) {
        console.log("o has been pressed");
        key = "o";
      }
      if (event.keyCode == 80) {
        console.log("p has been pressed");
        key = "p";
      }
      if (event.keyCode == 81) {
        console.log("q has been pressed");
        key = "q";
      }
      if (event.keyCode == 82) {
        console.log("r has been pressed");
        key = "r";
      }
      if (event.keyCode == 83) {
        console.log("s has been pressed");
        key = "s";
      }
      if (event.keyCode == 84) {
        console.log("t has been pressed");
        key = "t";
      }
      if (event.keyCode == 85) {
        console.log("u has been pressed");
        key = "u";
      }
      if (event.keyCode == 86) {
        console.log("v has been pressed");
        key = "v";
      }
      if (event.keyCode == 87) {
        console.log("w has been pressed");
        key = "w";
      }
      if (event.keyCode == 88) {
        console.log("x has been pressed");
        key = "x";
      }
      if (event.keyCode == 89) {
        console.log("y has been pressed");
        key = "y";
      }
      if (event.keyCode == 90) {
        console.log("z has been pressed");
        key = "z";
      }
    }
    //NUMERALS
    //
    if (event.keyCode == 49) {
      console.log("1 has been pressed");
      key = "1";
    }
    if (event.keyCode == 50) {
      console.log("2 has been pressed");
      key = "2";
    }
    if (event.keyCode == 51) {
      console.log("3 has been pressed");
      key = "3";
    }
    if (event.keyCode == 52) {
      console.log("4 has been pressed");
      key = "4";
    }
    if (event.keyCode == 53) {
      console.log("5 has been pressed");
      key = "5";
    }
    if (event.keyCode == 54) {
      console.log("6 has been pressed");
      key = "6";
    }
    if (event.keyCode == 55) {
      console.log("7 has been pressed");
      key = "7";
    }
    if (event.keyCode == 56) {
      console.log("8 has been pressed");
      key = "8";
    }
    if (event.keyCode == 57) {
      console.log("9 has been pressed");
      key = "9";
    }
    if (event.keyCode == 48) {
      console.log("0 has been pressed");
      key = "0";
    }
    if (event.keyCode == 190) {
      console.log(". has been pressed");
      key = ".";
    }
    if (event.keyCode == 189) {
      console.log("- has been pressed");
      key = "-";
    }
    if (event.keyCode == 173) {
      key = "-";
    }
    if (event.keyCode == 8) {
      console.log("Backspace has been pressed");
      key = "BACK";
    }
    if (event.keyCode == 13) {
      console.log("Enter has been pressed");
      key = "ENTER";
    }
    if (event.keyCode == 32) {
      console.log("SPACE has been pressed");
      key = " ";
    }
    var currentinput = document.getElementById("userinput").innerHTML;
    var splitinput = currentinput.split("");
    if (key == "BACK" && currentinput != "") {
      splitinput.pop();
      var finalinput = splitinput;
      console.log(splitinput.toString().replace(/,/g, ""));
      document.getElementById(
        "userinput"
      ).innerHTML = splitinput.toString().replace(/,/g, "");
    }
    if (key == "ENTER" && currentinput !== "") {
      Userinputsubmit(currentinput);
      document.getElementById("userinput").innerHTML = "";
      console.log("yeet");
    }
    if (key !== "ENTER" && key !== "BACK" && key !== "  ") {
      document.getElementById("userinput").innerHTML += key;
      console.log("key added");
      key = "";
    }
    return;
  }
});
document.addEventListener("keyup", event => {
  if (event.keyCode == 16) {
    shiftdown = 0;
  }

  return;
});
function Userinputsubmit(input) {
  Response(input, 1);
  let upinput = input.toUpperCase();
  if (input.toUpperCase() == "LOGON" && logged == 0) {
    logon();
  } else if (logged == 0 && input == "") {
  } else if (logged == 1) {
    //COMMANDS WHILE LOGGED ON
    if (input.toUpperCase() == "HELP") {
      allowtype = 0;
      setTimeout(function() {
        Response("HELP MENU");
      }, 500);
      setTimeout(function() {
        Response("");
      }, 600);
      setTimeout(function() {
        Response("Help - displays this menu");
      }, 700);
      setTimeout(function() {
        Response("Access [FILE] - Accesses files");
      }, 800);
      setTimeout(function() {
        Response("Logoff - logs you off");
      }, 900);
      setTimeout(function() {
        Response("fileList - Shows you Accessible files");
      }, 1000);
      setTimeout(function() {
        Response("date - sends date and time");
        allowtype = 1;
      }, 1100);
    } else if (
      input.toUpperCase() == "NO. THE QUICK RED FOX JUMPS OVER THE LAZY DOG" &&
      prevresp == "Does the black moon howl?"
    ) {
    } else if (upinput.includes("ACCESS")) {
      if (upinput.includes("AFUNNYMEMESMILEY")) {
        setTimeout(function() {
          Response("Accessing File: afunnymemesmiley.txt");
        }, 500);
        setTimeout(function() {
          Response(
            '<div class="preventclick"><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&showinfo=0&disablekb=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
          );
        }, 1000);
      } else if (upinput.includes("RESOURCES")) {
        setTimeout(function() {Response("<a target='_blank' href='https://scp-wiki.wikidot.com' style='z-index:100000'>Scp community</a>")}, 500)
      } else if (upinput.includes("SCP-001")) {
        allowtype = 0;
        setTimeout(function() {
          Response("Accessing File: <b>SCP-001.TXT</b>...");
        }, 500);
        setTimeout(function() {
          Response("Access Granted");
        }, 1500);
        setTimeout(function() {
          Response(
            "<div style='margin-left:20px'><b style='color:yellow'>GENERAL NOTICE 001-Alpha: <span style='color:white'>In order to prevent knowledge of SCP-001 from being leaked, several/no false SCP-001 files have been created alongside the true file/files.<br> All files concerning the nature of SCP-001, including the decoy/decoys, are protected by a memetic kill agent designed to immediately cause cardiac arrest in any <br>nonauthorized personnel attempting to access the file. <br>Revealing the true nature/natures of SCP-001 to the general public is cause for execution, except as required under ████-███-██████.</span></b></div>"
          );
        }, 1600);
        //setTimeout(function() {
        //Response(
        //"sorry the File <b>SCP-001.TXT</b> cannot be Accessed at this time."
        //  );
        //}, 2500);
        setTimeout(function() {
          Response("<b>SCP-001</b>  'the gate masters'");
        }, 1800);
        setTimeout(function() {
          Response(
            "1 : <br> Jonathans Ball's Proposal  'sheaf of papers'<br> Class: <b style='color:red'>KETER</b>"
          );
        }, 1900);
        setTimeout(function() {
          Response(
            "2 : <br> Dr Gears' Proposal 'the prototype'<br> Item-ID:  #86243AR-001 <br> Warning: Item displays aggressive and dangerous behavior"
          );
        }, 2000);
        setTimeout(function() {
          Response(
            "3 : <br> Dr Clef's Proposal 'the gate guardian'<br> Class: <b style='color:orange'>EUCLID</b>/<b style='color:red'>KETER</b>"
          );
        }, 2100);
        setTimeout(function() {
          Response(
            "4 : <br> qntm's Proposal  'the lock'<br> Class: <b style='color:lightgreen'>SAFE</b>"
          );
        }, 2200);
        setTimeout(function() {
          Response("5 : <br> SCP-001:O5  'the factory'<br> O5 Tale</b>");
        }, 2300);
        setTimeout(function() {
          Response(
            "6 : <br> Dr.Mann's Proposal  'spiral path'<br> Class: <b style='color:yellow'>EMBLA</b>"
          );
        }, 2400);
        setTimeout(function() {
          Response(
            "7 : <br> Dr. Mackenzie's Proposal  'the legacy'<br> Class: <b style='color:orange'>EUCLID</b>"
          );
        }, 2500);
        setTimeout(function() {
          Response(
            "8 : <br> S Andrew Swann's Proposal  'The Database'<br> Class: <b style='color:red'>KETER</b>"
          );
        }, 2600);
        setTimeout(function() {
          Response(
            "9 : <br> Scantron's Proposal  'The Foundation'<br><b>UIU FILE 0041:</b>altered high school building in &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;, &#9608;&#9608; (Confirmed Anomaly 3) <br>Class: <b style='color:white'>53 (highly intrusive, Unkown nature, Unkown abilities)</b>"
          );
        }, 2700);
        setTimeout(function() {
          Response(
            "10 : <br> Djoric-Dmatix Proposal  'Thirty-six'<br> Class: <b style='color:white'>Humanoid</b><br>Threat level:<b>Green|Circumstancial Red</b><br>Containment Class: <b style='color:orange'>ELUCID</b>"
          );
        }, 2800);
        setTimeout(function() {
          Response(
            "11 : <br> Roget's Proposal  'Keter Duty'<br> Class: <b style='color:lightyellow'>THAUMIEL</b>"
          );
        }, 2900);
        setTimeout(function() {
          Response(
            "12 : <br> djkaktus's Proposal  'Ouroboros'<br> Class: <b style='color:lightyellow'>THAUMIEL</b>"
          );
        }, 3000);
        setTimeout(function() {
          Response(
            "12(continued: Filename: 12-2) : <br> TwistedGears's Proposal  'Ouroboros'<br> Class: <b style='color:magenta'>MASKUR</b>"
          );
        }, 3100);
        setTimeout(function() {
          Response(
            "12(cont. Filename: 12-3) : <br> djkaktus's Proposal  'Ouroboros'<br> Class: <b style='color:red'>KETER</b>"
          );
        }, 3200);
        setTimeout(function() {
          Response(
            "12(cont. Filename 12-4) : <br> djkaktus's Proposal  'Ouroboros'<br> Class: <b style='color:darkred'>ESOTERIC</b><br>Secondary class:<b>Principalis</b>"
          );
        }, 3300);
        setTimeout(function() {
          Response(
            "13 : <br>Kate McTiriss's Proposal 'A record'<br> Class: <b style='color:lightyellow'>THAUMIEL</b>"
          );
        }, 3400);
        setTimeout(function() {
          Response("14 : <br>Kalinin's Proposal 'Past And Future'");
        }, 3500);
        setTimeout(function() {
          Response(
            "15 : <br>wrong proposal 'the consensus' <br> Class: <b style='color:orange'>ELUCID</b>"
          );
        }, 3600);
        setTimeout(function() {
          Response(
            "16 : <br>S. D. Locke's Proposal <br> Class: <b style='color:Yellow'>APPOLYON</b>"
          );
        }, 3700);
        setTimeout(function() {
          Response(
            "17 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 3800);
        setTimeout(function() {
          Response(
            "18 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 3900);
        setTimeout(function() {
          Response(
            "19 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4000);
        setTimeout(function() {
          Response(
            "20 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4100);
        setTimeout(function() {
          Response(
            "21 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4200);
        setTimeout(function() {
          Response(
            "22 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4300);
        setTimeout(function() {
          Response(
            "23 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4400);
        setTimeout(function() {
          Response(
            "24 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4500);
        setTimeout(function() {
          Response(
            "25 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4600);
        setTimeout(function() {
          Response(
            "26 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4700);
        setTimeout(function() {
          Response(
            "27 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4800);
        setTimeout(function() {
          Response(
            "28 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 4900);
        setTimeout(function() {
          Response(
            "29 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5000);
        setTimeout(function() {
          Response(
            "30 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5100);
        setTimeout(function() {
          Response(
            "31 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5200);
        setTimeout(function() {
          Response(
            "32 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5300);
        setTimeout(function() {
          Response(
            "33 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5400);
        setTimeout(function() {
          Response(
            "34 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5500);
        setTimeout(function() {
          Response(
            "35 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5600);
        setTimeout(function() {
          Response(
            "36 : <br> Awaiting Upload... <br> Class: <b style='color:white'>???</b>"
          );
        }, 5700);

        setTimeout(function() {
          allowtype = 1;
        }, 5700);

        //total of 36 Scp-001 instances; Jesus christ ;w;
      } else if (upinput.includes("SCP-002")) {
        // SCP 002
        allowtype = 0;
        setTimeout(function() {
          Response("Accessing File: <b>SCP-002.TXT</b>...");
        }, 500);
        setTimeout(function() {
          Response("Access Granted");
        }, 1500);
        setTimeout(function() {
          Response("<b>SCP-002</b> the 'Living' room");
        }, 2000);
        setTimeout(function() {
          Response("Class: <b style='color:orange'>EUCLID</b>");
        }, 2500);
        setTimeout(function() {
          Response("Accessing Image...");
        }, 3000);
        setTimeout(function() {
          Response(
            "<img style='border-style:normal;border-radius:10px' src='http://scp-wiki.wdfiles.com/local--files/scp-002/800px-SCP002-new.jpg' width='20%' height='20%' alt='scp-002'></img>"
          );
        }, 4000);
        setTimeout(function() {
          Response("Contents:");
        }, 4100);
        setTimeout(function() {
          Response("- Mulhalsen Report (mulrep-002)");
          allowtype = 1;
        }, 4200);
      } else if (upinput.includes("MULREP-002")) {
        allowtype = 0;
        setTimeout(function() {
          Response("Accessing...");
        }, 500);
        setTimeout(function() {
          Response(
            "<div class='' style=''>Mulhausen Report [00.023.603] <br><br>The following is a brief report detailing the discovery of SCP-002<br><br>Subject was discovered in a small crater in northern Portugal where it struck the Earth from orbit. Encased in a shell of thick rock, the fleshy exterior of the object was exposed by the impact. A native farmer happened upon the site and reported his findings to the village elder. Subject gained SCP attention when a Level 4 agent posted in the area detected a small radioactive anomaly generated by the object.<br><br>A collection squad of SCP security personnel led by General Mulhausen was immediately dispatched to the area where they quickly secured the subject in a large container and performed initial testing with subjects recruited from the nearby village. Three men individually sent into the structure subsequently disappeared. Upon discovering this deadly property of the subject, General Mulhausen issued a Level 4a Termination Order of any witnesses (roughly 1/3 of the village) to ensure no outside knowledge of the object and initiated its transport to SCP facility [DATA EXPUNGED].<br><br>During preparation for transport, four SCP security personnel were inexplicably drawn inside the object where they too immediately disappeared. Following inspection, it appeared as if the object had 'grown' several new furnishings and was beginning to look like the interior of an apartment room. General Mulhausen immediately ordered the requisition of several Class III HAZMAT suits for the remaining security team members, who proceeded to lift the container onto a waiting freight ship for transport to the SCP containment facility.<br><br>[DATA EXPUNGED]<br><br>[DATA EXPUNGED]<br><br>Following the termination of General Mulhausen, SCP-002 was re-secured by SCP staff and brought into special containment in [CLASSIFIED], where it currently resides. Staff with clearance below Level 3 have been denied access to the SCP-002 container without prior approval of at least two Level 4 staff after the Mulhausen incident.</div>"
          );
          allowtype = 1;
        }, 1000);
      } else if (upinput == "ACCESS") {
        // continue here
        setTimeout(function() {
          Response(
            "<div style='color:red;display:inline'>ERROR: No File specified</div>"
          );
        }, 500);
      } else {
        setTimeout(function() {
          Response(
            "<div style='color:red;display:inline'>ERROR: No File of that type</div>"
          );
        }, 500);
      }
    } else if (input.toUpperCase() == "FILELIST") {
      setTimeout(function() {
        Response("Scp-001");
      }, 500);
      setTimeout(function() {
        Response("Scp-002");
      }, 1000);
      setTimeout(function() {
        Response("&rdsh; mulrep-002");
      }, 1100);
      setTimeout(function() {
        Response("afunnymemesmiley");
      }, 1200);
      setTimeout(function() {
        Response("resources");
      }, 1300);
    } else if (input.toUpperCase() == "LOGOFF") {
      setTimeout(function() {
        Response("Logging off...");
      }, 500);
      setTimeout(function() {
        Response("Success...");
      }, 1000);
      setTimeout(function() {
        Response("Logged off");
        logged = 0;
      }, 1500);
      setTimeout(function() {
        Response("Goodbye, Dr.&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;");
      }, 2000);
      setTimeout(function() {
        Response("Clearing logs...");
      }, 2100);
      setTimeout(function() {
        Response("Syncing Entries to database...");
      }, 2200);
      setTimeout(function() {
        Response("Restarting...");
      }, 2300);
      setTimeout(function() {
        ClearTerminal();
      }, 3500);
    } else if (input.toUpperCase() == "DATE") {
      var date = new Date();
      Response(date);
    } else {
      setTimeout(function() {
        Response(
          "<div style='color:red;display:inline'>ERROR: No Such Command</div>"
        );
      }, 500);
    }
    //end of commands
  }
  //if (input == "")
}
//COMMANDS
function logon() {
  allowtype = 0;
  setTimeout(function() {
    Response("logging on...");
  }, 500);

  setTimeout(function() {
    Response("User: SysAdmin-&#9608;&#9608;&#9608;&#9608;&#9608;");
  }, 600);
  setTimeout(function() {
    Response(
      "Password: &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;"
    );
  }, 700);

  setTimeout(function() {
    Response(
      "Dr.&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;, Level 4 clearance.<br>    login Successful, Accessing Database..."
    );
  }, 1400);

  setTimeout(function() {
    Response("Welcome Dr.&#9608;&#9608;&#9608;&#9608;&#9608;");
  }, 2000);

  setTimeout(function() {
    Response("----------------------------------");
  }, 2100);
  setTimeout(function() {
    Response(
      "<div class='vibecheck' style='line-height:5px;letter-spacing:-5px;align-text:center;display:inline'><pre><br>                                      @@@@@@@@@@@@@@@@@@@@@@@@@@                                     <br>                                     @                        @@                                    <br>                                    .@                         @                                    <br>                                    @@                         @                                    <br>                                    @                          @@                                   <br>                                 -@#                             @@                                 <br>                              #@                                    @@                              <br>                            @                                          @+                           <br>                          @                                              @@                         <br>                        @                        @@                        @@                       <br>                      @                          @@                          @                      <br>                    #@                           @@                            @                    <br>                   @                       .@@@@@@@@@@@@%                       @                   <br>                  @                    @@@@@@@@@@@@@@@@@@@@@@                    @*                 <br>                 @                  @@@@@@@@@    @@    *@@@@@@@@                  +@                <br>                @                 @@@@@@         @@         @@@@@@                 =@               <br>               @                @@@@@*           @@            @@@@@                %@              <br>              @               :@@@@.             @@              @@@@@               @              <br>             @               @@@@@               @@               -@@@@               @             <br>            +@              @@@@                 @@                 @@@@               @            <br>            @              @@@@                  @@                  @@@@              @            <br>           @@             @@@@                @@@@@@@@                @@@@              @           <br>           @             .@@@*                 @@@@@@@                 @@@@             @           <br>           @             @@@@                   @@@@@                  %@@@             @@          <br>          @@            #@@@                    =@@@                    @@@@             @          <br>          @             @@@@                     @@                     @@@@             @          <br>          @             @@@@                                             @@@*            @          <br>          @             @@@@                                             @@@@            @@         <br>          @             @@@@                                             @@@@            @@         <br>          @             @@@@                                             @@@@            @@         <br>          @             @@@@          @@@@@@@@        @@@@@@@@%          @@@%            @#         <br>          @             @@@@           @@@@@@          @@@@@@@          @@@@             @          <br>          @#            @@@@          @@@@@@            @@@@@@.         @@@@             @          <br>        :@               @@@@      :@@@ *@@              @@@  @@@      :@@@:              @         <br>       @:                %@@@    @@@     @                @     #@@@   @@@@                :@       <br>     @@                   @@@@@@@*                                 @@@@@@@                   #@     <br>     @                    %@@@@@                                     @@@@@                    @     <br>      @                 .@@@@@@@                                    @@@@@@@@                 @      <br>       @               @@    @@@@#                                 @@@@    #@               @       <br>        @                     @@@@@                              @@@@@                     @        <br>         @                      @@@@@                          @@@@@=                     #         <br>          @                       @@@@@@                    +@@@@@@                      -          <br>           @                        @@@@@@@@            *@@@@@@@=                        +          <br>            @                          @@@@@@@@@@@@@@@@@@@@@@%                          %           <br>             #                             @@@@@@@@@@@@@@#                             @            <br>              :                                                                       @             <br>              +                                                                      @              <br>               %        .                                                           @               <br>                @   %@@  @@                                               @*@@@-   @                <br>                 @*        #@                                          #@        @@                 <br>                              @%                                     @:                             <br>                                 @@                              %@:                                <br>                                     @@*                     @@+                                    <br>                                           @@@@@@@@@@@@@@#                                          </pre><div style='z-index:1'><div style='display:inline;letter-spacing:1px;position:relative;left:260px;top:-170px'><b>SCP FOUNDATION:</b></div><br><div style='display:inline;letter-spacing:1px;position:relative;left:290px;top:-150px'><b>  Secure. Contain. Protect.</b></div></div></div>"
    );
  }, 2200);
  //setTimeout(function() {
  //Response("");
  //}, 2400);

  setTimeout(function() {
    Response("----------------------------------");
  }, 2500);

  setTimeout(function() {
    Response("If you need any assistance type HELP");
    allowtype = 1;
  }, 2600);
  logged = 1;
}
// IGNORE THIS, ITS USELESS
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
function newscp(scpnumber, clase, UIU, attachments, delay) {
  if (scpnumber !== null) {
    if (clase !== null) {
      if (delay !== null) {
        if (attachments == null) {
          attachments = "No Attached Files";
        }
        if (clase !== null) {
          if (clase.toLowerCase() == "neutralized") {
            clase = "Object class: <b style='color:gray'>NEUTRALIZED</b>";
          } else if (clase.toLowerCase() == "safe") {
            clase = "Object Class: <b style='color:lightgreen'>SAFE</b>";
          } else if (clase.toLowerCase() == "euclid") {
            clase = "Object Class: <b style='color:orange'>EUCLID</b>";
          } else if (clase.toLowerCase() == "keter") {
            clase = "Object Class: <b style='red'>KETER</b>";
          } else if (clase.toLowerCase() == "thaumiel") {
            clase = "Object Class: <b style='color:lightyellow'>THAUMIEL</b>";
          } else if (clase.toLowerCase() == "appolyon") {
            clase = "Object Class: <b style='color:Yellow'>APPOLYON</b>";
          } else if (clase.toLowerCase() == "maskur") {
            clase = "Object Class: <b style='color:magenta'>MASKUR</b>";
          } else {
            console.log("INCORRECT TYPE OF CLASS");
          }

          setTimeout(function() {
            Response(
              "SCP-" + scpnumber + "<br>" + clase + "<br>" + attachments
            );
          }, delay);
        } else if (UIU !== null) {
          var postUIU = UIU;
          UIU = "UIU FILE: " + "<b>" + postUIU + "</b>";
          setTimeout(function() {
            Response("SCP-" + scpnumber + "<br>" + UIU + "<br>" + attachments);
          }, delay);
        }
      }
    }
  } else {
    console.log("SCP NUMBER NOT SPECIFIED");
  }
}
