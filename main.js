const axios = window.axios;
/*
Task 01:
Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
*/
const values = [1, 2, 3, 4, 5];

const iterateWithAsyncAwait = async (array) => {

    for (let value of array) {

        await new Promise(resolve => setTimeout(() => { 

            console.log(value);
            resolve();

        }, 2000));  
    };
};
iterateWithAsyncAwait(values);


/*
Task 02:
Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
*/
const awaitCall = async () => {

    try {

        const apiResponse = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(apiResponse);
            
    } catch (error) {

        alert("Error !");
    };

};
awaitCall();


/*
Task 04:
Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.
*/
const concurrentRequests = async () => {

    try {

        const [response1, response2] = await Promise.all([

            axios.get("https://jsonplaceholder.typicode.com/todos/1"),
            axios.get("https://jsonplaceholder.typicode.com/posts")

        ]);

        const combinedResult = { response1, response2 };
        console.log(combinedResult);
            
    } catch (error) {

        alert("Error !");
    };

};
concurrentRequests();