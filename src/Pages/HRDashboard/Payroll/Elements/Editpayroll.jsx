import React,{useState ,useEffect, useRef} from 'react'
import SuccessfulDialog from '../../../../components/Elements/SuccessfulDialog';
import { Input } from '../../../../components/Input';



function Editpayroll() {

   


    

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
    
    
      const [showPopup, setShowsPopup] = useState(false);
    
      const handleShowPopup = () => {
        setShowsPopup(true);
      };
    
      const handleClosePopup = () => {
        setShowsPopup(false);
      }
      
    
     

      
    
  return (
    <div className='flex justify-center overflow-y-auto'>
  
    <div className="bg-white mt-[24px] rounded-[16px]  w-full  ">
    <h2 className="lg:text-[24px] text-[18px]  font-semibold mb-6 text-center text-gray-1 font-public-sans">Edit</h2> 
    
     
        <div>
           <form>
        <div className="mt-[32px] px-6">
          
        <div className="mb-4  ">
          <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish text-left">Select employee</label>
             <div  className=' px-[24px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[6px]    justify-between  focus-within:ring-2 ring-black'>  
               <select name="Select employee" value={formData.identityProof}  onChange={handleChange} className="lg:text-base text-sm font-mulish placeholder-gray-1 block w-full  sm:text-sm outline-none">
         
              <option value="Web designer">Catherine</option>
              <option value="Python developer">Ortan</option>
              <option value="UI/UX developer">Anna</option>
              <option value="Web developer">Jessy</option>
          
            </select>
            </div>
          </div>
        </div>

       
          <div className="mt-[32px] px-6">
          <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish text-left">Employee position</label>
             <div  className='focus-within:ring-2 ring-black    px-[24px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[6px]    justify-between'>  
               <select name="Select employee" value={formData.identityProof}  onChange={handleChange} className="lg:text-base text-sm font-mulish placeholder-gray-1 block w-full  sm:text-sm outline-none">
              <option value="">Junior</option>
              <option value="Web designer">Senior</option>
              <option value="Python developer">Internship</option>
              
            </select>
            </div>
          </div>
          
      

        <div className="mt-[24px] px-6 ">
        <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish text-left">Designation</label>
             <div  className=' focus-within:ring-2 ring-black  px-[24px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[6px]    justify-between'>  
               <select name="Select employee" value={formData.identityProof}  onChange={handleChange} className="lg:text-base text-sm font-mulish placeholder-gray-1 block w-full  sm:text-sm outline-none ">
              <option value="">Select</option>
              <option value="Web designer">Web designer</option>
              <option value="Python developer">Python developer</option>
              <option value="UI/UX developer">UI/UX developer</option>
              <option value="Web developer">Web developer</option>
              <option value="Digital marketing">Digital marketing</option>
            </select>
            </div>
          {/* <div className='absolute   right-4 top-12 '>< Calenderhr/></div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[24px] px-6 text-left">
          <div>
          <label className="block lg:text-base text-sm font-bold text-gray-1 font-mulish mt-1 lg:mt-0">Pay type</label>
             <div  className='focus-within:ring-2 ring-black px-[24px] py-[12.5px] border border-gray-5 rounded-lg shadow-sm mt-[6px]    justify-between'>  
               <select name="Select employee" value={formData.identityProof} onChange={handleChange} className="lg:text-base text-sm font-public-sans  placeholder-gray-1 block w-full  sm:text-sm outline-none">
              <option value="">Fix</option>
              
            </select>
            </div>
          </div>
          <div  className=''>
          <Input label={'Salary'} type={'text'} placeholder={'$1200'} className={'placeholder-gray-1 text-gray-1 lg:text-base font-mulish   text-sm'}   />
          </div>
        </div>

        <div className="my-[24px] px-6 text-left">
        <Input label={'Employee email'} type={'text'} placeholder={'User@email.com'} className={'placeholder-gray-1 lg:text-base font-mulish   text-sm'}   />
        
        </div>
      
      </form>
      <div className='flex justify-center my-[32px]'>
      <button onClick={handleShowPopup} className="lg:text-base w-[162px] text-sm font-mulish font-bold 
         py-[14px] px-[24px] bg-btn-gradient text-white rounded-lg
         shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">{ 'Update'} 
         </button>
         { showPopup && (<SuccessfulDialog heading={'Update successful'} show={showPopup} onClose={handleClosePopup}/>)}
         </div>

       
        </div>
     

     
       
      

   
  </div>

  </div>
  )
}

export default Editpayroll
