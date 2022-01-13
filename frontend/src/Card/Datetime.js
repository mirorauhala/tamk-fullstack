import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import * as utc from "dayjs/plugin/utc";
import * as timezone from "dayjs/plugin/timezone";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(dayjs.tz.guess());

const Datetime = ({ id, time }) => {
  const getFormattedDatetime = () => dayjs.tz(time, "UTC").fromNow();

  return (
    <Link
      to={"/p/" + id}
      className={
        "px-5 text-xs uppercase tracking-wide pt-2 text-neutral-500 hover:underline focus:underline"
      }
    >
      <time dateTime={time}>{getFormattedDatetime()}</time>
    </Link>
  );
};

export { Datetime };
