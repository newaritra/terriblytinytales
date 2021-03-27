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
 
