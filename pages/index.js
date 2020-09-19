import {
  ButtonOutline,
  ButtonFlat,
  Card,
  CardBox,
  SelectBox,
  TextAndIcon,
} from "../components/ui";
import { CallTitle, DateAndTime, VideoController } from "../components";

import { UserIcon, ArrowDownIcon } from "../components/icons";
export default function Home() {
  return (
    <Card>
      <CallTitle fullName="Abdussamed Bin Fettah Abu Salih" />
      <DateAndTime
        date="7 Oct, Weds"
        time="10:15AM - 10:30AM"
        timezone="Timezone: Europe/Amsterdam"
      />
      <VideoController />
      <CardBox>
        <TextAndIcon>
          <UserIcon className="md-icon" />{" "}
          <span className="truncate-text">
            Ahmet Bin Mustafa Abu Hamza El Mağribeyn
          </span>
        </TextAndIcon>
      </CardBox>
      <br />
      <div className="row-flex align-items-center space-beetwen">
        <span>Camera</span>
        <SelectBox text="Facetime HD Camera " />
      </div>
      <div className="row-flex align-items-center space-beetwen">
        <span>Speaker</span>
        <SelectBox text="Built-in Output (Headpone lorem impsum)" />
      </div>
      <div className="row-flex align-items-center space-beetwen">
        <span>Microphone</span>
        <SelectBox text="Built-in Microphone (Epsis lorem impsum)" />
      </div>
      <div className="row-flex align-items-center space-beetwen">
        <span>Sound Test</span>
        <ButtonOutline text="Play Sound" />
      </div>
      <div className="row-flex" style={{ marginTop: "24px" }}>
        <ButtonFlat text="Join Call" />
      </div>
    </Card>
  );
}
