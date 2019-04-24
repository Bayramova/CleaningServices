import { fetchData, fetchProtectedData } from "./fetch";

function postFeedback(feedback) {
  return fetchProtectedData("leave_feedback", "POST", feedback);
}

function getFeedbacks(id) {
  return fetchData(`company/${id}/feedbacks`);
}

export { postFeedback, getFeedbacks };
