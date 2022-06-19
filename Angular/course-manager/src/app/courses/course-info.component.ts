import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "./course.service";
import { Course} from "./couse";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course: Course;

    constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService){}

    ngOnInit(): void {
       
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => this.course = course,
            error: err => console.log(err)
        });
        
         // o "+" transforma em number
    }
    
    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('salvo com sucesso ',course),
            error: err=> console.log(err)
        })
    }
}