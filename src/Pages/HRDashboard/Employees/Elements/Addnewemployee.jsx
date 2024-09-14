import React, { useState } from 'react'
import { Crossiconssvg, Fileattachsvg } from 'assets/svgs/Index';
import SuccessfulDialog from 'components/Elements/SuccessfulDialog';

function Addnewemployee({ onClose }) {

  const [formData, setFormData] = useState({
    fullName: '',
    department: '',
    position: '',
    dateOfJoining: '',
    phoneNumber: '',
    emailId: '',
    identityProof: '',
    uniqueIdNumber: '',
    dateOfBirth: '',
    maritalStatus: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const headings = ["Basic info", "Personal info", "Documents", "Bank details", "Skills"];


  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Basic info", "Personal info", "Documents", "Bank details", "Skills"];

  const handleNextClick = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevsStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }

  };
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleFileChange = (e, label) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`${label} uploaded:`, file.name);
    }
  }
  
  const FileUpload = ({ label }) => {
    return (
      <div className='flex flex-col '>
        <div>
          <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish ">{label}</label>
        </div>
        <div className="flex px-[16px] py-[12.5px] border border-gray-500 rounded-lg shadow-sm   mt-[8px] ">
          <input
            type="file"
            onChange={(e) => handleFileChange(e, label)}
            className="hidden"
            id={label.replace(/\s+/g, '-').toLowerCase()}
          />
          <label
            htmlFor={label.replace(/\s+/g, '-').toLowerCase()}
            className="flex-grow cursor-pointer text-gray-500"
          >
            Upload
          </label>
          <label
            htmlFor={label.replace(/\s+/g, '-').toLowerCase()}
            className="cursor-pointer text-red-500"
          >
            <Fileattachsvg />
          </label>
        </div>
      </div>
    );
  };

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSkill("");
    }


  };


  const handleRemoveSkill = (removedSkill) => {
    setSkills(skills.filter((s) => s !== removedSkill));
  };

  const [showPopup, setShowsPopup] = useState(false);

  const handleShowPopup = () => {
    setShowsPopup(true);
  };

  const handleClosePopup = () => {
    setShowsPopup(false);
    onClose()
  }
  return (
    <>
      {!showPopup ? (<div className='flex justify-center overflow-y-auto'>
        <div className="bg-white p-[24px] rounded-[16px] w-full ">
          {activeStep === 0 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Basic info</h2>)}
          {activeStep === 1 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Personal info</h2>)}
          {activeStep === 2 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Upload documents</h2>)}
          {activeStep === 3 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Bank details</h2>)}
          {activeStep === 4 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Add skills</h2>)}
          <div className="flex justify-between relative  gap-[10px]  overflow-x-auto ">
            {/* {steps.map((step, index) => {
              return(
                <>
              <div key={index} className="flex-1 items-center  relative justify-center  ">
                <div className="flex flex-col items-center justify-center overflow-x-auto min-w-[80px]">
                  <div
                    className={`cursor-pointer rounded-full w-[40px] h-[40px] g flex items-center justify-center mx-auto lg:text-[20px] text-[16px] font-public-sans
                  font-medium px-[13.5px] py-[8px] 
                  ${index <= activeStep ? "bg-btn-gradient text-white" : "bg-gray-5 text-gray-4"} z-10 shadow-md  hidden `}>
                       {activeStep === 0 && (<h2 className="sm:hidden">1</h2>)}
                       
                      {activeStep === 1 && (<h2 className="sm:hidden">2</h2>)}
                      {activeStep === 2 && (<h2 className="sm:hidden">3</h2>)}
                      {activeStep === 3 && (<h2 className="sm:hidden">4</h2>)}
                      {activeStep === 4 && (<h2 className="sm:hidden">5</h2>)}

                      <h2 className='hidden sm:block'>{index+1}</h2>
                      
                  </div>
                  <div className={`py-[8px]  text-[12px] font-medium font-public-sans
                  ${index <= activeStep ? "text-transparent bg-clip-text bg-btn-gradient" : "text-gray-2  hidden "} `}>
                    <div className='hidden sm:block'>{step}</div>
                    {activeStep === 0 && (<h2 className="sm:hidden">Basic info</h2>)}
                    {activeStep === 1 && (<h2 className="sm:hidden">Personal info</h2>)}
                    {activeStep === 2 && (<h2 className="sm:hidden">Documents</h2>)}
                    {activeStep === 3 && (<h2 className="sm:hidden">Bank details</h2>)}
                    {activeStep === 4 && (<h2 className="sm:hidden">Skills</h2>)}
                  </div>
                </div>
                {index < steps.length - 1 && (

                  <div className={`  absolute inset-1/4 left-1/2  w-full h-0.5  transform -translate-y-1/4   hidden sm:block`} >
                    <div className={`flex-grow h-fit border-t-2 border-dashed ${index < activeStep ? "border-[#f8595c]" : " border-[#828282]"}`}></div>
                  </div>
                )}
              </div>
                
                </>
              )
})} */}
{steps.map((step, index) => {
  const isActive = index === activeStep;
  const stepNumber = index + 1;

  return (
    isActive && (
      <div key={index} className="flex-1 items-center relative justify-center  sm:hidden">
        <div className="flex flex-col items-center justify-center overflow-x-auto min-w-[80px]">
          <div
            className={`cursor-pointer rounded-full w-[40px] h-[40px] flex items-center justify-center mx-auto lg:text-[20px] text-[16px] font-public-sans font-medium px-[13.5px] py-[8px] ${isActive ? "bg-btn-gradient text-white" : "bg-gray-5 text-gray-4"} z-10 shadow-md`}
          >
            {/* Show step number */}
            <h2 className={`hidden sm:block`}>{stepNumber}</h2>
            <h2 className={`block sm:hidden`}>{stepNumber}</h2>
          </div>

          <div className={`py-[8px] text-[12px] font-medium font-public-sans ${isActive ? "text-transparent bg-clip-text bg-btn-gradient" : "text-gray-2 hidden"}`}>
            {/* Show step description */}
            <div className='hidden sm:block'>{step}</div>
            <h2 className={`sm:hidden`}>{["Basic info", "Personal info", "Documents", "Bank details", "Skills"][index]}</h2>
          </div>
        </div>

        {/* Display connecting line if not the last step */}
        {index < steps.length - 1 && (
          <div className={`absolute inset-1/4 left-1/2 w-full h-0.5 transform -translate-y-1/4 hidden sm:block`}>
            <div className={`flex-grow h-fit border-t-2 border-dashed ${isActive ? "border-[#f8595c]" : "border-[#828282]"}`}></div>
          </div>
        )}
      </div>
    )
  );
})}

 </div>
 <div className="flex justify-between relative sm:py-[32px] gap-[10px]  overflow-x-auto ">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 items-center  relative justify-center  hidden sm:block">
                <div className="flex flex-col items-center justify-center overflow-x-auto min-w-[80px]">
                  <div
                    className={`cursor-pointer rounded-full w-[40px] h-[40px] g flex items-center justify-center mx-auto lg:text-[20px] text-[16px] font-public-sans
                  font-medium px-[13.5px] py-[8px] 
                  ${index <= activeStep ? "bg-btn-gradient text-white" : "bg-gray-5 text-gray-4"} z-10 shadow-md `}>
                    {index + 1}
                  </div>
                  <div className={`py-[8px]  text-[12px] font-medium font-public-sans
                  ${index <= activeStep ? "text-transparent bg-clip-text bg-btn-gradient" : "text-gray-2 "} `}>
                    {step}
                  </div>
                </div>
                {index < steps.length - 1 && (

                  <div className={`  absolute inset-1/4 left-1/2  w-full h-0.5  transform -translate-y-1/4`} >
                    <div className={`flex-grow h-fit border-t-2 border-dashed ${index < activeStep ? "border-[#f8595c]" : " border-[#828282]"}`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>



          {activeStep === 0 && (
            <div>
              <form>
                <div className="">
                  <label className="block text-[16px] font-mulish font-bold text-gray-1">Full name</label>
                  <input
                    type="text"
                    placeholder="Name here"
                    className="text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm  text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mt-[24px] ">
                  <div>
                    <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Department</label>
                    <div className='px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[8px]    justify-between'> <select className=" lg:text-base text-sm font-mulish  block w-full  sm:text-sm">
                      <option>Select</option>

                    </select>
                    </div>
                  </div>
                  <div>
                    <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Position</label>
                    <div className='px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[8px]   '> <select className=" lg:text-base text-sm font-mulish  sm:text-sm block w-full">
                      <option>Select</option>

                    </select>
                    </div>
                  </div>
                </div>

                <div className="mt-[24px]  ">
                  <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Date of joining</label>
                  <input
                    type="date"
                    className=" lg:text-base text-sm font-mulish mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm sm:text-sm"
                  />
                  {/* <div className='absolute   right-4 top-12 '>< Calenderhr/></div> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[24px]">
                  <div>
                    <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Phone number</label>
                    <input

                      type="tel"
                      placeholder="+1 000 000 0000"
                      className="lg:text-base text-sm font-mulish mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm  sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Email id</label>
                    <input
                      type="email"
                      placeholder="User@email.com"
                      className="lg:text-base text-sm font-mulish mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm sm:text-sm"
                    />
                  </div>
                </div>

              </form>
            </div>
          )}

          {activeStep === 1 && (
            <div className='px-6 '>
              <div className="flex items-center justify-center  border w-full rounded-lg  p-4  border-gray-5 ">
                <div className="flex justify-center items-center flex-col">
                  <div className="flex flex-col items-center gap-[10px] mt-[16px]">
                    <label htmlFor="upload-button" className="cursor-pointer">
                      <div className="border-[#f6f6f6] bg-[#f6f6f6] rounded-full flex items-center justify-center px-[18px] py-[40px]">
                        <span > <button className='rounded-lg border border-gray-2 py-[7px] px-[12.5px]  text-gray-2 font-public-sans font-semibold text-sm'>Browse</button></span>
                      </div>
                    </label>
                    <input
                      id="upload-button"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                  <div className="flex justify-center mb-[16px]">
                    <button className="px-4 py-2 cursor-pointer text-gray-1 font-bold font-mulish text-base">
                      Upload Image
                    </button>
                  </div>
                  {image && (
                    <div className="flex justify-center ">
                      <img src={image} alt="Uploaded" className="w-full h-full object-cover border rounded-lg" />
                    </div>
                  )}
                </div>
              </div>
              <div className='flex gap-[10px] mt-[24px]'>

                <div className="w-full">
                  <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Identity proof</label>
                  <div className=' px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[8px]  focus:outline-none focus:ring-red-500 focus:border-red-500  justify-between'>
                    <select name="identityProof" value={formData.identityProof} onChange={handleChange} className="lg:text-base text-sm font-mulish  block w-full  sm:text-sm">
                      <option value="">Select</option>
                      <option value="Passport">Passport</option>
                      <option value="Driving License">Driving License</option>
                      <option value="Aadhaar">Aadhaar</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Unique ID number</label>
                  <input type="text" placeholder="ID here" name="uniqueIdNumber" value={formData.uniqueIdNumber} onChange={handleChange}
                    className="lg:text-base text-sm font-mulish mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm  sm:text-sm" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Date of birth</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}
                  className="lg:text-base text-sm font-mulish mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm  sm:text-sm" />
              </div>
              <div className="mb-4">
                <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Marital status</label>
                <div className='px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[8px]   justify-between'>
                  <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}
                    className="lg:text-base text-sm font-mulish  block w-full  sm:text-sm ">
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (

            <div className=" px-6 flex flex-col gap-[24px]  w-full ">
              <FileUpload label="Offer letter" />
              <FileUpload label="Experience letter" />
              <FileUpload label="Graduation certificate" />
              <FileUpload label="Graduation certificate" />

            </div>


          )}

          {activeStep === 3 && (
            <div className=''>
              <form>
                <div className="">
                  <label className="block text-[16px] font-mulish font-bold text-gray-1">National Tax ID</label>
                  <input
                    type="text"
                    placeholder="Type ID here"
                    className="text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm  text-sm"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-[16px] font-mulish font-bold text-gray-1">Account number</label>
                  <input
                    type="text"
                    placeholder="Type acc. number"
                    className="text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm text-sm"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-[16px] font-mulish font-bold text-gray-1">IFSC code</label>
                  <input
                    type="text"
                    placeholder="Type IFSC code"
                    className="text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm text-sm"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-[16px] font-mulish font-bold text-gray-1">Bank name</label>
                  <input
                    type="text"
                    placeholder="Type bank name"
                    className="text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-[16px] font-mulish font-bold text-gray-1">Name on account</label>
                  <input
                    type="text"
                    placeholder="Type bank name"
                    className="text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm text-sm"
                  />
                </div>
              </form>
            </div>
          )}

          {activeStep === 4 && (
            <div className="flex  ">
              <div className="   w-full ">
                <div className="">
                  <label className="block text-[16px] font-mulish font-bold text-gray-1 ">Add skills</label>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                    className="leading-tight   text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm  text-sm"
                    placeholder="Type skill"
                  />

                </div>
                <div className="flex flex-wrap gap-2 mt-[24px] justify-center  ">
                  {skills.map((s) => (
                    <div key={s} className="flex gap-[10px] items-center border border-gray-5 rounded-[100px] px-[14px] py-[7px] relative">
                      <span className="mr-2">{s}</span>
                      <button
                        onClick={() => handleRemoveSkill(s)}
                        className="text-gray-1 font-public-sans text-base hover:text-gray-700 "
                      >
                        <span className='absolute -top-1 -right-1'><Crossiconssvg /></span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center mt-[32px] gap-[10px] ">
            <button onClick={prevsStep} disabled={activeStep === 0} className={`${activeStep === 0 ? 'hidden' : ''} w-[162px] py-[14px] px-[24px] font-mulish 
      border rounded-lg border-[#f65154] font-bold lg:text-base text-sm text-transparent bg-clip-text bg-btn-gradient`}>Back</button>



            {activeStep !== 4 ? (
              <button onClick={handleNextClick} disabled={activeStep === steps.length - 1} className="lg:text-base w-[162px] text-sm font-mulish font-bold 
         py-[14px] px-[24px] bg-btn-gradient text-white rounded-lg
         shadow-sm hover:bg-red-600 focus:outline-none">{activeStep === 4 ? 'Submit' : 'Next'}
              </button>
            ) : (
              <>
                <button onClick={handleShowPopup} className="lg:text-base w-[162px] text-sm font-mulish font-bold 
        py-[14px] px-[24px] bg-btn-gradient text-white rounded-lg
        shadow-sm hover:bg-red-600 focus:outline-none ">{activeStep === 4 ? 'Submit' : 'Next'}
                </button>

              </>
            )}

          </div>
        </div>
      </div>
      ) : (<SuccessfulDialog heading={'Employee added successfully'} show={showPopup} onClose={handleClosePopup} />)}
    </>


  )
}

export default Addnewemployee
