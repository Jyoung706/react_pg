import React, { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleMentorUpdate = () => {
    const prevName = prompt("바꿀 멘토의 이름은?");
    const currentName = prompt("무엇으로 바꾸시겠습니까?");

    dispatch({ type: "updated", prevName, currentName });
  };

  const handleMentorAdd = () => {
    const name = prompt("멘토의 이름은 무엇입니까?");
    const title = prompt("멘토의 직업은 무엇입니까?");

    dispatch({ type: "added", name, title });
  };

  const handleMentorDelete = () => {
    const deleteName = prompt("누구를 삭제하시겠습니까?");

    dispatch({ type: "deleted", deleteName });
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
