// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const addForm = document.querySelector("form")

addForm.addEventListener("submit", async(event) => {
    event.preventDefault()

    const ratingSchema = new FormData(addForm)
    const reqBody = Object.fromEntries(ratingSchema)

    const response = await fetch("/add/rating", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
    });
    window.location.href = "/ratings"
})