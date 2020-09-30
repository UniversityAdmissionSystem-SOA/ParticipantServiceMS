package com.cg.stepdef;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddParticipantStepDefinition {
	public AddParticipantStepDefinition(){
		System.setProperty("webdriver.chrome.driver","C:\\Users\\acer\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
		driver=new ChromeDriver();
	}
	WebDriver driver;

	@Given("^user is on the add paticipant page\\.$")
	public void user_is_on_the_add_paticipant_page() throws Throwable {
		driver.get("http://localhost:4200/");
	}

	@When("^user inputs valid credentials\\.$")
	public void user_inputs_valid_credentials() throws Throwable {
		 WebElement rollNo=driver.findElement(By.name("rollNo"));
	     WebElement emailId=driver.findElement(By.name("emailId"));
	     WebElement scheduledProgramId=driver.findElement(By.name("scheduledProgramId"));   
	     WebElement btn=driver.findElement(By.className("btn"));
	     rollNo.sendKeys("1234");
	     emailId.sendKeys("abc@def.com");
	     scheduledProgramId.sendKeys("123456");
	     btn.click();
	}

	@Then("^Participant get added And Participant List will be displayed\\.$")
	public void participant_get_added_And_Participant_List_will_be_displayed() throws Throwable {
		String source=driver.getPageSource();
		Assert.assertTrue(source.contains("Participant List"));
	}

	@When("^user input email-id and scheduled program id But leave the roll number blank\\.$")
	public void user_input_email_id_and_scheduled_program_id_But_leave_the_roll_number_blank() throws Throwable {
		WebElement rollNo=driver.findElement(By.name("rollNo"));
	     WebElement emailId=driver.findElement(By.name("emailId"));
	     WebElement scheduledProgramId=driver.findElement(By.name("scheduledProgramId"));   
	     WebElement btn=driver.findElement(By.className("btn"));
	     rollNo.sendKeys("");
	     emailId.sendKeys("abc@def.com");
	     scheduledProgramId.sendKeys("123456");
	     btn.click();
	}

	@When("^user input roll number and scheduled program id But leave the email id blank\\.$")
	public void user_input_roll_number_and_scheduled_program_id_But_leave_the_email_id_blank() throws Throwable {
		WebElement rollNo=driver.findElement(By.name("rollNo"));
	     WebElement emailId=driver.findElement(By.name("emailId"));
	     WebElement scheduledProgramId=driver.findElement(By.name("scheduledProgramId"));   
	     WebElement btn=driver.findElement(By.className("btn"));
	     rollNo.sendKeys("1234");
	     emailId.sendKeys("");
	     scheduledProgramId.sendKeys("123456");
	     btn.click();
	}

	@When("^user input roll number and email id But leave the schedule program id blank\\.$")
	public void user_input_roll_number_and_email_id_But_leave_the_schedule_program_id_blank() throws Throwable {
		 WebElement rollNo=driver.findElement(By.name("rollNo"));
	     WebElement emailId=driver.findElement(By.name("emailId"));
	     WebElement scheduledProgramId=driver.findElement(By.name("scheduledProgramId"));   
	     WebElement btn=driver.findElement(By.className("btn"));
	     rollNo.sendKeys("1234");
	     emailId.sendKeys("abc@def.com");
	     scheduledProgramId.sendKeys("");
	     btn.click();
	}
	
	@Then("^a please fill out this field message pops up\\.$")
	public void a_please_fill_out_this_field_message_pops_up() throws Throwable {
		String error="Please fill out this field.";
    	WebElement errorDiv=driver.findElement(By.id("userErrmsg"));
    	String actualMsg=errorDiv.getText();
    	Assert.assertEquals(error,actualMsg);
	}


}
