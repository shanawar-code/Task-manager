const Team =({color})=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1685 9.5385C18.2043 8.20307 17.9614 6.28081 16.626 5.24502C15.2906 4.20922 13.3683 4.45212 12.3325 5.78755C11.2967 7.12299 11.5396 9.04524 12.875 10.081C14.2105 11.1168 16.1327 10.8739 17.1685 9.5385Z" stroke={color || "#828282"} stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.83984 18.86C8.83984 15.6 11.4898 12.95 14.7498 12.95C18.0098 12.95 20.6598 15.6 20.6598 18.86" stroke={color || "#828282"} stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.61389 9.59881C9.17222 8.55709 8.78035 7.26 7.73863 6.70168C6.69692 6.14335 5.39983 6.53522 4.8415 7.57694C4.28318 8.61866 4.67505 9.91575 5.71676 10.4741C6.75848 11.0324 8.05557 10.6405 8.61389 9.59881Z" stroke={color || "#828282"} stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.6001 16.41C2.6001 14.13 4.4501 12.28 6.7301 12.28C8.4201 12.28 9.8701 13.29 10.5101 14.75" stroke={color || "#828282"} stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

 const Chat =({color})=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0422 4.90944C17.1612 3.05826 14.6278 2.02075 11.9886 2.02075C9.34945 2.02075 6.81606 3.05826 4.93502 4.90944V4.90944C3.45412 6.38451 2.47427 8.28771 2.13399 10.35C1.79371 12.4123 2.11022 14.5294 3.03875 16.402L2.59342 20.0797C2.56977 20.2569 2.58729 20.4373 2.64463 20.6066C2.70196 20.776 2.79755 20.9299 2.924 21.0564C3.05045 21.1828 3.20436 21.2784 3.37374 21.3357C3.54313 21.3931 3.72343 21.4106 3.90069 21.387L7.57832 20.9416C9.45094 21.8702 11.5681 22.1867 13.6304 21.8464C15.6927 21.5061 17.5959 20.5262 19.0709 19.0453V19.0453C20.002 18.118 20.7403 17.0154 21.2432 15.8013C21.7461 14.5872 22.0036 13.2855 22.001 11.9714C21.9983 10.6573 21.7355 9.35667 21.2276 8.14461C20.7198 6.93255 19.9771 5.83302 19.0422 4.90944V4.90944Z" stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12.0009" cy="12.0002" r="1.07413" stroke={color || "#828282"}/>
