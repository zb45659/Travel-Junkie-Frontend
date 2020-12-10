import React from "react";

export default function GuideDetail(props) {
  console.log(props);
  const guideDetail = props.guides.find((guide) => {
    return guide.id === parseInt(props.match.params.id);
  });

  const showReviews = () => {
    if (guideDetail.Reviews) {
      return guideDetail.Reviews.map((review) => {
        return <li key={review.id}>{review.title}</li>;
      });
    }
  };

  return (
    <>
      <h1>{guideDetail.name} Details</h1>

      <h3>Edit Form</h3>
      <form onSubmit={(e) => props.updateGuide(e)}>
        <input type="text" name="name" placeholder={guideDetail.name} />
        <input type="hidden" name="guideId" value={guideDetail.id} />
        <input type="submit" value="Update Guide" />
      </form>

      <br />
      <br />
      <h3>Add a New {guideDetail.name} Review</h3>
      <form onSubmit={(e) => props.createReview(e)}>
        <input type="text" name="title" placeholder="Review Title" />
        <input type="hidden" name="guideId" value={guideDetail.id} />
        <input type="submit" value="New Review Title" />
      </form>
      <ol>{showReviews()}</ol>
    </>
  );
}