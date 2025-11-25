import Hero from "../components/Hero";
import Section from "../components/Section";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero
        title="Anam Urdu Primary School"
        subtitle="Modern education, moral values & bright futures"
        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
      />

      <Section title="About Us">
        <p className="mb-4">
          Providing top-quality Urdu-medium primary education with strong values.
        </p>
        <Link className="bg-secondary text-white px-4 py-2 rounded" to="/about">
          Read More →
        </Link>
      </Section>

      <Section title="Admissions">
        <Link className="bg-secondary text-white px-4 py-2 rounded" to="/admissions">
          View Details →
        </Link>
      </Section>

      <Section title="Gallery">
        <Link className="bg-secondary text-white px-4 py-2 rounded" to="/gallery">
          Explore →
        </Link>
      </Section>
    </>
  );
}
