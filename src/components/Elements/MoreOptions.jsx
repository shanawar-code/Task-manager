// import React, { useState, useEffect, useRef } from "react";

// // MoreOptions Component for displaying the popup
// function MoreOptions({ show, onClose, anchorRef }) {
//   const popupRef = useRef();

//   const handleClickOutside = (event) => {
//     if (
//       popupRef.current &&
//       !popupRef.current.contains(event.target) &&
//       !anchorRef.current.contains(event.target)
//     ) {
//       onClose();
//     }
//   };

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
//     <div className=" w-fit absolute z-10" style={{ top: "100%", left: 0 }}>
//       <div ref={popupRef} className=" bg-white shadow-lg border rounded-xl w-fit">
//         <div className="w-[130px] flex items-start flex-col h-[80px]">
//           <button className="cursor-pointer text-sm font-open-sans text-gray-1 py-2 px-3">
//             Edit
//           </button>
//           <button className="cursor-pointer text-sm font-open-sans text-gray-1 py-2 px-3">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MoreOptions








import React, { useEffect, useRef } from "react";

// MoreOptions Component for displaying the popup
function MoreOptions({ show, onClose, anchorRef }) {
  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      anchorRef &&
      !anchorRef.contains(event.target)
    ) {
      onClose();
    }
  };

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
    <div className="w-fit  z-10">
      <div ref={popupRef} className="bg-white shadow-lg border rounded-xl w-fit">
        <div className="w-[130px] flex items-start flex-col h-[80px]">
          <button className="cursor-pointer text-sm font-open-sans text-gray-1 py-2 px-3">
            Edit
          </button>
          <button className="cursor-pointer text-sm font-open-sans text-gray-1 py-2 px-3">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoreOptions;
