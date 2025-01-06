import React from "react";
import { Link } from "react-router-dom";
import meetingPic from "../../src/images/meeting-pic.jpg";
import meetingThumb1 from "../../src/images/meeting-thumb1.jpg";
import meetingThumb2 from "../../src/images/meeting-thumb2.jpg";
import meetingThumb3 from "../../src/images/meeting-thumb3.jpg";
import bookPic1 from "../../src/images/offer-pic2.jpg";
import bookPic2 from "../../src/images/offer-pic3.jpg";

const meetingOption = [
  {
    meetingOptionIcon: (
      <svg
        width="41"
        height="27"
        viewBox="0 0 41 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.625 0H3.30469C1.47656 0 0 1.54688 0 3.375V23.6953C0 25.5234 1.47656 27 3.30469 27H23.625C25.4531 27 27 25.5234 27 23.6953V3.375C27 1.54688 25.4531 0 23.625 0ZM36.9141 2.67188L29.25 8.01562V19.0547L36.9141 24.3984C38.3906 25.3828 40.5 24.3281 40.5 22.5703V4.5C40.5 2.74219 38.3906 1.6875 36.9141 2.67188Z"
          fill="#EE645B"
        />
      </svg>
    ),
  },
  {
    meetingOptionIcon: (
      <svg
        width="25"
        height="37"
        viewBox="0 0 25 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.375 25.25C16.1016 25.25 19.125 22.2969 19.125 18.5V7.25C19.125 3.52344 16.1016 0.5 12.375 0.5C8.57812 0.5 5.625 3.52344 5.625 7.25V18.5C5.625 22.2969 8.57812 25.25 12.375 25.25ZM23.625 14H22.5C21.8672 14 21.375 14.5625 21.375 15.125V18.5C21.375 23.7734 16.8047 27.9922 11.4609 27.5C6.75 27.0078 3.375 22.8594 3.375 18.1484V15.125C3.375 14.5625 2.8125 14 2.25 14H1.125C0.492188 14 0 14.5625 0 15.125V18.0078C0 24.2656 4.42969 29.8906 10.6875 30.7344V33.125H6.75C6.11719 33.125 5.625 33.6875 5.625 34.25V35.375C5.625 36.0078 6.11719 36.5 6.75 36.5H18C18.5625 36.5 19.125 36.0078 19.125 35.375V34.25C19.125 33.6875 18.5625 33.125 18 33.125H14.0625V30.8047C20.0391 29.9609 24.75 24.7578 24.75 18.5V15.125C24.75 14.5625 24.1875 14 23.625 14Z"
          fill="#29B9E7"
        />
      </svg>
    ),
  },
  {
    meetingOptionIcon: (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.97386 25.6819L6.88957 32.084C7.28057 32.7839 8.17257 33.0908 8.97091 32.8002L16.9563 29.6954C17.6552 29.4038 18.0597 28.7116 18.0172 27.9654L17.5237 22.4416C23.1111 20.5069 29.4255 20.5182 35.1232 22.6119L34.5229 28.1251C34.466 28.8704 34.857 29.5703 35.5501 29.8753L43.4739 33.1341C44.2665 33.4401 45.115 33.1002 45.5687 32.4583L49.6076 26.1331C50.012 25.4409 49.9203 24.6445 49.3295 24.0421C36.7253 11.1916 16.0936 10.9423 3.19292 23.5957C2.64075 24.1373 2.58286 24.982 2.97386 25.6819Z"
          fill="#EE5B90"
        />
      </svg>
    ),
  },
  {
    meetingOptionIcon: (
      <svg
        width="41"
        height="37"
        viewBox="0 0 41 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.125 0.5H3.375C1.47656 0.5 0 2.04688 0 3.875V26.375C0 28.2734 1.47656 29.75 3.375 29.75H16.875L15.75 33.125H10.6875C9.70312 33.125 9 33.8984 9 34.8125C9 35.7969 9.70312 36.5 10.6875 36.5H29.8125C30.7266 36.5 31.5 35.7969 31.5 34.8125C31.5 33.8984 30.7266 33.125 29.8125 33.125H24.75L23.625 29.75H37.125C38.9531 29.75 40.5 28.2734 40.5 26.375V3.875C40.5 2.04688 38.9531 0.5 37.125 0.5ZM36 25.25H4.5V5H36V25.25Z"
          fill="#00CBB8"
        />
      </svg>
    ),
  },
  {
    meetingOptionIcon: (
      <svg
        width="36"
        height="29"
        viewBox="0 0 36 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.9453 15.6953C35.5781 15.0625 35.5781 14.0078 34.9453 13.3047L23.1328 1.49219C22.0078 0.4375 20.25 1.21094 20.25 2.6875V9.4375H10.6875C9.70312 9.4375 9 10.2109 9 11.125V17.875C9 18.8594 9.70312 19.5625 10.6875 19.5625H20.25V26.3125C20.25 27.8594 22.0781 28.5625 23.1328 27.5078L34.9453 15.6953ZM13.5 27.1562V24.3438C13.5 23.9219 13.0781 23.5 12.6562 23.5H6.75C5.48438 23.5 4.5 22.5156 4.5 21.25V7.75C4.5 6.55469 5.48438 5.5 6.75 5.5H12.6562C13.0781 5.5 13.5 5.14844 13.5 4.65625V1.84375C13.5 1.42188 13.0781 1 12.6562 1H6.75C3.02344 1 0 4.02344 0 7.75V21.25C0 24.9766 3.02344 28 6.75 28H12.6562C13.0781 28 13.5 27.6484 13.5 27.1562Z"
          fill="#49BBBD"
        />
      </svg>
    ),
  },
];
const bookForYou = [
  {
    bookPic: bookPic1,
    bookTitle: "All Benefits of PLUS",
    bookValue: "$24",
  },
  {
    bookPic: bookPic2,
    bookTitle: "All Benefits of PLUS",
    bookValue: "$24",
  },
];

