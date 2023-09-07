# Home Task 1

# tasks
1. Create a function that will return date in UTC format getNextWorkingDate (excluding Saturday and Sunday)
// Example: if today is 07/28/2023 which is Friday function should return 07/31/2023 which is Monday in UTC format
2. Create a function that will generate and return new user data(email, password(13), firstName, lastName, phoneNumber).
3. Create a function that returns true if the data load contain key value
// Example of key & value product: ["test00000"];
// ## Data load example
// [
//     {
//         text: {
//             type: "requestTestData",
//             payload: { testAction: "exit" },
//         },
//         testResponse: null,
//     },
//     {
//         text: {
//             type: "requestTestData",
//             callback: window.submitTest,
//             testCallback: window.testError,
//         },
//         testResponse: null,
//     },
//     {
//         text: {
//             type: "requestTestData",
//             payload: { product: ["test00000"] },
//             testCallback: window.submitTest,
//         },
//         testResponse: null,
//     },
//     { text: { type: "test" }, response: null },
// ];

export const validateData = (key, value, load) => {
    return load.some(entry => {
        return (
          entry.text &&
          entry.text.payload &&
          entry.text.payload[key] &&
          JSON.stringify(entry.text.payload[key]) === JSON.stringify(value)
        );
      });
};
