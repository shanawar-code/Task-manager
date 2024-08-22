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

const BackArrowDouble=({className})=>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M18.9629 17.9297L12.9996 11.9664L18.9658 6.00015" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9626 17.9297L5.99932 11.9664L11.9655 6.00015" stroke="#333333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
}


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

const CalendarIcon =()=>{
    return(
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 1.5V3.75" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 1.5V3.75" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.125 6.81738H15.875" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 6.375V12.75C16.25 15 15.125 16.5 12.5 16.5H6.5C3.875 16.5 2.75 15 2.75 12.75V6.375C2.75 4.125 3.875 2.625 6.5 2.625H12.5C15.125 2.625 16.25 4.125 16.25 6.375Z" stroke="#4F4F4F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.271 10.2749H12.2778" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.271 12.5249H12.2778" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.49661 10.2749H9.50335" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.49661 12.5249H9.50335" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.72073 10.2749H6.72747" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.72073 12.5249H6.72747" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    )
}


const PasswordHide = () =>{
    return(
        <>
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#828282" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 2 20 20"/><path d="m6.71277 6.7226c-3.04798 2.07267-4.71277 5.2774-4.71277 5.2774s3.63636 7 10 7c2.0503 0 3.8174-.7266 5.2711-1.7116m-6.2711-12.23018c.3254-.03809.6588-.05822 1-.05822 6.3636 0 10 7 10 7s-.6918 1.3317-2 2.8335"/><path d="m14 14.2362c-.5308.475-1.2316.7639-2 .7639-1.6569 0-3-1.3431-3-3 0-.8237.33193-1.5698.86932-2.11192"/></g></svg>
        </>
    )
}
const PasswordShow = () =>{
    return(
        <>
<svg fill="#828282" height="24" viewBox="0 0 8 8" width="24"  xmlns="http://www.w3.org/2000/svg"><path d="m4.03 0c-2.53 0-4.03 3-4.03 3s1.5 3 4.03 3c2.47 0 3.97-3 3.97-3s-1.5-3-3.97-3zm-.03 1c1.11 0 2 .9 2 2 0 1.11-.89 2-2 2-1.1 0-2-.89-2-2 0-1.1.9-2 2-2zm0 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.04-.19-.06-.28-.08.16-.24.28-.44.28-.28 0-.5-.22-.5-.5 0-.2.12-.36.28-.44-.09-.03-.18-.06-.28-.06z" transform="translate(0 1)"/></svg>        </>
    )
}

const Verticaldots = () =>{
    return(
        <>
        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-8.74225e-08 14C-3.934e-08 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12C0.9 12 -1.35505e-07 12.9 -8.74225e-08 14ZM-6.11959e-07 2C-5.63877e-07 3.1 0.899999 4 2 4C3.1 4 4 3.1 4 2C4 0.899999 3.1 -1.35505e-07 2 -8.74228e-08C0.899999 -3.93403e-08 -6.60042e-07 0.9 -6.11959e-07 2ZM-3.49691e-07 8C-3.01609e-07 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 -3.97774e-07 6.9 -3.49691e-07 8Z" fill="#333333"/>
</svg>
        </>
    )
}


const PlayButton =()=>{
    return(
        <>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_40_1231)">
<rect width="36" height="36" rx="6" fill="#EFFFFA"/>
<mask id="mask0_40_1231"  maskUnits="userSpaceOnUse" x="10" y="10" width="16" height="16">
<rect x="10" y="10" width="16" height="16" fill="white"/>
</mask>
<g mask="url(#mask0_40_1231)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6666 17.9999C24.6666 21.6818 21.6818 24.6666 17.9999 24.6666C14.318 24.6666 11.3333 21.6818 11.3333 17.9999C11.3333 14.318 14.318 11.3333 17.9999 11.3333C21.6818 11.3333 24.6666 14.318 24.6666 17.9999Z" stroke="#0BB783" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5484 20.0068C17.4404 20.0521 17.1651 20.1481 17.1058 20.1495C16.9798 20.1535 16.8584 20.0828 16.7998 19.9695C16.7771 19.9255 16.7104 19.6381 16.6891 19.5101C16.6258 19.1208 16.5931 18.5161 16.5938 17.9081C16.5931 17.2701 16.6284 16.6368 16.6991 16.2515C16.7178 16.1475 16.7724 15.9081 16.7884 15.8695C16.8184 15.7975 16.8731 15.7408 16.9391 15.7055C16.9898 15.6781 17.0478 15.6635 17.1058 15.6655C17.1651 15.6668 17.4064 15.7515 17.4891 15.7841C18.1411 16.0375 19.5204 16.9561 20.0271 17.4961C20.0724 17.5448 20.1971 17.6755 20.2178 17.7021C20.2651 17.7621 20.2884 17.8348 20.2884 17.9081C20.2884 17.9761 20.2678 18.0455 20.2251 18.1035C20.2031 18.1335 20.0758 18.2668 20.0338 18.3115C19.5478 18.8355 18.2251 19.7221 17.5484 20.0068Z" stroke="#0BB783" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_40_1231">
<rect width="36" height="36" fill="white"/>
</clipPath>
</defs>
</svg>
        </>
    )
}

const Message = () =>{
    return(
        <>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666523 3.96077V16.2524C0.665542 16.3906 0.703325 16.5264 0.775585 16.6442C0.847845 16.7621 0.951688 16.8573 1.07533 16.9192C1.19898 16.981 1.33748 17.0069 1.47512 16.994C1.61275 16.9811 1.74402 16.9299 1.85402 16.8462L4.38526 14.9191C4.51468 14.8229 4.67197 14.7717 4.83318 14.7732H14.4165C15.1957 14.7623 15.939 14.4443 16.4851 13.8885C17.0312 13.3326 17.336 12.5837 17.3331 11.8045V3.96077C17.3332 3.18334 17.0273 2.43712 16.4815 1.88351C15.9356 1.3299 15.1938 1.01339 14.4165 1.00244H3.58318C2.80583 1.01339 2.06403 1.3299 1.51821 1.88351C0.972399 2.43712 0.666445 3.18334 0.666523 3.96077V3.96077Z" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00448 9.45044H6.19727" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8121 6.20044H6.19751" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </>
    )
}

const DocumentIcon=()=>{
    return(
        <>
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7018 10.0923L9.75903 15.0446C9.29977 15.5059 8.75392 15.8719 8.15282 16.1217C7.55172 16.3714 6.90721 16.5 6.25629 16.5C5.60537 16.5 4.96086 16.3714 4.35976 16.1217C3.75866 15.8719 3.21281 15.5059 2.75355 15.0446C2.29198 14.5845 1.92576 14.0379 1.67588 13.436C1.42599 12.8341 1.29736 12.1888 1.29736 11.5371C1.29736 10.8854 1.42599 10.2401 1.67588 9.63825C1.92576 9.03636 2.29198 8.48971 2.75355 8.02964L8.3047 2.46898C8.92662 1.84848 9.76926 1.5 10.6478 1.5C11.5263 1.5 12.369 1.84848 12.9909 2.46898V2.46898C13.3004 2.77565 13.5461 3.14061 13.7138 3.54277C13.8814 3.94494 13.9678 4.37634 13.9678 4.81206C13.9678 5.24778 13.8814 5.67918 13.7138 6.08135C13.5461 6.48351 13.3004 6.84847 12.9909 7.15514L7.67735 12.4782C7.53322 12.6242 7.36154 12.7401 7.17226 12.8192C6.98298 12.8983 6.77987 12.9391 6.57472 12.9391C6.36957 12.9391 6.16646 12.8983 5.97718 12.8192C5.7879 12.7401 5.61622 12.6242 5.47209 12.4782V12.4782C5.17897 12.1842 5.01436 11.7859 5.01436 11.3708C5.01436 10.9556 5.17897 10.5574 5.47209 10.2634L10.0442 5.6818" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </>
    )
}

