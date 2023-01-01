import React from "react";
import ImageUpload from "./image upload";
import LectureFrom from "./lecture form";
import CourseForm from "./createCourse";


function CreationArea() {

    return (
        <>
            <section className="admin">

                <div className="box-container">

                    <div className="youtube">
                        <h1 className="heading">create lecture</h1>
                        <LectureFrom />
                    </div>

                    <div className="facebook">
                        <h1 className="heading">gallery image</h1>
                        <ImageUpload />
                    </div>

                    <div className="youtube">
                        <h1 className="heading">create course</h1>
                        <CourseForm />
                    </div>

                    
                </div>
            </section>

        </>
    )
}

export default CreationArea;