<circle cx="8.24112" cy="12.0002" r="1.07413" stroke={color || "#828282"}/>
<circle cx="15.7607" cy="12.0002" r="1.07413" stroke={color || "#828282"}/>
</svg>

    )
}

 const AttendanceSvg=({color})=>{
    return(

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="20" height="20" rx="5" stroke={color || "#828282"} stroke-width="1.3"/>
<path d="M6.7804 14.5695L10.1024 10.3176L13.6456 13.3293L16.923 9.21045" stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

const Setting =({color})=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2436 5.48656C20.0817 5.28128 19.8606 5.13086 19.6102 5.05574C19.3598 4.98062 19.0923 4.98447 18.8442 5.06675C18.3998 5.19305 17.9345 5.22872 17.476 5.17165C17.0174 5.11457 16.5751 4.96592 16.1752 4.73451C15.7752 4.5031 15.4259 4.19366 15.1479 3.82458C14.87 3.4555 14.669 3.03431 14.557 2.58604C14.5028 2.34623 14.3802 2.12728 14.2041 1.9557C14.028 1.78411 13.8059 1.66723 13.5648 1.6192C12.5277 1.46027 11.4724 1.46027 10.4353 1.6192C10.1925 1.66815 9.96923 1.78692 9.79297 1.96093C9.6167 2.13493 9.49506 2.35661 9.44298 2.59876C9.33536 3.05535 9.13536 3.48505 8.8553 3.86138C8.57524 4.2377 8.22107 4.55267 7.81462 4.78687C7.41012 5.01976 6.96297 5.16905 6.49969 5.22586C6.03641 5.28268 5.56643 5.24588 5.11765 5.11763C4.86873 5.04098 4.60228 5.04257 4.3543 5.1222C4.10632 5.20183 3.88875 5.35565 3.73099 5.56289C3.1165 6.35933 2.62348 7.24248 2.26801 8.18353C2.16548 8.43067 2.14348 8.70386 2.20515 8.96422C2.26681 9.22459 2.409 9.45889 2.6115 9.63379C2.94396 9.95313 3.20847 10.3364 3.38915 10.7605C3.56984 11.1846 3.66298 11.6408 3.66298 12.1018C3.66298 12.5628 3.56984 13.019 3.38915 13.4431C3.20847 13.8672 2.94396 14.2504 2.6115 14.5698C2.41384 14.7453 2.27577 14.9781 2.21649 15.2357C2.15722 15.4933 2.17967 15.763 2.28074 16.0073C2.4638 16.4475 2.68072 16.8728 2.92954 17.2795C3.17828 17.7232 3.45889 18.1484 3.76916 18.5516C3.93102 18.7569 4.15219 18.9073 4.40257 18.9824C4.65296 19.0575 4.92041 19.0537 5.16853 18.9714C5.61125 18.8426 6.07532 18.8039 6.53327 18.8575C6.99122 18.9112 7.43375 19.0562 7.83467 19.284C8.23559 19.5117 8.58675 19.8176 8.86737 20.1834C9.14799 20.5493 9.35238 20.9677 9.46842 21.414C9.5227 21.6538 9.6453 21.8727 9.82141 22.0443C9.99751 22.2159 10.2196 22.3328 10.4607 22.3808C11.4978 22.5397 12.5531 22.5397 13.5902 22.3808C13.833 22.3318 14.0562 22.2131 14.2325 22.0391C14.4088 21.8651 14.5304 21.6434 14.5825 21.4012C14.6887 20.9491 14.8855 20.5232 15.161 20.1493C15.4366 19.7754 15.785 19.4612 16.1854 19.2259C16.5899 18.993 17.0371 18.8437 17.5003 18.7869C17.9636 18.73 18.4336 18.7668 18.8824 18.8951C19.1313 18.9717 19.3977 18.9702 19.6457 18.8905C19.8937 18.8109 20.1113 18.6571 20.269 18.4498C20.8771 17.6769 21.3698 16.8199 21.732 15.9055C21.8345 15.6584 21.8565 15.3852 21.7949 15.1248C21.7332 14.8645 21.591 14.6302 21.3885 14.4553C21.0561 14.1359 20.7916 13.7527 20.6109 13.3286C20.4302 12.9045 20.337 12.4483 20.337 11.9873C20.337 11.5263 20.4302 11.0701 20.6109 10.646C20.7916 10.2219 21.0561 9.83864 21.3885 9.5193C21.5862 9.34375 21.7243 9.11099 21.7835 8.85336C21.8428 8.59573 21.8204 8.32604 21.7193 8.08176C21.5393 7.61979 21.3223 7.17309 21.0705 6.74599C20.8253 6.30696 20.549 5.88607 20.2436 5.48656V5.48656Z" stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0128 14.8239C13.5726 14.8239 14.837 13.5595 14.837 11.9997C14.837 10.44 13.5726 9.17554 12.0128 9.17554C10.4531 9.17554 9.18866 10.44 9.18866 11.9997C9.18866 13.5595 10.4531 14.8239 12.0128 14.8239Z" stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

 const Dashboard=({color})=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="8" height="8" rx="2" transform="matrix(-1 0 0 1 22.001 1.99927)" stroke={color || "#828282"} stroke-width="1.3" />
<rect width="8" height="20" rx="2" transform="matrix(-1 0 0 1 10 2.00073)" stroke={color || "#828282"} stroke-width="1.3" />
<rect width="8" height="8" rx="2" transform="matrix(-1 0 0 1 22.0009 13.9993)" stroke={color || "#828282"} stroke-width="1.3"/>
</svg>

    )
}

const MyTasks=({color})=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10L16 10"  stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16L14 16"  stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3951 3.45044H17.8793C18.9838 3.45044 19.8793 4.34587 19.8793 5.45044V19.9999C19.8793 21.1045 18.9839 21.9999 17.8793 21.9999H6.12012C5.01555 21.9999 4.12012 21.1045 4.12012 19.9999V5.45044C4.12012 4.34587 5.01555 3.45044 6.12012 3.45044L8.61448 3.45044"  stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="8.61487" y="2" width="6.76896" height="2.90098" rx="1"  stroke={color || "#828282"} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