const ShareIcon = () =>{
    return(
        <>
        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66019 0.888916C9.33743 0.888805 9.01858 0.961464 8.72613 1.10177C8.43369 1.24207 8.17476 1.4466 7.96763 1.70093C7.7605 1.95526 7.6102 2.25319 7.52734 2.57371C7.44449 2.89422 7.43109 3.22951 7.48809 3.55593L4.27746 5.86586C4.2614 5.87727 4.24599 5.88961 4.2313 5.90282C3.90558 5.6412 3.51486 5.47889 3.1037 5.4344C2.69254 5.38991 2.27748 5.46503 1.90587 5.6512C1.53425 5.83737 1.22103 6.12709 1.00192 6.48733C0.782805 6.84757 0.666626 7.26382 0.666626 7.68862C0.666626 8.11342 0.782805 8.52967 1.00192 8.8899C1.22103 9.25014 1.53425 9.53986 1.90587 9.72603C2.27748 9.9122 2.69254 9.98732 3.1037 9.94284C3.51486 9.89835 3.90558 9.73604 4.2313 9.47442C4.24597 9.48787 4.26138 9.50044 4.27746 9.51208L7.48809 11.822C7.39278 12.3679 7.49558 12.9308 7.77703 13.4041C8.05849 13.8774 8.49906 14.2282 9.01533 14.3901C9.53161 14.5521 10.0878 14.5139 10.5785 14.2829C11.0692 14.0518 11.4605 13.6439 11.6782 13.1364C11.8958 12.6288 11.9249 12.0569 11.7597 11.5288C11.5946 11.0008 11.2468 10.5533 10.7821 10.271C10.3174 9.98876 9.76818 9.89135 9.23831 9.99724C8.70844 10.1031 8.23474 10.405 7.9069 10.8456L4.86664 8.65911C5.0024 8.36479 5.07842 8.03629 5.07842 7.68897C5.07842 7.34164 5.0024 7.01245 4.86664 6.71883L7.90758 4.53165C8.13537 4.83801 8.43544 5.07962 8.77943 5.23361C9.12342 5.38761 9.49995 5.4489 9.87343 5.41171C10.2469 5.37451 10.605 5.24005 10.9138 5.02104C11.2226 4.80203 11.4719 4.50571 11.6382 4.1601C11.8045 3.81449 11.8822 3.43101 11.864 3.04592C11.8459 2.66084 11.7324 2.28687 11.5344 1.9594C11.3364 1.63192 11.0604 1.36175 10.7324 1.17443C10.4044 0.987115 10.0354 0.888846 9.66019 0.888916ZM8.47232 3.1556C8.47232 2.8319 8.59747 2.52145 8.82024 2.29256C9.04301 2.06367 9.34515 1.93508 9.66019 1.93508C9.97523 1.93508 10.2774 2.06367 10.5001 2.29256C10.7229 2.52145 10.8481 2.8319 10.8481 3.1556C10.8481 3.4793 10.7229 3.78975 10.5001 4.01864C10.2774 4.24753 9.97523 4.37612 9.66019 4.37612C9.34515 4.37612 9.04301 4.24753 8.82024 4.01864C8.59747 3.78975 8.47232 3.4793 8.47232 3.1556ZM2.87238 6.46844C2.55734 6.46844 2.2552 6.59703 2.03243 6.82593C1.80966 7.05482 1.68451 7.36526 1.68451 7.68897C1.68451 8.01267 1.80966 8.32311 2.03243 8.55201C2.2552 8.7809 2.55734 8.90949 2.87238 8.90949C3.18742 8.90949 3.48956 8.7809 3.71233 8.55201C3.9351 8.32311 4.06025 8.01267 4.06025 7.68897C4.06025 7.36526 3.9351 7.05482 3.71233 6.82593C3.48956 6.59703 3.18742 6.46844 2.87238 6.46844ZM9.66019 11.0018C9.34515 11.0018 9.04301 11.1304 8.82024 11.3593C8.59747 11.5882 8.47232 11.8986 8.47232 12.2223C8.47232 12.546 8.59747 12.8565 8.82024 13.0854C9.04301 13.3143 9.34515 13.4429 9.66019 13.4429C9.97523 13.4429 10.2774 13.3143 10.5001 13.0854C10.7229 12.8565 10.8481 12.546 10.8481 12.2223C10.8481 11.8986 10.7229 11.5882 10.5001 11.3593C10.2774 11.1304 9.97523 11.0018 9.66019 11.0018Z" fill="#497CFF"/>
</svg>
        </>
    )
}


const WritingPencil = () =>{
    return(
        <>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 20H19M2.87425 11.7531C2.39436 12.204 2.12487 12.8153 2.125 13.4525V16.8334H5.75087C6.43037 16.8334 7.08175 16.5801 7.56213 16.1283L18.2496 6.09543C18.7297 5.64456 18.9994 5.03332 18.9994 4.39601C18.9994 3.75871 18.7297 3.14747 18.2496 2.6966L17.1944 1.7044C16.9564 1.48099 16.6738 1.30379 16.3628 1.18293C16.0518 1.06206 15.7184 0.999902 15.3818 1C15.0451 1.0001 14.7118 1.06245 14.4009 1.1835C14.0899 1.30455 13.8075 1.48191 13.5696 1.70545L2.87425 11.7531Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </>
    )
}

const Four=()=>{
    return(
        <>
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.662 4.092V5.178L0.214 5.184V4.098L5.662 4.092ZM3.49 7.356H2.404L2.398 1.908H3.484L3.49 7.356ZM10.9089 0.323999H12.3609V5.7H13.7469V6.942H12.3609V9H10.9449L10.9509 6.942H6.91291V5.7L10.9089 0.323999ZM8.28091 5.7H10.9389V2.136L8.28091 5.7Z" fill="#333333"/>
</svg>
        </>
    )
}


const AddPeople = () =>{
    return(
        <>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.5 15C1.5 11.9662 3.96616 9.5 7 9.5C10.0338 9.5 12.5 11.9662 12.5 15" stroke="#828282" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 4V10" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 7H12.5" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </>
    )
}

const ShareGray = () =>{
    return(
        <>
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.242 1.59438e-07C10.8385 -0.000138898 10.4399 0.0906849 10.0744 0.266064C9.70882 0.441444 9.38517 0.697107 9.12625 1.01502C8.86734 1.33293 8.67947 1.70534 8.5759 2.10599C8.47232 2.50663 8.45558 2.92575 8.52683 3.33377L4.51354 6.22117C4.49347 6.23544 4.47421 6.25086 4.45584 6.26738C4.04869 5.94035 3.56029 5.73746 3.04634 5.68185C2.53239 5.62624 2.01357 5.72015 1.54905 5.95286C1.08453 6.18557 0.693 6.54772 0.419112 6.99802C0.145224 7.44831 0 7.96863 0 8.49963C0 9.03063 0.145224 9.55094 0.419112 10.0012C0.693 10.4515 1.08453 10.8137 1.54905 11.0464C2.01357 11.2791 2.53239 11.373 3.04634 11.3174C3.56029 11.2618 4.04869 11.0589 4.45584 10.7319C4.47418 10.7487 4.49344 10.7644 4.51354 10.779L8.52683 13.6664C8.40769 14.3488 8.53619 15.0524 8.88801 15.644C9.23983 16.2356 9.79054 16.6741 10.4359 16.8765C11.0812 17.079 11.7764 17.0312 12.3898 16.7424C13.0032 16.4536 13.4923 15.9437 13.7644 15.3093C14.0365 14.6749 14.0728 13.96 13.8664 13.2999C13.66 12.6398 13.2252 12.0804 12.6444 11.7276C12.0635 11.3748 11.3769 11.253 10.7146 11.3854C10.0523 11.5178 9.46014 11.895 9.05034 12.4458L5.25002 9.71274C5.41971 9.34484 5.51474 8.93422 5.51474 8.50006C5.51474 8.06591 5.41971 7.65442 5.25002 7.28739L9.05119 4.55342C9.33592 4.93637 9.71102 5.23838 10.141 5.43087C10.571 5.62336 11.0417 5.69999 11.5085 5.65349C11.9753 5.607 12.4229 5.43892 12.8089 5.16516C13.1949 4.8914 13.5066 4.52099 13.7144 4.08898C13.9223 3.65696 14.0195 3.17761 13.9968 2.69626C13.9741 2.2149 13.8323 1.74745 13.5847 1.3381C13.3372 0.928751 12.9922 0.591037 12.5822 0.356893C12.1723 0.122749 11.711 -8.73186e-05 11.242 1.59438e-07ZM9.75712 2.83335C9.75712 2.42873 9.91356 2.04067 10.192 1.75456C10.4705 1.46844 10.8482 1.3077 11.242 1.3077C11.6358 1.3077 12.0134 1.46844 12.2919 1.75456C12.5703 2.04067 12.7268 2.42873 12.7268 2.83335C12.7268 3.23798 12.5703 3.62604 12.2919 3.91215C12.0134 4.19827 11.6358 4.35901 11.242 4.35901C10.8482 4.35901 10.4705 4.19827 10.192 3.91215C9.91356 3.62604 9.75712 3.23798 9.75712 2.83335ZM2.75719 6.97441C2.36339 6.97441 1.98572 7.13515 1.70726 7.42126C1.4288 7.70738 1.27236 8.09543 1.27236 8.50006C1.27236 8.90469 1.4288 9.29275 1.70726 9.57886C1.98572 9.86498 2.36339 10.0257 2.75719 10.0257C3.151 10.0257 3.52867 9.86498 3.80713 9.57886C4.08559 9.29275 4.24203 8.90469 4.24203 8.50006C4.24203 8.09543 4.08559 7.70738 3.80713 7.42126C3.52867 7.13515 3.151 6.97441 2.75719 6.97441ZM11.242 12.6411C10.8482 12.6411 10.4705 12.8019 10.192 13.088C9.91356 13.3741 9.75712 13.7621 9.75712 14.1668C9.75712 14.5714 9.91356 14.9595 10.192 15.2456C10.4705 15.5317 10.8482 15.6924 11.242 15.6924C11.6358 15.6924 12.0134 15.5317 12.2919 15.2456C12.5703 14.9595 12.7268 14.5714 12.7268 14.1668C12.7268 13.7621 12.5703 13.3741 12.2919 13.088C12.0134 12.8019 11.6358 12.6411 11.242 12.6411Z" fill="#828282"/>
</svg>
        </>
    )
}


