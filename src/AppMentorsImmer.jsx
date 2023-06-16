import React from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, updatePerson] = useImmer(initialPerson);

  const handleMentorUpdate = () => {
    const prevName = prompt("바꿀 멘토의 이름은?");
    const currentName = prompt("무엇으로 바꾸시겠습니까?");
    updatePerson((person) => {
      const mentor = person.mentor.find((m) => m.name === prevName);
      mentor.name = currentName;
    });
  };

  const handleMentorAdd = () => {
    const name = prompt("멘토의 이름은 무엇입니까?");
    const title = prompt("멘토의 직업은 무엇입니까?");

    updatePerson((person) => {
      person.mentor.push({ name, title });
    });
  };

  const handleMentorDelete = () => {
    const deleteName = prompt("누구를 삭제하시겠습니까?");

    updatePerson((person) => {
      const index = person.mentor.findIndex((m) => m.name === deleteName);
      person.mentor.splice(index, 1);
    });
  };

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
      <button onClick={handleMentorUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleMentorAdd}>멘토 추가하기</button>
      <button onClick={handleMentorDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
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
};
