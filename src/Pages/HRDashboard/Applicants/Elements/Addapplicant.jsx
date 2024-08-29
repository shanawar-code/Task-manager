import { useRef } from 'react';
import React, { useState } from 'react'
import SuccessfulDialog from '../../../../components/Elements/SuccessfulDialog';
import { Input } from '../../../../components/Input';



function Addapplicant({onClose}) {

  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  };

  const [formData, setFormData] = useState({
    fullName: '',
    Contactnumber: '',
    emailid: '',
    salary: '',
    expectaion: '',
    experience: '',
    noticeperiod: '',
    identityproof: '',
    uniqueid: '',

  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



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
    {!showPopup ?( <div className='flex justify-center overflow-y-auto'>
      <div className="bg-white pt-4 rounded-[16px]  w-full  ">
        {activeStep === 0 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Add new applicant</h2>)}
        {activeStep === 1 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Professional details</h2>)}
        {activeStep === 2 && (<h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Add skills</h2>)}
        {/* <div className=" justify-between relative py-[32px] gap-[10px]  overflow-y-auto hidden">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 items-center  relative justify-center  ">
            <div className="flex flex-col items-center justify-center ">
              <div
                className={`cursor-pointer rounded-full w-[40px] h-[40px] g flex items-center justify-center mx-auto lg:text-[20px] text-[16px] font-public-sans
                  font-medium px-[13.5px] py-[8px] 
                  ${index <= activeStep ? "bg-btn-gradient text-white" : "bg-gray-5 text-gray-4" } z-10 shadow-md `}>
                {index + 1}
              </div>
              <div className={`py-[8px]  text-[12px] font-medium font-public-sans
                  ${index <= activeStep ? "text-transparent bg-clip-text bg-btn-gradient"  : "text-gray-2 "} `}>
                {step}
              </div>
            </div>
            {index < steps.length - 1 && (
              
              <div className={`  absolute inset-1/4 left-1/2  w-full h-0.5 bg-gray-300 transform -translate-y-1/4`} >
                  <div className={`flex-grow h-fit border-t-2 border-dashed ${index < activeStep  ? "border-[#f8595c]": "border-gray-500" }`}></div>
              </div>
            )}
          </div>
        ))}
      </div> */}


        {activeStep === 0 && (
          <div>
            <form>
              <div className="mt-[32px] px-6">
                {/* <label className="block lg:text-[16px] text-sm font-mulish font-bold text-gray-1">Full name</label>
          <input
            type="text"
            placeholder="Type here"
            className="text-gray-1 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-5 rounded-lg shadow-s text-sm"
          /> */}
                <Input label={'Full name'} type={'text'} placeholder={'Type here'} className={'placeholder-gray-1 lg:text-base font-mulish  text-sm'} />
              </div>


              <div className="mt-[32px] px-6">
                <Input label={'Contact number'} type={'text'} placeholder={'Type here'} className={' placeholder-gray-1 lg:text-base font-mulish   text-sm'} />
              </div>



              <div className="mt-[24px] px-6 ">
                <Input label={'Email id'} type={'text'} placeholder={'Type here'} className={'placeholder-gray-1 lg:text-base font-mulish   text-sm'} />
                {/* <div className='absolute   right-4 top-12 '>< Calenderhr/></div> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[24px] px-6">
                <div>
                  <Input label={'Salary'} type={'text'} placeholder={'$000000'} className={' text-gray-1 lg:text-base font-mulish   text-sm'} />
                </div>
                <div>
                  <Input label={'Expectation'} type={'text'} placeholder={'$000000'} className={' text-gray-1 lg:text-base font-mulish   text-sm'} />
                </div>
              </div>

            </form>
          </div>
        )}

        {activeStep === 1 && (
          <div className='px-6  '>
            <div className="flex items-center justify-center  border w-full rounded-lg   border-gray-5  ">
              <div className="flex justify-center items-center flex-col">
                <div className="flex flex-col items-center gap-[10px] mt-[16px]">
                  <label htmlFor="upload-button" className="cursor-pointer">
                    <div className="border-[#f6f6f6] bg-[#f6f6f6] rounded-full flex items-center justify-center px-[18px] py-[40px]">
                      <span > <button onClick={handleBrowseClick} className='rounded-lg border border-gray-2 py-[7px] px-[12.5px]  text-gray-2 font-public-sans font-semibold text-sm'>Browse</button></span>
                    </div>
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <div className="flex justify-center items-center mb-[16px]">
                  <button className="px-4 py-2 cursor-pointer text-gray-1 font-bold font-mulish text-base">
                    Upload resume
                  </button>
                </div>

              </div>
            </div>
            <div className='flex gap-[10px] mt-[24px]'>

              <div className="w-full">
                <Input label={'Experience'} type={'text'} placeholder={'Type here'} className={' placeholder-gray-1 lg:text-base font-mulish   text-sm'} onChange={handleChange} />
              </div>
              <div className="mb-4 w-full">
                <Input label={'Notice period'} type={'text'} placeholder={'Type here'} className={' text-gray-1 lg:text-base font-mulish   text-sm'} onChange={handleChange} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish">Identity proof</label>
              <div className=' px-[16px] py-[12.5px] border border-gray-500 rounded-lg shadow-sm mt-[8px]  focus:outline-none focus:ring-red-500 focus:border-red-500  justify-between'>
                <select name="identityProof" value={formData.identityProof} onChange={handleChange} className="lg:text-base text-sm font-mulish placeholder-gray-1 block w-full  sm:text-sm">
                  <option value="">Select</option>
                  <option value="Passport">Passport</option>
                  <option value="Driving License">Driving License</option>
                  <option value="Aadhaar">Aadhaar</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <Input label={'Unique ID'} value={formData.uniqueIdNumber} type={'text'} placeholder={'Type here'} className={' placeholder-gray-1 lg:text-base font-mulish   text-sm'} onChange={handleChange} />
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="flex ">
            <div className="   w-full px-6">
              <div className="">
                <label className="block text-[16px] font-mulish font-bold text-gray-1 ">Add skills</label>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  className="leading-tight   text-gray-4 lg:text-base font-mulish  mt-[8px] block w-full px-[16px] py-[12.5px] border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
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
                      <span className='absolute -top-1 -right-1'></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center my-[32px] gap-[10px] px-6 sm:px-0">
          <button onClick={prevsStep} disabled={activeStep === 0} className={`${activeStep === 0 ? 'hidden' : ''} w-[162px] py-[14px] px-[24px] font-mulish 
      border rounded-lg border-[#f65154] font-bold lg:text-base text-sm text-transparent bg-clip-text bg-btn-gradient`}>Back</button>



          {activeStep !== 2 ? (
            <button onClick={handleNextClick} disabled={activeStep === steps.length - 1} className="lg:text-base w-[162px] text-sm font-mulish font-bold 
         py-[14px] px-[24px] bg-btn-gradient text-white rounded-lg
         shadow-sm hover:bg-red-600 focus:outline-none ">{activeStep === 2 ? 'Submit' : 'Next'}
            </button>
          ) : (
            <>
              <button onClick={handleShowPopup} className="lg:text-base w-[162px] text-sm font-mulish font-bold 
        py-[14px] px-[24px] bg-btn-gradient text-white rounded-lg
        shadow-sm hover:bg-red-600 focus:outline-none">{activeStep === 2 ? 'Submittt' : 'Next'}
              </button>
             
            </>
          )}

        </div>
      </div>
    </div>):(<SuccessfulDialog heading={'Applicant added successfully'} show={showPopup} onClose={handleClosePopup} />)}
    </>
  )
}


export default Addapplicant
