import { useLoaderData, Link, redirect, Form } from "react-router-dom";

export async function loader() {
  const url = "http://localhost:8000/links";
  const data = await fetch(url).then((response) => response.json());

  return { data };
}

const Urls = () => {
  const { data } = useLoaderData();

  return (
    <>
      <h2>URL List</h2>
      <ul>
        {data.map((url, index) => {
          return (
            <li key={index}>
              <Link to={url.og}>
                {url.shorturl} - {url.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Urls;
