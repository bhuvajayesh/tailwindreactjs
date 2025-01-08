import React from "react";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import CourseDetailBanner from "../../src/images/blog-detail-banner.jpg";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProgressBar from "@ramonak/react-progress-bar";

const OverviewTabs = ["Overview", "Overview", "Overview", "Overview"];

const RaitingStar = [
  {
    starNumber: "5 Stars",
    starCompleted: "5",
    starMaxCompleted: "7",
  },
  {
    starNumber: "4 Stars",
    starCompleted: "4",
    starMaxCompleted: "7",
  },
  {
    starNumber: "3 Stars",
    starCompleted: "3",
    starMaxCompleted: "7",
  },
  {
    starNumber: "2 Stars",
    starCompleted: "2",
    starMaxCompleted: "7",
  },
  {
    starNumber: "1 Stars",
    starCompleted: "1",
    starMaxCompleted: "7",
  },
];

function CourseDetail() {
  return (
    <>
      <Header />
      <div className="pt-[72px] md:pt-[92px] xl:pt-[112px] 2xl:pt-[128px]">
        <img src={CourseDetailBanner} alt="" className="w-full" />
        <div className="pt-[59px] pb-[100px]">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-48">
              <div className="flex-1">
                <Tabs defaultIndex={3} onSelect={(index) => console.log(index)}>
                  <TabList className="grid md:grid-cols-4 2xl:gap-[50px]">
                    {OverviewTabs.map((item, i) => (
                      <Tab
                        key={i}
                        className="cursor-pointer p-3 md:p-2 lg:p-3 xl:py-4 bg-[#DDDDDD] text-[#696969] font-semibold text-sm md:text-lg xl:text-xl outline-none flex items-center justify-center rounded-xl"
                      >
                        {item}
                      </Tab>
                    ))}
                  </TabList>
                  <div className="2xl:pt-20">
                    <TabPanel>
                      <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Overview 1
                      </h2>
                    </TabPanel>
                    <TabPanel>
                      <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Overview 2
                      </h2>
                    </TabPanel>
                    <TabPanel>
                      <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                        Overview 3
                      </h2>
                    </TabPanel>
                    <TabPanel>
                      <div className="bg-[#9DCCFF] bg-opacity-30 rounded-[20px] p-[50px]">
                        <div className="flex gap-11">
                          <div className="bg-white rounded-[20px] p-6 text-center w-[30%]">
                            <h2 className="lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-black text-opacity-50">
                              4 out of 5
                            </h2>
                            <ul className="flex items-center justify-center gap-1.5 my-7">
                              <li>
                                <svg
                                  width="21"
                                  height="22"
                                  viewBox="0 0 21 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                                    fill="#FDB022"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="21"
                                  height="22"
                                  viewBox="0 0 21 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                                    fill="#FDB022"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="21"
                                  height="22"
                                  viewBox="0 0 21 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                                    fill="#FDB022"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="21"
                                  height="22"
                                  viewBox="0 0 21 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                                    fill="#FDB022"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="21"
                                  height="22"
                                  viewBox="0 0 21 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                                    fill="#808080"
                                  />
                                </svg>
                              </li>
                            </ul>
                            <span className="text-xl text-black text-opacity-50">
                              Top Raiting
                            </span>
                          </div>
                          <div className="flex-1">
                            {RaitingStar.map((data, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-11 mb-3 last:mb-0"
                              >
                                <label className="text-xl text-black text-opacity-50">
                                  {data.starNumber}
                                </label>
                                <div className="flex-1">
                                  <ProgressBar
                                    completed={data.starCompleted}
                                    maxCompleted={data.starMaxCompleted}
                                    className="course-progress"
                                    height={8}
                                    bgColor="#49BBBD"
                                    baseBgColor="#D9D9D9"
                                    labelClassName="progress-label"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
              <div className="w-[30%]">Right</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetail;
