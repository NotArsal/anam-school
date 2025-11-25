export default function About() {
  return (
    <section className="p-6 md:p-12 leading-7">
      <h1 className="text-4xl font-bold mb-6 text-primary">About Anam Urdu Primary School</h1>

      <img
        src="/images/school_building.jpg"
        className="w-full rounded-lg shadow mb-6"
      />

      <p className="text-gray-700 mb-6">
        Established with a mission to provide quality Urdu-medium education,
        Anam Urdu Primary School has been a trusted institution for young
        learners. We focus on creating a balanced learning environment where
        academic excellence, character development, and extracurricular growth
        go hand in hand.
      </p>

      <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
      <p className="text-gray-700 mb-6">
        To nurture confident, disciplined, and responsible students equipped
        with strong foundational knowledge and moral values.
      </p>

      <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        To provide accessible, affordable, and high-quality education that
        empowers every child to reach their full potential.
      </p>

      <h2 className="text-3xl font-bold text-primary mb-4">Principal's Message</h2>
      <img src="/images/principal.jpg" className="w-64 rounded shadow mb-4" />
      <p className="text-gray-700 mb-10">
        “Education is not just about textbooks. It is about building character,
        confidence, and compassion. At Anam Urdu Primary School, we aim to give
        children strong academic foundations and the values needed to succeed in
        life.”
      </p>

      <h2 className="text-3xl font-bold text-primary mb-4">Our Staff</h2>
      <img src="/images/staff_group.jpg" className="w-full rounded shadow mb-4" />
      <p className="text-gray-700 mb-10">
        Our team of qualified and passionate teachers ensures every child
        receives personal attention and learns in a joyful, supportive
        environment.
      </p>

      <h2 className="text-3xl font-bold text-primary mb-4">School Infrastructure</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <img src="/images/classroom1.jpg" className="rounded shadow" />
        <img src="/images/classroom2.jpg" className="rounded shadow" />
      </div>
      <p className="text-gray-700">
        Our classrooms are well-ventilated, hygienic, and student-friendly.
        Well-maintained playgrounds and activity areas help students grow
        physically and socially.
      </p>
    </section>
  );
}
