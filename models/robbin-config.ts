import { RobbinConfigDependency } from "./robbin-config-dep";
export class RobbinConfig {
   public jspath : string = "";
   public csspath: string = "";
   public dependencies: Array<RobbinConfigDependency> = [];
}
