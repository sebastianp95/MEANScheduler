import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CourseSection } from './course-section.model';
//  import {Http, Response, Headers, RequestOptions} from '@angular/common/http';


// import{ Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HandleError, HttpErrorHandler } from 'src/app/http-error-handler.service';
// import 'rxjs/add/operator/do  ';


// interface CourseSection {
//   CRN: number;
//   CRSENO
//   TITLE
//   SECTNO: number;
//   DAYS
//   START: number;
//   END: number;
//   ROOM
//   PER: number;
//   CRDTS: number;
//   LASTNAME
//   FIRSTNAME

// }

@Injectable({
  providedIn: 'root'
})
export class CourselistService {

  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('courselist.service');
  }

  items = [];


  addToCourseList(course) {
    this.items.push(course);
  }

  getItems() {
    return this.items;
  }

  clearCourseList() {
    this.items = [];
    return this.items;
  }

  getCourseList() {

    return this.http.get('../assets/spring2019.json');

  }

  // getCourseListMongo() {

  //   return this.http.get('http://localhost:5000/courseSections/')
  //     .map((err, res) => {
  //       if (err) {
  //         console.log('Error');
  //       }
  //       console.log('is ther something here' + res);
  //       this.items.push(res);
  //       return this.items;
  //     });
  // }
  getCourseListMongo() {

    return this.http
      .get<CourseSection>(
        // `https://ionic-project-v2.f irebaseio.com/offered-places/${id}.json`
        'http://localhost:5000/courseSections/'
      ).map(
        //  res => {
        // return  res.json();
        // }
        courseSection => {
          return courseSection;
          // new CourseSection(
          //   courseSection.CRSENO,
          //   courseSection.TITLE,
          //   courseSection.SECTNO,
          //   courseSection.DAYS,
          //   courseSection.START,
          //   courseSection.END,
          //   courseSection.ROOM,
          //   courseSection.PER,
          //   courseSection.CRDTS,
          //   courseSection.LASTNAME,
          //   courseSection.FIRSTNAME
          // );
        }
      );
    // )
    // ,
    // map(courseSection => {
    //   return new CourseSection(
    //     id,
    //     placeData.title,
    //     placeData.description,
    //     placeData.imageUrl,
    //     placeData.price,
    //     new Date(placeData.availableFrom),
    //     new Date(placeData.availableTo),
    //     placeData.userId,
    //     placeData.location
    //   );
    // })
    // );
  }

  getHeroes(): Observable<CourseSection[]> {
    return this.http.get<CourseSection[]>('http://localhost:5000/courseSections/')
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }
  // searchHeroes(): Observable<T> {

  //   // let heroesURL = `${this.heroesURL}`;
  //   return this.http.jsonp('http://localhost:5000/courseSections/', 'callback').pipe(
  //       catchError(this.handleError('searchHeroes', [])) // then handle the error
  //     );
  // };
}
