describe("Person", function() {
  var person;

  beforeEach(function() {
    metricPerson = new Person({weight: 90, height: 186});
    imperialPerson = new Person({weight: 198 , height: 73});
  });

  it("should have weight of 90 kilograms", function() {
    expect(metricPerson.weight).toEqual(90);
  });

  it("should have height of 186 centimeters", function() {
    expect(metricPerson.height).toEqual(186);
  });
  it("should calculate BMI metric value", function() {
  metricPerson.calculate_bmi('metric');
  expect(metricPerson.bmiValue).toEqual(26.01);
});
it("should have a BMI Message", function() {
  metricPerson.calculate_bmi('metric');
  expect(metricPerson.bmiMessage).toEqual("Overweight");
});
it("should have weight of 198 pounds", function() {
  expect(imperialPerson.weight).toEqual(198);
});

it("should have height of 73 inches", function() {
  expect(imperialPerson.height).toEqual(73);
});
it("should calculate BMI imperial value", function() {
imperialPerson.calculate_bmi('imperial');
expect(imperialPerson.bmiValue).toEqual(26.12);
});

it("should have a BMI Message", function() {
  imperialPerson.calculate_bmi('imperial');
  expect(imperialPerson.bmiMessage).toEqual("Overweight");
});
});
