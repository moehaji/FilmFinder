import React, { useEffect, useState } from "react";
import { IMovie } from "../../Interfaces/IMovie";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

import './AddReview.css';
export const AddReview: React.FC = () => {

  const currMovie = useSelector((state: RootState) => state.movie);
  const [input, setInput] = useState<string>("");

  const handleInput = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  }

  console.log(currMovie.currMovie);
  return (
    <div className="add-review">
        <h1>Add Review</h1>
        <form>
            <textarea onChange={handleInput} required placeholder="Add Review"></textarea>
            <button className="submit-btn">Submit</button>
        </form>
    </div>
  );
};
