import { useLoaderData, Link, Form, redirect } from "react-router-dom";
import { useState } from "react";
import React from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const logindata = { email, password };
  try {
    const url = `${import.meta.env.VITE_SOURCE_URL}/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    });
    const statusCode = response.status;
    const data = await response.json();
    const { access_token } = data;
    localStorage.clear;
    localStorage.setItem("access_token", access_token);
    return statusCode === 200 ? true : false;
  } catch (error) {
    console.error("ERROR: ", error);
    return false;
  }
}
// if (response.ok) {
//   window.alert(data.detail);
//   return true;
// } else {
//   window.alert("Login Failed");
//   return false;
//   return login ? redirect("/") : redirect("/login");

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
