import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function ProyectoPopover({children}) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  
  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={popover}
    >
      {children}
      {/* <Button variant="success">Hover me to see</Button> */}
    </OverlayTrigger>
  );
}
