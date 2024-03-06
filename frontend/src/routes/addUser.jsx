import { useLoaderData, Link, Form, redirect } from "react-router-dom";
import { useState } from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = { email, password };

  const url = "http://localhost:8000/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return redirect("/login");
}
const UserCreate = () => {
  return (
    <>
      <h2>URL Submit Form</h2>
      <Form method="post">
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Add New User</button>
      </Form>
    </>
  );
};
export default UserCreate;
