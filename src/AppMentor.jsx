import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Jeon",
    title: "Developer",
    mentor: {
      name: "Bob",
      title: "Senior Developer",
    },
  });
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt("멘토 이름은 무엇입니까?");
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt("멘토의 직업은 무엇입니까?");
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
