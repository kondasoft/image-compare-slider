# KS Image Compare Slider

A lightweight, no-dependency image comparison slider built with vanilla HTML, CSS, and JavaScript. Easily compare two images with a draggable slider—perfect for before/after effects.

[Demo](https://kondasoft.github.io/image-compare-slider/)


## 🚀 Features

- ✅ No external libraries required  
- 📦 Tiny footprint (CSS + JS)  
- 🔧 Easy to customize and integrate  
- 📱 Responsive and mobile-friendly  
- ⚡️ Smooth performance  
- ♿ Fully accessible (keyboard and screen reader friendly)</span>


## 📦 Installation

You can include the slider directly via CDN using [jsDelivr](https://www.jsdelivr.com/):

### CSS

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kondasoft/image-compare-slider@main/ks-image-compare-slider.css">
```

### JS

```html
<script src="https://cdn.jsdelivr.net/gh/kondasoft/image-compare-slider@main/ks-image-compare-slider.js" defer></script>
```

Or [download the latest release](https://github.com/kondasoft/image-compare-slider/releases) and include them locally in your project.



## 🛠️ Usage

```html
<ks-image-compare 
  class="ks-image-compare"
  style="
    --slider-position: 50%;
    --border-radius: 6px;
    --controls-color: 255, 255, 255
  ">
  <div class="ks-image-compare-before">
    <picture>
      <source
        media="(max-width: 599px)"
        srcset="img-before.jpg"
      >
      <img
        src="img-before.jpg"
        alt=""
        width="1200"
        height="675"
        loading="lazy"
      >
    </picture>
    <span class="ks-image-compare-label">
      Before
    </span>
  </div>
  <div class="ks-image-compare-after">
    <picture>
      <source
        media="(max-width: 599px)"
        srcset="img-after.jpg"
      >
      <img
        src="img-after.jpg"
        alt=""
        width="1200"
        height="675"
        loading="lazy"
      >
    </picture>
    <span class="ks-image-compare-label">
      After
    </span>
  </div>
  <div class="ks-image-compare-line">
  </div>
  <div 
    class="ks-image-compare-handle" 
    tabindex="0"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
    aria-label="Compare images"
    role="slider">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6"></path>
    </svg>
  </div>
</ks-image-compare>
```

That’s it! The script will automatically initialize the slider on page load.


## ⚙️ Customization

You can customize the slider by changing the following CSS varibles on the HTML code above:

- `--slider-position`: Set initial divider position (e.g. `50%`, `30%`)
- `--border-radious`: Set the preferred border radious (e.g. `0`, `1rem`, `8px`)
- `--controls-color`: Set the controls color. It expects a RGB value. (e.g. `255, 255,255` for white or `0, 0, 0` for black)

Regarding images, as you can see from the HTML code above, we are using the `<picture>` tag. This allows you to set different images for mobile and desktop, or serve the same image at a smaller size on mobile to improve loading speed. However, if you prefer, you can simply use a standard `<img src="">` tag and omit the `<picture>` wrapper.



## 🧪 Demo

[👉 View Live Demo](https://kondasoft.github.io/image-compare-slider/)


## 📜 Changelog
See the [CHANGELOG](./CHANGELOG.md) file for all notable changes and release history.


## 📄 License

This project is licensed under the **MIT License** — free for personal and commercial use.



## 🙌 Contributing

Pull requests, bug reports, and feature suggestions are welcome!\
If you encounter a problem or want to improve the slider, feel free to open an [issue](https://github.com/kondasoft/image-compare-slider/issues) or submit a PR.



## 🔗 Credits

Built and maintained by [@kondasoft](https://github.com/kondasoft)

