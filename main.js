  fetch('https://xkcd.com/info.0.json').then(function(response) {
    response.json().then(function(data) {
      var img = data.img;
      var title = data.safe_title;
	  var alt = data.alt;
      var targetTitle = document.getElementById('title');
      var targetImg = document.getElementById('xkcd');
	  var targetAlt = document.getElementById('alt');
      targetImg.src = img;
      targetTitle.innerText = title;
	  targetAlt.innerText = alt;
    });
  });
