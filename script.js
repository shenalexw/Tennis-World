document.getElementById("racket_button").addEventListener("click", function(event){
  var level_radio = document.getElementsByName("skill");
  var attribute_radio = document.getElementsByName("attribute")
  var level = 0;
  var attribute = 0;

  for (var i = 0, length = level_radio.length; i < length; i++) {
    if (level_radio[i].checked) {
      level = level_radio[i].value
    }
  }
  for (var i = 0, length = attribute_radio.length; i < length; i++) {
    if (attribute_radio[i].checked) {
      attribute = attribute_radio[i].value
  }
}
display(level, attribute);
event.preventDefault();

});

function display(value_1, value_2){
  if (value_1 == 0 || value_2 == 0){
    alert("Please fill out the rest of the form!");
  }
  if (value_1 == "beginner" && value_2 == "power"){
    document.getElementById('racket').textContent = "Pure Drive";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.2 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "beginner"  && value_2 =="spin"){
    document.getElementById('racket').textContent = "Pure Aero";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.2 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "beginner"  && value_2 == "control"){
    document.getElementById('racket').textContent = "Pure Strike";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.4 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "intermediate"  && value_2 == "power"){
    document.getElementById('racket').textContent = "Ezone 98";
    document.getElementById('brand').textContent = "Yonex";
    document.getElementById('weight').textContent = "11.3 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "intermediate"  && value_2 == "spin"){
    document.getElementById('racket').textContent = "Clash 98";
    document.getElementById('brand').textContent = "Wilson";
    document.getElementById('weight').textContent = "11.5 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "intermediate"  && value_2 == "control"){
    document.getElementById('racket').textContent = "Blade 98";
    document.getElementById('brand').textContent = "Wilson";
    document.getElementById('weight').textContent = "11.4 oz";
    document.getElementById('string').textContent = "18 x 20";
  }
  if (value_1 == "advanced"  && value_2 == "power"){
    document.getElementById('racket').textContent = "Pro Staff";
    document.getElementById('brand').textContent = "Wilson";
    document.getElementById('weight').textContent = "11.9 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "advanced"  && value_2 == "spin"){
    document.getElementById('racket').textContent = "VCORE 95";
    document.getElementById('brand').textContent = "Yonex";
    document.getElementById('weight').textContent = "11.5 oz";
    document.getElementById('string').textContent = "16 x 20";
  }
  if (value_1 == "advanced"  && value_2 == "control"){
    document.getElementById('racket').textContent = "Prestie MP";
    document.getElementById('brand').textContent = "Head";
    document.getElementById('weight').textContent = "11.9 oz";
    document.getElementById('string').textContent = "18x20";
  }
  if (value_1 == "beginner" && value_2 == "nothing"){
    document.getElementById('racket').textContent = "Pure Drive";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.2 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "intermediate"&& value_2 == "nothing"){
    document.getElementById('racket').textContent = "Pure Strike";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.4 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_1 == "advanced" && value_2 == "nothing"){
    document.getElementById('racket').textContent = "Prestie MP";
    document.getElementById('brand').textContent = "Head";
    document.getElementById('weight').textContent = "11.9 oz";
    document.getElementById('string').textContent = "18x20";
  }
  if (value_2 == "power" && value_1 == "nothing"){
    document.getElementById('racket').textContent = "Pure Drive";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.2 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_2 == "spin"&& value_1 == "nothing"){
    document.getElementById('racket').textContent = "Pure Aero";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.2 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_2 == "control" && value_1 == "nothing"){
    document.getElementById('racket').textContent = "Pure Strike";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.4 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  if (value_2 == "nothing" && value_1 == "nothing"){
    document.getElementById('racket').textContent = "Pure Drive";
    document.getElementById('brand').textContent = "Babolat";
    document.getElementById('weight').textContent = "11.2 oz";
    document.getElementById('string').textContent = "16 x 19";
  }
  

}
