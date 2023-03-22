import React, { useState, text } from 'react'
import frame from "../Assets/Frame 37143.png";
import cloud from "../Assets/cloud.png";
import dot from "../Assets/dot.png";
import human from "../Assets/logohuman.png";
import { connect } from "react-redux";
import { addRetouchs } from "../redux/reducer";
import { Button, Modal } from 'antd';
import { Input, Select, Space } from 'antd';
import RetouchItem from './RetouchItem';

const mapStateToProps = (state) => {
  return {
    retouchs: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRetouch: (obj) => dispatch(addRetouchs(obj)),
  };
};

function Title(props) {

  const [retouch, setRetouch] = useState("");

  const handleChange = (e) => {
    setRetouch(e.target.value);
  };

  const add = () => {
    if (retouch === "") {
      alert("Input is Empty");
    } else {
      props.addRetouch({
        id: Math.floor(Math.random() * 1000),
        item: retouch,
        completed: false,
      });
      setRetouch("");
      console.log(retouch);
    }
  }

  const [retouchRequest, setRetouchRequest] = useState("");

  const handleChangeRequest = (e) => {
    setRetouchRequest(e.target.value);
  };

  const handleToggle = () => {
      const eleBold = document.getElementsByClassName('bold')[0];
      if(eleBold) {
        if(eleBold.classList.contains('active')) {
          eleBold.classList.remove('active')
        } else {
          eleBold.classList.add('active')
        }
      }

      
      // if(eleBold) {
      //   eleBold.classList.add('active')
      // }else{
      //   eleBold.classList.remove('active')
      // }

      const eleInput = document.getElementsByClassName('box_request1')[0];
      if(eleInput) {
        if(eleInput.classList.contains('active')) {
          eleInput.classList.remove('active')

        } else {
          eleInput.classList.add('active')
        }
      }
  }

  const handleToggle2 = () => {
    const eleItalic = document.getElementsByClassName('italic')[0];
    if(eleItalic) {
      if(eleItalic.classList.contains('abcd')) {
        eleItalic.classList.add('abcd')

      } else {
        eleItalic.classList.remove('abcd')
      }
    }

    const eleInput = document.getElementsByClassName('box_request1')[0];
    if(eleInput) {
      eleInput.classList.add('abcd')
    }  else {
      eleInput.classList.remove('abcd')
    }
}

const handleToggle3 = () => {
  const eleUnderline = document.getElementsByClassName('underline')[0];
  if(eleUnderline) {
    if(eleUnderline.classList.contains('bcd')) {
      eleUnderline.classList.add('bcd')

    } else {
      eleUnderline.classList.remove('bcd')
    }
  }

  const eleInput = document.getElementsByClassName('box_request1')[0];
  if(eleInput) {
    eleInput.classList.add('bcd')
  }  else {
    eleInput.classList.remove('bcd')
  }
}

  const addRequest = () => {
    if (retouchRequest === "") {
      alert("Input is Empty");
    } else {
      props.addRetouch({
        id: Math.floor(Math.random() * 1000),
        item: retouchRequest,
        completed: false,
      });
      setRetouchRequest("");
      console.log(retouchRequest);
      console.log(props);
    }
  }

  const { Option } = Select;

  const [modal2Open, setModal2Open] = useState(false);

  {

  }

  let item = props.retouchs;
  console.log("a", item);

  return (
    <div className='main'>
      <div className='title_title--main'>
        <div className='title_project'>
          Project Management
        </div>
        <div className='title_create_outside'>
          <button className='title_create' onClick={() => setModal2Open(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="white" />
            </svg>
            <p> Create a new project</p>
          </button>
        </div>
        <Modal
          title="Create a new project"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer={null}
        >
          {/* {
            modal2Open && 
          } */}
          {/* <div className='modal'> */}
          <div className='box_main'>
            <div className='box_main-content'>
              <div className='box_item'>
                <div className='box_name'>
                  <p>Project name
                  </p>
                </div>
                <input
                  type={text}
                  onChange={(e) => handleChange(e)}
                  className='box_text'
                  value={retouch} />
              </div>

              <div className='box_item'>
                <div className='box_name'>
                  <p>Deadline
                  </p>
                </div>
                <input autoComplete='off' list='browsers' name='browser' className='box_text'></input>
                <datalist id='browsers'>
                  <option value="24h"></option>
                  <option value="10h"></option>
                  <option value="1h"></option>
                  <option value="15ph"></option>
                </datalist>
                {/* <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Not Identified',
                    },
                    {
                      value: '2',
                      label: 'Closed',
                    },
                    {
                      value: '3',
                      label: 'Communicated',
                    },
                    {
                      value: '4',
                      label: 'Identified',
                    },
                    {
                      value: '5',
                      label: 'Resolved',
                    },
                    {
                      value: '6',
                      label: 'Cancelled',
                    },
                  ]}
                /> */}
              </div>

              <div className='box_item'>
                <div className='box_name'>
                  <p>Requests
                  </p>
                </div>
                <div className='box_request'>
                  <input
                    type={text}
                    className='box_request1'
                    onChange={(e) => handleChangeRequest(e)}
                    value={retouchRequest}
                  />
                  <div className='box_request2'>
                    <div className='box_requesticon1' >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 6.66671C11.403 6.66671 12 6.06975 12 5.33337C12 4.59699 11.403 4.00004 10.6667 4.00004C9.93029 4.00004 9.33333 4.59699 9.33333 5.33337C9.33333 6.06975 9.93029 6.66671 10.6667 6.66671Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33333 3.33337C1.33333 2.2288 2.22876 1.33337 3.33333 1.33337H12.6667C13.7712 1.33337 14.6667 2.2288 14.6667 3.33337V12.6667C14.6667 13.7713 13.7712 14.6667 12.6667 14.6667H3.33333C2.22876 14.6667 1.33333 13.7713 1.33333 12.6667V3.33337ZM3.33333 2.66671H12.6667C13.0349 2.66671 13.3333 2.96518 13.3333 3.33337V12.6667C13.3333 12.8186 13.2825 12.9587 13.197 13.0708C13.1765 13.0436 13.1544 13.017 13.1306 12.991L7.04603 6.35329C6.22784 5.46072 4.81044 5.49418 4.03528 6.42437L2.66667 8.06671V3.33337C2.66667 2.96518 2.96514 2.66671 3.33333 2.66671ZM2.66667 10.1494V12.6667C2.66667 13.0349 2.96514 13.3334 3.33333 13.3334H11.6357L6.06316 7.25425C5.79043 6.95673 5.31796 6.96789 5.05958 7.27795L2.66667 10.1494Z" fill="#A3A3A3" />
                      </svg>
                    </div>
                    <div className='box_requesticon1 bold' onClick={() => handleToggle()}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.18182C4 2.97683 4.97683 2 6.18182 2H8.66667C10.5076 2 12 3.49238 12 5.33333C12 6.28714 11.5994 7.14738 10.9573 7.75497C11.9771 8.32499 12.6667 9.4153 12.6667 10.6667C12.6667 12.5076 11.1743 14 9.33333 14H6.16667C4.97005 14 4 13.03 4 11.8333V4.18182ZM6.18182 3.33333H8.66667C9.77124 3.33333 10.6667 4.22876 10.6667 5.33333C10.6667 6.4379 9.77124 7.33333 8.66667 7.33333H5.33333V4.18182C5.33333 3.71321 5.71321 3.33333 6.18182 3.33333ZM5.33333 8.66667V11.8333C5.33333 12.2936 5.70643 12.6667 6.16667 12.6667H9.33333C10.4379 12.6667 11.3333 11.7712 11.3333 10.6667C11.3333 9.5621 10.4379 8.66667 9.33333 8.66667H5.33333Z" fill="#A3A3A3" />
                      </svg>

                    </div>
                    <div className='box_requesticon1 italic' onClick={() => handleToggle2()}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.3475 2.00004H11C11.3682 2.00004 11.6667 2.29852 11.6667 2.66671C11.6667 3.0349 11.3682 3.33337 11 3.33337H9.85384L7.52051 12.6667H8.66667C9.03486 12.6667 9.33333 12.9652 9.33333 13.3334C9.33333 13.7016 9.03486 14 8.66667 14H6.68138C6.67193 14.0002 6.66245 14.0002 6.65295 14H5C4.63181 14 4.33333 13.7016 4.33333 13.3334C4.33333 12.9652 4.63181 12.6667 5 12.6667H6.14614L8.47948 3.33337H7.33333C6.96514 3.33337 6.66667 3.0349 6.66667 2.66671C6.66667 2.29852 6.96514 2.00004 7.33333 2.00004H9.31815C9.3279 1.99982 9.33769 1.99982 9.3475 2.00004Z" fill="#A3A3A3" />
                      </svg>
                    </div>
                    <div className='box_requesticon1 underline'  onClick={() => handleToggle3()}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 14C3.33333 13.6319 3.63181 13.3334 4 13.3334H12C12.3682 13.3334 12.6667 13.6319 12.6667 14C12.6667 14.3682 12.3682 14.6667 12 14.6667H4C3.63181 14.6667 3.33333 14.3682 3.33333 14Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.33337C4.36819 1.33337 4.66667 1.63185 4.66667 2.00004V7.33337C4.66667 9.17432 6.15905 10.6667 8 10.6667C9.84095 10.6667 11.3333 9.17432 11.3333 7.33337V2.00004C11.3333 1.63185 11.6318 1.33337 12 1.33337C12.3682 1.33337 12.6667 1.63185 12.6667 2.00004V7.33337C12.6667 9.9107 10.5773 12 8 12C5.42267 12 3.33333 9.9107 3.33333 7.33337V2.00004C3.33333 1.63185 3.63181 1.33337 4 1.33337Z" fill="#A3A3A3" />
                      </svg>

                    </div>
                    <div className='box_requesticon1'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00004C13.3333 5.05452 10.9455 2.66671 8 2.66671C5.05448 2.66671 2.66667 5.05452 2.66667 8.00004C2.66667 10.9456 5.05448 13.3334 8 13.3334ZM8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8 1.33337C4.3181 1.33337 1.33334 4.31814 1.33334 8.00004C1.33334 11.6819 4.3181 14.6667 8 14.6667Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.67711 8.72244C5.0145 8.57502 5.40752 8.72903 5.55493 9.06642C5.96703 10.0096 6.90753 10.6667 8 10.6667C9.09246 10.6667 10.033 10.0096 10.4451 9.06642C10.5925 8.72903 10.9855 8.57502 11.3229 8.72244C11.6603 8.86985 11.8143 9.26286 11.6669 9.60025C11.0502 11.0116 9.64129 12 8 12C6.35871 12 4.94976 11.0116 4.33312 9.60025C4.18571 9.26286 4.33972 8.86985 4.67711 8.72244Z" fill="#A3A3A3" />
                        <path d="M6 6.00004C6 6.36823 5.70152 6.66671 5.33333 6.66671C4.96514 6.66671 4.66666 6.36823 4.66666 6.00004C4.66666 5.63185 4.96514 5.33337 5.33333 5.33337C5.70152 5.33337 6 5.63185 6 6.00004Z" fill="#A3A3A3" />
                        <path d="M11.3333 6.00004C11.3333 6.36823 11.0349 6.66671 10.6667 6.66671C10.2985 6.66671 10 6.36823 10 6.00004C10 5.63185 10.2985 5.33337 10.6667 5.33337C11.0349 5.33337 11.3333 5.63185 11.3333 6.00004Z" fill="#A3A3A3" />
                      </svg>
                    </div>
                    <div className='box_requesticon1'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33334 7.99996C1.33334 6.15901 2.82572 4.66663 4.66667 4.66663H6.66667C7.03486 4.66663 7.33334 4.9651 7.33334 5.33329C7.33334 5.70148 7.03486 5.99996 6.66667 5.99996H4.66667C3.5621 5.99996 2.66667 6.89539 2.66667 7.99996C2.66667 9.10453 3.5621 9.99996 4.66667 9.99996H6.66667C7.03486 9.99996 7.33334 10.2984 7.33334 10.6666C7.33334 11.0348 7.03486 11.3333 6.66667 11.3333H4.66667C2.82572 11.3333 1.33334 9.84091 1.33334 7.99996Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66666 5.33329C8.66666 4.9651 8.96514 4.66663 9.33333 4.66663H11.3333C13.1743 4.66663 14.6667 6.15901 14.6667 7.99996C14.6667 9.84091 13.1743 11.3333 11.3333 11.3333H9.33333C8.96514 11.3333 8.66666 11.0348 8.66666 10.6666C8.66666 10.2984 8.96514 9.99996 9.33333 9.99996H11.3333C12.4379 9.99996 13.3333 9.10453 13.3333 7.99996C13.3333 6.89539 12.4379 5.99996 11.3333 5.99996H9.33333C8.96514 5.99996 8.66666 5.70148 8.66666 5.33329Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33332 8.00004C5.33332 7.63185 5.6318 7.33337 5.99999 7.33337H9.99999C10.3682 7.33337 10.6667 7.63185 10.6667 8.00004C10.6667 8.36823 10.3682 8.66671 9.99999 8.66671H5.99999C5.6318 8.66671 5.33332 8.36823 5.33332 8.00004Z" fill="#A3A3A3" />
                      </svg>
                    </div>
                    <div className='box_requesticon1'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4665 5.07594C11.6854 4.29489 10.4191 4.29489 9.63807 5.07594L5.86683 8.84717C5.60648 9.10752 5.60648 9.52963 5.86683 9.78998C6.12718 10.0503 6.54929 10.0503 6.80964 9.78998L10.5809 6.01874C10.8412 5.75839 11.2633 5.75839 11.5237 6.01874C11.784 6.27909 11.784 6.7012 11.5237 6.96155L7.75245 10.7328C6.9714 11.5138 5.70507 11.5138 4.92402 10.7328C4.14297 9.95174 4.14297 8.68541 4.92402 7.90436L8.69526 4.13313C9.99701 2.83138 12.1076 2.83138 13.4093 4.13313C14.7111 5.43487 14.7111 7.54542 13.4093 8.84717L9.63807 12.6184C7.81562 14.4409 4.86085 14.4409 3.0384 12.6184C1.21596 10.796 1.21596 7.84119 3.0384 6.01875L6.80964 2.24751C7.06999 1.98716 7.4921 1.98716 7.75245 2.24751C8.0128 2.50786 8.0128 2.92997 7.75245 3.19032L3.98121 6.96155C2.67947 8.2633 2.67947 10.3739 3.98121 11.6756C5.28296 12.9773 7.39351 12.9773 8.69526 11.6756L12.4665 7.90436C13.2475 7.12331 13.2475 5.85698 12.4665 5.07594Z" fill="#A3A3A3" />
                      </svg>
                    </div>
                    <div className='box_requesticon1'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 4.66667C4.66667 4.29848 4.96515 4 5.33334 4H13.3333C13.7015 4 14 4.29848 14 4.66667C14 5.03486 13.7015 5.33333 13.3333 5.33333H5.33334C4.96515 5.33333 4.66667 5.03486 4.66667 4.66667Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 8.00004C4.66667 7.63185 4.96515 7.33337 5.33334 7.33337H13.3333C13.7015 7.33337 14 7.63185 14 8.00004C14 8.36823 13.7015 8.66671 13.3333 8.66671H5.33334C4.96515 8.66671 4.66667 8.36823 4.66667 8.00004Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 11.3333C4.66667 10.9651 4.96515 10.6666 5.33334 10.6666H13.3333C13.7015 10.6666 14 10.9651 14 11.3333C14 11.7015 13.7015 12 13.3333 12H5.33334C4.96515 12 4.66667 11.7015 4.66667 11.3333Z" fill="#A3A3A3" />
                        <path d="M3.33333 4.66667C3.33333 5.03486 3.03486 5.33333 2.66667 5.33333C2.29848 5.33333 2 5.03486 2 4.66667C2 4.29848 2.29848 4 2.66667 4C3.03486 4 3.33333 4.29848 3.33333 4.66667Z" fill="#A3A3A3" />
                        <path d="M3.33333 8.00004C3.33333 8.36823 3.03486 8.66671 2.66667 8.66671C2.29848 8.66671 2 8.36823 2 8.00004C2 7.63185 2.29848 7.33337 2.66667 7.33337C3.03486 7.33337 3.33333 7.63185 3.33333 8.00004Z" fill="#A3A3A3" />
                        <path d="M3.33333 11.3333C3.33333 11.7015 3.03486 12 2.66667 12C2.29848 12 2 11.7015 2 11.3333C2 10.9651 2.29848 10.6666 2.66667 10.6666C3.03486 10.6666 3.33333 10.9651 3.33333 11.3333Z" fill="#A3A3A3" />
                      </svg>

                    </div>
                    <div className='box_requesticon1'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.00004C2 3.63185 2.29848 3.33337 2.66667 3.33337H13.3333C13.7015 3.33337 14 3.63185 14 4.00004C14 4.36823 13.7015 4.66671 13.3333 4.66671H2.66667C2.29848 4.66671 2 4.36823 2 4.00004Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.66667C4 6.29848 4.29848 6 4.66667 6H11.3333C11.7015 6 12 6.29848 12 6.66667C12 7.03486 11.7015 7.33333 11.3333 7.33333H4.66667C4.29848 7.33333 4 7.03486 4 6.66667Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9.33329C2 8.9651 2.29848 8.66663 2.66667 8.66663H13.3333C13.7015 8.66663 14 8.9651 14 9.33329C14 9.70148 13.7015 9.99996 13.3333 9.99996H2.66667C2.29848 9.99996 2 9.70148 2 9.33329Z" fill="#A3A3A3" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.6319 4.29848 11.3334 4.66667 11.3334H11.3333C11.7015 11.3334 12 11.6319 12 12C12 12.3682 11.7015 12.6667 11.3333 12.6667H4.66667C4.29848 12.6667 4 12.3682 4 12Z" fill="#A3A3A3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className='box_item'>
                <div className='box_name'>
                  <p>Image link
                  </p>
                </div>
                <div className='box_text'>
                  <div className='box_requesticon2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 9.23858 4.23858 7 7 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H7C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H7C4.23858 17 2 14.7614 2 12Z" fill="#A3A3A3" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 8C13 7.44772 13.4477 7 14 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H14C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15H17C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9H14C13.4477 9 13 8.55228 13 8Z" fill="#A3A3A3" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 12C7.99998 11.4477 8.4477 11 8.99998 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H8.99998C8.4477 13 7.99998 12.5523 7.99998 12Z" fill="#A3A3A3" />
                    </svg>
                  </div>
                  <Input />
                  <div className='box_requesticon3'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2L12 5.75L6 9.5L0 5.75L6 2ZM18 2L24 5.75L18 9.5L12 5.75L18 2ZM0 13.25L6 9.5L12 13.25L6 17L0 13.25ZM18 9.5L24 13.25L18 17L12 13.25L18 9.5ZM6 18.25L12 14.5L18 18.25L12 22L6 18.25Z" fill="#A3A3A3" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='box_item'>
                <div className='box_name'>
                  <p>Output formats
                  </p>
                </div>
                <div className='box_output'>
                  <button className='box_image'>
                    <p>PSD</p>
                  </button>
                  <button className='box_image'>
                    <p>JPG</p>
                  </button>
                  <button className='box_image'>
                    <p>PNG</p>
                  </button>
                  <button className='box_image'>
                    <p>TIFF</p>
                  </button>
                  <button className='box_image'>
                    <p>JPEG</p>
                  </button>
                </div>
              </div>
            </div>

            <div className='box_item'>
              <div className='title_create_outside'>
                <button className='box_title-create' onClick={() => { add(); setModal2Open(false); }} >
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2071 6.29289C21.5976 6.68342 21.5976 7.31658 21.2071 7.70711L12.6213 16.2929C11.4497 17.4645 9.55026 17.4645 8.37868 16.2929L4.79289 12.7071C4.40237 12.3166 4.40237 11.6834 4.79289 11.2929C5.18342 10.9024 5.81658 10.9024 6.20711 11.2929L9.79289 14.8787C10.1834 15.2692 10.8166 15.2692 11.2071 14.8787L19.7929 6.29289C20.1834 5.90237 20.8166 5.90237 21.2071 6.29289Z" fill="white" />
                  </svg>
                  <p>Create project</p>
                </button>
              </div>
            </div>

          </div>
        </Modal>


      </div>


      <div className='content'>

        <div className='content_title'>
          <p className='content_content-project'>Projects</p>
          <p className='content_content-deadline'>Deadline</p>
          <p className='content_content-status'>Status</p>
          <p className='content_content-action'>Action</p>
        </div>
        <div className='content_content--table'>

          {item && item.map((e) => { return (<RetouchItem item={e} />) })}

          {/* <div className='row project-item'>
            <div className='col-6 project-item__image'>

              <img src={frame} alt="My Image" />

              <div className='project_item'>
                <div className='project-item_img'>
                  <div className='project-item_img-detail'>
                    <img src={cloud} alt="My Image" />
                  </div>
                  <div className='project-item_img-text' >
                    <p>Social Media Campaign</p>
                  </div>
                </div>
                <div className='project-item_bio'>
                  <p>1200 USD / 150 images</p>
                </div>
              </div>
            </div>
            <div className='col-3 project-item__deadline'>
              <p>24 Aug, 2022 (24 hours)</p>
            </div>
            <div className='col-2 project-item__status'>
              <button class="project_item_status-text">PENDING</button>
            </div>
            <div className='col-1 project-item__action'>
              <img className='table_content--img1' src={dot} alt="My Image" />
            </div>
          </div>

          <div className='row project-item'>
            <div className='col-6 project-item__image'>

              <img src={frame} alt="My Image" />

              <div className='project_item'>
                <div className='project-item_img'>
                  <div className='project-item_img-detail'>
                    <img src={cloud} alt="My Image" />
                  </div>
                  <div className='project-item_img-text'>
                    <p>Social Media Campaign</p>
                  </div>
                </div>
                <div className='project-item_bio'>
                  <p>1200 USD / 150 images</p>
                </div>
              </div>
            </div>
            <div className='col-3 project-item__deadline'>
              <p>24 Aug, 2022 (24 hours)</p>
            </div>
            <div className='col-2 project-item__status'>
              <button class="project_item_status-text">PENDING</button>
            </div>
            <div className='col-1 project-item__action'>
              <img className='table_content--img1' src={dot} alt="My Image" />
            </div>
          </div>

          <div className='row project-item'>
            <div className='col-6 project-item__image'>

              <img src={human} alt="My Image" />

              <div className='project_item'>
                <div className='project-item_img'>
                  <div className='project-item_img-detail'>
                    <img src={cloud} alt="My Image" />
                  </div>
                  <div className='project-item_img-text'>
                    <p>Social Media Campaign</p>
                  </div>
                </div>
                <div className='project-item_bio'>
                  <p>1200 USD / 150 images</p>
                </div>
              </div>
            </div>
            <div className='col-3 project-item__deadline'>
              <p>24 Aug, 2022 (24 hours)</p>
            </div>
            <div className='col-2 project-item__status'>
              <button class="project_item_status-textfix">FIX REQUESTED</button>
            </div>
            <div className='col-1 project-item__action'>
              <img className='table_content--img1' src={dot} alt="My Image" />
            </div>
          </div>

          <div className='row project-item'>
            <div className='col-6 project-item__image'>

              <img src={human} alt="My Image" />

              <div className='project_item'>
                <div className='project-item_img'>
                  <div className='project-item_img-detail'>
                    <img src={cloud} alt="My Image" />
                  </div>
                  <div className='project-item_img-text'>
                    <p>Social Media Campaign</p>
                  </div>
                </div>
                <div className='project-item_bio'>
                  <p>1200 USD / 150 images</p>
                </div>
              </div>
            </div>
            <div className='col-3 project-item__deadline'>
              <p>24 Aug, 2022 (24 hours)</p>
            </div>
            <div className='col-2 project-item__status'>
              <button class="project_item_status-textfix">FIX REQUESTED</button>
            </div>
            <div className='col-1 project-item__action'>
              <img className='table_content--img1' src={dot} alt="My Image" />
            </div>
          </div> */}

          {/* <div className='row project-item'>
            <div className='col-6 project-item__image'>

              <img src={human} alt="My Image" />

              <div className='project_item'>
                <div className='project-item_img'>
                  <div className='project-item_img-detail'>
                    <img src={cloud} alt="My Image" />
                  </div>
                  <div className='project-item_img-text'>
                   <p>{item && item.item}</p>
                  </div>
                </div>
                <div className='project-item_bio'>
                  <p>1200 USD / 150 images</p>
                </div>
              </div>
            </div>
            <div className='col-3 project-item__deadline'>
              <p>24 Aug, 2022 (24 hours)</p>
            </div>
            <div className='col-2 project-item__status'>
              <button class="project_item_status-textfix">FIX REQUESTED</button>
            </div>
            <div className='col-1 project-item__action'>
              <img className='table_content--img1' src={dot} alt="My Image" />
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);