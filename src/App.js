import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Membership from "./Pages/Membership";
import Course from "./Pages/Course";
import Checkout from "./Pages/Checkout";
import BlogDetail from "./Pages/BlogDetail";
import Meeting from "./Pages/Meeting";
import Search from "./Pages/Search";
import LiteratureCourse from "./Pages/LiteratureCourse";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Careers from "./Pages/Careers";
import AboutUs from "./Pages/AboutUs";
import CourseDetail from "./Pages/CourseDetail";
import CourseCalendarCreate1 from "./Pages/CourseCalendarCreate1";
import CourseCalendarCreate2 from "./Pages/CourseCalendarCreate2";
import CourseCalendar from "./Pages/CourseCalendar";
import CourseFullView from "./Pages/CourseFullView";
import Atomic from "./Pages/Atomic";
import Landing from "./Pages/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Blog />} path={"/blog"} />
          <Route element={<Membership />} path={"/membership"} />
          <Route element={<Course />} path={"/courses"} />
          <Route element={<Checkout />} path={"/checkout"} />
          <Route element={<BlogDetail />} path={"/blog-detail"} />
          <Route element={<Meeting />} path={"/meeting"} />
          <Route element={<Search />} path={"/search"} />
          <Route element={<LiteratureCourse />} path={"/literature-course"} />
          <Route element={<Login />} path={"/login"} />
          <Route element={<Register />} path={"/register"} />
          <Route element={<Careers />} path={"/careers"} />
          <Route element={<AboutUs />} path={"/about-us"} />
          <Route element={<CourseDetail />} path={"/course-detail"} />
          <Route
            element={<CourseCalendarCreate1 />}
            path={"/course-calendar-create1"}
          />
          <Route
            element={<CourseCalendarCreate2 />}
            path={"/course-calendar-create2"}
          />
          <Route element={<CourseCalendar />} path={"/course-calendar"} />
          <Route element={<CourseFullView />} path={"/course-full-view"} />
          <Route element={<Atomic />} path={"/atomic"} />
          <Route element={<Landing />} path={"/landing"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
