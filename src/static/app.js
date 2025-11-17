document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const activitySelect = document.getElementById("activity");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();

      // Clear loading message
      activitiesList.innerHTML = "";

      // Populate activities list
      renderActivities(activities);

      // Add option to select dropdown
      Object.entries(activities).forEach(([name, details]) => {
<<<<<<< HEAD
=======
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        const spotsLeft = details.max_participants - details.participants.length;

        // Participants section
        let participantsHTML = "";
        if (details.participants.length > 0) {
          participantsHTML = `
            <div class="participants-section">
              <strong>Participants:</strong>
              <ul class="participants-list" style="list-style: none; padding-left: 0;">
                ${details.participants.map(email => `
                  <li style="display: flex; align-items: center; gap: 0.5em;">
                    <span>${email}</span>
                    <span class="delete-participant" title="Remove participant" data-activity="${encodeURIComponent(name)}" data-email="${encodeURIComponent(email)}" style="cursor:pointer;color:#c00;font-weight:bold;">&#10006;</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          `;
        } else {
          participantsHTML = `
            <div class="participants-section">
              <strong>Participants:</strong>
              <span class="no-participants">No participants yet</span>
            </div>
          `;
        }

        activityCard.innerHTML = `
                  const activityCard = document.createElement("div");
                  activityCard.className = "activity-card";

                  const spotsLeft = details.max_participants - details.participants.length;

                  // Participants section
                  let participantsHTML = "";
                  if (details.participants.length > 0) {
                    participantsHTML = `
                      <div class="participants-section">
                        <strong>Participants:</strong>
                        <ul class="participants-list" style="list-style: none; padding-left: 0;">
                          ${details.participants.map(email => `
                            <li style="display: flex; align-items: center; gap: 0.5em;">
                              <span>${email}</span>
                              <span class="delete-participant" title="Remove participant" data-activity="${encodeURIComponent(name)}" data-email="${encodeURIComponent(email)}" style="cursor:pointer;color:#c00;font-weight:bold;">&#10006;</span>
                            </li>
                          `).join("")}
                        </ul>
                      </div>
                    `;
                  } else {
                    participantsHTML = `
                      <div class="participants-section">
                        <strong>Participants:</strong>
                        <span class="no-participants">No participants yet</span>
                      </div>
                    `;
                  }

                  activityCard.innerHTML = `
                    <h4>${name}</h4>
                    <p>${details.description}</p>
                    <p><strong>Schedule:</strong> ${details.schedule}</p>
                    <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
                    ${participantsHTML}
                  `;

                  activitiesList.appendChild(activityCard);

                  // Add option to select dropdown
                  const option = document.createElement("option");
                  option.value = name;
                  option.textContent = name;
                  activitySelect.appendChild(option);
                });

                // Add event listeners for delete icons
                document.querySelectorAll('.delete-participant').forEach(icon => {
                  icon.addEventListener('click', async (e) => {
                    const activity = decodeURIComponent(icon.getAttribute('data-activity'));
                    const email = decodeURIComponent(icon.getAttribute('data-email'));
                    if (!confirm(`Are you sure you want to remove ${email} from ${activity}?`)) return;
                    try {
                      const response = await fetch(
                        `/activities/${encodeURIComponent(activity)}/unregister?email=${encodeURIComponent(email)}`,
                        { method: 'DELETE' }
                      );
                      const result = await response.json();
                      if (response.ok) {
                        // Optionally show a message
                        messageDiv.textContent = result.message;
                        messageDiv.className = "success";
                        messageDiv.classList.remove("hidden");
                        setTimeout(() => { messageDiv.classList.add("hidden"); }, 3000);
                        fetchActivities();
                      } else {
                        messageDiv.textContent = result.detail || "Failed to unregister participant.";
                        messageDiv.className = "error";
                        messageDiv.classList.remove("hidden");
                        setTimeout(() => { messageDiv.classList.add("hidden"); }, 3000);
                      messageDiv.textContent = "Error contacting server.";
                      messageDiv.className = "error";
                      messageDiv.classList.remove("hidden");
                      setTimeout(() => { messageDiv.classList.add("hidden"); }, 3000);
                      console.error("Error unregistering participant:", error);
                    }
                  });
                });
              } catch (error) {
                activitiesList.innerHTML = "<p>Failed to load activities. Please try again later.</p>";
                console.error("Error fetching activities:", error);
              }
            }
            setTimeout(() => { messageDiv.classList.add("hidden"); }, 3000);
            console.error("Error unregistering participant:", error);
          }
        });
      });
    } catch (error) {
      activitiesList.innerHTML = "<p>Failed to load activities. Please try again later.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Function to render activities
  function renderActivities(activities) {
    const activitiesList = document.getElementById("activities-list");
    activitiesList.innerHTML = "";

    if (!activities.length) {
      activitiesList.innerHTML = '<p>No activities available.</p>';
      return;
    }

    activities.forEach(activity => {
      const card = document.createElement('div');
      card.className = 'activity-card';

      const spotsLeft = activity.max_participants - activity.participants.length;

      card.innerHTML = `
        <h4>${activity.name}</h4>
        <p>${activity.description}</p>
        <p><strong>Schedule:</strong> ${activity.schedule}</p>
        <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
      `;

      // Participants section
      const participantsSection = document.createElement('div');
      participantsSection.className = 'participants-section';

      const participantsHeading = document.createElement('h5');
      participantsHeading.textContent = 'Participants';
      participantsSection.appendChild(participantsHeading);

      const participantsList = document.createElement('ul');
      participantsList.className = 'participants-list';

      if (activity.participants && activity.participants.length > 0) {
        activity.participants.forEach(email => {
          const li = document.createElement('li');
          li.textContent = email;
          participantsList.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = 'No participants yet.';
        li.style.fontStyle = 'italic';
        li.style.color = '#888';
        participantsList.appendChild(li);
      }

      participantsSection.appendChild(participantsList);
      card.appendChild(participantsSection);

      activitiesList.appendChild(card);
    });
  }

  // Handle form submission
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const activity = document.getElementById("activity").value;

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(activity)}/signup?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (response.ok) {
        messageDiv.textContent = result.message;
        messageDiv.className = "success";
        signupForm.reset();
        fetchActivities(); // Refresh activities list after signup
      } else {
        messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
      }

      messageDiv.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);
    } catch (error) {
      messageDiv.textContent = "Failed to sign up. Please try again.";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");
      console.error("Error signing up:", error);
    }
  });

  // Initialize app
  fetchActivities();
});
