(function () {
  var rootLink = '/';
  var projectLink = '/projects/onebot-kotlin-sdk/';
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '12px';
  container.style.right = '12px';
  container.style.zIndex = '9999';
  container.style.display = 'flex';
  container.style.gap = '8px';

  function createLink(text, href) {
    var link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    link.style.padding = '6px 10px';
    link.style.background = '#1f2937';
    link.style.color = '#fff';
    link.style.borderRadius = '6px';
    link.style.fontFamily = 'Arial, sans-serif';
    link.style.fontSize = '12px';
    link.style.textDecoration = 'none';
    return link;
  }

  container.appendChild(createLink('Home', rootLink));
  container.appendChild(createLink('Project', projectLink));
  document.body.appendChild(container);
})();