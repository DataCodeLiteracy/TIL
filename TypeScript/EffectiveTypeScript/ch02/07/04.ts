type AB = 'A' | 'B'
type AB12 = 'A' | 'B' | 12
const a: AB = 'A' // OK, value 'A' is a member of the set {'A', 'B'}
const c: AB = 'C'
// ~ Type '"C"' is not assignable to type 'AB'

export default {}

/**
 * 요약
 * 
 * 유니온은 합집합이 관계라고 생각하면 된다.
 */