import React from "react";
import { useState } from "react";
import { Layout } from "../../components/Layout/DashboardLayout";

function Employees() {
  const employeeCard = [
    {
      title: "Anna",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Catherine",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Orton",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Moana",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Jessy",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Lucy",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Bela",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Natasha",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
    {
      title: "Scarlett",
      role: "Team member",
      department: "Web development",
      task_score: "98%",
      email: "o.williams@email.com",
      phone: "+1 650 434 5655",
    },
  ];

  const [addemployee, setaddemployee] = useState(null)

  const handleClick = (item) =>{
    setaddemployee(item)
  }


  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 5));
  };

  const steps = [
    "Basic info",
    "Personal info",
    "Documents",
    "Bank details",
    "Skills",
  ];



  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    
  };



  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddSkill = () => {
    if (inputValue && !skills.includes(inputValue)) {
      setSkills([...skills, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  



  return (
    <>
    <Layout active={'Employees'}>
    <div>
      <div className="flex justify-between items-center p-5">
        <div className="xs:hidden sm:block">
          <h1 className="text-2xl opacity-70 font-bold">Employees</h1>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="  ">
            <select
              className=" border-2 px-2 py-2 outline-none rounded-lg  border-black border-opacity-65"
              name=""
              id=""
            >
              <option value="Web development">Web Development</option>
              <option value="Android App">Android App</option>
              <option value="IOS">IOS Developer</option>
              <option value="WordPress">WordPress</option>
            </select>
            
        
      
          </div>
          <div className="bg-[#F75457] rounded-lg px-4 flex items-center cursor-pointer">
            <h1 className="text-white flex items-center justify-center">
              <span className="text-4xl mr-3 h-11">+</span>
              Add new employees
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5">
        {employeeCard.map((value, i) => {
          return (
            <div key={i} className="border rounded-2xl p-5">
              <div className="flex items-center">
                <div className="">
                  <img
                    className="w-[80px] h-[80px] rounded-full bg-gray-400 object-cover"
                    src={'images/profilePic.png'}
                    alt=""
                  />
                </div>
                <div className="px-5">
                  <h1 className="text-xl font-bold opacity-75">
                    {value.title}
                  </h1>
                  <h1 className="bg-[#ecf1fe] text-[#497CFF] rounded-full py-1 px-3 mt-2 font-semibold">
                    Team memeber
                  </h1>
                </div>
              </div>
              <div className=" px-7 py-5">
                <div className="flex justify-between">
                  <h1 className="uppercase opacity-50 ">Department</h1>
                  <h1 className="font-semibold">Web Development</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="uppercase opacity-50 ">Task Score</h1>
                  <h1 className="text-[#00B037] font-semibold">98%</h1>
                </div>
              </div>
              <div className="bg-[#f5f5f5] px-5 rounded-2xl border">
                <div className=" py-3">
                  <h1 className=" font-semibold opacity-70">
                    o.williams@email.com
                  </h1>
                </div>
                <div className="border-b"></div>
                <div className="py-3">
                  <h1 className=" font-semibold opacity-70">+1 650 434 5655</h1>
                </div>
              </div>
              <div className="flex justify-center pt-5">
                <button onClick={()=>handleClick(value)} className="font-semibold text-sm border border-black text-[#4F4F4F] py-1 px-4 rounded-lg">
                  View details
                </button>
              </div>
            </div>
          );
        })}
      </div>




     {addemployee &&(
                <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <div className=" flex items-center justify-center h-[100vh]">
      <div className=" mx-auto p-8 bg-white rounded-lg shadow-md py-7 ">
      <h2 className="text-2xl font-semibold mb-6 text-center">Basic info</h2>
      <div className="flex justify-between mb-6">
        {steps.map((label, index) => (
          <div key={index} className="flex-1 text-center">
            <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${index < step ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
              {index + 1}
            </div>
            <div className="text-xs mt-2">{label}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
          <div className="w-[30vw] h-[60vh]">
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Name here"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">Department</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Select</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">Position</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date of Joining</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 000 000 0000"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2">Email ID</label>
                <input
                  type="email"
                  placeholder="user@email.com"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="w-[30vw] h-[60vh]">
            <div className="mb-4">
              <label className="relative text-gray-700 mb-2 border h-[20vh] rounded-lg flex justify-center items-center shadow cursor-pointer ">Browse
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded-lg hidden"
              />
              {preview && (
          <div className="mb-4">
            <img src={preview} alt="Preview" className="absolute top-0 left-0 h-full rounded-lg" />
          </div>
        )}
              </label>
              {image && (
              <span className="ml-4 text-gray-600">{image.name}</span>
            )}
                
            </div>
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2 font-medium">Identity proof</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Select</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-2 font-medium">Unique ID number</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Date of birth</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
                <label htmlFor="married" className="block text-gray-700 mb-2 font-medium">Martial status</label>
                <select  className="w-full px-3 py-2 border rounded-lg" name="" id="married">
                    <option value="">married</option>
                    <option value="">unmarried</option>
                </select>
            </div>
          </>
        )}
         {step === 3 && (
          <>
          <div className="w-[30vw] h-[60vh]">         
            <div className="mb-4">
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="">Offer letter</label>
              <label className="relative block text-gray-700 mb-2 border p-2 rounded-lg">Upload
              <input

                type="file"
                placeholder="Name here"
                className="hidden w-full  px-3 py-2 border rounded-lg"
                />
              <label htmlFor="" className=" absolute right-4 top-3"></label>
              </label>
                
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="">Offer letter</label>
              <label className="relative block text-gray-700 mb-2 border p-2 rounded-lg">Upload
              <input

                type="file"
                placeholder="Name here"
                className="hidden w-full  px-3 py-2 border rounded-lg"
                />
              <label htmlFor="" className=" absolute right-4 top-3"></label>
              </label>
                
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="">Offer letter</label>
              <label className="relative block text-gray-700 mb-2 border p-2 rounded-lg">Upload
              <input

                type="file"
                placeholder="Name here"
                className="hidden w-full  px-3 py-2 border rounded-lg"
                />
              <label htmlFor="" className=" absolute right-4 top-3"></label>
              </label>
                
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="">Offer letter</label>
              <label className="relative block text-gray-700 mb-2 border p-2 rounded-lg">Upload
              <input

                type="file"
                placeholder="Name here"
                className="hidden w-full  px-3 py-2 border rounded-lg"
                />
              <label htmlFor="" className=" absolute right-4 top-3"></label>
              </label>
                
            </div>
            </div>
            </>
         )}

{step === 4 && (
          <>
          <div className="w-[30vw] h-[60vh]">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">National Tax ID</label>
              <input
                type="text"
                placeholder="Type ID here"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Account number</label>
              <input
                type="text"
                placeholder="Type acc. number"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">IFSC code</label>
              <input
                type="text"
                placeholder="Type IFSC code"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Bank name</label>
              <input
                type="text"
                placeholder="Type bank name"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Name on account</label>
              <input
                type="text"
                placeholder="Type bank name"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            </div>
            </>
            )}
{step === 5 && (
    <>
<div className="w-[30vw] h-[60vh]">



          <label className="block text-gray-700 mb-2">Add skills</label>
          <div className="flex mb-4">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-md p-2 mr-2"
              placeholder="Type skill"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={handleAddSkill}
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 px-3 py-1 rounded-full"
              >
                <span className="mr-2">{skill}</span>
                <button onClick={() => handleRemoveSkill(skill)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        



</div>
            
    </>
)}        
        {/* Additional steps can be added here similar to step 1 */}
        <button
          type="button"
          onClick={nextStep}
          className="w-full py-3 mt-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
        >
          Next
        </button>
      </form>
    </div>
    </div>
    </div>
     )}




    </div>
    </Layout>
    </>
  );
}


function Inputfield({val, todolist, index, settodolist, }){

    function deleterow(){
        let finaldata = todolist.filter((value,i)=> i!=index)
        settodolist(finaldata)
    }

    return(
        <li>{val} <span onClick={deleterow}>&times;</span></li>
  
    )
}

export default Employees;
