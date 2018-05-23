import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  error = true ;
  left = true  ;
  isLarge = false ;
  submit = false ;
  show = false ;
  hide = false ;
   smallCourses = [

  ];
  largeCourses = [] ;


  smallStudents = [] ;
  largeStudents = [] ;
  form= new FormGroup({
    courseCode : new FormControl('') ,
    courseName : new FormControl('' , [
      Validators.required,
      Validators.minLength(5) ,
    ]) ,
    instructorName : new FormControl('' ,
    [
      Validators.required,
      Validators.minLength(5) ,
    ]
  ) ,
    radio1 : new FormControl() ,
    radio2 : new FormControl() ,
    studentName : new FormControl('' ,
    [
      Validators.required,
      Validators.minLength(5) ,
    ]
  ) ,
    birthDate : new FormControl('' , Validators.required) ,
    gpa : new FormControl('' ,
    [
      Validators.required,
      Validators.pattern('[1-9]') ,
    ]
  ) ,
    check : new FormControl()

  }

   ) ;
   get courseName() {
     return this.form.get('courseName') ;
   }

   get courseCode() {
    return this.form.get('courseCode') ;
  }

  get gpa() {
    return this.form.get('gpa') ;
  }

  get instructorName() {
    return this.form.get('instructorName') ;
  }

  get semester() {
    return this.form.get('radio1') ;
  }


  get birthDate() {
    return this.form.get('birthDate') ;
  }

  get studentName() {
    return this.form.get('studentName') ;
  }
  get check() {
    return this.form.get('check') ;
  }
  studentTable() {
    this.left = false ;
  }
  courseTable() {
    this.left = true ;
  }

  login () {
    this.submit = true ;
    if (this.form.valid) {
      console.log(this.form) ;
      this.error = false ;
      const courseObj = {
        courseCode : this.courseCode.value ,
        courseName : this.courseName.value ,
        instructorName : this.instructorName.value,
        semester : this.semester.value
      } ;

      const studentObj = {
        studentName : this.studentName.value ,
        birthDate : this.birthDate.value ,
        gpa : this.gpa.value,
        international : this.check.value
      } ;
       this.smallCourses.push(courseObj) ;
       this.largeCourses.push(courseObj) ;
      this.smallStudents.push(studentObj) ;
      this.largeStudents.push(studentObj) ;

      if ((this.largeCourses.length) > 5) {
        this.isLarge = true  ;
        this.smallCourses.length = 5 ;
        this.smallStudents.length = 5 ;
      }





    }
    // tslint:disable-next-line:one-line
    else {
      this.error = true ;

    }

  }


  constructor() {
   }

  onEnter(courseName) {
    console.log(courseName) ;
  }
  showMore() {
    this.show = true ;
    this.hide = true  ;
  }


}
