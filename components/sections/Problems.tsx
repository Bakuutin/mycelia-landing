
const problems = [
  {
    icon: "🧠",
    title: "Your Brain Forgets",
    description: "Important insights from conversations vanish. You remember discussing something crucial but can't recall the details when you need them."
  },
  {
    icon: "🔍",
    title: "Information is Scattered",
    description: "Ideas are trapped across different apps, formats, and contexts. Finding what you need feels impossible without the right search tool."
  },
  {
    icon: "⏰",
    title: "Context Gets Lost",
    description: "\"I saw this somewhere\" or \"someone mentioned this\" but you can't remember where or when. Critical context disappears over time."
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Surface Problems */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Problems AI memory solves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {problems.map((problem, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-6">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {problem.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Problem */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            The Problem We're Actually Solving
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-gray-900">
              AI-powered memory is inevitable. The question is: <em>who controls it?</em>
            </p>
            <p>
              Right now, your data is in the magical cloud i.e. on servers you'll never see, governed by terms of service you didn't read, in jurisdictions that change with political winds. And you pay rent for it.
            </p>
            <p className="text-xl font-bold text-gray-900 text-center mt-8">
              We're building the alternative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
