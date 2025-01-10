import React from "react";

const PracticeQuiz = [
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
  {
    quizLesson: "Lesson 01 : Introduction about XD",
    quizTime: "30 mins",
  },
];
const quizColors = ["#E2F0FF", "#FCDDB4", "#E2F0FF", "#FAD0CE"];

function CalendarSidebar() {
  return (
    <>
      <div className="mt-8 xl:mt-12">
        <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-4">
          Change Simplification
        </h2>
        <ul className="flex flex-col gap-3 lg:gap-[15px]">
          <li className="flex items-center gap-2 2xl:gap-[15px] bg-[#49BBBD] rounded-xl p-3 lg:p-4 2xl:p-5 2xl:pl-6">
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1719 0.789062C19.0234 0.90625 14.7656 1.33594 12.1484 2.9375C11.9531 3.05469 11.8359 3.25 11.8359 3.44531V17.6641C11.8359 18.1328 12.3438 18.4062 12.7734 18.2109C15.4688 16.8438 19.375 16.4531 21.2891 16.375C21.9531 16.3359 22.4609 15.7891 22.4609 15.1641V1.96094C22.5 1.29688 21.875 0.75 21.1719 0.789062ZM10.3125 2.9375C7.69531 1.33594 3.4375 0.90625 1.28906 0.789062C0.585938 0.75 0 1.29688 0 1.96094V15.1641C0 15.7891 0.507812 16.3359 1.17188 16.375C3.08594 16.4531 6.99219 16.8438 9.6875 18.2109C10.1172 18.4062 10.625 18.1328 10.625 17.6641V3.44531C10.625 3.25 10.5078 3.05469 10.3125 2.9375Z"
                fill="white"
              />
            </svg>
            <span className="text-white flex-1 text-[13px] 2xl:text-base">
              Lesson 01 : Introduction about XD
            </span>
            <p className="text-[#252641] text-[13px] 2xl:text-base">30 mins</p>
          </li>
          <li className="flex items-center gap-2 2xl:gap-[15px] bg-[#F48C06] bg-opacity-30 rounded-xl p-3 lg:p-4 2xl:p-5 2xl:pl-6">
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1719 0.789062C19.0234 0.90625 14.7656 1.33594 12.1484 2.9375C11.9531 3.05469 11.8359 3.25 11.8359 3.44531V17.6641C11.8359 18.1328 12.3438 18.4062 12.7734 18.2109C15.4688 16.8438 19.375 16.4531 21.2891 16.375C21.9531 16.3359 22.4609 15.7891 22.4609 15.1641V1.96094C22.5 1.29688 21.875 0.75 21.1719 0.789062ZM10.3125 2.9375C7.69531 1.33594 3.4375 0.90625 1.28906 0.789062C0.585938 0.75 0 1.29688 0 1.96094V15.1641C0 15.7891 0.507812 16.3359 1.17188 16.375C3.08594 16.4531 6.99219 16.8438 9.6875 18.2109C10.1172 18.4062 10.625 18.1328 10.625 17.6641V3.44531C10.625 3.25 10.5078 3.05469 10.3125 2.9375Z"
                fill="#252641"
              />
            </svg>
            <span className="text-[#252641] flex-1 text-[13px] 2xl:text-base">
              Lesson 01 : Introduction about XD
            </span>
            <p className="text-[#252641] text-[13px] 2xl:text-base">30 mins</p>
          </li>
          <li className="flex items-center gap-2 2xl:gap-[15px] bg-[#9DCCFF] bg-opacity-30 rounded-xl p-3 lg:p-4 2xl:p-5 2xl:pl-6">
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1719 0.789062C19.0234 0.90625 14.7656 1.33594 12.1484 2.9375C11.9531 3.05469 11.8359 3.25 11.8359 3.44531V17.6641C11.8359 18.1328 12.3438 18.4062 12.7734 18.2109C15.4688 16.8438 19.375 16.4531 21.2891 16.375C21.9531 16.3359 22.4609 15.7891 22.4609 15.1641V1.96094C22.5 1.29688 21.875 0.75 21.1719 0.789062ZM10.3125 2.9375C7.69531 1.33594 3.4375 0.90625 1.28906 0.789062C0.585938 0.75 0 1.29688 0 1.96094V15.1641C0 15.7891 0.507812 16.3359 1.17188 16.375C3.08594 16.4531 6.99219 16.8438 9.6875 18.2109C10.1172 18.4062 10.625 18.1328 10.625 17.6641V3.44531C10.625 3.25 10.5078 3.05469 10.3125 2.9375Z"
                fill="#252641"
              />
            </svg>
            <span className="text-[#252641] flex-1 text-[13px] 2xl:text-base">
              Lesson 01 : Introduction about XD
            </span>
            <p className="text-[#252641] text-[13px] 2xl:text-base">30 mins</p>
          </li>
          <li className="flex items-center gap-2 2xl:gap-[15px] bg-[#EE645B] bg-opacity-30 rounded-xl p-3 lg:p-4 2xl:p-5 2xl:pl-6">
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1719 0.789062C19.0234 0.90625 14.7656 1.33594 12.1484 2.9375C11.9531 3.05469 11.8359 3.25 11.8359 3.44531V17.6641C11.8359 18.1328 12.3438 18.4062 12.7734 18.2109C15.4688 16.8438 19.375 16.4531 21.2891 16.375C21.9531 16.3359 22.4609 15.7891 22.4609 15.1641V1.96094C22.5 1.29688 21.875 0.75 21.1719 0.789062ZM10.3125 2.9375C7.69531 1.33594 3.4375 0.90625 1.28906 0.789062C0.585938 0.75 0 1.29688 0 1.96094V15.1641C0 15.7891 0.507812 16.3359 1.17188 16.375C3.08594 16.4531 6.99219 16.8438 9.6875 18.2109C10.1172 18.4062 10.625 18.1328 10.625 17.6641V3.44531C10.625 3.25 10.5078 3.05469 10.3125 2.9375Z"
                fill="#252641"
              />
            </svg>
            <span className="text-[#252641] flex-1 text-[13px] 2xl:text-base">
              Lesson 01 : Introduction about XD
            </span>
            <p className="text-[#252641] text-[13px] 2xl:text-base">30 mins</p>
          </li>
        </ul>
      </div>
      <div className="mt-8 xl:mt-12">
        <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-4">
          PRACTICE QUIZ
        </h2>
        <ul className="flex flex-col gap-3 lg:gap-[15px]">
          {PracticeQuiz.map((data, i) => (
            <li
              key={i}
              className="flex items-center gap-2 2xl:gap-[15px] rounded-xl p-3 lg:p-4 2xl:p-5 2xl:pl-6"
              style={{
                backgroundColor: quizColors[i % quizColors.length],
              }}
            >
              <svg
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1719 0.789062C21.875 0.75 22.5 1.29688 22.4609 1.96094V15.1641C22.4609 15.7891 21.9531 16.3359 21.2891 16.375C19.375 16.4531 15.4688 16.8438 12.7734 18.2109C12.3438 18.4062 11.8359 18.1328 11.8359 17.6641V3.44531C11.8359 3.25 11.9531 3.05469 12.1484 2.9375C14.7656 1.33594 19.0234 0.90625 21.1719 0.789062ZM10.3125 2.9375C10.5078 3.05469 10.625 3.25 10.625 3.44531V17.6641C10.625 18.1328 10.1172 18.4062 9.6875 18.2109C6.99219 16.8438 3.08594 16.4531 1.17188 16.375C0.507812 16.3359 0 15.7891 0 15.1641V1.96094C0 1.29688 0.585938 0.75 1.28906 0.789062C3.4375 0.90625 7.69531 1.33594 10.3125 2.9375Z"
                  fill="#252641"
                />
              </svg>
              <span className="text-[#252641] flex-1 text-[13px] 2xl:text-base">
                {data.quizLesson}
              </span>
              <p className="text-[#252641] text-[13px] 2xl:text-base">
                {data.quizTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CalendarSidebar;
