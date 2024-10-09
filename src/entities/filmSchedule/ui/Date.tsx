"use client";

import { useState } from "react";

import { RadioItem } from "@/src/shared/ui";

import { formatDateValue } from "../lib/formatDateValue";
import { SchedulesProps } from "@/src/shared/types";

interface DateProps {
  schedule: SchedulesProps[];
}

export const Date = ({ schedule }: DateProps) => {
  const [currentDate, setCurrentDate] = useState(schedule[0].date);

  return (
    <>
      {schedule.map(({ date }) => (
        <RadioItem
          name="date"
          value={date}
          key={date}
          id={date}
          title={formatDateValue(date)}
          onChange={(e) => {
            setCurrentDate(e.currentTarget.value);
          }}
          currentDate={currentDate}
        />
      ))}
    </>
  );
};
