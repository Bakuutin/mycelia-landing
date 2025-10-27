const values = [
  {
    icon: "🔒",
    title: "Privacy First",
    description: "Your data is under your control. We believe your thoughts belong to you, not corporate servers."
  },
  {
    icon: "🌐",
    title: "Self-Hosted & Open Source",
    description: "The only self-hosted memory solution available. Run it on your infrastructure. Audit the code. Own your data completely."
  },
  {
    icon: "🤝",
    title: "Community-Driven",
    description: "Built by a growing community of contributors. Open-source, extensible, and designed with collective input from privacy advocates and developers."
  },
  {
    icon: "🧬",
    title: "Modular by Design",
    description: "Plugin architecture lets developers and users build custom tools on top of your memory layer. Your data, your rules, your extensions."
  }
];

export default function Values() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Why Mycelia is Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg border border-gray-200">
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
