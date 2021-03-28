# terriblytinytales
**The** app was made with the help of react JS acting as the frontend supporting all the UI components and the API calls to the server were handled with the help of node JS which made further calls to an external API provided by the company which returned the result and it was displayed on the frontend of the application.
### FRONTEND [REACT JS]
#### TECH USED:
1.React JS and its hooks<br/>
2.Axios
#### COMPONENTS:
##### 1.INPUTROLL [FORM ELEMENT TO INPUT ROLL NUMBERS]
![Form](https://user-images.githubusercontent.com/56667293/112734007-229d3c00-8f69-11eb-9927-9a308629a5ac.PNG)
  <br/>The form input element inputs the data with the help of controlled components.The form takes input in the form of commma separated roll numbers which is split with the help of string split function and stored in an array state. The array is passed down as a prop to the result component which handles it. The submit button renders the result component only on inputting something in the input box using conditional rendering.

##### 2.RESULT [DISPLAY THE OUTPUT IN A TABULAR FASHION]
![Result](https://user-images.githubusercontent.com/56667293/112734498-1cf52580-8f6c-11eb-8bb5-535e028e549b.PNG)
  <br/>The result component handles the array of roll numbers passed down as props to it by the InputRoll component. It sends the array to the local server created with node js in the form a JS object with "rollNumber" key and the array of roll numbers as the value, with the help of an axios post request. The response to the axios post request is handles by storing it as an array of Pass/Fail string array in a useState variable called resData. The resData array is then converted to a JSX table using the array map function and correlating every result to its corresponding roll number and displaying it as a table.

##### 3.LOADER [CSS ANIMATION WHILE FETCHING DATA]
![Loading](https://user-images.githubusercontent.com/56667293/112734911-a7d71f80-8f6e-11eb-80d2-bce3f5ce1bea.PNG)
<br/>The Loader components displays a Loading message while the api calls are being executed and since it takes time a loader animation is shown to keep the client a bit engaged while the table which displays the result, is being rendered. The loader animation is conditionally rendered when the resData array has some sort of value input in it which is only possible when the api call is completed and the array is assigned to the state.
 
##### OUTPUT!!
![terrible-snap](https://user-images.githubusercontent.com/56667293/112734959-fc7a9a80-8f6e-11eb-9299-3b291ce4db75.PNG)


### BACKEND [NODE JS]
#### TECH/DEPENDENCIES USED:
1.Node Js<br/>
2.Express
3.CORS

#### FUNCTIONALITIES:
The express module is installed in the backend and an express app is created is created. The app is used to handle the POST request that the axios request made from the frontend react app. It takes the incoming array and loops over each roll number and makes an external API call for each roll number. The response from the external API is pushed in an array and at the end of fetching all the results the response is is sent back to the frontend which handles it. The "cors" module was reuired in thenode js/express application because the API calls from the client side was not allowed due to data safety protocols and the calls needed to be made made from the server side using CORS.   

#### TEST CASES:
###### 1)5,6,9,12,18,20,25,30,32,36,37,38,40,42,45,47,49,50
![Result](https://user-images.githubusercontent.com/56667293/112735582-14ecb400-8f73-11eb-9c0d-e7309de4d803.PNG)
###### 2)1,2,3,4,5
![image](https://user-images.githubusercontent.com/56667293/112735620-73b22d80-8f73-11eb-8261-2f511384e6d3.png)
###### 3)1,2,3,james,js,5[Skips if not a number]
![image](https://user-images.githubusercontent.com/56667293/112750961-fcb77c00-8fe8-11eb-98d6-6d032736ea35.png)
###### 4)EMPTY FIELD
![Screenshot (63)](https://user-images.githubusercontent.com/56667293/112735691-f2a76600-8f73-11eb-83ce-eee1db28c514.png)

