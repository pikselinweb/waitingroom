import { FabButton } from "./ui";
import { MicrophoneIcon, CameraIcon, OptionsIcon } from "./icons";
export default function VideoController() {
  return (
    <div className="video-controller">
      <div className="video-content">
        <FabButton>
          <MicrophoneIcon />
        </FabButton>
        <FabButton>
          <CameraIcon />
        </FabButton>
        <FabButton>
          <OptionsIcon />
        </FabButton>
      </div>
    </div>
  );
}
