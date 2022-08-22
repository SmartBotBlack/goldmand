// This is a free script for the game goldmand.io
//
// @author       Smartbot Black Team
// @site         https://smartbot.black/

const SELECTOR_MINE =
  ".game--container  > .mining-box .mining-box--content a.button";
const SELECTOR_APPROVE =
  ".modal-wrapper.visible .modal--with-bg .modal-bottom .button.green-button";
const DELAY = 10 * 1000;

(async () => {
  while (1) {
    try {
      await new Promise((res) => setTimeout(res, DELAY));

      const btnApprove = document.querySelector(SELECTOR_APPROVE);
      if (btnApprove) {
        btnApprove.click();
        continue;
      }

      const btnMine = document.querySelector(SELECTOR_MINE);
      if (btnMine) {
        btnMine.click();
        continue;
      }
    } catch (e) {
      console.error(e);
    }
  }
})();
