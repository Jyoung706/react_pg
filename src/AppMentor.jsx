import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Jeon",
    title: "Developer",
    mentor: [
      {
        name: "Bob",
        title: "Full Stack Developer",
      },
      {
        name: "James",
        title: "Backend Developer",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <ul>
        {person.mentor.map((value, index) => (
          <li key={index}>
            {value.name} ({value.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prevName = prompt("바꿀 멘토의 이름은?");
          const name = prompt("무엇으로 바꾸시겠습니까?");

          setPerson((prev) => ({
            ...prev,
            mentor: prev.mentor.map((mentor) => {
              if (mentor.name === prevName) {
                return { ...mentor, name };
              }

              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
