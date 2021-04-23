import "./../assets/scss/App.scss"
import cn from "classnames"
import React from 'react';
import ReactDOM from 'react-dom';

const ProjectForm = () => {
  return (
    <div className="Project Form">
        <div className="title">
            <label>Project Title:</label>
            <input
                type='text'
            />
            
        </div>
        <div className="deadline">
            <label>Deadline:</label>
            <input
                type='date'
            />
            
        </div>
        <div className="members">
            <label>Name the members involved in the project:</label>
            <div class="members-name">
            <input
                type='text'
            />
            </div>
            
        </div>
        <div className="client">

            <h3>Client Information</h3>
            <div className="name-of-organization">
                <label>Name:</label>
                <input
                    type='text'
                />
            </div>
            <div className="adderess">
                <label>Address</label>
                <input
                    type='text'
                />
            </div>
            <div className="authorized-person">
                <label>Authorized Person</label>
                <input
                    type='text'
                />
            </div>
             <div className="contact-info">
                <label>Contact Info:</label>
                <input
                    type='number'
                />
            </div>
            
        </div>

      <button className="py-2 px-4 rounded bg-blue-500 text-white">Submit</button>
    </div>
  )
}

export default ProjectForm
