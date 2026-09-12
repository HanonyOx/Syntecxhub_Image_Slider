# 🖼️ Auto-Rotating 3D Image Gallery

A **3D auto-rotating image gallery** built with **HTML, CSS, and JavaScript** as part of my **Syntecxhub Internship**.

The main focus of this project was experimenting with **CSS 3D transformations and animations** while using JavaScript to add interactive controls for starting, stopping, and manually rotating the gallery.

---

## 🚀 Live Features

* 🔄 Automatic 3D image rotation
* ⏸️ Stop/Pause animation
* ▶️ Start/Resume animation
* ⬅️ Previous image control
* ➡️ Next image control
* 🖼️ 3D image arrangement
* ✨ Image reflections
* 📱 Responsive layout
* 🎨 Interactive navigation and buttons

---

## 🎯 Project Objective

The goal of this project was to go beyond creating a normal image slider and understand how **3D transformations and CSS animations** can be combined to create a more interactive visual experience.

Instead of displaying images one after another in a traditional horizontal slider, the images are positioned around a **3D circular space**, creating a carousel-like effect.

This project also helped me understand how **JavaScript can interact with CSS animations and DOM elements** to control what is happening on the page.

---

## 🧩 Technologies Used

* **HTML5** — Page structure and gallery elements
* **CSS3** — Styling, 3D transformations, animation and reflections
* **JavaScript** — DOM manipulation and gallery controls
* **Font Awesome** — Navigation icons
* **CSS Custom Properties** — Individual positioning of gallery items

---

## 🎞️ The 3D Animation

The main feature of this project is the **3D rotating gallery animation**.

The gallery uses:

```css
transform: perspective(1000px) rotateY(0deg);
```

and continuously rotates using a CSS `@keyframes` animation.

```css
@keyframes gallery {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
}
```

The animation is then applied to the gallery container:

```css
animation: gallery 20s linear infinite;
```

### Why `perspective()`?

`perspective()` creates the visual depth that makes the rotation appear three-dimensional.

In this project:

```css
perspective(1000px)
```

controls how the viewer perceives the distance between the front and back of the rotating gallery.

---

## 🔄 Positioning Images in 3D

Each image is placed around the gallery using `rotateY()` and `translateZ()`.

For example:

```css
transform: rotateY(calc(var(--i) * 36deg)) translateZ(450px);
```

The `--i` value is different for every image.

For example:

```html
<span style="--i: 1">
```

```html
<span style="--i: 2">
```

```html
<span style="--i: 3">
```

This allows each image to have a different rotation around the 3D space.

Because the gallery contains **10 images**, the rotation is distributed around 360 degrees:

```text
360 ÷ 10 = 36°
```

So each image is separated by approximately **36 degrees**.

---

## 🧊 `transform-style: preserve-3d`

Another important part of the project is:

```css
transform-style: preserve-3d;
```

This allows the child elements inside the gallery to maintain their 3D positioning instead of being flattened into a normal 2D plane.

Without this, the 3D carousel effect would not behave as intended.

---

## 🪞 Image Reflection

The project also uses:

```css
-webkit-box-reflect
```

to create a subtle reflection underneath the images.

This gives the gallery a more visually polished appearance and makes the 3D effect more noticeable.

---

## 🎮 JavaScript Controls

JavaScript is used to interact with the gallery and control the animation.

The **STOP** button pauses the CSS animation:

```js
image.style.animationPlayState = "paused";
```

The **START** button resumes the animation:

```js
image.style.animationPlayState = "running";
```

The previous and next controls are also handled using JavaScript.

The gallery's rotation is tracked with a variable:

```js
let rotation = 0;
```

The arrow controls then modify the rotation value and apply it to the gallery.

---

## 🧠 What I Learned

This project helped me understand several concepts that I had previously only seen individually.

### CSS Animation

I learned how `@keyframes` can be used to create continuous animations without JavaScript controlling every frame.

### 3D Transforms

I gained a better understanding of:

* `perspective()`
* `rotateY()`
* `translateZ()`
* `transform-style`
* 3D positioning

### CSS Custom Properties

Using:

```css
--i
```

allowed each gallery item to have its own position while still using one CSS rule.

### DOM Manipulation

JavaScript was used to select HTML elements and respond to user interactions.

### CSS + JavaScript Interaction

One of the more interesting parts of the project was learning that JavaScript can dynamically change CSS properties such as:

```js
animation
animationPlayState
transform
```

This helped me understand how functionality is built by connecting **HTML elements, CSS properties, and JavaScript logic**.

---

## 🧱 Challenges

One of the biggest challenges was getting the **3D animation and JavaScript controls to work together correctly**.

The automatic CSS animation controls the `transform` property continuously, while JavaScript also needs to modify the same property when the user clicks the navigation buttons.

This created an important learning experience around the relationship between:

```text
CSS Animation
       ↓
Transform
       ↓
JavaScript
       ↓
User Interaction
```

I also had to troubleshoot why the navigation icons were not responding to click events. Replacing the icons with actual buttons helped isolate the problem and allowed me to continue working on the functionality.

---

## 📂 Project Structure

```text
3D-Image-Gallery/
│
├── index.html
├── style.css
├── script.js
│
└── image/
    ├── Image-1.jpg
    ├── Image-2.jpg
    ├── Image-3.jpg
    ├── ...
    └── Image-10.jpg
```

---

## 💻 How to Run

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open `index.html` using Live Server or your preferred browser.
4. Interact with the gallery using the available controls.

---

## 🏢 Internship Project

This project was developed as part of my **Syntecxhub Internship**.

The internship has given me the opportunity to strengthen my practical understanding of frontend development by building projects rather than only studying concepts theoretically.

Through this project, I specifically practiced combining **HTML, CSS animations, CSS 3D transformations, and JavaScript DOM manipulation** to create an interactive user experience.

---

## 👨‍💻 Author

**Anthony Omeh**

Full-Stack Developer | Computer Science Student

Built as part of my **Syntecxhub Internship — 2026**.

---

## 📌 Key Takeaway

This project started as an image gallery, but the real purpose was understanding **how animation and interaction work together**.

The biggest lesson was not simply learning how to make an image rotate, but understanding what is happening behind the animation — how CSS creates the movement, how 3D transforms create depth, and how JavaScript can take control when the user interacts with the gallery.

> **Built to learn, experiment, and understand — not just to make it work.**
