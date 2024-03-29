import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

export default function ProyectoPopover({ children }) {
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
      <Button as="p" variant="primary">
        Hover me to see{children}
      </Button>
    </OverlayTrigger>
  );
}
