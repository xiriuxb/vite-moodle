import "./courses.css";

export type TCourse = {
  title: string;
  category: string;
  description: string;
  price: number;
  img_url: string;
};

export function CourseCard({ course }: { course: TCourse }) {
  return (
    <div className="overflow-hidden h-fit min-w-72 w-80 mx-4 mb-4 border-[1px] rounded-xl cursor-pointer transition-all duration-700 shadow-lg hover:shadow-xl hover:border-indigo-900 course-card">
      <div className="overflow-hidden">
        <img
          className="rounded-t-xl object-cover relative z-[-1]"
          src={course.img_url}
        ></img>
      </div>
      <div className="flex flex-col items-start px-4 pt-4 pb-2 transition-all duration-500">
        <h5 className="bg-indigo-300 px-2 py-1 rounded-3xl uppercase text-sm font-bold">
          {course.category}
        </h5>
        <h4 className="font-bold text-xl pb-2 text-indigo-900">
          {course.title}
        </h4>
        <p className="text-left">
          {course.description}&nbsp;
          <span className="text-indigo-800">Ver Más</span>
        </p>
      </div>
      <div className="flex justify-between p-3 border-t-[1px] duration-500">
        <p>{!!course.price ? "$ " + course.price : "Free"}</p>
        <p>Calificacion:3.5</p>
      </div>
    </div>
  );
}
