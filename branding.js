// Replace Mintlify's "Powered by" footer link with a "Powered by Kalaris Labs" link.
// branding.css hides the original link until this script runs. Delete both files to restore the default footer.
(function () {
  var SELECTOR = 'a[href*="utm_campaign=poweredBy"]';

  function rebrand() {
    var links = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < links.length; i++) {
      links[i].href = "https://kalarislabs.com";
      links[i].textContent = "Powered by Kalaris Labs";
    }
  }

  rebrand();
  new MutationObserver(rebrand).observe(document.documentElement, { childList: true, subtree: true });
})();
