import { Modal, Carousel } from 'react-bootstrap';

const ScreenshotModal = ({ show, onHide, title, images = [] }) => {
  return (
    <Modal className="screenshot-modal" show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100" src={img.url} alt={`Slide ${idx + 1}`} />
              {img.caption && (
                <Carousel.Caption>
                  <h4>{img.caption.title}</h4>
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ScreenshotModal;
