import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from "date-fns";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-10">
        <div>
        <h2 className="text-xl font-semibold font-public-sans text-gray-1">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        </div>
        <div className="flex items-center gap-4">
        <button onClick={prevMonth} className="text-lg font-bold"><img src={'images/arrow-left.png'} alt="" /></button>
        <button onClick={nextMonth} className="text-lg font-bold"><img src={'images/arrow-right.png'} alt="" /></button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const date = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs text-center font-semibold font-public-sans text-gray-1">
          {date[i].toUpperCase()}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`text-center py-2 ${
              !isSameMonth(day, monthStart) ? "text-gray-400 text-sm font-normal font-mulish " : ""
            } ${
              isToday(day) ? "bg-blue-500 text-white rounded-full" : ""
            }`}
            key={day}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="w-80 mx-auto p-4 border rounded-lg shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isSameMonth(date, monthStart) {
  return date.getMonth() === monthStart.getMonth();
}

export default Calendar;
