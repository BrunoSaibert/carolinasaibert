import { formatISO } from "date-fns";
import { format } from "date-fns-tz";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>
        {format(date, "dd/MM/yyyy", {
          timeZone: "America/Sao_Paulo",
        })}
      </span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </time>
  );
}
