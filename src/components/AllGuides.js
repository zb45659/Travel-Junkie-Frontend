import React from "react";
import { Link } from "react-router-dom";

export default function AllGuides(props) {
  return (
    <>
      <h1>All Guides</h1>
      <form onSubmit={(e) => props.createGuide(e)}>
        Guide Name: <input type="text" name="name" />
        <input type="submit" value="New Guide" />
      </form>

      <ul>
        {props.guides.map((guide, index) => {
          return (
            <li key={guide.id}>
              <Link to={`/guides/${guide.id}`} key={guide.id}>
                {guide.name}
              </Link>
              <button
                key={`button-${guide.id}`}
                id={guide.id}
                arrayindex={index}
                onClick={props.deleteGuide}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
