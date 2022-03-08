const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
var elemid_drag;
var num = 1;
var elemid_drop;
var lname = sessionStorage.getItem("lname");
var lmail = sessionStorage.getItem("lmail");
var lschool = sessionStorage.getItem("lschool");
var lcorrect = sessionStorage.getItem("lcorrect");
var lwrong = sessionStorage.getItem("lwrong");
var score = 0;
let l = 0;
let a;
let correct_list = []
let wrong_list = []

function random1(array, array1, array2){
  m = 0;
  while (m < (array.length - 2)){
    i = Math.floor(Math.random() * (array.length + 1));
    
    var index = array[i];
    var index1 = array1[i];
    var index2 = array2[i]
    
    var first_elem2 = array2[0];
    var first_elem1 = array1[0];
    array1[i] = first_elem1;
    array1[0] = index1;

    array2[i] = first_elem2;
    array2[0] = index2;

    var first_elem = array[0];
    array[i] = first_elem;
    array[0] = index;

    m = m + 1
    var drag_val_new = array;
    var drag_text_new = array1;
    var split_new = array2;
 }
}
random1(drag_val, drag_text, split);

function new_page(){
  a = document.createElement('a');
  a.href = './end_card.html';
  a.click();
}

function sendEmail(params){
  let check = 1;
  sessionStorage.setItem("score", score);
  sessionStorage.setItem("questions", l);
  

  var TempParams = {
    to_name: lname,
    message: " score : " + score + ", number of questions answered : " + (l) + ", name : " + lname + ", mail : " + lmail + ", school : " + lschool,
    to_email: lmail,
  };

  
  
  emailjs.send("service_w7i4hqi", "template_n4w0qef", TempParams)
  .then(function(res){
    console.log("success", res.status);
    new_page();
  })
  //alert("your score is : " + score + " No. of questions answered : " + (l-1));
 
}




const correct_sound = document.getElementById("correct_audio");

function correct_music(word){
  sessionStorage.setItem("correct", word);
  correct_sound.play();
}

function wrong_music(wordwr){
  const wrong = document.getElementById("wrong_audio");
  wordwr = wordwr.replace(/[a-z][1-9]/, "");
  sessionStorage.setItem("wrong", wordwr);
  wrong_list.push(wordwr);
  let wrong_li = wrong_list.filter((c, index) => {
    return wrong_list.indexOf(c) === index;
    });
  sessionStorage.setItem("cor_list", wrong_li);
  
  
  
  wrong.play();
}



