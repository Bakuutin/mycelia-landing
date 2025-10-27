const teamMembers = [
  {
    emoji: "🐯",
    name: "Tigor",
    role: "Co-Founder",
    tags: ["2 startup exits", "Censorship Circumvention", "Privacy Tech", "Political Activism"]
  },
  {
    emoji: "☁️",
    name: "Petr",
    role: "Co-Founder",
    tags: ["Oxorio Co-Founder", "Web3 Security Expert", "5x ETHGlobal Winner", "zkSNARKs", "Ex-Intel", "Ex-Evernote"]
  }
];

export default function Team() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          The Team
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Built by experienced founders who understand privacy, security, and decentralized systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-32 h-32 bg-gray-900 rounded-full mx-auto mb-8 flex items-center justify-center text-5xl text-white">
                {member.emoji}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600 font-semibold mb-8 text-lg">
                {member.role}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {member.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
