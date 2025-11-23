import { useState } from "react";

export default function Form() {
  const formDefaultState = {
    user: "",
    email: "",
    password: "",
  };
  const formErrorDefaultState = {
    userError: "",
    emailError: "",
    passwordError: "",
  };

  const [form, setForm] = useState(formDefaultState);
  const [formError, setFormError] = useState(formErrorDefaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { ...formErrorDefaultState };

    for (const key in form) {
      if (form[key].trim() === "") {
        newErrors[`${key}Error`] = `Error on field ${key}`;
      }
    }

    // Update errors
    setFormError(newErrors);

    // If any error exists, stop the submit
    const hasErrors = Object.values(newErrors).some((err) => err.length > 0);

    if (hasErrors) return;

    console.log("Valid form:", form);
  };

  const handleReset = () => {
    setForm(formDefaultState);
    setFormError(formErrorDefaultState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handActivation = (e) => {
    const message = "activated";
    e.stopPropagation();
    console.log(`${e.target} ${message}`);
  };

  return (
    <div
      onClick={handActivation}
      className="p-6 max-w-sm mx-auto"
      style={{
        padding: "1.5rem",
        maxWidth: "400px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginTop: "5%",
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        onClick={handActivation}
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={form.user}
          name="user"
          onChange={(e) => {
            handleChange(e);
          }}
          style={{
            width: "100%",
            height: "25px",
          }}
        />
        <br></br>
        {formError.userError && (
          <span
            style={{
              color: "red",
            }}
          >
            {formError.userError}
          </span>
        )}
        <br></br>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={form.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
          style={{
            width: "100%",
            height: "25px",
          }}
          onClick={handActivation}
          autoComplete="current-username"
        />
        <br></br>
        {formError.emailError && (
          <span
            style={{
              color: "red",
            }}
          >
            {formError.emailError}
          </span>
        )}
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={form.password}
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
          style={{
            width: "100%",
            height: "25px",
          }}
          autoComplete="current-password"
        />
        <br></br>
        {formError.passwordError && (
          <span
            style={{
              color: "red",
            }}
          >
            {formError.passwordError}
          </span>
        )}
        <br></br>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
        <button
          type="reset"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleReset}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
