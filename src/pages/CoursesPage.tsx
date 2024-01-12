import { CourseCard, TCourse } from "../courses/CoursesComponent";
import { OrderByComponent } from "../courses/FiltersComponent";

const orderBy = {
  title: "Order by",
  items: [
    { description: "Precio: mayor-menor", link: "price-desc" },
    { description: "Precio: menor-mayor", link: "price-asc" },
  ],
};

const categories = {
  title: "Categories",
  items: [
    { description: "Category 1", link: "/cursos/b" },
    { description: "Web Development", link: "/cursos/a" },
    { description: "Data Science", link: "/cursos/a" },
    { description: "Graphic Design", link: "/cursos/a" },
  ],
};

export function CoursesPage() {
  return (
    <section className="pt-16 text-slate-700">
      <h2 className="text-5xl font-bold px-14 py-2">Cursos</h2>
      <div className="flex flex-wrap justify-around">
        <div>
          <OrderByComponent title={orderBy.title} items={orderBy.items} />
          <OrderByComponent title={categories.title} items={categories.items} />
        </div>
        <div className="flex-[10]">
          <div className="flex flex-wrap justify-around">
            {courses.map((course: TCourse) => {
              return <CourseCard course={course} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const courses = [
  {
    title: "Curso 1",
    category: "Cat 1",
    description:
      "Curso de Introducción a la programación en lenguaje C utilizando el IDE codeblocks.EL contenido del curso es muy detallado e incluyen ejercicios en todos los temas con material y vídeos tutoriales.",
    price: 0,
    img_url: "https://www.octavario.org/images/default_course_image.png",
  },
  {
    title: "JavaScript Fundamentals",
    category: "Web Development",
    description:
      "Learn the fundamental concepts of JavaScript programming language. This course covers variables, control flow, functions, and more. Suitable for beginners.",
    price: 29.99,
    img_url: "https://www.octavario.org/images/default_course_image.png",
  },
  {
    title: "Python for Data Science",
    category: "Data Science",
    description:
      "Explore the power of Python for data analysis and visualization. This course introduces key libraries like NumPy, Pandas, and Matplotlib.",
    price: 49.99,
    img_url: "https://www.octavario.org/images/default_course_image.png",
  },
  {
    title: "Graphic Design Basics",
    category: "Design",
    description:
      "An introductory course to graphic design principles. Learn about color theory, typography, and layout design. Suitable for aspiring designers.",
    price: 19.99,
    img_url: "https://www.octavario.org/images/default_course_image.png",
  },
];
