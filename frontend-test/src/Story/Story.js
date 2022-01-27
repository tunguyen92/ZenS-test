import React from "react";
import "../css/Story.css";

function Story() {
  return (
    <div class="story">
      <div class="container">
        <p class="paragraph">
          A child asked his father, "How were people born?" <br />
          So his father said, "Adam and Eve made babies, then their babies
          became adults and made babies, and so on." <br />
          The child then went to his mother, asked her the same question and she
          told him,
          <br />
          "We were monkeys then we evolved to become like we are now."
          <br />
          The child ran back to his father and said, "You lied to me!"
          <br />
          His father replied, "No, your mom was talking about her side of the
          family."
        </p>
        <div class="button">
          <button type="button" class="btn btn-primary">
            This is funny!
          </button>
          <button type="button" class="btn btn-success">
            This is not funny
          </button>
        </div>
      </div>
    </div>
  );
}

export default Story;
