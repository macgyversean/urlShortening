import { useLoaderData, Link, Form, redirect } from "react-router-dom";
import { useState } from "react";
import React from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const og = formData.get("og");
  const shorturl = formData.get("shorturl");
  const title = formData.get("title");
  const user_id = formData.get("user_id");
  const data = { og, shorturl, title, user_id: Number(user_id) };

  const url = "http://localhost:8000/create/links";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify(data),
  });
  return null;
}
const AddLink = () => {
  return (
    <>
      <h2>URL Submit Form</h2>
      <Form method="POST">
        <label>
          OG
          <input type="text" name="og" />
        </label>
        <label>
          Add Short Url
          <input type="hidden" name="shorturl" value="" />
        </label>
        <label>
          title
          <input type="text" name="title" />
        </label>
        <label>
          UserId
          <input type="hidden" name="user_id" value={user_id} />
        </label>
        <button type="submit">Add New Link</button>
      </Form>
    </>
  );
};
export default AddLink;
