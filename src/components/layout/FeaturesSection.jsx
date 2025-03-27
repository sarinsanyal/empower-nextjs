"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiOutlineBell, AiOutlineBulb } from "react-icons/ai";
import { MdInsights } from "react-icons/md";

const features = [
  {
    title: "Smart Reminders",
    description:
      "Never miss a journal entry with our AI-powered reminders. Schedule daily, weekly, or custom reminders that adapt to your writing habits. Stay consistent and build a powerful journaling habit effortlessly.",
    icon: <AiOutlineBell className="text-6xl" />,
  },
  {
    title: "Journaling Made Easy",
    description:
      "Write your thoughts in a clean, distraction-free space designed for deep reflection. With an intuitive and minimalistic interface, capturing your thoughts has never been more seamless and enjoyable.",
    icon: <AiOutlineBulb className="text-6xl" />,
  },
  {
    title: "Deep Analysis & Insights",
    description:
      "Get AI-driven insights into your writing patterns, moods, and recurring themes. Track your emotional progress, recognize patterns in your thoughts, and gain a better understanding of your personal growth over time.",
    icon: <MdInsights className="text-6xl" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-transparent max-w-5xl mx-auto mt-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose EmPower Journal?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="shadow-lg backdrop-blur-md bg-background/50 border border-border p-6 transform transition-transform hover:scale-[1.03]"
          >
            <CardHeader className="flex flex-col items-center text-center">
              {feature.icon}
              <CardTitle className="text-xl mt-2">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-base leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
