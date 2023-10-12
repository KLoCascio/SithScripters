document.addEventListener('DOMContentLoaded', async function() {
  const drinks = document.querySelector('#drinks');
  const display = document.querySelector('#display');
  let response = await axios.get(`http://localhost:3001/drinks`);
  let responseRev = await axios.get(`http://localhost:3001/reviews`);

  response.data.forEach(drink => {
      const option = document.createElement('option');
      option.value = drink._id;
      option.id = drink._id;
      option.textContent = drink.name;
      drinks.appendChild(option);
  });


  // Function to add a new review to the database
  const addReview = async (text, reviewer) => {
      const response = await axios.post(`http://localhost:3001/reviews`, { text, reviewer });
      const newReview = response.data;
      reviews.push(newReview);
      displayReviews();
  };

  // Function to display reviews
  const displayReviews = () => {
      const reviewList = document.getElementById("reviewList");
      reviewList.innerHTML = "";

      reviews.forEach((review, index) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<b>${review.reviewer}</b>: ${review.text} 
              <button data-index="${index}" class="editReview">Edit</button>
              <button data-index="${index}" class="deleteReview">Delete</button>`;
          reviewList.appendChild(listItem);
      });
  };

  // Function to edit a review
  const editReview = (index, newText) => {
      reviews[index].text = newText;
      displayReviews();
  };

  // Function to delete a review
  const deleteReview = async (index) => {
      const reviewId = reviews[index]._id;
      await axios.delete(`http://localhost:3001/reviews/${reviewId}`);
      reviews.splice(index, 1);
      displayReviews();
  };

  // Event listener for form submission
  const form = document.getElementById("form");
  form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const reviewText = document.getElementById("reviewText").value;
      const reviewerName = document.getElementById("reviewerName").value;

      if (reviewText && reviewerName) {
          addReview(reviewText, reviewerName);
          form.reset();
      }
  });

  // Event delegation for editing and deleting reviews
  const reviewList = document.getElementById("reviewList");
  reviewList.addEventListener("click", (e) => {
      if (e.target.classList.contains("editReview")) {
          const index = e.target.getAttribute("data-index");
          const newText = prompt("Edit the review:", reviews[index].text);
          if (newText !== null) {
              editReview(index, newText);
          }
      }

      if (e.target.classList.contains("deleteReview")) {
          const index = e.target.getAttribute("data-index");
          const confirmDelete = confirm("Are you sure you want to delete this review?");
          if (confirmDelete) {
              deleteReview(index);
          }
      }
  });

  displayReviews();
});
