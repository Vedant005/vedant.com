"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import YearButton from "../utils/YearButton";
import { getGitHubYears } from "../utils/getYears";

function GithubGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );
  const github: { light: string[]; dark: string[] } = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };
  const username = "vedant005";
  const today = new Date().getFullYear();
  const joinYear = 2022;
  const years = getGitHubYears(joinYear);

  return (
    <div className="max-w-4xl flex xl:flex-row flex-col gap-4  ">
      <div className=" border dark:border-zinc-500 border-zinc-200 p-5 max-w-fit max-h-fit rounded-lg  ">
        <GitHubCalendar
          username={username}
          theme={github}
          blockSize={11}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-center xl:flex-col flex-row flex-wrap gap-2">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default GithubGraph;