const Logout=()=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7988 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H11.7988" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.4931 7.49304L22 11.9862L17.4931 16.493" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 11.993H8.1485" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    )
}

const MyLeave=()=>{
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0769 13.3077V15.7692C12.0769 16.0957 11.9473 16.4087 11.7164 16.6395C11.4856 16.8703 11.1726 17 10.8462 17H2.23077C1.90435 17 1.5913 16.8703 1.36048 16.6395C1.12967 16.4087 1 16.0957 1 15.7692V2.23077C1 1.90435 1.12967 1.5913 1.36048 1.36048C1.5913 1.12967 1.90435 1 2.23077 1H10.8462C11.1726 1 11.4856 1.12967 11.7164 1.36048C11.9473 1.5913 12.0769 1.90435 12.0769 2.23077V4.69231M8.38462 9H17M17 9L14.5385 6.53846M17 9L14.5385 11.4615" stroke="url(#paint0_linear_38_1131)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_38_1131" x1="8.46667" y1="17" x2="8.46667" y2="1.8" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
</defs>
</svg>
    )
}


const Calender=()=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_38_1206)">
<path d="M11.5 16.5156H12.5001V23.5157H11.5V16.5156Z" fill="url(#paint0_linear_38_1206)"/>
<path d="M4.5 14.5156H19.5V15.5156H4.5V14.5156Z" fill="url(#paint1_linear_38_1206)"/>
<path d="M21.5 8.01569C20.1214 8.01569 18.9999 6.89417 18.9999 5.51575C18.9999 4.13715 20.1214 3.01562 21.5 3.01562C22.8784 3.01562 23.9999 4.13715 23.9999 5.51575C23.9999 6.89417 22.8784 8.01569 21.5 8.01569ZM21.5 4.01575C20.6729 4.01575 20 4.68866 20 5.51575C20 6.34265 20.6729 7.01575 21.5 7.01575C22.3269 7.01575 23 6.34265 23 5.51575C23 4.68866 22.3269 4.01575 21.5 4.01575Z" fill="url(#paint2_linear_38_1206)"/>
<path d="M16.4999 23.5157C16.434 23.5157 16.367 23.5031 16.3029 23.4751C16.049 23.3661 15.9314 23.0723 16.0405 22.8187L17.5405 19.3186C17.6189 19.1348 17.8 19.0157 17.9999 19.0157H21.5C22.3269 19.0157 23 18.3427 23 17.5157V11.0157C23 10.4642 22.5514 10.0157 21.9999 10.0157H21.5C21.149 10.0157 20.8295 10.2477 20.399 10.8177C19.916 11.4557 18.45 13.2556 18.3879 13.3316C18.2924 13.4482 18.1505 13.5156 17.9999 13.5156H15.5C15.2239 13.5156 14.9999 13.7397 14.9999 14.0157V15.0156C14.9999 15.2921 14.7764 15.5157 14.4999 15.5157C14.2234 15.5157 14 15.2921 14 15.0156V14.0157C14 13.1886 14.6729 12.5157 15.5 12.5157H17.7619C18.1559 12.0306 19.218 10.7207 19.601 10.2142C20.0234 9.65613 20.6204 9.01562 21.5 9.01562H21.9999C23.1029 9.01562 23.9999 9.91266 23.9999 11.0157V17.5157C23.9999 18.8942 22.8784 20.0157 21.5 20.0157H18.3295L16.9594 23.2127C16.8784 23.4022 16.6938 23.5157 16.4999 23.5157Z" fill="url(#paint3_linear_38_1206)"/>
<path d="M14.5 23.5156C14.448 23.5156 14.3945 23.507 14.342 23.4896C14.0805 23.4026 13.9386 23.1196 14.0261 22.857L15.6841 17.8826C15.9555 17.0656 16.7185 16.5155 17.5811 16.5155H19V15.0155C19 14.739 19.2236 14.5156 19.5 14.5156C19.7765 14.5156 20.0001 14.739 20.0001 15.0155V17.0156C20.0001 17.2921 19.7765 17.5156 19.5 17.5156H17.5811C17.1501 17.5156 16.7685 17.7901 16.633 18.1986L14.9746 23.1736C14.9045 23.3831 14.7095 23.5156 14.5 23.5156Z" fill="url(#paint4_linear_38_1206)"/>
<path d="M19.4995 15.5156C19.3951 15.5156 19.29 15.4832 19.2001 15.4156C18.9791 15.2501 18.9341 14.9366 19.1 14.7161L20.6 12.7161C20.7655 12.4951 21.079 12.4506 21.2996 12.6161C21.5206 12.7816 21.5655 13.0951 21.3996 13.3156L19.8996 15.3156C19.802 15.4466 19.652 15.5156 19.4995 15.5156Z" fill="url(#paint5_linear_38_1206)"/>
<path d="M2.49994 8.01569C1.12152 8.01569 0 6.89417 0 5.51575C0 4.13715 1.12152 3.01562 2.49994 3.01562C3.87854 3.01562 5.00006 4.13715 5.00006 5.51575C5.00006 6.89417 3.87854 8.01569 2.49994 8.01569ZM2.49994 4.01575C1.67303 4.01575 0.999939 4.68866 0.999939 5.51575C0.999939 6.34265 1.67303 7.01575 2.49994 7.01575C3.32703 7.01575 3.99994 6.34265 3.99994 5.51575C3.99994 4.68866 3.32703 4.01575 2.49994 4.01575Z" fill="url(#paint6_linear_38_1206)"/>
<path d="M7.5 23.5157C7.30609 23.5157 7.12152 23.4022 7.04059 23.2127L5.67041 20.0157H2.49994C1.12152 20.0157 0 18.8942 0 17.5157V11.0157C0 9.91266 0.897034 9.01562 2.00006 9.01562H2.49994C3.37958 9.01562 3.97705 9.65613 4.39856 10.2142C4.78198 10.7207 5.84344 12.0306 6.23749 12.5157H8.49994C9.32703 12.5157 9.99994 13.1886 9.99994 14.0157V15.0156C9.99994 15.2921 9.776 15.5157 9.50006 15.5157C9.22394 15.5157 9 15.2921 9 15.0156V14.0157C9 13.7397 8.77551 13.5156 8.49994 13.5156H6C5.84949 13.5156 5.70758 13.4482 5.61255 13.3316C5.55048 13.2556 4.08398 11.4557 3.6015 10.8172C3.17047 10.2477 2.8515 10.0157 2.49994 10.0157H2.00006C1.44855 10.0157 0.999939 10.4642 0.999939 11.0157V17.5157C0.999939 18.3427 1.67303 19.0157 2.49994 19.0157H6C6.19995 19.0157 6.38104 19.1348 6.45941 19.3186L7.95941 22.8187C8.06854 23.0723 7.95044 23.3661 7.69702 23.4751C7.63293 23.5031 7.56592 23.5157 7.5 23.5157Z" fill="url(#paint7_linear_38_1206)"/>
<path d="M9.5 23.5156C9.29053 23.5156 9.09552 23.3831 9.02539 23.1736L7.36737 18.199C7.23151 17.7906 6.84991 17.5156 6.41888 17.5156H4.49994C4.224 17.5156 3.99988 17.2921 3.99988 17.0156V15.0155C3.99988 14.739 4.224 14.5156 4.49994 14.5156C4.77588 14.5156 5 14.739 5 15.0155V16.5155H6.41888C7.28149 16.5155 8.04395 17.065 8.31641 17.8826L9.97443 22.857C10.062 23.119 9.92041 23.4026 9.65839 23.4896C9.60547 23.507 9.552 23.5156 9.5 23.5156Z" fill="url(#paint8_linear_38_1206)"/>
<path d="M4.5006 15.5156C4.34862 15.5156 4.19848 15.4466 4.09997 15.3156L2.59997 13.3156C2.43407 13.0951 2.47912 12.7816 2.70013 12.6161C2.92205 12.4506 3.23498 12.4951 3.40014 12.7161L4.90014 14.7161C5.06603 14.9366 5.02099 15.2501 4.79998 15.4156C4.71007 15.4832 4.60461 15.5156 4.5006 15.5156Z" fill="url(#paint9_linear_38_1206)"/>
<path d="M15.9999 13.5156C15.7234 13.5156 15.5001 13.2922 15.5001 13.0157V9.51562C15.5001 8.4126 14.603 7.51556 13.5 7.51556H10.5C9.39697 7.51556 8.49994 8.4126 8.49994 9.51562V11.0156C8.49994 11.2916 8.276 11.5157 8.00006 11.5157C7.72394 11.5157 7.5 11.2916 7.5 11.0156V9.51562C7.5 7.86108 8.84546 6.51562 10.5 6.51562H13.5C15.1545 6.51562 16.5 7.86108 16.5 9.51562V13.0157C16.5 13.2922 16.2764 13.5156 15.9999 13.5156Z" fill="url(#paint10_linear_38_1206)"/>
<path d="M11.9999 5.51569C10.6215 5.51569 9.5 4.39417 9.5 3.01556C9.5 1.63715 10.6215 0.515625 11.9999 0.515625C13.3784 0.515625 14.4999 1.63715 14.4999 3.01556C14.4999 4.39417 13.3784 5.51569 11.9999 5.51569ZM11.9999 1.51556C11.1729 1.51556 10.4999 2.18866 10.4999 3.01556C10.4999 3.84265 11.1729 4.51556 11.9999 4.51556C12.827 4.51556 13.4999 3.84265 13.4999 3.01556C13.4999 2.18866 12.827 1.51556 11.9999 1.51556Z" fill="url(#paint11_linear_38_1206)"/>
<path d="M11.5 8.51562H12.5001V9.51556H11.5V8.51562Z" fill="url(#paint12_linear_38_1206)"/>
</g>
<defs>
<linearGradient id="paint0_linear_38_1206" x1="11.9667" y1="23.5157" x2="11.9667" y2="16.8656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint1_linear_38_1206" x1="11.5" y1="15.5156" x2="11.5" y2="14.5656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint2_linear_38_1206" x1="21.3332" y1="8.01569" x2="21.3332" y2="3.26563" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint3_linear_38_1206" x1="18.6666" y1="23.5157" x2="18.6666" y2="9.74063" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint4_linear_38_1206" x1="16.8002" y1="23.5156" x2="16.8002" y2="14.9656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint5_linear_38_1206" x1="20.1665" y1="15.5156" x2="20.1665" y2="12.6661" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint6_linear_38_1206" x1="2.33336" y1="8.01569" x2="2.33336" y2="3.26563" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint7_linear_38_1206" x1="4.66664" y1="23.5157" x2="4.66664" y2="9.74063" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint8_linear_38_1206" x1="6.80009" y1="23.5156" x2="6.80008" y2="14.9656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint9_linear_38_1206" x1="3.66671" y1="15.5156" x2="3.66671" y2="12.6661" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint10_linear_38_1206" x1="11.7" y1="13.5156" x2="11.7" y2="6.86562" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint11_linear_38_1206" x1="11.8333" y1="5.51569" x2="11.8333" y2="0.765628" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint12_linear_38_1206" x1="11.9667" y1="9.51556" x2="11.9667" y2="8.56562" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<clipPath id="clip0_38_1206">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}

