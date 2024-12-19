import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const SaveData = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [validated] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: " ",
  });
  const { title, body } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      setFormData({ title: "", body: " " });
    }
    try {
      fetch("http://localhost:8080/blog", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate(`/`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=" Enter the Title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Post Description </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter the post body"
              name="body"
              value={data.body}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button type="submit">AddPost</Button>
      </Form>
    </>
  );
};
export default SaveData;
