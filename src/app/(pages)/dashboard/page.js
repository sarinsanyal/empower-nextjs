"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineFileText, AiOutlineLineChart, AiOutlineCalendar } from "react-icons/ai";

const journalStats = {
    totalEntries: 125,
    streak: 14,
    avgWordCount: 380,
};

const moodData = [
    { day: "Mon", mood: 3 },
    { day: "Tue", mood: 4 },
    { day: "Wed", mood: 5 },
    { day: "Thu", mood: 2 },
    { day: "Fri", mood: 4 },
    { day: "Sat", mood: 5 },
    { day: "Sun", mood: 3 },
];

const wordCountData = [
    { day: "Mon", words: 200 },
    { day: "Tue", words: 450 },
    { day: "Wed", words: 300 },
    { day: "Thu", words: 600 },
    { day: "Fri", words: 500 },
    { day: "Sat", words: 700 },
    { day: "Sun", words: 550 },
];

export default function Dashboard() {
    return (
        <section
            className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center space-y-10 pt-20"
            style={{ fontFamily: "Geist, sans-serif" }}
        >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Your Dashboard</h1>
            {/* Progress Indicator */}
            <div className="w-full max-w-sm sm:max-w-md mt-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-3">Journaling Consistency</h2>
                <Progress value={70} className="h-2 sm:h-3 bg-background/50" />
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
                {Object.entries(journalStats).map(([key, value], index) => (
                    <Card key={index} className="p-4 shadow-md bg-background/50">
                        <CardHeader className="flex flex-row items-center space-x-4">
                            {key === "totalEntries" && <AiOutlineFileText className="text-3xl sm:text-4xl text-blue-400" />}
                            {key === "streak" && <AiOutlineCalendar className="text-3xl sm:text-4xl text-green-400" />}
                            {key === "avgWordCount" && <AiOutlineLineChart className="text-3xl sm:text-4xl text-yellow-400" />}
                            <CardTitle className="text-sm sm:text-base capitalize">{key.replace(/([A-Z])/g, ' $1')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl sm:text-2xl font-bold">{value} {key === "streak" ? "days" : key === "avgWordCount" ? "words" : ""}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
                {/* Mood Trend */}
                <Card className="p-4 shadow-md bg-background/50">
                    <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Mood Trends</CardTitle>
                    </CardHeader>
                    <CardContent className="h-52 sm:h-60">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={moodData}>
                                <XAxis dataKey="day" stroke="#000" />
                                <YAxis stroke="#000" />
                                <Tooltip />
                                <Line type="monotone" dataKey="mood" stroke="#38bdf8" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Word Count */}
                <Card className="p-4 shadow-md bg-background/50">
                    <CardHeader>
                        <CardTitle className="text-base sm:text-lg">Word Count Per Day</CardTitle>
                    </CardHeader>
                    <CardContent className="h-52 sm:h-60">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={wordCountData}>
                                <XAxis dataKey="day" stroke="#000" />
                                <YAxis stroke="#000" />
                                <Tooltip />
                                <Bar dataKey="words" fill="#fbbf24" barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

        </section>
    );
}