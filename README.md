# math-atan2point

A method for getting a point by distance and angle. While `Math.atan2()` returns an angle between the x-axis and a ray, `Math.atan2Point()` returns the point that creates a ray with given length and angle. 

```
Math.atan2Point(
  angle, distance, origin = [0,0]
)
``` 

## Description

- if $\alpha$ equals $\text{atan2}(P_y,P_x)$
- if $d$ equals $\sqrt{P_x^2 + P_y^2}$ (distance from $(0,0)$ to the point $P$)
- then $\text{atan2Point}(\alpha,d)$ equals $[P_x,P_y]$

```
const p = {x:2, y:4};
const q = {x:5, y:3};

const p0Dist = Math.hypot(p.x, p.y);
const pqDist = Math.hypot(p.x-q.x, p.y-q.y);

const p0Angle = Math.atan2(p.y, p.x);
const pqAngle = Math.atan2(
  q.y-p.y,
  q.x-p.x
);

console.log(
  Math.atan2Point(
    p0Angle, p0Dist
  )
);
// should be: [2,4]
// is: [2,4]

console.log(
  Math.atan2Point(
    pqAngle, pqDist, [p.x,p.y]
  )
);
// should be: [5,3]
// is: [5,3]
```
