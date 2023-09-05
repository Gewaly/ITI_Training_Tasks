function generateCourse(options = {}) {
  var defaultValues = {
    courseName: "Default Course Name",
    courseDuration: "Default Course Duration",
    courseOwner: "Default Course Owner",
  };
  Object.assign(defaultValues, options);
  console.log(
    `CourseName: ${defaultValues.courseName}\n courseDuration:${defaultValues.courseDuration} \n courseOwner: ${defaultValues.courseOwner}`
  );
}

generateCourse({
  courseName: "javascript",
  courseDuration: "300",
  courseOwner: "Eng",
});
