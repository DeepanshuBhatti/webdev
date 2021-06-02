// Returns the number of days, weeks and months lived
function lifeInWeeks(age) {
  let days = age * 365;
  let weeks = age * 52;
  let months = age * 12;
  console.log(
    "You completed " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months"
  );
}

function getBMI() {
  let height = $(".height").val();
  let weight = $(".weight").val();
  console.log(parseInt(height));
  let ans = "";
  if (isNaN(parseFloat(height)) || isNaN(parseFloat(weight))) {
    ans = "INVALID INPUTS";
  } else {
    ans = bmiCalculator(weight, height);
  }
  $(".result").html(ans);
}

// Weight in Kg and Height in m
function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);
  if (isNaN(parseFloat(bmi))) {
    return "INVALID INPUTS";
  }

  let ans =
    "You are " +
    height +
    " m tall with wright " +
    weight +
    ". Your BMI is " +
    Math.round(bmi * 100) / 100 +
    ", so you ";
  if (bmi < 18.5) {
    return ans + "are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return ans + "have a normal weight.";
  }
  return ans + "are overweight.";
}

// Checks if the given year is a leap year or not
function isLeap(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

// Get Fibonacci Sequence
function getFibonacci(n) {
  if (n < 1) {
    return [];
  }

  if (n == 1) {
    return [0];
  }

  let a = [0, 1];
  for (let i = 2; i < n; i++) {
    let x = a[i - 1] + a[i - 2];
    a.push(x);
  }

  return a;
}

function IsNumeric(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;

  // For Decimal
  if (charCode == 46) return true;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  return true;
}
