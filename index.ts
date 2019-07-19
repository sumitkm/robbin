import fs from "fs";
import { RobbinConfig } from "./models/robbin-config";
import { RobbinConfigDependency } from "./models/robbin-config-dep";

export class Robbin {
   constructor() {
      fs.readdir('node_modules', (err: NodeJS.ErrnoException|null, dirs: string[]) =>{
         console.log("dirs.length = " + dirs.length);
         dirs.forEach((dir) => {
            try {
               let data = { name: "", version: ""};

               var file = 'node_modules/' + dir + '/package.json';
               var json = require(file);
               var name = json.name;
               var version = json.version;
               data.name = version;
               console.debug(data.name + ": " + data.version); //= 4.11.2

            }
            catch (err) {
               console.error("version could not be determined:" + err.message);
            }
         });
      });
   }

   public init = (params : RobbinConfig, sync: boolean = false) => {

   }
}
