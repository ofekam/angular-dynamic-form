/**
 * Created by ofek_am on 09/04/2017.
 */
import {Pipe} from "@angular/core";
@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe {
  transform(dict: Object): Array<any> {
    let a = [];
    for (let key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }
    return a;
  }
}