//var drag_val = ["d1आमरण","d1हाथों हाथ","d1यथाशीघ्र","d1यथाविधि/ विधिनुसार ","d1दिनो-दिन","d1बाकायदा ","d1निधड़क/बेधड़क","d1यथावसर","d1बेशक","d1यथोचित","d1निडर","d1यथायोग्यता","d1भरपेट","d1अनजाने","d1गली-गली/गाँव-गाँव","d1रातभर/रातोंरात","d1बखूबी","d1अनुरूप","d1प्रतिमास","d1पल-पल","d1नया-नया","d1अकारण ","d1अभूतपूर्व ","d1निस्संदेह","d1प्रत्यक्ष","d1बेईमान","d1मतिनुसार ","d1क्रमानुसार","d1बीचोंबीच","d1यथाशक्ति","d1यथासाध्य","d1बेलगाम","d1अदेशानुसार","d1आसमुद्र","d1भरसक","d1सादर","d1आजन्म ","d1यथासंभव ","d1यथार्थ ","d1मनमाना","d1असंगत","d1यथाकारण","d2सुलोचना","d2राजीव लोचन","d2महादेव","d2मृगनयनी","d2पतिव्रता","d2निर्दयी","d2अल्पाहारी","d2दूधमुहाँ","d2अल्पबुद्धि","d2अनाथ","d2जितेंद्रीय","d2श्वेतांबर","d2चंद्रशेखर","d2बारहसिंगा","d2मक्खीचूस ","d2चतुर्मुख/चतुरानन","d2चक्रपाणी","d2त्रिनेत्र","d2निशाचर","d2तपोधन ","d2दिगंबर","d2अंशुमाली","d2गोपाल","d2एकदंत","d2मुरलीधर","d2मृत्युंजय","d2वीणापाणी","d2कामधेनु","d2माखनचोर","d2बहेलिया","d2गिरिधर","d2पीतांबर","d2लंबोदर","d2नवसाक्षर","d2विषधर","d2महाशय","d2दशानन","d2तीव्रबुद्धि","d2अष्टावक्र","d2सिंहवाहिनी","d2पवनपुत्र","d2सपरिवार","d3दाल-रोटी","d3दीन-दुखी","d3धर्माधर्म","d3न्यूनाधिक","d3देवासुर","d3जलवायु","d3हाथ-पैर","d3जन्म-मरण","d3लव-कुश","d3धनी-मानी","d3खट्टा-मीठा","d3लाभालाभ","d3यश-अपयश","d3तन-मन","d3जल-थल","d3चिठ्ठी- पत्री","d3गाय-बैल","d3देवासुर","d3साधु-संत","d3धन-धान","d3पूर्व-पश्चिम","d3वेदपुराण","d3गौरीशंकर","d3धनुर्बाण","d3चाय-कॉफी","d3मुक्का-मुक्की","d3कपड़ा-लत्ता","d3अमीर-गरीब","d3दिनरात","d3हवा-पानी","d3अन्नजल ","d3राजा-रंक ","d3हाथी-घोड़ा","d3भाई-बहन","d3माता-पिता","d3चाचा-चाची","d3आकाश-पाताल","d3पाप-पुण्य","d3ऋषि-मुनि","d3भीमार्जुन","d3माँ-बाप","d3हरि-शंकर","d4नवरत्न ","d4दोपहर","d4शताब्दी","d4अष्टाध्यायी","d4पंचतत्व","d4दुराहा","d4षडरस","d4पंजाब/पंचनद","d4द्विगु","d4सप्तद्वीप","d4तिरंगा","d4चतुर्वर्ण ","d4सतसई","d4अठन्नी","d4नवग्रह","d4चौमासा ","d4त्रिफला","d4चौगढ्ढा","d4चतुष्कोण","d4त्रिलोक","d4तिराहा","d4चौराहा","d4पंचानन","d4त्रिभुवन","d4पंचामृत","d4चतुर्मुख","d4त्रिदेव","d4त्रिनेत्र","d4नवनिधि/नौनिधि","d4त्रिरत्न","d4नवरात्री","d4षटकोण","d4अष्ट्भुजा","d4दसानन","d4चवन्नी","d4चौपाया/चारपाई","d4चतुर्भुज","d4सप्तऋषि","d4अष्टादशांग ","d4त्रयी ","d4द्विपद ","d4त्रिवेणी","d5नील गगन","d5दुश्चरित्र","d5कापुरुष","d5कुबुद्धि","d5मानवोचित","d5सज्जन","d5पुरुषोत्तम","d5अंधकूप","d5नराधम","d5मुनिश्रेष्ठ","d5भलामानस","d5काली-मिर्च","d5सद् गुण","d5कृष्णसर्प","d5कनकलता","d5ग्रंथरत्न","d5चरण कमल","d5विद्याधन ","d5गुरुदेव","d5वचनामृत","d5भुजदंड ","d5कर-पल्लव","d5बलबुद्धि","d5प्राण-प्रिय","d5भवसागर","d5महाजन","d5क्रोधाग्नि","d5स्त्रीरत्न","d5देहलता","d5चंद्र्मुख/मुखचन्द्र ","d5विशालकाय","d5करकमल","d5सुंदरनयन","d5महाशय ","d5अधपका ","d5लालमिर्च","d5लालछड़ी","d5दुरात्मा","d5घनश्याम ","d5दुश्चरित्र","d5महाविद्यालय ","d5सभ्यसमाज ","d6आत्मत्राण","d6विश्वसंगठन","d6यश प्राप्त","d6मरणासन्न","d6गृहागत","d6सर्वप्रिय","d6परलोकगमन","d6ग्रंथकार","d6शरणागत","d6सूरकृत","d6रोगमुक्त","d6मनगढ़ंत","d6मदांध","d6स्वरचित","d6वाग्दत्ता","d6ईश्वर प्रदत्त","d6जन्मरोगी","d6विद्यालय","d6पुण्यदान","d6क्रीडा क्षेत्र","d6बलि पशु","d6सत्याग्रह","d6राज्य लिप्सा","d6परीक्षा केंद्र","d6चुनाव आयोग","d6पुस्तकालय","d6घुड़्साल ","d6न्यायालय","d6हवनसामग्री","d6धनहीन ","d6ऋण मुक्त","d6धर्म विमुख","d6धनभ्रष्ट","d6देश निकाला","d6पाप मुक्त","d6भयभीत","d6जन्मांध","d6पद्च्युत","d6समयानुसार","d6उद्योगपति ","d6परोपकार","d6गंगाजल","d6कठपुतली","d6ऋषिकन्या","d6राजनीतिज्ञ","d6विद्यारत्न","d6पराधीन ","d6मृत्युदंड","d6राजसभा","d6कनकघट ","d6राष्ट्रभक्त","d6कृपापात्र","d6जनांदोलन","d6सचिवालय","d6प्रसंगानुसार","d6शराणागत","d6ध्यानमग्न","d6सिर दर्द","d6कविश्रेष्ठ","d6कला निपुण","d6रणवीर","d6डिब्बाबंद","d6घुड़सवार","d6जगबीती","d6पुरुषोत्तम ","d6नभचर","d6अश्वारोही","d6व्यवहारकुशल","d6लोकप्रिय","d6गृह प्रवेश","d6आत्मविश्वास","d6नरोत्तम ","d6दीनानाथ","d6दानवीर","d6आशातीत","d6विदेशगत","d6अयोग्य","d6अन्याय","d6अधर्म","d6अनीति","d6अज्ञान","d6नास्तिक","d6अनुदार","d6अकर्मण्य","d6असंभव","d6अनादि ","d6अमर","d6अनाथ","d6अनर्थ","d6असफल","d6अनहोनी","d6अनंत"];
//var drag_text = ["आमरण","हाथों हाथ","यथाशीघ्र","यथाविधि/ विधिनुसार ","दिनो-दिन","बाकायदा ","निधड़क/बेधड़क","यथावसर","बेशक","यथोचित","निडर","यथायोग्यता","भरपेट","अनजाने","गली-गली/गाँव-गाँव","रातभर/रातोंरात","बखूबी","अनुरूप","प्रतिमास","पल-पल","नया-नया","अकारण ","अभूतपूर्व ","निस्संदेह","प्रत्यक्ष","बेईमान","मतिनुसार ","क्रमानुसार","बीचोंबीच","यथाशक्ति","यथासाध्य","बेलगाम","अदेशानुसार","आसमुद्र","भरसक","सादर","आजन्म ","यथासंभव ","यथार्थ ","मनमाना","असंगत","यथाकारण","सुलोचना","राजीव लोचन","महादेव","मृगनयनी","पतिव्रता","निर्दयी","अल्पाहारी","दूधमुहाँ","अल्पबुद्धि","अनाथ","जितेंद्रीय","श्वेतांबर","चंद्रशेखर","बारहसिंगा","मक्खीचूस ","चतुर्मुख/चतुरानन","चक्रपाणी","त्रिनेत्र","निशाचर","तपोधन ","दिगंबर","अंशुमाली","गोपाल","एकदंत","मुरलीधर","मृत्युंजय","वीणापाणी","कामधेनु","माखनचोर","बहेलिया","गिरिधर","पीतांबर","लंबोदर","नवसाक्षर","विषधर ","महाशय","दशानन","तीव्रबुद्धि","अष्टावक्र ","सिंहवाहिनी","पवनपुत्र","सपरिवार","दाल-रोटी","दीन-दुखी","धर्माधर्म","न्यूनाधिक","देवासुर","जलवायु","हाथ-पैर","जन्म-मरण","लव-कुश","धनी-मानी","खट्टा-मीठा","लाभालाभ","यश-अपयश","तन-मन","जल-थल","चिठ्ठी- पत्री","गाय-बैल","देवासुर","साधु-संत","धन-धान","पूर्व-पश्चिम","वेदपुराण","गौरीशंकर","धनुर्बाण","चाय-कॉफी","मुक्का-मुक्की","कपड़ा-लत्ता","अमीर-गरीब","दिनरात","हवा-पानी","अन्नजल ","राजा-रंक ","हाथी-घोड़ा","भाई-बहन","माता-पिता","चाचा-चाची","आकाश-पाताल","पाप-पुण्य","ऋषि-मुनि","भीमार्जुन","माँ-बाप","हरि-शंकर","नवरत्न ","दोपहर","शताब्दी","अष्टाध्यायी","पंचतत्व","दुराहा","षडरस","पंजाब/पंचनद","द्विगु","सप्तद्वीप","तिरंगा","चतुर्वर्ण ","सतसई","अठन्नी","नवग्रह","चौमासा ","त्रिफला","चौगढ्ढा","चतुष्कोण","त्रिलोक","तिराहा","चौराहा","पंचानन","त्रिभुवन","पंचामृत","चतुर्मुख","त्रिदेव","त्रिनेत्र","नवनिधि/नौनिधि","त्रिरत्न","नवरात्री","षटकोण","अष्ट्भुजा","दसानन","चवन्नी","चौपाया/चारपाई","चतुर्भुज","सप्तऋषि","अष्टादशांग ","त्रयी ","द्विपद ","त्रिवेणी","नील गगन","दुश्चरित्र","कापुरुष","कुबुद्धि","मानवोचित","सज्जन","पुरुषोत्तम","अंधकूप","नराधम","मुनिश्रेष्ठ","भलामानस","काली-मिर्च","सद् गुण","कृष्णसर्प","कनकलता","ग्रंथरत्न","चरण कमल","विद्याधन ","गुरुदेव","वचनामृत","भुजदंड ","कर-पल्लव","बलबुद्धि","प्राण-प्रिय","भवसागर","महाजन","क्रोधाग्नि","स्त्रीरत्न","देहलता","चंद्र्मुख/मुखचन्द्र ","विशालकाय","करकमल","सुंदरनयन","महाशय ","अधपका ","लालमिर्च","लालछड़ी","दुरात्मा","घनश्याम ","दुश्चरित्र","महाविद्यालय ","सभ्यसमाज ","आत्मत्राण","विश्वसंगठन","यश प्राप्त","मरणासन्न","गृहागत","सर्वप्रिय","परलोकगमन","ग्रंथकार","शरणागत","सूरकृत","रोगमुक्त","मनगढ़ंत","मदांध","स्वरचित","वाग्दत्ता","ईश्वर प्रदत्त","जन्मरोगी","विद्यालय","पुण्यदान","क्रीडा क्षेत्र","बलि पशु","सत्याग्रह","राज्य लिप्सा","परीक्षा केंद्र","चुनाव आयोग","पुस्तकालय","घुड़्साल ","न्यायालय","हवनसामग्री","धनहीन ","ऋण मुक्त","धर्म विमुख","धनभ्रष्ट","देश निकाला","पाप मुक्त","भयभीत","जन्मांध","पद्च्युत","समयानुसार","उद्योगपति ","परोपकार","गंगाजल","कठपुतली","ऋषिकन्या","राजनीतिज्ञ","विद्यारत्न","पराधीन ","मृत्युदंड","राजसभा","कनकघट ","राष्ट्रभक्त","कृपापात्र","जनांदोलन","सचिवालय","प्रसंगानुसार","शराणागत","ध्यानमग्न","सिर दर्द","कविश्रेष्ठ","कला निपुण","रणवीर","डिब्बाबंद","घुड़सवार","जगबीती","पुरुषोत्तम ","नभचर","अश्वारोही","व्यवहारकुशल","लोकप्रिय","गृह प्रवेश","आत्मविश्वास","नरोत्तम ","दीनानाथ","दानवीर","आशातीत","विदेशगत","अयोग्य","अन्याय","अधर्म","अनीति","अज्ञान","नास्तिक","अनुदार","अकर्मण्य","असंभव","अनादि ","अमर","अनाथ","अनर्थ","असफल","अनहोनी","अनंत"];

