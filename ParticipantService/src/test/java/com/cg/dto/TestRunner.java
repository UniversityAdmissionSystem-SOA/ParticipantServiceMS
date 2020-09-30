package com.cg.dto;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="./src/test/resources/ParticipantService"
,glue="com.cg.stepdef"
)
public class TestRunner {

}