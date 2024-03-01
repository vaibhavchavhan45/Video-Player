function video_play(){
    var u = document.getElementById("video");
    u.play();
}

function video_pause(){
    var u = document.getElementById("video");
    u.pause();
}

function video_upload(){
    var u = document.getElementById("upload-video");
    u = u.value.replace(/.*(\/|\\)/, '');
    var v = document.getElementById("video");
    v.src=u;
}

//video jith upload kraych ahe te select kel id n
//tya video chi kahi na kahi file name asl mnje html chya language mdhe value attribute chi value asel
//....ti value select keli ani tya value mdhla fakepath kaadhun taakla replace method n
//....aata aaplya file chi value mnje purn file stored ahe ekaa var mdhe (not needed : ti aapn print pn krun shkto)
//ti file upload kraachi n t kashyaachya jaagyavr geli pahije  tyale select kel(mnje video tag mdhe jo video ahe tya video chya jaagyavr haa uoload kelela video disla pahije)
//tyaal select kel id ne, nntr jo video aaplyala upload kraaycha ahe tyachi value jo video tith aadhi pasun ahe tyachya jaagyavr taakun dya mnje src attribute mdhe

