function Meeting() {
  return (
    <>
      <div className="bg-[#EBF5FF] py-10 md:py-12 lg:py-20 xl:pt-[97px] xl:pb-[88px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 xl:gap-[35px]">
            <div className="w-full lg:w-[67%]">
              <div className="flex items-center lg:pl-4 gap-6 lg:gap-8 xl:gap-[50px] mb-6 lg:mb-10">
                <Link
                  to="/"
                  className="w-[50px] aspect-square hidden md:flex items-center justify-center bg-[#49BBBD]"
                >
                  <svg
                    width="27"
                    height="16"
                    viewBox="0 0 27 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="1" y1="8.5" x2="27" y2="8.5" stroke="white" />
                    <line
                      x1="1.15817"
                      y1="8.30111"
                      x2="8.15816"
                      y2="1.30111"
                      stroke="white"
                    />
                    <line
                      x1="1.60966"
                      y1="8.62297"
                      x2="9.07442"
                      y2="15.1251"
                      stroke="white"
                    />
                  </svg>
                </Link>
                <div className="flex items-start flex-1 bg-white rounded-[26px] p-4 md:p-6 xl:p-[35px]">
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#252641]">
                      UX/UI Design Confrence Meeting
                    </h2>
                    <ul className="flex items-center justify-center md:justify-start gap-3 mt-1 xl:mt-3">
                      <li className="md:text-lg text-[#252641]">9 Lesson</li>
                      <li className="md:text-lg text-[#252641]">6h 30min</li>
                    </ul>
                  </div>
                  <div className="hidden md:block xl:pr-4">
                    <Link href="">
                      <svg
                        width="35"
                        height="36"
                        viewBox="0 0 35 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.7695 15.5508C34.5215 16.0977 35 16.918 35 17.875C35 18.7637 34.5215 19.6523 33.7695 20.1992L29.668 22.9336L30.625 27.7871C30.7617 28.6758 30.4883 29.6328 29.873 30.248C29.1895 30.9316 28.3008 31.2051 27.3438 31L22.4902 30.1113L19.7559 34.2129C19.2773 34.9648 18.3887 35.375 17.5 35.375C16.543 35.375 15.7227 34.9648 15.1758 34.2129L12.4414 30.1113L7.58789 31C6.63086 31.2051 5.74219 30.9316 5.12695 30.248C4.44336 29.6328 4.16992 28.6758 4.30664 27.7871L5.26367 22.9336L1.16211 20.1309C0.410156 19.6523 0 18.7637 0 17.875C0 16.918 0.410156 16.0977 1.16211 15.5508L5.26367 12.8164L4.30664 7.96289C4.16992 7.07422 4.44336 6.11719 5.12695 5.50195C5.74219 4.81836 6.69922 4.54492 7.58789 4.68164L12.4414 5.63867L15.1758 1.53711C16.2012 0.0332031 18.7305 0.0332031 19.7559 1.53711L22.4902 5.63867L27.3438 4.68164C28.2324 4.54492 29.1895 4.81836 29.873 5.43359C30.4883 6.11719 30.7617 7.07422 30.625 7.96289L29.668 12.8164L33.7695 15.5508ZM26.0449 21.4297L31.3086 17.875L26.0449 14.3203L27.207 8.09961L20.9863 9.26172L17.5 3.99805L13.9453 9.26172L7.72461 8.09961L8.88672 14.3203L3.69141 17.875L8.88672 21.4297L7.72461 27.6504L13.9453 26.4199L17.5 31.6836L20.9863 26.4883L27.207 27.6504L26.0449 21.4297ZM17.5 10.7656C21.3965 10.7656 24.6094 13.9785 24.6094 17.875C24.6094 21.8398 21.3965 24.9844 17.5 24.9844C13.5352 24.9844 10.3906 21.8398 10.3906 17.875C10.3906 13.9785 13.5352 10.7656 17.5 10.7656ZM17.5 21.7031C19.5508 21.7031 21.3281 19.9941 21.3281 17.875C21.3281 15.8242 19.5508 14.0469 17.5 14.0469C15.3809 14.0469 13.6719 15.8242 13.6719 17.875C13.6719 19.9941 15.3809 21.7031 17.5 21.7031Z"
                          fill="#252641"
                          fillOpacity="0.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={meetingPic} alt="" className="w-full rounded-3xl" />
                <div className="absolute top-0 left-0 rounded-3xl w-full h-full p-3 md:px-[50px] md:py-6 flex justify-end md:justify-start flex-col">
                  <div className="flex-1 hidden md:flex flex-col ml-auto gap-2 xl:gap-4 w-36 xl:w-44 2xl:w-52">
                    <img
                      src={meetingThumb1}
                      alt=""
                      className="bg-white p-1 xl:p-[5px] rounded-2xl"
                    />
                    <img
                      src={meetingThumb2}
                      alt=""
                      className="bg-white p-1 xl:p-[5px] rounded-2xl"
                    />
                    <img
                      src={meetingThumb3}
                      alt=""
                      className="bg-white p-1 xl:p-[5px] rounded-2xl"
                    />
                  </div>
                  <ul className="bg-[#E6F2FF] rounded-[30px] p-3 md:p-6 2xl:p-9 flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-5 xl:gap-[30px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    {meetingOption.map((data, i) => (
                      <li key={i}>
                        <Link
                          to=""
                          className="bg-white rounded-xl flex items-center justify-center w-11 h-11 md:w-16 md:h-14 xl:w-20 xl:h-16 p-3 md:p-4"
                        >
                          {data.meetingOptionIcon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6 xl:gap-[30px]">
              <div className="xl:flex-1 bg-white rounded-2xl p-5 xl:py-10 xl:px-6 2xl:py-12 2xl:px-[30px]">
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#252641]">
                  Course Contents
                </h2>
              </div>
              <div className="bg-white rounded-2xl p-5 xl:py-10 xl:px-6 2xl:py-12 2xl:px-[30px]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#252641]">
                    Book for you
                  </h2>
                  <svg
                    width="22"
                    height="26"
                    viewBox="0 0 22 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5312 3.25C20.8008 3.25 21.875 4.32422 21.875 5.59375V22.7812C21.875 24.0996 20.8008 25.125 19.5312 25.125H2.34375C1.02539 25.125 0 24.0996 0 22.7812V5.59375C0 4.32422 1.02539 3.25 2.34375 3.25H4.6875V0.710938C4.6875 0.417969 4.93164 0.125 5.27344 0.125H7.22656C7.51953 0.125 7.8125 0.417969 7.8125 0.710938V3.25H14.0625V0.710938C14.0625 0.417969 14.3066 0.125 14.6484 0.125H16.6016C16.8945 0.125 17.1875 0.417969 17.1875 0.710938V3.25H19.5312ZM19.2383 22.7812C19.3848 22.7812 19.5312 22.6836 19.5312 22.4883V7.9375H2.34375V22.4883C2.34375 22.6836 2.44141 22.7812 2.63672 22.7812H19.2383Z"
                      fill="#49BBBD"
                    />
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 2xl:gap-6">
                  {bookForYou.map((data, i) => (
                    <div key={i} className="bg-white py-3 px-3.5 text-center rounded-[20px] drop-shadow-[2px_2px_10px_rgba(0,0,0,0.25)]">
                      <img
                        src={data.bookPic}
                        alt=""
                        className="w-full rounded-2xl"
                      />
                      <h2 className="mt-2 mb-2.5 md:text-lg lg:text-xl font-medium text-[#252641]">
                        {data.bookTitle}
                      </h2>
                      <label className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-[#49BBBD]">
                        {data.bookValue}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;
