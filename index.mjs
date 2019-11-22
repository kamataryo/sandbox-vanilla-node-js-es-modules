import { hello } from "./lib.mjs";
import defaultHello from "./lib.mjs";
import * as mod from "./lib.mjs";

const assert = {
  ok: isOK => {
    if (isOK) {
      return true;
    } else {
      throw new Error("not OK");
    }
  }
};

assert.ok(mod.hello === hello);
assert.ok(mod.default === defaultHello);

hello("World");
defaultHello();
