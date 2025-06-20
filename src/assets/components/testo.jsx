import pic from "../images/Headshot.webp";
const Testemonials = () => {
  return (
    <div className="max-w-3xl mx-auto  text-left py-20">
      <div className="border border-gray-300 rounded-full px-6 py-1 mb-6 w-fit">
        <span className="text-sm font-medium text-gray-800">
          ABOUT NEXTSTEP
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl ml-4 font-bold text-gray-900 mb-6">
        Most people underestimate the
        <br />
        <span className="bg-yellow-300 inline-block px-2 py-1 transform -rotate-1">
          power of great processes
        </span>
      </h1>

      {/* Content */}
      <div className="space-y-4 text-gray-700 ml-4">
        <p>
          Launching new features, onboarding customers, sending invoices,
          closing support tickets, none of it works without good process.
        </p>
        <p>
          Processes run everything, from landing planes to growing businesses.
        </p>
        <p>
          But when it comes to executing their most important work, most teams
          rely on scattered docs, Slack messages, and memory.
        </p>
        <p>
          I've tried all the tools. They're great at documenting processes, but
          they're clunky, expensive, and painful to set up. After years of
          working with fast-moving teams, I realized: most of the real work
          isn't in projects or strategy, it's in repeatable processes.
        </p>
        <p>
          I wanted something simple. Something my team could actually use. Clean
          like Notion. Structured like Airtable. Built for doing, not just
          storing.
        </p>
        <p>
          So I built NextStep, a simple and flexible way to create and run your
          team's most important processes.
        </p>
        <p>
          No complexity. No enterprise bloat. Just process that works. And if
          you ever need help, I'm just an email away,{" "}
          <a
            href="mailto:ryan@getnextstep.io"
            className="text-[#FE9A00] hover:underline"
          >
            ryan@getnextstep.io
          </a>
        </p>
      </div>

      <div className="flex items-center mt-8">
        <img src={pic} alt="" className="w-20 h-20 rounded-full " />
        <div className="flex flex-col items-start justify-center ml-4 gap-1">
          <p className="bg-yellow-300 text-sm font-medium inline-block px-2 py-1 transform -rotate-1">
            Ryan Walker
          </p>
          <p className="font-medium text-sm">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
