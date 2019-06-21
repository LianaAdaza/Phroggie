var button = $(`.button`);
button.on("click", phroggie);

function phroggie() {
  event.preventDefault();
  var image1 = $('.image1');
  var image2 = $('.image2');
  var gunnie = ["1", "2", "3", "4", "5"];
  var gunny = Math.random() * gunnie.length
  var gunni = Math.floor(gunny)
  var message = $('h2');
  if (gunni == "1") {
    message.text(`MURDERER! Phrog is not coming home to their family of 6 tonight. Refresh and try again.`)
    image1.toggleClass('image2');
  } else if (gunni == "2"){
    message.text(`Phrog is safe...for now`)
  } else if (gunni == "3"){
    message.text(`Phrog is going home, but they are scarred for life`)
  } else if (gunni == "4"){
    message.text(`Phroggie looks at you with fear and hatred..they hop away`)
  } else {
    message.text(`Phroggie says ribbet, and maces you.`)
}
}
