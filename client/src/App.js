import React, { useEffect, useState } from "react";
import OpenRoute from "./helper/router/OpenRoute";
import PublicRoute from "./helper/router/PublicRoute";
import TeacherRoute from "./helper/router/TeacherRoute";
import { useSelector } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  let roleOfUser = localStorage?.getItem("roleOfUser");
  const [routeForStudent, setRouteForStudent] = useState(false);
  const [routeForTeacher, setRouteForTeacher] = useState(false);
  const [routeForOpen, setRouteForOpen] = useState(false);
  const isLogin = useSelector((state) => state?.userLogin);

  const routesForUser = () => {
    if (roleOfUser === "STUDENT") {
      setRouteForStudent(true);
      setRouteForTeacher(false);
      setRouteForOpen(false);
      console.log("route for student is ::", routeForStudent);
      return;
    }
    if (roleOfUser === "TEACHER") {
      setRouteForTeacher(true);
      setRouteForStudent(false);
      setRouteForOpen(false);
      console.log("route for student is ::", routeForTeacher);
      return;
    }
    if (roleOfUser === "" || roleOfUser === undefined || roleOfUser===null) {
      setRouteForOpen(true);
      setRouteForStudent(false);
      setRouteForTeacher(false);
      return;
    }
  };

  useEffect(() => {
    routesForUser();
  }, [isLogin]);

  return (
    <div>
      <ErrorBoundary>
      {routeForStudent ? <PublicRoute /> : null}
      {routeForTeacher ? <TeacherRoute /> : null}
      {routeForOpen ? <OpenRoute /> : null}
      </ErrorBoundary>
    </div>
  );
};
export default App;
