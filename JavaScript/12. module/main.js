// import { increase, getCount } from "./counter.js";

import * as counter from "./counter.js"; // 그룹화

counter.increase();
counter.increase();
counter.increase();

const count = counter.getCount();
console.log(count);
