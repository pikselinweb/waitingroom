import Box from "./ui/card/box";
import TextAndIcon from "./ui/card/textandicon";
import { CalendarIcon, ClockIcon } from "./icons";
export default function DateAndTime(props) {
  const { date, time, timezone } = props;
  return (
    <div style={{ margin: "0px 8px" }}>
      <Box>
        <TextAndIcon>
          <CalendarIcon />
          <small>{date}</small>
        </TextAndIcon>
        <TextAndIcon>
          <ClockIcon />
          <small>{time}</small>
        </TextAndIcon>
      </Box>
      <div
        className="text-center"
        style={{ marginTop: "8px", marginBottom: "24px" }}
      >
        <small className="medium-c">{timezone}</small>
      </div>
    </div>
  );
}
