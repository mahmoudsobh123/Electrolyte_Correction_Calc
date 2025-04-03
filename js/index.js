function calculateResult() {
  var B1 = document.querySelector(".B1").value;

  var B5 = document.querySelector(".B5");
  var B6 = document.querySelector(".B6");
  var B7 = document.querySelector(".B7");
  var B8 = document.querySelector(".B8");

  var C5 = parseFloat(document.querySelector(".C5").value) || 0;
  var C6 = parseFloat(document.querySelector(".C6").value) || 0;
  var C7 = parseFloat(document.querySelector(".C7").value) || 0;
  var C8 = document.querySelector(".C8");

  /// Value of B5 & C5
  var result_B5;
  if (B1 === "") {
    result_B5 = "";
  } else if (B1 === "Potassium_Deficit") {
    result_B5 = "Desired K+ (mEq/L)";
  } else {
    result_B5 = "Desired Na+ (mEq/L)";
  }
  B5.textContent = result_B5;

  /// Value of B6 & C6
  var result_B6;
  if (B1 === "") {
    result_B6 = "";
  } else if (B1 === "Potassium_Deficit") {
    result_B6 = "Current K+ (mEq/L)";
  } else {
    result_B6 = "Current Na+ (mEq/L)";
  }
  B6.textContent = result_B6;

  /// Value of B7 & C7
  var result_B7;
  if (B1 === "") {
    result_B7 = "";
  } else {
    result_B7 = "Weight (kg)";
  }
  B7.textContent = result_B7;

  /// Value of B8
  var result_B8;
  if (B1 === "") {
    result_B8 = "";
  } else if (B1 === "Potassium_Deficit") {
    result_B8 = "K+ Deficit (mEq)";
  } else {
    result_B8 = "Na+ Deficit (mEq)";
  }
  B8.textContent = result_B8;

  var J12 = 135;
  var J13 = 125;
  var J14 = C7;
  var J15 = (J12 - J13) * J14 * 0.6;

  var result_C8;
  try {
    if (B1 === "") {
      result_C8 = "";
    } else if (B1 === "Potassium_Deficit") {
      result_C8 = (C5 - C6) * C7 * 0.4;
    } else {
      result_C8 = J15;
    }

    // تقريب النتيجة إلى منزلة عشرية واحدة إذا كانت رقمية
    if (typeof result_C8 === "number") {
      result_C8 = result_C8.toFixed(1);
    }
  } catch (error) {
    result_C8 = "";
  }
  C8.textContent = result_C8;
}

document.querySelector(".B1").addEventListener("change", calculateResult);
document.querySelector(".C5").addEventListener("input", calculateResult);
document.querySelector(".C6").addEventListener("input", calculateResult);
document.querySelector(".C7").addEventListener("input", calculateResult);
