import image1 from "./../images/image1.jpg"
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import React, { useState } from 'react';
import Popup from './Popup';
 

const ProjectListing = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  return <>
  <header className="header">
    <div className="layout">
      <div className="header__wrap flex justify-between items-center pt-8 pb-8">
      <div className="header__logo flex items-center">
        <a href="#" className="mr-10"><svg xmlns="http://www.w3.org/2000/svg" width="85" height="15" viewBox="0 0 85 15"><path fill="#FFF" d="M9.307 10.537c0 1.29-.464 2.305-1.392 3.047-.928.742-2.218 1.113-3.872 1.113-1.523 0-2.871-.286-4.043-.86v-2.812c.964.43 1.779.733 2.446.909.668.175 1.278.263 1.831.263.664 0 1.174-.127 1.529-.38.354-.255.532-.632.532-1.133 0-.28-.078-.53-.234-.747-.157-.219-.386-.429-.689-.63-.303-.202-.92-.524-1.85-.967-.873-.41-1.527-.804-1.963-1.182A4.436 4.436 0 0 1 .557 5.84C.297 5.339.166 4.753.166 4.082c0-1.263.428-2.256 1.284-2.978C2.306.38 3.49.02 5 .02c.742 0 1.45.087 2.124.263a14.6 14.6 0 0 1 2.114.742L8.262 3.38c-.762-.313-1.392-.53-1.89-.654a6.082 6.082 0 0 0-1.47-.186c-.573 0-1.012.134-1.318.4-.306.267-.459.616-.459 1.045 0 .267.062.5.186.699.123.198.32.39.59.576.27.185.91.519 1.92 1 1.334.639 2.249 1.278 2.743 1.92.495.641.743 1.427.743 2.358zm15.547-3.193c0 2.363-.586 4.18-1.758 5.449-1.172 1.27-2.852 1.904-5.04 1.904-2.187 0-3.867-.634-5.038-1.904-1.172-1.27-1.758-3.092-1.758-5.469 0-2.376.587-4.19 1.762-5.444C14.198.627 15.882 0 18.076 0c2.194 0 3.872.632 5.034 1.895s1.744 3.079 1.744 5.449zm-10.42 0c0 1.595.302 2.796.908 3.603.605.808 1.51 1.211 2.715 1.211 2.415 0 3.623-1.605 3.623-4.814 0-3.216-1.201-4.824-3.604-4.824-1.204 0-2.112.405-2.724 1.215-.612.81-.918 2.014-.918 3.609zm19.423 7.158L30.42 3.301h-.088c.124 2.278.186 3.799.186 4.56v6.641h-2.706V.225h4.122l3.378 10.918h.06L38.954.225h4.121v14.277h-2.822V7.744c0-.319.005-.687.015-1.103.01-.417.053-1.524.131-3.32h-.087L36.63 14.501h-2.774zM46.67.225h4.443c2.025 0 3.495.288 4.41.864.914.576 1.372 1.492 1.372 2.749 0 .853-.2 1.553-.601 2.1a2.4 2.4 0 0 1-1.597.986v.097c.905.202 1.558.58 1.958 1.133.4.554.6 1.29.6 2.207 0 1.302-.47 2.318-1.41 3.047-.941.73-2.219 1.094-3.833 1.094H46.67V.225zm3.027 5.654h1.758c.82 0 1.414-.127 1.782-.381.368-.254.552-.674.552-1.26 0-.547-.2-.939-.6-1.176-.4-.238-1.034-.357-1.9-.357h-1.592V5.88zm0 2.402v3.721h1.973c.833 0 1.448-.16 1.846-.479.397-.319.595-.807.595-1.464 0-1.185-.846-1.778-2.539-1.778h-1.875zm18.75 6.221l-1.035-3.398h-5.205l-1.035 3.398H57.91L62.95.166h3.7l5.059 14.336h-3.262zM66.69 8.564c-.957-3.079-1.495-4.82-1.616-5.224-.12-.404-.206-.723-.259-.957-.214.833-.83 2.894-1.845 6.181h3.72zm9.844-2.002h.977c.957 0 1.663-.159 2.119-.478.456-.319.683-.82.683-1.504 0-.677-.232-1.159-.698-1.445-.465-.287-1.186-.43-2.163-.43h-.918v3.857zm0 2.461v5.479h-3.027V.225h4.16c1.94 0 3.376.353 4.307 1.06.93.706 1.396 1.778 1.396 3.217 0 .84-.231 1.587-.693 2.241-.462.654-1.117 1.167-1.963 1.538 2.148 3.21 3.548 5.283 4.2 6.221h-3.36l-3.408-5.479h-1.612z"></path></svg></a>
        <Dropdown 
          className="rounded"
          placeholder="Select cluster"
          options={['Cluster-1', 'Cluster-2', 'Cluster-3']}
          value="one"
          onChange={(value) => console.log('change!', value)}
          onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
          onOpen={() => console.log('open!')}
        />
      </div>
      
      <div className="header__avatar flex items-center">
        <img className="h-10 w-10 rounded-full object-cover mr-2" src={image1} alt="image1" />
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      </div>
      </div>
    </div>
  </header>
  
  <div className="project__list  h-full pt-24 pb-24">
    <div className="layout">
    
      <div className="header flex items-center justify-between">

        <h1>Projects</h1>
        <button className="add-project flex items-center  py-2 px-4 rounded text-white" onClick={togglePopup}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        Add Project</button>
        {isOpen && <Popup
          content={<>
            <h2> Add a project</h2>
            <div className="mt-6">
              <label className="font-bold">Project Name</label>
              <input type="text" className="w-full rounded mt-2" />
            </div>
            <div className="cluster mt-4 mb-10">
              <label className="font-bold ">Cluster</label>
              <Dropdown 
                className="rounded mt-2"
                placeholder="Select cluster"
                options={['Cluster-1', 'Cluster-2', 'Cluster-3']}
                value="one"
                onChange={(value) => console.log('change!', value)}
                onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                onOpen={() => console.log('open!')}
              />
            </div>
            <button className="add-project flex items-center  py-2 px-4 rounded text-white">Submit</button>
            </>}
          handleClose={togglePopup}
        />}

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
            <div className="team-members w-2/5 flex items-center">
              <div class="images flex items-center mr-2">
               <img className="h-10 w-10 rounded-full object-cover" src={image1} alt="image1" />
               </div>
              <div class="team-members-number pr-2">
                <span className="font-bold ml-2">5</span>
                members involved
              </div>
            </div>
            <div class="project-status w-1/5">
              Status:
              <span className="font-bold pl-2">Completed</span>
            </div>

        </div>

      </div>
    </div>
  </div>
  </>
}

export default ProjectListing
