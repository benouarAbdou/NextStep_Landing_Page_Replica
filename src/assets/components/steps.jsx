import React from "react";
import StepCard from "./card";

// Import media files (assuming they are in the public folder)
import step1Video from "../videos/step1.mp4";
import step2Video from "../videos/step2.mp4";
import step3Image from "../images/step3.webp";

const Steps = () => {
  const stepsData = [
    {
      stepNumber: 1,
      title: "Create your process",
      description:
        "Whether you start from scratch or use AI to jumpstart your workflow, it's easy to build a custom, step-by-step process that fits how your team works.",
      listItems: [
        "AI-assisted or manual process creation",
        "Add content, inputs, dependencies, and dynamic due dates",
        "Drag-and-drop step builder – no code required"
      ],
      media: { type: "video", src: step1Video }
    },
    {
      stepNumber: 2,
      title: "Run your process, the right way, every time",
      description:
        "Launch your process and guide your team through each task with built-in structure, reminders, and automations.",
      listItems: [
        "Run repeatable processes with consistency",
        "Dynamic due dates keep things on schedule",
        "Email alerts and smart notifications"
      ],
      media: { type: "video", src: step2Video }
    },
    {
      stepNumber: 3,
      title: "Track what's working. Improve what's not.",
      description:
        "See how your processes are actually being used, then make improvements to boost efficiency and results.",
      listItems: [
        "Real-time analytics to monitor every run",
        "Team progress tracking",
        "Update and optimize processes for future use"
      ],
      media: { type: "image", src: step3Image }
    }
  ];

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto gap-8">
      {stepsData.map((step) => (
        <StepCard
          key={step.stepNumber}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          listItems={step.listItems}
          media={step.media}
        />
      ))}
    </div>
  );
};

export default Steps;
