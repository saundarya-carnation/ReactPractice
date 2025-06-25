const courses = [
  { id: 1, title: "React Basics", duration: "2 hours" },
  { id: 2, title: "Advanced React", duration: "3 hours" },
  { id: 3, title: "React + FastAPI", duration: "4 hours" }
];

function MapDemo() {
  return (
    <div>
      <h2>.map() Demo – List of Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.title}</strong> — {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapDemo;
