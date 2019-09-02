  fetch('https://xkcd.com/info.0.json').then(function(response) {
    response.json().then(function(data) {
      var img = data.img;
      var title = data.safe_title;
      var targetTitle = document.getElementById('title');
      var targetImg = document.getElementById('xkcd');
      targetImg.src = img;
      targetTitle.innerText = title;
    });
  });
