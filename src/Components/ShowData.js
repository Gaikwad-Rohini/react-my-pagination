import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const ShowData = () => {
  const [validated] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handelDelete = async (id) => {
    try {
      fetch(`http://localhost:8080/blog/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form noValidate validated={validated}>
        <table border={1} className="table table-striped">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <Link to={`/edit-post/${item.id}`}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>Edit
                  </Link>
                  &nbsp;
                  <Link>
                    <i
                      className="fa fa-trash-o"
                      aria-hidden="true"
                      onClick={() => handelDelete(item.id)}
                    >
                      Delete
                    </i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Form>
    </>
  );
};
export default ShowData;