var bttn_div;

function click1(){
  if (l < (drag_val.length)){
    //draggable

    if (bttn_div != null) {
      bttn_div.remove()
    }
    //prompt(drag_val[l])
    
    bttn_div = document.createElement("div");
    bttn_div.addEventListener("dragstart", dragStart);
    bttn_div.className = "draggable";
    
    bttn_div.id = drag_val[l];
    
    bttn_div.style = "font-size: 25px; position:relative; bottom: 300px;  font-color: black;";//position:relative; bottom: 2000px;
    bttn_div.draggable = "true";
    document.getElementById("body").appendChild(bttn_div);
    bttn_div.innerHTML = drag_text[l];
    
    
    l = l+1;
    

    elementClear(); 
      
    
    }
  
  else{
    prompt(" No more values remain");
  }
  document.getElementById("split_new").innerHTML = drag_text[l-1] + " : " + split[l-1];
}







droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});



function dragStart(event) {
  event.dataTransfer.setData("text" ,event.target.id); 
}



function dragEnter(event) {
  
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}


function dragOver(event) {
  
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }  
}

function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  
  num = 2;

  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data.("text")This method will return any data that was set to the same type in the setData() method
  const droppableElementData = event.target.getAttribute("id") 
  
  elemid_drag = document.getElementById(draggableElementData);
  elemid_drop = document.getElementById(droppableElementData);
  
  
