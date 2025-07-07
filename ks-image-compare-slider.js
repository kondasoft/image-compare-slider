/*
  © 2025 KondaSoft
  https://www.kondasoft.com
*/


class KsImageCompare extends HTMLElement {
  constructor () {
    super()

    this.isDragging = false;

    this.addEventListener("mousedown", this.startDrag);
    this.addEventListener("mousemove", this.moveSlider);
    this.addEventListener("mouseup", this.stopDrag);

    this.addEventListener("touchstart", this.startDrag);
    this.addEventListener("touchmove", this.moveSlider);
    this.addEventListener("touchend", this.stopDrag);

    this.keyboardNavigation();
  }

  startDrag(e) {
    this.isDragging = true;
    this.moveSlider(e);
  }

  stopDrag() {
    this.isDragging = false;
  }

  moveSlider(e) {
    if (!this.isDragging) return;
    if (e.cancelable) e.preventDefault();

    let clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const rect = this.getBoundingClientRect();
    const x = Math.min(Math.max(clientX, rect.left), rect.right);
    const percent = ((x - rect.left) / rect.width) * 100;
    
    this.style.setProperty('--slider-position', `${percent}%`);
    this.querySelector('.image-compare-handle').setAttribute('aria-valuenow', Math.round(percent));
  }

  keyboardNavigation() {
    this.addEventListener("keydown", (e) => {
      let currentValue = parseFloat(this.style.getPropertyValue('--slider-position')) ?? 50;

      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;
        currentValue = Math.max(0, currentValue - step);
      } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;
        currentValue = Math.min(100, currentValue + step);
      } else {
        return;
      }

      this.style.setProperty('--slider-position', `${currentValue}%`);
      this.querySelector('.image-compare-handle').setAttribute('aria-valuenow', Math.round(currentValue));
    });
  }
}
customElements.define('ks-image-compare', KsImageCompare)