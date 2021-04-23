import "./../assets/scss/App.scss"
import cn from "classnames"
import React from 'react';
import ReactDOM from 'react-dom';

const ProjectDetail = () => {
    const headingCN = cn("mt-8", "text-center", "text-3xl")
    return (
        <div className="Project__Detail">
            <h2 className="">This is the Project Title</h2>
            <div className="progress-bar">
            </div>
            
        </div>
    )
}

export default ProjectDetail