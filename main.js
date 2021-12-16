function preload() {
    song1 = loadSound("Sweater Weather.mp3")
    song2 = loadSound("Alive.mp3")
    song3 = loadSound("All These Parties.mp3")
    song4 = loadSound("Cross Your Mind.mp3")
    song5 = loadSound("Water Fountain.mp3")
    song6 = loadSound("New Romantics.mp3")
    song7 = loadSound("Lilith.mp3")
    song8 = loadSound("Piece Of You.mp3")
    song9 = loadSound("Two Ghosts.mp3")
    }
    
    function setup() {}
    
    function draw() {}
    
    
    
    function f1() {
    song9.stop();
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song2.stop();
    song1.play();
    song1.setVolume(1) //in volume property, 0 is the min and 1 is max
    song1.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "Sweater Weather by The Neighbourhood is playing"
    }
    
    function f2() {
    song9.stop();
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song2.play();
    song2.setVolume(1) //in volume property, 0 is the min and 1 is max
    song2.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "Alive by One Direction is playing"
    }
    function f3() {
    song9.stop();
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song4.stop();
    song2.stop();
    song1.stop()
    song3.play();
    song3.setVolume(1) //in volume property, 0 is the min and 1 is max
    song3.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "All These Parties by Johnny Orlando is playing"
    }
    function f4() {
    song9.stop();
    song8.stop();
    song7.stop();
    song6.stop();
    song5.stop();
    song2.stop();
    song3.stop();
    song1.stop()
    song4.play();
    song4.setVolume(1) //in volume property, 0 is the min and 1 is max
    song4.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "Cross Your Mind by Sabrina Claudio is playing"
    }
    function f5() {
    song9.stop();
    song8.stop();
    song7.stop();
    song6.stop();
    song2.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song5.play();
    song5.setVolume(1) //in volume property, 0 is the min and 1 is max
    song5.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "Water Fountain by Alec Benjamin is playing"
    }
    function f6() {
    song9.stop();
    song8.stop();
    song7.stop();
    song2.stop();
    song5.stop();
    song4.stop();
    song3.stop();
    song1.stop()
    song6.play();
    song6.setVolume(1) //in volume property, 0 is the min and 1 is max
    song6.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
    document.getElementById("status").innerHTML= "New Romantics by Taylor Swift is playing"
    }
    
    function f7() {
        song9.stop();
        song8.stop();
        song6.stop();
        song2.stop();
        song5.stop();
        song4.stop();
        song3.stop();
        song1.stop();
        song7.play();
        song7.setVolume(1) //in volume property, 0 is the min and 1 is max
        song7.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
        document.getElementById("status").innerHTML= "Lilith by Halsey is playing"
    }
    function f8() {
        song9.stop();
        song6.stop();
        song7.stop();
        song2.stop();
        song5.stop();
        song4.stop();
        song3.stop();
        song1.stop()
        song8.play();
        song8.setVolume(1) //in volume property, 0 is the min and 1 is max
        song8.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
        document.getElementById("status").innerHTML= "Piece Of You by Shawn Mendes is playing"
    }
    function f9() {
        song6.stop();
        song8.stop();
        song7.stop();
        song2.stop();
        song5.stop();
        song4.stop();
        song3.stop();
        song1.stop()
        song9.play();
        song9.setVolume(1) //in volume property, 0 is the min and 1 is max
        song9.rate(1); //1 is the normal speed 2.5 is the max 0.5 is min
        document.getElementById("status").innerHTML= "Two Ghosts by Harry Styles is playing"
        }