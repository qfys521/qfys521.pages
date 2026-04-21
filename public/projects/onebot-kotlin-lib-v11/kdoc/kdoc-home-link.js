(function () {
  var rootLink = '/';
  var projectLink = '/projects/onebot-kotlin-lib-v11/';
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.right = '16px';
  container.style.bottom = '72px';
  container.style.zIndex = '9999';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '8px';

  function createButton(label, href) {
    var link = document.createElement('a');
    link.href = href;
    link.textContent = label;
    link.title = label === 'P' ? 'Back to Project' : 'Back to Home';
    link.setAttribute('aria-label', link.title);
    link.style.display = 'inline-flex';
    link.style.alignItems = 'center';
    link.style.justifyContent = 'center';
    link.style.width = '44px';
    link.style.height = '44px';
    link.style.background = '#1f2937';
    link.style.color = '#fff';
    link.style.borderRadius = '999px';
    link.style.border = '1px solid rgba(255,255,255,0.16)';
    link.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)';
    link.style.fontFamily = 'Arial, sans-serif';
    link.style.fontSize = '13px';
    link.style.fontWeight = '700';
    link.style.textDecoration = 'none';
    link.style.userSelect = 'none';
    link.style.transition = 'transform 120ms ease, opacity 120ms ease';
    link.onmouseenter = function () { link.style.transform = 'translateY(-1px)'; };
    link.onmouseleave = function () { link.style.transform = 'translateY(0)'; };
    return link;
  }

  container.appendChild(createButton('P', projectLink));
  container.appendChild(createButton('H', rootLink));
  document.body.appendChild(container);
})();