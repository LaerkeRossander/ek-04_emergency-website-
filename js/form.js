document.addEventListener("DOMContentLoaded", function () {
  const crisisTypeSelect = document.getElementById("crisis-type");
  const otherCrisisDetail = document.getElementById("other-crisis-detail");
  const otherCrisisText = document.getElementById("other-crisis-text");

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
});
