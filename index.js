Math.atan2Point = (
  angle, dist, origin = [0,0]
) => {
  const [a,b] = origin;
  const x = dist * Math.cos(angle) + a;
  const y = dist * Math.sin(angle) + b;
	
  return [x,y];
};
