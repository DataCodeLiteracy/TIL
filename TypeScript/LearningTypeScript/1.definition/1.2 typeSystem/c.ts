// c.ts
import { shared } from "./a";

// Error: Import declaration conflictrs with local declaration of 'shared'.

export const shared = "Cher";

// Error: Individual declarations in merged delcaration
// 'shared' must be all exported or all local.