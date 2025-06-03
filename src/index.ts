// Based on https://gist.github.com/gre/1650294

type EasingFunction = (t: number) => number;

// No easing, no acceleration
export function linear(t: number): number {
  return t;
}

// Slight acceleration from zero to full speed
export function easeInSine(t: number): number {
  return -1 * Math.cos(t * (Math.PI / 2)) + 1;
}

// Slight deceleration at the end
export function easeOutSine(t: number): number {
  return Math.sin(t * (Math.PI / 2));
}

// Slight acceleration at beginning and slight deceleration at end
export function easeInOutSine(t: number): number {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}

// Accelerating from zero velocity
export function easeInQuad(t: number): number {
  return t * t;
}

// Decelerating to zero velocity
export function easeOutQuad(t: number): number {
  return t * (2 - t);
}

// Acceleration until halfway, then deceleration
export function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Accelerating from zero velocity
export function easeInCubic(t: number): number {
  return t * t * t;
}

// Decelerating to zero velocity
export function easeOutCubic(t: number): number {
  const t1 = t - 1;
  return t1 * t1 * t1 + 1;
}

// Acceleration until halfway, then deceleration
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Accelerating from zero velocity
export function easeInQuart(t: number): number {
  return t * t * t * t;
}

// Decelerating to zero velocity
export function easeOutQuart(t: number): number {
  const t1 = t - 1;
  return 1 - t1 * t1 * t1 * t1;
}

// Acceleration until halfway, then deceleration
export function easeInOutQuart(t: number): number {
  const t1 = t - 1;
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
}

// Accelerating from zero velocity
export function easeInQuint(t: number): number {
  return t * t * t * t * t;
}

// Decelerating to zero velocity
export function easeOutQuint(t: number): number {
  const t1 = t - 1;
  return 1 + t1 * t1 * t1 * t1 * t1;
}

// Acceleration until halfway, then deceleration
export function easeInOutQuint(t: number): number {
  const t1 = t - 1;
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
}

// Accelerate exponentially until finish
export function easeInExpo(t: number): number {
  if (t === 0) {
    return 0;
  }

  return Math.pow(2, 10 * (t - 1));
}

// Initial exponential acceleration slowing to stop
export function easeOutExpo(t: number): number {
  if (t === 1) {
    return 1;
  }

  return -Math.pow(2, -10 * t) + 1;
}

// Exponential acceleration and deceleration
export function easeInOutExpo(t: number): number {
  if (t === 0 || t === 1) {
    return t;
  }

  const scaledTime = t * 2;
  const scaledTime1 = scaledTime - 1;

  if (scaledTime < 1) {
    return 0.5 * Math.pow(2, 10 * scaledTime1);
  }

  return 0.5 * (-Math.pow(2, -10 * scaledTime1) + 2);
}

// Increasing velocity until stop
export function easeInCirc(t: number): number {
  const scaledTime = t / 1;
  return -1 * (Math.sqrt(1 - scaledTime * t) - 1);
}

// Start fast, decreasing velocity until stop
export function easeOutCirc(t: number): number {
  const t1 = t - 1;
  return Math.sqrt(1 - t1 * t1);
}

// Fast increase in velocity, fast decrease in velocity
export function easeInOutCirc(t: number): number {
  const scaledTime = t * 2;
  const scaledTime1 = scaledTime - 2;

  if (scaledTime < 1) {
    return -0.5 * (Math.sqrt(1 - scaledTime * scaledTime) - 1);
  }

  return 0.5 * (Math.sqrt(1 - scaledTime1 * scaledTime1) + 1);
}

// Slow movement backwards then fast snap to finish
export function easeInBack(magnitude: number = 1.70158): EasingFunction {
  return (t: number): number => t * t * ((magnitude + 1) * t - magnitude);
}

// Fast snap to backwards point then slow resolve to finish
export function easeOutBack(magnitude: number = 1.70158): EasingFunction {
  return (t: number): number => {
    const scaledTime = t / 1 - 1;

    return (
      scaledTime * scaledTime * ((magnitude + 1) * scaledTime + magnitude) + 1
    );
  };
}

// Slow movement backwards, fast snap to past finish, slow resolve to finish
export function easeInOutBack(magnitude: number = 1.70158): EasingFunction {
  return (t: number): number => {
    const scaledTime = t * 2;
    const scaledTime2 = scaledTime - 2;

    const s = magnitude * 1.525;

    if (scaledTime < 1) {
      return 0.5 * scaledTime * scaledTime * ((s + 1) * scaledTime - s);
    }

    return 0.5 * (scaledTime2 * scaledTime2 * ((s + 1) * scaledTime2 + s) + 2);
  };
}
// Bounces slowly then quickly to finish
export function easeInElastic(magnitude: number = 0.7): EasingFunction {
  return (t: number): number => {
    if (t === 0 || t === 1) {
      return t;
    }

    const scaledTime = t / 1;
    const scaledTime1 = scaledTime - 1;

    const p = 1 - magnitude;
    const s = (p / (2 * Math.PI)) * Math.asin(1);

    return -(
      Math.pow(2, 10 * scaledTime1) *
      Math.sin(((scaledTime1 - s) * (2 * Math.PI)) / p)
    );
  };
}

// Fast acceleration, bounces to zero
export function easeOutElastic(magnitude: number = 0.7): EasingFunction {
  return (t: number): number => {
    if (t === 0 || t === 1) {
      return t;
    }

    const p = 1 - magnitude;
    const scaledTime = t * 2;

    const s = (p / (2 * Math.PI)) * Math.asin(1);
    return (
      Math.pow(2, -10 * scaledTime) *
        Math.sin(((scaledTime - s) * (2 * Math.PI)) / p) +
      1
    );
  };
}

// Slow start and end, two bounces sandwich a fast motion
export function easeInOutElastic(magnitude: number = 0.65): EasingFunction {
  return (t: number): number => {
    if (t === 0 || t === 1) {
      return t;
    }

    const p = 1 - magnitude;
    const scaledTime = t * 2;
    const scaledTime1 = scaledTime - 1;

    const s = (p / (2 * Math.PI)) * Math.asin(1);

    if (scaledTime < 1) {
      return (
        -0.5 *
        (Math.pow(2, 10 * scaledTime1) *
          Math.sin(((scaledTime1 - s) * (2 * Math.PI)) / p))
      );
    }

    return (
      Math.pow(2, -10 * scaledTime1) *
        Math.sin(((scaledTime1 - s) * (2 * Math.PI)) / p) *
        0.5 +
      1
    );
  };
}

// Bounce to completion
export function easeOutBounce(t: number): number {
  const scaledTime = t / 1;

  if (scaledTime < 1 / 2.75) {
    return 7.5625 * scaledTime * scaledTime;
  } else if (scaledTime < 2 / 2.75) {
    const scaledTime2 = scaledTime - 1.5 / 2.75;
    return 7.5625 * scaledTime2 * scaledTime2 + 0.75;
  } else if (scaledTime < 2.5 / 2.75) {
    const scaledTime2 = scaledTime - 2.25 / 2.75;
    return 7.5625 * scaledTime2 * scaledTime2 + 0.9375;
  } else {
    const scaledTime2 = scaledTime - 2.625 / 2.75;
    return 7.5625 * scaledTime2 * scaledTime2 + 0.984375;
  }
}

// Bounce increasing in velocity until completion
export function easeInBounce(t: number): number {
  return 1 - easeOutBounce(1 - t);
}

// Bounce in and bounce out
export function easeInOutBounce(t: number): number {
  if (t < 0.5) {
    return easeInBounce(t * 2) * 0.5;
  }

  return easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
}
