import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EditData = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/blog/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handelInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:8080/blog/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: data.title,
          body: data.body,
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
    <div className="user-form">
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={data.title}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <input
            type="text"
            className="form-control"
            id="body"
            name="body"
            value={data.body}
            onChange={handelInput}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          EDIT
        </button>
      </form>
    </div>
  );
};

export default EditData;