//  let dragid = ["d1आमरण","d1हाथों हाथ","d1यथाशीघ्र","d1यथाविधि/ विधिनुसार ","d1दिनो-दिन","d1बाकायदा ","d1निधड़क/बेधड़क","d1यथावसर","d1बेशक","d1यथोचित","d1निडर","d1यथायोग्यता","d1भरपेट","d1अनजाने","d1गली-गली/गाँव-गाँव","d1रातभर/रातोंरात","d1बखूबी","d1अनुरूप","d1प्रतिमास","d1पल-पल","d1नया-नया","d1अकारण ","d1अभूतपूर्व ","d1निस्संदेह","d1प्रत्यक्ष","d1बेईमान","d1मतिनुसार ","d1क्रमानुसार","d1बीचोंबीच","d1यथाशक्ति","d1यथासाध्य","d1बेलगाम","d1अदेशानुसार","d1आसमुद्र","d1भरसक","d1सादर","d1आजन्म ","d1यथासंभव ","d1यथार्थ ","d1मनमाना","d1असंगत","d1यथाकारण"];
//  let dragid2 = ["d2सुलोचना","d2राजीव लोचन","d2महादेव","d2मृगनयनी","d2पतिव्रता","d2निर्दयी","d2अल्पाहारी","d2दूधमुहाँ","d2अल्पबुद्धि","d2अनाथ","d2जितेंद्रीय","d2श्वेतांबर","d2चंद्रशेखर","d2बारहसिंगा","d2मक्खीचूस ","d2चतुर्मुख/चतुरानन","d2चक्रपाणी","d2त्रिनेत्र","d2निशाचर","d2तपोधन ","d2दिगंबर","d2अंशुमाली","d2गोपाल","d2एकदंत","d2मुरलीधर","d2मृत्युंजय","d2वीणापाणी","d2कामधेनु","d2माखनचोर","d2बहेलिया","d2गिरिधर","d2पीतांबर","d2लंबोदर","d2नवसाक्षर","d2विषधर ","d2महाशय","d2दशानन","d2तीव्रबुद्धि","d2अष्टावक्र ","d2सिंहवाहिनी","d2पवनपुत्र","d2सपरिवार"];
//  let dragid3 = ["d3दाल-रोटी","d3दीन-दुखी","d3धर्माधर्म","d3न्यूनाधिक","d3देवासुर","d3जलवायु","d3हाथ-पैर","d3जन्म-मरण","d3लव-कुश","d3धनी-मानी","d3खट्टा-मीठा","d3लाभालाभ","d3यश-अपयश","d3तन-मन","d3जल-थल","d3चिठ्ठी- पत्री","d3गाय-बैल","d3देवासुर","d3साधु-संत","d3धन-धान","d3पूर्व-पश्चिम","d3वेदपुराण","d3गौरीशंकर","d3धनुर्बाण","d3चाय-कॉफी","d3मुक्का-मुक्की","d3कपड़ा-लत्ता","d3अमीर-गरीब","d3दिनरात","d3हवा-पानी","d3अन्नजल ","d3राजा-रंक ","d3हाथी-घोड़ा","d3भाई-बहन","d3माता-पिता","d3चाचा-चाची","d3आकाश-पाताल","d3पाप-पुण्य","d3ऋषि-मुनि","d3भीमार्जुन","d3माँ-बाप","d3हरि-शंकर"];
//  let dragid4 = ["d4नवरत्न ","d4दोपहर","d4शताब्दी","d4अष्टाध्यायी","d4पंचतत्व","d4दुराहा","d4षडरस","d4पंजाब/पंचनद","d4द्विगु","d4सप्तद्वीप","d4तिरंगा","d4चतुर्वर्ण ","d4सतसई","d4अठन्नी","d4नवग्रह","d4चौमासा ","d4त्रिफला","d4चौगढ्ढा","d4चतुष्कोण","d4त्रिलोक","d4तिराहा","d4चौराहा","d4पंचानन","d4त्रिभुवन","d4पंचामृत","d4चतुर्मुख","d4त्रिदेव","d4त्रिनेत्र","d4नवनिधि/नौनिधि","d4त्रिरत्न","d4नवरात्री","d4षटकोण","d4अष्ट्भुजा","d4दसानन","d4चवन्नी","d4चौपाया/चारपाई","d4चतुर्भुज","d4सप्तऋषि","d4अष्टादशांग ","d4त्रयी ","d4द्विपद ","d4त्रिवेणी"];
//  let dragid5 = ["d5नील गगन","d5दुश्चरित्र","d5कापुरुष","d5कुबुद्धि","d5मानवोचित","d5सज्जन","d5पुरुषोत्तम","d5अंधकूप","d5नराधम","d5मुनिश्रेष्ठ","d5भलामानस","d5काली-मिर्च","d5सद् गुण","d5कृष्णसर्प","d5कनकलता","d5ग्रंथरत्न","d5चरण कमल","d5विद्याधन ","d5गुरुदेव","d5वचनामृत","d5भुजदंड ","d5कर-पल्लव","d5बलबुद्धि","d5प्राण-प्रिय","d5भवसागर","d5महाजन","d5क्रोधाग्नि","d5स्त्रीरत्न","d5देहलता","d5चंद्र्मुख/मुखचन्द्र ","d5विशालकाय","d5करकमल","d5सुंदरनयन","d5महाशय ","d5अधपका ","d5लालमिर्च","d5लालछड़ी","d5दुरात्मा","d5घनश्याम ","d5दुश्चरित्र","d5महाविद्यालय ","d5सभ्यसमाज "];
//  let dragid6 = ["d6आत्मत्राण","d6विश्वसंगठन","d6यश प्राप्त","d6मरणासन्न","d6गृहागत","d6सर्वप्रिय","d6परलोकगमन","d6ग्रंथकार","d6शरणागत","d6सूरकृत","d6रोगमुक्त","d6मनगढ़ंत","d6मदांध","d6स्वरचित","d6वाग्दत्ता","d6ईश्वर प्रदत्त","d6जन्मरोगी","d6विद्यालय","d6पुण्यदान","d6क्रीडा क्षेत्र","d6बलि पशु","d6सत्याग्रह","d6राज्य लिप्सा","d6परीक्षा केंद्र","d6चुनाव आयोग","d6पुस्तकालय","d6घुड़्साल ","d6न्यायालय","d6हवनसामग्री","d6धनहीन ","d6ऋण मुक्त","d6धर्म विमुख","d6धनभ्रष्ट","d6देश निकाला","d6पाप मुक्त","d6भयभीत","d6जन्मांध","d6पद्च्युत","d6समयानुसार","d6उद्योगपति ","d6परोपकार","d6गंगाजल","d6कठपुतली","d6ऋषिकन्या","d6राजनीतिज्ञ","d6विद्यारत्न","d6पराधीन ","d6मृत्युदंड","d6राजसभा","d6कनकघट ","d6राष्ट्रभक्त","d6कृपापात्र","d6जनांदोलन","d6सचिवालय","d6प्रसंगानुसार","d6शराणागत","d6ध्यानमग्न","d6सिर दर्द","d6कविश्रेष्ठ","d6कला निपुण","d6रणवीर","d6डिब्बाबंद","d6घुड़सवार","d6जगबीती","d6पुरुषोत्तम ","d6नभचर","d6अश्वारोही","d6व्यवहारकुशल","d6लोकप्रिय","d6गृह प्रवेश","d6आत्मविश्वास","d6नरोत्तम ","d6दीनानाथ","d6दानवीर","d6आशातीत","d6विदेशगत","d6अयोग्य","d6अन्याय","d6अधर्म","d6अनीति","d6अज्ञान","d6नास्तिक","d6अनुदार","d6अकर्मण्य","d6असंभव","d6अनादि ","d6अमर","d6अनाथ","d6अनर्थ","d6असफल","d6अनहोनी","d6अनंत"];

  
  
  
  
  if ((((draggableElementData.charAt(0) + draggableElementData.charAt(1))  === "d1") && ((droppableElementData.charAt(0) + droppableElementData.charAt(1)))  === "d1") || (((draggableElementData.charAt(0) + draggableElementData.charAt(1))  === "d2") && ((droppableElementData.charAt(0) + droppableElementData.charAt(1))  === "d2")) || (((draggableElementData.charAt(0) + draggableElementData.charAt(1))  === "d3") && (droppableElementData.charAt(0) + droppableElementData.charAt(1))  === "d3") || (((draggableElementData.charAt(0) + draggableElementData.charAt(1))  === "d4") && ((droppableElementData.charAt(0) + droppableElementData.charAt(1))  === "d4")) || (((draggableElementData.charAt(0) + draggableElementData.charAt(1))  === "d5") && ((droppableElementData.charAt(0) + droppableElementData.charAt(1))  === "d5")) || (((draggableElementData.charAt(0) + draggableElementData.charAt(1))  === "d6") && (droppableElementData.charAt(0) + droppableElementData.charAt(1))  === "d6")){
    score = score + 1;

    correct_music(draggableElementData);
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");

    remove_func = document.getElementById(drag_val[l-1]);
    remove_func.remove();
    //var time2 = document.getElementById("clock");
    //time2.innerHTML = systemdate.toLocaleTimeString();
    
    
   }

  else{
    wrong_music(draggableElementData)
    score = score - 1;
  }
  //document.getElementById("clock").innerHTML = "Score : " + score;
}

function elementClear(){
    if (elemid_drop != null){

      elemid_drop.classList.remove("dropped");
      elemid_drop.setAttribute("style", "background-color: white;");
    }
};
