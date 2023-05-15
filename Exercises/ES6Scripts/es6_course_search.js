let courses = [
 {
 CourseId: "PROG100",
 Title: "Introduction to HTML/CSS/Git",
 Location: "Classroom 7",
 StartDate: "09/08/22",
 Fee: "100.00",
 },
 {
 CourseId: "PROG200",
 Title: "Introduction to JavaScript",
 Location: "Classroom 9",
 StartDate: "11/22/22",
 Fee: "350.00",
 },
 {
 CourseId: "PROG300",
 Title: "Introduction to Java",
 Location: "Classroom 1",
 StartDate: "01/09/23",
 Fee: "50.00",
 },
 {
 CourseId: "PROG400",
 Title: "Introduction to SQL and Databases",
 Location: "Classroom 7",
 StartDate: "03/16/23",
 Fee: "50.00",
 },
 {
 CourseId: "PROJ500",
 Title: "Introduction to Angular",
 Location: "Classroom 1",
 StartDate: "04/25/23",
 Fee: "50.00",
 }
];
// When does the PROG200 course start?

function findCourseByCourseId(CourseId) {}
function isPROG200(arrayValue) {
    if (arrayValue == "") {
        return true;
    } else {
      return false;
  }
}
function findCourse() {
    for (const course of courses) {
    if (course.CourseId === "PROG200") {
        return course
    }
  }
}
let course = findCourse();
console.log(course.StartDate);

console.log("==============================");

// What is the title of the PROJ500 course?

function findTitle() {
    for (const course of courses) {
        if (course.Title == "Introduction to Angular") {
            return course.Title
        }
    }
}
let title = findTitle();
console.log(title);

console.log("==============================");

// What are the titles of the courses that cost $50 or less?

function filterCoursesByFee() {
    let filteredCourses = [];
    for (const course of courses) {
        let fee = Number(course.Fee)
        if (fee <= 50) {
            filteredCourses.push(course);
        }
    }
    return filteredCourses;
}
let filteredCourses = filterCoursesByFee();
console.log(filteredCourses);

console.log("==============================");

// What classes meet in "Classroom 1"

function filterCoursesByLocation() {
    let filteredCourses = [];
    for (const course of courses) {
        if (course.Location == "Classroom 1") {
            filteredCourses.push(course);
        }
      }
      return filteredCourses;
    } 
let filteredCourses2 = filterCoursesByLocation();
console.log(filteredCourses2);
