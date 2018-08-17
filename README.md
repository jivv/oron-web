# order-online

  * Order-online is an application for distributors who waste their work force for daily order taking process.
  * To make things easier, the application helps the shops to order from distributors straight from a web app.
  * It allows distributor to make changes to their product and customer list.
  * Notify user with an SMS as soon as their order is confirmed using 2factor as sms gateway

## Technologies used are:
* Java
* Spring Boot
* MySql
* Gradle as build tool
* AWS Ec2 instance to host the spring boot application
* AWS S3 bucket for static website hosting of front-end application

## Steps to setup local development
Install the required technologies **Gradle**,**Java**,**MySql**,**Node**,**Npm**,**AngularCli**

# Backend Application:
* Clone the application code from [this repo](https://github.com/jivv/order-online.git)
* Navigate to application folder
* Run `gradle build`
* Navigate to build/libs folder
* Run the jar using `java -jar 'JAR NAME'`
# For development:
* Download Intellij and import the build.gradle file
* Run mainapplication

# Frontend Application:
* Clone the application code from [this repo](https://github.com/jivv/oron-web.git)
* Navigate to the application folder
* Run `npm install`
# For local development:
* Run `ng serve`
	* this will start a development server at port 4200 which hot reloads as soon as code changes occur
# For deployment:
* Run `ng build --prod`
	* this will generate application files along with index.html inside dist folder
* Copy all the files into your server directory
