// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgopw59olPAUNbhQZ_Rxp85PfZxN0Ep4Q",
    authDomain: "sorting-visualizer-1d7c9.firebaseapp.com",
    projectId: "sorting-visualizer-1d7c9",
    storageBucket: "sorting-visualizer-1d7c9.firebasestorage.app",
    messagingSenderId: "765362276861",
    appId: "1:765362276861:web:24470459377d0c3d88f194",
    measurementId: "G-7ZBT98XG2B"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email-signup').value;
    const feedback = document.getElementById('feedback').value;

    // Get selected sorting options
    const sortingOptions = Array.from(document.querySelectorAll('input[name="sorting"]:checked'))
        .map(checkbox => checkbox.value);

    try {
        // Add a new document with a generated ID
        await addDoc(collection(db, "response"), {
            name: name,
            email: email,
            feedback: feedback,
            sorting: sortingOptions // Store selected sorting options
        });
        alert("Feedback submitted successfully!");

        // Redirect to index.html
        window.location.href = "index.html";
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error submitting feedback. Please try again.");
    }
});