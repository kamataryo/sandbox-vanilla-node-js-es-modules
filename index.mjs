import { hello } from "./lib.mjs";
import defaultHello from "./lib.mjs";
import * as mod from "./lib.mjs";
import assert from "assert";

assert.ok(mod.hello === hello);
assert.ok(mod.default === defaultHello);

hello("World");
defaultHello();
