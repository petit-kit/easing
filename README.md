# 🧪 Easing Functions Library

A collection of common and advanced easing functions for smooth animations in JavaScript & TypeScript. Perfect for creative development, UI transitions, or game motion design.

> Based on [Gre's easing functions gist](https://gist.github.com/gre/1650294)

---

## 🚀 Installation

```bash
npm install @micro/easing
# or
yarn add @micro/easing
```

---

## 📚 Usage

All easing functions follow this signature:

```ts
type EasingFunction = (t: number) => number;
```

Where `t` is a number between `0` and `1`.

Some easing functions accept a `magnitude` parameter to control the effect (e.g. for back and elastic easing).

---

## 🎛️ Available Functions

### 🔹 Basic

| Name          | Description                              |
|---------------|------------------------------------------|
| `linear`      | No easing, linear interpolation          |
| `easeInSine`  | Slight acceleration at the start         |
| `easeOutSine` | Slight deceleration at the end           |
| `easeInOutSine` | Smooth acceleration and deceleration  |

### 🔸 Polynomial

| Name             | In             | Out            | InOut             |
|------------------|----------------|----------------|-------------------|
| Quadratic        | `easeInQuad`   | `easeOutQuad`   | `easeInOutQuad`   |
| Cubic            | `easeInCubic`  | `easeOutCubic`  | `easeInOutCubic`  |
| Quartic          | `easeInQuart`  | `easeOutQuart`  | `easeInOutQuart`  |
| Quintic          | `easeInQuint`  | `easeOutQuint`  | `easeInOutQuint`  |

### ✴️ Exponential & Circular

| Name               | In             | Out            | InOut             |
|--------------------|----------------|----------------|-------------------|
| Exponential        | `easeInExpo`   | `easeOutExpo`  | `easeInOutExpo`   |
| Circular           | `easeInCirc`   | `easeOutCirc`  | `easeInOutCirc`   |

### 🔁 Back (with magnitude)

| Name            | Function                          |
|-----------------|-----------------------------------|
| `easeInBack`    | Slight backward motion before start |
| `easeOutBack`   | Overshoot before settling        |
| `easeInOutBack` | Combination of both             |

### 🌊 Elastic (with magnitude)

| Name               | Function                      |
|--------------------|-------------------------------|
| `easeInElastic`    | Elastic bounce at the start   |
| `easeOutElastic`   | Elastic bounce at the end     |
| `easeInOutElastic` | Elastic bounce both sides     |

### 🏀 Bounce

| Name             | Function                           |
|------------------|------------------------------------|
| `easeInBounce`   | Bounce at the beginning            |
| `easeOutBounce`  | Bounce at the end                  |
| `easeInOutBounce`| Bounce at both start and end       |

---

## 🛠️ Example

```ts
const duration = 1000;
const start = performance.now();

function animate() {
  const now = performance.now();
  const t = Math.min((now - start) / duration, 1);

  const value = easeInOutCubic(t);

  // Use `value` to animate properties...

  if (t < 1) requestAnimationFrame(animate);
}

animate();
```

---

## 📎 License

MIT — use freely, modify boldly.

---

## 🧠 Credits

Originally inspired by [Gre's easing functions gist](https://gist.github.com/gre/1650294), adapted and extended with TypeScript support and parameterizable functions.

