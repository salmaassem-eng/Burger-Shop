'use client';

export default function ErrorPage({error}) {
  return (
    <div className="error">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
}