const Oction_download=()=>{
    return(
        <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="12" fill="white"/>
<path d="M6.5625 16C6.71168 16 6.85476 16.0499 6.96025 16.1387C7.06574 16.2276 7.125 16.3481 7.125 16.4737V17.8947C7.125 17.9819 7.209 18.0526 7.3125 18.0526H16.6875C16.7372 18.0526 16.7849 18.036 16.8201 18.0064C16.8552 17.9768 16.875 17.9366 16.875 17.8947V16.4737C16.875 16.3481 16.9343 16.2276 17.0398 16.1387C17.1452 16.0499 17.2883 16 17.4375 16C17.5867 16 17.7298 16.0499 17.8352 16.1387C17.9407 16.2276 18 16.3481 18 16.4737V17.8947C18 18.1879 17.8617 18.469 17.6156 18.6763C17.3694 18.8836 17.0356 19 16.6875 19H7.3125C6.9644 19 6.63056 18.8836 6.38442 18.6763C6.13828 18.469 6 18.1879 6 17.8947V16.4737C6 16.3481 6.05926 16.2276 6.16475 16.1387C6.27024 16.0499 6.41332 16 6.5625 16Z" fill="#497CFF"/>
<path d="M7.15668 11.1422C7.25714 11.0515 7.39331 11.0006 7.53529 11.0006C7.67726 11.0006 7.81343 11.0515 7.91389 11.1422L11.4642 14.3481V6.48389C11.4642 6.35556 11.5206 6.23248 11.6211 6.14173C11.7216 6.05098 11.8578 6 11.9999 6C12.142 6 12.2783 6.05098 12.3788 6.14173C12.4792 6.23248 12.5357 6.35556 12.5357 6.48389V14.3481L16.086 11.1422C16.1864 11.0515 16.3226 11.0005 16.4646 11.0005C16.6066 11.0005 16.7428 11.0515 16.8432 11.1422C16.9436 11.2328 17 11.3558 17 11.4841C17 11.6124 16.9436 11.7354 16.8432 11.8261L12.3785 15.8585C12.2781 15.9491 12.1419 16 11.9999 16C11.858 16 11.7218 15.9491 11.6213 15.8585L7.15668 11.8261C7.05635 11.7353 7 11.6123 7 11.4841C7 11.3559 7.05635 11.2329 7.15668 11.1422Z" fill="#497CFF"/>
</svg>
        </>
    )
}


