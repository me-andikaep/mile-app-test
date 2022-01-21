# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

````````
1. Do you prefer vuejs or reactjs? Why ?
Reactjs. why?
- trending number 1 on stackoverflow and google trend.
- the same language for developing web applications (react js) and mobile applications (react native).
- reactjs is managed by facebook, while vuejs is managed by the community.

2. What complex things have you done in frontend development ?
- As long as I work as a front end the most difficult thing is to make order management.
in the business process, there are 4 types of orders, single order, multi pickup, multi drop off, multi pickup multi dropoff. each type of order has a different logic route.

3. why does a UI Developer need to know and understand UX? how far do you understand it?
- ux is very important. In my opinion, UX is not just a nice and neat appearance, but also very easy to understand, access, and easy navigation. so that ordinary people can easily use the application created.

4. Give your analysis results regarding https://taskdev.mile.app/login from the UI / UX side!
for  https://taskdev.mile.app/login:
- the display is responsive and there is a mobile display.
- the use of appropriate colors is not too flashy. it's just that the logo and image are a little blurry.
- background img overlap when responsive
- there are validations and error messages when inputting data. making it easier for users to find out the problem.



pertanyaan Logic:
~~~
6.a Swap the values of variables A and B
// terdapat 2 variabel A & B
A = 3
B = 5

// Tukar Nilai variabel A dan B, Syarat Tidak boleh menambah Variabel Baru

// Hasil yang diharapkan :
A = 5
B = 3

Jawab :
[A, B] = [B, A];

~~~
6.b Find the missing numbers from 1 to 100
numbers = [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

Jawab:
let missing = [];

for (var i = 1; i <= numbers.length; i++) {
	if (numbers.indexOf(i) === -1) {
		missing.push(i);
	}
}

console.log('missing', missing);

~~~
6.c return the number which is called more than 1
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 34, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99, 100];

Jawab:
let findDuplicates = (numbers) => {
	return numbers.filter((item, index) => numbers.indexOf(item) != index);
};

function findUnique(value, index, self) {
	return self.indexOf(value) === index;
}

let duplicate = findDuplicates(numbers);

let unique = duplicate.filter(findUnique);

console.log('findDuplicates', duplicate);
console.log('Unique  ', unique);


~~~
6.d 
array_code = ["1.", "1.1.", 1.2.", "1.3.", "1.4.", "1.1.1.", "1.1.2.", "1.1.3.", "1.2.1.", "1.2.2.", "1.3.1.", "1.3.2.", "1.3.3.", "1.3.4.", "1.4.1.", "1.4.3."]

// return :
object_code = 
        {
        "1":{
            "1":{
                "1":"1.1.1.", 
                "2":"1.1.2.", 
                "3":"1.1.3."
            }, 
            "2":{
                "1":"1.2.1.", 
                "2":"1.2.2."
            }, 
            "3":{
                "1":"1.3.1.", 
                "2":"1.3.2.", 
                "4":"1.3.4."
            }, 
            "4":{
                "1":"1.4.1.", 
                "3":"1.4.3."
            }
         }
Jawab:
let result = {};

for (let i = 0; i < array_code.length; i++) {
	const [first, sec, third] = array_code[i].split('.');
	if (!sec) result[first] = {};
	else if (result[first] && sec && !third) result[first][sec] = {};
	else if (result[first][sec] && third)
	result[first][sec][third] = array_code[i];
}

console.log('result  ', result);

````````
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
