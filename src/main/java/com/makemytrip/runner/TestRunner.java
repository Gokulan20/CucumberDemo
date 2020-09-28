package com.makemytrip.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Gokulaa\\eclipse-workspace\\MakeMyTripSeleniumDemo-master\\src\\test\\resources\\com\\makemytrip\\features\\LoginMakemytripPersonalAccount.feature" //the path of the feature files
		,glue={"com.makemytrip.stepDefinitions"}, //the path of the step definition files
		format= {"pretty","html:test-outout"}
		
		
		)

public class TestRunner {

}
