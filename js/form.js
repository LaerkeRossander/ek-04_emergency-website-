document.addEventListener("DOMContentLoaded", function () {
  const crisisTypeSelect = document.getElementById("crisis-type");
  const otherCrisisDetail = document.getElementById("other-crisis-detail");
  const otherCrisisText = document.getElementById("other-crisis-text");
  const form = document.getElementById("webform");
  const summarySection = document.querySelector("#form-summary article");

  // Handle "Andet" option show/hide
  crisisTypeSelect.addEventListener("change", function () {
    if (this.value === "other") {
      otherCrisisDetail.style.display = "block";
      otherCrisisText.setAttribute("required", "required");
    } else {
      otherCrisisDetail.style.display = "none";
      otherCrisisText.removeAttribute("required");
      otherCrisisText.value = "";
    }
  });

  // SUMMARY OG OPSUMMERING AF FORMS

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stopper normal form submission

    // Samler alle form data
    const formData = new FormData(form);
    let summaryHTML = "<h3>Din indberetning:</h3>";

    // Behandler hvert felt og viser kun udfyldte felter
    for (let [name, value] of formData.entries()) {
      if (value.trim() !== "") {
        // Laver pæne labels og display værdier
        let label = getFieldLabel(name);
        let displayValue = getDisplayValue(name, value);

        summaryHTML += `<div class="summary-item">
          <strong>${label}:</strong> ${displayValue}
        </div>`;
      }
    }

    // Håndterer checkboxes særskilt
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length > 0) {
      summaryHTML += `<div class="summary-item">
        <strong>Udløsende faktorer:</strong>
        <ul>`;
      checkboxes.forEach((checkbox) => {
        summaryHTML += `<li>${getDisplayValue("triggers", checkbox.value)}</li>`;
      });
      summaryHTML += `</ul></div>`;
    }

    // Tilføjer timestamp
    const now = new Date();
    summaryHTML += `<div class="summary-item">
      <strong>Indberettet:</strong> ${now.toLocaleDateString("da-DK")} kl. ${now.toLocaleTimeString("da-DK")}
    </div>`;

    // Viser i summary section
    summarySection.innerHTML = summaryHTML;

    // Scroller til summary
    document.getElementById("form-summary").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Helper function to get user-friendly field labels - oversætter felt navne til danske labels
  function getFieldLabel(fieldName) {
    const labels = {
      name: "Navn",
      age: "Alder",
      "crisis-type": "Type af tøjkrise",
      "other-crisis-text": "Beskrivelse af anden krise",
      intensity: "Krisens intensitet",
      duration: "Varighed",
      description: "Beskrivelse",
      solution: "Løsning",
      "help-rating": "Vurdering af hjælp",
      newsletter: "Nyhedsbrev",
    };
    return labels[fieldName] || fieldName;
  }

  // Helper function to get user-friendly display values - oversætter værdier til brugervenlige tekster
  function getDisplayValue(fieldName, value) {
    const valueMap = {
      "crisis-type": {
        "morning-panic": 'Morgen panik - "Jeg har intet at tage på!"',
        "event-stress": "Event stress - Speciel lejlighed",
        "weather-confusion": "Vejr forvirring",
        "body-image": "Kropsimage problemer",
        "trend-pressure": "Trend pres",
        "budget-crisis": "Budget krise",
        other: "Andet",
      },
      age: {
        "under-18": "Under 18 år",
        "18-25": "18-25 år",
        "26-35": "26-35 år",
        "36-45": "36-45 år",
        "over-45": "Over 45 år",
      },
      duration: {
        "under-30min": "Under 30 minutter",
        "30min-2hours": "30 minutter - 2 timer",
        "over-2hours": "Over 2 timer",
        ongoing: "Stadig i gang",
      },
      triggers: {
        "empty-wardrobe": "Følelse af tom garderobe",
        "body-changes": "Kropslige forandringer",
        "social-pressure": "Socialt pres",
        weather: "Uforudsigeligt vejr",
        budget: "Økonomiske begrænsninger",
        trends: "Nye trends jeg ikke forstår",
      },
      "help-rating": {
        "very-helpful": "Meget hjælpsomt",
        "somewhat-helpful": "Noget hjælpsomt",
        "not-helpful": "Ikke hjælpsomt",
        "made-worse": "Gjorde det værre",
      },
    };

    if (fieldName === "intensity") {
      return `${value}/10`;
    }

    if (fieldName === "newsletter" && value === "yes") {
      return "Ja tak til tips og råd";
    }

    return valueMap[fieldName]?.[value] || value;
  }
});