const Meeting =()=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_38_1206)">
<path d="M11.5 16.5156H12.5001V23.5157H11.5V16.5156Z" fill="url(#paint0_linear_38_1206)"/>
<path d="M4.5 14.5156H19.5V15.5156H4.5V14.5156Z" fill="url(#paint1_linear_38_1206)"/>
<path d="M21.5 8.01569C20.1214 8.01569 18.9999 6.89417 18.9999 5.51575C18.9999 4.13715 20.1214 3.01562 21.5 3.01562C22.8784 3.01562 23.9999 4.13715 23.9999 5.51575C23.9999 6.89417 22.8784 8.01569 21.5 8.01569ZM21.5 4.01575C20.6729 4.01575 20 4.68866 20 5.51575C20 6.34265 20.6729 7.01575 21.5 7.01575C22.3269 7.01575 23 6.34265 23 5.51575C23 4.68866 22.3269 4.01575 21.5 4.01575Z" fill="url(#paint2_linear_38_1206)"/>
<path d="M16.4999 23.5157C16.434 23.5157 16.367 23.5031 16.3029 23.4751C16.049 23.3661 15.9314 23.0723 16.0405 22.8187L17.5405 19.3186C17.6189 19.1348 17.8 19.0157 17.9999 19.0157H21.5C22.3269 19.0157 23 18.3427 23 17.5157V11.0157C23 10.4642 22.5514 10.0157 21.9999 10.0157H21.5C21.149 10.0157 20.8295 10.2477 20.399 10.8177C19.916 11.4557 18.45 13.2556 18.3879 13.3316C18.2924 13.4482 18.1505 13.5156 17.9999 13.5156H15.5C15.2239 13.5156 14.9999 13.7397 14.9999 14.0157V15.0156C14.9999 15.2921 14.7764 15.5157 14.4999 15.5157C14.2234 15.5157 14 15.2921 14 15.0156V14.0157C14 13.1886 14.6729 12.5157 15.5 12.5157H17.7619C18.1559 12.0306 19.218 10.7207 19.601 10.2142C20.0234 9.65613 20.6204 9.01562 21.5 9.01562H21.9999C23.1029 9.01562 23.9999 9.91266 23.9999 11.0157V17.5157C23.9999 18.8942 22.8784 20.0157 21.5 20.0157H18.3295L16.9594 23.2127C16.8784 23.4022 16.6938 23.5157 16.4999 23.5157Z" fill="url(#paint3_linear_38_1206)"/>
<path d="M14.5 23.5156C14.448 23.5156 14.3945 23.507 14.342 23.4896C14.0805 23.4026 13.9386 23.1196 14.0261 22.857L15.6841 17.8826C15.9555 17.0656 16.7185 16.5155 17.5811 16.5155H19V15.0155C19 14.739 19.2236 14.5156 19.5 14.5156C19.7765 14.5156 20.0001 14.739 20.0001 15.0155V17.0156C20.0001 17.2921 19.7765 17.5156 19.5 17.5156H17.5811C17.1501 17.5156 16.7685 17.7901 16.633 18.1986L14.9746 23.1736C14.9045 23.3831 14.7095 23.5156 14.5 23.5156Z" fill="url(#paint4_linear_38_1206)"/>
<path d="M19.4995 15.5156C19.3951 15.5156 19.29 15.4832 19.2001 15.4156C18.9791 15.2501 18.9341 14.9366 19.1 14.7161L20.6 12.7161C20.7655 12.4951 21.079 12.4506 21.2996 12.6161C21.5206 12.7816 21.5655 13.0951 21.3996 13.3156L19.8996 15.3156C19.802 15.4466 19.652 15.5156 19.4995 15.5156Z" fill="url(#paint5_linear_38_1206)"/>
<path d="M2.49994 8.01569C1.12152 8.01569 0 6.89417 0 5.51575C0 4.13715 1.12152 3.01562 2.49994 3.01562C3.87854 3.01562 5.00006 4.13715 5.00006 5.51575C5.00006 6.89417 3.87854 8.01569 2.49994 8.01569ZM2.49994 4.01575C1.67303 4.01575 0.999939 4.68866 0.999939 5.51575C0.999939 6.34265 1.67303 7.01575 2.49994 7.01575C3.32703 7.01575 3.99994 6.34265 3.99994 5.51575C3.99994 4.68866 3.32703 4.01575 2.49994 4.01575Z" fill="url(#paint6_linear_38_1206)"/>
<path d="M7.5 23.5157C7.30609 23.5157 7.12152 23.4022 7.04059 23.2127L5.67041 20.0157H2.49994C1.12152 20.0157 0 18.8942 0 17.5157V11.0157C0 9.91266 0.897034 9.01562 2.00006 9.01562H2.49994C3.37958 9.01562 3.97705 9.65613 4.39856 10.2142C4.78198 10.7207 5.84344 12.0306 6.23749 12.5157H8.49994C9.32703 12.5157 9.99994 13.1886 9.99994 14.0157V15.0156C9.99994 15.2921 9.776 15.5157 9.50006 15.5157C9.22394 15.5157 9 15.2921 9 15.0156V14.0157C9 13.7397 8.77551 13.5156 8.49994 13.5156H6C5.84949 13.5156 5.70758 13.4482 5.61255 13.3316C5.55048 13.2556 4.08398 11.4557 3.6015 10.8172C3.17047 10.2477 2.8515 10.0157 2.49994 10.0157H2.00006C1.44855 10.0157 0.999939 10.4642 0.999939 11.0157V17.5157C0.999939 18.3427 1.67303 19.0157 2.49994 19.0157H6C6.19995 19.0157 6.38104 19.1348 6.45941 19.3186L7.95941 22.8187C8.06854 23.0723 7.95044 23.3661 7.69702 23.4751C7.63293 23.5031 7.56592 23.5157 7.5 23.5157Z" fill="url(#paint7_linear_38_1206)"/>
<path d="M9.5 23.5156C9.29053 23.5156 9.09552 23.3831 9.02539 23.1736L7.36737 18.199C7.23151 17.7906 6.84991 17.5156 6.41888 17.5156H4.49994C4.224 17.5156 3.99988 17.2921 3.99988 17.0156V15.0155C3.99988 14.739 4.224 14.5156 4.49994 14.5156C4.77588 14.5156 5 14.739 5 15.0155V16.5155H6.41888C7.28149 16.5155 8.04395 17.065 8.31641 17.8826L9.97443 22.857C10.062 23.119 9.92041 23.4026 9.65839 23.4896C9.60547 23.507 9.552 23.5156 9.5 23.5156Z" fill="url(#paint8_linear_38_1206)"/>
<path d="M4.5006 15.5156C4.34862 15.5156 4.19848 15.4466 4.09997 15.3156L2.59997 13.3156C2.43407 13.0951 2.47912 12.7816 2.70013 12.6161C2.92205 12.4506 3.23498 12.4951 3.40014 12.7161L4.90014 14.7161C5.06603 14.9366 5.02099 15.2501 4.79998 15.4156C4.71007 15.4832 4.60461 15.5156 4.5006 15.5156Z" fill="url(#paint9_linear_38_1206)"/>
<path d="M15.9999 13.5156C15.7234 13.5156 15.5001 13.2922 15.5001 13.0157V9.51562C15.5001 8.4126 14.603 7.51556 13.5 7.51556H10.5C9.39697 7.51556 8.49994 8.4126 8.49994 9.51562V11.0156C8.49994 11.2916 8.276 11.5157 8.00006 11.5157C7.72394 11.5157 7.5 11.2916 7.5 11.0156V9.51562C7.5 7.86108 8.84546 6.51562 10.5 6.51562H13.5C15.1545 6.51562 16.5 7.86108 16.5 9.51562V13.0157C16.5 13.2922 16.2764 13.5156 15.9999 13.5156Z" fill="url(#paint10_linear_38_1206)"/>
<path d="M11.9999 5.51569C10.6215 5.51569 9.5 4.39417 9.5 3.01556C9.5 1.63715 10.6215 0.515625 11.9999 0.515625C13.3784 0.515625 14.4999 1.63715 14.4999 3.01556C14.4999 4.39417 13.3784 5.51569 11.9999 5.51569ZM11.9999 1.51556C11.1729 1.51556 10.4999 2.18866 10.4999 3.01556C10.4999 3.84265 11.1729 4.51556 11.9999 4.51556C12.827 4.51556 13.4999 3.84265 13.4999 3.01556C13.4999 2.18866 12.827 1.51556 11.9999 1.51556Z" fill="url(#paint11_linear_38_1206)"/>
<path d="M11.5 8.51562H12.5001V9.51556H11.5V8.51562Z" fill="url(#paint12_linear_38_1206)"/>
</g>
<defs>
<linearGradient id="paint0_linear_38_1206" x1="11.9667" y1="23.5157" x2="11.9667" y2="16.8656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint1_linear_38_1206" x1="11.5" y1="15.5156" x2="11.5" y2="14.5656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint2_linear_38_1206" x1="21.3332" y1="8.01569" x2="21.3332" y2="3.26563" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint3_linear_38_1206" x1="18.6666" y1="23.5157" x2="18.6666" y2="9.74063" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint4_linear_38_1206" x1="16.8002" y1="23.5156" x2="16.8002" y2="14.9656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint5_linear_38_1206" x1="20.1665" y1="15.5156" x2="20.1665" y2="12.6661" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint6_linear_38_1206" x1="2.33336" y1="8.01569" x2="2.33336" y2="3.26563" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint7_linear_38_1206" x1="4.66664" y1="23.5157" x2="4.66664" y2="9.74063" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint8_linear_38_1206" x1="6.80009" y1="23.5156" x2="6.80008" y2="14.9656" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint9_linear_38_1206" x1="3.66671" y1="15.5156" x2="3.66671" y2="12.6661" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint10_linear_38_1206" x1="11.7" y1="13.5156" x2="11.7" y2="6.86562" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint11_linear_38_1206" x1="11.8333" y1="5.51569" x2="11.8333" y2="0.765628" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint12_linear_38_1206" x1="11.9667" y1="9.51556" x2="11.9667" y2="8.56562" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<clipPath id="clip0_38_1206">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )
}

