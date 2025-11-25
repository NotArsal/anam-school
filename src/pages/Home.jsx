import Hero from "../components/Hero";
import Section from "../components/Section";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero
        title="Anam Urdu Primary School"
        subtitle="Where Values, Discipline & Quality Education Come Together"
        image="/images/banner.jpg"
      />

      <Section title="Welcome to Our School">
        <p className="mb-4 text-gray-700 leading-7">
          Anam Urdu Primary School is committed to providing a safe, inspiring,
          and academically strong foundation for every child. With Urdu as the
          medium of instruction, we ensure that children learn with comfort,
          confidence, and cultural belonging while also gaining proficiency in
          English and modern skills.
        </p>
        <Link
          to="/about"
          className="bg-secondary text-white px-4 py-2 rounded shadow"
        >
          Learn More →
        </Link>
      </Section>

      <Section title="Why Choose Us?">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Experienced and dedicated teaching staff</li>
          <li>Strong focus on discipline, moral values, and personality development</li>
          <li>Activity-based learning environment</li>
          <li>Safe, child-friendly classrooms and playground</li>
          <li>Affordable fees with a focus on quality education for all</li>
        </ul>
      </Section>

      <Section title="Admissions Open">
        <p className="mb-4 text-gray-700">
          Enroll your child for the academic year. Seats are limited.
        </p>
        <Link
          to="/admissions"
          className="bg-secondary text-white px-4 py-2 rounded shadow"
        >
          View Admission Details →
        </Link>
      </Section>

      <Section title="School Gallery">
        <p className="mb-4 text-gray-700">A glimpse into our school activities.</p>
        <Link
          to="/gallery"
          className="bg-secondary text-white px-4 py-2 rounded shadow"
        >
          View Gallery →
        </Link>
      </Section>
    </>
  );
}
