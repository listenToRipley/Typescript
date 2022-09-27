function triple(value: number | string): string | number {
  if (typeof value === "string") {
    return value.repeat(3);
  } 
// at this point, it would have to be a number. 
  return value * 3; 
};


