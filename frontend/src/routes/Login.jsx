import { useLoaderData, Link, Form, redirect } from "react-router-dom";
import { useState } from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = { email, password };

  const url = "http://localhost:8000/login";

  const userLogin = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    data = await response.json();

    if (response.ok) {
      window.alert(data.detail);
      return true;
    } else {
      window.alert("Login Failed");
      return false;
    }
  };

  const login = await userLogin(data);
  return login ? redirect("/") : redirect("/login");
}
const login = () => {
  return (
    <>
      <h2>Login</h2>
      <Form method="post">
        <label>
          Your Email
          <input type="text" name="email" />
        </label>
        <label>
          Your Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Add New User</button>
      </Form>
    </>
  );
};

export default login;
