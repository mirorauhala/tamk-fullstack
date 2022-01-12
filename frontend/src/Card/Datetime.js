import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime); // use plugin

const Datetime = ({ id, time }) => {
  console.log(time);
  return (
    <Link
      to={"/p/" + id}
      className={
        "text-xs uppercase tracking-wide pt-2 text-neutral-500 hover:underline focus:underline"
      }
    >
      {dayjs().to(dayjs(time))}
    </Link>
  );
};

export { Datetime };
