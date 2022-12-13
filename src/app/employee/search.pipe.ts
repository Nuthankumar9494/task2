import { Pipe, PipeTransform } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { DataService } from './services/data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 constructor(private user:DataService){}
 ngOnInit(){
  
}
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}







// export class FilterPipe implements PipeTransform {

//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];

//     if(!searchText) return items;

//     return this.searchItems(items, searchText.toLowerCase());
//    }

//    private searchItems(items :any[], searchText): any[] {
//      let results = [];
//       items.forEach(it => {
//         if (it.title.toLowerCase().includes(searchText)) {
//             results.push(it);
//         } else {
//           let searchResults =  this.searchItems(it.items_containers, searchText);
//           if (searchResults.length > 0) {
//               results.push({
//                 title: it.title,
//                 items_containers: searchResults
//               });
//           }
//         }
//       });
//       return results;
//    }
// }