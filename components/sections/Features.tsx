const features = [
  {
    icon: "📸",
    title: "Multi-Modal Capture",
    description: "Capture voice, photos, messages, geo-tracks, emails, weather, music you listen to. Whatever you want your future self to remember."
  },
  {
    icon: "🤖",
    title: "AI Processing",
    description: "Automatic transcription, smart tagging, entity extraction, and context-aware summaries. Your memory organizes itself."
  },
  {
    icon: "💬",
    title: "Talk to Your Memory",
    description: "Search conversationally. Ask \"what did I discuss with Alex about the project?\" and get instant, contextual answers."
  },
  {
    icon: "⚡",
    title: "Real-Time Insights",
    description: "Get live assistance during conversations. Analyze tone, detect emotions, access relevant past context in the moment."
  },
  {
    icon: "📊",
    title: "Automatic Summaries",
    description: "Daily digests of your conversations. See patterns, track recurring topics, and get insights from your communication habits."
  },
  {
    icon: "🔌",
    title: "Modular & Extensible",
    description: "Plugin architecture means Mycelia adapts to you. Build custom tools: therapy assistants, lie detectors, meeting summarizers, coaches,etc."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          How Mycelia Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
