type AB = "A" | "B";
type AB12 = "A" | "B" | 12;

type AB12_2 = AB | 12;
let a: AB12_2 = 12 as AB12;

export default {};
