import image1 from "./../images/image1.jpg"

const ProjectListing = () => {
  return <div className="project__list  h-full pt-24 pb-24">
    <div className="layout">
    
      <div className="header flex items-center justify-between">

        <h1>Projects</h1>
        <button className="add-project flex items-center  py-2 px-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        Add Project</button>

      </div>
      <div className="project__list--items mt-20 bg-white">

        <div className="project__list--item flex justify-between items-center px-4 py-4">

            <div className="title  w-2/5">
              <div className="project-title font-bold">
                <a href="#">Earts-Nepal</a>
              </div>
              <div class="deadline">
                Estimated deadline: 26 Apr, 2021
              </div>
            </div>
            <div className="team-members w-2/5 flex aligns-center">
              <div class="images flex items-center mr-2">
               <img className="h-10 w-10 rounded-full object-cover" src={image1} alt="image1" />
               </div>
              <div class="team-members-number pl-2">
                <span className="font-bold">5</span>
                members involved
              </div>
            </div>
            <div class="project-status w-1/5">
              Status
              <span className="font-bold pl-2">Completed</span>
            </div>

        </div>

      </div>
    </div>
  </div>
}

export default ProjectListing
