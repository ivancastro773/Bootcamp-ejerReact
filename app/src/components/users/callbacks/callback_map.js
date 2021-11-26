//data
import data from "../mocks/users_mock";

export const listObject = data.map((items, i) => {
  return (
    <li key={i}>
      {items.email}//{items.name}//{items.pass}
    </li>
  );
});
