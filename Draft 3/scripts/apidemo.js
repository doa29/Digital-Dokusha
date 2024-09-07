
  const api_url = 'http://0.0.0.0:3000';
  function requestAccess(options, printResult) {
    const x = new XMLHttpRequest();
    x.open(options.method, options.url);
    x.onload = x.onerror = () => {
      if (x.status === 200) window.location.href = "/";
      else printResult(x.responseText);
    };
    x.send(options.data);
  }

  // Bind event
  (function() {
    var button = document.getElementById('get');
    button.addEventListener('click', () => {
      requestAccess({
        method: 'POST',
        url: api_url + 'apidemo',
      }, (result) => {
        alert(result);
      });
    }, false);

  })();
