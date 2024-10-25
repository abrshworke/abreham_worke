let medCount = 0;
let editingMedId = null;

function showAddMedForm() {
  const medForm = document.getElementById("medForm");
  if (medForm.style.display === "none" || medForm.style.display === "") {
    medForm.style.display = "block";
  } else {
    medForm.style.display = "none";
  }
}

function addMed() {
  const medName = document.getElementById("medName").value;
  const brand = document.getElementById("brand").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const dosage = document.getElementById("dosage").value;

  if (medName && dosage) {
    if (editingMedId) {
      // Update existing med
      const medElement = document.getElementById(editingMedId);
      const medNameElement = medElement.querySelector("h3");
      const brandElement = medElement.querySelector(".brand");
      const priceElement = medElement.querySelector(".price");
      const descriptionElement = medElement.querySelector(".description");
      const dosageElement = medElement.querySelector(".dosage");

      medNameElement.textContent = medName;
      brandElement.textContent = brand;
      priceElement.textContent = price;
      descriptionElement.textContent = description;
      dosageElement.textContent = dosage;

      editingMedId = null;
    } else {
      // Add new med
      medCount++;

      const newMed = document.createElement("div");
      newMed.classList.add("food-item", "columns");
      newMed.id = `med${medCount}`;
      newMed.innerHTML = `
        <div class="column is-two-thirds">
          <button class="buttonb">
            <h3 class="is-size-3 has-text-white">${medName}</h3>
          </button>
          <p class="has-text-white mt-2"><strong>Brand:</strong> <span class="brand">${brand}</span></p>
          <p class="has-text-white"><strong>Price:</strong> <span class="price">${price}</span></p>
          <p class="has-text-white"><strong>Description:</strong></p>
          <div class="has-text-white description">${description}</div>
          <p class="has-text-white mt-2"><strong>Dosage:</strong></p>
          <p class="has-text-white dosage">${dosage}</p>
        </div>
        <div class="column is-flex is-flex-direction-column">
          <button class="button is-small is-primary" onclick="editMed('med${medCount}')">Edit</button>
          <button class="button is-small is-danger" onclick="deleteMed('med${medCount}')">Delete</button>
        </div>
      `;

      document.getElementById("sampleFood").appendChild(newMed);
    }

    document.getElementById("medName").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dosage").value = "";

    document.getElementById("medForm").style.display = "none";
  } else {
    alert("Please fill in all fields.");
  }
}

function editMed(medId) {
  const medElement = document.getElementById(medId);
  if (medElement) {
    const medNameElement = medElement.querySelector("h3");
    const brandElement = medElement.querySelector(".brand");
    const priceElement = medElement.querySelector(".price");
    const descriptionElement = medElement.querySelector(".description");
    const dosageElement = medElement.querySelector(".dosage");

    const medName = medNameElement.textContent;
    const brand = brandElement.textContent;
    const price = priceElement.textContent;
    const description = descriptionElement.textContent;
    const dosage = dosageElement.textContent;

    document.getElementById("medName").value = medName;
    document.getElementById("brand").value = brand;
    document.getElementById("price").value = price;
    document.getElementById("description").value = description;
    document.getElementById("dosage").value = dosage;

    editingMedId = medId;

    document.getElementById("medForm").style.display = "block";
  }
}

function deleteMed(medId) {
  const medElement = document.getElementById(medId);
  if (medElement) {
    medElement.remove();
  }
}