const DocumentRedIcon =()=>{
    return(
        <>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.90425 5.11046L8.88925 4.09646L3.81425 9.17046C3.61438 9.3704 3.45584 9.60774 3.3477 9.86895C3.23955 10.1302 3.18392 10.4101 3.18396 10.6928C3.18401 10.9755 3.23974 11.2555 3.34797 11.5166C3.4562 11.7778 3.61481 12.0151 3.81475 12.215C4.01469 12.4148 4.25204 12.5734 4.51324 12.6815C4.77445 12.7897 5.0544 12.8453 5.3371 12.8452C5.61981 12.8452 5.89974 12.7895 6.16091 12.6812C6.42208 12.573 6.65938 12.4144 6.85925 12.2145L12.9493 6.12546C13.6221 5.45247 14.0001 4.53976 14 3.5881C13.9999 2.63645 13.6217 1.72381 12.9487 1.05096C12.2758 0.378103 11.363 0.00015039 10.4114 0.000244158C9.45974 0.000337926 8.5471 0.378471 7.87425 1.05146L1.48025 7.44446L1.46625 7.45746C-0.48875 9.41246 -0.48875 12.5805 1.46625 14.5345C3.42125 16.4885 6.58925 16.4885 8.54425 14.5345L8.55725 14.5205L8.55825 14.5215L12.9233 10.1575L11.9082 9.14346L7.54325 13.5065L7.53025 13.5195C6.86039 14.188 5.95265 14.5635 5.00625 14.5635C4.05985 14.5635 3.15211 14.188 2.48225 13.5195C2.15021 13.1867 1.88712 12.7917 1.70807 12.357C1.52901 11.9224 1.43751 11.4566 1.43881 10.9866C1.44011 10.5165 1.53419 10.0513 1.71564 9.61761C1.8971 9.18395 2.16237 8.79038 2.49625 8.45946L2.49525 8.45846L8.89025 2.06546C9.72925 1.22546 11.0953 1.22546 11.9353 2.06546C12.7753 2.90546 12.7743 4.27046 11.9353 5.10946L5.84525 11.1985C5.70896 11.3238 5.52951 11.3917 5.34437 11.3879C5.15923 11.384 4.98272 11.3088 4.85172 11.178C4.72072 11.0471 4.64534 10.8707 4.64134 10.6855C4.63734 10.5004 4.70502 10.3209 4.83025 10.1845L9.90525 5.10946L9.90425 5.11046Z" fill="url(#paint0_linear_52_1468)"/>
<defs>
<linearGradient id="paint0_linear_52_1468" x1="6.53332" y1="16" x2="6.53332" y2="0.80023" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
</defs>
</svg>
        </>
    )
}

const WritingPencilBlue=()=>{
    return(
        <>
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 15H14M2.35362 8.92334C2.00704 9.25561 1.81241 9.70599 1.8125 10.1755V12.6667H4.43119C4.92194 12.6667 5.39238 12.48 5.73931 12.1472L13.4581 4.75452C13.8048 4.42231 13.9995 3.97192 13.9995 3.50233C13.9995 3.03273 13.8048 2.58234 13.4581 2.25013L12.6959 1.51903C12.5241 1.35442 12.32 1.22385 12.0954 1.13479C11.8707 1.04573 11.63 0.999928 11.3868 1C11.1437 1.00007 10.903 1.04602 10.6784 1.13521C10.4538 1.2244 10.2498 1.35509 10.0781 1.51981L2.35362 8.92334Z" stroke="#497CFF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </>
    )
}

const ShareIconBlue=()=>{
    return(
        <>
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5024 9.00561C10.1285 9.00749 9.7598 9.09328 9.42349 9.25666C9.08718 9.42003 8.79185 9.65682 8.55928 9.94955L4.90781 7.66711C5.04089 7.23768 5.04089 6.77803 4.90781 6.3486L8.55928 4.06616C8.9299 4.525 9.45098 4.83788 10.0302 4.94937C10.6095 5.06086 11.2095 4.96377 11.724 4.67529C12.2385 4.38681 12.6343 3.92556 12.8412 3.37326C13.0482 2.82096 13.0529 2.21325 12.8546 1.65778C12.6563 1.10231 12.2678 0.634943 11.7579 0.338462C11.2479 0.0419804 10.6495 -0.0644755 10.0686 0.0379525C9.48769 0.14038 8.96178 0.445081 8.58404 0.898078C8.2063 1.35107 8.00111 1.92313 8.00482 2.5129C8.00724 2.73624 8.04087 2.95814 8.10472 3.17216L4.45325 5.4546C4.13088 5.04885 3.69025 4.75341 3.19244 4.60925C2.69463 4.46508 2.16429 4.47933 1.67493 4.65001C1.18558 4.82069 0.761453 5.13936 0.461341 5.56183C0.16123 5.9843 0 6.48966 0 7.00785C0 7.52605 0.16123 8.0314 0.461341 8.45388C0.761453 8.87635 1.18558 9.19502 1.67493 9.3657C2.16429 9.53638 2.69463 9.55063 3.19244 9.40646C3.69025 9.2623 4.13088 8.96686 4.45325 8.56111L8.10472 10.8435C8.04087 11.0576 8.00724 11.2795 8.00482 11.5028C8.00482 11.9967 8.1513 12.4795 8.42574 12.8902C8.70018 13.3008 9.09025 13.6209 9.54662 13.8099C10.003 13.9989 10.5052 14.0484 10.9897 13.952C11.4741 13.8557 11.9192 13.6178 12.2685 13.2686C12.6178 12.9193 12.8556 12.4744 12.952 11.99C13.0484 11.5056 12.9989 11.0035 12.8099 10.5472C12.6208 10.0909 12.3007 9.70086 11.89 9.42646C11.4793 9.15207 10.9964 9.00561 10.5024 9.00561ZM10.5024 1.01459C10.7988 1.01459 11.0885 1.10246 11.335 1.2671C11.5814 1.43174 11.7735 1.66574 11.8869 1.93952C12.0003 2.2133 12.03 2.51457 11.9722 2.80521C11.9143 3.09586 11.7716 3.36283 11.562 3.57237C11.3525 3.78192 11.0855 3.92462 10.7948 3.98243C10.5041 4.04024 10.2028 4.01057 9.92894 3.89717C9.65511 3.78376 9.42107 3.59172 9.25641 3.34532C9.09174 3.09893 9.00385 2.80924 9.00385 2.5129C9.00385 2.11553 9.16174 1.73442 9.44277 1.45343C9.7238 1.17245 10.105 1.01459 10.5024 1.01459ZM2.51012 8.50617C2.21374 8.50617 1.924 8.4183 1.67757 8.25366C1.43113 8.08902 1.23906 7.85502 1.12564 7.58123C1.01222 7.30745 0.982539 7.00619 1.04036 6.71555C1.09818 6.4249 1.24091 6.15793 1.45048 5.94838C1.66006 5.73884 1.92708 5.59614 2.21777 5.53833C2.50846 5.48051 2.80977 5.51019 3.08359 5.62359C3.35742 5.73699 3.59146 5.92904 3.75612 6.17543C3.92079 6.42183 4.00868 6.71151 4.00868 7.00785C4.00868 7.40523 3.85079 7.78634 3.56976 8.06732C3.28873 8.34831 2.90756 8.50617 2.51012 8.50617ZM10.5024 13.0011C10.206 13.0011 9.91629 12.9132 9.66986 12.7486C9.42342 12.584 9.23135 12.35 9.11792 12.0762C9.0045 11.8024 8.97483 11.5011 9.03265 11.2105C9.09047 10.9199 9.23319 10.6529 9.44277 10.4433C9.65235 10.2338 9.91936 10.0911 10.2101 10.0333C10.5007 9.97546 10.8021 10.0051 11.0759 10.1185C11.3497 10.2319 11.5837 10.424 11.7484 10.6704C11.9131 10.9168 12.001 11.2065 12.001 11.5028C12.001 11.9002 11.8431 12.2813 11.562 12.5623C11.281 12.8433 10.8998 13.0011 10.5024 13.0011Z" fill="#497CFF"/>
</svg>
        </>
    )
}

const ReplyIcon=()=>{
    return(
        <>
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5.5H8.77778C10.428 5.5 12.0107 6.13214 13.1776 7.25736C14.3444 8.38258 15 9.9087 15 11.5V13M1 5.5L5.66667 10M1 5.5L5.66667 1" stroke="#497CFF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </>
    )
}

const AddIconGray =()=>(
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1V13" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7L0.999999 7" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)


const AddIconRed=()=>(
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1V13" stroke="url(#paint0_linear_44_1607)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7L0.999999 7" stroke="url(#paint1_linear_44_1607)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_44_1607" x1="7.46667" y1="13" x2="7.46666" y2="1.6" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint1_linear_44_1607" x1="0.999999" y1="6.53333" x2="12.4" y2="6.53334" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
</defs>
</svg>
)

const OneIcon=()=>(
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" fill="#497CFF"/>
<path d="M10.555 16V8.076H8.637V7.145C9.23433 7.145 9.70333 7.09833 10.044 7.005C10.3893 6.907 10.6367 6.76467 10.786 6.578C10.94 6.38667 11.0263 6.15333 11.045 5.878H12.088V16H10.555Z" fill="#FEFEFE"/>
</svg>

)

const SendIcon=()=>(
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="20" fill="url(#paint0_linear_65_2355)" fill-opacity="0.1"/>
<path d="M29.4354 10.582C28.9352 10.0686 28.1949 9.87734 27.5046 10.0787L11.408 14.7595C10.6797 14.9619 10.1635 15.5427 10.0244 16.2806C9.88237 17.0315 10.3786 17.9848 11.0268 18.3834L16.0599 21.4768C16.5761 21.7939 17.2424 21.7144 17.6696 21.2835L23.4329 15.4843C23.723 15.1823 24.2032 15.1823 24.4934 15.4843C24.7835 15.7762 24.7835 16.2493 24.4934 16.5513L18.72 22.3516C18.2918 22.7814 18.2118 23.4508 18.5269 23.9702L21.6022 29.0538C21.9623 29.6577 22.5826 30 23.2628 30C23.3429 30 23.4329 30 23.513 29.9899C24.2933 29.8893 24.9135 29.3558 25.1436 28.6008L29.9156 12.5248C30.1257 11.8403 29.9356 11.0954 29.4354 10.582Z" fill="url(#paint1_linear_65_2355)"/>
<defs>
<linearGradient id="paint0_linear_65_2355" x1="18.6667" y1="40" x2="18.6667" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
<linearGradient id="paint1_linear_65_2355" x1="19.3333" y1="30" x2="19.3333" y2="11" gradientUnits="userSpaceOnUse">
<stop stop-color="#F33F41"/>
<stop offset="1" stop-color="#FB6D72"/>
</linearGradient>
</defs>
</svg>
)

const DocumentChatIcon=()=>(
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3192 5.74909L10.1592 4.60832L4.35915 10.3167C4.13073 10.5416 3.94955 10.8086 3.82595 11.1025C3.70236 11.3964 3.63877 11.7113 3.63883 12.0294C3.63888 12.3474 3.70257 12.6623 3.82626 12.9562C3.94995 13.25 4.13123 13.5169 4.35973 13.7418C4.58823 13.9667 4.85948 14.145 5.158 14.2667C5.45653 14.3883 5.77647 14.4509 6.09956 14.4509C6.42266 14.4508 6.74258 14.3881 7.04106 14.2664C7.33954 14.1446 7.61074 13.9662 7.83916 13.7412L14.7992 6.89099C15.5682 6.13386 16.0001 5.10704 16 4.03641C15.9999 2.96579 15.5677 1.93905 14.7986 1.18207C14.0295 0.425099 12.9864 -0.000105471 11.8988 1.96242e-08C10.8112 0.000105511 9.76814 0.425512 8.99917 1.18264L1.69172 8.37489L1.67572 8.38951C-0.558573 10.5889 -0.558573 14.153 1.67572 16.3513C3.91001 18.5496 7.53059 18.5496 9.76488 16.3513L9.77974 16.3355L9.78088 16.3367L14.7695 11.4271L13.6095 10.2863L8.62088 15.1948L8.60602 15.2094C7.84046 15.9615 6.80304 16.3839 5.72144 16.3839C4.63984 16.3839 3.60243 15.9615 2.83686 15.2094C2.45739 14.835 2.15672 14.3906 1.95208 13.9016C1.74744 13.4126 1.64287 12.8887 1.64436 12.3598C1.64584 11.831 1.75336 11.3076 1.96074 10.8197C2.16812 10.3319 2.47129 9.88908 2.85286 9.51679L2.85172 9.51566L10.1603 2.32341C11.1192 1.37839 12.6803 1.37839 13.6403 2.32341C14.6003 3.26842 14.5992 4.80408 13.6403 5.74797L6.6803 12.5982C6.52454 12.7393 6.31945 12.8156 6.10786 12.8113C5.89628 12.807 5.69456 12.7224 5.54484 12.5752C5.39512 12.4279 5.30897 12.2294 5.3044 12.0212C5.29983 11.8129 5.37718 11.6109 5.5203 11.4574L11.3203 5.74797L11.3192 5.74909Z" fill="#4F4F4F"/>
</svg>

)

const GalleryIcon=()=>(
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3005 0C17.6855 0 19.9605 2.371 19.9605 5.899V14.051C19.9605 17.579 17.6855 19.95 14.3005 19.95H5.65049C2.27049 19.95 0.000488281 17.579 0.000488281 14.051V5.899C0.000488281 2.371 2.27049 0 5.65049 0H14.3005ZM14.3005 1.5H5.65049C3.12949 1.5 1.50049 3.227 1.50049 5.899V14.051C1.50049 16.724 3.12949 18.45 5.65049 18.45H14.3005C16.8275 18.45 18.4605 16.724 18.4605 14.051V5.899C18.4605 3.227 16.8275 1.5 14.3005 1.5ZM14.9395 10.0994C14.9458 10.1045 14.952 10.1097 14.9651 10.1218L14.9844 10.1403C14.9883 10.1441 14.9926 10.1483 14.9973 10.1529L15.0531 10.2083C15.2335 10.3889 15.732 10.898 17.2175 12.4234C17.5065 12.7194 17.5015 13.1944 17.2045 13.4834C16.9085 13.7744 16.4325 13.7654 16.1435 13.4694C16.1435 13.4694 14.0945 11.3664 13.9485 11.2244C13.7935 11.0974 13.5445 11.0234 13.2995 11.0474C13.0505 11.0724 12.8265 11.1914 12.6675 11.3844C10.3435 14.2034 10.3155 14.2304 10.2775 14.2674C9.41949 15.1094 8.03449 15.0954 7.19149 14.2354C7.19149 14.2354 6.26149 13.2914 6.24549 13.2724C6.01449 13.0584 5.60249 13.0724 5.35549 13.3334L3.82549 14.9464C3.67749 15.1024 3.47949 15.1804 3.28149 15.1804C3.09549 15.1804 2.91049 15.1124 2.76549 14.9744C2.46449 14.6904 2.45249 14.2144 2.73749 13.9154L4.26549 12.3024C5.07449 11.4434 6.43949 11.4014 7.30249 12.2114L8.26049 13.1834C8.52749 13.4534 8.96149 13.4584 9.22949 13.1944C9.33049 13.0754 11.5085 10.4304 11.5085 10.4304C11.9225 9.9284 12.5065 9.6184 13.1555 9.5544C13.8055 9.4974 14.4365 9.6864 14.9395 10.0994ZM6.55869 4.6289C7.94069 4.6299 9.06369 5.7539 9.06369 7.1329C9.06369 8.5139 7.93969 9.6379 6.55869 9.6379C5.17769 9.6379 4.05469 8.5139 4.05469 7.1329C4.05469 5.7519 5.17769 4.6289 6.55869 4.6289ZM6.55769 6.1289C6.00469 6.1289 5.55469 6.5789 5.55469 7.1329C5.55469 7.6869 6.00469 8.1379 6.55869 8.1379C7.11269 8.1379 7.56369 7.6869 7.56369 7.1329C7.56369 6.5799 7.11269 6.1299 6.55769 6.1289Z" fill="#4F4F4F"/>
</svg>
)

const VideoCallIcon=()=>(
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4051 4.5C14.8271 4.5 16.5181 6.16904 16.5181 8.56091V15.4391C16.5181 17.831 14.8271 19.5 12.4051 19.5H6.61304C4.19102 19.5 2.5 17.831 2.5 15.4391V8.56091C2.5 6.16904 4.19102 4.5 6.61304 4.5H12.4051ZM20.458 6.87898C20.897 6.65563 21.412 6.67898 21.831 6.94294C22.25 7.20589 22.5 7.66274 22.5 8.16223V15.8384C22.5 16.3389 22.25 16.7947 21.831 17.0577C21.602 17.2008 21.346 17.2739 21.088 17.2739C20.873 17.2739 20.658 17.2231 20.457 17.1206L18.976 16.3734C18.428 16.0952 18.088 15.5369 18.088 14.9165V9.08305C18.088 8.46173 18.428 7.90335 18.976 7.62721L20.458 6.87898Z" fill="#497CFF"/>
</svg>
)

const AudioCallIcon=()=>(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z" fill="#497CFF"/>
</svg>
)

const SearchChatIcon=()=>(
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.73876 0C15.1088 0 19.4768 4.368 19.4768 9.738C19.4768 12.2715 18.5045 14.5823 16.9134 16.3165L20.0442 19.4407C20.3372 19.7337 20.3382 20.2077 20.0452 20.5007C19.8992 20.6487 19.7062 20.7217 19.5142 20.7217C19.3232 20.7217 19.1312 20.6487 18.9842 20.5027L15.8156 17.343C14.1488 18.6778 12.0354 19.477 9.73876 19.477C4.36876 19.477 -0.000244141 15.108 -0.000244141 9.738C-0.000244141 4.368 4.36876 0 9.73876 0ZM9.73876 1.5C5.19576 1.5 1.49976 5.195 1.49976 9.738C1.49976 14.281 5.19576 17.977 9.73876 17.977C14.2808 17.977 17.9768 14.281 17.9768 9.738C17.9768 5.195 14.2808 1.5 9.73876 1.5Z" fill="#333333"/>
</svg>
)

const BlueIcon=()=>(
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.80314 11.598L15.6456 0.755569L14.9385 0.0484619L4.44959 10.5373L0.707107 6.79487L0 7.50198L4.09603 11.598L4.44959 11.9516L4.80314 11.598ZM4.8903 7.72139L10.6729 1.93876L9.96582 1.23165L4.18319 7.01429L4.8903 7.72139Z" fill="#497CFF"/>
</svg>
)

const Count1=()=>(
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="23" height="23" rx="11.5" stroke="#E0E0E0"/>
<path d="M11.6283 16.5V9.816H10.0203V8.946C10.5283 8.946 10.9303 8.904 11.2263 8.82C11.5263 8.732 11.7443 8.604 11.8803 8.436C12.0203 8.268 12.1003 8.064 12.1203 7.824H13.1163V16.5H11.6283Z" fill="#828282"/>
</svg>
)

const Count2=()=>(
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="23" height="23" rx="11.5" stroke="#E0E0E0"/>
<path d="M9.00488 16.5V15.72V15.318C9.00488 14.874 9.08688 14.492 9.25088 14.172C9.41488 13.848 9.63288 13.566 9.90488 13.326C10.1769 13.086 10.4749 12.874 10.7989 12.69C11.1269 12.502 11.4509 12.326 11.7709 12.162C12.0949 11.994 12.3929 11.822 12.6649 11.646C12.9369 11.466 13.1549 11.266 13.3189 11.046C13.4869 10.826 13.5709 10.564 13.5709 10.26C13.5709 9.872 13.4329 9.556 13.1569 9.312C12.8849 9.064 12.5149 8.94 12.0469 8.94C11.5509 8.94 11.1409 9.082 10.8169 9.366C10.4969 9.65 10.3069 10.05 10.2469 10.566H8.83088C8.83888 10.038 8.96488 9.558 9.20888 9.126C9.45288 8.694 9.81488 8.35 10.2949 8.094C10.7749 7.834 11.3729 7.704 12.0889 7.704C12.7089 7.704 13.2429 7.812 13.6909 8.028C14.1429 8.24 14.4909 8.538 14.7349 8.922C14.9829 9.302 15.1069 9.746 15.1069 10.254C15.1069 10.698 15.0249 11.078 14.8609 11.394C14.7009 11.71 14.4869 11.984 14.2189 12.216C13.9549 12.444 13.6629 12.646 13.3429 12.822C13.0269 12.998 12.7089 13.164 12.3889 13.32C12.0729 13.472 11.7809 13.632 11.5129 13.8C11.2489 13.964 11.0349 14.152 10.8709 14.364C10.7109 14.576 10.6309 14.83 10.6309 15.126V15.252H15.1249V16.5H9.00488Z" fill="#828282"/>
</svg>
)

const Count3=()=>(
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1" width="23" height="23" rx="11.5" stroke="#E0E0E0"/>
<path d="M8.73352 10.428C8.73352 9.836 8.87552 9.338 9.15952 8.934C9.44352 8.526 9.82352 8.22 10.2995 8.016C10.7795 7.808 11.3115 7.704 11.8955 7.704C12.5235 7.704 13.0795 7.79 13.5635 7.962C14.0515 8.13 14.4335 8.384 14.7095 8.724C14.9895 9.064 15.1295 9.486 15.1295 9.99C15.1295 10.418 14.9995 10.8 14.7395 11.136C14.4795 11.472 14.0695 11.736 13.5095 11.928C13.8575 12.024 14.1695 12.168 14.4455 12.36C14.7215 12.548 14.9395 12.784 15.0995 13.068C15.2635 13.352 15.3455 13.686 15.3455 14.07C15.3455 14.482 15.2555 14.848 15.0755 15.168C14.8995 15.488 14.6515 15.758 14.3315 15.978C14.0155 16.194 13.6455 16.358 13.2215 16.47C12.7975 16.578 12.3415 16.632 11.8535 16.632C11.2015 16.628 10.6395 16.516 10.1675 16.296C9.69552 16.076 9.32752 15.762 9.06352 15.354C8.80352 14.946 8.66752 14.462 8.65552 13.902H10.0775C10.1615 14.418 10.3655 14.802 10.6895 15.054C11.0175 15.302 11.4155 15.426 11.8835 15.426C12.2715 15.426 12.6075 15.368 12.8915 15.252C13.1755 15.132 13.3935 14.968 13.5455 14.76C13.7015 14.552 13.7795 14.31 13.7795 14.034C13.7795 13.742 13.6955 13.492 13.5275 13.284C13.3635 13.076 13.1375 12.916 12.8495 12.804C12.5615 12.692 12.2375 12.632 11.8775 12.624L11.0735 12.6V11.412L11.8175 11.382C12.1615 11.37 12.4635 11.304 12.7235 11.184C12.9875 11.064 13.1935 10.906 13.3415 10.71C13.4895 10.514 13.5635 10.294 13.5635 10.05C13.5635 9.826 13.4935 9.624 13.3535 9.444C13.2175 9.264 13.0235 9.124 12.7715 9.024C12.5195 8.92 12.2215 8.868 11.8775 8.868C11.5855 8.868 11.3115 8.92 11.0555 9.024C10.7995 9.128 10.5875 9.296 10.4195 9.528C10.2555 9.756 10.1655 10.056 10.1495 10.428H8.73352Z" fill="#828282"/>
</svg>
)

const VerticalGreenLine=()=>(
    <svg width="4" height="50" viewBox="0 0 4 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.265869" width="3.59493" height="50" rx="1.79747" fill="#00B037"/>
</svg>
)

const AddWhiteIcon =()=>(
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1V13" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7L0.999999 7" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const CrossIcon =()=>(
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1677 1.71451C18.5623 1.32812 18.569 0.694988 18.1826 0.300375C17.7962 -0.094238 17.1631 -0.100903 16.7685 0.28549L9.0424 7.85059L1.69931 0.66049C1.3047 0.274097 0.67157 0.280762 0.285177 0.675375C-0.101215 1.06999 -0.0945511 1.70312 0.300062 2.08951L7.61306 9.25015L0.300375 16.4105C-0.094238 16.7969 -0.100903 17.43 0.28549 17.8246C0.671882 18.2192 1.30501 18.2259 1.69962 17.8395L9.0424 10.6497L16.7681 18.2145C17.1628 18.6009 17.7959 18.5942 18.1823 18.1996C18.5687 17.805 18.562 17.1719 18.1674 16.7855L10.4717 9.25015L18.1677 1.71451Z" fill="#333333"/>
</svg>
)

const DocsIcon=()=>(
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="42" rx="12" fill="#E0E0E0" fill-opacity="0.4"/>
<path d="M25.191 11C28.28 11 30 12.78 30 15.83V26.16C30 29.26 28.28 31 25.191 31H16.81C13.77 31 12 29.26 12 26.16V15.83C12 12.78 13.77 11 16.81 11H25.191ZM17.08 24.74C16.78 24.71 16.49 24.85 16.33 25.11C16.17 25.36 16.17 25.69 16.33 25.95C16.49 26.2 16.78 26.35 17.08 26.31H24.92C25.319 26.27 25.62 25.929 25.62 25.53C25.62 25.12 25.319 24.78 24.92 24.74H17.08ZM24.92 20.179H17.08C16.649 20.179 16.3 20.53 16.3 20.96C16.3 21.39 16.649 21.74 17.08 21.74H24.92C25.35 21.74 25.7 21.39 25.7 20.96C25.7 20.53 25.35 20.179 24.92 20.179ZM20.069 15.65H17.08V15.66C16.649 15.66 16.3 16.01 16.3 16.44C16.3 16.87 16.649 17.22 17.08 17.22H20.069C20.5 17.22 20.85 16.87 20.85 16.429C20.85 16 20.5 15.65 20.069 15.65Z" fill="#60C26F"/>
</svg>
)

const LogoFragment=()=>(
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
<rect width="42" height="42" rx="12" />
<rect width="42" height="42" rx="12" fill="#E0E0E0" fill-opacity="0.4"/>
<defs>
<pattern id="pattern0_66_1775" patternContentUnits="objectBoundingBox" width="1" height="1">
<use transform="translate(0 -0.166667) scale(0.00277778)"/>
</pattern>
</defs>
</svg>
)

const VideoIcon =()=>(
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="42" rx="12" fill="#E0E0E0" fill-opacity="0.4"/>
<path d="M21.1148 15.3176L18.7939 13H16.8615L19.1791 15.3176H21.1148ZM26.1352 15.3176L23.8176 13H21.8852L24.2027 15.3176H26.1352ZM26.9088 13L29.2264 15.3176H30V13H26.9088ZM26.9088 18.4088H23.8176L26.1352 16.0912H24.2027L21.8852 18.4088H18.7939L21.1115 16.0912H19.1791L16.8615 18.4088H13.7736L16.0912 16.0912H13V28.4561C13 29.3061 13.6939 30 14.5439 30H28.4527C29.3061 30 29.9967 29.3061 29.9967 28.4561V16.0912H29.223L26.9088 18.4088ZM13.7736 13H13V15.3176H16.0912L13.7736 13Z" fill="#497CFF"/>
</svg>
)

const ZipIcon =()=>(
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="42" rx="12" fill="#E0E0E0" fill-opacity="0.4"/>
<path d="M21.83 15H28C28.7956 15 29.5587 15.3161 30.1213 15.8787C30.6839 16.4413 31 17.2044 31 18V26C31 26.7956 30.6839 27.5587 30.1213 28.1213C29.5587 28.6839 28.7956 29 28 29H14C13.2044 29 12.4413 28.6839 11.8787 28.1213C11.3161 27.5587 11 26.7956 11 26V16C11 15.2044 11.3161 14.4413 11.8787 13.8787C12.4413 13.3161 13.2044 13 14 13H19C20.306 13 21.417 13.835 21.83 15ZM25 19V21H27V19H25ZM23 17V19H25V17H23ZM23 21V23H25V21H23ZM25 23V25H27V23H25ZM23 25V27H25V25H23Z" fill="#F4A012"/>
</svg>
)

const CopyIcon =()=>(
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7692 0H8.02523C6.32862 0 4.98462 0 3.93323 0.142326C2.85138 0.289302 1.97538 0.59814 1.284 1.29395C0.593538 1.9907 0.287077 2.87349 0.141231 3.96372C1.10039e-07 5.02419 0 6.37767 0 8.08744V13.7209C2.22824e-05 14.552 0.294402 15.3558 0.830158 15.9876C1.36591 16.6195 2.10786 17.0378 2.92246 17.1674C3.04892 17.8781 3.29354 18.4847 3.78277 18.9786C4.33846 19.5386 5.03815 19.7786 5.86892 19.8921C6.66923 20 7.68738 20 8.94923 20H11.82C13.0818 20 14.1 20 14.9003 19.8921C15.7311 19.7786 16.4308 19.5386 16.9865 18.9786C17.5422 18.4186 17.7803 17.7135 17.8929 16.8763C18 16.0698 18 15.0437 18 13.7721V9.0186C18 7.74698 18 6.72093 17.8929 5.91442C17.7803 5.07721 17.5422 4.37209 16.9865 3.81209C16.4963 3.31907 15.8945 3.07256 15.1892 2.94512C15.0606 2.1242 14.6455 1.3765 14.0185 0.836593C13.3915 0.296684 12.5939 2.24552e-05 11.7692 0ZM13.7354 2.81023C13.595 2.39721 13.33 2.03875 12.9775 1.78505C12.6249 1.53134 12.2024 1.39508 11.7692 1.39535H8.07692C6.31662 1.39535 5.06677 1.39721 4.11692 1.52558C3.18923 1.65116 2.65385 1.88744 2.26338 2.28093C1.87292 2.67442 1.63846 3.21395 1.51385 4.14977C1.38646 5.10605 1.38462 6.36558 1.38462 8.13953V13.7209C1.38435 14.1575 1.51956 14.5832 1.77132 14.9385C2.02307 15.2938 2.37877 15.5609 2.78862 15.7023C2.76923 15.1349 2.76923 14.493 2.76923 13.7721V9.0186C2.76923 7.74698 2.76923 6.72093 2.87723 5.91442C2.988 5.07721 3.228 4.37209 3.78277 3.81209C4.33846 3.25209 5.03815 3.01209 5.86892 2.89954C6.66923 2.7907 7.68738 2.7907 8.94923 2.7907H11.82C12.5354 2.7907 13.1723 2.7907 13.7354 2.81023ZM4.76123 4.8C5.01692 4.54233 5.37508 4.37488 6.05354 4.28279C6.74954 4.18884 7.67446 4.18698 8.99908 4.18698H11.7683C13.0929 4.18698 14.0169 4.18884 14.7148 4.28279C15.3923 4.37488 15.7505 4.54326 16.0062 4.8C16.2618 5.05767 16.428 5.4186 16.5194 6.10233C16.6126 6.80372 16.6145 7.73581 16.6145 9.0707V13.7219C16.6145 15.0567 16.6126 15.9879 16.5194 16.6912C16.428 17.374 16.2609 17.7349 16.0062 17.9926C15.7505 18.2502 15.3923 18.4177 14.7138 18.5098C14.0169 18.6037 13.0929 18.6056 11.7683 18.6056H8.99908C7.67446 18.6056 6.74954 18.6037 6.05262 18.5098C5.37508 18.4177 5.01692 18.2493 4.76123 17.9926C4.50554 17.7349 4.33939 17.374 4.248 16.6902C4.15477 15.9879 4.15292 15.0567 4.15292 13.7219V9.0707C4.15292 7.73581 4.15477 6.80372 4.248 6.1014C4.33939 5.4186 4.50646 5.05767 4.76123 4.8Z" fill="#497CFF"/>
</svg>
)


const AddIconWhite=()=>(
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1V13" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7L0.999999 7" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const TimerIcon=()=>(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2918 11.0417C17.2918 15.0667 14.0252 18.3333 10.0002 18.3333C5.97516 18.3333 2.7085 15.0667 2.7085 11.0417C2.7085 7.01667 5.97516 3.75 10.0002 3.75C14.0252 3.75 17.2918 7.01667 17.2918 11.0417Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6.6665V10.8332" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 1.6665H12.5" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const TodayLineIcon=()=>(
    <svg width="504" height="28" viewBox="0 0 504 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<line opacity="0.5" x1="-4.37114e-08" y1="13.5" x2="214" y2="13.5" stroke="#E0E0E0"/>
<path d="M232.322 10.068V8.878H239.98V10.068H236.893V19H235.591V10.068H232.322ZM243.57 19.14C242.902 19.14 242.319 18.9977 241.82 18.713C241.32 18.4237 240.933 18.0013 240.658 17.446C240.382 16.8907 240.245 16.2117 240.245 15.409C240.245 14.653 240.373 13.9903 240.63 13.421C240.886 12.8517 241.262 12.4107 241.757 12.098C242.256 11.7807 242.86 11.622 243.57 11.622C244.237 11.622 244.816 11.769 245.306 12.063C245.8 12.3523 246.183 12.7793 246.454 13.344C246.724 13.9087 246.86 14.597 246.86 15.409C246.86 16.1463 246.734 16.795 246.482 17.355C246.234 17.915 245.866 18.3537 245.376 18.671C244.89 18.9837 244.288 19.14 243.57 19.14ZM243.57 18.118C244.004 18.118 244.37 18.0083 244.669 17.789C244.967 17.5697 245.194 17.2547 245.348 16.844C245.502 16.4333 245.579 15.9457 245.579 15.381C245.579 14.863 245.511 14.3987 245.376 13.988C245.24 13.5727 245.023 13.2437 244.725 13.001C244.431 12.7583 244.046 12.637 243.57 12.637C243.131 12.637 242.76 12.7467 242.457 12.966C242.153 13.1807 241.922 13.4933 241.764 13.904C241.61 14.3147 241.533 14.807 241.533 15.381C241.533 15.8897 241.603 16.3517 241.743 16.767C241.883 17.1823 242.102 17.5113 242.401 17.754C242.699 17.9967 243.089 18.118 243.57 18.118ZM251.445 19.14C250.507 19.14 249.763 18.818 249.212 18.174C248.661 17.53 248.386 16.5897 248.386 15.353C248.386 14.6017 248.496 13.946 248.715 13.386C248.939 12.826 249.27 12.392 249.709 12.084C250.148 11.776 250.694 11.622 251.347 11.622C251.692 11.622 251.998 11.6663 252.264 11.755C252.535 11.8437 252.768 11.9557 252.964 12.091C253.16 12.2263 253.319 12.3663 253.44 12.511C253.566 12.6557 253.659 12.7887 253.72 12.91V8.598H255.022V19H254.035L253.895 17.516C253.848 17.656 253.774 17.8193 253.671 18.006C253.568 18.188 253.424 18.3677 253.237 18.545C253.05 18.7177 252.81 18.86 252.516 18.972C252.227 19.084 251.87 19.14 251.445 19.14ZM251.676 18.146C252.409 18.146 252.931 17.9243 253.244 17.481C253.561 17.033 253.72 16.3027 253.72 15.29C253.715 14.7253 253.643 14.2447 253.503 13.848C253.368 13.4513 253.153 13.1503 252.859 12.945C252.57 12.735 252.185 12.63 251.704 12.63C251.107 12.63 250.621 12.8423 250.248 13.267C249.875 13.6917 249.688 14.366 249.688 15.29C249.688 16.1953 249.856 16.8977 250.192 17.397C250.533 17.8963 251.027 18.146 251.676 18.146ZM259.442 19.14C258.976 19.14 258.563 19.0583 258.203 18.895C257.844 18.727 257.562 18.4867 257.356 18.174C257.156 17.8613 257.055 17.4833 257.055 17.04C257.055 16.2373 257.335 15.64 257.895 15.248C258.455 14.856 259.354 14.646 260.59 14.618L261.885 14.583V14.016C261.885 13.5727 261.752 13.2227 261.486 12.966C261.22 12.7047 260.807 12.574 260.247 12.574C259.832 12.5787 259.466 12.6767 259.148 12.868C258.836 13.0593 258.633 13.372 258.539 13.806H257.398C257.426 13.3347 257.559 12.938 257.797 12.616C258.035 12.2893 258.367 12.042 258.791 11.874C259.221 11.706 259.727 11.622 260.31 11.622C260.94 11.622 261.463 11.7107 261.878 11.888C262.298 12.0653 262.611 12.3267 262.816 12.672C263.026 13.0173 263.131 13.442 263.131 13.946V19H262.025L261.934 17.642C261.654 18.2067 261.297 18.5987 260.863 18.818C260.434 19.0327 259.96 19.14 259.442 19.14ZM259.834 18.209C260.077 18.209 260.317 18.1647 260.555 18.076C260.798 17.9873 261.02 17.8683 261.22 17.719C261.421 17.565 261.58 17.3947 261.696 17.208C261.818 17.0167 261.881 16.8207 261.885 16.62V15.381L260.807 15.402C260.257 15.4113 259.795 15.4673 259.421 15.57C259.053 15.6727 258.775 15.8337 258.588 16.053C258.406 16.2723 258.315 16.5593 258.315 16.914C258.315 17.32 258.455 17.6373 258.735 17.866C259.02 18.0947 259.386 18.209 259.834 18.209ZM266.104 21.31C265.68 21.31 265.388 21.2797 265.229 21.219C265.071 21.1583 264.991 21.128 264.991 21.128V20.288L265.726 20.302C265.997 20.3113 266.221 20.2927 266.398 20.246C266.576 20.1993 266.718 20.1363 266.825 20.057C266.933 19.9777 267.014 19.889 267.07 19.791C267.131 19.693 267.18 19.5997 267.217 19.511L267.469 18.825L264.641 11.762H265.95L268.085 17.348L270.206 11.762H271.473L268.421 19.546C268.235 20.0033 268.025 20.3603 267.791 20.617C267.563 20.8737 267.306 21.0533 267.021 21.156C266.741 21.2587 266.436 21.31 266.104 21.31Z" fill="#828282"/>
<line opacity="0.5" x1="290" y1="13.5" x2="504" y2="13.5" stroke="#E0E0E0"/>
</svg>
)

const Email=()=>(
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9C8.5 9 9.03125 8.84375 9.46875 8.5L16 3.4375V10.5C16 11.3438 15.3125 12 14.5 12H1.5C0.65625 12 0 11.3438 0 10.5V3.4375L6.5 8.5C6.9375 8.84375 7.46875 9 8 9ZM0.5 2.5625C0.1875 2.3125 0 1.90625 0 1.5C0 0.6875 0.65625 0 1.5 0H14.5C15.3125 0 16 0.6875 16 1.5C16 1.90625 15.7812 2.3125 15.4688 2.5625L8.84375 7.71875C8.34375 8.09375 7.625 8.09375 7.125 7.71875L0.5 2.5625Z" fill="#BBBFC5"/>
</svg>
)

const TextMessage=()=>(
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33329 1.16675H4.66663C2.33329 1.16675 1.16663 2.33341 1.16663 4.66675V12.2501C1.16663 12.5709 1.42913 12.8334 1.74996 12.8334H9.33329C11.6666 12.8334 12.8333 11.6667 12.8333 9.33341V4.66675C12.8333 2.33341 11.6666 1.16675 9.33329 1.16675Z" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.08337 5.54175H9.91671" stroke="#BDBDBD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.08337 8.4585H8.16671" stroke="#BDBDBD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const HorizontalLine=()=>(
    <svg width="280" height="2" viewBox="0 0 280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.0003" y="0.752986" width="278.113" height="0.494253" fill="#FEFEFE" stroke="#E0E0E0" stroke-width="0.494253"/>
</svg>
)

const PDF=()=>(
    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 12H2V13H2.8C3.1 13 3.3 12.8 3.3 12.5C3.3 12.2 3.1 12 2.8 12ZM8 0H0V16H13V5L8 0ZM4.2 12.6C4.2 13.4 3.6 14 2.8 14H2V15H1V11H2.8C3.6 11 4.2 11.6 4.2 12.4V12.6ZM8.3 13.1C8.3 14.1 7.5 15 6.4 15H5V11H6.4C7.4 11 8.3 11.8 8.3 12.9V13.1ZM12 12H10V13H11.5V14H10V15H9V11H12V12ZM12 10H1V1H8V5H12V10ZM6.4 12H6V14H6.4C7 14 7.4 13.6 7.4 13C7.4 12.4 6.9 12 6.4 12Z" fill="#F54D4D"/>
</svg>
)


const ArrowLeft=({className})=>(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="14"
    height="10"
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    className={className}
  >
    <defs></defs>
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <polygon
        points="50.36,0 54.64,4.28 13.92,45 54.64,85.72 50.36,90 5.36,45"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(0,0,0)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1 0 0 1 0 0)"
      />
      <polygon
        points="80.36,0 84.64,4.28 43.92,45 84.64,85.72 80.36,90 35.36,45"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(0,0,0)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1 0 0 1 0 0)"
      />
    </g>
  </svg>
)

const Phone=()=>(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.74586 2.52816L2.81379 0.462136C2.95966 0.315619 3.13305 0.199367 3.32398 0.120059C3.51492 0.0407514 3.71964 -4.95526e-05 3.92639 4.51641e-08C4.34775 4.51641e-08 4.74386 0.165049 5.04094 0.462136L7.26615 2.68738C7.41267 2.83325 7.52891 3.00664 7.60822 3.19758C7.68753 3.38852 7.72833 3.59325 7.72828 3.8C7.72828 4.22136 7.56323 4.61748 7.26615 4.91456L5.63899 6.54175C6.01986 7.38129 6.54941 8.14503 7.20207 8.79612C7.85308 9.45038 8.61675 9.98186 9.45641 10.365L11.0836 8.73786C11.2294 8.59135 11.4028 8.4751 11.5938 8.39579C11.7847 8.31648 11.9894 8.27568 12.1962 8.27573C12.6175 8.27573 13.0136 8.44078 13.3107 8.73786L15.5379 10.9612C15.6846 11.1073 15.8009 11.281 15.8802 11.4723C15.9595 11.6636 16.0002 11.8687 16 12.0757C16 12.4971 15.835 12.8932 15.5379 13.1903L13.4738 15.2544C13 15.7301 12.3457 16 11.6739 16C11.5321 16 11.3962 15.9883 11.2622 15.965C8.64477 15.534 6.04869 14.1417 3.95358 12.0485C1.8604 9.95728 0.470136 7.36311 0.0332489 4.73786C-0.0987873 3.93592 0.167228 3.11068 0.74586 2.52816Z" fill="#BDBDBD"/>
</svg>
)

const Cross=()=>(
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.07107 3.07102C-0.832162 6.97425 -0.832162 13.3099 3.07107 17.2132C6.9743 21.1164 13.31 21.1164 17.2132 17.2132C21.1164 13.3099 21.1164 6.97425 17.2132 3.07102C13.31 -0.832207 6.9743 -0.832208 3.07107 3.07102ZM14.3848 7.31366L11.5563 10.1421L14.3848 12.9705L12.9706 14.3847L10.1421 11.5563L7.31371 14.3847L5.89949 12.9705L8.72792 10.1421L5.89949 7.31366L7.31371 5.89945L10.1421 8.72788L12.9706 5.89945L14.3848 7.31366Z" fill="#828282"/>
</svg>
)

const AddIconBlue=()=>(
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1V13" stroke="#497CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7L0.999999 7" stroke="#497CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)
  
export default {AddIconBlue, Cross, Phone, ArrowLeft, PDF, HorizontalLine, TextMessage,Email,TodayLineIcon ,TimerIcon, AddIconWhite, CopyIcon, ZipIcon, VideoIcon , LogoFragment, DocsIcon, CrossIcon, AddWhiteIcon, VerticalGreenLine ,Count3, Count2, Count1, DocumentChatIcon, BlueIcon, SearchChatIcon ,AudioCallIcon ,VideoCallIcon ,GalleryIcon,SendIcon,OneIcon, AddIconRed, AddIconGray, ReplyIcon, Team, Chat, AttendanceSvg, Setting, Dashboard, MyTasks, Logout, MyLeave, Calender, Meeting, Tasks, BackArrowDouble, Notification, AddIcon, SearchBar, CalendarIcon, PasswordHide, PasswordShow, Verticaldots, PlayButton, Message, DocumentIcon, ShareIcon, WritingPencil, Four, ShareGray, AddPeople, Oction_download, DocumentRedIcon, WritingPencilBlue, ShareIconBlue}