const Tasks=()=>{
    return(
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6686 8.87988H17.835" stroke="url(#paint0_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.77393 8.87988L7.51198 9.62988L9.72614 7.37988" stroke="url(#paint1_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6686 15.8799H17.835" stroke="url(#paint2_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.77393 15.8799L7.51198 16.6299L9.72614 14.3799" stroke="url(#paint3_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.35225 22H15.2567C20.177 22 22.1452 20 22.1452 15V9C22.1452 4 20.177 2 15.2567 2H9.35225C4.43189 2 2.46375 4 2.46375 9V15C2.46375 20 4.43189 22 9.35225 22Z" stroke="url(#paint4_linear_38_956)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_38_956" x1="15.0796" y1="9.87988" x2="15.0796" y2="8.92988" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint1_linear_38_956" x1="8.15163" y1="9.62988" x2="8.15163" y2="7.49238" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint2_linear_38_956" x1="15.0796" y1="16.8799" x2="15.0796" y2="15.9299" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint3_linear_38_956" x1="8.15163" y1="16.6299" x2="8.15163" y2="14.4924" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint4_linear_38_956" x1="11.6484" y1="22" x2="11.6484" y2="3" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
</defs>
</svg>

    )
}

const BackArrowDouble=()=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9629 17.9297L12.9996 11.9664L18.9658 6.00015" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9626 17.9297L5.99932 11.9664L11.9655 6.00015" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
}

