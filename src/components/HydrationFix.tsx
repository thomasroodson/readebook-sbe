/**
 * Script que roda antes da hidratação do React para remover elementos
 * injetados por extensões do navegador (ex: pronounceRootElement),
 * evitando hydration mismatch.
 * Deve ser o primeiro conteúdo no <body> para executar o mais cedo possível.
 */
const HYDRATION_FIX_SCRIPT = `
(function() {
  function removePronounceElement() {
    var el = document.getElementById('pronounceRootElement');
    if (el && el.parentNode) { el.parentNode.removeChild(el); return true; }
    return false;
  }
  removePronounceElement();
  if (document.body) {
    var observer = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length && removePronounceElement()) break;
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  document.addEventListener('DOMContentLoaded', removePronounceElement);
})();
`

export function HydrationFixScript() {
  return (
    <script
      id="hydration-fix-extension"
      dangerouslySetInnerHTML={{ __html: HYDRATION_FIX_SCRIPT }}
    />
  )
}
