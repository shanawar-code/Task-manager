// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { Input } from "components/Input.jsx";
// import Button from "components/Button.jsx";
// import SuccessfulDialog from "components/Elements/SuccessfulDialog.jsx";
// import CalendarDialog from "./CalendarDialog.jsx";
// import Svgs from 'assets/svgs/Index.js'


// function VerifiedSuccessful({ show, onClose }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const [showPopup, setShowPopup] = useState(false);

//   const handleShowPopup = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//     onClose();
//   };

//   const [showDialog, setShowDialog] = useState(false);

//   const handleShowDialog = () => {
//     setShowDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//   };

//   const popupRef = useRef();

//   const handleClickOutside = (event) => {
//     if (popupRef.current && !popupRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     if (show || showPopup) {
//       // Disable scrolling on the background when the popup is open
//       document.body.style.overflow = "hidden";
//     } else {
//       // Enable scrolling again when the popup is closed
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       // Clean up by enabling scrolling when the component unmounts
//       document.body.style.overflow = "auto";
//     };
//   }, [show, showPopup]);

//   useEffect(() => {
//     if (show) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [show]);

//   if (!show) return null;

//   return (
//     <>
//       {!showPopup ? (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div ref={popupRef} className="  flex items-center justify-center relative">
//             <span onClick={onClose} className=" absolute -top-12 md:hidden"> <Svgs.CrossIconPopup /></span>
//             <form onSubmit={handleSubmit}>
//               <div className=" p-5 bg-white shadow-lg rounded-xl border w-[90vw] md:w-[62vw] mx-4">
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center justify-center text-center">
//                     <h1 className="text-xl md:text-2xl font-semibold font-public-sans text-gray-700">
//                       Create a meeting
//                     </h1>
//                   </div>
//                   <div>
//                     <Input label={"Title"} className={"text-xs md:text-base"} />
//                   </div>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className=" relative">
//                       <Input label={"Date"} className={"text-base"} placeholder={'00/00/00'} />
//                       <span className="absolute right-4 top-[44px] cursor-pointer" onClick={handleShowDialog}><Svgs.CalendarIcon /></span>
//                       {showDialog && (
//                         <CalendarDialog show={showDialog} onClose={handleCloseDialog} />
//                       )}
//                     </div>
//                     <div className=" relative">
//                       <Input label={"Select time"} className={"text-base"} placeholder={'00:00'} />
//                       <span className="absolute right-4 top-[44px] cursor-pointer" onClick={handleShowDialog}><Svgs.TimerIcon /></span>
//                     </div>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor=""
//                       className="text-base font-bold font-mulish text-gray-700"
//                     >
//                       Meeting notes
//                     </label>
//                     <textarea
//                       className=" focus:ring-1 ring-black resize-none rounded-xl border w-full h-[130px] p-4 my-2 outline-none"
//                       placeholder="Description"
//                     ></textarea>
//                   </div>
//                   <div className="flex items-center justify-center">
//                     <button className="flex items-center justify-center w-[258px] h-[44px] gap-[13px] border border-[#FB6D72] rounded-xl text-[#F33F41] text-sm font-semibold font-public-sans">
//                       <Svgs.AddIconRed />
//                       Add employees
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-center mt-5">
//                     <Button
//                       handleClick={handleShowPopup}
//                       text={"Create task"}
//                       customPadding={"px-[24px] py-[14px]"}
//                       className={"h-[48px] w-[162px]"}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       ) : (<SuccessfulDialog heading={'Meeting created successfully.'} show={showPopup} onClose={handleClosePopup} />)}
//     </>
//   );
// }

// export default VerifiedSuccessful;
import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "components/Button.jsx";
import SuccessfulDialog from "components/Elements/SuccessfulDialog.jsx";
import CalendarDialog from "./CalendarDialog.jsx";
import Svgs from "assets/svgs/Index.js";

// Form Validation Schema using Yup
const meetingSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  notes: Yup.string(),
});

function VerifiedSuccessful({ show, onClose }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };
;

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    onClose();
 };



  const handleShowDialog = () => {
   setShowDialog(true);
  };

  const handleCloseDialog = () => {
     setShowDialog(false);
 };

  useEffect(() => {
    if (show || showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show, showPopup]);

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      {!showPopup ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={popupRef} className="flex items-center justify-center relative">
            <span onClick={onClose} className="absolute -top-12 md:hidden">
              <Svgs.CrossIconPopup />
            </span>
            <Formik
              initialValues={{ title: "", date: "", time: "", notes: "" }}
              validationSchema={meetingSchema}
              onSubmit={(values, { setSubmitting }) => {
                setShowPopup(true);
                setSubmitting(false);
              }}
            >
              {({ setFieldValue, errors, touched }) => (
                <Form>
                  <div className="p-5 bg-white shadow-lg rounded-xl border w-[90vw] md:w-[62vw] mx-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-center text-center">
                        <h1 className="text-xl md:text-2xl font-semibold font-public-sans text-gray-700">
                          Create a meeting
                        </h1>
                      </div>
                      <div>
                        <label className="text-base font-bold text-gray-700">
                          Title
                        </label>
                        <Field
                          name="title"
                          type="text"
                          className={`mt-1 block w-full border ${errors.title && touched.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  px-[24px] py-[12.5px]`}
                          placeholder="Enter title"
                        />
                        <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <label className="text-base font-bold text-gray-700">
                            Date
                          </label>
                          <Field
                            name="date"
                            type="text"
                            className={`mt-1 block w-full border ${errors.date && touched.date ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  px-[24px] py-[12.5px]`}
                            placeholder="00/00/00"
                          />
                          <span className="absolute right-4 top-[44px] cursor-pointer" onClick={() => setShowDialog(true)}>
                            <Svgs.CalendarIcon />
                          </span>
                          {showDialog && (
                            <CalendarDialog show={showDialog} onClose={() => setShowDialog(false)} />
                          )}
                          <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="relative">
                          <label className="text-base font-bold text-gray-700">
                            Select time
                          </label>
                          <Field
                            name="time"
                            type="text"
                            className={`mt-1 block w-full border ${errors.time && touched.time ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  px-[24px] py-[12.5px]`}
                            placeholder="00:00"
                          />
                          <span className="absolute right-4 top-[44px] cursor-pointer">
                            <Svgs.TimerIcon />
                          </span>
                          <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                      <div>
                        <label className="text-base font-bold text-gray-700">
                          Meeting notes
                        </label>
                        <Field
                          name="notes"
                          as="textarea"
                          className={`focus:ring-1 ring-black resize-none rounded-xl border w-full h-[130px] p-4 my-2 outline-none ${errors.notes && touched.notes ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Description"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          className="flex items-center justify-center w-[258px] h-[44px] gap-[13px] border border-[#FB6D72] rounded-xl text-[#F33F41] text-sm font-semibold"
                        >
                          <Svgs.AddIconRed />
                          Add employees
                        </button>
                      </div>
                      <div className="flex items-center justify-center mt-5">
                        <Button
                          handleClick={null}
                          type="submit"
                          text="Create meeting"
                          customPadding="px-[24px] py-[14px]"
                          className="h-[48px] w-[162px]"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <SuccessfulDialog heading={'Meeting created successfully.'} show={showPopup} onClose={handleClosePopup} />
      )}
    </>
  );
}

export default VerifiedSuccessful;
