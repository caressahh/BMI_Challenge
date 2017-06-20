describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    metricPerson = new Person({weight: 90, height: 186});
    imperialPerson = new Person({weight: 198 , height: 73});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(metricPerson);
    expect(metricPerson.bmiValue).toEqual(26.01);
  });
  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(imperialPerson);
    expect(imperialPerson.bmiValue).toEqual(26.12);
  });


});
