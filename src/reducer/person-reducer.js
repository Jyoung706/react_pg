export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prevName, currentName } = action;
      return {
        ...person,
        mentor: person.mentor.map((value) => {
          if (value.name === prevName) {
            return { ...value, name: currentName };
          }

          return value;
        }),
      };
    }

    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentor: [...person.mentor, { name, title }],
      };
    }

    case "deleted": {
      const { deleteName } = action;
      return {
        ...person,
        mentor: person.mentor.filter((value) => value.name !== deleteName),
      };
    }

    default: {
      throw new Error("Not Exist Type");
    }
  }
}
