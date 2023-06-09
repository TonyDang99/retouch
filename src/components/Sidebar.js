import React from 'react';
import logo from "../Assets/logo.png";
import intro from "../Assets/intro.png";
import info from "../Assets/information.png";

function sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_logo'>
                <img src={logo} alt="My Image" />
            </div>

            <div className='sidebar_menu'>
                <div className='sidebar_menuorder'>
                    <a href='' className='sidebar_icon-link'>
                        <div className='sidebar_icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.213 2C19.6747 2 22 4.16273 22 7.38122V16.6188C22 19.8654 19.7462 21.9769 16.2582 21.997L7.78805 22C4.32645 22 2 19.8373 2 16.6188V7.38122C2 4.1336 4.25378 2.0231 7.74181 2.00402L16.2119 2H16.213ZM16.213 3.50678L7.74732 3.5108C5.18415 3.52486 3.65153 4.97137 3.65153 7.38122V16.6188C3.65153 19.0447 5.19846 20.4932 7.78695 20.4932L16.2527 20.4902C18.8159 20.4761 20.3485 19.0276 20.3485 16.6188V7.38122C20.3485 4.9553 18.8026 3.50678 16.213 3.50678ZM16.0007 15.5346C16.4565 15.5346 16.8264 15.8721 16.8264 16.288C16.8264 16.7039 16.4565 17.0414 16.0007 17.0414H8.05131C7.59549 17.0414 7.22554 16.7039 7.22554 16.288C7.22554 15.8721 7.59549 15.5346 8.05131 15.5346H16.0007ZM16.0007 11.3292C16.4565 11.3292 16.8264 11.6667 16.8264 12.0826C16.8264 12.4984 16.4565 12.836 16.0007 12.836H8.05131C7.59549 12.836 7.22554 12.4984 7.22554 12.0826C7.22554 11.6667 7.59549 11.3292 8.05131 11.3292H16.0007ZM11.0843 7.1335C11.5401 7.1335 11.91 7.47102 11.91 7.88689C11.91 8.30276 11.5401 8.64028 11.0843 8.64028H8.05098C7.59516 8.64028 7.22521 8.30276 7.22521 7.88689C7.22521 7.47102 7.59516 7.1335 8.05098 7.1335H11.0843Z" fill="white" />
                            </svg>
                        </div>
                        <span className='sidebar_text'>My project</span>
                    </a>
                    <a href='' className='sidebar_icon-link'>
                        <div className='sidebar_icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.54148 2.39072C8.50936 1.90678 9.68239 2.14366 10.3866 2.96527L12 4.84754L13.6134 2.96527C14.3176 2.14366 15.4906 1.90678 16.4585 2.39072C17.5909 2.95692 17.9856 4.20708 17.6424 5.24998H19C20.5188 5.24998 21.75 6.4812 21.75 7.99999V8.99999C21.75 9.85395 21.3608 10.617 20.75 11.1214V19C20.75 20.5188 19.5188 21.75 18 21.75H6C4.48122 21.75 3.25 20.5188 3.25 19V11.1214C2.63925 10.617 2.25 9.85395 2.25 8.99999V7.99999C2.25 6.4812 3.48122 5.24998 5 5.24998H6.35758C6.01444 4.20708 6.40908 2.95692 7.54148 2.39072ZM7.98375 6.74999C7.99421 6.75021 8.00466 6.7502 8.01509 6.74999H11.25V10.25H5C4.30964 10.25 3.75 9.69034 3.75 8.99999V7.99999C3.75 7.30963 4.30964 6.74999 5 6.74999H7.98375ZM11.25 11.75H4.75V19C4.75 19.6903 5.30964 20.25 6 20.25H11.25V11.75ZM12.75 20.25V11.75H19.25V19C19.25 19.6903 18.6904 20.25 18 20.25H12.75ZM12.75 10.25V6.74999H15.9849C15.9953 6.7502 16.0058 6.7502 16.0162 6.74999H19C19.6904 6.74999 20.25 7.30963 20.25 7.99999V8.99999C20.25 9.69034 19.6904 10.25 19 10.25H12.75ZM15.8212 5.24998C16.4201 4.91905 16.4089 4.04295 15.7877 3.73236C15.4355 3.55624 15.0086 3.64245 14.7523 3.94145L13.6307 5.24998H15.8212ZM10.3693 5.24998H8.17879C7.57995 4.91905 7.59112 4.04295 8.2123 3.73236C8.56454 3.55624 8.99145 3.64245 9.24774 3.94145L10.3693 5.24998Z" fill="white"/>
                                                </svg>
                        </div>
                        <span className='sidebar_text'>Customer gifts</span>
                    </a>
                    <a href='' className='sidebar_icon-link'>
                        <div className='sidebar_icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4975 2.8135C14.8986 2.8135 15.2242 3.13809 15.2242 3.53803C15.2242 3.93797 14.8986 4.26256 14.4975 4.26256H7.45462C5.02431 4.26256 3.45353 5.92801 3.45353 8.50733V16.3149C3.45353 18.928 4.98652 20.5509 7.45462 20.5509H15.7921C18.2224 20.5509 19.7932 18.8884 19.7932 16.3149V9.51491C19.7932 9.11497 20.1187 8.79038 20.5199 8.79038C20.9211 8.79038 21.2467 9.11497 21.2467 9.51491V16.3149C21.2467 19.7153 19.0548 22 15.7921 22H7.45462C4.19192 22 2 19.7153 2 16.3149V8.50733C2 5.10205 4.19192 2.8135 7.45462 2.8135H14.4975ZM16.5473 9.41135C16.8652 9.65673 16.9233 10.1117 16.6772 10.4276L13.8379 14.0793C13.7197 14.2319 13.5453 14.3314 13.3534 14.3546C13.1596 14.3807 12.9678 14.3246 12.8147 14.2058L10.084 12.067L7.63137 15.2443C7.48795 15.4298 7.27283 15.5273 7.0548 15.5273C6.89976 15.5273 6.74374 15.4781 6.61196 15.3776C6.29412 15.1332 6.23404 14.6782 6.4792 14.3613L9.37948 10.6034C9.4977 10.4498 9.67309 10.3503 9.86496 10.3262C10.0607 10.3011 10.2526 10.3552 10.4047 10.4759L13.1373 12.6157L15.5279 9.5408C15.774 9.22298 16.2295 9.16405 16.5473 9.41135ZM19.4108 2C20.8391 2 22 3.15731 22 4.58126C22 6.0052 20.8391 7.16348 19.4108 7.16348C17.9834 7.16348 16.8216 6.0052 16.8216 4.58126C16.8216 3.15731 17.9834 2 19.4108 2ZM19.4108 3.44906C18.7848 3.44906 18.2751 3.95623 18.2751 4.58126C18.2751 5.20532 18.7848 5.71442 19.4108 5.71442C20.0368 5.71442 20.5465 5.20532 20.5465 4.58126C20.5465 3.95623 20.0368 3.44906 19.4108 3.44906Z" fill="white"/>
                                                </svg>  
                        </div>
                        <span className='sidebar_text'>Transactions</span>
                    </a>
                    <a href='' className='sidebar_icon-link'>
                        <div className='sidebar_icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1887 2C19.3933 2 22 4.80603 22 8.25671V15.7433C22 19.1929 19.3933 22 16.1887 22H7.8123C4.60768 22 2 19.1929 2 15.7433V8.25671C2 4.80603 4.60768 2 7.8123 2H16.1887ZM16.1887 3.5647H7.8123C5.40908 3.5647 3.45356 5.66974 3.45356 8.25671V15.7433C3.45356 18.3303 5.40908 20.4353 7.8123 20.4353H16.1887C18.5919 20.4353 20.5464 18.3303 20.5464 15.7433V15.4512L17.3506 15.4518C15.5124 15.4518 14.0162 13.8423 14.0152 11.8645C14.0152 9.88463 15.5114 8.27403 17.3506 8.27299L20.5464 8.27236V8.25671C20.5464 5.66974 18.5919 3.5647 16.1887 3.5647ZM20.5464 9.83706L17.3506 9.83769C16.3128 9.83873 15.4688 10.7473 15.4688 11.8635C15.4688 12.9786 16.3138 13.8871 17.3506 13.8871L20.5464 13.8865V9.83706ZM17.7941 11.0164C18.1953 11.0164 18.5209 11.3669 18.5209 11.7988C18.5209 12.2306 18.1953 12.5811 17.7941 12.5811H17.4917C17.0906 12.5811 16.765 12.2306 16.765 11.7988C16.765 11.3669 17.0906 11.0164 17.4917 11.0164H17.7941ZM12.3542 6.73384C12.7554 6.73384 13.081 7.08434 13.081 7.51619C13.081 7.94805 12.7554 8.29854 12.3542 8.29854H7.12234C6.72116 8.29854 6.39556 7.94805 6.39556 7.51619C6.39556 7.08434 6.72116 6.73384 7.12234 6.73384H12.3542Z" fill="white"/>
                                                </svg>
                        </div>
                        <span className='sidebar_text'>Payment</span>
                    </a>
                    <a href='' className='sidebar_icon-link'>
                        <div className='sidebar_icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3 8H12.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M5.99615 16.5H7.99615" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M10.4962 16.5H14.4962" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M21 11.53V15.61C21 19.12 20.199 20 17.004 20H6.996C3.801 20 3 19.12 3 15.61V7.39C3 3.88 3.801 3 6.996 3H14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M19.0761 4.13L15.3661 7.84C15.2261 7.98 15.0861 8.26 15.0561 8.46L14.8561 9.88C14.7861 10.39 15.1461 10.75 15.6561 10.68L17.0761 10.48C17.2761 10.45 17.5561 10.31 17.6961 10.17L21.4061 6.46C22.0461 5.82 22.3461 5.08 21.4061 4.14C20.4561 3.19 19.7161 3.49 19.0761 4.13Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M18.5461 4.66C18.8661 5.79 19.7461 6.67 20.8661 6.98" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                        </div>
                        <span className='sidebar_text'>Invoice</span>
                    </a>
                    <a href='' className='sidebar_icon-link'>
                        <div className='sidebar_icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.3957 18.7615C20.3957 22.1732 15.7172 22.5675 12.1989 22.5675L11.9471 22.5673C9.7056 22.5619 4 22.4204 4 18.7408C4 15.3988 8.49056 14.9522 11.982 14.9353L12.4507 14.935C14.6921 14.9405 20.3957 15.082 20.3957 18.7615ZM12.1989 16.4875C7.78841 16.4875 5.55263 17.2451 5.55263 18.7408C5.55263 20.25 7.78841 21.0149 12.1989 21.0149C16.6084 21.0149 18.8431 20.2572 18.8431 18.7615C18.8431 17.2524 16.6084 16.4875 12.1989 16.4875ZM12.1989 2C15.2296 2 17.6942 4.46557 17.6942 7.4963C17.6942 10.527 15.2296 12.9916 12.1989 12.9916H12.1658C9.14127 12.9822 6.69122 10.5156 6.70154 7.49319C6.70154 4.46557 9.16714 2 12.1989 2ZM12.1989 3.4781C9.98279 3.4781 8.17965 5.28018 8.17965 7.4963C8.17243 9.70517 9.96209 11.5062 12.1689 11.5145L12.1989 12.2535V11.5145C14.414 11.5145 16.2161 9.71138 16.2161 7.4963C16.2161 5.28018 14.414 3.4781 12.1989 3.4781Z" fill="white"/>
                                                <path d="M20.3957 18.7615C20.3957 22.1732 15.7172 22.5675 12.1989 22.5675L11.9471 22.5673C9.7056 22.5619 4 22.4204 4 18.7408C4 15.3988 8.49056 14.9522 11.982 14.9353L12.4507 14.935C14.6921 14.9405 20.3957 15.082 20.3957 18.7615ZM12.1989 16.4875C7.78841 16.4875 5.55263 17.2451 5.55263 18.7408C5.55263 20.25 7.78841 21.0149 12.1989 21.0149C16.6084 21.0149 18.8431 20.2572 18.8431 18.7615C18.8431 17.2524 16.6084 16.4875 12.1989 16.4875ZM12.1989 2C15.2296 2 17.6942 4.46557 17.6942 7.4963C17.6942 10.527 15.2296 12.9916 12.1989 12.9916H12.1658C9.14127 12.9822 6.69122 10.5156 6.70154 7.49319C6.70154 4.46557 9.16714 2 12.1989 2ZM12.1989 3.4781C9.98279 3.4781 8.17965 5.28018 8.17965 7.4963C8.17243 9.70517 9.96209 11.5062 12.1689 11.5145L12.1989 12.2535V11.5145C14.414 11.5145 16.2161 9.71138 16.2161 7.4963C16.2161 5.28018 14.414 3.4781 12.1989 3.4781Z" stroke="white"/>
                                                </svg>   
                        </div>
                        <span className='sidebar_text'>Edit profile</span>
                    </a>

                </div>

                <div className='sidebar_intro'>
                <img src={intro} alt="My Image" />
                </div>

            </div>

            <div className='sidebar_information'>
            <img src={info} alt="My Image" />
            </div>
        </div>
    )
}

export default sidebar