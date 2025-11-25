export default function Admissions() {
  return (
    <section className="p-6 md:p-12 leading-7">
      <h1 className="text-4xl font-bold text-primary mb-6">Admissions</h1>

      <p className="text-gray-700 mb-6">
        Admissions are open for Classes 1st to 5th. We welcome students from all
        backgrounds and ensure a smooth admission process for parents.
      </p>

      <h2 className="text-3xl font-bold text-primary mb-4">Eligibility</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
        <li>Age requirement according to class</li>
        <li>Birth certificate verification</li>
        <li>Transfer Certificate (if applicable)</li>
      </ul>

      <h2 className="text-3xl font-bold text-primary mb-4">Documents Required</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
        <li>Birth Certificate</li>
        <li>Aadhar Card (Child & Parents)</li>
        <li>Progress Report (if transferring from another school)</li>
        <li>Two passport-size photographs</li>
      </ul>

      <h2 className="text-3xl font-bold text-primary mb-4">Admission Process</h2>
      <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-1">
        <li>Collect the admission form from the school office</li>
        <li>Fill and submit the form with required documents</li>
        <li>Attend student interaction/meeting (if scheduled)</li>
        <li>Confirm admission by paying the admission fee</li>
      </ol>

      <a
        href="/files/admission_form.pdf"
        className="bg-secondary text-white px-5 py-3 rounded shadow"
      >
        Download Admission Form
      </a>
    </section>
  );
}
