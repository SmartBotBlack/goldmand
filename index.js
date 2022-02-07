// This is a free script for the game goldmand.io
//
// @author       Smartbot Black Team
// @site         https://smartbot.black/

const SELECTOR_MINE =
  ".game--container  > .mining-box .mining-box--content a.button";
const SELECTOR_APPROVE =
  ".game--container  > .mining-box .modal.visible .button.green-button";

(async () => {
  while (1) {
    try {
      await new Promise((res) => setTimeout(res), 10 * 1000);

      const btnApprove = document.querySelector(SELECTOR_APPROVE);
      if (btnApprove) {
        btnApprove.click();
        await new Promise((res) => setTimeout(res), 10 * 1000);
      }

      const btnMine = document.querySelector(SELECTOR_MINE);
      if (btnMine) {
        btnMine.click();
        await new Promise((res) => setTimeout(res), 10 * 1000);
      }
    } catch (e) {
      console.error(e);
    }
  }
})();
