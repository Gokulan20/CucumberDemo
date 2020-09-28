package com.makemytrip.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.makemytrip.qa.pages.LoginPage;
import com.makemytrip.qa.testbase.TestActions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginMakemytripPersonalAccount extends TestActions{
	
	static WebDriver driver;
	
	LoginPage login;
	LoginMakemytripPersonalAccount LoginPersonalAccount;
	
	
	//public LoginMakemytripPersonalAccount() {

		//super();
	//}
	
	
	/*
	 * LoginMakemytripPersonalAccount () {
	 *  login =new LoginPage();
	 * 
	 * }
	 */
	
	
	@Given("^user landed on makemytrip page$")
	public void user_landed_on_makemytrip_page() throws Throwable {
	   
		/*
		 * System.setProperty("webdriver.chrome.driver",
		 * "F:\\others\\Automation\\setups\\chromedriver5\\chromedriver.exe"); 
		 * driver = new ChromeDriver(); 
		 * driver.get("https://www.makemytrip.com/");
		 * Thread.sleep(5000); driver.manage().window().maximize(); Thread.sleep(5000);
		 */
		
		initialization();	
		
	}

	@And("^the user clicks on the Login or Create Account tab$")
	public  void the_user_clicks_on_the_Login_or_Create_Account_tab() throws Throwable {
		
		login =new LoginPage(driver);
		login.Loginpersonal();
		
	}

	@And("^user should see login popup window$")
	public void user_should_see_login_popup_window() throws Throwable {
	   
	}

	@When("^user enters the valid Email or Mobile Number$")
	public void user_enters_the_valid_Email_or_Mobile_Number() throws Throwable {
	   
	}

	@When("^click on continue button$")
	public void click_on_continue_button() throws Throwable {
	    
	}

	@Then("^user enter the password$")
	public void user_enter_the_password() throws Throwable {
	   
	}

	@Then("^user landed on makemytriphomepage$")
	public void user_landed_on_makemytriphomepage() throws Throwable {
	    
	}

}