// const SearchBar=()=>{
//     return(
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M8.6805 15.3334C12.3164 15.3334 15.2638 12.386 15.2638 8.75008C15.2638 5.11421 12.3164 2.16675 8.6805 2.16675C5.04463 2.16675 2.09717 5.11421 2.09717 8.75008C2.09717 12.386 5.04463 15.3334 8.6805 15.3334Z" stroke="#828282" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M13.3472 13.4167L17.1805 17.2501" stroke="#828282" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     )
// }

const Notification=()=>{
    return(
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#BDBDBD" />
        <path d="M26.3923 25.4349H13.6074V18.0111C13.6074 14.5072 16.4479 11.6667 19.9518 11.6667V11.6667C23.4557 11.6667 26.2962 14.5072 26.2962 18.0111V25.4349H26.3923Z" stroke="#828282" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.6667 25.4351H28.3334" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.2495 28.3342H21.7495" stroke="#828282" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="14" r="3.5" fill="url(#paint0_linear_36_577)" stroke="#FEFEFE" />
        <defs>
          <linearGradient id="paint0_linear_36_577" x1="25.7333" y1="18" x2="25.7333" y2="10.4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F33F41" />
            <stop offset="1" stopColor="#FB6D72" />
          </linearGradient>
        </defs>
      </svg>
    )
}

const AddIcon=()=>{
    return(
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1V13" stroke="url(#paint0_linear_95_2598)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7L0.999999 7" stroke="url(#paint1_linear_95_2598)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_95_2598" x1="7.46667" y1="13" x2="7.46666" y2="1.6" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint1_linear_95_2598" x1="0.999999" y1="6.53333" x2="12.4" y2="6.53334" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
</defs>
</svg>
    )
}

const SearchBar =()=>{
    return(
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6805 14.3334C11.3164 14.3334 14.2638 11.386 14.2638 7.75008C14.2638 4.11421 11.3164 1.16675 7.6805 1.16675C4.04463 1.16675 1.09717 4.11421 1.09717 7.75008C1.09717 11.386 4.04463 14.3334 7.6805 14.3334Z" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3472 12.4167L16.1805 16.2501" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

export default {Team, Chat, AttendanceSvg, Setting, Dashboard, MyTasks, Logout, MyLeave, Calender, Meeting, Tasks, BackArrowDouble, Notification, AddIcon, SearchBar}






