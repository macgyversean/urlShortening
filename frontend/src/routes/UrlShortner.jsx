import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  const url = "http://localhost:8000/URLS";
  const data = await fetch(url).then((response) => response.json());

  return { data };
}

const URLS = () => {
  const { data } = useLoaderData();

  return (
    <>
      <h2>URL List</h2>
      <ul>
        {data.map((url, index) => {
          return (
            <li key={index}>
              <Link to={url.slug}>
                {url.name} - {url.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default URLS;
