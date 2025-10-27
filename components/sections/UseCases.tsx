const useCases = [
  {
    title: "🌈 Neurodivergent Individuals",
    description: "Was that sarcasm? Were they annoyed? You've been analyzing that interaction for three hours. Mycelia lets you actually review it—see the tone analysis, check what was literally said versus what you're anxious you said. ADHD brain jumped topics mid-conversation? Query what you were even talking about."
  },
  {
    title: "💼 Professionals",
    description: "Client references a conversation from months ago. You're nodding. Search later, find the quote, move on. Meeting notes without taking notes. Commitments you actually made versus ones you're afraid you made. The usual professional memory problems, solved."
  },
  {
    title: "🎓 Researchers & Students",
    description: "Writing your thesis. You KNOW someone addressed this exact counterargument—was it in that paper from October? A lecture? Some PDF you downloaded and never organized? Mycelia searches everything you've captured. Voice notes from seminars, screenshots of slides, papers you skimmed. Find the thing you vaguely remember without the archaeological dig through your filesystem."
  },
  {
    title: "🧘 Therapy & Self-Work",
    description: "You pay $200/session and spend the first 15 minutes trying to remember what happened since last time. The stuff that felt huge on Tuesday is completely gone by Thursday. Mycelia gives you the receipts—when your mood shifted, what triggered it, patterns you can't see day-to-day. Show up to therapy with actual data instead of vibes and selective memory."
  },
  {
    title: "🤝 Friendship & Conversation",
    description: "Your friend mentions something subtle 20 minutes ago—you want to go back to it but the moment passed. With Mycelia you just... do. Pull the exact quote. Return to the thread. Conversations become richer because nothing valuable has to be abandoned for the next topic. Also: knowing you can fact-check yourself later makes you more honest in the moment. You're building a record of what you actually think, not what sounds good."
  },
  {
    title: "🎨 Creators",
    description: "We started just talking our ideas out loud. Walking, cooking, driving—whenever the idea hits. No notebook. No stopping to type. Just talk. Mycelia captures it as voice, messy and unfiltered. Later, when you're actually ready to build something, search for that half-formed concept you riffed about last month. Your creative process, but frictionless."
  }
];

export default function UseCases() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Who Benefits?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {useCase.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
