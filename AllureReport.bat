xcopy C:\Users\Dipjyoti\WebstormProjects\TestAutomationProtractor\allure-results\*.* C:\Users\Dipjyoti\node_modules\jasmine-allure-reporter\allure-results\. /Y
cd C:\Users\Dipjyoti\node_modules\jasmine-allure-reporter
mvn site -Dallure.results_pattern=allure-results